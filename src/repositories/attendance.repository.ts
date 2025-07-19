import { pool } from '../config/db';
import { Attendance } from '../models/attendance.model';

export const createAttendance = async (
  student_id: number,
  date: Date,
  status: string
): Promise<Attendance> => {
  const result = await pool.query(
    'INSERT INTO attendance (student_id, date, status) VALUES ($1, $2, $3) RETURNING *',
    [student_id, date, status]
  );
  return result.rows[0];
};

export const getAttendanceById = async (id: number): Promise<Attendance | null> => {
  const result = await pool.query('SELECT * FROM attendance WHERE id = $1', [id]);
  return result.rows[0] || null;
};

export const updateAttendance = async (
  id: number,
  student_id: number,
  date: Date,
  status: string
): Promise<Attendance> => {
  const result = await pool.query(
    'UPDATE attendance SET student_id = $2, date = $3, status = $4 WHERE id = $1 RETURNING *',
    [id, student_id, date, status]
  );
  return result.rows[0];
};

export const deleteAttendance = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM attendance WHERE id = $1', [id]);
};
