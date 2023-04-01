import { Box, Flex, Stack } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BiHomeAlt } from 'react-icons/bi'
import { BsPeopleFill } from 'react-icons/bs'
import { GiMedicalPackAlt } from 'react-icons/gi'
import { RiFlaskLine, RiStethoscopeFill } from 'react-icons/ri'

const menuLinks = [
  {
    name: 'Início',
    link: '/painel-de-controle',
    icon: <BiHomeAlt />
  },
  {
    name: 'Pacientes',
    link: '/painel-de-controle/pacientes',
    icon: <BsPeopleFill />
  },
  {
    name: 'Exames',
    link: '/painel-de-controle/exames',
    icon: <RiFlaskLine />
  },
  {
    name: 'Consultas',
    link: '/painel-de-controle/consultas',
    icon: <GiMedicalPackAlt />
  },
  {
    name: 'Médicos',
    link: '/painel-de-controle/medicos',
    icon: <RiStethoscopeFill />
  },
]

const Menu = () => {
  const router = useRouter()
  return (
    <Stack>
      {
        menuLinks.map((item, index) => {
          return (
            <Flex
              key={index}
              as={Link}
              fontSize={'0.925rem'}
              fontWeight={'semibold'}
              href={item.link}
              width={'100%'}
              alignItems={'center'}
              justifyContent={'center'}
              padding={'4px 0'}
              backgroundColor={router.pathname === item.link ? 'teal.400' : 'none'}
              borderRadius={{ lg: 'md' }}
              color={'white'}
              _hover={{
                backgroundColor: 'teal.400',
              }}
            >
              <Flex
                gap={2}
                alignItems={'center'}
                marginLeft={'8px'}
                width={'100%'}
              >
                {item.icon}
                {item.name}
              </Flex>
            </Flex>
          )
        })
      }
    </Stack>
  )
}

function DashboardVerticalMenu() {
  return (
    <Box
      backgroundColor={'gray.50'}
      position={'relative'}
    >
      <Box
        height={'100vh'}
        boxShadow={{ lg: 'xl' }}
        backgroundColor={'teal.500'}
        borderRadius={{ lg: '0 24px 24px 0' }}
        padding={'16px 8px'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'stretch'}
        position={'sticky'}
      >
        <Box
          position={'relative'}
          width={'80px'}
          height={'20px'}
          margin={'0 auto'}
          marginBottom={'16px'}
        >
          <Image
            src={'/dashboard-logo.png'}
            alt={'Logo menu vertical'}
            fill
          />
        </Box>
        <Menu />
      </Box>
    </Box>
  )
}

export { DashboardVerticalMenu }
