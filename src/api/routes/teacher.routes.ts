import { Router } from 'express';
import {
  createTeacher,
  deleteTeacher,
  getTeacherById,
  updateTeacher,
} from '../controllers/teacher.controller';

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Teacher
 *     description: Teacher management endpoints
 * /api/teacher:
 *   post:
 *     tags:
 *       - Teacher
 *     summary: Create a teacher
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TeacherDTO'
 *     responses:
 *       201:
 *         description: Teacher created
 * /api/teacher/{id}:
 *   get:
 *     tags:
 *       - Teacher
 *     summary: Get teacher by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Teacher found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TeacherDTO'
 *       404:
 *         description: Teacher not found
 *   put:
 *     tags:
 *       - Teacher
 *     summary: Update teacher
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
 *             $ref: '#/components/schemas/TeacherDTO'
 *     responses:
 *       200:
 *         description: Teacher updated
 *   delete:
 *     tags:
 *       - Teacher
 *     summary: Delete teacher
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Teacher deleted
 */

router.post('/', createTeacher);
router.get('/:id', getTeacherById);
router.put('/:id', updateTeacher);
router.delete('/:id', deleteTeacher);

export default router;
