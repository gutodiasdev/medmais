import { prisma } from '@/infra/libs'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'DELETE':
      const { id } = req.query as { id: string }
      try {
        await prisma.user.delete({
          where: { id }
        })
        return res.status(200).send({})
      } catch (error) {
        return res.status(500).json(error)
      }
    default:
      return res.status(400).json({ message: 'Method not allowed!' })
  }
}