import { prisma } from '@/infra/libs'
import { NextApiRequest, NextApiResponse } from 'next'

type UpdateMedicInputs = {
  email: string
  password: string
  name: string
  crm: string
  speciality: string,
}

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'PUT':
      const { id } = req.query as { id: string }
      const inputs = req.body as UpdateMedicInputs

      try {
        await prisma.user.update({
          where: { id },
          data: {
            email: inputs.email,
            password: inputs.password,
            isMedic: {
              update: {
                crm: inputs.crm,
                name: inputs.name,
                speciality: inputs.speciality
              }
            }
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