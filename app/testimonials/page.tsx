import Navbar from "@/components/navbar";
import "../globals.css";

export default function TestimonialsPage() {
  return (
    <div
      data-nav-theme="light"
      className="min-h-screen bg-white text-[var(--color4)]"
    >
      <Navbar />

      <main className="min-h-screen pt-32">
        <div className="mx-auto max-w-7xl px-6 py-12">
          {/* Heading */}
          <div className="max-w-3xl">
            <div
              className="
                inline-flex items-center
                rounded-full
                bg-[var(--color5)]
                px-4 py-2
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
              confidence. Here&apos;s what some of them have to say.
            </p>
          </div>

          {/* Testimonials */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Sarah M.",
                review:
                  "The staff were incredibly welcoming, and the treatment was painless. I couldn't be happier with my smile.",
              },
              {
                name: "David K.",
                review:
                  "Professional service from start to finish. The clinic is modern, clean, and the dentists are amazing.",
              },
              {
                name: "Grace W.",
                review:
                  "I used to fear dental visits, but this team completely changed my experience. Highly recommended!",
              },
              {
                name: "Michael O.",
                review:
                  "Excellent customer service and outstanding dental care. I will definitely be coming back.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="
                  flex
                  min-h-[300px]
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
                  {testimonial.review}
                </p>

                {/* Patient */}
                <div className="mt-6 border-t border-[var(--color4)]/10 pt-4">
                  <h3 className="text-lg font-medium text-[var(--color4)]">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">Verified Patient</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
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

            <a
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
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
