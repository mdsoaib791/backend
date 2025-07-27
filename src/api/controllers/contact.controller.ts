import { Request, Response } from "express";
import { AuthRequest } from "../../middlewares/auth.middleware";
import * as contactService from "../../services/contact.service";

// ✅ Create contact
export const createContact = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized: User ID not found" });
    }

    const {
      phone,
      alternatePhone,
      address,
      city,
      state,
      country,
      zipCode,
    } = req.body;

    const contact = await contactService.createContact(userId, {
      phone,
      alternatePhone,
      address,
      city,
      state,
      country,
      zipCode,
    });

    res.status(201).json({
      message: "Contact created successfully",
      contact,
    });
  } catch (error) {
    console.error("Create contact failed:", error);
    res.status(500).json({
      error: "Failed to create contact",
      message: error instanceof Error ? error.message : String(error),
    });
  }
};

// ✅ Get all contacts
export const getAllContacts = async (_req: Request, res: Response) => {
  try {
    const contacts = await contactService.getAllContacts();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
};

// ✅ Get contact by ID
export const getContactById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid contact ID" });
    }

    const contact = await contactService.getContactById(id);
    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }

    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch contact" });
  }
};

// ✅ Update contact
export const updateContact = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const {
      phone,
      alternatePhone,
      address,
      city,
      state,
      country,
      zipCode,
    } = req.body;

    const updated = await contactService.updateContactById(id, {
      phone,
      alternatePhone,
      address,
      city,
      state,
      country,
      zipCode,
    });

    res.status(200).json({ message: "Contact updated", contact: updated });
  } catch (error) {
    res.status(500).json({ error: "Failed to update contact" });
  }
};

// ✅ Delete contact
export const deleteContact = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    await contactService.deleteContactById(id);
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete contact" });
  }
};
