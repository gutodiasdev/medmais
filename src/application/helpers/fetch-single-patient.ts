import { PatientsResponse } from '@/domain/models'
import { api } from '@/infra/config'

type FetchSinglePatientInput = {
  patientId: string
}

export const fetchSinglePatient = async (input: FetchSinglePatientInput): Promise<PatientsResponse> => {
  const { data } = await api.get<PatientsResponse>(`/api/patient/find/${input.patientId}`)
  return data
}