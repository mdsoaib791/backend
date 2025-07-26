import { ProfileDTO } from "../dto/profile.dto";
import * as profileRepo from "../repositories/profile.repository";

export const getAllProfiles = async (): Promise<ProfileDTO[]> => {
  return await profileRepo.getAllProfiles() as ProfileDTO[];
};

export const createProfile = profileRepo.createProfile as (...args: any[]) => Promise<ProfileDTO>;
export const getProfileById = (id: number): Promise<ProfileDTO | null> => {
  return profileRepo.getProfileById(id);
};
export const updateProfile = profileRepo.updateProfile as (...args: any[]) => Promise<ProfileDTO>;
export const deleteProfile = profileRepo.deleteProfile;
