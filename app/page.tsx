import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
      {/* 1. Full-Screen Hero Image Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <Image 
          src="/landingpage.jpg" 
          alt="Landing page hero image" 
          fill
          className="object-cover object-center"
          priority
        />

        {/* Dark Tint Overlay */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none z-0" />

        {/* Navigation Bar Header */}
        <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 sm:px-12 py-6 max-w-[90vw] mx-auto">
          <a href="#" className="flex items-center cursor-pointer">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={120} 
              height={40} 
              className="h-10 w-auto"
            />
          </a>
          
          <div className="flex items-center space-x-20 md:space-x-42">
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-30 text-2xl font-light text-white">
              <a href="#" className="hover:text-zinc-300 transition-colors cursor-pointer">Home</a>
              <a href="#" className="hover:text-zinc-300 transition-colors cursor-pointer">About Us</a>
              <a href="#" className="hover:text-zinc-300 transition-colors cursor-pointer">Services</a>
              <a href="#" className="hover:text-zinc-300 transition-colors cursor-pointer">The Dentists</a>
              <a href="#" className="hover:text-zinc-300 transition-colors cursor-pointer">Testimonials</a>
            </nav>
            <button className="bg-white text-[#0399B0] text-lg sm:text-xl px-5 py-3 rounded-md font-medium hover:bg-[var(--color2)] hover:text-[var(--color1)] transition-colors cursor-pointer z-30">
              Contact Us
            </button>
          </div>
        </header>

        {/* Hero Title & Typography Overlay */}
        <div className="absolute top-1/3 left-0 right-0 z-10 flex flex-col justify-center px-6 sm:px-12 max-w-[90vw] mx-auto pointer-events-none">
          <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight drop-shadow-md">
            Dental Care For
          </h2>
          <h1 className="text-6xl sm:text-8xl lg:text-[180px]/[1] leading-tight font-semibold text-white/90 text-left tracking-tight">
            Your <br /> New Smile
          </h1>
        </div>
      </section>

      {/* 2. Main Content Section (Below the fold) */}
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-16 px-6 sm:px-16 bg-white dark:bg-black sm:items-start self-center">
        <section className="mb-12">
          <h2 className="text-2xl font-bold">Additional Information</h2>
          <p className="mt-2 text-lg">Here you can find more details about our services.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p className="mt-2 text-lg">If you have any questions, feel free to reach out!</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold">About Us</h2>
          <p className="mt-2 text-lg">Learn more about our mission and values.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold">Our Team</h2>
          <p className="mt-2 text-lg">Meet the dedicated professionals behind our services.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold">Our Services</h2>
          <p className="mt-2 text-lg">Explore the range of services we offer to our clients.</p>
        </section>
      </main>
    </div>
  );
}