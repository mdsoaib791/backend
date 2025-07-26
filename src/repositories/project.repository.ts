import prisma from "../config/prisma";
import { ProjectModel } from "../models/project.model";

export const createProject = async (
  title: string,
  description: string,
  tech_stack: string[],
  user_id: number,
  github_url?: string,
  live_url?: string,
  thumbnail?: string
): Promise<ProjectModel> => {
  return await prisma.project.create({
    data: {
      title,
      description,
      tech_stack,
      user_id,
      github_url,
      live_url,
      thumbnail,
    },
  });
};

export const getAllProjects = async (): Promise<ProjectModel[]> => {
  return await prisma.project.findMany({
    orderBy: { created_at: "desc" },
  });
};

export const getProjectById = async (id: number): Promise<ProjectModel | null> => {
  return await prisma.project.findUnique({
    where: { id },
  });
};

export const updateProject = async (
  id: number,
  title: string,
  description: string,
  tech_stack: string[],
  github_url?: string,
  live_url?: string,
  thumbnail?: string
): Promise<ProjectModel> => {
  return await prisma.project.update({
    where: { id },
    data: {
      title,
      description,
      tech_stack,
      github_url,
      live_url,
      thumbnail,
    },
  });
};

export const deleteProject = async (id: number): Promise<void> => {
  await prisma.project.delete({
    where: { id },
  });
};
