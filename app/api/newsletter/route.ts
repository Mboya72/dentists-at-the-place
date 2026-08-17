import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing.");

      return NextResponse.json(
        {
          error: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        {
          error: "Email address is required.",
        },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Dentists @ The Place <onboarding@resend.dev>",
      to: ["dentists@theplace.co.ke"],
      replyTo: email,
      subject: "New Newsletter Subscription",

      html: `
        <!DOCTYPE html>
        <html>
          <body
            style="
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            "
          >
            <h2 style="color: #0399B0;">
              New Newsletter Subscriber
            </h2>

            <p>
              Someone has subscribed to the Dentists @ The Place newsletter.
            </p>

            <p>
              <strong>Email:</strong> ${email}
            </p>

            <hr />

            <p style="font-size: 13px; color: #777;">
              This subscription was submitted through
              the Dentists @ The Place website.
            </p>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend newsletter error:", error);

      return NextResponse.json(
        {
          error: "Failed to subscribe to the newsletter.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Successfully subscribed to the newsletter.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter API error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong while subscribing.",
      },
      { status: 500 }
    );
  }
}