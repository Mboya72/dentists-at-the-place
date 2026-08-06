import Navbar from "@/components/navbar";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
          <Navbar />
    <main className="min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-[var(--color1)]">
          Our Services
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-gray-600">
          We offer comprehensive dental care tailored to every stage of life.
          Whether you need preventive care, cosmetic treatments, or restorative
          procedures, our experienced team is here to help you achieve a healthy,
          confident smile.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {[
            "General Dentistry",
            "Teeth Whitening",
            "Dental Implants",
            "Orthodontics",
            "Children's Dentistry",
            "Emergency Dental Care",
          ].map((service) => (
            <div
              key={service}
              className="rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold">{service}</h2>
              <p className="mt-4 text-gray-600">
                Professional, patient-centered treatment using modern dental
                technology and personalized care.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
    </div>
  );
}