
import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { patientId, review, rating } = body;

    // Validate input
    if (!patientId) {
      return NextResponse.json(
        {
          message: "Patient verification is required.",
        },
        { status: 400 }
      );
    }

    if (!review || !review.trim()) {
      return NextResponse.json(
        {
          message: "Please enter your experience.",
        },
        { status: 400 }
      );
    }

    const numericRating = Number(rating);

    if (
      !Number.isInteger(numericRating) ||
      numericRating < 1 ||
      numericRating > 5
    ) {
      return NextResponse.json(
        {
          message: "Rating must be between 1 and 5.",
        },
        { status: 400 }
      );
    }

    // Use the admin client on the server
    // so public testimonial submission is not blocked by RLS.
    const supabase = createAdminClient();

    // Verify that the patient actually exists.
    const { data: patient, error: patientError } = await supabase
      .from("patients")
      .select("id, full_name")
      .eq("id", patientId)
      .single();

    if (patientError || !patient) {
      console.error("Patient lookup error:", patientError);

      return NextResponse.json(
        {
          message: "Patient could not be verified.",
        },
        { status: 404 }
      );
    }

    // Prevent accidental duplicate submissions if needed.
    // This checks whether the same patient has recently submitted
    // a testimonial with the same message.
    const { data: existingTestimonials, error: existingError } =
      await supabase
        .from("testimonials")
        .select("id")
        .eq("name", patient.full_name)
        .eq("message", review.trim())
        .limit(1);

    if (existingError) {
      console.error(
        "Existing testimonial check error:",
        existingError
      );
    }

    if (existingTestimonials && existingTestimonials.length > 0) {
      return NextResponse.json(
        {
          message: "You have already submitted this testimonial.",
        },
        { status: 409 }
      );
    }

    // Insert testimonial using your actual table structure.
    const { data: testimonial, error: testimonialError } =
      await supabase
        .from("testimonials")
        .insert({
          name: patient.full_name,
          message: review.trim(),
          rating: numericRating,
          approved: false,
          rejected: false,
        })
        .select()
        .single();

    if (testimonialError) {
      console.error(
        "Testimonial submission error:",
        testimonialError
      );

      return NextResponse.json(
        {
          message: "Unable to submit your testimonial.",
          details: testimonialError.message,
          code: testimonialError.code,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! Your testimonial has been submitted and is awaiting approval.",
        testimonial,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Submit testimonial error:", error);

    return NextResponse.json(
      {
        message: "Unable to submit your testimonial.",
      },
      { status: 500 }
    );
  }
}
