import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Text
} from '@chakra-ui/react'
import Link from 'next/link'

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
        <Button
          size={'xs'}
          variant={'outline'}
          colorScheme={'teal'}
          width={'30%'}
          as={Link}
          href={'/'}
        >
          Voltar
        </Button>
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
            size={'sm'}
          >
            Autorizo o contato via Email, WhatsApp ou SMS por parte da MedMais
          </Checkbox>
        </FormControl>
        <Box>
          <Button
            colorScheme={'teal'}
            type={'submit'}
            width={'100%'}
          >
            Cadastrar-se
          </Button>
          <Text fontSize={'0.75rem'} marginTop={{ lg: '32px' }} paddingRight={8}>
            Ao clicar em Cadastrar-se, você concorda com nossos {` `}
            <Text as={Link} textDecoration={'underline'} href={'/termos-de-uso'}>Termos de Uso</Text> e {` `}
            <Text as={Link} textDecoration={'underline'} href={'/politicas-de-privacidade'}>Políticas de Privacidade</Text>
          </Text>
        </Box>
        <Flex
          fontSize={'0.8rem'}
          gap={'8px'}
        >
          <Text
            as={Link}
            href={'/cadastro/medico'}
            _hover={{
              textDecoration: 'underline'
            }}
          >
            Sou médico
          </Text>
          |
          <Text
            as={Link}
            href={'/cadastro/empresa'}
            _hover={{
              textDecoration: 'underline'
            }}
          >
            Sou uma empresa
          </Text>
        </Flex>
      </Grid>
    </Grid>
  )
}