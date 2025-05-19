import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { ProjectValidation } from './project.validation'
import { ProjectController } from './project.controller'
import auth from '../../middlewares/auth'

const router = express.Router()

router.post(
  '/',
  auth('Admin'),
  validateRequest(ProjectValidation.projectSchemaValidation),
  ProjectController.createProject,
)
router.get('/', ProjectController.getAllProjects)
router.patch(
  '/:id',
  auth('Admin'),
  validateRequest(ProjectValidation.updateprojectSchemaValidation),
  ProjectController.updateProject,
)
router.get('/:id', ProjectController.getSingleProject)
router.delete('/:id', auth('Admin'), ProjectController.deleteProject)

export const ProjectRoute = router
