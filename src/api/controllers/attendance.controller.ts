import { Request, Response } from 'express';
import { AttendanceDTO } from '../../dto/attendance.dto';
import * as attendanceService from '../../services/attendance.service';

export const createAttendance = async (req: Request, res: Response) => {
  try {
    const { student_id, date, status } = req.body;
    const attendance: AttendanceDTO = await attendanceService.createAttendance(student_id, date, status);
    res.status(201).json(attendance);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const getAttendanceById = async (req: Request, res: Response) => {
  try {
    const attendance: AttendanceDTO | null = await attendanceService.getAttendanceById(Number(req.params.id));
    if (!attendance) return res.status(404).json({ message: 'Attendance not found' });
    res.json(attendance);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const updateAttendance = async (req: Request, res: Response) => {
  try {
    const { student_id, date, status } = req.body;
    const attendance: AttendanceDTO = await attendanceService.updateAttendance(Number(req.params.id), student_id, date, status);
    res.json(attendance);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteAttendance = async (req: Request, res: Response) => {
  try {
    await attendanceService.deleteAttendance(Number(req.params.id));
    res.json({ message: 'Attendance deleted' });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
