import { z } from "zod";

export const createUserSchema = z.object({
  account_id: z.string().min(1, { message: "Account ID is required" }),
  name: z.string().min(1, { message: "Name is required" }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits" }),
  address: z.string().min(1, { message: "Address is required" }),
  dob: z.string().min(1, { message: "Date of birth is required" }),
});

export const updateUserSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }).optional(),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits" }).optional(),
  address: z.string().min(1, { message: "Address is required" }).optional(),
  dob: z.string().min(1, { message: "Date of birth is required" }).optional(),
});

export const userIdSchema = z.object({
  id: z.string().regex(/^\d+$/, { message: "ID must be a number" }),
});

export const registerSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(1, { message: "Password is required" }),
});
