
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

function normalizePhoneNumber(value: string) {
  let cleaned = value.replace(/\s+/g, "").replace(/-/g, "");

  if (cleaned.startsWith("07") || cleaned.startsWith("01")) {
    cleaned = "+254" + cleaned.substring(1);
  } else if (cleaned.startsWith("254")) {
    cleaned = "+" + cleaned;
  }

  return cleaned;
}

export async function POST(request: Request) {
  try {
    // ---------------------------------------------
    // CHECK AUTHENTICATION
    // ---------------------------------------------
    const supabase = await createClient();

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError) {
      console.error("Auth error:", authError);
    }

    if (!user) {
      return NextResponse.json(
        {
          error: "Unauthorized. Please log in again.",
        },
        { status: 401 }
      );
    }

    // ---------------------------------------------
    // READ REQUEST
    // ---------------------------------------------
    const body = await request.json();

    const fullName = body.fullName?.trim() || "";
    const phoneInput = body.phone?.trim() || "";

    const email = body.email?.trim() || null;
    const dateOfBirth = body.dateOfBirth || null;
    const gender = body.gender || null;
    const address = body.address?.trim() || null;
    const medicalNotes = body.medicalNotes?.trim() || null;

    // ---------------------------------------------
    // VALIDATE NAME
    // ---------------------------------------------
    if (!fullName) {
      return NextResponse.json(
        {
          error: "Please enter the patient's full name.",
        },
        { status: 400 }
      );
    }

    // ---------------------------------------------
    // NORMALIZE PHONE
    // ---------------------------------------------
    const phone = normalizePhoneNumber(phoneInput);

    console.log("Original phone:", phoneInput);
    console.log("Normalized phone:", phone);

    // IMPORTANT:
    // Only ONE backslash here.
    if (!/^\+254[0-9]{9}$/.test(phone)) {
      return NextResponse.json(
        {
          error:
            "Invalid Kenyan phone number. Example: 0727168320.",
        },
        { status: 400 }
      );
    }

    // ---------------------------------------------
    // ADMIN CLIENT
    // ---------------------------------------------
    const adminSupabase = createAdminClient();

    // ---------------------------------------------
    // CHECK DUPLICATE PHONE
    // ---------------------------------------------
    const {
      data: existingPatient,
      error: checkError,
    } = await adminSupabase
      .from("patients")
      .select("id, phone")
      .eq("phone", phone)
      .maybeSingle();

    if (checkError) {
      console.error("Patient duplicate check error:", checkError);

      return NextResponse.json(
        {
          error: `Database error while checking patient: ${checkError.message}`,
        },
        { status: 500 }
      );
    }

    if (existingPatient) {
      return NextResponse.json(
        {
          error:
            "A patient with this phone number already exists.",
        },
        { status: 409 }
      );
    }

    // ---------------------------------------------
    // INSERT PATIENT
    // ---------------------------------------------
    const {
      data: patient,
      error: insertError,
    } = await adminSupabase
      .from("patients")
      .insert({
        full_name: fullName,
        phone: phone,
        email: email,
        date_of_birth: dateOfBirth,
        gender: gender,
        address: address,
        medical_notes: medicalNotes,
      })
      .select()
      .single();

    // ---------------------------------------------
    // HANDLE INSERT ERROR
    // ---------------------------------------------
    if (insertError) {
      console.error("Patient insertion error:", insertError);

      return NextResponse.json(
        {
          error: `Unable to create patient: ${insertError.message}`,
          code: insertError.code,
          details: insertError.details,
          hint: insertError.hint,
        },
        { status: 500 }
      );
    }

    // ---------------------------------------------
    // SUCCESS
    // ---------------------------------------------
    return NextResponse.json(
      {
        message: "Patient added successfully.",
        patient,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Patient API error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unexpected server error.",
      },
      { status: 500 }
    );
  }
}

