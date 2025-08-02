// app/api/ask-krishna/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { emotion } = await req.json();

    if (!emotion) {
      return NextResponse.json(
        { error: "Emotion is required" },
        { status: 400 }
      );
    }

    // Dummy Bhagavad Gita wisdom (Later: Fetch from OpenAI / Database)
    const wisdom = {
      shloka: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।",
      translation:
        "You have the right to perform your duty, but not to the fruits of your actions.",
      meaning:
        "Focus on your actions and duties, without attachment to the results. Inner peace comes when we let go of expectations."
    };

    return NextResponse.json({
      emotion,
      advice: wisdom,
    });

  } catch (error) {
    console.error("Error in Ask Krishna API:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
