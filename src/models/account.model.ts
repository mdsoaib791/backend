export interface Account {
  id: number;
  email: string;
  password: string;
  role: 'admin' | 'student' | 'teacher' | 'superadmin' | 'parents';
  created_at: Date;
}
