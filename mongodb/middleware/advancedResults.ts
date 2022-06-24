import type { NextApiRequest, NextApiResponse } from 'next'

const advancedResults =
  (model, populate: string) =>
  async (req: NextApiRequest, res: NextApiResponse, next) => {
    let query

    // Copy req.query
    const reqQuery = { ...req.query }

    // Fields to exclude
    const removeFields = ['select', 'sort', 'page', 'limit']

    // Loop over removeFields and delete them from reqQuery
    removeFields.forEach((param) => delete reqQuery[param])

    // Create query string
    let queryStr = JSON.stringify(reqQuery)

    // Add $ sign to query string
    queryStr = queryStr.replace(
      /\b(gte|gt|lte|lt|in)\b/g,
      (match) => `$${match}`
    )

    // Finding resource
    query = model.find(JSON.parse(queryStr))

    // Select Fields
    if (req.query.select) {
      const fields = req.query.select.split(',').join(' ')
      query = query.select(fields)
    }

    // Sort
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ')
      query = query.sort(sortBy)
    } else {
      query = query.sort({ name: 1, createdAt: 1 })
    }

    // Pagination
    const page = parseInt(req.query.page, 10) || 1
    const limit = parseInt(req.query.limit, 10) || 25
    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    const total = await model.countDocuments()

    query = query.skip(startIndex).limit(limit)

    if (populate) {
      query = query.populate(populate)
    }

    // Executing query
    const results = await query

    // Pagination result
    const pagination = {}

    if (endIndex < total) {
      pagination.next = {
        page: page + 1,
        limit,
      }
    }

    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit,
      }
    }

    var response = {
      success: true,
      count: results.length,
      pagination,
      data: results,
    }

    res.status(200).json(response)

    return next
  }

export default advancedResults
