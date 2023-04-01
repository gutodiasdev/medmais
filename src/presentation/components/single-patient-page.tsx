import { PatientLastAppointments, PatientLastExams, PatientSurgeries } from '@/presentation/components'
import { Box, Grid, Heading } from '@chakra-ui/react'

type SinglePatientPageProps = {
  data: {
    id: string
    name: string
    rg: string
    age: string
    weight: string
  } | undefined
}

export function SinglePatientPage({ data }: SinglePatientPageProps) {
  return (
    <>
      <Box
        backgroundColor={'white'}
        borderRadius={'xl'}
        boxShadow={{ lg: 'sm' }}
        marginY={4}
        padding={{ lg: 6 }}
      >
        <Heading
          as='span'
          fontSize={'xs'}
          fontWeight={'light'}
          color={'gray.500'}
          textTransform={'uppercase'}
          letterSpacing={{ lg: '1px' }}
        >
          Informações do paciente
        </Heading>
        <Grid
          paddingTop={'16px'}
          width={'100%'}
          gridTemplateColumns={{ lg: '50% 1fr 1fr 1fr' }}
        >
          <Box>
            <Heading
              as='span'
              fontSize={'2xs'}
              fontWeight={'medium'}
              color={'gray.500'}
              textTransform={'uppercase'}
            >
              Nome
            </Heading>
            <Heading as='h1' fontSize={'xl'} color={'gray.600'}>
              {data?.name}
            </Heading>
          </Box>
          <Box>
            <Heading
              as='span'
              fontSize={'2xs'}
              fontWeight={'medium'}
              color={'gray.500'}
              textTransform={'uppercase'}
            >
              Idade
            </Heading>
            <Heading as='h1' fontSize={'xl'} color={'gray.600'}>
              {data?.age}
            </Heading>
          </Box>
          <Box>
            <Heading
              as='span'
              fontSize={'2xs'}
              fontWeight={'medium'}
              color={'gray.500'}
              textTransform={'uppercase'}
            >
              Peso
            </Heading>
            <Heading as='h1' fontSize={'xl'} color={'gray.600'}>
              {data?.weight}Kg
            </Heading>
          </Box>
          <Box>
            <Heading
              as='span'
              fontSize={'2xs'}
              fontWeight={'medium'}
              color={'gray.500'}
              textTransform={'uppercase'}
            >
              Altura
            </Heading>
            <Heading as='h1' fontSize={'xl'} color={'gray.600'}>
              1.75m
            </Heading>
          </Box>
        </Grid>
      </Box>
      <Grid
        gridTemplateColumns={'1fr 1fr'}
        gap={{ lg: 4 }}
      >
        <Box
          backgroundColor={'white'}
          borderRadius={'xl'}
          boxShadow={{ lg: 'sm' }}
          marginY={4}
          padding={{ lg: 6 }}
        >
          <Heading
            as='span'
            fontSize={'xs'}
            fontWeight={'light'}
            color={'gray.500'}
            textTransform={'uppercase'}
            letterSpacing={{ lg: '1px' }}
          >
            Últimas consultas
          </Heading>
          <PatientLastAppointments patient={data?.id} />
        </Box>
        <Box
          backgroundColor={'white'}
          borderRadius={'xl'}
          boxShadow={{ lg: 'sm' }}
          marginY={4}
          padding={{ lg: 6 }}
        >
          <Heading
            as='span'
            fontSize={'xs'}
            fontWeight={'light'}
            color={'gray.500'}
            textTransform={'uppercase'}
            letterSpacing={{ lg: '1px' }}
          >
            Últimos exames
          </Heading>
          <PatientLastExams patient={data?.id} />
        </Box>
      </Grid>
      <Box
        backgroundColor={'white'}
        borderRadius={'xl'}
        boxShadow={{ lg: 'sm' }}
        marginY={4}
        padding={{ lg: 6 }}
      >
        <Heading
          as='span'
          fontSize={'xs'}
          fontWeight={'light'}
          color={'gray.500'}
          textTransform={'uppercase'}
          letterSpacing={{ lg: '1px' }}
        >
          Informações Críticas e Observações
        </Heading>
        <Grid
          paddingTop={'16px'}
          width={'100%'}
          gridTemplateColumns={{ lg: 'repeat(4, 1fr)' }}
        >
          <Box>
            <Heading
              as='span'
              fontSize={'2xs'}
              fontWeight={'medium'}
              color={'gray.500'}
              textTransform={'uppercase'}
            >
              Cirurgias
            </Heading>
            <PatientSurgeries patient={data?.id} />
          </Box>
          <Box>
            <Heading
              as='span'
              fontSize={'2xs'}
              fontWeight={'medium'}
              color={'gray.500'}
              textTransform={'uppercase'}
            >
              Alergias
            </Heading>

          </Box>
          <Box>
            <Heading
              as='span'
              fontSize={'2xs'}
              fontWeight={'medium'}
              color={'gray.500'}
              textTransform={'uppercase'}
            >
              Medicamentos
            </Heading>

          </Box>
          <Box>
            <Heading
              as='span'
              fontSize={'2xs'}
              fontWeight={'medium'}
              color={'gray.500'}
              textTransform={'uppercase'}
            >
              Outras condições
            </Heading>

          </Box>
        </Grid>
      </Box>
    </>
  )
}