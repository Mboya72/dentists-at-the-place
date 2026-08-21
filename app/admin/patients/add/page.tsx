"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "../../../globals.css";

export default function AddPatientPage() {
  const router = useRouter();
  const supabase = createClient();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [medicalNotes, setMedicalNotes] = useState("");

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  function normalizePhoneNumber(value: string) {
    let cleaned = value.replace(/\s+/g, "").replace(/-/g, "");

    if (cleaned.startsWith("07") || cleaned.startsWith("01")) {
      cleaned = "+254" + cleaned.substring(1);
    } else if (cleaned.startsWith("254")) {
      cleaned = "+" + cleaned;
    }

    return cleaned;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setMessage("");

    const trimmedName = fullName.trim();
    const trimmedPhone = phone.trim();

    if (!trimmedName) {
      setError("Please enter the patient's full name.");
      return;
    }

    if (!trimmedPhone) {
      setError("Please enter the patient's phone number.");
      return;
    }

    const normalizedPhone = normalizePhoneNumber(trimmedPhone);

if (!/^\+254[0-9]{9}$/.test(normalizedPhone)) {
  setError(
    "Please enter a valid Kenyan phone number, e.g. 0712345678."
  );
  return;
}

    setSaving(true);

    try {
      const response = await fetch("/api/admin/patients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: trimmedName,
          phone: normalizedPhone,
          email: email.trim(),
          dateOfBirth,
          gender,
          address: address.trim(),
          medicalNotes: medicalNotes.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error || "Unable to add patient.");
        return;
      }

      setMessage("Patient added successfully.");

      setTimeout(() => {
        router.push("/admin/patients");
        router.refresh();
      }, 800);
    } catch (error) {
      console.error("Patient creation error:", error);
      setError("Unable to add patient. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className="min-h-screen bg-[var(--color5)]">
      {/* HEADER */}
      <header className="border-b border-[var(--color4)]/10 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-5">
          <div>
            <p className="text-sm font-medium text-[var(--color2)]">
              Admin Portal
            </p>

            <h1 className="mt-1 text-2xl font-medium text-[var(--color4)]">
              Add Patient
            </h1>
          </div>

          <Link
            href="/admin/patients"
            className="
              rounded-full
              border
              border-[var(--color4)]/10
              px-5
              py-2.5
              text-sm
              font-medium
              text-[var(--color4)]
              transition
              hover:bg-[var(--color5)]
            "
          >
            Back to Patients
          </Link>
        </div>
      </header>

      {/* CONTENT */}
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm sm:p-10">
          {/* TITLE */}
          <div className="mb-10">
            <p className="text-sm font-medium text-[var(--color2)]">
              Patient Records
            </p>

            <h2 className="mt-2 text-3xl font-medium tracking-tight text-[var(--color4)]">
              Add a new patient
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--color4)]/50">
              Enter the patient&apos;s details below to create a new patient
              record.
            </p>
          </div>

          {/* MESSAGES */}
          {error && (
            <div
              role="alert"
              className="mb-6 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600"
            >
              {error}
            </div>
          )}

          {message && (
            <div
              role="status"
              className="mb-6 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-600"
            >
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* PERSONAL INFORMATION */}
            <section>
              <div className="mb-6">
                <h3 className="text-xl font-medium text-[var(--color4)]">
                  Personal Information
                </h3>

                <p className="mt-1 text-sm text-[var(--color4)]/50">
                  Basic information about the patient.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {/* FULL NAME */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-medium text-[var(--color4)]"
                  >
                    Full Name
                  </label>

                  <input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Bildad"
                    autoComplete="name"
                    required
                    disabled={saving}
                    className="
                      w-full
                      rounded-xl
                      border
                      border-[var(--color4)]/10
                      bg-[var(--color5)]/40
                      px-4
                      py-3
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

                {/* PHONE */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-[var(--color4)]"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0712 345 678"
                    autoComplete="tel"
                    required
                    disabled={saving}
                    className="
                      w-full
                      rounded-xl
                      border
                      border-[var(--color4)]/10
                      bg-[var(--color5)]/40
                      px-4
                      py-3
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
                    Used to verify patients when submitting testimonials.
                  </p>
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-[var(--color4)]"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    autoComplete="email"
                    disabled={saving}
                    className="
                      w-full
                      rounded-xl
                      border
                      border-[var(--color4)]/10
                      bg-[var(--color5)]/40
                      px-4
                      py-3
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

                {/* DATE OF BIRTH */}
                <div>
                  <label
                    htmlFor="dateOfBirth"
                    className="mb-2 block text-sm font-medium text-[var(--color4)]"
                  >
                    Date of Birth
                  </label>

                  <input
                    id="dateOfBirth"
                    type="date"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    disabled={saving}
                    className="
                      w-full
                      rounded-xl
                      border
                      border-[var(--color4)]/10
                      bg-[var(--color5)]/40
                      px-4
                      py-3
                      text-sm
                      text-[var(--color4)]
                      outline-none
                      transition
                      focus:border-[var(--color2)]
                      focus:ring-2
                      focus:ring-[var(--color2)]/10
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                    "
                  />
                </div>

                {/* GENDER */}
                <div>
                  <label
                    htmlFor="gender"
                    className="mb-2 block text-sm font-medium text-[var(--color4)]"
                  >
                    Gender
                  </label>

                  <select
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    disabled={saving}
                    className="
                      w-full
                      rounded-xl
                      border
                      border-[var(--color4)]/10
                      bg-[var(--color5)]/40
                      px-4
                      py-3
                      text-sm
                      text-[var(--color4)]
                      outline-none
                      transition
                      focus:border-[var(--color2)]
                      focus:ring-2
                      focus:ring-[var(--color2)]/10
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                    "
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer_not_to_say">Prefer not to say</option>
                  </select>
                </div>
              </div>
            </section>

            {/* CONTACT INFORMATION */}
            <section className="mt-10 border-t border-[var(--color4)]/10 pt-10">
              <div className="mb-6">
                <h3 className="text-xl font-medium text-[var(--color4)]">
                  Contact Information
                </h3>

                <p className="mt-1 text-sm text-[var(--color4)]/50">
                  Where the patient can be reached.
                </p>
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="mb-2 block text-sm font-medium text-[var(--color4)]"
                >
                  Address
                </label>

                <textarea
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter patient's address"
                  rows={3}
                  disabled={saving}
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-[var(--color4)]/10
                    bg-[var(--color5)]/40
                    px-4
                    py-3
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
            </section>

            {/* MEDICAL INFORMATION */}
            <section className="mt-10 border-t border-[var(--color4)]/10 pt-10">
              <div className="mb-6">
                <h3 className="text-xl font-medium text-[var(--color4)]">
                  Medical Information
                </h3>

                <p className="mt-1 text-sm text-[var(--color4)]/50">
                  Add any relevant notes about the patient&apos;s dental care.
                </p>
              </div>

              <div>
                <label
                  htmlFor="medicalNotes"
                  className="mb-2 block text-sm font-medium text-[var(--color4)]"
                >
                  Medical Notes
                </label>

                <textarea
                  id="medicalNotes"
                  value={medicalNotes}
                  onChange={(e) => setMedicalNotes(e.target.value)}
                  placeholder="Allergies, previous dental procedures, medical conditions, or other relevant information..."
                  rows={5}
                  disabled={saving}
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-[var(--color4)]/10
                    bg-[var(--color5)]/40
                    px-4
                    py-3
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
            </section>

            {/* ACTIONS */}
            <div className="mt-10 flex flex-col-reverse gap-3 border-t border-[var(--color4)]/10 pt-8 sm:flex-row sm:justify-end">
              <Link
                href="/admin/patients"
                className="
                  rounded-full
                  border
                  border-[var(--color4)]/10
                  px-7
                  py-3
                  text-center
                  text-sm
                  font-medium
                  text-[var(--color4)]
                  transition
                  hover:bg-[var(--color5)]
                "
              >
                Cancel
              </Link>

              <button
                type="submit"
                disabled={saving}
                className="
                  rounded-full
                  bg-[var(--color4)]
                  px-7
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
                {saving ? "Adding Patient..." : "Add Patient"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
