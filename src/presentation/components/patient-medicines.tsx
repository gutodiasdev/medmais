import { Box, Heading, Text } from '@chakra-ui/react'

type PatientMedicinesProps = {
  patient: string | undefined
}

export function PatientMedicines({ patient }: PatientMedicinesProps) {

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
      <Text
        fontSize={'12px'}
      >
        {patient}
      </Text>
    </Box>
  )
}