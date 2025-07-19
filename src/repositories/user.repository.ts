import { pool } from '../config/db';
import { User } from '../models/user.model';

export const findByEmail = async (email: string): Promise<User | null> => {
  const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  return result.rows[0] || null;
};

export const createUser = async (
  account_id: number,
  name: string,
  phone?: string,
  address?: string,
  dob?: Date
): Promise<User> => {
  const result = await pool.query(
    'INSERT INTO users (account_id, name, phone, address, dob) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [account_id, name, phone, address, dob]
  );
  return result.rows[0];
};

export const getAllUsers = async (): Promise<Omit<User, 'password'>[]> => {
  const result = await pool.query('SELECT id, name, email, role, created_at FROM users');
  return result.rows;
};

export const getUserById = async (id: number): Promise<User | null> => {
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  return result.rows[0] || null;
};

export const updateUser = async (
  id: number,
  name: string,
  phone?: string,
  address?: string,
  dob?: Date
): Promise<User> => {
  const result = await pool.query(
    'UPDATE users SET name = $2, phone = $3, address = $4, dob = $5 WHERE id = $1 RETURNING *',
    [id, name, phone, address, dob]
  );
  return result.rows[0];
};

export const deleteUser = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM users WHERE id = $1', [id]);
};
