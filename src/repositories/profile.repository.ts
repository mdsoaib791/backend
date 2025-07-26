import prisma from "../config/prisma";
import { ProfileModel } from "../models/profile.model";

export const createProfile = async (
  user_id: number,
  full_name: string,
  title: string,
  bio?: string,
  profile_picture?: string
): Promise<ProfileModel> => {
  return await prisma.profile.create({
    data: {
      user_id,
      full_name,
      title,
      bio,
      profile_picture,
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
  full_name: string,
  title: string,
  bio?: string,
  profile_picture?: string
): Promise<ProfileModel> => {
  return await prisma.profile.update({
    where: { id },
    data: {
      full_name,
      title,
      bio,
      profile_picture,
    },
  });
};

export const deleteProfile = async (id: number): Promise<void> => {
  await prisma.profile.delete({ where: { id } });
};
