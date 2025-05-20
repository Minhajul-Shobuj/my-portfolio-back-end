import { z } from 'zod'

const skillValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    skills: z.array(z.string()),
  }),
})

export const SkillValidation = {
  skillValidationSchema,
}
