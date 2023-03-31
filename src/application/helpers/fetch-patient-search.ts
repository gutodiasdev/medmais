import { PatientsResponse } from '@/domain/models'
import { api } from '@/infra/config'

export async function fetchPatientSearch (searchTerm: string | undefined) {
  const { data } = await api.get<PatientsResponse[]>(`/api/patient/search?searchTerm=${searchTerm}`)
  return data
}