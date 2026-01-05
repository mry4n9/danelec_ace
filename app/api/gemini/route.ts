import { GoogleGenAI, Type } from "@google/genai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      solution,
      subSolution,
      funnel,
      customInstruction1,
      customInstruction2,
      customInstruction3,
      customInstruction4,
      whitePaper1,
      whitePaper2,
      whitePaper3,
      whitePaper4,
      count,
    } = body;

    if (!solution || !funnel || !count) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GOOGLE_API_KEY,
    });

    // Use subSolution if provided, otherwise use solution
    const productContext = subSolution || solution;

    const prompt = `You are generating LinkedIn ads for Danelec.

Create ad variations for each of the four messaging variations.
Each variation should follow the same structure product context but reflect the unique angle.

Context:
- ${productContext}
- Marketing funnel stage: ${funnel}

If a custom instruction is provided, incorporate it naturally into that variant's messaging. 
If no custom instruction is provided, ignore it entirely.

If a white paper summary is provided, use it to add relevant context and insights to that variant's messaging.
If no white paper summary is provided, ignore it entirely.

Messaging variants:
Create ${count} of this variant.
PLAN & PERFORM
Angle: Because operators need to plan and perform the most profitable voyages to minimize fuel consumption.
Custom instruction: ${customInstruction1 || "None provided"}
White paper context: ${whitePaper1 || "None provided"}

Create ${count} of this variant.
OPERATIONAL PERFORMANCE
Angle: Because they need to assess and improve operational performance backed with actionable insights and seamless collaboration across vessel, shore, and commercial partners.
Custom instruction: ${customInstruction2 || "None provided"}
White paper context: ${whitePaper2 || "None provided"}

Create ${count} of this variant.
MAINTENANCE & SCHEDULING
Angle: Because they need to know when to optimally take vessels out of schedule for inspection and cleaning.
Custom instruction: ${customInstruction3 || "None provided"}
White paper context: ${whitePaper3 || "None provided"}

Create ${count} of this variant.
REPORTING & COMPLIANCE
Angle: Because they need to simplify reporting processes by streamlining monitoring and documentation, making it more organized and accessible.
Custom instruction: ${customInstruction4 || "None provided"}
White paper context: ${whitePaper4 || "None provided"}

Output Format:
Return an array for each ad generated:
1. introductoryText — 4 to 5 sentences introducing the solution and tied to the quadrant's angle.
2. imageText — 6 to 9 word supporting visual copy aligned with the introductoryText.
3. headline — 5 to 7 word punchy headline reinforcing the message.
`;

    const systemInstruction =
      "You are an experienced B2B SaaS copywriter with 20 years of expertise writing for C-suite executives and technical buyers. Your copy prioritizes clear ROI messaging and addresses buyer pain points directly. You write in a conversational but authoritative tone that builds credibility through specificity rather than hype. You focus on strategic benefits over features and avoid salesy language.";

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 1.0,
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

    const responseText = response.text;
    console.log("Response:", responseText);

    if (!responseText) {
      return NextResponse.json(
        { error: "No response from model" },
        { status: 500 }
      );
    }

    const results = JSON.parse(responseText);

    // Include the full prompt in the response for debugging
    const fullPrompt = `System Instruction: ${systemInstruction}\n\n${prompt}`;

    return NextResponse.json({ results, prompt: fullPrompt });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Failed to generate content" },
      { status: 500 }
    );
  }
}
