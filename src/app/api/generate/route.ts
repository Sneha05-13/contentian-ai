import Groq from "groq-sdk";
import { NextResponse } from "next/server";
import { APIRequest, ImageAnalysis } from "@/types/generator";
import { buildPrompt } from "@/lib/promptBuilder";
import { parseAIResponse } from "@/lib/parser";
import { analyzeImage } from "@/services/vision";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: Request) {
  try {
    const body: APIRequest = await req.json();
    const { prompt, platform, image, tone, length, audience, language, creativity } = body;

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

    let imageAnalysis;
    if (image) {
      try {
        const rawAnalysis = await analyzeImage(image.data, image.mimeType);
        if (!rawAnalysis) {
          return NextResponse.json(
            { error: "Unable to analyze the uploaded image. Please try another image." },
            { status: 500 }
          );
        }
        imageAnalysis = {
          ...rawAnalysis,
          audience: audience || "General"
        };
      } catch (error) {
        console.error("Gemini Vision API Error:", error);
        return NextResponse.json(
          { error: "Unable to analyze the uploaded image. Please try another image." },
          { status: 500 }
        );
      }
    }

    const finalPromptContent = buildPrompt({
      platform,
      description: prompt,
      tone: tone || "Professional",
      contentLength: length || "Medium",
      audience: audience || "General",
      language: language || "English",
      creativity: creativity || 5,
      imageAnalysis
    });

    const chatCompletion = await groq.chat.completions.create({
      messages: [
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
      json = parseAIResponse(responseContent, platform);
    } catch (parseError: any) {
      console.error("Failed to parse AI response:", responseContent, parseError);
      return NextResponse.json(
        { error: parseError.message || "AI generated invalid data. Please try again with a different prompt." },
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
