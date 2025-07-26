import { z } from "zod";

export const skillSchema = z.object({
  name: z.string().min(2),
  category: z.string(),
  icon_url: z.string().url()
});
