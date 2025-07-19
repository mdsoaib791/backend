import { pool } from '../config/db';
import { Student } from '../models/student.model';

export const createStudent = async (
  user_id: number,
  class_id: number,
  roll_number: string,
  admission_date: Date
): Promise<Student> => {
  const result = await pool.query(
    'INSERT INTO students (user_id, class_id, roll_number, admission_date) VALUES ($1, $2, $3, $4) RETURNING *',
    [user_id, class_id, roll_number, admission_date]
  );
  return result.rows[0];
};

export const getStudentById = async (id: number): Promise<Student | null> => {
  const result = await pool.query('SELECT * FROM students WHERE id = $1', [id]);
  return result.rows[0] || null;
};

export const updateStudent = async (
  id: number,
  class_id: number,
  roll_number: string,
  admission_date: Date
): Promise<Student> => {
  const result = await pool.query(
    'UPDATE students SET class_id = $2, roll_number = $3, admission_date = $4 WHERE id = $1 RETURNING *',
    [id, class_id, roll_number, admission_date]
  );
  return result.rows[0];
};

export const deleteStudent = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM students WHERE id = $1', [id]);
};
