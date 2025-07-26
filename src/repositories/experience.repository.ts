import prisma from "../config/prisma";
import { ExperienceModel } from "../models/experience.model";

export const createExperience = async (
  user_id: number,
  company: string,
  position: string,
  description: string,
  start_date: Date,
  end_date?: Date
): Promise<ExperienceModel> => {
  return await prisma.experience.create({
    data: {
      user_id,
      company,
      position,
      description,
      start_date,
      end_date,
    },
  });
};

export const getAllExperiences = async (): Promise<ExperienceModel[]> => {
  return await prisma.experience.findMany({
    orderBy: { start_date: "desc" },
  });
};

export const getExperienceById = async (id: string): Promise<ExperienceModel | null> => {
  return await prisma.experience.findUnique({
    where: { id: Number(id) },
  });
};

export const updateExperience = async (
  id: string,
  company: string,
  position: string,
  description: string,
  start_date: Date,
  end_date?: Date
): Promise<ExperienceModel> => {
  return await prisma.experience.update({
    where: { id: Number(id) },
    data: {
      company,
      position,
      description,
      start_date,
      end_date,
    },
  });
};

export const deleteExperience = async (id: string): Promise<void> => {
  await prisma.experience.delete({
    where: { id: Number(id) },
  });
};
