import { 
  Platform, 
  Tone, 
  ContentLength, 
  TargetAudience, 
  Language, 
  ImageAnalysis 
} from "@/types/generator";

export interface BuildPromptParams {
  platform: Platform;
  description?: string;
  tone: Tone;
  language: Language;
  audience: TargetAudience;
  contentLength: ContentLength;
  creativity: number;
  imageAnalysis?: ImageAnalysis;
}

export function buildPrompt(params: BuildPromptParams): string {
  const {
    platform,
    description,
    tone,
    language,
    audience,
    contentLength,
    creativity,
    imageAnalysis
  } = params;

  let prompt = `You are Contentian AI, an expert social media manager and content creator.\n\n`;

  // 1. Platform instructions
  prompt += `--- PLATFORM ---\nGenerate content optimized for ${platform}.\n\n`;

  // 2. Image understanding
  if (imageAnalysis) {
    prompt += `--- IMAGE CONTEXT ---\nThe following image was provided:\n`;
    prompt += `- Scene: ${imageAnalysis.scene}\n`;
    prompt += `- Objects: ${imageAnalysis.objects.join(", ")}\n`;
    prompt += `- Colors: ${imageAnalysis.colors.join(", ")}\n`;
    prompt += `- Mood: ${imageAnalysis.mood}\n`;
    prompt += `- Style: ${imageAnalysis.style}\n`;
    prompt += `- Audience: ${imageAnalysis.audience}\n`;
    prompt += `- Keywords: ${imageAnalysis.keywords.join(", ")}\n\n`;
  }

  // 3. User description
  if (description && description.trim()) {
    prompt += `--- USER IDEA ---\n${description.trim()}\n\n`;
  } else if (!description && imageAnalysis) {
    prompt += `--- USER IDEA ---\nGenerate engaging content based on the provided image context.\n\n`;
  }

  // 4. Tone
  prompt += `--- TONE ---\n${tone}\n\n`;

  // 5. Audience
  prompt += `--- TARGET AUDIENCE ---\n${audience}\n\n`;

  // 6. Language
  prompt += `--- LANGUAGE ---\nWrite the content in ${language}.\n\n`;

  // 7. Content length
  prompt += `--- CONTENT LENGTH ---\n${contentLength}\n\n`;

  // 8. JSON response instructions
  prompt += `--- OUTPUT FORMAT ---\n`;
  prompt += `You MUST return only valid JSON.\n`;
  prompt += `No markdown wrappers. No explanations.\n\n`;
  prompt += `JSON structure:\n`;
  prompt += `{\n`;
  prompt += `  "title": "string",\n`;
  prompt += `  "description": "string",\n`;
  prompt += `  "caption": "string",\n`;
  prompt += `  "hashtags": ["string"]\n`;
  prompt += `}\n\n`;

  prompt += `Rules:\n`;
  prompt += `* Generate SEO friendly content.\n`;
  prompt += `* Match the selected platform's best practices.\n`;
  prompt += `* Make captions engaging.\n`;
  prompt += `* Generate 8-12 relevant hashtags.\n`;
  prompt += `* Adjust your output's creativity to ${creativity}/10 (where 1 is strictly factual and 10 is highly imaginative).\n`;

  return prompt;
}
