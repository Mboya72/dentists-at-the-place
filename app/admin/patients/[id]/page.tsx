
import { redirect, notFound } from "next/navigation";
import Link from "next/link";

import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

import AdminHeaderActions from "@/components/admin-header-actions";

import "../../../globals.css";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PatientDetailsPage({
  params,
}: PageProps) {
  // =====================================================
  // AUTHENTICATION
  // =====================================================

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  // =====================================================
  // GET PATIENT ID
  // =====================================================

  const { id } = await params;

  // =====================================================
  // FETCH PATIENT
  // =====================================================

  const adminSupabase = createAdminClient();

  const {
    data: patient,
    error,
  } = await adminSupabase
    .from("patients")
    .select(
      "id, full_name, phone, email, date_of_birth, gender, address, medical_notes, created_at"
    )
    .eq("id", id)
    .maybeSingle();

  // =====================================================
  // DATABASE ERROR
  // =====================================================

  if (error) {
    console.error("Patient loading error:", error);

    return (
      <main className="min-h-screen bg-[var(--color5)]">
        <header className="border-b border-[var(--color4)]/10 bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            <div>
              <p className="text-sm font-medium text-[var(--color2)]">
                Admin Portal
              </p>

              <h1 className="mt-1 text-2xl font-medium text-[var(--color4)]">
                Patient
              </h1>
            </div>

            <AdminHeaderActions />
          </div>
        </header>

        <div className="mx-auto max-w-5xl px-6 py-12">
          <div className="rounded-3xl bg-red-50 p-8 text-sm text-red-600">
            <strong>Unable to load patient.</strong>

            <p className="mt-2">{error.message}</p>
          </div>
        </div>
      </main>
    );
  }

  // =====================================================
  // PATIENT NOT FOUND
  // =====================================================

  if (!patient) {
    notFound();
  }

  // =====================================================
  // FORMAT VALUES
  // =====================================================

  const initials =
    patient.full_name
      ?.split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((name: string) => name.charAt(0).toUpperCase())
      .join("") || "P";

  const formattedGender =
    patient.gender?.replaceAll("_", " ") || "Not provided";

  const formattedDateOfBirth = patient.date_of_birth
    ? new Date(patient.date_of_birth).toLocaleDateString()
    : "Not provided";

  const formattedCreatedAt = patient.created_at
    ? new Date(patient.created_at).toLocaleDateString()
    : "Not available";

  // =====================================================
  // PAGE
  // =====================================================

  return (
    <main className="min-h-screen bg-[var(--color5)]">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="border-b border-[var(--color4)]/10 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
          <div>
            <p className="text-sm font-medium text-[var(--color2)]">
              Admin Portal
            </p>

            <h1 className="mt-1 text-2xl font-medium text-[var(--color4)]">
              Patient Details
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/admin/patients"
              className="
                hidden
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
                sm:block
              "
            >
              All Patients
            </Link>

            <AdminHeaderActions />
          </div>
        </div>
      </header>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="mx-auto max-w-5xl px-6 py-12">
        {/* BACK */}

        <Link
          href="/admin/patients"
          className="
            inline-flex
            items-center
            gap-2
            text-sm
            font-medium
            text-[var(--color4)]/50
            transition
            hover:text-[var(--color2)]
          "
        >
          ← Back to Patients
        </Link>

        {/* =====================================================
            PATIENT PROFILE
        ===================================================== */}

        <section className="mt-6 rounded-[2rem] bg-white p-8 shadow-sm sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            {/* PATIENT */}

            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--color2)]/10 text-xl font-medium text-[var(--color2)]">
                {initials}
              </div>

              <div>
                <p className="text-sm text-[var(--color2)]">
                  Patient Record
                </p>

                <h2 className="mt-1 text-3xl font-medium tracking-tight text-[var(--color4)]">
                  {patient.full_name}
                </h2>

                <p className="mt-1 text-sm text-[var(--color4)]/45">
                  Registered {formattedCreatedAt}
                </p>
              </div>
            </div>

            {/* ACTION */}

            <Link
              href={`tel:${patient.phone}`}
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-[var(--color4)]
                px-6
                py-3
                text-sm
                font-medium
                text-white
                transition
                hover:bg-[var(--color2)]
              "
            >
              Call Patient
            </Link>
          </div>
        </section>

        {/* =====================================================
            PERSONAL INFORMATION
        ===================================================== */}

        <section className="mt-6 rounded-[2rem] bg-white p-8 shadow-sm sm:p-10">
          <div className="mb-7">
            <h3 className="text-xl font-medium text-[var(--color4)]">
              Personal Information
            </h3>

            <p className="mt-1 text-sm text-[var(--color4)]/45">
              Basic information associated with this patient.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {/* FULL NAME */}

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-[var(--color4)]/35">
                Full Name
              </p>

              <p className="mt-2 text-sm text-[var(--color4)]">
                {patient.full_name}
              </p>
            </div>

            {/* PHONE */}

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-[var(--color4)]/35">
                Phone Number
              </p>

              <p className="mt-2 text-sm text-[var(--color4)]">
                {patient.phone}
              </p>
            </div>

            {/* EMAIL */}

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-[var(--color4)]/35">
                Email Address
              </p>

              <p className="mt-2 break-all text-sm text-[var(--color4)]">
                {patient.email || "Not provided"}
              </p>
            </div>

            {/* DOB */}

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-[var(--color4)]/35">
                Date of Birth
              </p>

              <p className="mt-2 text-sm text-[var(--color4)]">
                {formattedDateOfBirth}
              </p>
            </div>

            {/* GENDER */}

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-[var(--color4)]/35">
                Gender
              </p>

              <p className="mt-2 capitalize text-sm text-[var(--color4)]">
                {formattedGender}
              </p>
            </div>

            {/* PATIENT ID */}

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-[var(--color4)]/35">
                Patient ID
              </p>

              <p className="mt-2 break-all font-mono text-xs text-[var(--color4)]/60">
                {patient.id}
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT INFORMATION
        ===================================================== */}

        <section className="mt-6 rounded-[2rem] bg-white p-8 shadow-sm sm:p-10">
          <div className="mb-7">
            <h3 className="text-xl font-medium text-[var(--color4)]">
              Contact Information
            </h3>

            <p className="mt-1 text-sm text-[var(--color4)]/45">
              Contact details for this patient.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-[var(--color4)]/35">
              Address
            </p>

            <p className="mt-2 whitespace-pre-line text-sm leading-6 text-[var(--color4)]">
              {patient.address || "No address provided"}
            </p>
          </div>
        </section>

        {/* =====================================================
            MEDICAL INFORMATION
        ===================================================== */}

        <section className="mt-6 rounded-[2rem] bg-white p-8 shadow-sm sm:p-10">
          <div className="mb-7">
            <h3 className="text-xl font-medium text-[var(--color4)]">
              Medical Information
            </h3>

            <p className="mt-1 text-sm text-[var(--color4)]/45">
              Relevant medical and dental notes for this patient.
            </p>
          </div>

          {patient.medical_notes ? (
            <div className="rounded-2xl bg-[var(--color5)]/50 p-5">
              <p className="whitespace-pre-line text-sm leading-7 text-[var(--color4)]">
                {patient.medical_notes}
              </p>
            </div>
          ) : (
            <div className="rounded-2xl bg-[var(--color5)]/50 p-5">
              <p className="text-sm text-[var(--color4)]/45">
                No medical notes have been added for this patient.
              </p>
            </div>
          )}
        </section>

        {/* =====================================================
            TESTIMONIAL VERIFICATION
        ===================================================== */}

        <section className="mt-6 rounded-[2rem] bg-white p-8 shadow-sm sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="inline-flex items-center rounded-full bg-[var(--color2)]/10 px-4 py-2 text-xs font-medium text-[var(--color2)]">
                Verified Patient
              </div>

              <h3 className="mt-4 text-xl font-medium text-[var(--color4)]">
                Testimonial Verification
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--color4)]/45">
                This patient&apos;s registered phone number can be used to
                verify testimonial submissions made through the website.
              </p>
            </div>

            <div className="shrink-0 rounded-2xl bg-[var(--color5)]/60 px-5 py-4">
              <p className="text-xs text-[var(--color4)]/35">
                Verification Number
              </p>

              <p className="mt-1 font-medium text-[var(--color4)]">
                {patient.phone}
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            FOOTER ACTIONS
        ===================================================== */}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
          <Link
            href="/admin/patients"
            className="
              rounded-full
              border
              border-[var(--color4)]/10
              px-6
              py-3
              text-center
              text-sm
              font-medium
              text-[var(--color4)]
              transition
              hover:bg-white
            "
          >
            ← Back to Patients
          </Link>

          <Link
            href={`/admin/patients/${patient.id}/edit`}
            className="
              rounded-full
              bg-[var(--color4)]
              px-6
              py-3
              text-center
              text-sm
              font-medium
              text-white
              transition
              hover:bg-[var(--color2)]
            "
          >
            Edit Patient
          </Link>
        </div>
      </div>
    </main>
  );
}
