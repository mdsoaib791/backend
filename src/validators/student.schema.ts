import { z } from "zod";

export const studentSchema = z.object({
  name: z.string().min(1, { message: "Student name is required" }),
  roll: z.string().min(1, { message: "Roll number is required" }),
  class: z.string().min(1, { message: "Class is required" }),
  dob: z.string().min(1, { message: "Date of birth is required" }),
  address: z.string().min(1, { message: "Address is required" }),
});

export const updateStudentSchema = z.object({
  name: z.string().min(1, { message: "Student name is required" }).optional(),
  roll: z.string().min(1, { message: "Roll number is required" }).optional(),
  class: z.string().min(1, { message: "Class is required" }).optional(),
  dob: z.string().min(1, { message: "Date of birth is required" }).optional(),
  address: z.string().min(1, { message: "Address is required" }).optional(),
});

export const studentIdSchema = z.object({
  id: z.string().regex(/^\d+$/, { message: "ID must be a number" }),
});
