import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { AuthValidation } from './auth.validation'
import { AuthController } from './auth.controller'

const router = express.Router()

router.post(
  '/login',
  validateRequest(AuthValidation.loginValidationSchema),
  AuthController.adminLogin,
)
router.post('/refresh-token', AuthController.refreshToken)

export const AuthRoute = router
