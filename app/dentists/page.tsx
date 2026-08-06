import Navbar from "@/components/navbar";

export default function DentistsPage() {
  return (
    <div className="min-h-screen ">
      <Navbar />

      <main className="min-h-screen pt-32 ">
        <div className="max-w-[90vw] mx-auto px-6 py-12">
          <h1 className="text-5xl font-bold text-[var(--color1)]">
            Meet Our Dentists
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-600">
            Our experienced dental professionals are committed to providing
            exceptional care with compassion, expertise, and the latest dental
            technology.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-15 mt-16">
          {[1, 2, 3, 4].map((dentist) => (
            <div
              key={dentist}
              className="rounded-2xl overflow-hidden shadow-lg border border-gray-200"
            >
              <div className="h-72 bg-gray-200"></div>

              <div className="p-6">
                <h2 className="text-2xl font-semibold">
                  Dr. Jane Doe
                </h2>

                <p className="text-[var(--color2)] mt-2">
                  General & Cosmetic Dentist
                </p>

                <p className="mt-4 text-gray-600">
                  Passionate about creating healthy smiles through personalized
                  treatment plans and modern dental techniques.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  </div>
);
}