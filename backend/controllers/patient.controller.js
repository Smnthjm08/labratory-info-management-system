import prisma from "../lib/prisma.js";
import { PatientSchema } from "../lib/schema.js";

export const registerPatient = async (req, res) => {
  try {
    // Validate request body against the Zod schema
    const validatedData = PatientSchema.parse(req.body);

    // Check if the patient already exists
    const existingPatient = await prisma.patient.findUnique({
      where: { email: validatedData.email },
    });

    if (existingPatient) {
      return res
        .status(409)
        .json({ message: "Patient with this email already exists!" });
    }

    // // Hash the password
    // const hashedPassword = await bcrypt.hash(validatedData.password, 10);

    // Create the patient
    const newPatient = await prisma.patient.create({
      data: {
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        email: validatedData.email,
        phoneNumber: validatedData.phoneNumber,
        dob: validatedData.dob,
        age: validatedData.age,
        gender: validatedData.gender,
        bloodGroup: validatedData.bloodGroup,
        emergencyContact: validatedData.emergencyContact,
        relationWithPatient: validatedData.relationWithPatient,
        address: validatedData.address,
        city: validatedData.city,
        state: validatedData.state,
        pin: validatedData.pin,
      },
    });
    res
      .status(201)
      .json({ message: "Patient registered successfully", newPatient });
  } catch (error) {
    // Handle validation errors
    if (error.errors) {
      const validationErrors = error.errors.map((err) => err.message);
      return res
        .status(400)
        .json({ message: "Validation error", errors: validationErrors });
    }

    // Handle other errors
    console.error(error);
    res.status(500).json({ message: "Failed to register patient" });
  }
};

export const getPatients = async (req, res) => {
  try {
    const patients = await prisma.patient.findMany();
    res.status(200).json(patients);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to get Users!",
    });
  }
};
