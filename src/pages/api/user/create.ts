import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/infra/libs'

type CreateUserInput = {
  email: string
  password: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      try {
        const { email, password } = req.body as CreateUserInput
        await prisma.user.create({
          data: {
            email,
            password
          }
        })
        return res.status(201).json({ message: 'Usuário criado com sucesso!' })
      } catch (e: any ) {
        return res.status(500).json({ error: e.stack })
      }
    break
    default:
      return res.status(400).json({ method: 'Método não disponível.' })
  }
}