import { Box, Button, Grid, Heading, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'

export default function LoginNeeded () {
  return (
    <>
      <Head>
        <title>Login necessário</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Grid
        placeItems={'center'}
        height={'100vh'}
      >
        <VStack spacing={8}>
          <Heading
            as='h2'
            maxWidth={'60%'}
            textAlign={'center'}
            color={'gray.700'}
          >
            Desculpe, mas você precisa estar logado para acessar o painel de controle
          </Heading>
          <Box>
            <Button
              as={Link}
              href={'/'}
              colorScheme={'teal'}
            >
              Voltar para o login
            </Button>
          </Box>
        </VStack>
      </Grid>
    </>
  )
}