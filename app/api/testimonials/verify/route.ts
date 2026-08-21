import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, message, rating } = body;

    if (!name || !message || !rating) {
      return NextResponse.json(
        {
          error: "Name, message and rating are required.",
        },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    // Example verification logic
    // We can connect this to your patients table later.

    return NextResponse.json({
      success: true,
      verified: true,
    });
  } catch (error) {
    console.error("Verification error:", error);

    return NextResponse.json(
      {
        error: "Unable to verify testimonial.",
      },
      { status: 500 }
    );
  }
}