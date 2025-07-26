export interface ExperienceModel {
  id: number;
 user_id: string;
  company: string;
  position: string;
  role?: string;
  start_date: Date;
  end_date: Date | null;
  description: string;
  created_at: Date;
}



