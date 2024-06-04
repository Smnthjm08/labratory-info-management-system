import { z } from "zod";

// Register schema
export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  gender: z.string(),
  roleId: z.number(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  pin: z.string(),
  qualification: z.string(),
});

// Login schema
export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
