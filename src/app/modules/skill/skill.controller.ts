import { RequestHandler } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../utiles/catchAsync'
import sendResponse from '../../utiles/sendResponse'
import { SkillService } from './skill.service'

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
export const SkillController = {
  createSkills,
  getAllSkills,
}
