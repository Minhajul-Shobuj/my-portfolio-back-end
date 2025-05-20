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

export const SkillService = {
  createskillsInDB,
}
