import { api } from '@/infra/config'
import {
  Box,
  Button,
  FormControl,
  FormLabel, Grid, Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
  VStack
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import * as yup from 'yup'

type CreatePatientModalProps = {
  isOpen: boolean
  onClose: () => void
}

type CreatePatientInputs = {
  patient_name: string
  patient_rg: string
  patient_age: string
  patient_weight: string
}

const schema = yup.object({
  patient_name: yup.string(),
  patient_rg: yup.string(),
  patient_age: yup.string(),
  patient_weight: yup.string()
})

export function CreatePatientModal ({ isOpen, onClose }: CreatePatientModalProps) {
  const toast = useToast()

  const { register, handleSubmit } = useForm<CreatePatientInputs>({
    resolver: yupResolver(schema)
  })

  const mutation = useMutation(async (data: CreatePatientInputs) => {
    await api.post('/patient/create', data)
  })

  const submitHandler: SubmitHandler<CreatePatientInputs> = async (data) => {
    await mutation.mutateAsync(data).catch(() => {
      toast({
        status: 'error',
        description: 'Não foi possível cadastrar o paciente.'
      })
    }).finally(onClose)
  }

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
            Cadastro de paciente
          </Heading>
        </ModalHeader>
        <ModalBody>
          <VStack
            as='form'
            onSubmit={handleSubmit(submitHandler)}
          >
            <FormControl isRequired>
              <FormLabel>
                Nome do paciente
              </FormLabel>
              <Input type={'text'} {...register('patient_name')} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>
                RG do paciente
              </FormLabel>
              <Input type={'text'} {...register('patient_rg')} />
            </FormControl>
            <Grid width={'100%'} gridTemplateColumns={'1fr 1fr'} gap={4}>
              <FormControl isRequired>
                <FormLabel>
                  Idade do paciente
                </FormLabel>
                <Input type={'text'} {...register('patient_age')} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>
                  Peso do paciente
                </FormLabel>
                <Input type={'text'} {...register('patient_weight')} />
              </FormControl>
            </Grid>
            <Box>
              <Button
                colorScheme={'teal'}
                marginTop={'16px'}
                type={'submit'}
              >
                Cadastrar paciente
              </Button>
            </Box>
          </VStack>
        </ModalBody>
        <ModalFooter>

        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}