import prisma from "../config/prisma";

import { ContactModel } from "../models/contact.model";

export const createContact = async (
  user_id: number,
  full_name: string,
  email: string,
  subject: string,
  message: string
): Promise<ContactModel> => {
  return await prisma.contact.create({
    data: {
      user_id,
      full_name,
      email,
      subject,
      message,
    },
  });
};

export const getAllContacts = async (): Promise<ContactModel[]> => {
  return await prisma.contact.findMany({
    include: {
      account: true, // if you want account info
    },
  });
};

export const getContactById = async (id: number): Promise<ContactModel | null> => {
  return await prisma.contact.findUnique({ where: { id } });
};

export const deleteContactById = async (id: number): Promise<void> => {
  await prisma.contact.delete({ where: { id } });
};
