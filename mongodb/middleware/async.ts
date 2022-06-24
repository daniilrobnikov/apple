import type { NextApiRequest, NextApiResponse } from 'next'
import errorHandler from './error'

const asyncHandler = (fn) => (req: NextApiRequest, res: NextApiResponse) => {
  return Promise.resolve(fn(req, res)).catch((err) =>
    errorHandler(err, req, res)
  )
}

export default asyncHandler
