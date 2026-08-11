import Navbar from "@/components/navbar";
import "../globals.css";

export default function ServicesPage() {
  const services = [
  {
    title: "Dental Implants",
    description:
      "Replace missing teeth with durable, natural-looking implants designed to restore function, comfort, and confidence.",
  },
  {
    title: "Cavity Prevention",
    description:
      "Prevent tooth decay and maintain a healthy smile through regular examinations, preventive care, and professional guidance.",
  },
  {
    title: "Dental Hygiene",
    description:
      "Professional dental hygiene care to keep your teeth and gums clean, healthy, and free from harmful plaque buildup.",
  },
  {
    title: "Family Dentistry",
    description:
      "Comprehensive dental care for the whole family, delivered in a comfortable and welcoming environment.",
  },
  {
    title: "Root Canal Treatment",
    description:
      "Advanced root canal treatment to relieve pain, treat infected teeth, and help preserve your natural smile.",
  },
  {
    title: "Tooth Extraction",
    description:
      "Safe and professional tooth extraction when a tooth cannot be restored or needs to be removed for your oral health.",
  },
  {
    title: "Crowns & Bridges",
    description:
      "Restore damaged or missing teeth with carefully designed crowns and bridges that improve both function and appearance.",
  },
  {
    title: "Orthodontics",
    description:
      "Improve tooth alignment and your bite with modern orthodontic treatment designed around your individual needs.",
  },
  {
    title: "Invisalign",
    description:
      "Straighten your teeth with virtually invisible, removable clear aligners without the wires and brackets of traditional braces.",
  },
  {
    title: "Teeth Whitening",
    description:
      "Brighten your smile with professional teeth whitening designed to safely improve the appearance of discoloured teeth.",
  },
  {
    title: "Laser Gum Correction",
    description:
      "Modern laser-based gum treatment designed to address gum concerns with a contemporary and conservative approach.",
  },
  {
    title: "Full Mouth Rehabilitation",
    description:
      "Comprehensive treatment combining multiple dental procedures to restore the health, function, and appearance of your smile.",
  },
];

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
            {/* Label */}
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
              Dental Services
            </div>

            {/* Heading */}
            <h1
              className="
                mt-6
                text-[var(--color4)]
                text-4xl
                font-medium
                leading-[1.05]
                tracking-tight
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                xl:text-8xl
              "
            >
              Comprehensive Dental Care
              <br className="hidden sm:block" />
              <span className="text-[var(--color2)]"> for Every Smile</span>
            </h1>

            {/* Description */}
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
              We offer comprehensive dental care tailored to every stage of
              life. Whether you need preventive care, cosmetic treatments, or
              restorative procedures, our experienced team is here to help you
              achieve a healthy, confident smile.
            </p>
          </div>

          {/* SERVICES GRID */}
          <div
            className="
              mt-12
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:mt-16
              lg:grid-cols-3
              lg:gap-6
            "
          >
            {services.map((service, index) => (
              <div
                key={service.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[var(--color3)]/15
                  bg-[var(--color5)]
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                  sm:p-7
                  lg:p-8
                "
              >
                {/* Number */}
                <span
                  className="
                    text-sm
                    font-medium
                    text-[var(--color2)]
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Title */}
                <h2
                  className="
                    mt-6
                    text-xl
                    font-medium
                    leading-tight
                    text-[var(--color4)]
                    sm:text-2xl
                    lg:text-3xl
                  "
                >
                  {service.title}
                </h2>

                {/* Description */}
                <p
                  className="
                    mt-4
                    text-sm
                    font-light
                    leading-[1.5]
                    text-[var(--color4)]/70
                    sm:text-base
                  "
                >
                  {service.description}
                </p>

                {/* Learn More */}
                <div className="mt-7 flex items-center justify-between">
                  <span
                    className="
                      text-sm
                      font-medium
                      text-[var(--color2)]
                    "
                  >
                    Learn more
                  </span>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-[var(--color2)]
                      transition-all
                      duration-300
                      group-hover:bg-[var(--color4)]
                    "
                  >
                    <span
                      className="
                        text-lg
                        text-[var(--color1)]
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    >
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM CTA */}
          <div
            className="
              mt-12
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

            <a
              href="/contact"
              className="
                shrink-0
                rounded-full
                bg-[var(--color2)]
                px-6
                py-3
                text-sm
                font-medium
                text-white
                transition-all
                duration-300
                hover:bg-white
                hover:text-[var(--color4)]
                sm:text-base
              "
            >
              Book An Appointment
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
