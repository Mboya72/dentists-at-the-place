import Navbar from "@/components/navbar";
import "@/app/globals.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/lib/services";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceIndex = services.findIndex(
    (item) => item.slug === service.slug
  );

  const serviceNumber = String(serviceIndex + 1).padStart(2, "0");

  return (
    <div
      data-nav-theme="light"
      className="min-h-screen overflow-hidden bg-[var(--color1)] text-[var(--color4)]"
    >
      <Navbar />

      <main>
        {/* =========================================================
            HERO
        ========================================================= */}

        <section className="relative px-5 pb-20 pt-28 sm:px-8 sm:pt-32 lg:px-[7vw] lg:pb-28 lg:pt-36">
          {/* Background decoration */}

          <div
            className="
              pointer-events-none
              absolute -right-40 top-20
              h-[420px] w-[420px]
              rounded-full
              bg-[var(--color2)]/5
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute -left-40 bottom-0
              h-[300px] w-[300px]
              rounded-full
              bg-[var(--color2)]/5
              blur-3xl
            "
          />

          <div className="relative mx-auto w-full max-w-[1400px]">
            {/* Back */}

            <Link
              href="/services"
              className="
                group
                inline-flex items-center gap-3
                text-sm font-medium
                text-[var(--color4)]/55
                transition-colors duration-300
                hover:text-[var(--color2)]
              "
            >
              <span
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-full
                  border border-[var(--color4)]/10
                  transition-all duration-300
                  group-hover:border-[var(--color2)]/30
                  group-hover:bg-[var(--color2)]/5
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5"
                >
                  <path d="M19 12H5" />
                  <path d="m12 19-7-7 7-7" />
                </svg>
              </span>

              Back to Services
            </Link>

            {/* Hero content */}

            <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-end lg:gap-20">
              <div>
                {/* Service label */}

                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium tracking-[0.2em] text-[var(--color2)]">
                    {serviceNumber}
                  </span>

                  <span className="h-px w-10 bg-[var(--color2)]/40" />

                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color4)]/45">
                    Dental Service
                  </span>
                </div>

                {/* Title */}

                <h1
                  className="
                    mt-6
                    max-w-5xl
                    text-5xl font-medium
                    leading-[0.95]
                    tracking-[-0.045em]
                    sm:text-6xl
                    md:text-7xl
                    lg:text-[clamp(4rem,7vw,7.5rem)]
                  "
                >
                  {service.title}
                </h1>

                {/* Description */}

                <p
                  className="
                    mt-7
                    max-w-2xl
                    text-base font-light
                    leading-[1.7]
                    text-[var(--color4)]/60
                    sm:text-lg
                    lg:text-xl
                  "
                >
                  {service.description}
                </p>
              </div>

              {/* Side statement */}

              <div
                className="
                  hidden
                  border-l border-[var(--color4)]/10
                  pl-7
                  lg:block
                  lg:pb-1
                "
              >
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color4)]/35">
                  Our approach
                </span>

                <p className="mt-4 text-sm font-light leading-[1.7] text-[var(--color4)]/55">
                  Thoughtful dental care focused on your comfort, confidence,
                  and long-term oral health.
                </p>
              </div>
            </div>

            {/* Divider */}

            <div className="mt-14 flex items-center gap-4 sm:mt-16">
              <span className="h-px w-12 bg-[var(--color4)]/15" />

              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color4)]/35">
                Treatment information
              </span>
            </div>
          </div>
        </section>

        {/* =========================================================
            ABOUT + BENEFITS
        ========================================================= */}

        <section className="px-5 pb-20 sm:px-8 lg:px-[7vw] lg:pb-28">
          <div className="mx-auto max-w-[1400px]">
            <div
              className="
                grid
                gap-14
                border-t border-[var(--color4)]/10
                pt-12
                lg:grid-cols-[minmax(0,1fr)_380px]
                lg:gap-24
                lg:pt-16
              "
            >
              {/* LEFT */}

              <div>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[var(--color2)]" />

                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color4)]/40">
                    About the treatment
                  </span>
                </div>

                <h2
                  className="
                    mt-6
                    max-w-2xl
                    text-3xl font-medium
                    leading-[1.1]
                    tracking-tight
                    sm:text-4xl
                    md:text-5xl
                  "
                >
                  Care designed around{" "}
                  <span className="text-[var(--color2)]">
                    your smile.
                  </span>
                </h2>

                <p
                  className="
                    mt-7
                    max-w-2xl
                    text-base font-light
                    leading-[1.8]
                    text-[var(--color4)]/60
                    sm:text-lg
                  "
                >
                  {service.details}
                </p>

                {/* Benefits */}

                <div className="mt-12">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color4)]/40">
                      Key benefits
                    </span>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {service.benefits.map((benefit, index) => (
                      <div
                        key={benefit}
                        className="
                          group
                          flex items-start gap-4
                          rounded-2xl
                          border border-[var(--color4)]/8
                          bg-[var(--color5)]/40
                          p-5
                          transition-all duration-300
                          hover:-translate-y-0.5
                          hover:border-[var(--color2)]/20
                        "
                      >
                        <span
                          className="
                            flex h-8 w-8 shrink-0
                            items-center justify-center
                            rounded-full
                            bg-[var(--color2)]/10
                            text-xs font-medium
                            text-[var(--color2)]
                          "
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div>
                          <p className="text-sm font-medium leading-relaxed">
                            {benefit}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT */}

              <div className="space-y-5">
                {/* Ideal For */}

                <div
                  className="
                    rounded-[2rem]
                    border border-[var(--color4)]/8
                    bg-[var(--color5)]/40
                    p-7
                    sm:p-8
                  "
                >
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color2)]">
                    Ideal for
                  </span>

                  <h3 className="mt-4 text-2xl font-medium tracking-tight">
                    Is this treatment right for you?
                  </h3>

                  <p className="mt-5 text-sm font-light leading-[1.8] text-[var(--color4)]/60">
                    {service.idealFor}
                  </p>
                </div>

                {/* Appointment card */}

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[2rem]
                    bg-[var(--color4)]
                    p-7
                    text-white
                    sm:p-9
                  "
                >
                  <div
                    className="
                      pointer-events-none
                      absolute -right-24 -top-24
                      h-64 w-64
                      rounded-full
                      border-[45px]
                      border-[var(--color2)]/10
                    "
                  />

                  <div className="relative">
                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color2)]">
                      Your Smile Matters
                    </span>

                    <h2
                      className="
                        mt-7
                        max-w-sm
                        text-3xl font-medium
                        leading-[1.1]
                        tracking-tight
                        sm:text-4xl
                      "
                    >
                      Ready to take the next step?
                    </h2>

                    <p className="mt-5 text-sm font-light leading-[1.7] text-white/55">
                      Book a consultation with our dental team and let us help
                      you find the right treatment for your smile.
                    </p>

                    <Link
                      href={`/?service=${encodeURIComponent(
                        service.title
                      )}#contact`}
                      className="
                        group
                        mt-8
                        inline-flex
                        items-center
                        gap-3
                        rounded-full
                        bg-[var(--color2)]
                        py-2
                        pl-6
                        pr-2
                        text-sm font-medium
                        transition-all duration-300
                        hover:bg-white
                        hover:text-[var(--color4)]
                      "
                    >
                      Book An Appointment

                      <span
                        className="
                          flex h-9 w-9
                          items-center justify-center
                          rounded-full
                          bg-white
                          text-[var(--color2)]
                          transition-transform duration-300
                          group-hover:rotate-45
                        "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="M5 12h14" />
                          <path d="m13 6 6 6-6 6" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            TREATMENT PROCESS
        ========================================================= */}

        <section
          className="
            bg-[var(--color5)]/40
            px-5 py-20
            sm:px-8
            lg:px-[7vw]
            lg:py-28
          "
        >
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
              {/* Heading */}

              <div>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[var(--color2)]" />

                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color4)]/40">
                    What to expect
                  </span>
                </div>

                <h2
                  className="
                    mt-6
                    max-w-md
                    text-3xl font-medium
                    leading-[1.1]
                    tracking-tight
                    sm:text-4xl
                    md:text-5xl
                  "
                >
                  A simple approach to better dental care.
                </h2>
              </div>

              {/* Process */}

              <div>
                <div className="border-t border-[var(--color4)]/10 pt-7">
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color2)]">
                    The process
                  </span>

                  <p
                    className="
                      mt-6
                      max-w-3xl
                      text-base
                      font-light
                      leading-[1.9]
                      text-[var(--color4)]/65
                      sm:text-lg
                    "
                  >
                    {service.process}
                  </p>
                </div>

                {/* Process steps */}

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-[var(--color4)]/8 bg-[var(--color1)] p-6">
                    <span className="text-sm font-medium text-[var(--color2)]">
                      01
                    </span>

                    <h3 className="mt-5 text-base font-medium">
                      Consultation
                    </h3>

                    <p className="mt-2 text-sm font-light leading-relaxed text-[var(--color4)]/50">
                      We assess your oral health and understand your needs.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[var(--color4)]/8 bg-[var(--color1)] p-6">
                    <span className="text-sm font-medium text-[var(--color2)]">
                      02
                    </span>

                    <h3 className="mt-5 text-base font-medium">
                      Treatment
                    </h3>

                    <p className="mt-2 text-sm font-light leading-relaxed text-[var(--color4)]/50">
                      Your treatment is carefully planned around your smile.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[var(--color4)]/8 bg-[var(--color1)] p-6">
                    <span className="text-sm font-medium text-[var(--color2)]">
                      03
                    </span>

                    <h3 className="mt-5 text-base font-medium">
                      Ongoing Care
                    </h3>

                    <p className="mt-2 text-sm font-light leading-relaxed text-[var(--color4)]/50">
                      We help you maintain your results and oral health.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}

        <section className="px-5 py-10 sm:px-8 lg:px-[7vw] lg:py-14">
          <div
            className="
              mx-auto
              flex max-w-[1400px]
              flex-col
              gap-7
              rounded-[2rem]
              bg-[#ccecf1]
              p-7
              sm:p-10
              md:flex-row
              md:items-center
              md:justify-between
              lg:p-12
            "
          >
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color2)]">
                Need something else?
              </span>

              <h2 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">
                Explore all our dental services.
              </h2>
            </div>

            <Link
              href="/services"
              className="
                group
                inline-flex
                shrink-0
                items-center
                gap-3
                rounded-full
                bg-[var(--color4)]
                py-2
                pl-6
                pr-2
                text-sm font-medium
                text-white
                transition-all duration-300
                hover:bg-[var(--color2)]
              "
            >
              View All Services

              <span
                className="
                  flex h-9 w-9
                  items-center justify-center
                  rounded-full
                  bg-white
                  text-[var(--color4)]
                  transition-transform duration-300
                  group-hover:rotate-45
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}