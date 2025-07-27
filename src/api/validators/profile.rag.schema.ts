import { z } from 'zod';

export const profileAIPromptSchema = z.object({
  prompt: z.string().min(5, 'Prompt must be at least 5 characters long')
});
