import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@/mongodb/dbConnect'

import { getRoutes, createRoute } from '@/mongodb/controllers/router'

import advancedResults from '@/mongodb/middleware/advancedResults'
import Router from '@/mongodb/models/Router'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect()

  switch (req.method) {
    case 'GET':
      return advancedResults(Router, {
        path: 'page',
        select: 'title url',
      })(req, res, () => {
        getRoutes(req, res)
      })
    case 'POST':
      return createRoute(req, res)
    default:
      return res
        .status(405)
        .json({ success: false, message: 'Method not allowed' })
  }
}
