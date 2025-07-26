import { SkillDTO } from "../dto/skill.dto";
import * as skillRepo from "../repositories/skill.repository";

export const getAllSkills = async (): Promise<SkillDTO[]> => {
  return await skillRepo.getAllSkills() as SkillDTO[];
};

export const createSkill = skillRepo.createSkill as (...args: any[]) => Promise<SkillDTO>;
export const getSkillById = skillRepo.getSkillById as (id: string) => Promise<SkillDTO | null>;
export const updateSkill = skillRepo.updateSkill as (...args: any[]) => Promise<SkillDTO>;
export const deleteSkill = skillRepo.deleteSkill;
