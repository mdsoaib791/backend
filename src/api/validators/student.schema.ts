import { z } from 'zod';

export const studentSchema = z.object({
  user_id: z.string().uuid({ message: 'User ID must be a valid UUID' }),
  class_id: z.number({ message: 'Class ID is required and must be a number' }),
  roll_number: z.string().min(1, { message: 'Roll number is required' }).max(50, { message: 'Roll number is too long' }),
  admission_date: z.coerce.date({ message: 'Admission date must be a valid date' }).optional(),
});
