import { z } from "zod";

export const contactSchema = z.object({
  full_name: z.string().min(2),
  email: z.string().email(),
  subject: z.string(),
  message: z.string()
});
