import { GoogleGenAI, Type } from "@google/genai";
import { NextResponse } from "next/server";

// Variant definitions - mapping matches matrix-form.tsx
// Card 1: B1+B3 -> customInstruction1, whitePaper1
// Card 2: B2+B3 -> customInstruction2, whitePaper2
// Card 3: B1+B4 -> customInstruction3, whitePaper3
// Card 4: B2+B4 -> customInstruction4, whitePaper4
const variants = [
  {
    name: "Operate & Performance Optimization",
    angle: "Because operators need to plan and perform the most profitable voyages to minimize fuel consumption.",
    key: "variant1",
    badges: ["B1", "B3"], // Operate + Performance Optimization
  },
  {
    name: "Maintain & Performance Optimization",
    angle: "Because they need to know when to optimally take vessels out of schedule for inspection and cleaning.",
    key: "variant2",
    badges: ["B2", "B3"], // Maintain + Performance Optimization
  },
  {
    name: "Operate & Reduce Complexity",
    angle: "Because they need to assess and improve operational performance backed with actionable insights and seamless collaboration across vessel, shore, and commercial partners.",
    key: "variant3",
    badges: ["B1", "B4"], // Operate + Reduce Complexity
  },
  {
    name: "Maintain & Reduce Complexity",
    angle: "Because they need to simplify reporting processes by streamlining monitoring and documentation, making it more organized and accessible.",
    key: "variant4",
    badges: ["B2", "B4"], // Maintain + Reduce Complexity
  },
];

// Helper function to create a prompt for a single variant
function createVariantPrompt(
  productContext: string,
  funnel: string,
  count: string,
  variantName: string,
  angle: string,
  customInstruction: string | undefined,
  whitePaper: string | undefined
): string {
  return `You are generating LinkedIn ads for Danelec.

Create ${count} ad variations for this messaging variant.
Each variation should follow the same product context but reflect the unique angle.

Context:
- ${productContext}
- Marketing funnel stage: ${funnel}

${variantName}
Angle: ${angle}
${customInstruction ? `Custom instruction: ${customInstruction}` : "Custom instruction: None provided"}
${whitePaper ? `White paper context: ${whitePaper}` : "White paper context: None provided"}

If a custom instruction is provided, incorporate it naturally into the messaging. 
If no custom instruction is provided, ignore it entirely.

If a white paper summary is provided, use it to add relevant context and insights to the messaging.
If no white paper summary is provided, ignore it entirely.

Output Format:
Return an array for each ad generated:
1. introductoryText — 4 to 5 sentences introducing the solution and tied to the quadrant's angle.
2. imageText — 6 to 9 word supporting visual copy aligned with the introductoryText.
3. headline — 5 to 7 word punchy headline reinforcing the message.
`;
}

// Helper function to generate ads for a single variant
async function generateVariantAds(
  ai: GoogleGenAI,
  prompt: string,
  systemInstruction: string,
  variantKey: string,
  badges: string[]
): Promise<{ results: any[]; prompt: string }> {
  try {
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
    console.log(`Response for ${variantKey}:`, responseText);

    if (!responseText) {
      throw new Error(`No response from model for ${variantKey}`);
    }

    const results = JSON.parse(responseText);
    // Add variant badge information to each ad
    const resultsWithBadges = results.map((ad: any) => ({
      ...ad,
      variantBadges: badges,
    }));
    
    const fullPrompt = `System Instruction: ${systemInstruction}\n\n${prompt}`;

    return { results: resultsWithBadges, prompt: fullPrompt };
  } catch (error) {
    console.error(`Error generating ads for ${variantKey}:`, error);
    throw error;
  }
}

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

    const systemInstruction =
      "You are an experienced B2B SaaS copywriter with 20 years of expertise writing for C-suite executives and technical buyers. Your copy prioritizes clear ROI messaging and addresses buyer pain points directly. You write in a conversational but authoritative tone that builds credibility through specificity rather than hype. You focus on strategic benefits over features and avoid salesy language.";

    // Create prompts for each variant
    // Mapping matches matrix-form.tsx:
    // Variant 1 (B1+B3): customInstruction1, whitePaper1
    // Variant 2 (B2+B3): customInstruction2, whitePaper2
    // Variant 3 (B1+B4): customInstruction3, whitePaper3
    // Variant 4 (B2+B4): customInstruction4, whitePaper4
    const prompts = [
      createVariantPrompt(
        productContext,
        funnel,
        count,
        variants[0].name,
        variants[0].angle,
        customInstruction1,
        whitePaper1
      ),
      createVariantPrompt(
        productContext,
        funnel,
        count,
        variants[1].name,
        variants[1].angle,
        customInstruction2,
        whitePaper2
      ),
      createVariantPrompt(
        productContext,
        funnel,
        count,
        variants[2].name,
        variants[2].angle,
        customInstruction3,
        whitePaper3
      ),
      createVariantPrompt(
        productContext,
        funnel,
        count,
        variants[3].name,
        variants[3].angle,
        customInstruction4,
        whitePaper4
      ),
    ];

    // Generate all variants in parallel
    const variantPromises = prompts.map((prompt, index) =>
      generateVariantAds(ai, prompt, systemInstruction, variants[index].key, variants[index].badges)
    );

    const variantResponses = await Promise.all(variantPromises);

    // Combine all results into a single array
    const allResults: any[] = [];
    const allPrompts: string[] = [];

    variantResponses.forEach((response, index) => {
      allResults.push(...response.results);
      allPrompts.push(`\n=== ${variants[index].name} ===\n${response.prompt}`);
    });

    // Combine all prompts into one string
    const fullPrompt = allPrompts.join("\n\n");

    return NextResponse.json({ results: allResults, prompt: fullPrompt });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Failed to generate content" },
      { status: 500 }
    );
  }
}
