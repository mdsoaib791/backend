/**
 * @swagger
 * tags:
 *   - name: Contact
 *     description: Contact form submissions
 * /api/contacts:
 *   post:
 *     tags:
 *       - Contact
 *     summary: Submit contact form
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ContactDTO'
 *     responses:
 *       201:
 *         description: Contact created
 *   get:
 *     tags:
 *       - Contact
 *     summary: Get all contacts
 *     responses:
 *       200:
 *         description: List of contacts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ContactDTO'
 * /api/contacts/{id}:
 *   get:
 *     tags:
 *       - Contact
 *     summary: Get a contact by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Contact found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ContactDTO'
 *       404:
 *         description: Contact not found
 *   delete:
 *     tags:
 *       - Contact
 *     summary: Delete a contact by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Contact deleted
 */

import { Router } from "express";
import { validate } from "../../middlewares/validate.middleware";

import {
  createContact,
  deleteContact,
  getAllContacts,
  getContactById
} from "../controllers/contact.controller";
import { contactSchema } from "../validators/contact.schema";

const router = Router();

router.post("/", validate(contactSchema), createContact);
router.get("/", getAllContacts);
router.get("/:id", getContactById);
router.delete("/:id", deleteContact);

export default router;
