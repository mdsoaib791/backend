export interface User {
  id: string; // UUID
  account_id: number;
  name: string;
  phone: string | null;
  address: string | null;
  dob: Date | null;
  created_at: Date;
}
