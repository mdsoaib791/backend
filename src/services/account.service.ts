import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as accountRepo from '../repositories/account.repository';

export const registerAccount = async (email: string, password: string, role: string) => {
  const existingAccount = await accountRepo.findByEmail(email);
  if (existingAccount) throw new Error('Account already exists');

  const hashed = await bcrypt.hash(password, 10);
  return await accountRepo.createAccount(email, hashed, role);
};

export const loginAccount = async (email: string, password: string) => {
  const account = await accountRepo.findByEmail(email);
  if (!account) throw new Error('Account not found');

  const isMatch = await bcrypt.compare(password, account.password);
  if (!isMatch) throw new Error('Invalid credentials');

  const accessToken = jwt.sign(
    { userId: account.userId, role: account.role },
    process.env.JWT_SECRET as string,
    { expiresIn: '15m' }
  );

  const refreshToken = jwt.sign(
    { userId: account.userId, role: account.role },
    process.env.JWT_SECRET as string,
    { expiresIn: '7d' }
  );

  return { accessToken, refreshToken };
};

export const getAllAccounts = async () => {
  return await accountRepo.getAllAccounts();
};


