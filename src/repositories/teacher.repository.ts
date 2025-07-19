import { pool } from '../config/db';
import { Teacher } from '../models/teacher.model';

export const createTeacher = async (
  user_id: number,
  subject_id: number,
  hire_date: Date
): Promise<Teacher> => {
  const result = await pool.query(
    'INSERT INTO teachers (user_id, subject_id, hire_date) VALUES ($1, $2, $3) RETURNING *',
    [user_id, subject_id, hire_date]
  );
  return result.rows[0];
};

export const getTeacherById = async (id: number): Promise<Teacher | null> => {
  const result = await pool.query('SELECT * FROM teachers WHERE id = $1', [id]);
  return result.rows[0] || null;
};

export const updateTeacher = async (
  id: number,
  subject_id: number,
  hire_date: Date
): Promise<Teacher> => {
  const result = await pool.query(
    'UPDATE teachers SET subject_id = $2, hire_date = $3 WHERE id = $1 RETURNING *',
    [id, subject_id, hire_date]
  );
  return result.rows[0];
};

export const deleteTeacher = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM teachers WHERE id = $1', [id]);
};
