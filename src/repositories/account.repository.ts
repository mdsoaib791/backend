import prisma from '../config/prisma';
import { AccountModel } from '../models/account.model';
import { v4 as uuidv4 } from 'uuid';

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
  const user_id = uuidv4(); // Generate a unique user_id for API usage

  return await prisma.account.create({
    data: {
      email,
      password: hashedPassword,
      role,
      user_id, // ✅ new field added
    },
  });
};

export const getAllAccounts = async (): Promise<AccountModel[]> => {
  return await prisma.account.findMany();
};
