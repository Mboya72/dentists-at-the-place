"use client";

import Image from "next/image";
import { useState } from "react";
import "./globals.css";

export default function Home() {
  const [active, setActive] = useState("home");
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
      {/* 1. Full-Screen Hero Image Section */}
      <section className="relative w-[100vw] h-[100dvh] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/landingpage.jpg"
          alt="Landing page hero image"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Dark Tint Overlay */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none z-0" />

        {/* Navigation Bar Header */}
        <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between  py-6 max-h-82 max-w-[90vw] mx-auto">
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

          <div className="flex items-center space-x-10 md:space-x-20">
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-[4vw] text-md font-light text-white">
              <a
                href="#home"
                onClick={() => setActive("home")}
                className={`pb-1 transition-colors hover:text-[var(--color2)] ${
                  active === "home"
                    ? "text-[var(--color2)] font-medium border-b-4 border-[var(--color2)] rounded-sm"
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
                    ? "text-[var(--color2)] font-medium border-b-4 border-[var(--color2)] rounded-sm"
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
                    ? "text-[var(--color2)] font-medium border-b-4 border-[var(--color2)] rounded-sm"
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
                    ? "text-[var(--color2)] font-medium border-b-4 border-[var(--color2)] rounded-sm"
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
                    ? "text-[var(--color2)] font-medium border-b-4 border-[var(--color2)] rounded-sm"
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
        <div className="absolute top-1/5 left-0 right-0 max-w-[90vw] mx-auto text-white">
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight ">
            Dental Care For
          </h2>

          <h1 className="text-6xl sm:text-7xl lg:text-[160px]/[1] font-semibold text-white/90 tracking-tight">
            Your <br /> New Smile
          </h1>

          <p className="mt-2 max-w-180 text-lg sm:text-lg lg:text-xl font-light leading-relaxed text-white">
            From preventive checkups and cosmetic dentistry to emergency care,
            we provide professional treatment in a welcoming environment where
            your comfort comes first.
          </p>
          <div className="mt-4 flex flex-wrap max-w-175 justify-between">
            <button className="flex items-center rounded-full gap-4 bg-white text-[#0399B0] text-lg sm:text-xl px-3 py-3 font-medium hover:bg-[var(--color2)] hover:text-[var(--color1)] transition-colors cursor-pointer z-30">
              <span>Book An Appointment</span>
              <Image
                src="/arrow_forward.svg"
                alt="arrow"
                width={40}
                height={40}
                className="p-1 rounded-full bg-[var(--color2)]"
              />
            </button>

            <button className="flex items-center rounded-full gap-4 bg-[var(--color2)] text-[var(--color1)] text-lg sm:text-xl px-3 py-3 font-medium hover:bg-[var(--color1)] hover:text-[var(--color2)] transition-colors cursor-pointer z-30">
              <span>Explore Services</span>
              <Image
                src="/arrow_forward.svg"
                alt="arrow"
                width={40}
                height={40}
                className="p-1 rounded-full bg-[var(--color2)] text-[var(--color2)]"
              />
            </button>
          </div>
          <div className="flex mt-6 justify-between">
            <div className="border border-[var(--color2)] w-70 rounded-2xl bg-white/20 dark:bg-black/30 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-xl rounded-2xl p-5 text-neutral-800 dark:text-neutral-100">
              <h1 className="text-3xl">
                Working <br /> Hours
              </h1>
              <div className="flex items-center gap-4 mt-2">
                <Image src="/clock.svg" alt="clock" width={40} height={40} />
                <div>
                  <p>MON - SAT</p>
                  <p>9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
            <div className="border border-[var(--color2)] rounded-2xl w-70 bg-white/20 dark:bg-black/30 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-xl rounded-2xl p-5 text-neutral-800 dark:text-neutral-100">
              <h1 className="text-3xl">
                Visit Our <br /> Clinic
              </h1>
              <div className="flex items-center gap-4 mt-2">
                <Image src="/location.svg" alt="location" width={40} height={40} />
                <div>
                  <p>The Place, General Mathenge Drive, Nairobi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content Section (Below the fold) */}

      <section className="h-[100vh] w-[85vw] items-center justify-between mx-auto flex">
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
        <p className="mt-2 text-lg">Learn more about our mission and values.</p>
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
    </div>
  );
}
