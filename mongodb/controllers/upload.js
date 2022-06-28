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
  const type = req.query.type
  const slug = req.query.slug
  const color = `${req.query.color}-` || ''
  const filepath = `apple/accessories/${type}/${slug}`

  Object.keys(data.files).forEach(async (key, index) => {
    const file = data.files[key]
    if (key !== 'transparent') {
      await cloudinary.uploader.upload(file.filepath, {
        folder: filepath,
        public_id: `${slug}-${color}${index + 1}`,
        upload_preset: 'apple_product',
      })
    } else {
      await cloudinary.uploader.upload(file.filepath, {
        folder: filepath,
        public_id: `${slug}-${color}transparent`,
        upload_preset: 'apple_product_transparent',
      })
    }
  })

  res.status(200).json({ success: true })
})
/**
@desc    Upload file
@route   GET /api/upload
@access  Public */
export const uploadRouteImages = asyncHandler(async (req, res) => {
  const data = await new Promise((resolve, reject) => {
    const form = new IncomingForm()
    form.multiples = true
    const files = []
    const fields = {}
    form.on('field', function (field, value) {
      if (value !== '') {
        fields[field] = value
      }
    })
    form.on('file', function (field, file) {
      files.push(file)
    })
    form.parse(req, (err) => {
      if (err) return reject(err)
      resolve({ fields: fields, files: files })
    })
  })

  const { files, fields } = data
  if (!files) {
    throw new ErrorResponse('No files were uploaded', 400)
  }

  if (!fields.url) {
    throw new ErrorResponse('Page url is required', 400)
  }

  const filepath = `apple/router${fields.url}`

  console.log(data)

  const resFiles = []

  for (let i = 0; i < files.length; i++) {
    const file = files[i]

    if (file.originalFilename.includes('large')) {
      const fileRes = await cloudinary.uploader.upload(file.filepath, {
        folder: filepath,
        public_id: 'large',
        format: 'webp',
        crop: 'scale',
        quality: 'auto:best',
        width: fields.largeSizes.replaceAll('px', '').split(' ')[0],
        height: fields.largeSizes.replaceAll('px', '').split(' ')[1],
      })
      resFiles.push(file.size / fileRes.bytes)
    } else if (file.originalFilename.includes('medium')) {
      const fileRes = await cloudinary.uploader.upload(file.filepath, {
        folder: filepath,
        public_id: 'medium',
        format: 'webp',
        crop: 'scale',
        quality: 'auto:best',
        width: fields.mediumSizes.replaceAll('px', '').split(' ')[0],
        height: fields.mediumSizes.replaceAll('px', '').split(' ')[1],
      })
      resFiles.push(file.size / fileRes.bytes)
    } else if (file.originalFilename.includes('small')) {
      const fileRes = await cloudinary.uploader.upload(file.filepath, {
        folder: filepath,
        public_id: 'small',
        format: 'webp',
        crop: 'scale',
        quality: 'auto:best',
        width: fields.smallSizes.replaceAll('px', '').split(' ')[0],
        height: fields.smallSizes.replaceAll('px', '').split(' ')[1],
      })
      resFiles.push(file.size / fileRes.bytes)
      resFiles.push(fileRes.url.replace('/small.webp', ''))
    }
  }

  res.status(200).json({
    success: true,
    data: resFiles,
  })
})
