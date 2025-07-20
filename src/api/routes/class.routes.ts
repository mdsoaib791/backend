import { Router } from 'express';
import { validate } from '../../middlewares/validate.middleware';
import { classIdSchema, classSchema, updateClassSchema } from '../../validators/class.schema';
import {
  createClass,
  deleteClass,
  getClassById,
  updateClass,
} from '../controllers/class.controller';

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Class
 *     description: Class management endpoints
 * /api/class:
 *   post:
 *     tags:
 *       - Class
 *     summary: Create a class
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ClassDTO'
 *     responses:
 *       201:
 *         description: Class created
 * /api/class/{id}:
 *   get:
 *     tags:
 *       - Class
 *     summary: Get class by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Class found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ClassDTO'
 *       404:
 *         description: Class not found
 *   put:
 *     tags:
 *       - Class
 *     summary: Update class
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
 *             $ref: '#/components/schemas/ClassDTO'
 *     responses:
 *       200:
 *         description: Class updated
 *   delete:
 *     tags:
 *       - Class
 *     summary: Delete class
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Class deleted
 */

router.post('/', validate(classSchema), createClass);
router.get('/:id', validate(classIdSchema), getClassById);
router.put('/:id', validate(classIdSchema), validate(updateClassSchema), updateClass);
router.delete('/:id', validate(classIdSchema), deleteClass);

export default router;
