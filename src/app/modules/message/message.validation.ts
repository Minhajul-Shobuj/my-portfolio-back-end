import { z } from 'zod'

const messageSchemaValidation = z.object({
  body: z.object({
    name: z.string(),
    email: z.string(),
    message: z.string(),
  }),
})

export const MessageValidation = {
  messageSchemaValidation,
}
