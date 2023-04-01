import { Box, Heading, Text } from '@chakra-ui/react'

type PatienOtherConditionsProps = {
  patient: string | undefined
}

export function PatienOtherConditions({ patient }: PatienOtherConditionsProps) {

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