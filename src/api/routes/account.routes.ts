/**
 * @swagger
 * tags:
 *   - name: Account
 *     description: Account management endpoints
 * /api/account/register:
 *   post:
 *     tags:
 *       - Account
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
 *     tags:
 *       - Account
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
 *     tags:
 *       - Account
 *     summary: Logout from account
 *     responses:
 *       200:
 *         description: Logout successful
 * /api/account/profile:
 *   get:
 *     tags:
 *       - Account
 *     summary: Get logged-in account profile
 *     description: "Requires authentication. Accessible by all logged-in roles."
 *     responses:
 *       200:
 *         description: Account profile
 * /api/account/all:
 *   get:
 *     tags:
 *       - Account
 *     summary: List all accounts
 *     description: "Requires authentication. Accessible only by role: superadmin."
 *     responses:
 *       200:
 *         description: List of accounts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/AccountDTO'
 * /api/account/contact/admin:
 *   get:
 *     tags:
 *       - Account
 *     summary: Get admin contact info
 *     description: "Requires authentication. Accessible only by role: admin."
 *     responses:
 *       200:
 *         description: Admin contact info
 * /api/account/contact/student:
 *   get:
 *     tags:
 *       - Account
 *     summary: Get student contact info
 *     description: "Requires authentication. Accessible only by role: student."
 *     responses:
 *       200:
 *         description: Student contact info
 * /api/account/contact/superadmin:
 *   get:
 *     tags:
 *       - Account
 *     summary: Get superadmin contact info
 *     description: "Requires authentication. Accessible only by role: superadmin."
 *     responses:
 *       200:
 *         description: Superadmin contact info
 * /api/account/contact/parents:
 *   get:
 *     tags:
 *       - Account
 *     summary: Get parents contact info
 *     description: "Requires authentication. Accessible only by role: parents."
 *     responses:
 *       200:
 *         description: Parents contact info
 */

import { Router } from 'express';
import { authenticate, authorizeRoles } from '../../middlewares/auth.middleware';
import {
  adminContact,
  getAccountProfile,
  listAccounts,
  loginAccount,
  logoutAccount,
  parentsContact,
  registerAccount,
  studentContact,
  superadminContact
} from '../controllers/account.controller';

const router = Router();

router.post('/register', registerAccount);
router.post('/login', loginAccount);
router.post('/logout', logoutAccount);
router.get('/profile', authenticate, getAccountProfile);
router.get('/all', authenticate, authorizeRoles('superadmin'), listAccounts);
router.get('/contact/admin', authenticate, authorizeRoles('admin'), adminContact);
router.get('/contact/student', authenticate, authorizeRoles('student'), studentContact);
router.get('/contact/superadmin', authenticate, authorizeRoles('superadmin'), superadminContact);
router.get('/contact/parents', authenticate, authorizeRoles('parents'), parentsContact);

export default router;
