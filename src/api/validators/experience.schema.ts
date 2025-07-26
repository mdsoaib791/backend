import { z } from "zod";

export const experienceSchema = z.object({
  company: z.string(),
  position: z.string(),
  description: z.string(),
  start_date: z.string(),
  end_date: z.string().optional()
});
