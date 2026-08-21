import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

function normalizePhoneNumber(value: string) {
  let cleaned = value
    .replace(/\s+/g, "")
    .replace(/-/g, "")
    .replace(/\(/g, "")
    .replace(/\)/g, "");

  if (cleaned.startsWith("07") || cleaned.startsWith("01")) {
    cleaned = "+254" + cleaned.substring(1);
  } else if (cleaned.startsWith("254")) {
    cleaned = "+" + cleaned;
  }

  return cleaned;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const phone = body?.phone;

    if (!phone) {
      return NextResponse.json(
        {
          message: "Phone number is required.",
        },
        { status: 400 }
      );
    }

    const normalizedPhone = normalizePhoneNumber(phone);

    if (!/^\+254[0-9]{9}$/.test(normalizedPhone)) {
      return NextResponse.json(
        {
          message:
            "Please enter a valid Kenyan phone number, e.g. 0727168320.",
        },
        { status: 400 }
      );
    }

    // Use the admin client so patient verification is not blocked
    // by the patients table RLS policies.
    const supabase = createAdminClient();

    const { data: patient, error } = await supabase
      .from("patients")
      .select("id, full_name, phone")
      .eq("phone", normalizedPhone)
      .maybeSingle();

    if (error) {
      console.error("Patient verification database error:", error);

      return NextResponse.json(
        {
          message: "Unable to verify your phone number.",
        },
        { status: 500 }
      );
    }

    if (!patient) {
      return NextResponse.json(
        {
          message:
            "No patient record was found for this phone number.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        patient: {
          id: patient.id,
          name: patient.full_name,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Verification error:", error);

    return NextResponse.json(
      {
        message: "Unable to verify your phone number.",
      },
      { status: 500 }
    );
  }
}