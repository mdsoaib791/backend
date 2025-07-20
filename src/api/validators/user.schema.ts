import { z } from 'zod';

export const userSchema = z.object({
  account_id: z.number({ message: 'Account ID is required and must be a number' }),
  name: z.string().min(2, { message: 'Name is required and must be at least 2 characters' }),
  phone: z.string().min(10, { message: 'Phone must be at least 10 digits' }).max(20, { message: 'Phone is too long' }).optional(),
  address: z.string().min(5, { message: 'Address must be at least 5 characters' }).optional(),
  dob: z.coerce.date({ message: 'Date of birth must be a valid date' }).optional(),
});
