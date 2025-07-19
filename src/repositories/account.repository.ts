import { pool } from '../config/db';
import { Account } from '../models/account.model';

export const findByEmail = async (email: string): Promise<Account | null> => {
  const result = await pool.query('SELECT * FROM accounts WHERE email = $1', [email]);
  return result.rows[0] || null;
};

export const createAccount = async (
  email: string,
  hashedPassword: string,
  role: string
): Promise<Omit<Account, 'password'>> => {
  const result = await pool.query(
    'INSERT INTO accounts (email, password, role) VALUES ($1, $2, $3) RETURNING id, email, role, created_at',
    [email, hashedPassword, role]
  );
  return result.rows[0];
};

export const getAllAccounts = async (): Promise<Omit<Account, 'password'>[]> => {
  const result = await pool.query('SELECT id, email, role, created_at FROM accounts');
  return result.rows;
};
