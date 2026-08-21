"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  testimonialId: string;
};

export default function AdminTestimonialActions({
  testimonialId,
}: Props) {
  const router = useRouter();

  const [loading, setLoading] = useState<
    "approve" | "reject" | null
  >(null);

  const [error, setError] = useState("");

  async function updateTestimonial(
    action: "approve" | "reject"
  ) {
    setLoading(action);
    setError("");

    try {
      const response = await fetch("/api/admin/testimonials", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: testimonialId,
          action,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to update testimonial."
        );
      }

      // Refresh the server component so the testimonial
      // moves from Pending to Published/Rejected.
      router.refresh();
    } catch (err) {
      console.error("Testimonial update error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Unable to update testimonial."
      );
    } finally {
      setLoading(null);
    }
  }

  return (
    <div className="flex shrink-0 flex-col gap-3 sm:w-36">
      {/* APPROVE */}
      <button
        type="button"
        disabled={loading !== null}
        onClick={() => updateTestimonial("approve")}
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
        {loading === "approve"
          ? "Approving..."
          : "Approve"}
      </button>

      {/* REJECT */}
      <button
        type="button"
        disabled={loading !== null}
        onClick={() => updateTestimonial("reject")}
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
        {loading === "reject"
          ? "Rejecting..."
          : "Reject"}
      </button>

      {/* ERROR */}
      {error && (
        <p className="text-xs leading-5 text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}