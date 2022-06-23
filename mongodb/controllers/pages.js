import dbConnect from '@/mongodb/dbConnect'
import Page from '@/mongodb/models/Page'

import asyncHandler from '@/mongodb/middleware/async'
import ErrorResponse from '@/mongodb/utils/errorResponse'

// @desc    Get all pages
// @route   GET /api/pages
// @access  Public
export const getPages = asyncHandler(async (req, res, next) => {
  await dbConnect()

  res.status(200).json(res.advancedResults)
})

// @desc    Get page
// @route   GET /api/page/:id
// @access  Public
export const getPage = asyncHandler(async (req, res, next) => {
  await dbConnect()

  const page = await Page.findById(req.query.id)

  if (!page) {
    return next(
      new ErrorResponse(`Page not found with id of ${req.query.id}`, 404)
    )
  }

  return res.status(200).json({ success: true, data: page })
})

// @desc    Create an page
// @route   POST /api/pages
// @access  Private
export const createPage = asyncHandler(async (req, res, next) => {
  await dbConnect()

  // // Add user to req.body
  // req.body.user = req.user.id

  // // Check for published bootcamp
  // const publishedBootcamp = await Bootcamp.findOne({ user: req.user.id })

  // // If the user is not an admin, they can only add one bootcamp
  // if (publishedBootcamp && req.user.role !== 'admin') {
  //   return next(
  //     new ErrorResponse(
  //       `The user with ID ${req.user.id} has already published a bootcamp`,
  //       400
  //     )
  //   )
  // }
  const page = await Page.create(req.body)
  res.status(201).json({ success: true, data: page })
})

// @desc    Update page
// @route   PUT /api/pages/:id
// @access  Private
export const updatePage = asyncHandler(async (req, res, next) => {
  await dbConnect()

  // Find page
  let page = await Page.findById(req.query.id)
  if (!page) {
    return next(
      new ErrorResponse(`Page not found with id of ${req.query.id}`, 404)
    )
  }
  // Update accessory
  page = await Page.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
    runValidators: true,
  })
  res.status(200).json({ success: true, data: page })
})

// @desc    Delete page
// @route   DELETE /api/pages/:id
// @access  Private
export const deletePage = asyncHandler(async (req, res, next) => {
  await dbConnect()

  // Find page
  const page = await Page.findById(req.query.id)
  if (!page) {
    return next(
      new ErrorResponse(`Page not found with id of ${req.query.id}`, 404)
    )
  }
  // Delete page
  page.remove()
  res.status(200).json({ success: true, data: {} })
})
