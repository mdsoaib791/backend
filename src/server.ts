import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import { initDB } from "./config/db";
import { swaggerUiHandler, swaggerUiSetup } from "./swagger";

// Routes
import accountRoutes from "./api/routes/account.routes";
import contactRoutes from "./api/routes/contact.routes";
import experienceRoutes from "./api/routes/experience.routes";
import profileRoutes from "./api/routes/profile.routes";
import projectRoutes from "./api/routes/project.routes";
import skillRoutes from "./api/routes/skill.routes";
import validationRoutes from "./api/routes/validation.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

// Swagger UI
app.use("/api-docs", swaggerUiHandler, swaggerUiSetup);

// Register routes
app.use("/api/account", accountRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/experience", experienceRoutes);
app.use("/api/project", projectRoutes);
app.use("/api/skill", skillRoutes);
app.use("/api/validate", validationRoutes);

app.listen(PORT, async () => {
  console.log(`🚀 Server running on port ${PORT}`);
  await initDB();
});

// 404 route
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

