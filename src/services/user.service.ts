import bcrypt from "bcrypt";
import { pool } from "../config/db";
import { User } from "../models/user.model";

export const getAllUsers = async (): Promise<User[]> => {
  const { rows } = await pool.query("SELECT id, name, email, created_at FROM users");
  return rows;
};

export const createUser = async (name: string, email: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const result = await pool.query(
    `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email, created_at`,
    [name, email, hashedPassword]
  );

  return result.rows[0];
};

export const findUserByEmail = async (email: string): Promise<User | null> => {
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
  return result.rows[0] || null;
};
