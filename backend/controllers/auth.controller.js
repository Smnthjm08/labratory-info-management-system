import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import prisma from "../lib/prisma.js";

dotenv.config();

export const register = async (req, res) => {
  const {
    email,
    password,
    firstName,
    lastName,
    phone, // Assuming phone is provided as a String
    gender,
    roleId,
    address,
    city,
    state,
    pin,
    qualification,
  } = req.body;

  if (
    !email ||
    !password ||
    !firstName ||
    !lastName ||
    !phone ||
    !gender ||
    !roleId ||
    !address ||
    !city ||
    !state ||
    !pin ||
    !qualification
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Check if email is already registered
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(409).json({ message: "Email already in use!" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        phone: phone.toString(),
        gender,
        roleId,
        address,
        city,
        state,
        pin,
        qualification,
      },
    });
    console.log(newUser);
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create user!" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // CHECK IF THE USER EXISTS
    const user = await prisma.user.findUnique({
      where: { email }, // SEARCH IF EMAIL EXISTS
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials!" });
    }

    // CHECK IF THE PASSWORD IS CORRECT
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid Credentials!" });
    }

    // GENERATE COOKIE TOKEN AND SEND TO THE USER
    const age = 1000 * 60 * 60 * 24 * 7;
    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: age }
    );
    // const { password: userPassword, ...userInfo } = user;

    res
      .cookie("token", token, {
        httpOnly: true,
        // secure: true,
        maxAge: age,
      })
      .status(200)
      .json({ message: "Login successful!", token: token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to Login!" });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logout Successful" });
};
