import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@/mongodb/dbConnect'

import {
  getAccessory,
  updateAccessory,
  deleteAccessory,
} from '@/mongodb/controllers/accessories'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect()

  switch (req.method) {
    case 'GET':
      return getAccessory(req, res)
    case 'PUT':
      return updateAccessory(req, res)
    case 'DELETE':
      return deleteAccessory(req, res)
    default:
      return res
        .status(405)
        .json({ success: false, message: 'Method not allowed' })
  }
}
