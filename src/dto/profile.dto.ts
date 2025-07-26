export interface ProfileDTO {
  id: number;
  user_id: number;
  full_name: string;
  title: string;
  bio?: string | null;
  profile_picture?: string | null;
}
