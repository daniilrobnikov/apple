import { NextApiRequest, NextApiResponse } from 'next'

import nextConnect from 'next-connect'

import errorHandler from '@/mongodb/middleware/error'

import cors from 'cors'

const handler = nextConnect<NextApiRequest, NextApiResponse>({
  onError: errorHandler,
  onNoMatch: (req, res) => {
    res.status(404).end(`${req.method} method is not allowed on ${req.url}`)
  },
}).use(cors())

export default handler
