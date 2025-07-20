import prisma from '../config/prisma';
import { User } from '../models/user.model';


export const findByEmail = async (email: string): Promise<User | null> => {
  return await prisma.user.findFirst({
    where: {
      account: {
        email: email
      }
    },
    include: {
      account: true
    }
  });
};


export const createUser = async (
  account_id: number,
  name: string,
  phone?: string,
  address?: string,
  dob?: Date
): Promise<User> => {
  return await prisma.user.create({
    data: {
      account_id,
      name,
      phone,
      address,
      dob,
    },
  });
};


export const getAllUsers = async (): Promise<Omit<User, 'password'>[]> => {
  return await prisma.user.findMany();
};


export const getUserById = async (id: string): Promise<User | null> => {
  return await prisma.user.findUnique({ where: { id } });
};


export const updateUser = async (
  id: string,
  name: string,
  phone?: string,
  address?: string,
  dob?: Date
): Promise<User> => {
  return await prisma.user.update({
    where: { id },
    data: { name, phone, address, dob },
  });
};

export const deleteUser = async (id: string): Promise<void> => {
  await prisma.user.delete({ where: { id } });
};
