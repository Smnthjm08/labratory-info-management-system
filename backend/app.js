import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.routes.js";
import userRoute from "./routes/user.routes.js";
import patientRoute from "./routes/patient.routes.js";

const app = express();
dotenv.config();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/patients", patientRoute);

const port = process.env.PORT || 8800;
app.listen(8800, () => {
  console.log(`Server is running on port ${port}`);
});
