export interface AccountDTO {
  id: number;
  email: string;
  password?: string;
  role: string;
  created_at: Date;
}
