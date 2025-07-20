import { z } from "zod";

export const subjectSchema = z.object({
  name: z.string().min(1, { message: "Subject name is required" }),
  code: z.string().min(1, { message: "Subject code is required" }),
  description: z.string().min(1, { message: "Description is required" }),
});

export const updateSubjectSchema = z.object({
  name: z.string().min(1, { message: "Subject name is required" }).optional(),
  code: z.string().min(1, { message: "Subject code is required" }).optional(),
  description: z.string().min(1, { message: "Description is required" }).optional(),
});

export const subjectIdSchema = z.object({
  id: z.string().regex(/^\d+$/, { message: "ID must be a number" }),
});
