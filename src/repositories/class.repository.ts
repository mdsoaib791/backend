import prisma from '../config/prisma';
import { Class } from '../models/class.model';

export const createClass = async (
  name: string,
  section?: string
): Promise<Class> => {
  return await prisma.class.create({
    data: {
      name,
      section,
    },
  });
};

export const getClassById = async (id: number): Promise<Class | null> => {
  return await prisma.class.findUnique({ where: { id } });
};

export const updateClass = async (
  id: number,
  name: string,
  section?: string
): Promise<Class> => {
  return await prisma.class.update({
    where: { id },
    data: { name, section },
  });
};

export const deleteClass = async (id: number): Promise<void> => {
  await prisma.class.delete({ where: { id } });
};
