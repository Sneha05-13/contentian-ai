import { GeneratedContent } from "@/types/generator";

export function parseAIResponse(response: string): GeneratedContent {
  if (!response || typeof response !== "string") {
    throw new Error("Received empty or invalid response from AI.");
  }

  // 1. Clean the response string
  let cleanString = response.trim();

  // Remove markdown code blocks if present (e.g. ```json ... ```)
  const codeBlockRegex = /```(?:json)?\s*([\s\S]*?)\s*```/i;
  const match = cleanString.match(codeBlockRegex);
  
  if (match && match[1]) {
    cleanString = match[1].trim();
  } else {
    // If no markdown match but it starts with ``` or ```json
    cleanString = cleanString.replace(/^```(json)?\s*/i, "").replace(/\s*```$/i, "").trim();
  }

  // 2. Safely parse JSON
  let parsed: any;
  try {
    parsed = JSON.parse(cleanString);
  } catch (error) {
    throw new Error("The AI generated an invalid format. Please try again or modify your prompt.");
  }

  // 3. Validate required fields
  if (!parsed || typeof parsed !== "object") {
    throw new Error("The AI response format was unexpected. Please try again.");
  }

  const { title, description, caption, hashtags } = parsed;

  if (typeof title !== "string") {
    throw new Error("Missing or invalid 'title' in AI response.");
  }

  if (typeof description !== "string") {
    throw new Error("Missing or invalid 'description' in AI response.");
  }

  if (typeof caption !== "string") {
    throw new Error("Missing or invalid 'caption' in AI response.");
  }

  // Handle hashtags that might be a string or array of strings
  let finalHashtags = "";
  if (Array.isArray(hashtags)) {
    finalHashtags = hashtags
      .map(tag => typeof tag === "string" ? tag.trim() : "")
      .filter(Boolean)
      .join(" ");
  } else if (typeof hashtags === "string") {
    finalHashtags = hashtags.trim();
  } else {
    throw new Error("Missing or invalid 'hashtags' in AI response.");
  }

  // Ensure hashtags start with # if they don't already
  if (finalHashtags) {
    finalHashtags = finalHashtags
      .split(/\s+/)
      .map(tag => {
        if (!tag) return "";
        return tag.startsWith("#") ? tag : `#${tag}`;
      })
      .filter(Boolean)
      .join(" ");
  }

  return {
    title,
    description,
    caption,
    hashtags: finalHashtags,
  };
}
