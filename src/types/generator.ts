export interface GeneratedContent {
  versions: Record<string, string>[];
}

export type Platform = "Pinterest" | "Instagram" | "LinkedIn" | "Twitter/X" | "Threads" | "Facebook" | string;
export type Tone = "Professional" | "Casual" | "Friendly" | "Persuasive" | "Funny" | string;
export type ContentLength = "Short" | "Medium" | "Long" | string;
export type TargetAudience = "General" | "Students" | "Professionals" | "Business Owners" | "Creators" | "Developers" | string;
export type Language = "English" | "Hindi" | "Hinglish" | string;

export interface ImageAnalysis {
  scene: string;
  objects: string[];
  colors: string[];
  mood: string;
  style: string;
  audience: string;
  keywords: string[];
}

export interface GeneratorSettings {
  tone: Tone;
  length: ContentLength;
  audience: TargetAudience;
  language: Language;
  creativity: number;
}

export interface APIRequest {
  prompt: string;
  platform: Platform;
  tone: Tone;
  length: ContentLength;
  audience: TargetAudience;
  language: Language;
  creativity: number;
  image?: {
    data: string;
    mimeType: string;
  };
}

export interface APIResponse {
  title?: string;
  description?: string;
  caption?: string;
  hashtags?: string | string[];
  error?: string;
}
