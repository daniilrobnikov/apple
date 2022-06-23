import dbConnect from '@/mongodb/dbConnect'

import asyncHandler from '@/mongodb/middleware/async'
import ErrorResponse from '@/mongodb/utils/errorResponse'

import { v2 as cloudinary } from 'cloudinary'

import { IncomingForm } from 'formidable'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
})

/**
@desc    Upload file
@route   GET /api/upload
@access  Public */
export const uploadFile = asyncHandler(async (req, res, next) => {
  await dbConnect()

  const data = await new Promise((resolve, reject) => {
    const form = new IncomingForm()

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err)
      resolve({ fields, files })
    })
  })

  const filepath = 'lol/'
  console.log(data.files)

  const large = await cloudinary.uploader.upload(data.files.large.filepath, {
    folder: filepath,
    public_id: 'large',
    upload_preset: 'apple_large',
  })
  const medium = await cloudinary.uploader.upload(data.files.medium.filepath, {
    folder: filepath,
    public_id: 'medium',
    upload_preset: 'apple_medium',
  })
  const small = await cloudinary.uploader.upload(data.files.small.filepath, {
    folder: filepath,
    public_id: 'small',
    upload_preset: 'apple_small',
  })

  const large_test = await cloudinary.uploader.upload(
    data.files.large.filepath,
    {
      folder: filepath,
      public_id: 'large_test',
    }
  )
  const medium_test = await cloudinary.uploader.upload(
    data.files.medium.filepath,
    {
      folder: filepath,
      public_id: 'medium_test',
    }
  )
  const small_test = await cloudinary.uploader.upload(
    data.files.small.filepath,
    {
      folder: filepath,
      public_id: 'small_test',
    }
  )

  res.status(200).json({
    success: true,
    data: [large, large_test, medium, medium_test, small, small_test],
  })
})
