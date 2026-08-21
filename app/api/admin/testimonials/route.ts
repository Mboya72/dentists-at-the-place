import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function PATCH(request: Request) {
  console.log("=================================");
  console.log("ADMIN TESTIMONIAL PATCH");
  console.log("=================================");

  try {
    // ==========================================
    // CHECK AUTHENTICATION
    // ==========================================

    const supabase = await createClient();

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError) {
      console.error(
        "Auth error:",
        authError
      );
    }

    if (!user) {
      console.error(
        "No authenticated user."
      );

      return NextResponse.json(
        {
          error: "Unauthorized.",
        },
        {
          status: 401,
        }
      );
    }

    console.log(
      "Authenticated user:",
      user.email
    );

    // ==========================================
    // READ REQUEST BODY
    // ==========================================

    const body = await request.json();

    console.log(
      "Request body:",
      body
    );

    const id = body?.id;
    const action = body?.action;

    console.log(
      "Testimonial ID:",
      id
    );

    console.log(
      "Action:",
      action
    );

    // ==========================================
    // VALIDATE ID
    // ==========================================

    if (!id) {
      return NextResponse.json(
        {
          error:
            "Missing testimonial ID.",
        },
        {
          status: 400,
        }
      );
    }

    // ==========================================
    // VALIDATE ACTION
    // ==========================================

    if (!action) {
      return NextResponse.json(
        {
          error:
            "Missing testimonial action.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      action !== "approve" &&
      action !== "reject"
    ) {
      return NextResponse.json(
        {
          error:
            "Invalid testimonial action.",
        },
        {
          status: 400,
        }
      );
    }

    // ==========================================
    // ADMIN SUPABASE CLIENT
    // ==========================================

    const adminSupabase =
      createAdminClient();

    // ==========================================
    // APPROVE
    // ==========================================

    if (action === "approve") {
      console.log(
        "Approving testimonial:",
        id
      );

      const { data, error } =
        await adminSupabase
          .from("testimonials")
          .update({
            approved: true,
            rejected: false,
          })
          .eq("id", id)
          .select(
            "id, name, message, rating, approved, rejected, created_at"
          )
          .single();

      if (error) {
        console.error(
          "Approve error:",
          error
        );

        return NextResponse.json(
          {
            error: error.message,
          },
          {
            status: 500,
          }
        );
      }

      console.log(
        "Testimonial approved:",
        data
      );

      return NextResponse.json({
        success: true,
        action: "approve",
        testimonial: data,
      });
    }

    // ==========================================
    // REJECT
    // ==========================================

    if (action === "reject") {
      console.log(
        "Rejecting testimonial:",
        id
      );

      const { data, error } =
        await adminSupabase
          .from("testimonials")
          .update({
            approved: false,
            rejected: true,
          })
          .eq("id", id)
          .select(
            "id, name, message, rating, approved, rejected, created_at"
          )
          .single();

      if (error) {
        console.error(
          "Reject error:",
          error
        );

        return NextResponse.json(
          {
            error: error.message,
          },
          {
            status: 500,
          }
        );
      }

      console.log(
        "Testimonial rejected:",
        data
      );

      return NextResponse.json({
        success: true,
        action: "reject",
        testimonial: data,
      });
    }

    return NextResponse.json(
      {
        error:
          "Unknown testimonial action.",
      },
      {
        status: 400,
      }
    );
  } catch (error) {
    console.error(
      "ADMIN TESTIMONIAL API ERROR:",
      error
    );

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to update testimonial.",
      },
      {
        status: 500,
      }
    );
  }
}