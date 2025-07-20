import { z } from 'zod';

export const attendanceSchema = z.object({
  student_id: z.number({ message: 'Student ID is required and must be a number' }),
  date: z.coerce.date({ message: 'Date is required and must be a valid date' }),
  status: z.enum(['present', 'absent', 'late'], { message: 'Status must be one of: present, absent, late' }),
});
