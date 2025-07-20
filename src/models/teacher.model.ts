export interface Teacher {
  id: number;
  user_id: string; // UUID
  subject_id: number;
  hire_date: Date | null;
}
