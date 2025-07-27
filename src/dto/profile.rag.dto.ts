export interface ProfilePromptInputDTO {
  prompt: string;
}

export interface ProfileAIGeneratedDTO {
  userId: string;
  firstName: string | null;
  lastName: string | null;
  dateOfBirth: Date | null;
  gender: string | null;
  bio: string | null;
  avatarUrl: string | null;
}
