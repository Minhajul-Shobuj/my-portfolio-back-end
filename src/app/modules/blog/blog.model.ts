import { model, Schema } from 'mongoose'
import { TBlog } from './blog.interface'

const blogSchema = new Schema<TBlog>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      minlength: [5, 'Title must be at least 5 characters long'],
      maxlength: [100, 'Title cannot exceed 100 characters'],
      match: [
        /^[a-zA-Z0-9\s]+$/,
        'Title can only contain letters, numbers, and spaces',
      ],
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
)

export const Blog = model<TBlog>('Blog', blogSchema)
