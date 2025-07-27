import { ProfileAIGeneratedModel } from '../models/profile.rag.model';
import { generateProfileFromPrompt } from '../rag/model/ai.model';
import { ProfileRAGRepository } from '../repositories/profile.rag.repository';

export class ProfileRAGService {
  constructor(private profileRepo: ProfileRAGRepository) { }

  async generateProfileFromPrompt(prompt: string, userId: string): Promise<ProfileAIGeneratedModel> {
    const generatedData = await generateProfileFromPrompt(prompt); // <== AI call

    const profile: ProfileAIGeneratedModel = {
      userId,
      firstName: generatedData.firstName,
      lastName: generatedData.lastName,
      bio: generatedData.bio,
      gender: generatedData.gender,
      avatarUrl: generatedData.avatarUrl,
      dateOfBirth: generatedData.dateOfBirth,
    };

    await this.profileRepo.saveGeneratedProfile(userId, profile);
    return profile;
  }
}
