import axios from "axios";

export async function generateProfileFromPrompt(input: string) {
  const prompt = `
You are an AI that generates realistic, personal user profiles for a web application.

Generate a believable and human-like user profile based on the given input context, which may include details like profession, interests, location, or background.

Each profile must include:
- First Name: realistic and culturally appropriate
- Last Name: realistic and culturally appropriate
- Gender: Male, Female, or Non-binary
- Bio: a short, natural-sounding paragraph (1–3 sentences) that reflects the user's personality, profession, hobbies, and values based on the context.
  - It should read like something the user would write themselves in a friendly tone.
  - Include small, humanizing details like passions, quirks, or aspirations.
  - Avoid generic or repetitive phrases like "likes to travel" unless contextually supported.
- Date of Birth: format as YYYY-MM-DD (must be plausible for an adult user, aged 18–60)
- Avatar URL: a valid and realistic-looking avatar image URL from a royalty-free source (e.g., ui-avatars.com, robohash.org, or generated.photos)

Input Context: ${input}

Respond **only** in the following format (no extra text or explanation):
First Name: ...
Last Name: ...
Gender: ...
Bio: ...
Date of Birth: ...
Avatar URL: ...

Ensure the profile sounds authentic, well-rounded, and specific to the given context.
`;

  const response = await axios.post("http://localhost:11434/api/generate", {
    model: "llama3", // or your model name
    prompt,
    stream: false,
  });

  const content = response.data.response;

  return {
    firstName: extractField(content, "First Name"),
    lastName: extractField(content, "Last Name"),
    gender: extractField(content, "Gender"),
    bio: extractField(content, "Bio"),
    dateOfBirth: new Date("1990-01-01"), // 👈 Optional parsing logic later
    avatarUrl: extractField(content, "Avatar URL"),
  };
}

function extractField(text: string, label: string): string | null {
  const match = text.match(new RegExp(`${label}:\\s*(.*)`));
  return match ? match[1].trim() : null;
}
