import express from "express";
import {
  registerPatient,
  getPatients,
} from "../controllers/patient.controller.js";

const router = express.Router();

router.post("/register", registerPatient);
router.get("/all-patients", getPatients);

export default router;
