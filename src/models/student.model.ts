export interface Student {
  id: number;
  user_id: string; // UUID
  class_id: number;
  roll_number: string;
  admission_date: Date | null;
}
