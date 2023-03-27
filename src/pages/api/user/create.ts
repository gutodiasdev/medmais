import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/infra/libs'
import { hash } from 'bcrypt'

type CreateUserInput = {
  email: string
  password: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      try {
        const { email, password: unhashedPassword } = req.body as CreateUserInput
        const password = await hash(unhashedPassword, 10)

        await prisma.user.create({
          data: {
            email,
            password
          }
        })
        return res.status(201).json({ message: 'Usuário criado com sucesso!' })
      } catch (e: any ) {
        return res.status(500).json({ error: e })
      }
    default:
      return res.status(400).json({ method: 'Método não disponível.' })
  }
}