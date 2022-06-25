import mongoose from 'mongoose'

import slugify from 'slugify'

const AccessorySchema = mongoose.Schema(
  {
    slug: { type: String, unique: true },
    eyebrow: {
      type: String,
      enum: ['New', 'Free Engraving'],
    },
    name: {
      type: String,
      required: true,
    },
    prices: {
      fullPrice: {
        type: Number,
        required: [true, 'Please add full price'],
        get: (v) => `$${(v / 100).toFixed(2)}`,
        set: (v) => `$${v * 100}`,
      },
      monthlyPrice: {
        type: Number,
        get: (v) => `$${(v / 100).toFixed(2)}`,
        set: (v) => `$${v * 100}`,
      },
      termLength: Number,
    },
    colors: {
      type: [
        {
          label: {
            type: String,
            required: true,
          },
          query: {
            type: String,
            required: true,
            match: [/^#([0-9a-f]{3}){1,2}$/i],
          },
        },
      ],
      default: undefined,
      minlength: 1,
    },
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
    toJSON: { getters: true, setters: true },
  }
)

AccessorySchema.pre('save', function () {
  this.slug = slugify(this.name, { lower: true })
  this.prices.fullPrice = parseFloat(this.prices.fullPrice)
  this.prices.monthlyPrice = parseFloat(this.prices.monthlyPrice)
})

AccessorySchema.pre('findOneAndUpdate', function () {
  let data = this.getUpdate()
  if (data.name) {
    data.slug = slugify(data.name, {
      lower: true,
      remove: /[()]/g,
    })
  }
  this.set({ slug: data.slug })
})

export default mongoose.models.Accessory ||
  mongoose.model('Accessory', AccessorySchema)
