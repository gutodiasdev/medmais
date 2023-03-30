import { api } from '@/infra/config'
import {
  Box,
  Grid,
  Heading, Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text
} from '@chakra-ui/react'
import { useQuery } from 'react-query'

type ViewPatientModalProps = {
  isOpen: boolean
  onClose: () => void
  userId: string | undefined
}

type FindUserResponse = {
  id: string
  name: string
  rg: string
  age: string
  weight: string
}

export function ViewPatientModal ({ isOpen, onClose, userId }: ViewPatientModalProps) {

  const { data, isLoading, isError } = useQuery(['patient', userId], async () => {
    const { data } = await api.get<FindUserResponse>(`/api/patient/find/${userId}`)
    return data
  })

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>
          <Heading
            as='h2'
            fontSize={'1.5rem'}
            color={'gray.600'}
          >
            Informações do paciente
          </Heading>
        </ModalHeader>
        <ModalBody>
          {
            isLoading ? (
              <Spinner />
            ) : (
              <Grid gap={6}>
                <Box>
                  <Heading
                    as='h3'
                    fontSize={'sm'}
                    color={'gray.600'}
                  >
                    Nome do paciente
                  </Heading>
                  <Text
                    as='h3'
                    fontSize={'md'}
                    color={'gray.600'}
                  >
                    {data?.name}
                  </Text>
                </Box>
                <Box>
                  <Heading
                    as='h3'
                    fontSize={'sm'}
                    color={'gray.600'}
                  >
                    RG
                  </Heading>
                  <Text
                    as='h3'
                    fontSize={'md'}
                    color={'gray.600'}
                  >
                    {data?.rg}
                  </Text>
                </Box>
                <Box>
                  <Heading
                    as='h3'
                    fontSize={'sm'}
                    color={'gray.600'}
                  >
                    Idade
                  </Heading>
                  <Text
                    as='h3'
                    fontSize={'md'}
                    color={'gray.600'}
                  >
                    {data?.age}
                  </Text>
                </Box>
                <Box>
                  <Heading
                    as='h3'
                    fontSize={'sm'}
                    color={'gray.600'}
                  >
                    Peso
                  </Heading>
                  <Text
                    as='h3'
                    fontSize={'md'}
                    color={'gray.600'}
                  >
                    {data?.weight} Kg
                  </Text>
                </Box>
              </Grid>
            )
          }
        </ModalBody>
        <ModalFooter>

        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}