import { Box, Flex, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

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
    name: 'Exames',
    link: '/painel-de-controle/exames'
  },
  {
    name: 'Consultas',
    link: '/painel-de-controle/consultas'
  },
  {
    name: 'Médicos',
    link: '/painel-de-controle/medicos'
  },
]

const Menu = () => {
  const router = useRouter()
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
              backgroundColor={router.pathname === item.link ? 'teal.100' : 'none'}
              borderRadius={{ lg: 'md' }}
              color={router.pathname === item.link ? 'gray.600' : 'white'}
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
      position={'relative'}
    >
      <Box
        height={'94vh'}
        boxShadow={{ lg: 'xl' }}
        backgroundColor={'teal.400'}
        borderRadius={{ lg: 'xl' }}
        padding={4}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'stretch'}
        position={'sticky'}
      >
        <Menu />
      </Box>
    </Box>
  )
}

export { DashboardVerticalMenu }
