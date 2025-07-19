import { Router } from 'express';
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

router.post('/', createAttendance);
router.get('/:id', getAttendanceById);
router.put('/:id', updateAttendance);
router.delete('/:id', deleteAttendance);

export default router;
