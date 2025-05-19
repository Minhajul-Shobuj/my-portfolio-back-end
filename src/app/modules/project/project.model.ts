import { model, Schema } from 'mongoose'
import { TProject } from './project.interface'

const projectSchema = new Schema<TProject>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: { type: [String], required: true },
    image: { type: String, required: true },
    liveLink: { type: String, required: true },
    repoLink: { type: String, required: true },
  },
  {
    timestamps: true,
  },
)

export const Project = model<TProject>('Project', projectSchema)
