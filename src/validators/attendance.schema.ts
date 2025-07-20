import { z } from "zod";

export const attendanceSchema = z.object({
  student_id: z.string().min(1, { message: "Student ID is required" }),
  date: z.string().min(1, { message: "Date is required" }),
  status: z.enum(["present", "absent", "late"], { message: "Status must be present, absent, or late" }),
});

export const updateAttendanceSchema = z.object({
  status: z.enum(["present", "absent", "late"], { message: "Status must be present, absent, or late" }).optional(),
});

export const attendanceIdSchema = z.object({
  id: z.string().regex(/^\d+$/, { message: "ID must be a number" }),
});
