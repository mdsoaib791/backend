import { Router } from 'express';
import { validate } from '../../middlewares/validate.middleware';
import { studentIdSchema, studentSchema, updateStudentSchema } from '../../validators/student.schema';
import {
  createStudent,
  deleteStudent,
  getStudentById,
  updateStudent,
} from '../controllers/student.controller';

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Student
 *     description: Student management endpoints
 * /api/student:
 *   post:
 *     tags:
 *       - Student
 *     summary: Create a student
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StudentDTO'
 *     responses:
 *       201:
 *         description: Student created
 * /api/student/{id}:
 *   get:
 *     tags:
 *       - Student
 *     summary: Get student by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Student found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/StudentDTO'
 *       404:
 *         description: Student not found
 *   put:
 *     tags:
 *       - Student
 *     summary: Update student
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
 *             $ref: '#/components/schemas/StudentDTO'
 *     responses:
 *       200:
 *         description: Student updated
 *   delete:
 *     tags:
 *       - Student
 *     summary: Delete student
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Student deleted
 */

router.post('/', validate(studentSchema), createStudent);
router.get('/:id', validate(studentIdSchema), getStudentById);
router.put('/:id', validate(studentIdSchema), validate(updateStudentSchema), updateStudent);
router.delete('/:id', validate(studentIdSchema), deleteStudent);

export default router;
