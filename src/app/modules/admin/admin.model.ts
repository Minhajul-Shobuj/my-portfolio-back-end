import { model, Schema } from 'mongoose'
import { TAdmin } from './admin.interface'

const adminctSchema = new Schema<TAdmin>(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export const Admin = model<TAdmin>('Admin', adminctSchema)
