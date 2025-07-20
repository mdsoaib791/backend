import { Request, Response } from 'express';
import { StudentDTO } from '../../dto/student.dto';
import * as studentService from '../../services/student.service';

export const createStudent = async (req: Request, res: Response) => {
  try {
    const { user_id, class_id, roll_number, admission_date } = req.body;
    const student: StudentDTO = await studentService.createStudent(user_id, class_id, roll_number, admission_date);
    res.status(201).json(student);
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

export const getStudentById = async (req: Request, res: Response) => {
  try {
    const student: StudentDTO | null = await studentService.getStudentById(Number(req.params.id));
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (err: any) {
    res.status(400).json({ error: 'Bad Request', message: err.message });
  }
};

export const updateStudent = async (req: Request, res: Response) => {
  try {
    const { class_id, roll_number, admission_date } = req.body;
    const student: StudentDTO = await studentService.updateStudent(Number(req.params.id), class_id, roll_number, admission_date);
    res.json(student);
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

export const deleteStudent = async (req: Request, res: Response) => {
  try {
    await studentService.deleteStudent(Number(req.params.id));
    res.json({ message: 'Student deleted' });
  } catch (err: any) {
    res.status(400).json({ error: 'Bad Request', message: err.message });
  }
};
