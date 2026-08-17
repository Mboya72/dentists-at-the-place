import Navbar from "@/components/navbar";
import "../globals.css";
import Link from "next/link";
import { teamMembers } from "./teamData";
import Image from "next/image";

export default function TeamPage() {
  const dentists = teamMembers.filter(
    (member) =>
      member.role.includes("Dental Surgeon") ||
      member.role.includes("Implantologist") ||
      member.role.includes("Paediatric Dentist")
  );

  const supportTeam = teamMembers.filter(
    (member) =>
      !member.role.includes("Dental Surgeon") &&
      !member.role.includes("Implantologist") &&
      !member.role.includes("Paediatric Dentist")
  );

  return (
    <div
      data-nav-theme="light"
      className="min-h-screen bg-[var(--color1)] text-[var(--color4)]"
    >
      <Navbar />

      <main className="min-h-screen px-5 pt-28 pb-20 sm:px-8 sm:pt-32 lg:px-[7vw]">
        <div className="mx-auto max-w-[1400px]">

          {/* HEADER */}
          <div className="flex flex-col items-center text-center">
            {/* LABEL */}
            <span
              className="
                inline-flex items-center
                rounded-full
                bg-[var(--color5)]
                px-4 py-1.5
                text-sm font-medium
                text-[var(--color4)]
                sm:text-base
              "
            >
              <span className="mr-1 text-[var(--color2)]">•</span>
              Meet Our Team
            </span>

            {/* HEADING */}
            <h1
              className="
                mt-5
                max-w-5xl
                text-4xl
                font-medium
                leading-[1.05]
                tracking-tight
                text-[var(--color4)]
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                xl:text-8xl
              "
            >
              The People Behind
              <br className="hidden sm:block" />
              Your{" "}
              <span className="text-[var(--color2)]">
                Healthy Smile.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-6
                max-w-3xl
                text-base
                font-light
                leading-[1.5]
                text-[var(--color4)]/70
                sm:text-lg
                lg:text-xl
              "
            >
              Our multidisciplinary team combines experience, advanced
              dental techniques, and a compassionate approach to provide
              exceptional care for every patient.
            </p>
          </div>

          {/* DENTISTS */}
          <section className="mt-14 sm:mt-16">
            <div className="mb-7">
              <p className="text-sm font-medium text-[var(--color2)]">
                OUR DENTISTS
              </p>

              <h2
                className="
                  mt-2
                  text-3xl
                  font-medium
                  tracking-tight
                  text-[var(--color4)]
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Experienced Professionals,
                <br className="hidden sm:block" />
                <span className="text-[var(--color2)]">
                  Exceptional Care.
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {dentists.map((member) => (
                <div key={member.slug} className="w-full">
                  {/* IMAGE */}
                  <div
                    className="
                      overflow-hidden
                      relative
                      w-full
                      rounded-[24px]
                      aspect-[4/5]
                      bg-[var(--color5)]
                    "
                  >
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="
                          (max-width: 640px) 100vw,
                          (max-width: 1024px) 50vw,
                          33vw
                        "
                        className="
                          object-cover
                          transition-transform
                          duration-500
                          hover:scale-105
                        "
                      />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="var(--color2)"
                          strokeWidth="1.2"
                          className="w-20 h-20"
                        >
                          <circle cx="12" cy="8" r="4" />
                          <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* INFO */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="min-w-0 pr-3">
                      <h3 className="text-xl font-medium leading-tight sm:text-2xl">
                        {member.name}
                      </h3>

                      <p className="mt-1 text-sm text-[var(--color4)]/70 sm:text-base">
                        {member.role}
                      </p>

                      {member.qualifications && (
                        <p className="mt-1 text-xs text-[var(--color4)]/50 sm:text-sm">
                          {member.qualifications}
                        </p>
                      )}
                    </div>

                    {/* VIEW BUTTON */}
                    <Link
                      href={`/the_team/${member.slug}`}
                      className="
                        group
                        flex
                        items-center
                        justify-center
                        w-14
                        h-14
                        bg-[var(--color5)]
                        text-[var(--color4)]
                        rounded-full
                        transition-all
                        duration-300
                        shrink-0
                        hover:bg-[var(--color2)]
                        hover:text-white
                        sm:w-16
                        sm:h-16
                      "
                      aria-label={`View ${member.name}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="
                          w-6
                          h-6
                          transition-transform
                          duration-300
                          group-hover:translate-x-0.5
                        "
                      >
                        <path d="M5 12h14" />
                        <path d="m13 6 6 6-6 6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SUPPORT TEAM */}
          <section className="mt-16 sm:mt-20">
            <div className="mb-7">
              <p className="text-sm font-medium text-[var(--color2)]">
                OUR SUPPORT TEAM
              </p>

              <h2
                className="
                  mt-2
                  text-3xl
                  font-medium
                  tracking-tight
                  text-[var(--color4)]
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                The Team That Makes Every Visit{" "}
                <span className="text-[var(--color2)]">
                  Comfortable.
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {supportTeam.map((member) => (
                <Link
                  key={member.slug}
                  href={`/the_team/${member.slug}`}
                  className="
                    group
                    rounded-xl
                    border
                    border-[var(--color3)]/20
                    bg-[var(--color5)]
                    p-5
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[var(--color2)]/40
                    hover:shadow-md
                  "
                >
                  {/* AVATAR / FALLBACK ICON */}
                  <div
                    className="
                      relative
                      mb-5
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-full
                      bg-[var(--color2)]
                      text-[var(--color1)]
                    "
                  >
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="w-6 h-6"
                      >
                        <circle cx="12" cy="8" r="3.5" />
                        <path d="M5 20c.8-3.5 3.5-5.5 7-5.5s6.2 2 7 5.5" />
                      </svg>
                    )}
                  </div>

                  <h3 className="text-lg font-medium text-[var(--color4)]">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-sm font-light text-[var(--color4)]/65">
                    {member.role}
                  </p>

                  <div
                    className="
                      flex
                      items-center
                      gap-1
                      mt-4
                      text-xs
                      font-medium
                      text-[var(--color2)]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    View Profile
                    <span>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* TEAM MESSAGE */}
          <section
            className="
              mt-16
              rounded-2xl
              bg-[var(--color3)]
              px-6
              py-10
              text-center
              sm:px-10
              sm:py-14
            "
          >
            <p className="text-sm font-medium text-white/70">
              YOUR CARE COMES FIRST
            </p>

            <h2
              className="
                mx-auto
                mt-3
                max-w-3xl
                text-3xl
                font-medium
                leading-tight
                text-white
                sm:text-4xl
                lg:text-5xl
              "
            >
              Expert care with a human approach.
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-sm
                font-light
                leading-[1.6]
                text-white/80
                sm:text-base
              "
            >
              From your first consultation to ongoing treatment, our team
              works together to make your dental experience comfortable,
              professional, and tailored to your needs.
            </p>

            <Link
              href="/#contact"
              className="
                group
                inline-flex
                items-center
                gap-2
                mt-7
                pl-5
                pr-1
                py-1.5
                text-sm
                font-medium
                text-[var(--color4)]
                bg-white
                rounded-full
                transition-colors
                duration-300
                hover:bg-[var(--color5)]
                sm:text-base
              "
            >
              <span>Book An Appointment</span>

              <span
                className="
                  flex
                  items-center
                  justify-center
                  w-9
                  h-9
                  text-[var(--color4)]
                  bg-[var(--color5)]
                  rounded-full
                  transition-all
                  duration-300
                  group-hover:bg-[var(--color2)]
                  group-hover:text-white
                  group-hover:translate-x-0.5
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
                  className="w-5 h-5"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </span>
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}