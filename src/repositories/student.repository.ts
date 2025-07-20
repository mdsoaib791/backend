import prisma from '../config/prisma';
import { Student } from '../models/student.model';

export const createStudent = async (
  user_id: string,
  class_id: number,
  roll_number: string,
  admission_date?: Date
): Promise<Student> => {
  return await prisma.student.create({
    data: {
      user_id,
      class_id,
      roll_number,
      admission_date,
    },
  });
};

export const getStudentById = async (id: number): Promise<Student | null> => {
  return await prisma.student.findUnique({ where: { id } });
};

export const updateStudent = async (
  id: number,
  class_id: number,
  roll_number: string,
  admission_date?: Date
): Promise<Student> => {
  return await prisma.student.update({
    where: { id },
    data: { class_id, roll_number, admission_date },
  });
};

export const deleteStudent = async (id: number): Promise<void> => {
  await prisma.student.delete({ where: { id } });
};
