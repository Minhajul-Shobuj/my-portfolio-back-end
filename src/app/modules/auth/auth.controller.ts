import { RequestHandler } from 'express'
import status from 'http-status'
import catchAsync from '../../utiles/catchAsync'
import sendResponse from '../../utiles/sendResponse'
import { AuthService } from './auth.service'

const adminLogin: RequestHandler = catchAsync(async (req, res) => {
  const result = await AuthService.adminLogin(req.body)
  const { refreshToken } = result
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
  })
  sendResponse(res, {
    data: {
      accessToken: result.accessToken,
    },
    message: 'Successfully logged in',
    statusCode: status.OK,
    success: true,
  })
})
const refreshToken: RequestHandler = catchAsync(async (req, res) => {
  const cookie = req.cookies.refreshToken
  const result = await AuthService.refreshToken(cookie)
  sendResponse(res, {
    data: result,
    message: 'Successfully logged in',
    statusCode: status.OK,
    success: true,
  })
})

export const AuthController = {
  adminLogin,
  refreshToken,
}
