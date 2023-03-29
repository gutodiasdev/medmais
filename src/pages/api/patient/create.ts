import { prisma } from '@/infra/libs'
import { NextApiRequest, NextApiResponse } from 'next'

type CreatePatientInputs = {
  patient_name: string
  patient_rg: string
  patient_age: string
  patient_weight: string
}

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      const inputs = req.body as CreatePatientInputs
      try {
        await prisma.patient.create({
          data: {
            name: inputs.patient_name,
            rg: inputs.patient_rg,
            age: inputs.patient_age,
            weight: inputs.patient_weight
          }
        })

        return res.status(201).json({ message: 'Paciente criado com sucesso!' })
      } catch (e: any) {
        return res.status(500).json(e)
      }
    default:
      return res.status(400).json({ message: 'Method not available!' })
  }
}