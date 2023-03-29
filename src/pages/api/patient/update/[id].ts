import { prisma } from '@/infra/libs'
import { NextApiRequest, NextApiResponse } from 'next'

type PatientUpdateInputs = {
  patient_name: string
  patient_rg: string
  patient_age: string
  patient_weight: string
}

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'PUT':
      const { id } = req.query as { id: string }
      const inputs = req.body as PatientUpdateInputs

      try {
        await prisma.patient.update({
          where: { id },
          data: {
            name: inputs.patient_name,
            rg: inputs.patient_rg,
            age: inputs.patient_age,
            weight: inputs.patient_weight
          }
        })

        return res.status(200).json({ message: 'Atualizado com sucesso!' })
      } catch (error) {
        return res.status(500).json({ message: error })
      }
    default:
      return res.status(400).json({ message: 'Method no allowed!' })
  }
}