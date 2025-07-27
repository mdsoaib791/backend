import { z } from "zod";

export const profileSchema = z.object({
  userId: z.string(),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  dateOfBirth: z.coerce.date().nullable().optional(),
  gender: z.enum(["male", "female", "other"]).nullable().optional(),
  bio: z.string().nullable().optional(),
  avatarUrl: z.string().url("Invalid URL").nullable().optional(),
});
