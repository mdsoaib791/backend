import { Request, Response } from 'express';
import { AttendanceDTO } from '../../dto/attendance.dto';
import * as attendanceService from '../../services/attendance.service';

export const createAttendance = async (req: Request, res: Response) => {
  try {
    const { student_id, date, status } = req.body;
    const attendance: AttendanceDTO = await attendanceService.createAttendance(student_id, date, status);
    res.status(201).json(attendance);
  } catch (err: any) {
    if (err && err.name === 'ZodError' && Array.isArray(err.errors)) {
      const errors = err.errors.map((e: any) => ({
        field: Array.isArray(e.path) ? e.path.join('.') : String(e.path),
        message: e.message || 'Validation error'
      }));
      return res.status(400).json({ error: 'Validation failed', errors });
    }
    res.status(400).json({ error: 'Bad Request', message: err.message });
  }
};

export const getAttendanceById = async (req: Request, res: Response) => {
  try {
    const attendance: AttendanceDTO | null = await attendanceService.getAttendanceById(Number(req.params.id));
    if (!attendance) return res.status(404).json({ message: 'Attendance not found' });
    res.json(attendance);
  } catch (err: any) {
    if (err && err.name === 'ZodError' && Array.isArray(err.errors)) {
      const errors = err.errors.map((e: any) => ({
        field: Array.isArray(e.path) ? e.path.join('.') : String(e.path),
        message: e.message || 'Validation error'
      }));
      return res.status(400).json({ error: 'Validation failed', errors });
    }
    res.status(400).json({ error: 'Bad Request', message: err.message });
  }
};

export const updateAttendance = async (req: Request, res: Response) => {
  try {
    const { student_id, date, status } = req.body;
    const attendance: AttendanceDTO = await attendanceService.updateAttendance(Number(req.params.id), student_id, date, status);
    res.json(attendance);
  } catch (err: any) {
    if (err && err.name === 'ZodError' && Array.isArray(err.errors)) {
      const errors = err.errors.map((e: any) => ({
        field: Array.isArray(e.path) ? e.path.join('.') : String(e.path),
        message: e.message || 'Validation error'
      }));
      return res.status(400).json({ error: 'Validation failed', errors });
    }
    res.status(400).json({ error: 'Bad Request', message: err.message });
  }
};

export const deleteAttendance = async (req: Request, res: Response) => {
  try {
    await attendanceService.deleteAttendance(Number(req.params.id));
    res.json({ message: 'Attendance deleted' });
  } catch (err: any) {
    if (err && err.name === 'ZodError' && Array.isArray(err.errors)) {
      const errors = err.errors.map((e: any) => ({
        field: Array.isArray(e.path) ? e.path.join('.') : String(e.path),
        message: e.message || 'Validation error'
      }));
      return res.status(400).json({ error: 'Validation failed', errors });
    }
    res.status(400).json({ error: 'Bad Request', message: err.message });
  }
};
