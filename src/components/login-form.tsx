import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'

function LoginForm() {
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
      >
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type={'text'} />
        </FormControl>
        <FormControl>
          <FormLabel>Senha</FormLabel>
          <Input type={'password'} />
        </FormControl>
        <Button colorScheme={'teal'}>
          Entrar
        </Button>
      </Box>
    </Box>
  )
}

export { LoginForm }
