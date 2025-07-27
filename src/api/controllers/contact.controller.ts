import { Request, Response } from "express";
import { AuthRequest } from "../../middlewares/auth.middleware";
import * as contactService from "../../services/contact.service";

// Create a new contact
export const createContact = async (req: AuthRequest, res: Response) => {
  try {
    const user_id = req.user?.userId;

    if (!user_id) {
      return res.status(401).json({ error: "Unauthorized: User ID not found" });
    }

    const { full_name, email, subject, message } = req.body;

    const contact = await contactService.createContact(
      user_id.toString(), // Prisma expects `string` if your DB column is String
      full_name,
      email,
      subject,
      message
    );

    res.status(201).json(contact);
  } catch (error) {
    console.error("Create contact failed:", error);
    res.status(500).json({
      error: "Failed to create contact",
      message: error instanceof Error ? error.message : String(error),
    });
  }
};

// Get all contacts
export const getAllContacts = async (_req: Request, res: Response) => {
  try {
    const contacts = await contactService.getAllContacts();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
};

// Get contact by ID
export const getContactById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const contact = await contactService.getContactById(id);
    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch contact" });
  }
};

// Delete contact by ID
export const deleteContact = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    await contactService.deleteContactById(id);
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete contact" });
  }
};

