import { Router } from 'express';
import { validate } from '../../middlewares/validate.middleware';
import { attendanceIdSchema, attendanceSchema, updateAttendanceSchema } from '../../validators/attendance.schema';
import {
  createAttendance,
  deleteAttendance,
  getAttendanceById,
  updateAttendance,
} from '../controllers/attendance.controller';

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Attendance
 *     description: Attendance management endpoints
 * /api/attendance:
 *   post:
 *     tags:
 *       - Attendance
 *     summary: Create an attendance record
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AttendanceDTO'
 *     responses:
 *       201:
 *         description: Attendance created
 * /api/attendance/{id}:
 *   get:
 *     tags:
 *       - Attendance
 *     summary: Get attendance by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Attendance found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AttendanceDTO'
 *       404:
 *         description: Attendance not found
 *   put:
 *     tags:
 *       - Attendance
 *     summary: Update attendance
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AttendanceDTO'
 *     responses:
 *       200:
 *         description: Attendance updated
 *   delete:
 *     tags:
 *       - Attendance
 *     summary: Delete attendance
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Attendance deleted
 */

router.post('/', validate(attendanceSchema), createAttendance);
router.get('/:id', validate(attendanceIdSchema), getAttendanceById);
router.put('/:id', validate(attendanceIdSchema), validate(updateAttendanceSchema), updateAttendance);
router.delete('/:id', validate(attendanceIdSchema), deleteAttendance);

export default router;
