export interface ProjectDTO {
  id: number;
  title: string;
  description: string;
  tech_stack: string[];
  github_url?: string | null;
  live_url?: string | null;
  thumbnail?: string | null;
}
