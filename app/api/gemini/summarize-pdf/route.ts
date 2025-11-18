import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      );
    }

    // Check if file is PDF
    if (file.type !== "application/pdf") {
      return NextResponse.json(
        { error: "File must be a PDF" },
        { status: 400 }
      );
    }

    // Check file size (20MB limit for inline PDFs)
    const maxSize = 20 * 1024 * 1024; // 20MB in bytes
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: "File size must be less than 20MB" },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GOOGLE_API_KEY,
    });

    // Convert file to ArrayBuffer then to base64
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64Data = buffer.toString("base64");

    const prompt =
      "Summarize this document in 2-3 paragraphs, focusing on key insights, main findings, and actionable information that would be relevant for creating marketing content.";

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents: [
        {
          text: prompt,
        },
        {
          inlineData: {
            mimeType: "application/pdf",
            data: base64Data,
          },
        },
      ],
    });

    const summary = response.text;

    return NextResponse.json({ summary });
  } catch (error) {
    console.error("Error summarizing PDF:", error);
    return NextResponse.json(
      { error: "Failed to summarize PDF" },
      { status: 500 }
    );
  }
}

