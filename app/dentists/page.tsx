import Navbar from "@/components/navbar";
import "../globals.css";

export default function DentistsPage() {
  const dentists = [
    {
      name: "Dr. Jane Doe",
      specialty: "General & Cosmetic Dentist",
      description:
        "Passionate about creating healthy smiles through personalized treatment plans and modern dental techniques.",
    },
    {
      name: "Dr. Michael Smith",
      specialty: "Orthodontist",
      description:
        "Dedicated to helping patients achieve confident, healthy smiles through modern orthodontic solutions.",
    },
    {
      name: "Dr. Sarah Wilson",
      specialty: "Paediatric Dentist",
      description:
        "Focused on providing gentle, comfortable dental care that helps children build healthy smiles for life.",
    },
    {
      name: "Dr. David Brown",
      specialty: "Restorative Dentist",
      description:
        "Committed to restoring smiles with precise treatment, advanced technology, and patient-centered care.",
    },
  ];

  return (
    <div 
     data-nav-theme="light"
    className="min-h-screen bg-white text-[var(--color4)] ">
      <Navbar />

      <main
        className="pt-28 pb-20 px-5 px-8 min-h-screen sm:pt-32 lg:px-[7vw]"
      >
        <div className="mx-auto max-w-[1400px]">

          {/* HEADER */}
          <div className="flex flex-col items-center text-center">

            {/* LABEL */}
            <span
              className="inline-flex items-center px-4 py-1.5 text-sm font-medium text-[var(--color4)] bg-[var(--color5)] rounded-full sm:text-base"
            >
              <span className="mr-1 text-[var(--color2)]">
                •
              </span>
              Meet the Dentists
            </span>

            {/* HEADING */}
            <h1
              className="mt-5 max-w-4xl text-4xl font-medium leading-[1.05] tracking-tight text-[var(--color4)] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
            >
              Meet the Doctors Who Keep
              <br className="hidden sm:block" />
              Your{" "}
              <span className="text-[var(--color2)]">
                Smiles Healthy.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className="mt-6 max-w-3xl text-base leading-[1.5] font-light text-[var(--color4)]/70 sm:text-lg lg:text-xl"
            >
              Our experienced dental professionals are committed to
              providing exceptional care with compassion, expertise,
              and the latest dental technology.
            </p>
          </div>


          {/* DENTISTS */}
          <div
            className="grid grid-cols-1 gap-5 gap-6 mt-12 mt-16 sm:grid-cols-2 lg:grid-cols-4"
          >
            {dentists.map((dentist, index) => (
              <div
                key={dentist.name}
                className="overflow-hidden bg-[var(--color5)] rounded-2xl border-[var(--color3)]/20 transition-all duration-300 group border hover:-translate-y-1 hover:shadow-xl"
              >

                {/* IMAGE */}
                <div
                  className="overflow-hidden relative h-64 bg-[var(--color3)]/20 sm:h-72 lg:h-80"
                >
                  {/* Replace this with Image later */}
                  <div
                    className="absolute inset-0 flex items-center justify-center text-[var(--color2)] text-sm font-medium"
                  >
                    Dentist Photo
                  </div>

                  {/* Number */}
                  <span
                    className="absolute top-4 left-4 flex items-center justify-center w-9 h-9 text-[var(--color2)] text-sm font-medium bg-[var(--color1)] rounded-full"
                  >
                    0{index + 1}
                  </span>
                </div>


                {/* CONTENT */}
                <div className="p-5 sm:p-6">

                  <h2
                    className="text-xl font-medium leading-tight text-[var(--color4)] sm:text-2xl"
                  >
                    {dentist.name}
                  </h2>

                  <p
                    className="mt-2 text-sm font-medium text-[var(--color2)] sm:text-base"
                  >
                    {dentist.specialty}
                  </p>

                  <p
                    className="mt-4 text-sm leading-[1.5] font-light text-[var(--color4)]/70"
                  >
                    {dentist.description}
                  </p>

                  {/* ACTION */}
                  <div className="flex items-center justify-between mt-6">

                    <span
                      className="text-sm font-medium text-[var(--color4)]"
                    >
                      View Profile
                    </span>

                    <div
                      className="flex items-center justify-center w-10 h-10 bg-[var(--color2)] rounded-full transition-all duration-300 group-hover:bg-[var(--color4)]"
                    >
                      <span
                        className="text-lg text-[var(--color1)] transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>


          {/* CTA */}
          <div className="flex justify-center mt-12 lg:mt-14">
            <button
              className="flex items-center gap-2 px-6 py-2 text-[var(--color1)] text-sm font-medium bg-[var(--color2)] rounded-full transition-colors duration-300 cursor-pointer hover:bg-[var(--color4)] sm:text-base"
            >
              See All Doctors

              <span
                className="flex items-center justify-center w-7 h-7 text-[var(--color2)] bg-[var(--color1)] rounded-full"
              >
                →
              </span>
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}