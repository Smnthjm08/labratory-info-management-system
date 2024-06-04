import express from "express";
import { getUsers, updateUser } from "../controllers/user.controllers.js";

const router = express.Router();

router.get("/", getUsers);
router.put("/:id", updateUser);
// router.delete("/:id", deleteUser);

export default router;
