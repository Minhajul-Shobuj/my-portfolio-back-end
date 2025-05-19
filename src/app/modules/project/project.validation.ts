import { z } from 'zod'

const projectSchemaValidation = z.object({
  body: z.object({
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    image: z.string(),
    liveLink: z.string(),
    repoLink: z.string(),
  }),
})
const updateprojectSchemaValidation = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    technologies: z.array(z.string()).optional(),
    image: z.string().optional(),
    liveLink: z.string().optional(),
    repoLink: z.string().optional(),
  }),
})

export const ProjectValidation = {
  projectSchemaValidation,
  updateprojectSchemaValidation,
}
