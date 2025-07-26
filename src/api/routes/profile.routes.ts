/**
 * @swagger
 * tags:
 *   - name: Profile
 *     description: Portfolio profile management
 * /api/profile:
 *   post:
 *     tags: [Profile]
 *     summary: Create profile
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProfileDTO'
 *     responses:
 *       201:
 *         description: Profile created
 *   get:
 *     tags: [Profile]
 *     summary: Get profile by account ID
 *     parameters:
 *       - in: query
 *         name: user_id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Profile data
 *   put:
 *     tags: [Profile]
 *     summary: Update profile
 *     parameters:
 *       - in: query
 *         name: user_id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProfileDTO'
 *     responses:
 *       200:
 *         description: Updated profile
 */

import { Router } from "express";
import { validate } from "../../middlewares/validate.middleware";

import {
  createProfile,
  getProfileById,
  updateProfile,
} from "../controllers/profile.controller";
import { profileSchema } from "../validators/profile.schema";

const router = Router();

router.post("/", validate(profileSchema), createProfile);
router.get("/", getProfileById);
router.put("/", validate(profileSchema), updateProfile);

export default router;
