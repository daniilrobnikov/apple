import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@/mongodb/dbConnect'

import {
  getRoute,
  updateRoute,
  deleteRoute,
} from '@/mongodb/controllers/router'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect()

  switch (req.method) {
    case 'GET':
      return getRoute(req, res)
    case 'PUT':
      return updateRoute(req, res)
    case 'DELETE':
      return deleteRoute(req, res)
    default:
      return res
        .status(405)
        .json({ success: false, message: 'Method not allowed' })
  }
}
