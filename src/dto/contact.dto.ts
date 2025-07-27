export interface ContactDTO {
  id: number;
  user_id: string;
  full_name: string;
  email: string;
  subject: string;
  message: string;
  created_at: Date;
}
