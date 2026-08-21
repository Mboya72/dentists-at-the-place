import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import "../../globals.css";

export default async function RejectedTestimonialsPage() {
  // Auth client — checks whether admin is logged in
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  // Admin client — reads testimonials
  const adminSupabase = createAdminClient();

  const { data: testimonials, error } = await adminSupabase
    .from("testimonials")
    .select(
      "id, name, message, rating, approved, rejected, created_at"
    )
    .eq("rejected", true)
    .order("created_at", {
      ascending: false,
    });

  return (
    <main className="min-h-screen bg-[var(--color5)]">
      {/* HEADER */}
      <header className="border-b border-[var(--color4)]/10 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
          <div>
            <p className="text-sm font-medium text-red-500">
              Admin Portal
            </p>

            <h1 className="mt-1 text-2xl font-medium text-[var(--color4)]">
              Rejected Testimonials
            </h1>
          </div>

          <Link
            href="/admin/testimonials"
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
              hover:bg-white
            "
          >
            Back to Dashboard
          </Link>
        </div>
      </header>

      {/* CONTENT */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* DATABASE ERROR */}
        {error && (
          <div className="mb-8 rounded-2xl bg-red-50 p-5 text-sm text-red-600">
            Unable to load rejected testimonials.
            <br />
            {error.message}
          </div>
        )}

        {/* TITLE */}
        <section>
          <div className="mb-8 flex items-end justify-between">
            <div>
              <div
                className="
                  inline-flex
                  items-center
                  rounded-full
                  bg-white
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-[var(--color4)]
                "
              >
                <span className="mr-2 text-red-500">
                  •
                </span>

                Rejected Reviews
              </div>

              <h2 className="mt-4 text-3xl font-medium text-[var(--color4)]">
                Rejected Testimonials
              </h2>

              <p className="mt-2 text-sm text-[var(--color4)]/50">
                Testimonials that were rejected from publication.
              </p>
            </div>

            <div
              className="
                flex
                h-10
                min-w-10
                items-center
                justify-center
                rounded-full
                bg-red-500
                px-3
                text-sm
                font-medium
                text-white
              "
            >
              {testimonials?.length ?? 0}
            </div>
          </div>

          {/* EMPTY */}
          {!testimonials || testimonials.length === 0 ? (
            <div className="rounded-3xl bg-white px-6 py-16 text-center shadow-sm">
              <div
                className="
                  mx-auto
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-red-50
                  text-xl
                  text-red-500
                "
              >
                ✓
              </div>

              <h3 className="mt-5 text-xl font-medium text-[var(--color4)]">
                No rejected testimonials
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm text-[var(--color4)]/50">
                Testimonials that you reject will appear here.
              </p>

              <Link
                href="/admin"
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
                Back to Dashboard
              </Link>
            </div>
          ) : (
            /* REJECTED TESTIMONIALS */
            <div className="space-y-5">
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.id}
                  className="rounded-3xl bg-white p-6 shadow-sm sm:p-8"
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      {/* PATIENT */}
                      <div className="flex items-center gap-3">
                        <div
                          className="
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-full
                            bg-red-50
                            font-medium
                            text-red-500
                          "
                        >
                          {testimonial.name
                            .charAt(0)
                            .toUpperCase()}
                        </div>

                        <div>
                          <h3 className="font-medium text-[var(--color4)]">
                            {testimonial.name}
                          </h3>

                          <p className="text-sm text-red-500">
                            Rejected
                          </p>
                        </div>
                      </div>

                      {/* RATING */}
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

                      {/* MESSAGE */}
                      <blockquote className="mt-5 max-w-3xl text-base font-light leading-7 text-[var(--color4)]">
                        &quot;{testimonial.message}&quot;
                      </blockquote>

                      {/* DATE */}
                      <p className="mt-5 text-xs text-[var(--color4)]/40">
                        Submitted{" "}
                        {new Date(
                          testimonial.created_at
                        ).toLocaleDateString()}
                      </p>
                    </div>

                    {/* STATUS */}
                    <div
                      className="
                        rounded-full
                        bg-red-50
                        px-5
                        py-2
                        text-sm
                        font-medium
                        text-red-500
                      "
                    >
                      Rejected
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}