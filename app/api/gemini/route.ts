import { GoogleGenAI, Type } from "@google/genai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { count } = await request.json();

    const ai = new GoogleGenAI({
      apiKey: process.env.GOOGLE_API_KEY,
    });

    const prompt = `Generate ${count} creative marketing content items about Danelec Fleet Insights.
    For each item, produce the following fields:
    1. introductoryText En engaging introduction paragraph (2-3 sentences)
    2. imageText: A descriptive text suitable for an ad image (10-15 words)
    3. headline: A catchy headline (5-10 words)
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-exp",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              introductoryText: {
                type: Type.STRING,
              },
              imageText: { type: Type.STRING },
              headline: { type: Type.STRING },
            },
            propertyOrdering: ["introductoryText", "imageText", "headline"],
          },
        },
      },
    });

    console.log("Response:", response.text);

    const results = JSON.parse(response.text);

    return NextResponse.json({ results });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Failed to generate content" },
      { status: 500 }
    );
  }
}
