import Page from '@/mongodb/models/Page'
import advancedResults from '@/mongodb/middleware/advancedResults'

import { getPages, createPage } from '@/mongodb/controllers/pages'

import handler from '@/mongodb/nextConnect'

export default handler.get(advancedResults(Page), getPages).post(createPage)

// import ErrorResponse from '@/mongodb/utils/errorResponse'

// import Page from '@/mongodb/models/Page'

// import dbConnect from '@/mongodb/dbConnect'

// export default async function handler(req, res) {
//   await dbConnect()

//   return new Promise((resolve) => {
//     switch (req.method) {
//       case 'GET':
//         asyncHandler(advancedResults(Page))(req, res)
//         resolve()
//         break
//       default:
//         res.status(400).json({ success: false })
//         resolve()
//         break
//     }
//   })
// }

// const asyncHandler = (fn) => (req, res) => {
//   Promise.resolve(fn(req, res)).catch((err) => errorHandler(err, req, res))
// }

// const advancedResults = (model, populate) => async (req, res) => {
//   let query

//   // Copy req.query
//   const reqQuery = { ...req.query }

//   // Fields to exclude
//   const removeFields = ['select', 'sort', 'page', 'limit']

//   // Loop over removeFields and delete them from reqQuery
//   removeFields.forEach((param) => delete reqQuery[param])

//   // Create query string
//   let queryStr = JSON.stringify(reqQuery)

//   // Add $ sign to query string
//   queryStr = queryStr.replace(/\b(gte|gt|lte|lt|in)\b/g, (match) => `$${match}`)

//   // Finding resource
//   query = model.find(JSON.parse(queryStr))

//   // Select Fields
//   if (req.query.select) {
//     const fields = req.query.select.split(',').join(' ')
//     query = query.select(fields)
//   }

//   // Sort
//   if (req.query.sort) {
//     const sortBy = req.query.sort.split(',').join(' ')
//     query = query.sort(sortBy)
//   } else {
//     query = query.sort({ name: 1, createdAt: 1 })
//   }

//   // Pagination
//   const page = parseInt(req.query.page, 10) || 1
//   const limit = parseInt(req.query.limit, 10) || 25
//   const startIndex = (page - 1) * limit
//   const endIndex = page * limit
//   const total = await model.countDocuments()

//   query = query.skip(startIndex).limit(limit)

//   if (populate) {
//     query = query.populate(populate)
//   }

//   // Executing query
//   const results = await query

//   // Pagination result
//   const pagination = {}

//   if (endIndex < total) {
//     pagination.next = {
//       page: page + 1,
//       limit,
//     }
//   }

//   if (startIndex > 0) {
//     pagination.prev = {
//       page: page - 1,
//       limit,
//     }
//   }

//   var response = {
//     success: true,
//     count: results.length,
//     pagination,
//     data: results,
//   }

//   return res.status(200).json(response)
// }

// const errorHandler = (err, req, res) => {
//   let error = { ...err }
//   error.message = err.message

//   // Log to console for dev
//   console.log(err)

//   // Mongoose bad ObjectId
//   if (err.name === 'CastError') {
//     const message = `Resource not found`
//     error = new ErrorResponse(message, 404)
//   }

//   // Mongoose duplicate key
//   if (err.code === 11000) {
//     const message = 'Duplicate field value entered'
//     error = new ErrorResponse(message, 400)
//   }

//   // Mongoose validation error
//   if (err.name === 'ValidationError') {
//     const message = Object.values(err.errors).map((val) => val.message)
//     console.log(message)
//     error = new ErrorResponse(message, 400)
//   }

//   res.status(error.statusCode || 500).json({
//     success: false,
//     error: error.message || 'Server Error',
//   })
// }

// export const config = {
//   api: {
//     externalResolver: true,
//   },
// }
