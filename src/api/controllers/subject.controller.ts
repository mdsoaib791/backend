import { Request, Response } from 'express';
import { SubjectDTO } from '../../dto/subject.dto';
import * as subjectService from '../../services/subject.service';

export const createSubject = async (req: Request, res: Response) => {
  try {
    const { name, code } = req.body;
    const subject: SubjectDTO = await subjectService.createSubject(name, code);
    res.status(201).json(subject);
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

export const getSubjectById = async (req: Request, res: Response) => {
  try {
    const subject: SubjectDTO | null = await subjectService.getSubjectById(Number(req.params.id));
    if (!subject) return res.status(404).json({ message: 'Subject not found' });
    res.json(subject);
  } catch (err: any) {
    res.status(400).json({ error: 'Bad Request', message: err.message });
  }
};

export const updateSubject = async (req: Request, res: Response) => {
  try {
    const { name, code } = req.body;
    const subject: SubjectDTO = await subjectService.updateSubject(Number(req.params.id), name, code);
    res.json(subject);
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

export const deleteSubject = async (req: Request, res: Response) => {
  try {
    await subjectService.deleteSubject(Number(req.params.id));
    res.json({ message: 'Subject deleted' });
  } catch (err: any) {
    res.status(400).json({ error: 'Bad Request', message: err.message });
  }
};
