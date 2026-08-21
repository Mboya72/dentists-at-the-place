import { redirect } from "next/navigation";
import Link from "next/link";

import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

import AdminHeaderActions from "@/components/admin-header-actions";

import "../../globals.css";

export default async function PatientsPage() {
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
  // FETCH PATIENTS
  // =====================================================

  const adminSupabase = createAdminClient();

  const { data: patients, error } = await adminSupabase
    .from("patients")
    .select(
      "id, full_name, phone, email, date_of_birth, gender, address, medical_notes, created_at"
    )
    .order("created_at", {
      ascending: false,
    });

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
          {/* LEFT */}
          <div>
            <p className="text-sm font-medium text-[var(--color2)]">
              Admin Portal
            </p>

            <h1 className="mt-1 text-2xl font-medium text-[var(--color4)]">
              Patients
            </h1>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            <Link
              href="/admin/testimonials"
              className="
      inline-flex
      items-center
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
              Back to Dashboard
            </Link>
          </div>
        </div>
      </header>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* PAGE INTRO */}

        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-[var(--color4)]">
              <span className="mr-2 text-[var(--color2)]">•</span>
              Patient Records
            </div>

            <h2 className="mt-4 text-3xl font-medium tracking-tight text-[var(--color4)]">
              Patient Directory
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--color4)]/50">
              Manage registered patients and their contact information. Patient
              phone numbers are also used to verify testimonial submissions.
            </p>
          </div>

          <Link
            href="/admin/patients/add"
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
            + Add Patient
          </Link>
        </div>

        {/* =====================================================
            DATABASE ERROR
        ===================================================== */}

        {error && (
          <div className="mb-8 rounded-2xl bg-red-50 p-5 text-sm text-red-600">
            <strong>Unable to load patients.</strong>

            <br />

            {error.message}
          </div>
        )}

        {/* =====================================================
            STATS
        ===================================================== */}

        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-[var(--color4)]/45">Total Patients</p>

            <p className="mt-2 text-3xl font-medium text-[var(--color4)]">
              {patients?.length ?? 0}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-[var(--color4)]/45">Registered Phones</p>

            <p className="mt-2 text-3xl font-medium text-[var(--color4)]">
              {patients?.filter((patient) => patient.phone).length ?? 0}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-[var(--color4)]/45">With Email</p>

            <p className="mt-2 text-3xl font-medium text-[var(--color4)]">
              {patients?.filter((patient) => patient.email).length ?? 0}
            </p>
          </div>
        </div>

        {/* =====================================================
            PATIENT LIST
        ===================================================== */}

        {patients && patients.length > 0 ? (
          <section>
            <div className="mb-5">
              <h3 className="text-xl font-medium text-[var(--color4)]">
                All Patients
              </h3>

              <p className="mt-1 text-sm text-[var(--color4)]/45">
                Patients registered in the clinic system.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
              {/* DESKTOP TABLE */}

              <div className="hidden overflow-x-auto md:block">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[var(--color4)]/10 text-left">
                      <th className="px-6 py-5 text-xs font-medium uppercase tracking-wide text-[var(--color4)]/40">
                        Patient
                      </th>

                      <th className="px-6 py-5 text-xs font-medium uppercase tracking-wide text-[var(--color4)]/40">
                        Phone
                      </th>

                      <th className="px-6 py-5 text-xs font-medium uppercase tracking-wide text-[var(--color4)]/40">
                        Email
                      </th>

                      <th className="px-6 py-5 text-xs font-medium uppercase tracking-wide text-[var(--color4)]/40">
                        Gender
                      </th>

                      <th className="px-6 py-5 text-xs font-medium uppercase tracking-wide text-[var(--color4)]/40">
                        Registered
                      </th>

                      <th className="px-6 py-5"></th>
                    </tr>
                  </thead>

                  <tbody>
                    {patients.map((patient) => (
                      <tr
                        key={patient.id}
                        className="border-b border-[var(--color4)]/5 last:border-0"
                      >
                        {/* PATIENT */}

                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color2)]/10 font-medium text-[var(--color2)]">
                              {patient.full_name?.charAt(0).toUpperCase() ||
                                "P"}
                            </div>

                            <div>
                              <p className="font-medium text-[var(--color4)]">
                                {patient.full_name}
                              </p>

                              {patient.date_of_birth && (
                                <p className="mt-1 text-xs text-[var(--color4)]/40">
                                  DOB:{" "}
                                  {new Date(
                                    patient.date_of_birth
                                  ).toLocaleDateString()}
                                </p>
                              )}
                            </div>
                          </div>
                        </td>

                        {/* PHONE */}

                        <td className="px-6 py-5">
                          <p className="text-sm text-[var(--color4)]">
                            {patient.phone || "—"}
                          </p>
                        </td>

                        {/* EMAIL */}

                        <td className="px-6 py-5">
                          <p className="text-sm text-[var(--color4)]/60">
                            {patient.email || "—"}
                          </p>
                        </td>

                        {/* GENDER */}

                        <td className="px-6 py-5">
                          <p className="text-sm capitalize text-[var(--color4)]/60">
                            {patient.gender?.replaceAll("_", " ") || "—"}
                          </p>
                        </td>

                        {/* DATE */}

                        <td className="px-6 py-5">
                          <p className="text-sm text-[var(--color4)]/50">
                            {patient.created_at
                              ? new Date(
                                  patient.created_at
                                ).toLocaleDateString()
                              : "—"}
                          </p>
                        </td>

                        {/* ACTION */}

                        <td className="px-6 py-5 text-right">
                          <Link
                            href={`/admin/patients/${patient.id}`}
                            className="
                              inline-flex
                              rounded-full
                              border
                              border-[var(--color4)]/10
                              px-4
                              py-2
                              text-xs
                              font-medium
                              text-[var(--color4)]
                              transition
                              hover:bg-[var(--color5)]
                            "
                          >
                            View
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* MOBILE LIST */}

              <div className="divide-y divide-[var(--color4)]/5 md:hidden">
                {patients.map((patient) => (
                  <div key={patient.id} className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color2)]/10 font-medium text-[var(--color2)]">
                          {patient.full_name?.charAt(0).toUpperCase() || "P"}
                        </div>

                        <div className="min-w-0">
                          <p className="truncate font-medium text-[var(--color4)]">
                            {patient.full_name}
                          </p>

                          <p className="mt-1 text-sm text-[var(--color4)]/45">
                            {patient.phone}
                          </p>
                        </div>
                      </div>

                      <Link
                        href={`/admin/patients/${patient.id}`}
                        className="
                          shrink-0
                          rounded-full
                          border
                          border-[var(--color4)]/10
                          px-4
                          py-2
                          text-xs
                          font-medium
                          text-[var(--color4)]
                        "
                      >
                        View
                      </Link>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-[var(--color4)]/35">Email</p>

                        <p className="mt-1 truncate text-sm text-[var(--color4)]/65">
                          {patient.email || "—"}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-[var(--color4)]/35">
                          Gender
                        </p>

                        <p className="mt-1 text-sm capitalize text-[var(--color4)]/65">
                          {patient.gender?.replaceAll("_", " ") || "—"}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-[var(--color4)]/35">
                          Date of Birth
                        </p>

                        <p className="mt-1 text-sm text-[var(--color4)]/65">
                          {patient.date_of_birth
                            ? new Date(
                                patient.date_of_birth
                              ).toLocaleDateString()
                            : "—"}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-[var(--color4)]/35">
                          Registered
                        </p>

                        <p className="mt-1 text-sm text-[var(--color4)]/65">
                          {patient.created_at
                            ? new Date(patient.created_at).toLocaleDateString()
                            : "—"}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : (
          /* =====================================================
              EMPTY STATE
          ===================================================== */

          <section className="rounded-3xl bg-white px-6 py-20 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color2)]/10 text-xl text-[var(--color2)]">
              +
            </div>

            <h3 className="mt-5 text-xl font-medium text-[var(--color4)]">
              No patients yet
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[var(--color4)]/50">
              Add your first patient to start building your clinic&apos;s
              patient records.
            </p>

            <Link
              href="/admin/patients/add"
              className="
                mt-6
                inline-flex
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
              Add First Patient
            </Link>
          </section>
        )}
      </div>
    </main>
  );
}
