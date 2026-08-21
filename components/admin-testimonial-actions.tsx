"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  testimonialId: string;
};

export default function AdminTestimonialActions({
  testimonialId,
}: Props) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function updateTestimonial(
    action: "approve" | "reject"
  ) {
    if (!testimonialId) {
      setError("Missing testimonial ID.");
      return;
    }

    setLoading(true);
    setError("");

    console.log("Sending testimonial update:", {
      id: testimonialId,
      action,
    });

    try {
      const response = await fetch(
        "/api/admin/testimonials",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: testimonialId,
            action: action,
          }),
        }
      );

      const text = await response.text();

      let data;

      try {
        data = JSON.parse(text);
      } catch {
        data = {
          error: text || "Invalid server response.",
        };
      }

      console.log("Testimonial API response:", {
        status: response.status,
        data,
      });

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to update testimonial."
        );
      }

      router.refresh();
    } catch (err) {
      console.error(
        "Testimonial update error:",
        err
      );

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex shrink-0 flex-col gap-3 sm:w-36">
      <button
        type="button"
        disabled={loading}
        onClick={() =>
          updateTestimonial("approve")
        }
        className="
          rounded-full
          bg-[var(--color2)]
          px-5
          py-3
          text-sm
          font-medium
          text-white
          transition
          hover:opacity-90
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        {loading ? "Updating..." : "Approve"}
      </button>

      <button
        type="button"
        disabled={loading}
        onClick={() =>
          updateTestimonial("reject")
        }
        className="
          rounded-full
          border
          border-red-200
          px-5
          py-3
          text-sm
          font-medium
          text-red-500
          transition
          hover:bg-red-50
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        {loading ? "Updating..." : "Reject"}
      </button>

      {error && (
        <p className="text-xs leading-5 text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}