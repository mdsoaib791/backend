export interface UserDTO {
  id: number;
  account_id: number;
  name: string;
  phone?: string;
  address?: string;
  dob?: Date;
  created_at: Date;
}
