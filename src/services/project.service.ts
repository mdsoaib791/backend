import { ProjectDTO } from "../dto/project.dto";
import * as projectRepo from "../repositories/project.repository";

export const getAllProjects = async (): Promise<ProjectDTO[]> => {
  return await projectRepo.getAllProjects() as ProjectDTO[];
};

export const createProject = projectRepo.createProject as (...args: any[]) => Promise<ProjectDTO>;
export const getProjectById = projectRepo.getProjectById as (id: number) => Promise<ProjectDTO | null>;
export const updateProject = projectRepo.updateProject as (...args: any[]) => Promise<ProjectDTO>;
export const deleteProject = projectRepo.deleteProject;
