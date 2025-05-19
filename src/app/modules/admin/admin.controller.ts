import { RequestHandler } from 'express'
import sendResponse from '../../utiles/sendResponse'
import httpStatus from 'http-status'
import catchAsync from '../../utiles/catchAsync'
import { AdminService } from './admin.service'

const createAdmin: RequestHandler = catchAsync(async (req, res) => {
  const result = await AdminService.createAdminInDB(req.body)
  sendResponse(res, {
    data: result,
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Admin created successfully',
  })
})

export const AdminController = {
  createAdmin,
}
