import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Grid,
  Input
} from '@chakra-ui/react'

export const UserRegisterForm = () => {
  return (
    <Grid
      height={'100vh'}
      alignItems={'center'}
    >
      <Grid
        as='form'
        width={{ lg: '50%' }}
        margin={'0 auto'}
        gap={'16px'}
      >
        <FormControl isRequired>
          <FormLabel
            fontSize={'0.8rem'}
          >
            Email
          </FormLabel>
          <Input type={'text'} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel
            fontSize={'0.8rem'}
          >
            Telefone
          </FormLabel>
          <Input type={'text'} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel
            fontSize={'0.8rem'}
          >
            Senha
          </FormLabel>
          <Input type={'password'} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel
            fontSize={'0.8rem'}
          >
            Confirme a senha
          </FormLabel>
          <Input type={'password'} />
        </FormControl>
        <FormControl isRequired>
          <Checkbox
            fontSize={'0.8rem'}
          >
            Autorizo o contato via email e WhatsApp por parte da MedMais
          </Checkbox>
        </FormControl>
        <Button
          colorScheme={'teal'}
          type={'submit'}
        >
          Cadastrar como paciente
        </Button>
      </Grid>
    </Grid>
  )
}