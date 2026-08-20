import Navbar from "@/components/navbar";
import "../globals.css";
import Link from "next/link";
import { services } from "@/lib/services";

export default function ServicesPage() {
  return (
    <div
      data-nav-theme="light"
      className="min-h-screen bg-[var(--color1)] text-[var(--color4)]"
    >
      <Navbar />

      <main className="min-h-screen px-5 py-28 sm:px-8 lg:px-[7vw]">
        <div className="mx-auto max-w-[1400px]">
          {/* HEADER */}
          <div className="flex flex-col items-center text-center">
            <div
              className="
                inline-flex items-center rounded-full
                bg-[var(--color5)]
                px-4 py-2
                text-sm font-medium
                text-[var(--color4)]
              "
            >
              <span className="mr-2 text-[var(--color2)]">•</span>
              Dental Services
            </div>

            <h1
              className="
                mt-6 text-4xl font-medium leading-[1.05] tracking-tight
                text-[var(--color4)]
                sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
              "
            >
              Comprehensive Dental Care
              <br className="hidden sm:block" />
              <span className="text-[var(--color2)]">
                {" "}
                for Every Smile
              </span>
            </h1>

            <p
              className="
                mt-6 max-w-3xl text-base font-light leading-[1.5]
                text-[var(--color4)]/70
                sm:text-lg lg:text-xl
              "
            >
              We offer comprehensive dental care tailored to every stage of
              life. Whether you need preventive care, cosmetic treatments, or
              restorative procedures, our experienced team is here to help you
              achieve a healthy, confident smile.
            </p>
          </div>

          {/* SERVICES GRID */}
          <div
            className="
              mt-12 grid grid-cols-1 gap-5
              sm:grid-cols-2
              lg:mt-16 lg:grid-cols-3 lg:gap-6
            "
          >
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="
                  group relative block overflow-hidden rounded-2xl
                  border border-[var(--color3)]/15
                  bg-[var(--color5)] p-6
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-lg
                  sm:p-7 lg:p-8
                "
              >
                <span
                  className="
                    text-sm font-medium
                    text-[var(--color2)]
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2
                  className="
                    mt-6 text-xl font-medium leading-tight
                    text-[var(--color4)]
                    sm:text-2xl lg:text-3xl
                  "
                >
                  {service.title}
                </h2>

                <p
                  className="
                    mt-4 text-sm font-light leading-[1.5]
                    text-[var(--color4)]/70
                    sm:text-base
                  "
                >
                  {service.description}
                </p>

                <div className="mt-7 flex items-center justify-between">
                  <span
                    className="
                      text-sm font-medium
                      text-[var(--color2)]
                    "
                  >
                    Learn more
                  </span>

                  <div
                    className="
                      flex h-10 w-10 items-center justify-center
                      rounded-full bg-[var(--color2)]
                      transition-all duration-300
                      group-hover:bg-[var(--color4)]
                    "
                  >
                    <span
                      className="
                        text-lg text-[var(--color1)]
                        transition-transform duration-300
                        group-hover:translate-x-1
                      "
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* BOTTOM CTA */}
          <div
            className="
              mt-12 flex flex-col items-center justify-between gap-5
              rounded-2xl bg-[var(--color4)]
              px-6 py-8 text-center
              sm:flex-row sm:text-left
              lg:mt-16
            "
          >
            <div>
              <h2 className="text-2xl font-medium text-white sm:text-3xl">
                Not sure which treatment you need?
              </h2>

              <p className="mt-2 text-sm font-light text-white/70 sm:text-base">
                Our team can help you find the right care for your smile.
              </p>
            </div>

            <Link
              href="/#contact"
              className="
                shrink-0 rounded-full
                bg-[var(--color2)]
                px-6 py-3
                text-sm font-medium text-white
                transition-all duration-300
                hover:bg-white hover:text-[var(--color4)]
                sm:text-base
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