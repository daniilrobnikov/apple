import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@/mongodb/dbConnect'

import { getPage, updatePage, deletePage } from '@/mongodb/controllers/pages'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect()

  switch (req.method) {
    case 'GET':
      return getPage(req, res)
    case 'PUT':
      return updatePage(req, res)
    case 'DELETE':
      return deletePage(req, res)
    default:
      return res
        .status(405)
        .json({ success: false, message: 'Method not allowed' })
  }
}
