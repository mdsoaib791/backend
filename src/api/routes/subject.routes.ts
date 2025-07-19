import { Router } from 'express';
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

router.post('/', createSubject);
router.get('/:id', getSubjectById);
router.put('/:id', updateSubject);
router.delete('/:id', deleteSubject);

export default router;
