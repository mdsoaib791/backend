import { z } from 'zod';

export const subjectSchema = z.object({
  name: z.string().min(2, { message: 'Subject name is required and must be at least 2 characters' }),
  code: z.string().min(1, { message: 'Subject code is required' }).max(20, { message: 'Subject code is too long' }),
});
