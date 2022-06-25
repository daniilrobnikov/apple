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
export const uploadFiles = asyncHandler(async (req, res) => {
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

  res.status(200).json({
    success: true,
    data: [large, medium, small],
  })
})

export const uploadAccessoryImages = asyncHandler(async (req, res) => {
  const data = await new Promise((resolve, reject) => {
    const form = new IncomingForm()

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err)
      resolve({ fields, files })
    })
  })

  if (!data.files) {
    throw new ErrorResponse('No files were uploaded', 400)
  }
  const slug = req.query.slug
  const filepath = `apple/accessories/headphones/${slug}`

  Object.keys(data.files).forEach(async (key, index) => {
    const file = data.files[key]
    if (key !== 'transparent') {
      const fileRes = await cloudinary.uploader.upload(file.filepath, {
        folder: filepath,
        public_id: `${slug}-${index + 1}`,
        upload_preset: 'apple_product',
      })
    } else {
      const fileRes = await cloudinary.uploader.upload(file.filepath, {
        folder: filepath,
        public_id: `${slug}-transparent`,
        upload_preset: 'apple_product_transparent',
      })
    }
  })

  res.status(200).json({ success: true })
})
