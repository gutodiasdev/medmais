import { prisma } from '@/infra/libs'
import { NextApiRequest, NextApiResponse } from 'next'

type CreateExamInput = {
  name: string
  price: number
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, price } = req.body as CreateExamInput

    try {
      await prisma.exam.create({
        data: {
          name,
          price
        }
      })

      return res.status(201).end()
    } catch (e: any) {
      return res.status(500).json({ message: e.message })
    }
  }

  return res.status(400).json({ message: 'Method not allowed!' })
}