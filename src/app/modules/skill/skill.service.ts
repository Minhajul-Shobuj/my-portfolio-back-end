import { TSkill } from './skill.interface'
import { Skill } from './skill.model'
const createskillsInDB = async (payload: TSkill) => {
  const existingSkill = await Skill.findOne({ title: payload.title })

  if (existingSkill) {
    existingSkill.skills.push(...payload.skills)
    await existingSkill.save()
    return existingSkill
  } else {
    const result = await Skill.create(payload)
    return result
  }
}
const getAllSkillsFromDB = async () => {
  const result = await Skill.find()
  return result
}
const deleteSkillFromDb = async (id: string) => {
  const result = await Skill.findByIdAndDelete(id)
  return result
}

export const SkillService = {
  createskillsInDB,
  getAllSkillsFromDB,
  deleteSkillFromDb,
}
