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

// Define the BloodGroup enum
const BloodGroupEnum = z.enum([
  "A_POS",
  "B_POS",
  "AB_POS",
  "O_POS",
  "A_NEG",
  "B_NEG",
  "AB_NEG",
  "O_NEG",
]);

// Define the RelationWithPatient enum
const RelationWithPatientEnum = z.enum([
  "PARENT",
  "SPOUSE",
  "GUARDIAN",
  "OTHER",
]);

//Gender enum
const GenderEnum = z.enum(["MALE", "FEMALE", "PREFERNOTTOSAY"]);

// Define the Patient schema
export const PatientSchema = z.object({
  id: z.number().int().positive().optional(),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email format"),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 characters"),
  dob: z.string(),
  age: z.number().int().positive().min(0, "Age must be a positive integer"),
  gender: GenderEnum,
  bloodGroup: BloodGroupEnum,
  emergencyContact: z.string().optional(),
  relationWithPatient: RelationWithPatientEnum,
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  pin: z.string().min(1, "Pin is required"),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});
