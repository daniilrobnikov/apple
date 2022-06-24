import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@/mongodb/dbConnect'

import { uploadFile } from '@/mongodb/controllers/upload'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect()

  switch (req.method) {
    case 'POST':
    case 'PUT':
      return uploadFile(req, res)
    default:
      return res
        .status(405)
        .json({ success: false, message: 'Method not allowed' })
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
}
