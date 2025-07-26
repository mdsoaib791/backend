import { ContactDTO } from "../dto/contact.dto";
import * as contactRepo from "../repositories/contact.repository";

export const getAllContacts = async (): Promise<ContactDTO[]> => {
  return await contactRepo.getAllContacts() as ContactDTO[];
};

export const createContact = contactRepo.createContact as (...args: any[]) => Promise<ContactDTO>;
export const getContactById = contactRepo.getContactById as (id: number) => Promise<ContactDTO | null>;
export const deleteContactById = contactRepo.deleteContactById;
