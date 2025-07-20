import { z } from 'zod';

export const teacherSchema = z.object({
  user_id: z.string().uuid({ message: 'User ID must be a valid UUID' }),
  subject_id: z.number({ message: 'Subject ID is required and must be a number' }),
  hire_date: z.coerce.date({ message: 'Hire date must be a valid date' }).optional(),
});
