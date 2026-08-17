import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { teamMembers } from "../teamData";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }));
}

export default async function TeamMemberPage({ params }: PageProps) {
  const { slug } = await params;

  const member = teamMembers.find((person) => person.slug === slug);

  if (!member) {
    notFound();
  }

  return (
    <main
      className="
        min-h-screen
        text-[var(--color4)]
        bg-[var(--color1)]
      "
    >
      {/* HEADER */}
      <section
        className="
          px-5 pt-28 pb-12
          sm:px-8
          lg:px-[7vw]
        "
      >
        <div
          className="
            max-w-[1400px]
            mx-auto
          "
        >
          <Link
            href="/the_team"
            className="
              inline-flex
              mb-8
              text-sm font-medium text-[var(--color2)]
              transition-colors
              items-center gap-2 hover:text-[var(--color4)]
            "
          >
            ← Back to Our Team
          </Link>

          {/* CONTENT */}
          <div
            className="
              grid grid-cols-1
              items-center gap-10
              lg:grid-cols-2 lg:gap-20
            "
          >
            {/* IMAGE */}
            <div
              className="
                overflow-hidden
                w-full max-w-xl
                rounded-[28px]
                relative aspect-[4/5]
              "
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="
                  object-cover
                "
              />
            </div>

            {/* DETAILS */}
            <div
              className="
                max-w-2xl
              "
            >
              {/* LABEL */}
              <div
                className="
                  inline-flex
                  px-4 py-1 mb-5
                  text-sm font-medium
                  bg-gray-100
                  rounded-full
                  items-center
                "
              >
                <span
                  className="
                    mr-1
                  "
                >
                  •
                </span>
                Meet Our Team
              </div>

              <h1
                className="
                  text-4xl font-medium leading-[1.05] tracking-tight
                  sm:text-6xl
                  lg:text-7xl
                "
              >
                {member.name}
              </h1>

              <p
                className="
                  mt-4
                  text-xl font-medium text-[var(--color2)]
                  sm:text-2xl
                "
              >
                {member.role}
              </p>

              {member.qualifications && (
                <p
                  className="
                    mt-3
                    text-sm font-medium text-[var(--color4)]/60
                    sm:text-base
                  "
                >
                  {member.qualifications}
                </p>
              )}

              <div
                className="
                  w-full h-px
                  my-8
                  bg-[var(--color5)]
                "
              />

              <p
                className="
                  max-w-xl
                  text-base leading-relaxed text-[var(--color4)]/70
                  sm:text-lg
                "
              >
                {member.description}
              </p>

              {/* CTA */}
              <Link
                href="/#contact"
                className="
                  inline-flex
                  mt-8 pl-5 pr-1 py-1.5
                  text-sm font-medium text-[var(--color1)]
                  bg-[var(--color2)]
                  rounded-full
                  transition-all
                  group items-center gap-2 duration-300 ease-out hover:bg-[var(--color4)] hover:shadow-lg
                  sm:text-base
                "
              >
                <span>Book An Appointment</span>

                <span
                  className="
                    flex
                    w-9 h-9
                    text-[var(--color2)]
                    bg-[var(--color1)]
                    rounded-full
                    transition-colors
                    items-center justify-center duration-300 group-hover:bg-[var(--color2)] group-hover:text-[var(--color1)]
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
                    className="
                      w-5 h-5
                    "
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CLINIC MESSAGE */}
      <section
        className="
          px-5 py-16
          bg-[var(--color5)]
          sm:px-8
          lg:px-[7vw]
        "
      >
        <div
          className="
            max-w-[1000px]
            mx-auto
            text-center
          "
        >
          <p
            className="
              text-sm font-medium text-[var(--color2)]
            "
          >
            DENTISTS @ THE PLACE
          </p>

          <h2
            className="
              mt-3
              text-3xl font-medium leading-tight
              sm:text-5xl
            "
          >
            Innovative Therapy &
            <br />
            <span
              className="
                text-[var(--color2)]
              "
            >
              Qualified Dentists
            </span>
          </h2>

          <p
            className="
              max-w-2xl
              mx-auto mt-5
              text-sm leading-relaxed text-[var(--color4)]/70
              sm:text-base
            "
          >
            We provide all aspects of general dentistry together with advanced
            procedures, delivered with a contemporary and conservative approach
            to oral health care.
          </p>
        </div>
      </section>
    </main>
  );
}
