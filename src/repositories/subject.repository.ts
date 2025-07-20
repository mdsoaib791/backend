import prisma from '../config/prisma';
import { Subject } from '../models/subject.model';

export const createSubject = async (
  name: string,
  code: string
): Promise<Subject> => {
  return await prisma.subject.create({
    data: {
      name,
      code,
    },
  });
};

export const getSubjectById = async (id: number): Promise<Subject | null> => {
  return await prisma.subject.findUnique({ where: { id } });
};

export const updateSubject = async (
  id: number,
  name: string,
  code: string
): Promise<Subject> => {
  return await prisma.subject.update({
    where: { id },
    data: { name, code },
  });
};

export const deleteSubject = async (id: number): Promise<void> => {
  await prisma.subject.delete({ where: { id } });
};
