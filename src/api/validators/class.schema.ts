import { z } from 'zod';

export const classSchema = z.object({
  name: z.string().min(2, { message: 'Class name is required and must be at least 2 characters' }),
  section: z.string().min(1, { message: 'Section is required' }).max(20, { message: 'Section is too long' }).optional(),
});
