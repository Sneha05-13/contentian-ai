import Groq from "groq-sdk";
import { NextResponse } from "next/server";
import { APIRequest, ImageAnalysis } from "@/types/generator";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Reusable function for image analysis
async function analyzeImage(image: { data: string; mimeType: string }): Promise<ImageAnalysis> {
  // Placeholder mock data for now.
  // This can later be replaced with a real Vision AI API call.
  return {
    scene: "Cozy coffee shop",
    objects: ["Coffee cup", "laptop", "notebook"],
    colors: ["Brown", "beige"],
    mood: "Warm, aesthetic",
    style: "Minimal",
    audience: "Professionals, creatives",
    keywords: ["coffee", "work", "aesthetic"]
  };
}

export async function POST(req: Request) {
  try {
    const body: APIRequest = await req.json();
    const { prompt, platform, image } = body;

    if ((!prompt && !image) || !platform) {
      return NextResponse.json(
        { error: "Prompt (or image) and platform are required." },
        { status: 400 }
      );
    }

    if (!process.env.GROQ_API_KEY) {
      console.error("GROQ_API_KEY is not set in environment variables.");
      return NextResponse.json(
        { error: "Server configuration error. API key missing." },
        { status: 500 }
      );
    }

    let finalPromptContent = `Platform: ${platform}\n\n`;

    if (image) {
      const imageAnalysis = await analyzeImage(image);
      finalPromptContent += `Image Analysis:\n`;
      finalPromptContent += `- Scene: ${imageAnalysis.scene}\n`;
      finalPromptContent += `- Objects: ${imageAnalysis.objects.join(", ")}\n`;
      finalPromptContent += `- Mood: ${imageAnalysis.mood}\n`;
      finalPromptContent += `- Colors: ${imageAnalysis.colors.join(", ")}\n`;
      finalPromptContent += `- Style: ${imageAnalysis.style}\n\n`;
    }

    if (prompt) {
      finalPromptContent += `User Prompt:\n"${prompt}"`;
    } else {
      finalPromptContent += `User Prompt:\n"Generate content based on the image analysis."`;
    }

    const systemPrompt = `You are Contentian AI.

You MUST return only valid JSON.
No markdown.
No explanations.

JSON format:

{
"title": "string",
"description": "string",
"caption": "string",
"hashtags": [
"string"
]
}

Rules:

* Generate SEO friendly content.
* Match the selected platform.
* Make captions engaging.
* Generate 8-12 relevant hashtags.`;

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: finalPromptContent,
        }
      ],
      model: "llama-3.1-8b-instant",
      response_format: { type: "json_object" },
    });

    const responseContent = chatCompletion.choices[0]?.message?.content || "{}";
    let json;
    try {
      json = JSON.parse(responseContent);
      
      // Basic validation to ensure expected fields exist
      if (!json.title && !json.description && !json.caption) {
        throw new Error("Invalid response structure from AI");
      }

      // Format hashtags: ensure "#" prefix, remove duplicates, keep clean
      if (Array.isArray(json.hashtags)) {
        const formatted = json.hashtags
          .map((tag: string) => tag.trim())
          .filter(Boolean)
          .map((tag: string) => (tag.startsWith("#") ? tag : `#${tag}`));
          
        json.hashtags = Array.from(new Set(formatted));
      }
    } catch (parseError) {
      console.error("Failed to parse AI response:", responseContent);
      return NextResponse.json(
        { error: "AI generated invalid data. Please try again with a different prompt." },
        { status: 502 }
      );
    }

    return NextResponse.json(json);
  } catch (error) {
    console.error("Groq API Error:", error);
    return NextResponse.json(
      { error: "Failed to generate content. Please try again later." },
      { status: 500 }
    );
  }
}
