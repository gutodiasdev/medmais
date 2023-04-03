import { prisma } from '@/infra/libs'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      const { searchTerm } = req.query as { searchTerm: string }

      try {
        const exams = await prisma.exam.findMany({
          where: {
            name: {
              contains: searchTerm,
              mode: 'insensitive'
            }
          }
        })
        return res.status(200).json(exams)
      } catch (e) {
        return res.status(500).json(e)
      }
    default:
      return res.status(400).json({ message: 'Method not allowed!' })
  }
}