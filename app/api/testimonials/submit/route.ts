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

    const { data, error } = await supabase
      .from("testimonials")
      .insert({
        name,
        message,
        rating: Number(rating),
        approved: false,
      })
      .select()
      .single();

    if (error) {
      console.error("Testimonial submission error:", error);

      return NextResponse.json(
        {
          error: error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        testimonial: data,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Submit testimonial error:", error);

    return NextResponse.json(
      {
        error: "Unable to submit testimonial.",
      },
      { status: 500 }
    );
  }
}