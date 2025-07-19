import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import userRoutes from "./api/routes/user.routes";
import { initDB } from "./config/db";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/users", userRoutes);

app.listen(PORT, async () => {
  console.log(`🚀 Server running on port ${PORT}`);
  await initDB();
});
