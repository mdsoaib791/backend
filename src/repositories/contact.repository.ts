import prisma from "../config/prisma";
import { ContactModel } from "../models/contact.model";

export const createContact = async (
  userId: string,
  contactData: Omit<ContactModel, 'id' | 'userId' | 'createdAt' | 'updatedAt'>
): Promise<ContactModel> => {
  return await prisma.contact.create({
    data: {
      userId,
      ...contactData,
    },
  });
};

export const getAllContacts = async (): Promise<ContactModel[]> => {
  return await prisma.contact.findMany({
    include: {
      account: true, // if you want related account info
    },
  });
};

export const getContactById = async (id: number): Promise<ContactModel | null> => {
  return await prisma.contact.findUnique({
    where: { id },
  });
};

export const updateContactById = async (
  id: number,
  data: Partial<Omit<ContactModel, 'id' | 'userId' | 'createdAt' | 'updatedAt'>>
): Promise<ContactModel> => {
  return await prisma.contact.update({
    where: { id },
    data,
  });
};

export const deleteContactById = async (id: number): Promise<void> => {
  await prisma.contact.delete({
    where: { id },
  });
};
