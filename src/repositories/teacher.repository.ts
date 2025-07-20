import prisma from '../config/prisma';
import { Teacher } from '../models/teacher.model';

export const createTeacher = async (
  user_id: string,
  subject_id: number,
  hire_date?: Date
): Promise<Teacher> => {
  return await prisma.teacher.create({
    data: {
      user_id,
      subject_id,
      hire_date,
    },
  });
};

export const getTeacherById = async (id: number): Promise<Teacher | null> => {
  return await prisma.teacher.findUnique({ where: { id } });
};

export const updateTeacher = async (
  id: number,
  subject_id: number,
  hire_date?: Date
): Promise<Teacher> => {
  return await prisma.teacher.update({
    where: { id },
    data: { subject_id, hire_date },
  });
};

export const deleteTeacher = async (id: number): Promise<void> => {
  await prisma.teacher.delete({ where: { id } });
};
