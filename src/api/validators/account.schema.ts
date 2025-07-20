import { z } from 'zod';

export const accountSchema = z.object({
  email: z.string().email({ message: 'A valid email is required' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
  role: z.enum(['admin', 'student', 'teacher', 'superadmin', 'parents'], { message: 'Role must be one of: admin, student, teacher, superadmin, parents' })
});
