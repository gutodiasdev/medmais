import { ExamResponse } from '@/domain/models'
import { api } from '@/infra/config'

export async function fetchExamSearch (searchTerm: string | undefined) {
  const { data } = await api.get<ExamResponse[]>(`/api/exam/search?searchTerm=${searchTerm}`)
  return data
}