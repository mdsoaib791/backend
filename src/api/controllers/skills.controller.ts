import { Request, Response } from "express";
import * as skillService from "../../services/skill.service";

export const createSkill = async (req: Request, res: Response) => {
  const { name, category, icon_url } = req.body;
  const skill = await skillService.createSkill(name, category, icon_url);
  res.status(201).json(skill);
};

export const getAllSkills = async (_req: Request, res: Response) => {
  const skills = await skillService.getAllSkills();
  res.json(skills);
};

export const getSkillById = async (req: Request, res: Response) => {
  const skill = await skillService.getSkillById(req.params.id);
  if (!skill) return res.status(404).json({ message: "Skill not found" });
  res.json(skill);
};

export const updateSkill = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, category, icon_url } = req.body;
  const updatedSkill = await skillService.updateSkill(id, name, category, icon_url);
  res.json(updatedSkill);
};

export const deleteSkill = async (req: Request, res: Response) => {
  const { id } = req.params;
  await skillService.deleteSkill(id);
  res.json({ message: "Skill deleted" });
};
