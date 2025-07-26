import { Request, Response } from "express";
import * as experienceService from "../../services/experience.service";

export const createExperience = async (req: Request, res: Response) => {
  try {
    const { company, position, description, start_date, end_date } = req.body;

    const newExperience = await experienceService.createExperience(
      company,
      position,
      description,
      new Date(start_date),
      end_date ? new Date(end_date) : undefined
    );

    res.status(201).json(newExperience);
  } catch (error: any) {
    res.status(500).json({ message: error.message || "Failed to create experience." });
  }
};

export const getAllExperiences = async (_req: Request, res: Response) => {
  try {
    const experiences = await experienceService.getAllExperiences();
    res.status(200).json(experiences);
  } catch (error: any) {
    res.status(500).json({ message: error.message || "Failed to fetch experiences." });
  }
};

export const getExperienceById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const experience = await experienceService.getExperienceById(id);

    if (!experience) {
      return res.status(404).json({ message: "Experience not found." });
    }

    res.status(200).json(experience);
  } catch (error: any) {
    res.status(500).json({ message: error.message || "Failed to fetch experience." });
  }
};

export const updateExperience = async (req: Request, res: Response) => {
  try {
    const { company, position, description, start_date, end_date } = req.body;
    const updated = await experienceService.updateExperience(
      req.params.id,
      company,
      position,
      description,
      new Date(start_date),
      end_date ? new Date(end_date) : undefined
    );

    res.status(200).json(updated);
  } catch (error: any) {
    res.status(500).json({ message: error.message || "Failed to update experience." });
  }
};

export const deleteExperience = async (req: Request, res: Response) => {
  try {
    await experienceService.deleteExperience(req.params.id);
    res.status(200).json({ message: "Experience deleted successfully." });
  } catch (error: any) {
    res.status(500).json({ message: error.message || "Failed to delete experience." });
  }
};
