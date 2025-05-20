import { model, Schema } from 'mongoose'
import { TSkill } from './skill.interface'

const skillSchema = new Schema<TSkill>(
  {
    title: {
      type: String,
      required: true,
    },
    skills: {
      type: [],
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export const Skill = model<TSkill>('Skill', skillSchema)
