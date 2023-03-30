import { api } from '@/infra/config'
import { queryClient } from '@/pages/_app'
import {
  Button, Flex, Heading, Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useToast
} from '@chakra-ui/react'
import { useMutation } from 'react-query'

type CreatePatientModalProps = {
  isOpen: boolean
  onClose: () => void
  userId: string | undefined
}


export function DeletePatientModal ({ isOpen, onClose, userId }: CreatePatientModalProps) {
  const toast = useToast()

  const mutation = useMutation(async () => {
    await api.delete(`/api/patient/delete/${userId}`)
  })

  const deleteUserHandler = async () => {
    try {
      await mutation.mutateAsync()
      queryClient.invalidateQueries(['patients'])
    } catch (e: any) {
      toast({
        status: 'error',
        description: e.code
      })
    } finally {
      onClose()
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>

        </ModalHeader>
        <ModalBody>
            <Heading
              as='h2'
              fontSize={'1.5rem'}
              color={'gray.600'}
            >
              Tem certeza que quer excluir o cadastro do paciente?
            </Heading>
            <Text
              fontSize={'1rem'}
              color={'gray.600'}
            >
              Fique atento(a), isso é irreversível.
            </Text>
            <Flex width={'100%'} gap={6}>
              <Button
                colorScheme={'red'}
                marginTop={'16px'}
                onClick={deleteUserHandler}
              >
                Cadastrar paciente
              </Button>
              <Button
                marginTop={'16px'}
                onClick={onClose}
              >
                Voltar
              </Button>
            </Flex>
        </ModalBody>
        <ModalFooter>

        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}