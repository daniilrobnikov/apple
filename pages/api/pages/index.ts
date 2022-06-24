import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@/mongodb/dbConnect'

import { getPages, createPage } from '@/mongodb/controllers/pages'

import advancedResults from '@/mongodb/middleware/advancedResults'
import Page from '@/mongodb/models/Page'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect()

  switch (req.method) {
    case 'GET':
      return advancedResults(Page)(req, res, () => {
        getPages(req, res)
      })
    case 'POST':
      return createPage(req, res)
    default:
      return res
        .status(405)
        .json({ success: false, message: 'Method not allowed' })
  }
}
