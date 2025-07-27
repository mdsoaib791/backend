import prisma from '../config/prisma';
import { AccountModel } from '../models/account.model';

export const findByEmail = async (email: string): Promise<AccountModel | null> => {
  return await prisma.account.findUnique({
    where: { email },
  });
};

export const createAccount = async (
  email: string,
  hashedPassword: string,
  role: string
): Promise<AccountModel> => {
  return await prisma.account.create({
    data: {
      email,
      password: hashedPassword,
      role,
    },
  });
};

export const getAllAccounts = async (): Promise<AccountModel[]> => {
  return await prisma.account.findMany();
};

export const findById = async (userId: string): Promise<AccountModel | null> => {
  return await prisma.account.findUnique({
    where: { userId },
  });
};

export const deleteAccount = async (userId: string): Promise<AccountModel> => {
  return await prisma.account.delete({
    where: { userId },
  });
};

export const updateAccount = async (
  userId: string,
  data: Partial<Omit<AccountModel, 'userId' | 'createdAt' | 'updatedAt'>>
): Promise<AccountModel> => {
  return await prisma.account.update({
    where: { userId },
    data,
  });
};
