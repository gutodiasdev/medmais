import { Box, Heading, Text } from '@chakra-ui/react'

type PatientAlergiesProps = {
  patient: string | undefined
}

export function PatientAlergies({ patient }: PatientAlergiesProps) {

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