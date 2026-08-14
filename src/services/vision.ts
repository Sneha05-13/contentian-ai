import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini API client
const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.warn("GEMINI_API_KEY is not defined in the environment variables.");
}

const genAI = new GoogleGenerativeAI(apiKey || "");

export interface ImageAnalysisResult {
  scene: string;
  objects: string[];
  colors: string[];
  mood: string;
  style: string;
  keywords: string[];
}

/**
 * Analyzes an image using Gemini Vision and returns structured JSON data.
 * @param imageBase64 The base64 encoded string of the image.
 * @param mimeType The MIME type of the image (e.g., 'image/jpeg', 'image/png').
 * @returns A parsed ImageAnalysisResult object or null if parsing fails.
 */
export async function analyzeImage(
  imageBase64: string,
  mimeType: string
): Promise<ImageAnalysisResult | null> {
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is missing. Cannot analyze image.");
  }

  try {
    // Choose a Gemini model that supports vision
    const model = genAI.getGenerativeModel({ model: 'gemini-3.5-flash' });

    const prompt = `You are an image analysis expert.

Analyze this image and return only valid JSON.

Return:
{
scene: "",
objects: [],
colors: [],
mood: "",
style: "",
keywords: []
}

Focus on:
* What is visible
* Visual style
* Emotions
* Useful SEO keywords`;

    const imagePart = {
      inlineData: {
        data: imageBase64,
        mimeType,
      },
    };

    // Generate content using the text prompt and the image
    const result = await model.generateContent([prompt, imagePart]);
    const response = await result.response;
    const text = response.text();
    
    // Parse the JSON safely
    try {
      // Strip out any potential markdown formatting around the JSON
      const jsonMatch = text.match(/```(?:json)?\n([\s\S]*?)\n```/);
      const jsonString = jsonMatch ? jsonMatch[1] : text;
      const parsedData = JSON.parse(jsonString.trim()) as ImageAnalysisResult;
      return parsedData;
    } catch (parseError) {
      console.error("Failed to parse Gemini response as JSON:", text, parseError);
      return null;
    }

  } catch (error) {
    console.error("Error analyzing image with Gemini:", error);
    throw error;
  }
}
