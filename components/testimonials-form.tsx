"use client";

import { useState } from "react";

export default function TestimonialForm() {
  const [phone, setPhone] = useState("");
  const [patient, setPatient] = useState<{
    id: string;
    name: string;
  } | null>(null);

  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function verifyPatient() {
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch("/api/testimonials/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        return;
      }

      setPatient(data.patient);
    } catch {
      setError("Unable to verify your phone number.");
    } finally {
      setLoading(false);
    }
  }

  async function submitTestimonial() {
    if (!patient) return;

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch("/api/testimonials/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          patientId: patient.id,
          review,
          rating,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        return;
      }

      setMessage(data.message);

      setReview("");
      setRating(5);
    } catch {
      setError("Unable to submit your testimonial.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-[2rem] bg-[var(--color5)] p-7 sm:p-10">
      {!patient ? (
        <>
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color2)]">
              Verified Patients
            </span>

            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
              Share your experience
            </h2>

            <p className="mt-4 max-w-xl text-sm font-light leading-7 text-[var(--color4)]/60">
              Have you visited our clinic? Enter the phone number registered
              with us to share your experience.
            </p>
          </div>

          <div className="mt-8">
            <label className="text-sm font-medium">
              Phone Number
            </label>

            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+254 7XX XXX XXX"
              className="
                mt-2
                w-full
                rounded-xl
                border
                border-[var(--color4)]/10
                bg-white
                px-4
                py-4
                text-sm
                outline-none
                transition
                focus:border-[var(--color2)]
              "
            />

            <button
              onClick={verifyPatient}
              disabled={loading || !phone}
              className="
                mt-4
                rounded-full
                bg-[var(--color4)]
                px-6
                py-3
                text-sm
                font-medium
                text-white
                transition
                hover:bg-[var(--color2)]
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              {loading ? "Checking..." : "Verify Patient"}
            </button>

            {error && (
              <p className="mt-4 text-sm text-red-500">
                {error}
              </p>
            )}
          </div>
        </>
      ) : (
        <>
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color2)]">
            Patient Verified
          </span>

          <div className="mt-3 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color2)]/10 text-[var(--color2)]">
              ✓
            </div>

            <div>
              <h2 className="text-xl font-medium">
                Welcome, {patient.name}
              </h2>

              <p className="text-sm text-[var(--color4)]/50">
                Your patient record has been verified.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <label className="text-sm font-medium">
              Your Rating
            </label>

            <div className="mt-3 flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`text-3xl transition ${
                    star <= rating
                      ? "text-[var(--color2)]"
                      : "text-gray-300"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7">
            <label className="text-sm font-medium">
              Your Experience
            </label>

            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Tell us about your experience..."
              rows={5}
              className="
                mt-2
                w-full
                resize-none
                rounded-xl
                border
                border-[var(--color4)]/10
                bg-white
                px-4
                py-4
                text-sm
                outline-none
                transition
                focus:border-[var(--color2)]
              "
            />
          </div>

          <button
            onClick={submitTestimonial}
            disabled={loading || !review.trim()}
            className="
              mt-5
              rounded-full
              bg-[var(--color2)]
              px-7
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
            {loading ? "Submitting..." : "Submit Testimonial"}
          </button>

          {message && (
            <p className="mt-4 text-sm text-green-600">
              {message}
            </p>
          )}

          {error && (
            <p className="mt-4 text-sm text-red-500">
              {error}
            </p>
          )}
        </>
      )}
    </div>
  );
}