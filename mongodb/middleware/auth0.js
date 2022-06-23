import jwt from 'jsonwebtoken'
import asyncHandler from '@/mongodb/middleware/async'
import ErrorResponse from '@/mongodb/utils/errorResponse'
import User from '@/mongodb/models/User'

// Protect routes
const protect = asyncHandler(async (req, res, next) => {
  let token
  // Check if token is in header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    // Set token from header
    token = req.headers.authorization.split(' ')[1]
  } // Set token from cookie
  // else if (req.cookies.token) {
  //   token = req.cookies.token
  // }
  // If no token, return error
  if (!token) {
    return next(new ErrorResponse('Not authorized to access this route', 401))
  }
  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    console.log(decoded)
    // Add user from payload
    req.user = await User.findById(decoded.id)
    next()
  } catch (err) {
    return next(new ErrorResponse('Not authorized to access this route', 401))
  }
})

// Grant access to specific roles
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorResponse(
          `User role ${req.user.role} is not authorized to access this route`,
          403
        )
      )
    }
    next()
  }
}

export { protect, authorize }
