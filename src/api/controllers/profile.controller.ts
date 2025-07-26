import { Request, Response } from "express";
import * as profileService from "../../services/profile.service";

export const createProfile = async (req: Request, res: Response) => {
  const { user_id, full_name, title, bio, profile_picture } = req.body;
  const profile = await profileService.createProfile(
    user_id,
    full_name,
    title,
    bio,
    profile_picture
  );
  res.status(201).json(profile);
};

export const getAllProfiles = async (_req: Request, res: Response) => {
  const profiles = await profileService.getAllProfiles();
  res.json(profiles);
};

export const getProfileById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const numericId = Number(id);

  if (isNaN(numericId)) {
    return res.status(400).json({ message: "Invalid profile ID" });
  }

  const profile = await profileService.getProfileById(numericId);
  if (!profile) {
    return res.status(404).json({ message: "Profile not found" });
  }

  res.json(profile);
};

export const updateProfile = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { full_name, title, bio, profile_picture } = req.body;
  const updated = await profileService.updateProfile(
    id,
    full_name,
    title,
    bio,
    profile_picture
  );
  res.json(updated);
};

export const deleteProfile = async (req: Request, res: Response) => {
  const { id } = req.params;
  await profileService.deleteProfile(Number(id));
  res.json({ message: "Profile deleted" });
};
