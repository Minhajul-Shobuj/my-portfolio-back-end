import { z } from 'zod'

const adminValidationSchema = z.object({
  body: z.object({
    email: z.string(),
    password: z.string(),
  }),
})

export const AdminValidation = {
  adminValidationSchema,
}
