import { RequestHandler } from 'express'
import catchAsync from '../../utiles/catchAsync'
import httpStatus from 'http-status'
import sendResponse from '../../utiles/sendResponse'
import { MessageService } from './message.service'
import { checkGivenId } from '../blog/blog.utiles'
import { Message } from './message.model'

const postMessage: RequestHandler = catchAsync(async (req, res) => {
  const result = await MessageService.postMessageInDB(req.body)
  sendResponse(res, {
    data: result,
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Message sent successfully',
  })
})
const getAllMessages: RequestHandler = catchAsync(async (req, res) => {
  const result = await MessageService.getAllMessageFromDB()
  sendResponse(res, {
    success: true,
    data: result,
    message: 'Successfully get all Messages from database',
    statusCode: httpStatus.OK,
  })
})
const deleteMessage: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params
  checkGivenId(id)
  const message = await Message.findById(id)
  if (!message) {
    throw new Error('message is already Deleted')
  }

  await MessageService.deleteMessageFromDb(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Message deleted successfully',
  })
})

export const MessageController = {
  postMessage,
  getAllMessages,
  deleteMessage,
}
