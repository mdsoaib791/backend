


/**
 * @swagger
 * tags:
 *   - name: Project
 *     description: Portfolio project management
 * /api/project:
 *   post:
 *     tags: [Project]
 *     summary: Create a new project
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProjectDTO'
 *     responses:
 *       201:
 *         description: Project created
 *   get:
 *     tags: [Project]
 *     summary: Get all projects
 *     responses:
 *       200:
 *         description: A list of projects
 * /api/project/{id}:
 *   get:
 *     tags: [Project]
 *     summary: Get project by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single project
 *       404:
 *         description: Project not found
 *   put:
 *     tags: [Project]
 *     summary: Update project by ID
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
 *             $ref: '#/components/schemas/ProjectDTO'
 *     responses:
 *       200:
 *         description: Updated project
 *   delete:
 *     tags: [Project]
 *     summary: Delete project by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Project deleted
 */

import { Router } from "express";
import { validate } from "../../middlewares/validate.middleware";


import { createProject, deleteProject, getAllProjects, getProjectById, updateProject } from "../controllers/projects.controller";
import { projectSchema } from "../validators/project.schema";

const router = Router();



router.post("/", validate(projectSchema), createProject);
router.get("/", getAllProjects);
router.get("/:id", getProjectById);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

export default router;
