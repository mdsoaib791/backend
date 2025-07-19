import { pool } from '../config/db';
import { Class } from '../models/class.model';

export const createClass = async (
  name: string,
  section: string
): Promise<Class> => {
  const result = await pool.query(
    'INSERT INTO classes (name, section) VALUES ($1, $2) RETURNING *',
    [name, section]
  );
  return result.rows[0];
};

export const getClassById = async (id: number): Promise<Class | null> => {
  const result = await pool.query('SELECT * FROM classes WHERE id = $1', [id]);
  return result.rows[0] || null;
};

export const updateClass = async (
  id: number,
  name: string,
  section: string
): Promise<Class> => {
  const result = await pool.query(
    'UPDATE classes SET name = $2, section = $3 WHERE id = $1 RETURNING *',
    [id, name, section]
  );
  return result.rows[0];
};

export const deleteClass = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM classes WHERE id = $1', [id]);
};
