/**
 * @swagger
 * tags:
 *   - name: User
 *     description: User management endpoints
 * /api/user:
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
 * /api/user/{id}:
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
import { authenticate, authorizeRoles } from "../../middlewares/auth.middleware";
import {
  adminContact,
  getAccountProfile,
  listAccounts,
  loginAccount,
  logoutAccount,
  parentsContact,
  registerAccount,
  studentContact,
  superadminContact,
} from "../controllers/account.controller";
import {
  createUser,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/user.controller";

const router = Router();

// Account endpoints
router.post("/register", registerAccount);
router.post("/login", loginAccount);
router.post("/logout", logoutAccount);
router.get("/profile", authenticate, getAccountProfile);
router.get("/all", authenticate, authorizeRoles("superadmin"), listAccounts);

// Role-based contact endpoints
router.get(
  "/contact/admin",
  authenticate,
  authorizeRoles("admin"),
  adminContact
);
router.get(
  "/contact/student",
  authenticate,
  authorizeRoles("student"),
  studentContact
);
router.get(
  "/contact/superadmin",
  authenticate,
  authorizeRoles("superadmin"),
  superadminContact
);
router.get(
  "/contact/parents",
  authenticate,
  authorizeRoles("parents"),
  parentsContact
);

// User management endpoints
router.post("/", createUser);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
