import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import prisma from "../lib/prisma.js";
import validateSchema from "../middlewares/validateSchema.js";
import { registerSchema, loginSchema } from "../lib/schema.js";

dotenv.config();

export const register = [
  validateSchema(registerSchema),
  async (req, res) => {
    const {
      email,
      password,
      firstName,
      lastName,
      phone,
      gender,
      roleId,
      address,
      city,
      state,
      pin,
      qualification,
    } = req.body;

    try {
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        return res.status(409).json({ message: "Email already in use!" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          firstName,
          lastName,
          phone: phone.toString(),
          gender: gender.toUpperCase(),
          roleId,
          address,
          city,
          state,
          pin,
          qualification,
        },
      });

      res.status(201).json({ message: "User created successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to create user!" });
    }
  },
];

export const login = [
  validateSchema(loginSchema),
  async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        return res.status(400).json({ message: "Invalid Credentials!" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid Credentials!" });
      }

      const age = 1000 * 60 * 60 * 24 * 7;
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
        expiresIn: age,
      });

      res
        .cookie("token", token, {
          httpOnly: true,
          maxAge: age,
        })
        .status(200)
        .json({ message: "Login successful!", token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to login!" });
    }
  },
];

export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logout successful" });
};
