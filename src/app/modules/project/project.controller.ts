import { RequestHandler } from 'express'
import catchAsync from '../../utiles/catchAsync'
import sendResponse from '../../utiles/sendResponse'
import httpStatus from 'http-status'
import { checkGivenId } from '../blog/blog.utiles'
import { ProjectService } from './project.service'
import { Project } from './project.model'

const createProject: RequestHandler = catchAsync(async (req, res) => {
  const result = await ProjectService.createProjectInDB(req.body)
  sendResponse(res, {
    data: result,
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Project created successfully',
  })
})
const getAllProjects: RequestHandler = catchAsync(async (req, res) => {
  const result = await ProjectService.getAllProjectFromDB()
  sendResponse(res, {
    success: true,
    data: result,
    message: 'Successfully get all Projects from database',
    statusCode: httpStatus.OK,
  })
})
const updateProject: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params
  checkGivenId(id)
  const project = await Project.findById(id)
  if (!project) {
    throw new Error('project is already Deleted')
  }

  const result = await ProjectService.updateProjectInDb(id, req.body)
  sendResponse(res, {
    data: result,
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project updated successfully',
  })
})
const getSingleProject: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params
  checkGivenId(id)
  const project = await Project.findById(id)
  if (!project) {
    throw new Error('project is already Deleted')
  }

  const result = await ProjectService.getSingleProjectFromDB(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    data: result,
    success: true,
    message: 'Project retrived successfully',
  })
})
const deleteProject: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params
  checkGivenId(id)
  const project = await Project.findById(id)
  if (!project) {
    throw new Error('project is already Deleted')
  }

  await ProjectService.deleteProjectFromDb(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project deleted successfully',
  })
})

export const ProjectController = {
  createProject,
  getAllProjects,
  getSingleProject,
  deleteProject,
  updateProject,
}
