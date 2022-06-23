import mongoose from 'mongoose'

const PageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
      unique: true,
      trim: true,
      default: 'Apple',
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
      maxlength: [500, 'Description can not be more than 500 characters'],
      default:
        'Discover the innovative world of Apple and shop everything iPhone, iPad, Apple Watch, Mac, and Apple TV, plus explore accessories, entertainment, and expert device support.',
    },
    keywords: {
      type: String,
      required: [true, 'Please add a keywords'],
      default:
        'apple, iphone, mac, ipad, apple watch, apple tv, accessories, entertainment, expert device support',
    },
    url: {
      type: String,
      unique: true,
      required: [true, 'Please add a url'],
    },
    content: {
      type: [
        {
          title: String,
          query: String,
        },
      ],
      default: undefined,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.Page || mongoose.model('Page', PageSchema)
