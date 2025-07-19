import { Request, Response } from 'express';
import { ClassDTO } from '../../dto/class.dto';
import * as classService from '../../services/class.service';

export const createClass = async (req: Request, res: Response) => {
  try {
    const { name, section } = req.body;
    const classObj: ClassDTO = await classService.createClass(name, section);
    res.status(201).json(classObj);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const getClassById = async (req: Request, res: Response) => {
  try {
    const classObj: ClassDTO | null = await classService.getClassById(Number(req.params.id));
    if (!classObj) return res.status(404).json({ message: 'Class not found' });
    res.json(classObj);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const updateClass = async (req: Request, res: Response) => {
  try {
    const { name, section } = req.body;
    const classObj: ClassDTO = await classService.updateClass(Number(req.params.id), name, section);
    res.json(classObj);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteClass = async (req: Request, res: Response) => {
  try {
    await classService.deleteClass(Number(req.params.id));
    res.json({ message: 'Class deleted' });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
