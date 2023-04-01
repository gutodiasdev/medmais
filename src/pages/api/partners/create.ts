import { NextApiRequest, NextApiResponse } from 'next'

import { CreatePartnerInputs } from '@/domain/models'
import { prisma } from '@/infra/libs'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      const inputs = req.body as CreatePartnerInputs
      try {
        await prisma.partner.create({
          data: {
            name: inputs.name,
            responsible: inputs.resposible_name,
            responsibleEmail: inputs.responsible_email,
            responsiblePhone: inputs.responsible_phone,
            address: {
              create: {
                street: inputs.street,
                number: inputs.number,
                phone: inputs.phone,
                zipcode: inputs.zipcode
              }
            }
          }
        })

        return res.status(201).json({ message: 'Parceiro adicionado com sucesso!' })
      } catch (e: any) {
        return res.status(500).json(e)
      }
    default:
      return res.status(400).json({ message: 'Method not available!' })
  }
}