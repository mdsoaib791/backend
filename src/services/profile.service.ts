import { ProfileDTO } from "../dto/profile.dto";
import * as profileRepo from "../repositories/profile.repository";

export const getAllProfiles = async (): Promise<ProfileDTO[]> => {
  return await profileRepo.getAllProfiles() as ProfileDTO[];
};

export const createProfile = profileRepo.createProfile as (...args: any[]) => Promise<ProfileDTO>;
 
export const getProfileById = (id: number): Promise<ProfileDTO | null> => {
  return profileRepo.getProfileById(id);
};

export const updateProfile = (
  id: number,
  full_name: string,
  title: string,
  bio?: string,
  profile_picture?: string
): Promise<ProfileDTO> => {
  return profileRepo.updateProfile(id, full_name, title, bio, profile_picture);
};

export const deleteProfile = (id: number): Promise<void> => {
  return profileRepo.deleteProfile(id);
};
