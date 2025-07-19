import { pool } from '../config/db';
import { Subject } from '../models/subject.model';

export const createSubject = async (
  name: string,
  code: string
): Promise<Subject> => {
  const result = await pool.query(
    'INSERT INTO subjects (name, code) VALUES ($1, $2) RETURNING *',
    [name, code]
  );
  return result.rows[0];
};

export const getSubjectById = async (id: number): Promise<Subject | null> => {
  const result = await pool.query('SELECT * FROM subjects WHERE id = $1', [id]);
  return result.rows[0] || null;
};

export const updateSubject = async (
  id: number,
  name: string,
  code: string
): Promise<Subject> => {
  const result = await pool.query(
    'UPDATE subjects SET name = $2, code = $3 WHERE id = $1 RETURNING *',
    [id, name, code]
  );
  return result.rows[0];
};

export const deleteSubject = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM subjects WHERE id = $1', [id]);
};
