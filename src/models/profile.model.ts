export interface ProfileModel {
  id: number;
  userId: string;
  firstName: string | null;
  lastName: string | null;
  dateOfBirth: Date|null;
  gender: string | null;
  bio: string | null;
  avatarUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
}

