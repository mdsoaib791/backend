import prisma from "../config/prisma";
import { ProfileModel } from "../models/profile.model";

export const createProfile = async (
  userId: string,
  profileData: Omit<ProfileModel, 'id' | 'userId' | 'createdAt' | 'updatedAt'>
): Promise<ProfileModel> => {
  return await prisma.profile.create({
    data: {
      userId,
      ...profileData,
    },
  });
};

export const getAllProfiles = async (): Promise<ProfileModel[]> => {
  return await prisma.profile.findMany();
};

export const getProfileById = async (id: number): Promise<ProfileModel | null> => {
  return await prisma.profile.findUnique({
    where: { id },
  });
};

export const updateProfile = async (
  id: number,
  data: Partial<Omit<ProfileModel, 'id' | 'userId' | 'createdAt' | 'updatedAt'>>
): Promise<ProfileModel> => {
  return await prisma.profile.update({
    where: { id },
    data,
  });
};

export const deleteProfile = async (id: number): Promise<void> => {
  await prisma.profile.delete({
    where: { id },
  });
};
