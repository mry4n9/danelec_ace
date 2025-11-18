{/* Backup for route.ts 
  
import { GoogleGenAI, Type } from "@google/genai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { count } = await request.json();

    const ai = new GoogleGenAI({
      apiKey: process.env.GOOGLE_API_KEY,
    });

    const prompt = `Write ${count} LinkedIn ads about Danelec Fleet Insights.
    The ads consists of three properties, each properties set should have consistency in terms of messaging.
    1. introductoryText: An engaging introduction paragraph about Danelec Fleet Insights (3-4 sentences).
    2. imageText: Acompanying image copy related to the introductoryText (6-9 words).
    3. headline: A catchy headline (5-7 words).
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents: prompt,
      config: {
        systemInstruction:
          "You are an experienced B2B SaaS copywriter with 20 years of expertise writing for C-suite executives and technical buyers. Your copy prioritizes clear ROI messaging and addresses buyer pain points directly. You write in a conversational but authoritative tone that builds credibility through specificity rather than hype. You focus on strategic benefits over features and avoid salesy language.",
        temperature: 0.4,
        topP: 0.95,
        topK: 40,
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
*/}