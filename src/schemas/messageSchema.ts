import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, "Content must be atlest of 10 characters")
    .max(300, "Content should not longer than 300 characters"),
});
