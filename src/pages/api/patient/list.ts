import { prisma } from '@/infra/libs'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      try {
        const patients = await prisma.patient.findMany({})
        return res.status(200).json(patients)
      } catch (e) {
        return res.status(500).json(e)
      }
    default:
      return res.status(400).json({ message: 'Method not allowed!' })
  }
}