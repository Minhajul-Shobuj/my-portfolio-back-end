import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { ProjectValidation } from './project.validation'
import { ProjectController } from './project.controller'

const router = express.Router()

router.post(
  '/',
  validateRequest(ProjectValidation.projectSchemaValidation),
  ProjectController.createProject,
)
router.get('/', ProjectController.getAllProjects)
router.patch(
  '/:id',
  validateRequest(ProjectValidation.updateprojectSchemaValidation),
  ProjectController.updateProject,
)
router.get('/:id', ProjectController.getSingleProject)
router.delete('/:id', ProjectController.deleteProject)

export const ProjectRoute = router
