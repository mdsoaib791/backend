/**
 * @swagger
 * tags:
 *   - name: Account
 *     description: Account management endpoints
 * /api/account/register:
 *   post:
 *     tags: [Account]
 *     summary: Register a new account
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AccountRegister'
 *     responses:
 *       201:
 *         description: Account registered
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AccountDTO'
 * /api/account/login:
 *   post:
 *     tags: [Account]
 *     summary: Login to account
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 * /api/account/logout:
 *   post:
 *     tags: [Account]
 *     summary: Logout from account
 *     responses:
 *       200:
 *         description: Logout successful
 * /api/account/profile:
 *   get:
 *     tags: [Account]
 *     summary: Get logged-in account profile
 *     responses:
 *       200:
 *         description: Account profile
 * /api/account/all:
 *   get:
 *     tags: [Account]
 *     summary: List all accounts (admin)
 *     responses:
 *       200:
 *         description: List of accounts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/AccountDTO'
  */

import { Router } from 'express';
import { authenticate, authorizeRoles } from '../../middlewares/auth.middleware';
import { validate } from '../../middlewares/validate.middleware';
import {
  getAccountProfile,
  listAccounts,
  loginAccount,
  logoutAccount,
  registerAccount,
} from '../controllers/account.controller';
import { accountSchema } from '../validators/account.schema';

const router = Router();

router.post('/register', validate(accountSchema), registerAccount);
router.post('/login', loginAccount);
router.post('/logout', logoutAccount);
router.get('/profile', authenticate, getAccountProfile);
router.get('/all', authenticate, authorizeRoles('admin'), listAccounts);

export default router;
