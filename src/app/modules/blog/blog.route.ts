import express from 'express'
import { BlogController } from './blog.controller'
import validateRequest from '../../middlewares/validateRequest'
import { BlogValidation } from './blog.validation'
const router = express.Router()

router.post(
  '/',
  validateRequest(BlogValidation.blogSchemaValidation),
  BlogController.createBlog,
)
router.get('/', BlogController.getAllBlogs)
router.patch(
  '/:id',
  validateRequest(BlogValidation.updateBlogSchemaValidation),
  BlogController.updateBlog,
)
router.get('/:id', BlogController.getSingleBlog)
router.delete('/:id', BlogController.deleteBlog)

export const BlogRoute = router
