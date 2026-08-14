import { GeneratedContent, Platform } from "@/types/generator";

export function parseAIResponse(response: string, platform: Platform): GeneratedContent {
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
  if (!parsed || typeof parsed !== "object" || !Array.isArray(parsed.versions)) {
    throw new Error("The AI response format was unexpected. Expected versions array. Please try again.");
  }

  const requiredFieldsByPlatform: Record<string, string[]> = {
    Pinterest: ["seoTitle", "pinDescription", "hashtags"],
    Instagram: ["hook", "caption", "hashtags"],
    LinkedIn: ["headline", "professionalPost", "hashtags"],
    Threads: ["mainPost", "alternativeVersion", "hashtags"],
    "Twitter/X": ["tweet", "alternativeTweet", "hashtags"],
    Facebook: ["post", "hashtags"],
  };

  const requiredFields = requiredFieldsByPlatform[platform as string] || ["title", "description", "caption", "hashtags"];

  parsed.versions.forEach((version: any, index: number) => {
    if (!version || typeof version !== "object") {
      throw new Error(`Version ${index + 1} is invalid.`);
    }

    for (const field of requiredFields) {
      if (version[field] === undefined || version[field] === null) {
        throw new Error(`Missing or invalid '${field}' in AI response for version ${index + 1}.`);
      }
    }

    // Handle hashtags that might be a string or array of strings
    let finalHashtags = "";
    if (Array.isArray(version.hashtags)) {
      finalHashtags = version.hashtags
        .map((tag: any) => typeof tag === "string" ? tag.trim() : "")
        .filter(Boolean)
        .join(" ");
    } else if (typeof version.hashtags === "string") {
      finalHashtags = version.hashtags.trim();
    } else {
      throw new Error(`Missing or invalid 'hashtags' in AI response for version ${index + 1}.`);
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
    
    version.hashtags = finalHashtags;
  });

  return parsed as GeneratedContent;
}
