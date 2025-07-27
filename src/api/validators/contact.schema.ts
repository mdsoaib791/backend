import { z } from "zod";

export const contactSchema = z.object({
  userId: z.string().min(2),
  phone: z.string().nullable(),
  alternatePhone: z.string().nullable(),
  address: z.string().nullable(),
  city: z.string().nullable(),
  state: z.string().nullable(),
  country: z.string().nullable(),
  zipCode: z.string().nullable(),
});
