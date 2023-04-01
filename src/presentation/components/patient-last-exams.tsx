import { Box, Heading, Text } from '@chakra-ui/react'

type PatientLastExamsProps = {
  patient: string | undefined
}

export function PatientLastExams({ patient }: PatientLastExamsProps) {

  if (patient === undefined) {
    return (
      <Box
        paddingTop={'16px'}
      >
        <Heading as='h4' fontSize={'1rem'}>
          Não foi possível encontrar informações
        </Heading>
      </Box>
    )
  }



  return (
    <Box
      paddingTop={'16px'}
    >
      <Text>
        {patient}
      </Text>
    </Box>
  )
}