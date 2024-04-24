import { z } from "zod";

export const userNameValidation = z
  .string()
  .min(2, "Username cannot be less than 2 characters")
  .max(20, "Username cannot be greater than 20 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special characters");

export const signUpSchema = z.object({
  username: userNameValidation,
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password cannot be less than 6 characters" }),
});
