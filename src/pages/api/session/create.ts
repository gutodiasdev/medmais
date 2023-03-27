import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'

import { TOKEN_SECRET } from '@/infra/config'
import { prisma } from '@/infra/libs'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      try {
        const { email, password } = req.body
        const user = await prisma.user.findFirst({
          where: { email }
        })

        if (user === null) {
          return res.status(400).json({ message: 'Usuário ou senha estão incorretos!' })
        }

        const passwordMatch = await compare(password, user.password)

        if (passwordMatch === false) {
          return res.status(400).json({ message: 'Usuário ou senha estão incorretos!' })
        }

        const token = sign({ id: user.id, email: user.email, role: user.role }, TOKEN_SECRET, { expiresIn: '1d' })

        return res.status(200).json({ token })

      } catch (e: any) {
        return res.status(500).json({ message: 'Algo deu errado!' })
      }
    default:
      return res.status(400).json({ message: 'Método não disponível'})
  }
}