import mongoose from 'mongoose'

const RouterSchema = new mongoose.Schema(
  {
    family: {
      type: String,
      required: [true, 'Please add a family'],
      default: 'all',
    },
    type: {
      type: String,
    },

    page: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Page',
      required: [true, 'Please add a page'],
    },

    layout: {
      type: String,
    },
    theme: {
      type: String,
    },
    background: {
      type: String,
    },

    imagePath: {
      type: String,
    },
    imagePosition: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.Router || mongoose.model('Router', RouterSchema)
