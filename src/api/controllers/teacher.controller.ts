import { Request, Response } from 'express';
import { TeacherDTO } from '../../dto/teacher.dto';
import * as teacherService from '../../services/teacher.service';

export const createTeacher = async (req: Request, res: Response) => {
  try {
    const { user_id, subject_id, hire_date } = req.body;
    const teacher: TeacherDTO = await teacherService.createTeacher(user_id, subject_id, hire_date);
    res.status(201).json(teacher);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const getTeacherById = async (req: Request, res: Response) => {
  try {
    const teacher: TeacherDTO | null = await teacherService.getTeacherById(Number(req.params.id));
    if (!teacher) return res.status(404).json({ message: 'Teacher not found' });
    res.json(teacher);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const updateTeacher = async (req: Request, res: Response) => {
  try {
    const { subject_id, hire_date } = req.body;
    const teacher: TeacherDTO = await teacherService.updateTeacher(Number(req.params.id), subject_id, hire_date);
    res.json(teacher);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteTeacher = async (req: Request, res: Response) => {
  try {
    await teacherService.deleteTeacher(Number(req.params.id));
    res.json({ message: 'Teacher deleted' });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
