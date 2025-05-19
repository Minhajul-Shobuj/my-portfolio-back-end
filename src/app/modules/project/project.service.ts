import { TProject } from './project.interface'
import { Project } from './project.model'

const createProjectInDB = async (payload: TProject) => {
  const result = await Project.create(payload)
  return result
}
const getAllProjectFromDB = async () => {
  const result = await Project.find()
  return result
}
const getSingleProjectFromDB = async (projectId: string) => {
  const result = await Project.findById(projectId)
  return result
}
const updateProjectInDb = async (
  id: string,
  payload: { title: string; content: string },
) => {
  const result = await Project.findOneAndUpdate(
    { _id: id },
    { ...payload },
    { new: true, runValidators: true },
  )
  return result
}
const deleteProjectFromDb = async (id: string) => {
  const result = await Project.findByIdAndDelete(id)
  return result
}

export const ProjectService = {
  createProjectInDB,
  getAllProjectFromDB,
  getSingleProjectFromDB,
  updateProjectInDb,
  deleteProjectFromDb,
}
