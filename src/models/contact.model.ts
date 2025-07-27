export interface ContactModel {
  id: number;
  userId: string;
  phone: string | null;
  alternatePhone: string | null;
  address: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
  zipCode: string | null;
  createdAt: Date;
  updatedAt: Date;
}
