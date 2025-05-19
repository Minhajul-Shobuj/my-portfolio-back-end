import express from 'express'
import { BlogController } from './blog.controller'
import validateRequest from '../../middlewares/validateRequest'
import { BlogValidation } from './blog.validation'
import auth from '../../middlewares/auth'
const router = express.Router()

router.post(
  '/',
  auth('Admin'),
  validateRequest(BlogValidation.blogSchemaValidation),
  BlogController.createBlog,
)
router.get('/', BlogController.getAllBlogs)
router.patch(
  '/:id',
  auth('Admin'),
  validateRequest(BlogValidation.updateBlogSchemaValidation),
  BlogController.updateBlog,
)
router.get('/:id', BlogController.getSingleBlog)
router.delete('/:id', auth('Admin'), BlogController.deleteBlog)

export const BlogRoute = router
