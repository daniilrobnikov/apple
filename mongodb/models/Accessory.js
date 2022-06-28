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
      required: [true, 'Accessory name is required'],
    },
    prices: {
      fullPrice: {
        type: Number,
        required: [true, 'Please add full price'],
        get: (v) => (v ? `$${(v / 100).toFixed(2)}` : undefined),
        set: (v) => v * 100,
      },
      monthlyPrice: {
        type: Number,
        default: undefined,
        get: (v) => (v ? `$${(v / 100).toFixed(2)}` : undefined),
        set: (v) => v * 100,
      },
      termLength: Number,
    },
    colors: {
      type: [
        {
          name: {
            type: String,
            required: [true, 'Please add color name'],
          },
          hex: {
            type: String,
            required: [true, 'Please add color hex'],
            match: [/^#([0-9a-f]{3}){1,2}$/i],
          },
          slug: {
            type: String,
            unique: true,
          },
        },
      ],
      default: undefined,
      minlength: 1,
    },
    images: {
      path: String,
      count: Number,
    },
    type: {
      name: {
        type: String,
        required: [true, 'Please add type name'],
        enum: ['Headphones', 'AirTag', 'AirTag Accessories'],
      },
      slug: {
        type: String,
        unique: true,
      },
    },
    brand: {
      type: String,
      required: [true, 'Please add a brand'],
      default: 'Apple',
    },
  },
  {
    timestamps: true,
    toJSON: { getters: true, setters: true },
  }
)

AccessorySchema.pre('save', function () {
  this.slug = slugify(this.name, {
    lower: true,
    remove: /[()]/g,
  })
  if (this.colors) {
    this.colors.forEach((color) => {
      color.slug = slugify(color.name, {
        lower: true,
        remove: /[()]/g,
      })
    })
  }
  this.type.slug = slugify(this.type.name, {
    lower: true,
    remove: /[()]/g,
  })
})

AccessorySchema.pre('findOneAndUpdate', function () {
  let data = this.getUpdate()

  if (data.name) {
    this.slug = slugify(data.name, {
      lower: true,
      remove: /[()]/g,
    })
  }

  if (data.colors) {
    this.colors.forEach((color) => {
      color.slug = slugify(color.name, {
        lower: true,
        remove: /[()]/g,
      })
    })
  }

  if (data.type) {
    this.type.slug = slugify(this.type.name, {
      lower: true,
      remove: /[()]/g,
    })
  }
})

export default mongoose.models.Accessory ||
  mongoose.model('Accessory', AccessorySchema)
