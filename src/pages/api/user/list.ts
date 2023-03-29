import { prisma } from '@/infra/libs'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      try {
        const users = await prisma.user.findMany({})
        return res.status(200).json(users)
      } catch (error) {
        return res.status(500).json(error)
      }
    default:
      return res.status(400).json({ message: 'Method not allowed!' })
  }
}