import prisma from "../config/prisma";
import { ProfileAIGeneratedDTO } from "../dto/profile.rag.dto";

export class ProfileRAGRepository {
  async saveGeneratedProfile(userId: string, data: ProfileAIGeneratedDTO) {
    return prisma.profile.upsert({
      where: { userId },
      update: { ...data },
      create: { ...data, userId }, // Ensure userId is set correctly
    });
  }
}
