export interface ProjectModel {
  id: number;
   user_id: string;
  title: string;
  description: string;
  tech_stack: string[];
  github_url?: string | null;
  live_url?: string | null;
  thumbnail?: string | null;
  created_at: Date;
}
