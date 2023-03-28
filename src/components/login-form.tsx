import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useToast
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

import { api } from '@/infra/config'
import { useRouter } from 'next/router'
import { setCookie } from 'nookies'
import { useMutation } from 'react-query'

type LoginFormInput ={
  email: string
  password: string
}
const schema = yup.object({
  email: yup.string().email('Insira um email válido'),
  password: yup.string().min(6, 'A senha precisa ter ao menos 6 caracteres')
})

function LoginForm() {
  const toast = useToast()
  const router = useRouter()

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormInput>({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const submitLogin = async (input: LoginFormInput) => {
    const { data } = await api.post<{ token: string }>('/api/session/create', input)
    return data
  }

  const mutation = useMutation(async (data: LoginFormInput) => {
      const result = await submitLogin(data)
      setCookie(null, 'access_token', result.token, { maxAge: 60 * 60 * 24 })
      router.push('/painel-de-controle')
  })

  const handleLogin: SubmitHandler<LoginFormInput> = async (data) => {
    try {
      mutation.mutateAsync(data)
    } catch (e: any) {
      toast({
        status: 'error',
        description: e
      })
    }
  }

  return (
    <Box display={'grid'} alignItems={'center'} width={'100%'} justifyContent={'center'} height={'100vh'}>
      <Box
        as='form'
        display={'grid'}
        minWidth={'400px'}
        maxWidth={'600px'}
        gap={'16px'}
        border={'1px'}
        borderRadius={8}
        borderColor={'teal.300'}
        padding={6}
        onSubmit={handleSubmit(handleLogin)}
      >
        <FormControl isInvalid={!!errors.email}>
          <FormLabel>Email</FormLabel>
          <Input
            type={'text'}
            {...register('email')}
          />
          <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.password}>
          <FormLabel>Senha</FormLabel>
          <Input
            type={'password'}
            {...register('password')}
          />
          <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
        </FormControl>
        <Button
          colorScheme={'teal'}
          type={'submit'}
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Box>
    </Box>
  )
}

export { LoginForm }
