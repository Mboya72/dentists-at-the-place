import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <section className="relative w-full h-screen overflow-hidden">
        <Image 
          src="/landingpage.jpg" 
          alt="Landing page hero image" 
          fill
          className="object-cover object-center"
          priority
        />

        <div className="absolute inset-0 bg-black/40 pointer-events-none z-0" />

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
          <nav className="hidden md:flex items-center space-x-8 text-lg font-semibold text-white">
            <a href="#" className="hover:text-zinc-300 transition-colors cursor-pointer">Home</a>
            <a href="#" className="hover:text-zinc-300 transition-colors cursor-pointer">About Us</a>
            <a href="#" className="hover:text-zinc-300 transition-colors cursor-pointer">Services</a>
            <a href="#" className="hover:text-zinc-300 transition-colors cursor-pointer">Contact</a>
          </nav>
          <button className="bg-blue-600 text-white px-5 py-2.5 rounded-md font-medium hover:bg-blue-700 transition-colors cursor-pointer z-30">
            Get Started
          </button>

        </header>
        <div className="absolute top-60 left-0 right-0 z-20 items-center justify-between px-6 sm:px-12 py-6 max-w-[90vw] mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight drop-shadow-md">
            Welcome to Our Website
          </h1>
          <p className="bottom-8 left-6 sm:left-12 text-base sm:text-lg text-white/90 font-medium drop-shadow-sm max-w-md text-left">
            Your tagline or description goes here.
          </p>
        </div>
        
      </section>
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