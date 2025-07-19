import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import accountRoutes from "./api/routes/account.routes";
import attendanceRoutes from "./api/routes/attendance.routes";
import classRoutes from "./api/routes/class.routes";
import studentRoutes from "./api/routes/student.routes";
import subjectRoutes from "./api/routes/subject.routes";
import teacherRoutes from "./api/routes/teacher.routes";
import userRoutes from "./api/routes/user.routes";
import { initDB } from "./config/db";
import { swaggerUiHandler, swaggerUiSetup } from './swagger';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use('/api-docs', swaggerUiHandler, swaggerUiSetup);
// Routes
app.use("/api/users", userRoutes);
app.use("/api/account", accountRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/class", classRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/subject", subjectRoutes);
app.use("/api/teacher", teacherRoutes);

app.listen(PORT, async () => {
  console.log(`🚀 Server running on port ${PORT}`);
  await initDB();
});
