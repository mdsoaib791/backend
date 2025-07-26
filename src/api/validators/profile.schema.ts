import { z } from "zod";

export const profileSchema = z.object({
  user_id: z.string(),
  full_name: z.string().min(3),
  title: z.string(),
  bio: z.string().optional(),
  profile_picture: z.string().url().optional()
});
