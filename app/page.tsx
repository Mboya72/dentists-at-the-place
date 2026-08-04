"use client";

import Image from "next/image";
import { useState } from "react";
import "./globals.css";

export default function Home() {
  const [active, setActive] = useState("home");
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
        <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 sm:px-12 py-6 max-h-82 max-w-[90vw] mx-auto">
          <a href="#" className="flex items-center cursor-pointer">
            <Image
              src="/logo.svg"
              alt="Logo"
              style={{ color: "var(--color2)" }}
              width={60}
              height={60}
              className="h-10 w-auto fill-amber-400"
            />
          </a>

          <div className="flex items-center space-x-10 md:space-x-38">
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-30 text-2xl font-light text-white">
              <a
                href="#home"
                onClick={() => setActive("home")}
                className={`pb-1 transition-colors hover:text-[var(--color2)] ${
                  active === "home"
                    ? "text-[var(--color2)] font-medium border-b-4 border-[var(--color2)]"
                    : ""
                }`}
              >
                Home
              </a>

              <a
                href="#about"
                onClick={() => setActive("about")}
                className={`pb-1 transition-colors hover:text-[var(--color2)] ${
                  active === "about"
                    ? "text-[var(--color2)] font-medium border-b-4 border-[var(--color2)]"
                    : ""
                }`}
              >
                About Us
              </a>

              <a
                href="#services"
                onClick={() => setActive("services")}
                className={`pb-1 transition-colors hover:text-[var(--color2)] ${
                  active === "services"
                    ? "text-[var(--color2)] font-medium border-b-4 border-[var(--color2)]"
                    : ""
                }`}
              >
                Services
              </a>

              <a
                href="#dentists"
                onClick={() => setActive("dentists")}
                className={`pb-1 transition-colors hover:text-[var(--color2)] ${
                  active === "dentists"
                    ? "text-[var(--color2)] font-medium border-b-4 border-[var(--color2)]"
                    : ""
                }`}
              >
                The Dentists
              </a>

              <a
                href="#testimonials"
                onClick={() => setActive("testimonials")}
                className={`pb-1 transition-colors hover:text-[var(--color2)] ${
                  active === "testimonials"
                    ? "text-[var(--color2)] font-medium border-b-4 border-[var(--color2)]"
                    : ""
                }`}
              >
                Testimonials
              </a>
            </nav>
            <button className="bg-white text-[#0399B0] text-lg sm:text-xl px-5 py-3 rounded-md font-medium hover:bg-[var(--color2)] hover:text-[var(--color1)] transition-colors cursor-pointer z-30">
              Contact Us
            </button>
          </div>
        </header>

        {/* Hero Title & Typography Overlay */}
        <div className="absolute top-1/3 left-0 right-0 z-10 px-6 sm:px-12 max-w-[90vw] mx-auto text-white">
          <h2 className="text-3xl sm:text-5xl font-normal tracking-tight drop-shadow-md">
            Dental Care For
          </h2>

          <h1 className="mt-2 text-6xl sm:text-8xl lg:text-[180px]/[1] font-semibold text-white/90 tracking-tight">
            Your <br /> New Smile
          </h1>

          <p className="mt-8 max-w-3xl text-lg sm:text-xl lg:text-2xl font-light leading-relaxed text-white">
            From preventive checkups and cosmetic dentistry to emergency care,
            we provide professional treatment in a welcoming environment where
            your comfort comes first.
          </p>
          <div className="mt-8 flex flex-wrap max-w-3xl justify-between">
            <button className="flex items-center rounded-full gap-4 bg-white text-[#0399B0] text-lg sm:text-xl px-5 py-3 font-medium hover:bg-[var(--color2)] hover:text-[var(--color1)] transition-colors cursor-pointer z-30">
              <span>Book An Appointment</span>
              <Image
                src="/arrow_forward.svg"
                alt="arrow"
                width={44}
                height={44}
                className="p-2 rounded-full bg-[var(--color2)]"
              />
            </button>

            <button className="flex items-center rounded-full gap-4 bg-[var(--color2)] text-[var(--color1)] text-lg sm:text-xl px-5 py-3 font-medium hover:bg-[var(--color1)] hover:text-[var(--color2)] transition-colors cursor-pointer z-30">
              <span>Explore Services</span>
              <Image
                src="/arrow_forward.svg"
                alt="arrow"
                width={44}
                height={44}
                className="p-2 rounded-full bg-[var(--color1)] text-[var(--color2)]"
              />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Main Content Section (Below the fold) */}
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-16 px-6 sm:px-16 bg-white dark:bg-black sm:items-start self-center">
        <section className="mb-12">
          <h2 className="text-2xl font-bold">Additional Information</h2>
          <p className="mt-2 text-lg">
            Here you can find more details about our services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p className="mt-2 text-lg">
            If you have any questions, feel free to reach out!
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold">About Us</h2>
          <p className="mt-2 text-lg">
            Learn more about our mission and values.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold">Our Team</h2>
          <p className="mt-2 text-lg">
            Meet the dedicated professionals behind our services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold">Our Services</h2>
          <p className="mt-2 text-lg">
            Explore the range of services we offer to our clients.
          </p>
        </section>
      </main>
    </div>
  );
}
