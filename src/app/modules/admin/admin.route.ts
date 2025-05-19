import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { AdminValidation } from './admin.validation'
import { AdminController } from './admin.controller'
import auth from '../../middlewares/auth'

const router = express.Router()

router.post(
  '/',
  auth('Admin'),
  validateRequest(AdminValidation.adminValidationSchema),
  AdminController.createAdmin,
)

export const AdminRoute = router
