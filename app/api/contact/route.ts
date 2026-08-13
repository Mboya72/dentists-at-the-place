import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, service, dentist, date, message } = body;

    // Basic validation
    if (!name || !email || !phone || !service || !dentist || !date) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Dentists @ The Place <onboarding@resend.dev>",
      to: ["elvindio72@gmail.com"],
      replyTo: email,
      subject: `New Dental Appointment Request - ${name}`,

      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #f4f7f8;
      font-family: Arial, Helvetica, sans-serif;
      color: #171717;
    }

    .wrapper {
      width: 100%;
      padding: 40px 20px;
      box-sizing: border-box;
    }

    .container {
      max-width: 620px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 16px;
      overflow: hidden;
    }

    .header {
      padding: 30px;
      background: #0399B0;
      text-align: center;
    }

    .header h1 {
      margin: 0;
      color: #ffffff;
      font-size: 24px;
      font-weight: 600;
    }

    .content {
      padding: 32px;
    }

    .intro {
      font-size: 15px;
      line-height: 1.6;
      color: #555555;
      margin-bottom: 28px;
    }

    .section-title {
      font-size: 16px;
      font-weight: 600;
      color: #171717;
      margin-bottom: 14px;
    }

    .details {
      background: #f5fafb;
      border-radius: 12px;
      padding: 20px;
    }

    .row {
      padding: 10px 0;
      border-bottom: 1px solid #e5eeee;
    }

    .row:last-child {
      border-bottom: none;
    }

    .label {
      font-size: 12px;
      color: #777777;
      margin-bottom: 3px;
    }

    .value {
      font-size: 15px;
      font-weight: 500;
      color: #171717;
    }

    .message {
      margin-top: 25px;
      padding: 18px;
      background: #f7f7f7;
      border-radius: 10px;
    }

    .footer {
      padding: 24px 32px;
      background: #f5f5f5;
      text-align: center;
      font-size: 12px;
      color: #777777;
    }

    @media only screen and (max-width: 600px) {
      .wrapper {
        padding: 20px 10px;
      }

      .content {
        padding: 24px 20px;
      }

      .header {
        padding: 24px 20px;
      }
    }
  </style>
</head>

<body>

  <div class="wrapper">

    <div class="container">

      <!-- HEADER -->
      <div class="header">
  <img
    src="/logo.png"
    alt="Dentists @ The Place"
    width="60"
    style="display:block; margin:0 auto 15px;"
  />

  <h1>New Appointment Request</h1>
</div>

      <!-- CONTENT -->
      <div class="content">

        <p class="intro">
          A new dental appointment request has been submitted
          through the Dentists @ The Place website.
        </p>

        <!-- PATIENT DETAILS -->
        <div class="section-title">
          Patient Details
        </div>

        <div class="details">

          <div class="row">
            <div class="label">Patient Name</div>
            <div class="value">${name}</div>
          </div>

          <div class="row">
            <div class="label">Email Address</div>
            <div class="value">${email}</div>
          </div>

          <div class="row">
            <div class="label">Phone Number</div>
            <div class="value">${phone}</div>
          </div>

        </div>

        <!-- APPOINTMENT -->
        <div style="margin-top: 28px;">

          <div class="section-title">
            Appointment Details
          </div>

          <div class="details">

            <div class="row">
              <div class="label">Service</div>
              <div class="value">${service}</div>
            </div>

            <div class="row">
              <div class="label">Preferred Dentist</div>
              <div class="value">${dentist}</div>
            </div>

            <div class="row">
              <div class="label">Preferred Date</div>
              <div class="value">${date}</div>
            </div>

          </div>

        </div>

        <!-- MESSAGE -->
        ${
          message
            ? `
              <div class="message">

                <div class="label">
                  Patient Message
                </div>

                <div class="value" style="margin-top: 6px;">
                  ${message}
                </div>

              </div>
            `
            : ""
        }

      </div>

      <!-- FOOTER -->
      <div class="footer">

        <strong>Dentists @ The Place</strong>

        <br />

        The Place, General Mathenge Rd,
        Westlands, Nairobi.

        <br /><br />

        0725 272727 · 0754 272727

        <br />

        dentists@theplace.co.ke

      </div>

    </div>

  </div>

</body>
</html>
`,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Failed to send appointment request." },
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
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
