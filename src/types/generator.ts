export interface GeneratedContent {
  title: string;
  description: string;
  caption: string;
  hashtags: string;
}

export type Platform = "Pinterest" | "Instagram" | "LinkedIn" | "Twitter/X" | string;
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
