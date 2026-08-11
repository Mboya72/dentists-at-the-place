import Navbar from "@/components/navbar";
import "../globals.css";

export default function DentistsPage() {
  const dentists = [
    {
      name: "Dr. Chand Shah",
      specialty: "Dental Surgeon",
      qualifications: "BDS, MFDS RCSEd",
      description:
        "An experienced dental surgeon committed to providing comprehensive, patient-centered dental care with a focus on comfort, precision, and long-term oral health.",
    },
    {
      name: "Dr. Kunal Shah",
      specialty: "Dental Surgeon & Implantologist",
      qualifications: "BDS (Hons), MJDF RCSEng, MFDS RCSEd",
      description:
        "Specializing in dental surgery and implant dentistry, with a focus on restoring function, confidence, and natural-looking smiles.",
    },
    {
      name: "Dr. Aisha Mohamed",
      specialty: "Dental Surgeon & Paediatric Dentist",
      qualifications:
        "BDS (UK), MJDF (RCS Eng), Grad Cert Paediatric Dentistry (London), MSc (London)",
      description:
        "Dedicated to providing gentle and compassionate dental care, with specialist training focused on creating positive dental experiences for children.",
    },
  ];

  const supportTeam = [
    {
      name: "Candice",
      role: "Receptionist / Dental Assistant",
    },
    {
      name: "Linda",
      role: "Receptionist",
    },
    {
      name: "Elizabeth",
      role: "Dental Assistant",
    },
    {
      name: "Cecilia",
      role: "Dental Assistant",
    },
    {
      name: "Cate",
      role: "Dental Assistant",
    },
  ];

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
                Experienced. Compassionate.{" "}
                <span className="text-[var(--color2)]">
                  Dedicated.
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {dentists.map((dentist, index) => (
                <div
                  key={dentist.name}
                  className="
                    group
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[var(--color3)]/20
                    bg-[var(--color5)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >
                  {/* IMAGE PLACEHOLDER */}
                  <div
                    className="
                      relative
                      flex
                      h-72
                      items-center
                      justify-center
                      overflow-hidden
                      bg-[var(--color3)]/10
                      sm:h-80
                      lg:h-96
                    "
                  >
                    <span
                      className="
                        text-sm
                        font-medium
                        text-[var(--color2)]
                      "
                    >
                      Dentist Photo
                    </span>

                    {/* NUMBER */}
                    <span
                      className="
                        absolute
                        left-4
                        top-4
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        bg-[var(--color1)]
                        text-sm
                        font-medium
                        text-[var(--color2)]
                      "
                    >
                      0{index + 1}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="p-5 sm:p-6">
                    <h3
                      className="
                        text-xl
                        font-medium
                        leading-tight
                        text-[var(--color4)]
                        sm:text-2xl
                      "
                    >
                      {dentist.name}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-sm
                        font-medium
                        text-[var(--color2)]
                        sm:text-base
                      "
                    >
                      {dentist.specialty}
                    </p>

                    <p
                      className="
                        mt-2
                        text-xs
                        font-light
                        leading-[1.4]
                        text-[var(--color4)]/60
                      "
                    >
                      {dentist.qualifications}
                    </p>

                    <p
                      className="
                        mt-4
                        text-sm
                        font-light
                        leading-[1.5]
                        text-[var(--color4)]/70
                      "
                    >
                      {dentist.description}
                    </p>
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
                <div
                  key={member.name}
                  className="
                    rounded-xl
                    border
                    border-[var(--color3)]/20
                    bg-[var(--color5)]
                    p-5
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-md
                  "
                >
                  <div
                    className="
                      mb-5
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-[var(--color2)]
                      text-lg
                      font-medium
                      text-[var(--color1)]
                    "
                  >
                    {member.name.charAt(0)}
                  </div>

                  <h3 className="text-lg font-medium text-[var(--color4)]">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-sm font-light text-[var(--color4)]/65">
                    {member.role}
                  </p>
                </div>
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
          </section>

        </div>
      </main>
    </div>
  );
}