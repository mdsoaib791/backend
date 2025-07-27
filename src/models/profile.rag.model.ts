export interface ProfileAIGeneratedModel {
  userId: string;
  firstName: string | null;
  lastName: string | null;
  dateOfBirth: Date | null;
  gender: string | null;
  bio: string | null;
  avatarUrl: string | null;
}
