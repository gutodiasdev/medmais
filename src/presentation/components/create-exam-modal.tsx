import { CreateExamInput } from '@/domain/models'
import { api } from '@/infra/config'
import { queryClient } from '@/pages/_app'
import {
  Box,
  Button,
  FormControl,
  FormLabel, Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useToast,
  VStack
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import * as yup from 'yup'

type CreateExamModalProps = {
  isOpen: boolean
  onClose: () => void
}

const schema = yup.object({
  name: yup.string(),
  price: yup.string()
})

export function CreateExamModal ({ isOpen, onClose }: CreateExamModalProps) {
  const toast = useToast()

  const { register, handleSubmit } = useForm<CreateExamInput>({
    resolver: yupResolver(schema)
  })

  const mutation = useMutation(async (data: CreateExamInput) => {
    await api.post('/api/exam/create', data)
  })

  const submitHandler: SubmitHandler<CreateExamInput> = async (data) => {
    try {
      await mutation.mutateAsync(data)
      queryClient.invalidateQueries(['exams'])
    } catch (e: any) {
      toast({
        status: 'error',
        description: e.code
      })
    } finally {
      onClose()
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>
          <Heading
            as='h2'
            fontSize={'1.5rem'}
            color={'gray.600'}
          >
            Cadastro de paciente
          </Heading>
        </ModalHeader>
        <ModalBody>
          <VStack
            as='form'
            onSubmit={handleSubmit(submitHandler)}
          >
            <FormControl isRequired>
              <FormLabel>
                Nome do exame
              </FormLabel>
              <Input type={'text'} {...register('name')} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>
                Preço
              </FormLabel>
              <Input type={'text'} {...register('price')} />
            </FormControl>
            <Box>
              <Button
                colorScheme={'teal'}
                marginTop={'16px'}
                type={'submit'}
              >
                Cadastrar exame
              </Button>
            </Box>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}