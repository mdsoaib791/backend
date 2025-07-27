import { z } from 'zod';

export const accountSchema = z.object({
  email: z.string().trim().email({ message: 'A valid email is required' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' })
    .regex(/[A-Za-z]/, { message: 'Password must contain at least one letter' })
    .regex(/[0-9]/, { message: 'Password must contain at least one number' }),
  role: z.enum(['admin', 'student', 'teacher', 'superadmin', 'parents'], {
    message: 'Role must be one of: admin, student, teacher, superadmin, parents',
  }),
});
