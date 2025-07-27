export interface ProfileModel {
  id: number;
  user_id: string;
  full_name: string;
  title: string;
  bio: string | null;
  profile_picture?: string | null;
  created_at: Date;
  updated_at: Date;
}

