import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { SkillValidation } from './skill.validation'
import { SkillController } from './skill.controller'

const router = express.Router()

router.post(
  '/',
  validateRequest(SkillValidation.skillValidationSchema),
  SkillController.createSkills,
)

export const SkillRoute = router
