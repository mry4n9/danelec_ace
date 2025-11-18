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

    if (!solution || !subSolution || !funnel || !count) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GOOGLE_API_KEY,
    });

    const prompt = `You are generating LinkedIn ads for Danelec solutions.

Create ${count} ad variations for each of the four messaging quadrants (4 × ${count} total ads).
Each variation should follow the same structure but reflect the quadrant's specific angle.

Context:
- Solution: ${solution}
- Sub-solution: ${subSolution}
- Funnel stage: ${funnel}

If a custom instruction is provided for a quadrant, incorporate it naturally into that quadrant's messaging. 
If no custom instruction is provided, ignore it entirely. Do not reference or mention missing instructions.

If a white paper summary is provided for a quadrant, use it to add relevant context and insights to that quadrant's messaging.
If no white paper summary is provided, ignore it entirely. Do not reference or mention missing white papers.

Messaging Quadrants:
1. PLAN & PERFORM (Quadrant 1)
   Angle: Because operators need to plan and perform the most profitable voyages to minimize fuel consumption.
   Custom instruction: ${customInstruction1 || "None provided"}
   White paper context: ${whitePaper1 || "None provided"}

2. OPERATIONAL PERFORMANCE (Quadrant 2)
   Angle: Because they need to assess and improve operational performance backed with actionable insights and seamless collaboration across vessel, shore, and commercial partners.
   Custom instruction: ${customInstruction2 || "None provided"}
   White paper context: ${whitePaper2 || "None provided"}

3. MAINTENANCE & SCHEDULING (Quadrant 3)
   Angle: Because they need to know when to optimally take vessels out of schedule for inspection and cleaning.
   Custom instruction: ${customInstruction3 || "None provided"}
   White paper context: ${whitePaper3 || "None provided"}

4. REPORTING & COMPLIANCE (Quadrant 4)
   Angle: Because they need to simplify reporting processes by streamlining monitoring and documentation, making it more organized and accessible.
   Custom instruction: ${customInstruction4 || "None provided"}
   White paper context: ${whitePaper4 || "None provided"}

Output Format:
For each quadrant (and for each count), return an array of ads where each ad contains:
1. introductoryText — 3–4 sentences introducing the solution and tied to the quadrant's angle.
2. imageText — 6–9 word supporting visual copy aligned with the introductoryText.
3. headline — 5–7 word punchy headline reinforcing the message.
`;

    const systemInstruction =
      "You are an experienced B2B SaaS copywriter with 20 years of expertise writing for C-suite executives and technical buyers. Your copy prioritizes clear ROI messaging and addresses buyer pain points directly. You write in a conversational but authoritative tone that builds credibility through specificity rather than hype. You focus on strategic benefits over features and avoid salesy language.";

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
