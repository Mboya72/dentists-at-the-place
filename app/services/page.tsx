import Navbar from "@/components/navbar";
import "../globals.css";

export default function ServicesPage() {
  const services = [
    {
      title: "General Dentistry",
      description:
        "Routine checkups, professional cleanings, fillings, and preventive care to keep your smile healthy.",
    },
    {
      title: "Teeth Whitening",
      description:
        "Brighten your smile with safe and professional teeth whitening treatments tailored to your needs.",
    },
    {
      title: "Dental Implants",
      description:
        "Replace missing teeth with durable, natural-looking dental implants designed for long-term comfort.",
    },
    {
      title: "Orthodontics",
      description:
        "Straighten your teeth and improve your bite with braces and modern orthodontic treatment options.",
    },
    {
      title: "Children's Dentistry",
      description:
        "Gentle, compassionate dental care designed to make every child's visit comfortable and positive.",
    },
    {
      title: "Emergency Dental Care",
      description:
        "Prompt treatment for toothaches, broken teeth, infections, and other urgent dental concerns.",
    },
  ];

  return (
    <div className="min-h-screen text-[var(--color4)] bg-gradient-to-b from-black to-[var(--color2)]">
      <Navbar />

      <main
        className="px-5 py-28 min-h-screen sm:px-8 lg:px-[7vw]"
      >
        <div className="mx-auto max-w-[1400px]">

          {/* HEADER */}
          <div className="flex flex-col items-center text-center">

            {/* Heading */}
            <h1
              className="mt-5 text-[var(--color1)] text-4xl font-medium leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
            >
              Comprehensive Dental Care
              <br className="hidden sm:block" />
              <span className="text-[var(--color2)]">
                {" "}for Every Smile
              </span>
            </h1>

            {/* Description */}
            <p
              className="mt-6 max-w-3xl text-base leading-[1.5] font-light text-[var(--color1)] sm:text-lg lg:text-xl"
            >
              We offer comprehensive dental care tailored to every stage
              of life. Whether you need preventive care, cosmetic
              treatments, or restorative procedures, our experienced team
              is here to help you achieve a healthy, confident smile.
            </p>
          </div>

          {/* SERVICES GRID */}
          <div
            className="grid grid-cols-1 gap-5 gap-7 mt-12 mt-16 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, index) => (
              <div
                key={service.title}
                className="overflow-hidden relative p-6 bg-[var(--color5)] rounded-2xl border-[var(--color3)]/20 transition-all duration-300 group border hover:-translate-y-1 hover:shadow-lg sm:p-7 lg:p-8"
              >
                {/* Number */}
                <span
                  className="text-sm font-medium text-[var(--color2)]"
                >
                  0{index + 1}
                </span>

                {/* Title */}
                <h2
                  className="mt-6 text-xl font-medium leading-tight text-[var(--color4)] sm:text-2xl lg:text-3xl"
                >
                  {service.title}
                </h2>

                {/* Description */}
                <p
                  className="mt-4 text-sm leading-[1.5] font-light text-[var(--color4)]/70 sm:text-base"
                >
                  {service.description}
                </p>

                {/* Arrow */}
                <div
                  className="flex items-center justify-between mt-7"
                >
                  <span
                    className="text-sm font-medium text-[var(--color2)]"
                  >
                    Learn more
                  </span>

                  <div
                    className="flex items-center justify-center w-10 h-10 bg-[var(--color2)] rounded-full transition-colors duration-300 group-hover:bg-[var(--color4)]"
                  >
                    <span
                      className="text-lg text-[var(--color1)] transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}