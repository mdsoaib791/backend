import { z } from "zod";

export const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  tech_stack: z.array(z.string()),
  github_url: z.string().url().optional(),
  live_url: z.string().url().optional(),
  thumbnail: z.string().url().optional()
});
