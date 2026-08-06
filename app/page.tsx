"use client";

import Image from "next/image";
import { useState } from "react";
import "./globals.css";
import Navbar from "@/components/navbar";

export default function Home() {

  return (
    <div className="flex flex-col text-[var(--color2)] min-h-screen h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth font-sans bg-white">
      {/* 1. Full-Screen Hero Image Section */}
      <section className="relative w-full h-screen snap-start snap-always shrink-0 overflow-hidden">
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
        <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between py-6 mx-auto">
          <Navbar />
        </header>

        {/* Hero Title & Typography Overlay */}
        <div className="absolute sm:top-1/5 top-1/6 left-0 right-0 max-w-[90vw] mx-auto text-white">
          <h2 className="text-2xl sm:text-4xl md:text-3xl font-normal tracking-tight">
            Dental Care For
          </h2>

          <h1 className="sm:text-[150px]/[1] text-[65px]/[1] font-semibold text-white/90 tracking-tight">
            Your <br /> New Smile
          </h1>

          <p className="mt-2 max-w-180 sm:max-w-160 text-md sm:text-xl lg:text-xl font-light leading-relaxed text-white">
            From preventive checkups and cosmetic dentistry to emergency care,
            we provide professional treatment in a welcoming environment where
            your comfort comes first.
          </p>
          <div className="mt-4 flex flex-wrap sm:max-w-175 max-w-240 gap-3 justify-between">
            <button className="flex items-center rounded-full gap-4 bg-white text-[#0399B0] text-sm sm:text-xl px-3 py-3 font-medium hover:bg-[var(--color2)] hover:text-[var(--color1)] transition-colors cursor-pointer z-30">
              <span>Book An Appointment</span>
              <Image
                src="/arrow_forward.svg"
                alt="arrow"
                width={40}
                height={40}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 p-1 rounded-full bg-[var(--color2)]"
              />
            </button>

            <button className="flex items-center rounded-full gap-4 bg-[var(--color2)] text-[var(--color1)] text-sm sm:text-xl px-3 py-3 font-medium hover:bg-[var(--color1)] hover:text-[var(--color2)] transition-colors cursor-pointer z-30">
              <span>Explore Services</span>
              <Image
                src="/arrow_forward.svg"
                alt="arrow"
                width={40}
                height={40}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 p-1 rounded-full bg-[var(--color2)] text-[var(--color2)]"
              />
            </button>
          </div>
          <div className="flex mt-6 justify-between gap-2">
            <div className="border border-[var(--color2)] sm:w-70 w-60 rounded-2xl bg-white/20 dark:bg-black/30 backdrop-blur-xl border-white/30 dark:border-white/10 shadow-xl p-5 text-neutral-800 dark:text-neutral-100">
              <h1 className="sm:text-3xl text-2xl">
                Working <br /> Hours
              </h1>
              <div className="flex items-center gap-4 mt-2">
                <Image src="/clock.svg" alt="clock" width={45} height={45} />
                <div className="text-sm sm:text-sm flex flex-col">
                  <p>MON - SAT</p>
                  <p>9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
            <div className="border border-[var(--color2)] sm:w-70 w-60 rounded-2xl bg-white/20 dark:bg-black/30 backdrop-blur-xl border-white/30 dark:border-white/10 shadow-xl p-5 text-neutral-800 dark:text-neutral-100">
              <h1 className="sm:text-3xl text-2xl">
                Visit Our <br /> Clinic
              </h1>
              <div className="flex items-center gap-2 mt-2">
                <Image
                  src="/location.svg"
                  alt="location"
                  width={65}
                  height={65}
                />
                <div>
                  <p className="text-sm sm:text-sm">
                    The Place, General Mathenge Drive, Nairobi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Section */}
      <section className="h-screen w-full snap-start snap-always shrink-0 max-w-[90vw] gap-5 
      items-center mx-auto flex flex-col justify-center">
        <div className="flex gap-10 justify-between">
          <div className="flex flex-col max-w-[40vw] gap-4 justify-between">
            <div>
              <h2 className="text-[var(--color4)] text-3xl font-bold">
                About Us
              </h2>
              <p className="text-[var(--color4)] mt-2 font-light text-[22px]/[1.3]">
                We combine Innovative solutions with a Human approach to make
                every patient feel confident and calm. We combine innovative
                dental solutions with a human-centered approach to make every
                patient feel confident, comfortable, and cared for. Our team is
                committed to delivering exceptional dental care through advanced
                technology, personalized treatment plans, and a welcoming
                environment designed around your needs. Whether you&apos;re
                visiting for preventive care or a complete smile transformation,
                your oral health is our priority.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-[var(--color3)] rounded-xl p-5">
                <h1 className="text-[var(--color4)] text-8xl">250+</h1>
                <p className="text-gray-500 text-[28px]/[1] font-light">
                  Perfomed <br /> Surgeries
                </p>
              </div>
              <div className="bg-[var(--color3)] rounded-xl p-5">
                <h1 className="text-[var(--color4)] text-8xl">241</h1>
                <p className="text-gray-500 text-[28px]/[1] font-light">
                  Satisfied <br /> Patients
                </p>
              </div>
              <div className="bg-[var(--color3)] rounded-xl p-5">
                <h1 className="text-[var(--color4)] text-8xl">241</h1>
                <p className="text-gray-500 text-[28px]/[1] font-light">
                  Staff <br /> Members
                </p>
              </div>
              <div className="bg-[var(--color3)] rounded-xl p-5">
                <h1 className="text-[var(--color4)] text-8xl">241</h1>
                <p className="text-gray-500 text-[28px]/[1] font-light">
                  Yearly <br /> Surgeries
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image src="/aboutus.png" width={850} height={850} alt="About Us" />
          </div>
        </div>
        <button className="flex items-center rounded-full gap-4 bg-[var(--color2)] text-[var(--color1)] 
        text-sm sm:text-xl px-1 pl-2 py-1 font-medium hover:bg-[var(--color4)] hover:text-[var(--color2)] 
        transition-colors cursor-pointer z-30">
          <span>More about us</span>
          <Image
            src="/arrow_forward.svg"
            alt="arrow"
            width={40}
            height={40}
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 p-1 rounded-full bg-[var(--color2)]"
          />
        </button>
      </section>

      {/* 3. Services Section */}
      <section className="h-screen w-full snap-start snap-always shrink-0 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold">Services</h2>
        <p className="mt-2 text-lg">Explore our dental care services.</p>
      </section>

      {/* 4. Doctors Section */}
      <section className="h-screen w-full snap-start snap-always shrink-0 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold">Our Doctors</h2>
        <p className="mt-2 text-lg">Learn more about our specialists.</p>
      </section>

      {/* 5. Testimonials Section */}
      <section className="h-screen w-full snap-start snap-always shrink-0 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold">Testimonials</h2>
        <p className="mt-2 text-lg">
          Meet the dedicated professionals behind our services.
        </p>
      </section>

      {/* 6. Contact Us Section */}
      <section className="h-screen w-full snap-start snap-always shrink-0 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <p className="mt-2 text-lg">
          If you have any questions, feel free to reach out!
        </p>
      </section>

      {/* Footer Section (snaps to bottom of page) */}
      <footer className="w-full snap-end shrink-0 bg-[var(--color2)] text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} Dentists At The Place. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
