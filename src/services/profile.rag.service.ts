
import { ProfileAIGeneratedModel } from '../models/profile.rag.model';
import { generateProfileAndContactFromPrompt } from '../rag/model/ai.model';
import { ProfileRAGRepository } from '../repositories/profile.rag.repository';
import * as contactService from './contact.service';

export class ProfileRAGService {
  constructor(private profileRepo: ProfileRAGRepository) { }

  async generateProfileAndContactFromPrompt(prompt: string, userId: string) {
    const generated = await generateProfileAndContactFromPrompt(prompt);

    // Save profile
    const profile: ProfileAIGeneratedModel = {
      userId,
      firstName: generated.profile.firstName,
      lastName: generated.profile.lastName,
      bio: generated.profile.bio,
      gender: generated.profile.gender,
      avatarUrl: generated.profile.avatarUrl,
      dateOfBirth: generated.profile.dateOfBirth ? new Date(generated.profile.dateOfBirth) : null,
    };
    await this.profileRepo.saveGeneratedProfile(userId, profile);

    // Save contact
    const contact = await contactService.createContact(userId, {
      phone: generated.contact.phone,
      alternatePhone: generated.contact.alternatePhone,
      address: generated.contact.address,
      city: generated.contact.city,
      state: generated.contact.state,
      country: generated.contact.country,
      zipCode: generated.contact.zipCode,
    });

    return { profile, contact };
  }
}
