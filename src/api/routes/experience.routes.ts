/**
 * @swagger
 * tags:
 *   - name: Experience
 *     description: Experience CRUD operations
 * /api/experiences:
 *   post:
 *     tags:
 *       - Experience
 *     summary: Create a new experience entry
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ExperienceDTO'
 *     responses:
 *       201:
 *         description: Experience created successfully
 *   get:
 *     tags:
 *       - Experience
 *     summary: Get all experiences
 *     responses:
 *       200:
 *         description: List of experiences
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ExperienceDTO'
 * /api/experiences/{id}:
 *   get:
 *     tags:
 *       - Experience
 *     summary: Get experience by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Single experience object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ExperienceDTO'
 *       404:
 *         description: Experience not found
 *   put:
 *     tags:
 *       - Experience
 *     summary: Update experience
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ExperienceDTO'
 *     responses:
 *       200:
 *         description: Experience updated
 *   delete:
 *     tags:
 *       - Experience
 *     summary: Delete experience
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Experience deleted successfully
 */

import { Router } from "express";
import { validate } from "../../middlewares/validate.middleware";
import {
  createExperience,
  deleteExperience,
  getAllExperiences,
  getExperienceById,
  updateExperience,
} from "../controllers/experience.controller";
import { experienceSchema } from "../validators/experience.schema";

const router = Router();

router.post("/", validate(experienceSchema), createExperience);
router.get("/", getAllExperiences);
router.get("/:id", getExperienceById);
router.put("/:id", updateExperience);
router.delete("/:id", deleteExperience);

export default router;
