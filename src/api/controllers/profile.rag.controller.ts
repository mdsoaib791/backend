import { Request, Response } from 'express';
import { ProfileRAGRepository } from '../../repositories/profile.rag.repository';
import { ProfileRAGService } from '../../services/profile.rag.service';
import { profileAIPromptSchema } from '../validators/profile.rag.schema';

const service = new ProfileRAGService(new ProfileRAGRepository());

export const generateProfileAI = async (req: Request, res: Response) => {
  const parseResult = profileAIPromptSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({ error: 'Validation failed', details: parseResult.error.issues });
  }

  const userId = (req as any).user?.userId;
  const prompt = parseResult.data.prompt;

  try {
    const { profile, contact } = await service.generateProfileAndContactFromPrompt(prompt, userId);
    return res.status(200).json({ profile, contact });
  } catch (error) {
    console.error("AI generation error:", error);
    return res.status(500).json({ error: "AI generation failed" });
  }
};
