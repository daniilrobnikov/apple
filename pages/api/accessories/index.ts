import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@/mongodb/dbConnect'

import {
  getAccessories,
  createAccessory,
} from '@/mongodb/controllers/accessories'

import advancedResults from '@/mongodb/middleware/advancedResults'
import Accessory from '@/mongodb/models/Accessory'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect()

  switch (req.method) {
    case 'GET':
      return advancedResults(Accessory)(req, res, () => {
        getAccessories(req, res)
      })
    case 'POST':
      return createAccessory(req, res)
    default:
      return res
        .status(405)
        .json({ success: false, message: 'Method not allowed' })
  }
}
