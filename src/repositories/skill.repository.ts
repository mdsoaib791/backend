import prisma from '../config/prisma';
import { SkillModel } from '../models/skill.model';


export const createSkill = async (
  name: string,
  category: string,
  icon_url: string,
  user_id: number
): Promise<SkillModel> => {
  return await prisma.skill.create({
    data: {
      name,
      category,
      icon_url,
      account: {
        connect: { id: user_id },
      },
    },
  });
};


export const getAllSkills = async (): Promise<SkillModel[]> => {
  return await prisma.skill.findMany();
};

export const getSkillById = async (id: string): Promise<SkillModel | null> => {
  return await prisma.skill.findUnique({ where: { id: Number(id) } });
};

export const updateSkill = async (
  id: string,
  name: string,
  category: string,
  icon_url: string
): Promise<SkillModel> => {
  return await prisma.skill.update({
    where: { id: Number(id) },
    data: { name, category, icon_url },
  });
};

export const deleteSkill = async (id: string): Promise<void> => {
  await prisma.skill.delete({ where: { id: Number(id) } });
};
