import { ExperienceDTO } from "../dto/experience.dto";
import * as experienceRepo from "../repositories/experience.repository";

export const getAllExperiences = async (): Promise<ExperienceDTO[]> => {
  return await experienceRepo.getAllExperiences() as ExperienceDTO[];
};

export const createExperience = experienceRepo.createExperience as (...args: any[]) => Promise<ExperienceDTO>;
export const getExperienceById = experienceRepo.getExperienceById as (id: string) => Promise<ExperienceDTO | null>;
export const updateExperience = experienceRepo.updateExperience as (...args: any[]) => Promise<ExperienceDTO>;
export const deleteExperience = experienceRepo.deleteExperience;
