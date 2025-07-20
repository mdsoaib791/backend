import prisma from '../config/prisma';
import { Account } from '../models/account.model';

export const findByEmail = async (email: string): Promise<Account | null> => {
  return await prisma.account.findUnique({ where: { email } });
};

export const createAccount = async (
  email: string,
  hashedPassword: string,
  role: string
): Promise<Account> => {
  return await prisma.account.create({
    data: {
      email,
      password: hashedPassword,
      role,
    },
  });
};

export const getAllAccounts = async (): Promise<Account[]> => {
  return await prisma.account.findMany();
};
