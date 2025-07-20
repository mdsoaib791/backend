/**
 * @swagger
 * tags:
 *   - name: User
 *     description: User management endpoints
 * /api/users:
 *   post:
 *     tags:
 *       - User
 *     summary: Create a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserDTO'
 *     responses:
 *       201:
 *         description: User created
 *   get:
 *     tags:
 *       - User
 *     summary: List all users
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/UserDTO'
 * /api/users/{id}:
 *   get:
 *     tags:
 *       - User
 *     summary: Get user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserDTO'
 *       404:
 *         description: User not found
 *   put:
 *     tags:
 *       - User
 *     summary: Update user
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
 *             $ref: '#/components/schemas/UserDTO'
 *     responses:
 *       200:
 *         description: User updated
 *   delete:
 *     tags:
 *       - User
 *     summary: Delete user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User deleted
 */

import { Router } from "express";
import { authenticate } from "../../middlewares/auth.middleware";
import { validate } from "../../middlewares/validate.middleware";
import { createUserSchema, loginSchema, registerSchema, updateUserSchema, userIdSchema } from "../../validators/user.schema";
import { createUser, deleteUser, getProfile, getUserById, listUsers, login, logout, register, updateUser } from "../controllers/user.controller";

const router = Router();


// Register endpoint
router.post("/register", validate(registerSchema), register);
// Login endpoint
router.post("/login", validate(loginSchema), login);
// Logout endpoint
router.post("/logout", logout);
// List users
router.get("/", listUsers);
// Get profile
router.get("/profile", authenticate, getProfile);

// Create user
router.post("/", validate(createUserSchema), createUser);
// Get user by ID
router.get("/:id", validate(userIdSchema), getUserById);
// Update user
router.put("/:id", validate(userIdSchema), validate(updateUserSchema), updateUser);
// Delete user
router.delete("/:id", validate(userIdSchema), deleteUser);

export default router;
