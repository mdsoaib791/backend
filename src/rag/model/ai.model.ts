import axios from "axios";

export async function generateProfileFromPrompt(input: string) {
  const prompt = `
Generate a user profile with the following fields:
- First Name
- Last Name
- Gender
- Bio (short paragraph)
- Date of Birth
- Avatar URL

Input: ${input}

Respond in format:
First Name: ...
Last Name: ...
Gender: ...
Bio: ...
Date of Birth: ...
Avatar URL: ...
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
