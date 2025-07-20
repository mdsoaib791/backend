import prisma from '../config/prisma';
import { Attendance } from '../models/attendance.model';

export const createAttendance = async (
  student_id: number,
  date: Date,
  status: string
): Promise<Attendance> => {
  return await prisma.attendance.create({
    data: {
      student_id,
      date,
      status,
    },
  });
};

export const getAttendanceById = async (id: number): Promise<Attendance | null> => {
  return await prisma.attendance.findUnique({ where: { id } });
};

export const updateAttendance = async (
  id: number,
  student_id: number,
  date: Date,
  status: string
): Promise<Attendance> => {
  return await prisma.attendance.update({
    where: { id },
    data: { student_id, date, status },
  });
};

export const deleteAttendance = async (id: number): Promise<void> => {
  await prisma.attendance.delete({ where: { id } });
};
