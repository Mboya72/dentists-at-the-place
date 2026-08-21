import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import AdminTestimonialActions from "@/components/admin-testimonial-actions";
import AdminHeaderActions from "@/components/admin-header-actions";
import Link from "next/link";
import "../globals.css";

export default async function AdminPage() {
  const supabase = await createClient();
  const adminSupabase = createAdminClient();

  // =====================================================
  // CHECK AUTHENTICATION
  // =====================================================

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  // =====================================================
  // FETCH TESTIMONIALS
  // =====================================================

  const { data: testimonials, error } = await adminSupabase
    .from("testimonials")
    .select(
      "id, name, message, rating, approved, rejected, created_at"
    )
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    console.error("Error loading testimonials:", error);
  }

  // =====================================================
  // FILTER TESTIMONIALS
  // =====================================================

  const pendingTestimonials =
    testimonials?.filter(
      (testimonial) =>
        testimonial.approved === false &&
        testimonial.rejected === false
    ) ?? [];

  const publishedTestimonials =
    testimonials?.filter(
      (testimonial) => testimonial.approved === true
    ) ?? [];

  const rejectedTestimonials =
    testimonials?.filter(
      (testimonial) => testimonial.rejected === true
    ) ?? [];

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

          {/* Left */}
          <div>
            <p className="text-sm font-medium text-[var(--color2)]">
              Admin Portal
            </p>

            <h1 className="mt-1 text-2xl font-medium text-[var(--color4)]">
              Testimonials
            </h1>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">

            {/* Website */}
            <Link
              href="/testimonials"
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
              View Website
            </Link>

            {/* Profile + Sign Out */}
            <AdminHeaderActions />

          </div>
        </div>
      </header>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* =====================================================
            DATABASE ERROR
        ===================================================== */}

        {error && (
          <div className="mb-8 rounded-2xl bg-red-50 p-5 text-sm text-red-600">
            <strong>Unable to load testimonials.</strong>

            <br />

            {error.message}
          </div>
        )}

        {/* =====================================================
            PENDING
        ===================================================== */}

        <section>

          <div className="mb-6 flex items-end justify-between">

            <div>

              <div className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-[var(--color4)]">
                <span className="mr-2 text-[var(--color2)]">
                  •
                </span>

                Review Queue
              </div>

              <h2 className="mt-4 text-3xl font-medium text-[var(--color4)]">
                Pending Testimonials
              </h2>

              <p className="mt-2 text-sm text-[var(--color4)]/50">
                Reviews waiting for approval.
              </p>

            </div>

            <div className="flex h-10 min-w-10 items-center justify-center rounded-full bg-[var(--color2)] px-3 text-sm font-medium text-white">
              {pendingTestimonials.length}
            </div>

          </div>

          {pendingTestimonials.length === 0 ? (

            <div className="rounded-3xl bg-white px-6 py-16 text-center shadow-sm">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color2)]/10 text-xl text-[var(--color2)]">
                ✓
              </div>

              <h3 className="mt-5 text-xl font-medium text-[var(--color4)]">
                No pending testimonials
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm text-[var(--color4)]/50">
                New patient reviews will appear here when they are submitted.
              </p>

            </div>

          ) : (

            <div className="space-y-5">

              {pendingTestimonials.map((testimonial) => (

                <article
                  key={testimonial.id}
                  className="rounded-3xl bg-white p-6 shadow-sm sm:p-8"
                >

                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                    {/* Testimonial */}
                    <div className="flex-1">

                      {/* Patient */}
                      <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color2)]/10 font-medium text-[var(--color2)]">
                          {testimonial.name
                            ?.charAt(0)
                            .toUpperCase()}
                        </div>

                        <div>

                          <h3 className="font-medium text-[var(--color4)]">
                            {testimonial.name}
                          </h3>

                          <p className="text-sm text-[var(--color4)]/45">
                            Patient
                          </p>

                        </div>

                      </div>

                      {/* Rating */}
                      <div className="mt-5 flex gap-1">

                        {[1, 2, 3, 4, 5].map((star) => (

                          <span
                            key={star}
                            className={
                              star <= testimonial.rating
                                ? "text-[var(--color2)]"
                                : "text-gray-300"
                            }
                          >
                            ★
                          </span>

                        ))}

                      </div>

                      {/* Message */}
                      <blockquote className="mt-5 max-w-3xl text-base font-light leading-7 text-[var(--color4)]">
                        &quot;{testimonial.message}&quot;
                      </blockquote>

                      {/* Date */}
                      <p className="mt-5 text-xs text-[var(--color4)]/40">
                        Submitted{" "}
                        {new Date(
                          testimonial.created_at
                        ).toLocaleDateString()}
                      </p>

                    </div>

                    {/* Actions */}
                    <AdminTestimonialActions
                      testimonialId={testimonial.id}
                    />

                  </div>

                </article>

              ))}

            </div>

          )}

        </section>

        {/* =====================================================
            PUBLISHED
        ===================================================== */}

        <section className="mt-20">

          <div className="mb-6">

            <div className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-[var(--color4)]">

              <span className="mr-2 text-[var(--color2)]">
                •
              </span>

              Live Reviews

            </div>

            <h2 className="mt-4 text-3xl font-medium text-[var(--color4)]">
              Published Testimonials
            </h2>

            <p className="mt-2 text-sm text-[var(--color4)]/50">
              Testimonials currently visible on the website.
            </p>

          </div>

          {publishedTestimonials.length === 0 ? (

            <div className="rounded-3xl bg-white px-6 py-16 text-center shadow-sm">

              <p className="text-sm text-[var(--color4)]/50">
                No published testimonials yet.
              </p>

            </div>

          ) : (

            <div className="grid gap-5 md:grid-cols-2">

              {publishedTestimonials.map((testimonial) => (

                <article
                  key={testimonial.id}
                  className="rounded-3xl bg-white p-6 shadow-sm"
                >

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color2)]/10 font-medium text-[var(--color2)]">
                      {testimonial.name
                        ?.charAt(0)
                        .toUpperCase()}
                    </div>

                    <div>

                      <h3 className="font-medium text-[var(--color4)]">
                        {testimonial.name}
                      </h3>

                      <p className="text-xs text-[var(--color4)]/40">
                        Published
                      </p>

                    </div>

                  </div>

                  {/* Rating */}
                  <div className="mt-4 flex gap-1">

                    {[1, 2, 3, 4, 5].map((star) => (

                      <span
                        key={star}
                        className={
                          star <= testimonial.rating
                            ? "text-[var(--color2)]"
                            : "text-gray-300"
                        }
                      >
                        ★
                      </span>

                    ))}

                  </div>

                  {/* Message */}
                  <p className="mt-4 text-sm font-light leading-6 text-[var(--color4)]">
                    &quot;{testimonial.message}&quot;
                  </p>

                  <p className="mt-4 text-xs text-[var(--color4)]/40">
                    {new Date(
                      testimonial.created_at
                    ).toLocaleDateString()}
                  </p>

                </article>

              ))}

            </div>

          )}

        </section>

        {/* =====================================================
            REJECTED
        ===================================================== */}

        <section className="mt-20">

          <div className="mb-6">

            <div className="inline-flex items-center rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-red-500">

              <span className="mr-2">
                •
              </span>

              Rejected
            </div>

            <h2 className="mt-4 text-3xl font-medium text-[var(--color4)]">
              Rejected Testimonials
            </h2>

            <p className="mt-2 text-sm text-[var(--color4)]/50">
              Reviews that were rejected by the administrator.
            </p>

          </div>

          {rejectedTestimonials.length === 0 ? (

            <div className="rounded-3xl bg-white px-6 py-16 text-center shadow-sm">

              <p className="text-sm text-[var(--color4)]/50">
                No rejected testimonials.
              </p>

            </div>

          ) : (

            <div className="grid gap-5 md:grid-cols-2">

              {rejectedTestimonials.map((testimonial) => (

                <article
                  key={testimonial.id}
                  className="rounded-3xl bg-white p-6 shadow-sm"
                >

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-50 font-medium text-red-500">
                      {testimonial.name
                        ?.charAt(0)
                        .toUpperCase()}
                    </div>

                    <div>

                      <h3 className="font-medium text-[var(--color4)]">
                        {testimonial.name}
                      </h3>

                      <p className="text-xs text-red-500">
                        Rejected
                      </p>

                    </div>

                  </div>

                  {/* Rating */}
                  <div className="mt-4 flex gap-1">

                    {[1, 2, 3, 4, 5].map((star) => (

                      <span
                        key={star}
                        className={
                          star <= testimonial.rating
                            ? "text-[var(--color2)]"
                            : "text-gray-300"
                        }
                      >
                        ★
                      </span>

                    ))}

                  </div>

                  {/* Message */}
                  <p className="mt-4 text-sm font-light leading-6 text-[var(--color4)]">
                    &quot;{testimonial.message}&quot;
                  </p>

                  <p className="mt-4 text-xs text-[var(--color4)]/40">
                    {new Date(
                      testimonial.created_at
                    ).toLocaleDateString()}
                  </p>

                </article>

              ))}

            </div>

          )}

        </section>

      </div>

    </main>
  );
}