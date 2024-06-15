import prisma from "../lib/prisma.js";
import { User } from "../prisma/schema.prisma";

export const getUsers = async (req, res) => {
  try {
    const users = await prisma.User.findMany();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to get Users!",
    });
  }
};

export const updateUser = async (req, res) => {
  try {
  } catch (error) {}
};
