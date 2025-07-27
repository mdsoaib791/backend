import { Request, Response } from "express";
import * as profileService from "../../services/profile.service";

// ✅ Create Profile
export const createProfile = async (req: Request, res: Response) => {
  try {
    const {
      userId,
      firstName,
      lastName,
      dateOfBirth,
      gender,
      bio,
      avatarUrl,
    } = req.body;

    const profile = await profileService.createProfile(userId, {
      firstName,
      lastName,
      dateOfBirth,
      gender,
      bio,
      avatarUrl,
    });

    res.status(201).json(profile);
  } catch (error) {
    console.error("Create profile failed:", error);
    res.status(500).json({ message: "Failed to create profile" });
  }
};

// ✅ Get All Profiles
export const getAllProfiles = async (_req: Request, res: Response) => {
  try {
    const profiles = await profileService.getAllProfiles();
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch profiles" });
  }
};

// ✅ Get Profile by ID
export const getProfileById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid profile ID" });

    const profile = await profileService.getProfileById(id);
    if (!profile) return res.status(404).json({ message: "Profile not found" });

    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch profile" });
  }
};

// ✅ Update Profile
export const updateProfile = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid profile ID" });

    const {
      firstName,
      lastName,
      dateOfBirth,
      gender,
      bio,
      avatarUrl,
    } = req.body;

    const updated = await profileService.updateProfile(id, {
      firstName,
      lastName,
      dateOfBirth,
      gender,
      bio,
      avatarUrl,
    });

    res.json(updated);
  } catch (error) {
    console.error("Update profile failed:", error);
    res.status(500).json({ message: "Failed to update profile" });
  }
};

// ✅ Delete Profile
export const deleteProfile = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid profile ID" });

    await profileService.deleteProfile(id);
    res.json({ message: "Profile deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete profile" });
  }
};
