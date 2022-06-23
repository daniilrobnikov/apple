import type { NextApiRequest, NextApiResponse } from 'next'

const asyncHandler =
  (fn) => (req: NextApiRequest, res: NextApiResponse, next) =>
    Promise.resolve(fn(req, res, next)).catch(next)

export default asyncHandler
