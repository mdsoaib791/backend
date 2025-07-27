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
 *     summary: Get all profiles
 *     responses:
 *       200:
 *         description: All profiles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ProfileDTO'
 * /api/profile/{id}:
 *   get:
 *     tags: [Profile]
 *     summary: Get a profile by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Profile found
 *   put:
 *     tags: [Profile]
 *     summary: Update a profile by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProfileDTO'
 *     responses:
 *       200:
 *         description: Profile updated
 *   delete:
 *     tags: [Profile]
 *     summary: Delete a profile by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Profile deleted
 */
import { Router } from "express";
import { validate } from "../../middlewares/validate.middleware";
import {
  createProfile,
  deleteProfile,
  getAllProfiles,
  getProfileById,
  updateProfile,
} from "../controllers/profile.controller";
import { profileSchema } from "../validators/profile.schema";

const router = Router();

router.post("/", validate(profileSchema), createProfile);
router.get("/", getAllProfiles);
router.get("/:id", getProfileById);
router.put("/:id", validate(profileSchema), updateProfile);
router.delete("/:id", deleteProfile);

export default router;
