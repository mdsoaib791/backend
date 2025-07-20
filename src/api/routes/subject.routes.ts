import { Router } from 'express';
import { validate } from '../../middlewares/validate.middleware';
import { subjectIdSchema, subjectSchema, updateSubjectSchema } from '../../validators/subject.schema';
import {
  createSubject,
  deleteSubject,
  getSubjectById,
  updateSubject,
} from '../controllers/subject.controller';

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Subject
 *     description: Subject management endpoints
 * /api/subject:
 *   post:
 *     tags:
 *       - Subject
 *     summary: Create a subject
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SubjectDTO'
 *     responses:
 *       201:
 *         description: Subject created
 * /api/subject/{id}:
 *   get:
 *     tags:
 *       - Subject
 *     summary: Get subject by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Subject found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SubjectDTO'
 *       404:
 *         description: Subject not found
 *   put:
 *     tags:
 *       - Subject
 *     summary: Update subject
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
 *             $ref: '#/components/schemas/SubjectDTO'
 *     responses:
 *       200:
 *         description: Subject updated
 *   delete:
 *     tags:
 *       - Subject
 *     summary: Delete subject
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Subject deleted
 */

router.post('/', validate(subjectSchema), createSubject);
router.get('/:id', validate(subjectIdSchema), getSubjectById);
router.put('/:id', validate(subjectIdSchema), validate(updateSubjectSchema), updateSubject);
router.delete('/:id', validate(subjectIdSchema), deleteSubject);

export default router;
