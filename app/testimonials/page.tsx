import Navbar from "@/components/navbar";
import "../globals.css";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import TestimonialsForm from "@/components/testimonials-form";

export default async function TestimonialsPage() {
  const supabase = await createClient();

  // Get currently logged-in user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Fetch approved testimonials
  const { data: testimonials, error } = await supabase
    .from("testimonials")
    .select("id, name, message, rating, created_at")
    .eq("approved", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error loading testimonials:", error);
  }

  return (
    <div
      data-nav-theme="light"
      className="min-h-screen bg-white text-[var(--color4)]"
    >
      <Navbar />

      <main className="min-h-screen pt-32">
        <div className="mx-auto max-w-7xl px-6 py-12">

          {/* =========================================================
              HEADER
          ========================================================= */}

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <div
                className="
                  inline-flex
                  items-center
                  rounded-full
                  bg-[var(--color5)]
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-[var(--color4)]
                "
              >
                <span className="mr-2 text-[var(--color2)]">•</span>
                Testimonials
              </div>

              <h1
                className="
                  mt-5
                  text-4xl
                  font-medium
                  leading-tight
                  tracking-tight
                  text-[var(--color4)]
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                What Our Patients
                <span className="text-[var(--color2)]"> Say</span>
              </h1>

              <p className="mt-6 text-lg font-light leading-relaxed text-gray-600">
                Nothing makes us happier than seeing our patients smile with
                confidence. Read what our patients have to say about their
                experience with our team.
              </p>
            </div>

            {/* =========================================================
                ADMIN LINK
            ========================================================= */}

           
              <Link
                href="/admin/testimonials"
                className="
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  rounded-full
                  bg-[var(--color4)]
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  hover:bg-[var(--color2)]
                "
              >
                <span>Admin Dashboard</span>
                <span>→</span>
              </Link>
            
          </div>

          {/* =========================================================
              TESTIMONIALS
          ========================================================= */}

          {error ? (
            <div className="mt-16 rounded-2xl bg-[var(--color5)] p-10 text-center">
              <p className="text-sm text-gray-500">
                We&apos;re unable to load patient reviews right now.
                Please try again later.
              </p>
            </div>
          ) : testimonials && testimonials.length > 0 ? (
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="
                    group
                    flex
                    min-h-[320px]
                    flex-col
                    rounded-2xl
                    bg-[var(--color5)]
                    p-7
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >
                  {/* Quote */}

                  <div className="text-5xl leading-none text-[var(--color2)]">
                    &quot;
                  </div>

                  {/* Stars */}

                  <div className="mt-4 flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={
                          star <= (testimonial.rating ?? 0)
                            ? "text-[var(--color2)]"
                            : "text-gray-300"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Review */}

                  <p
                    className="
                      mt-5
                      flex-1
                      text-base
                      font-light
                      leading-7
                      text-[var(--color4)]
                    "
                  >
                    {testimonial.message}
                  </p>

                  {/* Patient */}

                  <div className="mt-6 border-t border-[var(--color4)]/10 pt-4">
                    <h3 className="text-lg font-medium text-[var(--color4)]">
                      {testimonial.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Verified Patient
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* =========================================================
               EMPTY STATE
            ========================================================= */

            <div className="mt-16 rounded-[2rem] bg-[var(--color5)] px-6 py-16 text-center">
              <div
                className="
                  mx-auto
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-[var(--color2)]/10
                  text-2xl
                  text-[var(--color2)]
                "
              >
                ★
              </div>

              <h2 className="mt-6 text-2xl font-medium">
                Be the first to share your experience
              </h2>

              <p className="mx-auto mt-3 max-w-md text-sm font-light leading-6 text-gray-500">
                We don&apos;t have any published patient reviews yet.
                If you&apos;ve visited us, we&apos;d love to hear about
                your experience.
              </p>
            </div>
          )}

          {/* =========================================================
              SHARE EXPERIENCE
          ========================================================= */}

          <section
            className="
              mt-24
              grid
              gap-12
              rounded-[2rem]
              bg-[var(--color5)]
              p-7
              sm:p-10
              lg:grid-cols-[0.9fr_1.1fr]
              lg:p-14
            "
          >
            {/* Left */}

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
                <span className="mr-2 text-[var(--color2)]">•</span>
                Your Experience Matters
              </div>

              <h2
                className="
                  mt-6
                  text-3xl
                  font-medium
                  leading-tight
                  tracking-tight
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Had a great experience with us?
              </h2>

              <p
                className="
                  mt-5
                  max-w-lg
                  text-base
                  font-light
                  leading-relaxed
                  text-[var(--color4)]/65
                  sm:text-lg
                "
              >
                We&apos;d love to hear about it. Share your experience
                and help other patients feel confident about choosing
                the right dental care.
              </p>

              <div className="mt-8 space-y-3 text-sm text-[var(--color4)]/60">

                <div className="flex items-center gap-3">
                  <span
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      bg-[var(--color2)]/10
                      text-[var(--color2)]
                    "
                  >
                    ✓
                  </span>

                  Takes less than a minute
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      bg-[var(--color2)]/10
                      text-[var(--color2)]
                    "
                  >
                    ✓
                  </span>

                  Your review helps other patients
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      bg-[var(--color2)]/10
                      text-[var(--color2)]
                    "
                  >
                    ✓
                  </span>

                  Every review is reviewed before publishing
                </div>

              </div>
            </div>

            {/* Form */}

            <TestimonialsForm />
          </section>

          {/* =========================================================
              CTA
          ========================================================= */}

          <div
            className="
              mt-16
              flex
              flex-col
              items-center
              justify-between
              gap-5
              rounded-2xl
              bg-[var(--color4)]
              px-6
              py-8
              text-center
              sm:flex-row
              sm:text-left
            "
          >
            <div>
              <h2 className="text-2xl font-medium text-white">
                Ready to transform your smile?
              </h2>

              <p className="mt-2 text-sm font-light text-white/70">
                Experience personalised dental care from our team.
              </p>
            </div>

            <Link
              href="/contact"
              className="
                rounded-full
                bg-[var(--color2)]
                px-6
                py-3
                text-sm
                font-medium
                text-white
                transition-all
                hover:bg-white
                hover:text-[var(--color4)]
              "
            >
              Book An Appointment
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}