import { prisma } from '@/infra/libs'
import { NextApiRequest, NextApiResponse } from 'next'

type CreatePatientInputs = {
  patient_name?: string
  patient_rg?: string
  patient_age?: string
  patient_weight?: string
}

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'PUT':
      const inputs = req.body as CreatePatientInputs
      const { id } = req.query as { id: string }
      try {
        await prisma.patient.update({
          where: {
            id
          },
          data: {
            name: inputs?.patient_name,
            rg: inputs?.patient_rg,
            age: inputs?.patient_age,
            weight: inputs?.patient_weight
          }
        })

        return res.status(200).json({ message: 'Paciente atualizado com sucesso!' })
      } catch (e: any) {
        return res.status(500).json(e)
      }
    default:
      return res.status(400).json({ message: 'Method not available!' })
  }
}