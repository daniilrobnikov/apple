import mongoose from 'mongoose'

import slugify from 'slugify'

const AccessorySchema = mongoose.Schema(
  {
    slug: { type: String, unique: true },
    eyebrow: String,
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: [true, 'Please add a price'],
    },
    prices: {
      fullPrice: { type: Number, required: true },
      monthlyPrice: Number,
      termLength: Number,
    },
    colors: {
      type: [String],
      required: true,
      default: undefined,
      match: [/^#([0-9a-f]{3}){1,2}$/i],
      minlength: 1,
    },
    // images: {
    //   type: [String],
    //   required: true,
    //   maxlength: 6,
    // },

    type: {
      type: String,
      required: true,
      enum: ['Headphones'],
    },
    brand: {
      type: String,
      required: true,
      default: 'Apple',
    },
  },
  {
    timestamps: true,
  }
)

AccessorySchema.pre('save', function () {
  //next
  this.slug = slugify(this.name, { lower: true })
  // next()
})

export default mongoose.models.Accessory ||
  mongoose.model('Accessory', AccessorySchema)
