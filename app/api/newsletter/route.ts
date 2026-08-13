import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email address is required." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const segmentId = process.env.RESEND_NEWSLETTER_SEGMENT_ID;

    if (!segmentId) {
      console.error("Missing RESEND_NEWSLETTER_SEGMENT_ID");

      return NextResponse.json(
        { error: "Newsletter configuration is missing." },
        { status: 500 }
      );
    }

    // Add subscriber to Resend
    const { data, error } = await resend.contacts.create({
      email,
      unsubscribed: false,
      segments: [
        {
          id: segmentId,
        },
      ],
    });

    if (error) {
      console.error("Resend contact error:", error);

      return NextResponse.json(
        { error: "Unable to subscribe at the moment." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Successfully subscribed.",
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}