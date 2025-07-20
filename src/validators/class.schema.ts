import { z } from "zod";

export const classSchema = z.object({
  name: z.string().min(1, { message: "Class name is required" }),
  section: z.string().min(1, { message: "Section is required" }),
  year: z.string().min(4, { message: "Year is required and must be 4 digits" }),
});

export const updateClassSchema = z.object({
  name: z.string().min(1, { message: "Class name is required" }).optional(),
  section: z.string().min(1, { message: "Section is required" }).optional(),
  year: z.string().min(4, { message: "Year is required and must be 4 digits" }).optional(),
});

export const classIdSchema = z.object({
  id: z.string().regex(/^\d+$/, { message: "ID must be a number" }),
});
