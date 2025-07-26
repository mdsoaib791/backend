import { Request, Response } from "express";
import * as contactService from "../../services/contact.service";

// Create a new contact
export const createContact = async (req: Request, res: Response) => {
  try {
    const { full_name, email, subject, message } = req.body;
    const contact = await contactService.createContact(full_name, email, subject, message);
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ error: "Failed to create contact" });
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

