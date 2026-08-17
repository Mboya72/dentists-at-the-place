import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    // Check the API key when the request is actually made,
    // rather than during the build.
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

    const {
      name,
      email,
      phone,
      service,
      dentist,
      date,
      message,
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !service || !dentist || !date) {
      return NextResponse.json(
        {
          error: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Dentists @ The Place <onboarding@resend.dev>",
      to: ["dentists@theplace.co.ke"],
      replyTo: email,

      subject: `New Dental Appointment Request - ${name}`,

      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">

            <h2 style="color: #0399B0;">
              New Dental Appointment Request
            </h2>

            <hr />

            <p>
              <strong>Patient Name:</strong>
              ${name}
            </p>

            <p>
              <strong>Email:</strong>
              ${email}
            </p>

            <p>
              <strong>Phone:</strong>
              ${phone}
            </p>

            <p>
              <strong>Service:</strong>
              ${service}
            </p>

            <p>
              <strong>Preferred Dentist:</strong>
              ${dentist}
            </p>

            <p>
              <strong>Preferred Date:</strong>
              ${date}
            </p>

            <p>
              <strong>Message:</strong>
              ${message || "No additional message provided."}
            </p>

            <hr />

            <p style="font-size: 13px; color: #777;">
              This appointment request was submitted through
              the Dentists @ The Place website.
            </p>

          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          error: "Failed to send appointment request.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Appointment request sent successfully.",
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong while sending your request.",
      },
      { status: 500 }
    );
  }
}