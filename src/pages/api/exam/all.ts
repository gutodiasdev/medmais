import { prisma } from '@/infra/libs'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const exams = await prisma.exam.findMany()
    return res.status(200).json(exams)
  }

  return res.status(404).json({ message: 'Method not allowed!' })
}