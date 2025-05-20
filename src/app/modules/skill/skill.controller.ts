import { RequestHandler } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../utiles/catchAsync'
import sendResponse from '../../utiles/sendResponse'
import { SkillService } from './skill.service'
import { checkGivenId } from '../blog/blog.utiles'
import { Skill } from './skill.model'

const createSkills: RequestHandler = catchAsync(async (req, res) => {
  const result = await SkillService.createskillsInDB(req.body)
  sendResponse(res, {
    data: result,
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Skill created successfully',
  })
})

const getAllSkills: RequestHandler = catchAsync(async (req, res) => {
  const result = await SkillService.getAllSkillsFromDB()
  sendResponse(res, {
    success: true,
    data: result,
    message: 'Successfully get all Skills from database',
    statusCode: httpStatus.OK,
  })
})
const deleteSkill: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params
  checkGivenId(id)
  const project = await Skill.findById(id)
  if (!project) {
    throw new Error('project is already Deleted')
  }

  await SkillService.deleteSkillFromDb(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project deleted successfully',
  })
})
export const SkillController = {
  createSkills,
  getAllSkills,
  deleteSkill,
}
