/**
 * @swagger
 * tags:
 *   - name: Skill
 *     description: Manage skill entries
 * /api/skill:
 *   post:
 *     tags: [Skill]
 *     summary: Create a new skill
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SkillDTO'
 *     responses:
 *       201:
 *         description: Skill created successfully
 *   get:
 *     tags: [Skill]
 *     summary: Get all skills
 *     responses:
 *       200:
 *         description: List of skills
 * /api/skill/{id}:
 *   get:
 *     tags: [Skill]
 *     summary: Get a skill by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Skill data
 *       404:
 *         description: Skill not found
 *   put:
 *     tags: [Skill]
 *     summary: Update a skill by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SkillDTO'
 *     responses:
 *       200:
 *         description: Skill updated
 *   delete:
 *     tags: [Skill]
 *     summary: Delete a skill by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Skill deleted
 */

import { Router } from "express";

import { validate } from "../../middlewares/validate.middleware";
import { createSkill, deleteSkill, getAllSkills, getSkillById, updateSkill } from "../controllers/skills.controller";
import { skillSchema } from "../validators/skill.schema";

const router = Router();

router.post("/", validate(skillSchema), createSkill);
router.get("/", getAllSkills);
router.get("/:id", getSkillById);
router.put("/:id", updateSkill);
router.delete("/:id", deleteSkill);

export default router;


