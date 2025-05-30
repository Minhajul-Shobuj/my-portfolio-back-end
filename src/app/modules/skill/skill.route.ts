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
router.get('/', SkillController.getAllSkills)

router.delete('/:id', SkillController.deleteSkill)

export const SkillRoute = router
