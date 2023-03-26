import { Box, Flex, VStack } from '@chakra-ui/react'
import Link from 'next/link'

const menuLinks = [
  {
    name: 'Início',
    link: '/painel-de-controle'
  },
  {
    name: 'Pacientes',
    link: '/painel-de-controle/pacientes'
  },
  {
    name: 'Consultas',
    link: '/painel-de-controle/consultas'
  },
  {
    name: 'Exames',
    link: '/painel-de-controle/exames'
  },
  {
    name: 'Médicos',
    link: '/painel-de-controle/medicos'
  },
]

const Menu = () => {
  return (
    <VStack
      gap={'8px'}
    >
      {
        menuLinks.map((item, index) => {
          return (
            <Flex
              key={index}
              as={Link}
              href={item.link}
              width={'100%'}
              justifyContent={'center'}
              padding={'4px 0'}
              borderRadius={{ lg: 'md' }}
              color={'white'}
              _hover={{
                backgroundColor: 'teal.100',
                color: 'gray.900'
              }}
            >
              {item.name}
            </Flex>
          )
        })
      }
    </VStack>
  )
}

function DashboardVerticalMenu () {
  return (
    <Box
      padding={4}
      backgroundColor={'gray.50'}
      >
      <Box
        height={'95vh'}
        boxShadow={{ lg: 'xl' }}
        backgroundColor={'teal.400'}
        borderRadius={{ lg: 'xl' }}
        padding={4}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'stretch'}
      >
        <Menu />
      </Box>
    </Box>
  )
}

export { DashboardVerticalMenu }
