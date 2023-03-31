import { api } from '@/infra/config'
import { queryClient } from '@/pages/_app'
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
  Spinner,
  useToast,
  VStack
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import * as yup from 'yup'

type EditPatientModalProps = {
  isOpen: boolean
  onClose: () => void
  userId: string | undefined
}

type EditPatientInputs = {
  patient_name?: string
  patient_rg?: string
  patient_age?: string
  patient_weight?: string
}

type FindUserResponse = {
  id: string
  name: string
  rg: string
  age: string
  weight: string
}

const schema = yup.object({
  patient_name: yup.string().optional(),
  patient_rg: yup.string().optional(),
  patient_age: yup.string().optional(),
  patient_weight: yup.string().optional()
})

export function EditPatientModal ({ isOpen, onClose, userId }: EditPatientModalProps) {
  const toast = useToast()

  const { register, handleSubmit } = useForm<EditPatientInputs>({
    resolver: yupResolver(schema)
  })

  const mutation = useMutation(async (data: EditPatientInputs) => {
    await api.put(`/api/patient/edit/${userId}`, data)
  })

  const submitHandler: SubmitHandler<EditPatientInputs> = async (data) => {
    try {
      await mutation.mutateAsync(data)
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

  const { data, isLoading } = useQuery(['patient', userId], async () => {
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
            Atualizar paciente
          </Heading>
        </ModalHeader>
        <ModalBody>
          {
            isLoading ? (
              <Spinner />
            ) : (
              <VStack
                as='form'
                onSubmit={handleSubmit(submitHandler)}
              >
                <FormControl>
                  <FormLabel>
                    Nome do paciente
                  </FormLabel>
                  <Input
                    type={'text'}
                    {...register('patient_name')}
                    defaultValue={data?.name ?? undefined}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>
                    RG do paciente
                  </FormLabel>
                  <Input
                    type={'text'}
                    {...register('patient_rg')}
                    defaultValue={data?.rg ?? undefined}
                  />
                </FormControl>
                <Grid width={'100%'} gridTemplateColumns={'1fr 1fr'} gap={4}>
                  <FormControl>
                    <FormLabel>
                      Idade do paciente
                    </FormLabel>
                    <Input
                      type={'text'}
                      {...register('patient_age')}
                      defaultValue={data?.age ?? undefined}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>
                      Peso do paciente
                    </FormLabel>
                    <Input
                      type={'text'}
                      {...register('patient_weight')}
                      defaultValue={data?.weight ?? undefined}
                    />
                  </FormControl>
                </Grid>
                <Box>
                  <Button
                    colorScheme={'teal'}
                    marginTop={'16px'}
                    type={'submit'}
                  >
                    Atualizar paciente
                  </Button>
                </Box>
              </VStack>
            )
          }
        </ModalBody>
        <ModalFooter>

        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}