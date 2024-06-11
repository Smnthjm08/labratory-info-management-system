import express from "express";
import { registerPatient } from "../controllers/patient.controller.js";

const router = express.Router();

router.post("/register", registerPatient);
// router.post("/login", login);
// router.post("/logout", logout);

export default router;
