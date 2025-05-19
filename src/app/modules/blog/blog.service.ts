import { TBlog } from './blog.interface'
import { Blog } from './blog.model'

const createBlogInDB = async (payload: TBlog) => {
  const result = await Blog.create(payload)
  return result
}
const getAllBlogFromDB = async () => {
  const result = await Blog.find()
  return result
}
const getSingleBlogFromDB = async (blogId: string) => {
  const result = await Blog.findById(blogId)
  return result
}
const updateBlogInDb = async (
  id: string,
  payload: { title: string; content: string },
) => {
  const result = await Blog.findOneAndUpdate(
    { _id: id },
    { ...payload },
    { new: true, runValidators: true },
  )
  return result
}
const deleteBlogFromDb = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id)
  return result
}

export const BlogService = {
  createBlogInDB,
  getAllBlogFromDB,
  getSingleBlogFromDB,
  deleteBlogFromDb,
  updateBlogInDb,
}
