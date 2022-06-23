import dbConnect from '@/mongodb/dbConnect'
import Accessory from '@/mongodb/models/Accessory'

import asyncHandler from '@/mongodb/middleware/async'
import ErrorResponse from '@/mongodb/utils/errorResponse'
/**
@desc    Get all accessories
@route   GET /api/accessories
@access  Public */
export const getAccessories = asyncHandler(async (req, res, next) => {
  await dbConnect()

  res.status(200).json(JSON.stringify(res.advancedResults))
})
/**
@desc    Get an accessory
@route   GET /api/accessories/:slug
@access  Public */
export const getAccessory = asyncHandler(async (req, res, next) => {
  await dbConnect()

  const accessory = await Accessory.findOne({ slug: req.query.slug })

  if (!accessory) {
    return next(
      new ErrorResponse(
        `Accessory not found with slug of ${req.query.slug}`,
        404
      )
    )
  }

  return res.status(200).json({ success: true, data: accessory })
})
/**
@desc    Create an accessory
@route   POST /api/accessories
@access  Private */
export const createAccessory = asyncHandler(async (req, res, next) => {
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
  const accessory = await Accessory.create(req.body)
  res.status(201).json({ success: true, data: accessory })
})
/**
@desc    Update an accessory
@route   PUT /api/accessories/:slug
@access  Private */
export const updateAccessory = asyncHandler(async (req, res, next) => {
  // Find accessory
  let accessory = await Accessory.findOne({ slug: req.query.slug })
  if (!accessory) {
    return next(
      new ErrorResponse(
        `Accessory not found with slug of ${req.query.slug}`,
        404
      )
    )
  }
  // Update accessory
  accessory = await Accessory.findOneAndUpdate(
    { slug: req.query.slug },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  )
  res.status(200).json({ success: true, data: accessory })
})
/**
@desc    Delete an accessory
@route   DELETE /api/accessories/:slug
@access  Private */
export const deleteAccessory = asyncHandler(async (req, res, next) => {
  // Find accessory
  const accessory = await Accessory.findOne({ slug: req.query.slug })
  if (!accessory) {
    return next(
      new ErrorResponse(
        `Accessory not found with slug of ${req.query.slug}`,
        404
      )
    )
  }
  // Delete accessory
  accessory.remove()
  res.status(200).json({ success: true, data: {} })
})
