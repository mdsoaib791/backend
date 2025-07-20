import { z } from "zod";

export const teacherSchema = z.object({
  name: z.string().min(1, { message: "Teacher name is required" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits" }),
  email: z.string().email({ message: "Invalid email address" }),
});

export const updateTeacherSchema = z.object({
  name: z.string().min(1, { message: "Teacher name is required" }).optional(),
  subject: z.string().min(1, { message: "Subject is required" }).optional(),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits" }).optional(),
  email: z.string().email({ message: "Invalid email address" }).optional(),
});

export const teacherIdSchema = z.object({
  id: z.string().regex(/^\d+$/, { message: "ID must be a number" }),
});
