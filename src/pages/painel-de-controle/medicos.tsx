import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  HStack, IconButton, Input,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tooltip,
  Tr,
  useToast
} from '@chakra-ui/react'
import { faker } from '@faker-js/faker'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { parseCookies } from 'nookies'
import { useState } from 'react'
import { AiOutlineEdit, AiOutlineEye } from 'react-icons/ai'
import { BiTrashAlt } from 'react-icons/bi'

import { DashboardLayout } from '@/presentation/components'

export default function DashboardMedics () {
  const toast = useToast()
  const [searchTerm, setSearchTerm] = useState('')

  const handlePatientSearch = () => {
    if (searchTerm !== '') {
      toast({
        status: 'success',
        description: searchTerm,
        duration: 1000
      })
    } else {
      toast({
        status: 'warning',
        description: 'Inseria o nome ou documento do paciente',
        duration: 1000
      })
    }
  }

  return (
    <>
      <Head>
        <title>MedMais - Painel de administração clínica</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <DashboardLayout>
        <Flex alignItems={'center'} width={'100%'} justifyContent={'space-between'}>
          <Heading as='h1' fontSize={'xl'} color={'gray.600'}>
            Médicos
          </Heading>
          <Button
            variant={'outline'}
            colorScheme={'teal'}
          >
            Adicionar médico
          </Button>
        </Flex>
        <Flex as='form' margin={'16px 0'} gap={'8px'} maxWidth={{ lg: '70%' }}>
          <FormControl>
            <Input type='text' onChange={(e) => setSearchTerm(e.target.value)} />
          </FormControl>
          <Button
            color={'white'}
            backgroundColor={'teal.400'}
            _hover={{
              backgroundColor: 'teal.500'
            }}
            onClick={handlePatientSearch}
            boxShadow={{ lg: 'lg'}}
          >
            Procurar
          </Button>
        </Flex>
        <Box
          border={'1px'}
          borderColor={'gray.200'}
          borderRadius={{ lg: 'xl' }}
        >
          <Table>
            <Thead>
              <Tr>
                <Th>Nome</Th>
                <Th>Especialidade</Th>
                <Th>CRM</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {Array.from({ length: 10 }).map((item, index) => {
                return (
                  <Tr key={index}>
                    <Td >{faker.name.fullName()}</Td>
                    <Td >{faker.random.word()}</Td>
                    <Td>{faker.random.numeric(6)}</Td>
                    <Td>
                      <HStack
                        justifyContent={'flex-end'}
                      >
                        <Tooltip label={'Ver médico'} borderRadius={'md'}>
                          <IconButton
                            aria-label='view-patient'
                            title='teste'
                            size={{ lg: 'sm' }}
                          >
                            <AiOutlineEye />
                          </IconButton>
                        </Tooltip>
                        <Tooltip label={'Editar médico'} borderRadius={'md'}>
                          <IconButton
                            aria-label='edit-patient'
                            size={{ lg: 'sm' }}
                          >
                            <AiOutlineEdit />
                          </IconButton>
                        </Tooltip>
                        <Tooltip label={'Excluir médico'} borderRadius={'md'} bg={'red'}>
                          <IconButton
                            aria-label='edit-patient'
                            size={{ lg: 'sm' }}
                          >
                            <BiTrashAlt />
                          </IconButton>
                        </Tooltip>
                      </HStack>
                    </Td>
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
        </Box>
      </DashboardLayout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx)

  if (cookies['medmais.access_token'] === undefined) {
    return {
      redirect: {
        destination: '/login-necessario',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}