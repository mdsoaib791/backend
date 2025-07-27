import { ProfileDTO } from "../dto/profile.dto";
import { ProfileModel } from "../models/profile.model";
import * as profileRepo from "../repositories/profile.repository";

export const getAllProfiles = async (): Promise<ProfileDTO[]> => {
  const profiles = await profileRepo.getAllProfiles();
  return profiles as ProfileDTO[];
};

export const getProfileById = async (id: number): Promise<ProfileDTO | null> => {
  return await profileRepo.getProfileById(id);
};

export const createProfile = async (
  userId: string,
  data: Omit<ProfileModel, 'id' | 'userId' | 'createdAt' | 'updatedAt'>
): Promise<ProfileDTO> => {
  return await profileRepo.createProfile(userId, data);
};

export const updateProfile = async (
  id: number,
  data: Partial<Omit<ProfileModel, 'id' | 'userId' | 'createdAt' | 'updatedAt'>>
): Promise<ProfileDTO> => {
  return await profileRepo.updateProfile(id, data);
};

export const deleteProfile = async (id: number): Promise<void> => {
  return await profileRepo.deleteProfile(id);
};
