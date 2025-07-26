import { Request, Response } from "express";
import * as projectService from "../../services/project.service";

export const createProject = async (req: Request, res: Response) => {
  const { title, description, tech_stack, github_url, live_url, thumbnail } = req.body;
  const project = await projectService.createProject(title, description, tech_stack, github_url, live_url, thumbnail);
  res.status(201).json(project);
};

export const getAllProjects = async (_req: Request, res: Response) => {
  const projects = await projectService.getAllProjects();
  res.json(projects);
};

export const getProjectById = async (req: Request, res: Response) => {
  const project = await projectService.getProjectById(Number(req.params.id));
  if (!project) return res.status(404).json({ message: "Project not found" });
  res.json(project);
};

export const updateProject = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, tech_stack, github_url, live_url, thumbnail } = req.body;
  const updatedProject = await projectService.updateProject(id, title, description, tech_stack, github_url, live_url, thumbnail);
  res.json(updatedProject);
};

export const deleteProject = async (req: Request, res: Response) => {
  await projectService.deleteProject(Number(req.params.id));
  res.json({ message: "Project deleted" });
};
