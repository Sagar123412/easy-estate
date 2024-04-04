import express from "express";
import userRoutes from "./routes/user.js";
import { config } from "dotenv";
config({ path: "./config.env" });
export const app = express();
app.use(express.json());
import cors from "cors";
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(userRoutes);

