import { prisma } from '@/infra/libs'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      try {
        const medics = await prisma.user.findMany({
          where: {
            isMedic: {
              isNot: null
            }
          },
          include: {
            isMedic: true
          }
        })
        return res.status(200).json(medics)
      } catch (e) {
        return res.status(500).json(e)
      }
    default:
      return res.status(400).json({ message: 'Method not allowed!' })
  }
}