import Navbar from "@/components/navbar";

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="min-h-screen pt-32 ">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-5xl font-bold text-[var(--color1)]">
            Patient Testimonials
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-600">
            Nothing makes us happier than seeing our patients smile with
            confidence. Here&apos;s what some of them have to say.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
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
                className="rounded-2xl border border-gray-200 p-8 shadow-sm"
              >
                <div className="text-5xl text-[var(--color2)]">&quot;</div>

                <p className="mt-4 text-gray-600 leading-8">
                  {testimonial.review}
                </p>

                <h3 className="mt-6 text-xl font-semibold">
                  {testimonial.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
