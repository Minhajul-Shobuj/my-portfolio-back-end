import { RequestHandler } from 'express'
import catchAsync from '../../utiles/catchAsync'
import { BlogService } from './blog.service'
import sendResponse from '../../utiles/sendResponse'
import httpStatus from 'http-status'
import { checkGivenId, isBlogExist } from './blog.utiles'

const createBlog: RequestHandler = catchAsync(async (req, res) => {
  const result = await BlogService.createBlogInDB(req.body)
  sendResponse(res, {
    data: result,
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Blog created successfully',
  })
})
const getAllBlogs: RequestHandler = catchAsync(async (req, res) => {
  const result = await BlogService.getAllBlogFromDB()
  sendResponse(res, {
    success: true,
    data: result,
    message: 'Successfully get all Blogs from database',
    statusCode: httpStatus.OK,
  })
})
const updateBlog: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params
  checkGivenId(id)
  await isBlogExist(id)

  const result = await BlogService.updateBlogInDb(id, req.body)
  sendResponse(res, {
    data: result,
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog updated successfully',
  })
})
const getSingleBlog: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params
  checkGivenId(id)
  await isBlogExist(id)

  const result = await BlogService.getSingleBlogFromDB(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    data: result,
    success: true,
    message: 'Blog retrived successfully',
  })
})
const deleteBlog: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params
  checkGivenId(id)
  await isBlogExist(id)

  await BlogService.deleteBlogFromDb(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog deleted successfully',
  })
})

export const BlogController = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
}
