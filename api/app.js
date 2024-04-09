import express from "express";
import userRoutes from "./routes/userRoute.js";
import adminRoutes from "./routes/adminRoutes.js";

import cors from "cors";

//importing configs
import { config } from "dotenv";
config({ path: "./config.env" });


export const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//routes
app.use(userRoutes);
app.use('/admin', adminRoutes);

