import type { NextApiRequest, NextApiResponse } from 'next'
import Router from '@/mongodb/models/Router'
import Page from '@/mongodb/models/Page'

import asyncHandler from '@/mongodb/middleware/async'
import ErrorResponse from '@/mongodb/utils/errorResponse'

// @desc    Get all routes
// @route   GET /api/router
// @access  Public
export const getRoutes = asyncHandler(
  async (req: NextApiRequest, res: NextApiResponse) => {
    return res.status(200).json(res.advancedResults)
  }
)

// @desc    Get route
// @route   GET /api/router/:id
// @access  Public
export const getRoute = asyncHandler(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const route = await Router.findById(req.query.id)

    if (!route) {
      throw new ErrorResponse(`Route not found with id of ${req.query.id}`, 404)
    }

    return res.status(200).json({ success: true, data: route })
  }
)

// @desc    Create an route
// @route   POST /api/router
// @access  Private
export const createRoute = asyncHandler(
  async (req: NextApiRequest, res: NextApiResponse) => {
    // Find page
    const page = await Page.findById(req.body.page)
    if (!page) {
      throw new ErrorResponse(`Page not found with id of ${req.body.page}`, 404)
    }
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
    const route = await Router.create(req.body)
    res.status(201).json({ success: true, data: route })
  }
)

// @desc    Update route
// @route   PUT /api/router/:id
// @access  Private
export const updateRoute = asyncHandler(
  async (req: NextApiRequest, res: NextApiResponse) => {
    // Find route
    let route = await Router.findById(req.query.id)
    if (!route) {
      throw new ErrorResponse(`Route not found with id of ${req.query.id}`, 404)
    }
    // Update accessory
    route = await Router.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
    })
    res.status(200).json({ success: true, data: route })
  }
)

// @desc    Delete route
// @route   DELETE /api/router/:id
// @access  Private
export const deleteRoute = asyncHandler(
  async (req: NextApiRequest, res: NextApiResponse) => {
    // Find route
    const route = await Router.findById(req.query.id)
    if (!route) {
      throw new ErrorResponse(`Route not found with id of ${req.query.id}`, 404)
    }
    // Delete route
    route.remove()
    res.status(200).json({ success: true, data: {} })
  }
)
