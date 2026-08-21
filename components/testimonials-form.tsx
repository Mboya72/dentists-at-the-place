"use client";

import { useState } from "react";

type Patient = {
  id: string;
  name: string;
};

export default function TestimonialForm() {
  const [phone, setPhone] = useState("");
  const [patient, setPatient] = useState<Patient | null>(null);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // =====================================================
  // NORMALIZE KENYAN PHONE NUMBER
  // =====================================================

  function normalizePhoneNumber(value: string) {
    let cleaned = value
      .replace(/\s+/g, "")
      .replace(/-/g, "")
      .replace(/\(/g, "")
      .replace(/\)/g, "");

    // 0727168320 -> +254727168320
    if (cleaned.startsWith("07") || cleaned.startsWith("01")) {
      cleaned = "+254" + cleaned.substring(1);
    }

    // 254727168320 -> +254727168320
    else if (cleaned.startsWith("254")) {
      cleaned = "+" + cleaned;
    }

    return cleaned;
  }

  // =====================================================
  // VERIFY PATIENT
  // =====================================================

  async function verifyPatient() {
    setError("");
    setMessage("");

    const normalizedPhone = normalizePhoneNumber(phone);

    if (!normalizedPhone) {
      setError("Please enter your phone number.");
      return;
    }

    if (!/^\+254[0-9]{9}$/.test(normalizedPhone)) {
      setError(
        "Please enter a valid Kenyan phone number, e.g. 0727168320."
      );
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/testimonials/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: normalizedPhone,
        }),
      });

      let data;

      try {
        data = await response.json();
      } catch {
        data = null;
      }

      if (!response.ok) {
        setError(
          data?.message ||
            "We could not verify your phone number."
        );
        return;
      }

      if (!data?.patient) {
        setError(
          "No patient record was found for this phone number."
        );
        return;
      }

      setPatient(data.patient);
      setPhone(normalizedPhone);
    } catch (error) {
      console.error("Patient verification error:", error);

      setError(
        "Unable to verify your phone number. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  // =====================================================
  // SUBMIT TESTIMONIAL
  // =====================================================

  async function submitTestimonial() {
    if (!patient) {
      setError("Please verify your patient record first.");
      return;
    }

    const trimmedReview = review.trim();

    if (!trimmedReview) {
      setError("Please tell us about your experience.");
      return;
    }

    if (rating < 1 || rating > 5) {
      setError("Please select a rating between 1 and 5.");
      return;
    }

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
          review: trimmedReview,
          rating,
        }),
      });

      let data;

      try {
        data = await response.json();
      } catch {
        data = null;
      }

      if (!response.ok) {
        setError(
          data?.message ||
            "Unable to submit your testimonial."
        );
        return;
      }

      setMessage(
        data?.message ||
          "Thank you! Your testimonial has been submitted successfully."
      );

      setReview("");
      setRating(5);
    } catch (error) {
      console.error("Testimonial submission error:", error);

      setError(
        "Unable to submit your testimonial. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  // =====================================================
  // RESET VERIFICATION
  // =====================================================

  function changePhoneNumber() {
    setPatient(null);
    setReview("");
    setRating(5);
    setMessage("");
    setError("");
  }

  // =====================================================
  // UI
  // =====================================================

  return (
    <div className="rounded-[2rem] bg-[var(--color5)] p-7 sm:p-10">
      {!patient ? (
        <>
          {/* =====================================================
              VERIFY PATIENT
          ===================================================== */}

          <div>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color2)]">
              Verified Patients
            </span>

            <h2 className="mt-3 text-3xl font-medium tracking-tight text-[var(--color4)] sm:text-4xl">
              Share your experience
            </h2>

            <p className="mt-4 max-w-xl text-sm font-light leading-7 text-[var(--color4)]/60">
              Have you visited our clinic? Enter the phone number
              registered with us to share your experience.
            </p>
          </div>

          <div className="mt-8">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-[var(--color4)]"
            >
              Phone Number
            </label>

            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                setError("");
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  verifyPatient();
                }
              }}
              placeholder="0727 168 320"
              autoComplete="tel"
              disabled={loading}
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
                text-[var(--color4)]
                outline-none
                transition
                placeholder:text-gray-400
                focus:border-[var(--color2)]
                focus:ring-2
                focus:ring-[var(--color2)]/10
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            />

            <p className="mt-2 text-xs text-[var(--color4)]/40">
              Example: 0727168320 or +254727168320
            </p>

            <button
              type="button"
              onClick={verifyPatient}
              disabled={loading || !phone.trim()}
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
              <p
                role="alert"
                className="mt-4 text-sm text-red-500"
              >
                {error}
              </p>
            )}
          </div>
        </>
      ) : (
        <>
          {/* =====================================================
              VERIFIED PATIENT
          ===================================================== */}

          <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color2)]">
            Patient Verified
          </span>

          <div className="mt-3 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color2)]/10 text-[var(--color2)]">
              ✓
            </div>

            <div className="min-w-0">
              <h2 className="text-xl font-medium text-[var(--color4)]">
                Welcome, {patient.name}
              </h2>

              <p className="text-sm text-[var(--color4)]/50">
                Your patient record has been verified.
              </p>
            </div>
          </div>

          {/* CHANGE NUMBER */}

          <button
            type="button"
            onClick={changePhoneNumber}
            disabled={loading}
            className="
              mt-4
              text-sm
              font-medium
              text-[var(--color2)]
              transition
              hover:underline
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            Use a different phone number
          </button>

          {/* =====================================================
              RATING
          ===================================================== */}

          <div className="mt-8">
            <label className="text-sm font-medium text-[var(--color4)]">
              Your Rating
            </label>

            <div className="mt-3 flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => {
                    setRating(star);
                    setError("");
                  }}
                  disabled={loading}
                  aria-label={`Rate ${star} out of 5`}
                  className={`
                    text-3xl
                    transition
                    hover:scale-110
                    disabled:cursor-not-allowed
                    ${
                      star <= rating
                        ? "text-[var(--color2)]"
                        : "text-gray-300"
                    }
                  `}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          {/* =====================================================
              REVIEW
          ===================================================== */}

          <div className="mt-7">
            <label
              htmlFor="review"
              className="text-sm font-medium text-[var(--color4)]"
            >
              Your Experience
            </label>

            <textarea
              id="review"
              value={review}
              onChange={(e) => {
                setReview(e.target.value);
                setError("");
              }}
              placeholder="Tell us about your experience..."
              rows={5}
              disabled={loading}
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
                text-[var(--color4)]
                outline-none
                transition
                placeholder:text-gray-400
                focus:border-[var(--color2)]
                focus:ring-2
                focus:ring-[var(--color2)]/10
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            />
          </div>

          {/* =====================================================
              SUBMIT
          ===================================================== */}

          <button
            type="button"
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

          {/* =====================================================
              MESSAGES
          ===================================================== */}

          {message && (
            <p
              role="status"
              className="mt-4 text-sm text-green-600"
            >
              {message}
            </p>
          )}

          {error && (
            <p
              role="alert"
              className="mt-4 text-sm text-red-500"
            >
              {error}
            </p>
          )}
        </>
      )}
    </div>
  );
}