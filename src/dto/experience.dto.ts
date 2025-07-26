export interface ExperienceDTO {
  id: number;
  company: string;
  position: string;
  description: string;
  start_date: Date;
  end_date?: Date | null;
}
