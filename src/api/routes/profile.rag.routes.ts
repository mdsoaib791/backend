import { Router } from 'express';
import { authenticate } from '../../middlewares/auth.middleware';
import { generateProfileAI } from '../controllers/profile.rag.controller';

const router = Router();

/**
 * @swagger
 * /api/profile/ai-generate:
 *   post:
 *     tags:
 *       - Profile
 *     summary: Generate profile data using AI
 *     description: Generates and saves user profile data based on a prompt using an AI model. Requires authentication.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               prompt:
 *                 type: string
 *                 example: "I am a software developer with 5 years experience in React and Node.js"
 *     responses:
 *       200:
 *         description: Successfully generated and saved profile data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProfileDTO'
 *       400:
 *         description: Validation failed
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Invalid or expired token
 */
router.post('/ai-generate', authenticate, generateProfileAI);

export default router;
