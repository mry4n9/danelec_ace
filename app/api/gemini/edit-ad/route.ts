import { GoogleGenAI, Type } from "@google/genai";
import { NextResponse } from "next/server";
import { Ad } from "@/types/ad";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      currentAd,
      solution,
      subSolution,
      funnel,
      fieldsToEdit,
      quickActions,
      customInstruction,
    } = body;

    if (!currentAd || !solution || !subSolution || !funnel) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GOOGLE_API_KEY,
    });

    // Build the edit instruction from quick actions and custom instruction
    let editInstruction = "";
    
    if (quickActions && quickActions.length > 0) {
      editInstruction += `Apply these modifications: ${quickActions.join(", ")}. `;
    }
    
    if (customInstruction && customInstruction.trim()) {
      editInstruction += `Additional instruction: ${customInstruction.trim()}.`;
    }

    // Build field-specific instructions
    const fieldsToRegenerate = fieldsToEdit || {
      introductoryText: true,
      imageText: true,
      headline: true,
    };

    let fieldInstructions = "";
    if (fieldsToRegenerate.introductoryText) {
      fieldInstructions += "Regenerate the introductoryText. ";
    }
    if (fieldsToRegenerate.imageText) {
      fieldInstructions += "Regenerate the imageText (6-9 words). ";
    }
    if (fieldsToRegenerate.headline) {
      fieldInstructions += "Regenerate the headline (5-7 words). ";
    }

    const prompt = `You are editing a LinkedIn ad for Danelec.

Context:
- Product: ${solution}
- Focus on this part: ${subSolution}
- Marketing funnel stage: ${funnel}

Current ad content:
- Introductory Text: "${currentAd.introductoryText}"
- Image Text: "${currentAd.imageText}"
- Headline: "${currentAd.headline}"

Edit instructions:
${editInstruction}

${fieldInstructions}

Maintain consistency across all fields. If regenerating multiple fields, ensure they work together cohesively. Keep the same tone and messaging style as the original, but apply the requested modifications.

Output Format:
Return a JSON object with the regenerated fields. Only include fields that were requested to be regenerated. If a field was not requested, it should not be included in the response.`;

    const systemInstruction =
      `You are an experienced B2B SaaS copywriter with 20 years of expertise writing for C-suite executives and technical buyers.
      Your copy prioritizes clear ROI messaging and addresses buyer pain points directly.
      You write in a conversational but authoritative tone that builds credibility through specificity rather than hype.
      You focus on strategic benefits over features and avoid salesy language.`;

    // Build response schema dynamically based on fields to edit
    const properties: Record<string, { type: Type }> = {};
    const propertyOrdering: string[] = [];

    if (fieldsToRegenerate.introductoryText) {
      properties.introductoryText = { type: Type.STRING };
      propertyOrdering.push("introductoryText");
    }
    if (fieldsToRegenerate.imageText) {
      properties.imageText = { type: Type.STRING };
      propertyOrdering.push("imageText");
    }
    if (fieldsToRegenerate.headline) {
      properties.headline = { type: Type.STRING };
      propertyOrdering.push("headline");
    }

    // Ensure at least one field is selected
    if (Object.keys(properties).length === 0) {
      return NextResponse.json(
        { error: "At least one field must be selected for editing" },
        { status: 400 }
      );
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.4,
        topP: 0.95,
        topK: 40,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties,
          propertyOrdering,
        },
      },
    });

    const responseText = response.text;

    if (!responseText) {
      return NextResponse.json(
        { error: "No response from model" },
        { status: 500 }
      );
    }

    const results = JSON.parse(responseText);

    // Merge with original ad, only updating requested fields
    const editedAd: Ad = {
      introductoryText: results.introductoryText ?? currentAd.introductoryText,
      imageText: results.imageText ?? currentAd.imageText,
      headline: results.headline ?? currentAd.headline,
    };

    return NextResponse.json({ editedAd });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Failed to generate content" },
      { status: 500 }
    );
  }
}

