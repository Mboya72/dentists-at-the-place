"use client";

import Image from "next/image";
import { useState } from "react";
import "./globals.css";
import Navbar from "@/components/navbar";
import Link from "next/link";

const services = [
  {
    title: "General Dentistry",
    description:
      "Routine checkups, professional cleanings, fillings, and preventive care to keep your smile healthy.",
    image: "/general-dentistry.jpg",
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Teeth whitening, veneers, and smile enhancements that boost your confidence.",
    image: "/cosmetic-dentistry.jpg",
  },
  {
    title: "Dental Implants",
    description:
      "Replace missing teeth with durable, natural-looking implant solutions.",
    image: "/dental-implants.jpg",
  },
  {
    title: "Orthodontics",
    description:
      "Straighten your teeth with braces or clear aligners for a healthier bite.",
    image: "/orthodontics.jpg",
  },
  {
    title: "Paediatric Dentistry",
    description:
      "Gentle, compassionate dental care tailored to children of all ages.",
    image: "/paediatric-dentistry.jpg",
  },
  {
    title: "Emergencies",
    description:
      "Prompt treatment for toothaches, broken teeth, infections, and other urgent dental issues.",
    image: "/emergency-dentistry.jpg",
  },
];

export default function Home() {
  return (
    <div className="overflow-y-scroll flex flex-col min-h-screen h-screen text-[var(--color2)] font-sans bg-white snap-y snap-mandatory scroll-smooth">
      {/* 1. Full-Screen Hero Image Section */}
      <section className="overflow-hidden relative w-full h-screen snap-start snap-always shrink-0">
        {/* Background Image */}
        <Image
          src="/landingpage.jpg"
          alt="Landing page hero image"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark Tint Overlay */}
        <div className="z-0 absolute inset-0 bg-black/15 pointer-events-none" />

        {/* Navigation Bar Header */}
        <header className="z-50 absolute top-0 left-0 right-0 flex items-center justify-between py-6 mx-auto">
          <Navbar />
        </header>

        {/* Hero Title & Typography Overlay */}
        <div className="absolute top-1/6 left-0 right-0 mx-auto max-w-[90vw] text-white sm:top-1/5">
          <h2 className="text-2xl font-normal tracking-tight sm:text-4xl md:text-3xl">
            Dental Care For
          </h2>

          <h1 className="text-[65px]/[1] font-semibold text-white/90 tracking-tight sm:text-[150px]/[1]">
            Your <br /> New Smile
          </h1>

          <p className="mt-2 max-w-180 text-md font-light leading-relaxed text-white text-xl sm:max-w-160 lg:text-xl">
            From preventive checkups and cosmetic dentistry to emergency care,
            we provide professional treatment in a welcoming environment where
            your comfort comes first.
          </p>
          <div className="flex flex-wrap justify-between gap-3 mt-5 max-w-240 sm:max-w-175">
            <button className="z-30 flex items-center gap-4 px-3 py-3 text-[#0399B0] text-sm font-medium bg-white rounded-full transition-colors cursor-pointer hover:bg-[var(--color2)] hover:text-[var(--color1)] sm:text-xl">
              <span>Book An Appointment</span>
              <Image
                src="/arrow_forward.svg"
                alt="arrow"
                width={40}
                height={40}
                className="p-1 w-6 h-6 h-8 h-10 bg-[var(--color2)] rounded-full sm:w-8 md:w-10"
              />
            </button>

            <button className="z-30 flex items-center gap-4 px-3 py-3 text-[var(--color1)] text-sm font-medium bg-[var(--color2)] rounded-full transition-colors cursor-pointer hover:bg-[var(--color1)] hover:text-[var(--color2)] sm:text-xl">
              <span>Explore Services</span>
              <Image
                src="/arrow_forward.svg"
                alt="arrow"
                width={40}
                height={40}
                className="p-1 w-6 h-6 h-8 h-10 text-[var(--color2)] bg-[var(--color2)] rounded-full sm:w-8 md:w-10"
              />
            </button>
          </div>
          <div className="flex justify-between gap-2 mt-9">
            <div className="p-5 w-60 text-neutral-800 bg-white/20 border-[var(--color2)] rounded-2xl border-white/30 shadow-xl border dark:bg-black/30 backdrop-blur-xl dark:border-white/10 dark:text-neutral-100 sm:w-70">
              <h1 className="text-2xl sm:text-3xl">
                Working <br /> Hours
              </h1>
              <div className="flex items-center gap-4 mt-2">
                <Image src="/clock.svg" alt="clock" width={45} height={45} />
                <div className="flex flex-col text-sm sm:text-sm">
                  <p>MON - SAT</p>
                  <p>9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
            <div className="p-5 w-60 text-neutral-800 bg-white/20 border-[var(--color2)] rounded-2xl border-white/30 shadow-xl border dark:bg-black/30 backdrop-blur-xl dark:border-white/10 dark:text-neutral-100 sm:w-70">
              <h1 className="text-2xl sm:text-3xl">
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
      <section className="overflow-hidden flex flex-col justify-center items-center mx-auto py-6 h-dvh w-full max-w-[90vw] snap-start snap-always shrink-0 lg:py-8">
        {/* WHO WE ARE */}
        <div className="mb-5 text-center shrink-0 lg:mb-7">
          <div className="inline-flex items-center px-4 py-1 text-sm font-medium text-[var(--color4)] bg-gray-100 rounded-full sm:text-base">
            <span className="mr-1">•</span>
            Who We Are
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex flex-col flex-1 items-center justify-center gap-6 gap-10 w-full min-h-0 lg:flex-row">
          {/* TEXT + STATS */}
          <div className="flex flex-col justify-between gap-6 w-full h-full lg:w-[55%]">
            <h2 className="text-[var(--color4)] font-medium leading-none text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              About Us{" "}
            </h2>
            {/* PARAGRAPH */}
            <p className="max-w-[55vw] text-[var(--color4)] font-light text-base sm:text-lg md:text-xl lg:text-[26px]/[1.3] xl:text-[28px]/[1.3]">
              <span className="font-semibold text-[var(--color2)]">
                We combine innovative
              </span>{" "}
              dental solutions with a human-centered approach to make every
              patient feel{" "}
              <span className="font-semibold text-[var(--color2)]">
                confident, comfortable, and cared for.
              </span>{" "}
              Our team is committed to delivering exceptional dental care
              through advanced technology, personalized treatment plans, and a
              welcoming environment designed around your needs. Whether
              you&apos;re visiting for preventive care or a complete smile
              transformation,{" "}
              <span className="font-semibold text-[var(--color2)]">
                your oral health is our priority.
              </span>
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-3 mt-2 sm:gap-4 lg:gap-5">
              {/* 250+ */}
              <div className="p-4 bg-[var(--color5)] rounded-xl sm:p-5 lg:p-5">
                <h1 className="text-[var(--color4)] text-5xl leading-none sm:text-6xl md:text-7xl lg:text-8xl">
                  250+
                </h1>

                <p className="mt-2 text-gray-500 text-sm leading-none font-light sm:text-base md:text-lg lg:text-2xl">
                  Performed <br /> Surgeries
                </p>
              </div>

              {/* Patients */}
              <div className="p-4 bg-[var(--color3)] rounded-xl sm:p-5 lg:p-5">
                <h1 className="text-[var(--color1)] text-5xl leading-none sm:text-6xl md:text-7xl lg:text-8xl">
                  241
                </h1>

                <p className="mt-2 text-white text-sm leading-none font-light sm:text-base md:text-lg lg:text-2xl">
                  Satisfied <br /> Patients
                </p>
              </div>

              {/* Staff */}
              <div className="p-4 bg-[var(--color3)] rounded-xl sm:p-5 lg:p-5">
                <h1 className="text-[var(--color1)] text-5xl leading-none sm:text-6xl md:text-7xl lg:text-8xl">
                  241
                </h1>

                <p className="mt-2 text-white text-sm leading-none font-light sm:text-base md:text-lg lg:text-2xl">
                  Staff <br /> Members
                </p>
              </div>

              {/* Yearly */}
              <div className="p-4 bg-[var(--color5)] rounded-xl sm:p-5 lg:p-5">
                <h1 className="text-[var(--color4)] text-5xl leading-none sm:text-6xl md:text-7xl lg:text-8xl">
                  241
                </h1>

                <p className="mt-2 text-gray-500 text-sm leading-none font-light sm:text-base md:text-lg lg:text-2xl">
                  Yearly <br /> Surgeries
                </p>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center items-center w-full shrink-0 lg:w-[45%]">
            <Image
              src="/aboutus.png"
              width={1050}
              height={1050}
              alt="About Us"
              className="object-contain w-[70vw] max-w-[700px] h-auto max-w-[600px] max-w-[650px] sm:w-[60vw] md:w-[50vw] lg:w-[45vw] xl:max-w-[800px]"
            />
          </div>
        </div>

        {/* BUTTON */}
        <button className="z-30 flex items-center self-start gap-2 mt-4 px-1 pl-4 py-1 text-[var(--color1)] text-sm bg-[var(--color2)] rounded-full transition-colors cursor-pointer shrink-0 hover:bg-[var(--color4)] hover:text-[var(--color2)] sm:text-base lg:self-auto">
          <span>More about us</span>

          <Image
            src="/arrow_forward.svg"
            alt="arrow"
            width={40}
            height={40}
            className="p-1 w-7 h-7 h-8 bg-[var(--color2)] rounded-full sm:w-8"
          />
        </button>
      </section>

      {/* 3. Services Section */}
      <section
        className="
    h-screen w-full
    snap-start snap-always shrink-0
    flex flex-col items-center justify-center
    px-4
    sm:px-6
    lg:px-10
    py-6
    sm:py-8
    lg:py-10
    overflow-hidden
  "
      >
        {/* Heading */}
        <div className="mb-5 text-center sm:mb-6 lg:mb-7">
          {/* Label */}
          <div
            className="
        inline-flex items-center
        px-3 py-1
        mb-2
        text-xs
        sm:text-sm
        font-medium
        text-[var(--color4)]
        bg-gray-100
        rounded-full
        sm:px-4
      "
          >
            <span className="mr-1">•</span>
            Dental Services
          </div>

          {/* Main Heading */}
          <h2
            className="
        text-[var(--color4)]
        font-medium
        tracking-tight
        leading-[1.05]
        text-3xl
        sm:text-4xl
        md:text-5xl
        lg:text-6xl
        xl:text-7xl
      "
          >
            Comprehensive Dental Care
            <br />
            for <span className="text-[var(--color2)]">Every Smile</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div
          className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      gap-3
      sm:gap-4
      lg:gap-5
      w-full
      max-w-[1350px]
    "
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="
          group
          overflow-hidden
          w-full
          bg-[#ccecf1]
          rounded-xl
          transition-all
          duration-300
          hover:-translate-y-1
        "
            >
              {/* Image */}
              <div
                className="
            relative
            w-full
            h-[130px]
            sm:h-[145px]
            md:h-[155px]
            lg:h-[150px]
            xl:h-[175px]
            overflow-hidden
          "
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="
              (max-width: 640px) 100vw,
              (max-width: 1024px) 50vw,
              33vw
            "
                  className="
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
                />
              </div>

              {/* Card Content */}
              <div
                className="
            relative
            px-4
            py-3
            pr-16
            min-h-[105px]
            sm:min-h-[110px]
            lg:min-h-[115px]
          "
              >
                <h3
                  className="
              mb-1.5
              text-[var(--color4)]
              text-base
              font-medium
              leading-tight
              sm:text-lg
              lg:text-xl
            "
                >
                  {service.title}
                </h3>

                <p
                  className="
              max-w-[90%]
              text-[var(--color4)]
              text-xs
              leading-[1.25]
              font-light
              sm:text-sm
              lg:text-[15px]
            "
                >
                  {service.description}
                </p>

                {/* Arrow Button */}
                <Link
                  href={`/services/${service.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  aria-label={`Learn more about ${service.title}`}
                  className="
              absolute
              right-3
              bottom-3
              flex
              items-center
              justify-center
              w-10
              h-10
              sm:w-11
              sm:h-11
              lg:w-12
              lg:h-12
              bg-[var(--color4)]
              rounded-full
              transition-all
              duration-300
              hover:bg-[var(--color2)]
              hover:scale-105
            "
                >
                  <Image
                    src="/arrow_forward.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="
                w-5
                h-5
                sm:w-6
                sm:h-6
              "
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ALL SERVICES BUTTON */}
        <Link
          href="/services"
          className="
      group
      flex
      items-center
      gap-2
      mt-5
      sm:mt-6
      lg:mt-7
      px-2
      pl-4
      py-1.5
      rounded-full
      bg-[var(--color2)]
      text-[var(--color1)]
      text-sm
      sm:text-base
      font-medium
      transition-all
      duration-300
      hover:bg-[var(--color4)]
      hover:scale-[1.02]
      shrink-0
    "
        >
          <span>All Services</span>

          <span
            className="
        flex
        items-center
        justify-center
        w-8
        h-8
        sm:w-9
        sm:h-9
        rounded-full
        bg-[var(--color1)]
        transition-transform
        duration-300
        group-hover:translate-x-1
      "
          >
            <Image
              src="/arrow_forward.svg"
              alt=""
              width={22}
              height={22}
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          </span>
        </Link>
      </section>

      {/* 4. Doctors Section */}
      <section className="flex flex-col justify-center items-center px-5 py-10 py-12 min-h-screen w-full snap-start snap-always shrink-0 sm:px-8 lg:px-12">
        {/* SECTION LABEL */}
        <div className="inline-flex items-center px-4 py-1 mb-4 text-sm font-medium text-[var(--color4)] bg-gray-100 rounded-full sm:text-base">
          <span className="mr-1">•</span>
          Meet the Dentists
        </div>

        {/* MAIN HEADING */}
        <h2 className="max-w-4xl text-center text-[var(--color4)] font-medium leading-[1.05] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Meet the Doctors Who Keeps
          <br />
          Your <span className="text-[var(--color2)]">Smiles Healthy.</span>
        </h2>

        {/* DOCTORS */}
        <div className="grid grid-cols-1 gap-6 gap-7 mt-10 mt-12 w-full max-w-[1400px] sm:grid-cols-2 lg:grid-cols-4">
          {/* DOCTOR 1 */}
          <div className="w-full">
            {/* IMAGE */}
            <div className="overflow-hidden relative w-full rounded-[24px] aspect-[4/5]">
              <Image
                src="/doctor1.png"
                alt="Dr. Lawson B"
                fill
                className="object-cover"
              />
            </div>

            {/* INFO */}
            <div className="flex items-center justify-between mt-4">
              <div>
                <h3 className="text-[var(--color4)] text-xl leading-none font-medium sm:text-2xl lg:text-2xl">
                  Dr. Lawson.B
                </h3>

                <p className="mt-1 text-[var(--color4)] text-sm sm:text-base">
                  Dentist
                </p>
              </div>

              {/* ARROW */}
              <button className="flex items-center justify-center w-14 h-14 h-16 bg-[var(--color5)] rounded-full transition-colors cursor-pointer shrink-0 hover:bg-[var(--color2)] sm:w-16">
                <Image
                  src="/arrow_forward.svg"
                  alt="View doctor"
                  width={28}
                  height={28}
                  className="w-6 h-6"
                />
              </button>
            </div>
          </div>

          {/* DOCTOR 2 */}
          <div className="w-full">
            <div className="overflow-hidden relative w-full rounded-[24px] aspect-[4/5]">
              <Image
                src="/doctor2.png"
                alt="Dr. Miles P"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <div>
                <h3 className="text-[var(--color4)] text-xl leading-none font-medium sm:text-2xl lg:text-2xl">
                  Dr. Miles.P
                </h3>

                <p className="mt-1 text-[var(--color4)] text-sm sm:text-base">
                  Surgeon
                </p>
              </div>

              <button className="flex items-center justify-center w-14 h-14 h-16 bg-[var(--color5)] rounded-full transition-colors cursor-pointer shrink-0 hover:bg-[var(--color2)] sm:w-16">
                <Image
                  src="/arrow_forward.svg"
                  alt="View doctor"
                  width={28}
                  height={28}
                  className="w-6 h-6"
                />
              </button>
            </div>
          </div>

          {/* DOCTOR 3 */}
          <div className="w-full">
            <div className="overflow-hidden relative w-full rounded-[24px] aspect-[4/5]">
              <Image
                src="/doctor3.png"
                alt="Dr. Bruno G"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <div>
                <h3 className="text-[var(--color4)] text-xl leading-none font-medium sm:text-2xl lg:text-2xl">
                  Dr. Bruno.G
                </h3>

                <p className="mt-1 text-[var(--color4)] text-sm sm:text-base">
                  Neurologist
                </p>
              </div>

              <button className="flex items-center justify-center w-14 h-14 h-16 bg-[var(--color5)] rounded-full transition-colors cursor-pointer shrink-0 hover:bg-[var(--color2)] sm:w-16">
                <Image
                  src="/arrow_forward.svg"
                  alt="View doctor"
                  width={28}
                  height={28}
                  className="w-6 h-6"
                />
              </button>
            </div>
          </div>

          {/* DOCTOR 4 */}
          <div className="w-full">
            <div className="overflow-hidden relative w-full rounded-[24px] aspect-[4/5]">
              <Image
                src="/doctor4.png"
                alt="Dr. Carthy L"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <div>
                <h3 className="text-[var(--color4)] text-xl leading-none font-medium sm:text-2xl lg:text-2xl">
                  Dr. Carthy.L
                </h3>

                <p className="mt-1 text-[var(--color4)] text-sm sm:text-base">
                  Dentist
                </p>
              </div>

              <button className="flex items-center justify-center w-14 h-14 h-16 bg-[var(--color5)] rounded-full transition-colors cursor-pointer shrink-0 hover:bg-[var(--color2)] sm:w-16">
                <Image
                  src="/arrow_forward.svg"
                  alt="View doctor"
                  width={28}
                  height={28}
                  className="w-6 h-6"
                />
              </button>
            </div>
          </div>
        </div>

        {/* SEE ALL BUTTON */}
        <button className="flex items-center justify-center px-6 py-3 mt-8 text-[var(--color1)] text-base bg-[var(--color2)] rounded-full transition-colors cursor-pointer hover:bg-[var(--color4)] sm:text-lg lg:mt-10">
          See All Doctors
        </button>
      </section>

      {/* 5. Testimonials Section */}
      <section className="flex flex-col justify-center px-5 py-12 py-10 min-h-screen w-full snap-start snap-always shrink-0 sm:px-8 lg:px-[7vw]">
        {/* Section Label */}
        <div className="mb-8 text-center lg:mb-10">
          <div className="inline-flex items-center px-4 py-1 text-sm font-medium text-[var(--color4)] bg-gray-100 rounded-full sm:text-base">
            <span className="mr-1">•</span>
            What Our Patients Say
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 items-center gap-10 gap-16 mx-auto w-full max-w-[1400px] lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-[var(--color4)] font-medium leading-[1.05] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              What Our
              <br />
              Patients Says
            </h2>

            <p className="mt-6 max-w-lg text-[var(--color4)] text-base leading-[1.35] sm:text-lg lg:text-xl">
              Nothing means more to us than the trust and confidence of our
              patients. Every smile we care for is a reflection of our
              commitment to exceptional dentistry, compassionate service, and
              personalized treatment.
            </p>

            <p className="mt-3 max-w-lg text-[var(--color4)] text-base leading-[1.35] sm:text-lg lg:text-xl">
              Here&apos;s what our patients have to say about their experience
              with us.
            </p>

            <button className="mt-6 px-5 py-2.5 text-[var(--color1)] text-sm bg-[var(--color2)] rounded-md transition-colors cursor-pointer hover:bg-[var(--color4)] sm:text-base">
              View More
            </button>
          </div>

          {/* RIGHT TESTIMONIALS */}
          <div className="flex flex-col gap-4 lg:gap-5">
            {/* TESTIMONIAL 1 */}
            <div className="relative flex items-center gap-4 p-4 ml-0 p-5 bg-white border-[var(--color5)] rounded-lg shadow-sm border sm:gap-5 lg:ml-16">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-[var(--color5)] rounded-l-lg" />

              <div className="w-16 h-16 h-20 bg-[var(--color5)] rounded-full shrink-0 sm:w-20" />

              <div className="flex-1">
                <h3 className="text-[var(--color4)] text-lg font-medium sm:text-xl">
                  Sarah W.
                </h3>

                <p className="mt-1 text-[var(--color2)] text-xs leading-[1.3] sm:text-sm">
                  &quot;From the moment I walked in, I felt welcomed and cared
                  for. The staff were incredibly friendly, and the dentist
                  explained every step of my treatment. I couldn&apos;t be
                  happier with my smile.&quot;
                </p>
              </div>

              <span className="absolute right-4 top-2 text-4xl text-[var(--color2)] leading-none sm:text-5xl">
                ”
              </span>
            </div>

            {/* TESTIMONIAL 2 */}
            <div className="relative flex items-center gap-4 p-4 p-5 bg-white border-[var(--color2)] rounded-lg shadow-sm border sm:gap-5 lg:mr-24">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-[var(--color2)] rounded-l-lg" />

              <div className="w-16 h-16 h-20 bg-[var(--color2)] rounded-full shrink-0 sm:w-20" />

              <div className="flex-1">
                <h3 className="text-[var(--color4)] text-lg font-medium sm:text-xl">
                  David M.
                </h3>

                <p className="mt-1 text-[var(--color4)] text-xs leading-[1.3] sm:text-sm">
                  &quot;I used to be nervous about visiting the dentist, but the
                  team made the entire experience comfortable and stress-free.
                  Their professionalism and genuine care exceeded my
                  expectations.&quot;
                </p>
              </div>

              <span className="absolute right-4 top-2 text-4xl text-[var(--color2)] leading-none sm:text-5xl">
                ”
              </span>
            </div>

            {/* TESTIMONIAL 3 */}
            <div className="relative flex items-center gap-4 p-4 p-5 bg-white border-[var(--color5)] rounded-lg shadow-sm border sm:gap-5 lg:ml-16">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-[var(--color5)] rounded-l-lg" />

              <div className="w-16 h-16 h-20 bg-[var(--color5)] rounded-full shrink-0 sm:w-20" />

              <div className="flex-1">
                <h3 className="text-[var(--color4)] text-lg font-medium sm:text-xl">
                  Grace K.
                </h3>

                <p className="mt-1 text-[var(--color2)] text-xs leading-[1.3] sm:text-sm">
                  &quot;The clinic is clean, modern, and equipped with the
                  latest technology. My treatment was painless, and the results
                  were amazing. I highly recommend them to anyone looking for
                  quality dental care.&quot;
                </p>
              </div>

              <span className="absolute right-4 top-2 text-4xl text-[var(--color2)] leading-none sm:text-5xl">
                ”
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contact Us Section */}
      <section className="flex flex-col justify-center px-5 py-12 py-10 min-h-screen w-full snap-start snap-always shrink-0 sm:px-8 lg:px-[7vw]">
        {/* Section Label */}
        <div className="mb-8 text-center lg:mb-10">
          <div className="inline-flex items-center px-4 py-1 text-sm font-medium text-[var(--color4)] bg-gray-100 rounded-full sm:text-base">
            <span className="mr-1">•</span>
            Contact Us
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 items-center gap-10 gap-16 mx-auto w-full max-w-[1400px] lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <h2 className="text-[var(--color4)] font-medium leading-[1.05] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              Schedule Your Next
              <br />
              <span className="text-[var(--color2)]">Dental Appointment</span>
            </h2>

            {/* Calendar + Opening Hours */}
            <div className="flex flex-col items-center gap-6 mt-8 sm:flex-row">
              {/* Calendar Image */}
              <div className="shrink-0">
                <Image
                  src="/calendar.png"
                  width={300}
                  height={300}
                  alt="Dental appointment calendar"
                  className="object-contain w-44 h-auto sm:w-48 lg:w-56"
                />
              </div>

              {/* Hours */}
              <div className="w-full max-w-sm">
                <div className="flex justify-between py-3 text-sm border-b border-[var(--color5)] sm:text-base">
                  <span>Mon - Fri</span>
                  <span>9:00 - 20:00</span>
                </div>

                <div className="flex justify-between py-3 text-sm border-b border-[var(--color5)] sm:text-base">
                  <span>Sat - Sun</span>
                  <span>8:00 - 16:00</span>
                </div>

                <div className="flex justify-between py-3 text-sm sm:text-base">
                  <span>Emergency</span>
                  <span>24/7 Hours</span>
                </div>
              </div>
            </div>

            {/* CONTACT DETAILS */}
            <div className="grid grid-cols-1 gap-5 mt-8 sm:grid-cols-2">
              {/* Location */}
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 text-white bg-[var(--color2)] rounded-md">
                  <span className="text-xl">⌖</span>
                </div>

                <div>
                  <p className="text-xs text-[var(--color2)]">
                    Visit Our Clinic
                  </p>

                  <p className="text-sm font-medium text-[var(--color2)] sm:text-base">
                    The Place, General Mathenge Drive, Nairobi
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 text-white bg-[var(--color2)] rounded-md">
                  <span className="text-xl">☎</span>
                </div>

                <div>
                  <p className="text-xs text-[var(--color2)]">
                    Need Dental Services
                  </p>

                  <p className="text-sm font-medium text-[var(--color2)] sm:text-base">
                    +254 712 345 678
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — BOOKING FORM */}
          <div className="p-5 bg-[var(--color5)] rounded-xl sm:p-6 lg:p-7">
            <h3 className="mb-5 text-[var(--color4)] text-2xl font-medium sm:text-3xl lg:text-4xl">
              Dental Appointment Booking
            </h3>

            <form className="space-y-4">
              {/* Name + Email */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-3 w-full h-12 text-sm bg-white rounded-md border-[var(--color2)]/20 outline-none border focus:border-[var(--color2)]"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="px-3 w-full h-12 text-sm bg-white rounded-md border-[var(--color2)]/20 outline-none border focus:border-[var(--color2)]"
                />
              </div>

              {/* Phone + Department */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="px-3 w-full h-12 text-sm bg-white rounded-md border-[var(--color2)]/20 outline-none border focus:border-[var(--color2)]"
                />

                <select className="px-3 w-full h-12 text-sm bg-white rounded-md border-[var(--color2)]/20 outline-none border focus:border-[var(--color2)]">
                  <option>Select Department</option>
                  <option>General Dentistry</option>
                  <option>Cosmetic Dentistry</option>
                  <option>Dental Implants</option>
                  <option>Orthodontics</option>
                  <option>Paediatric Dentistry</option>
                </select>
              </div>

              {/* Doctor + Date */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <select className="px-3 w-full h-12 text-sm bg-white rounded-md border-[var(--color2)]/20 outline-none border focus:border-[var(--color2)]">
                  <option>Select Doctor</option>
                  <option>Dr. Lawson B</option>
                  <option>Dr. Miles P</option>
                  <option>Dr. Bruno G</option>
                  <option>Dr. Carthy L</option>
                </select>

                <input
                  type="date"
                  className="px-3 w-full h-12 text-sm bg-white rounded-md border-[var(--color2)]/20 outline-none border focus:border-[var(--color2)]"
                />
              </div>

              {/* Message */}
              <textarea
                placeholder="Type Your Message"
                rows={5}
                className="px-3 py-3 w-full text-sm bg-white rounded-md border-[var(--color2)]/20 outline-none border resize-none focus:border-[var(--color2)]"
              />

              {/* Submit */}
              <button
                type="submit"
                className="px-5 py-2.5 text-white text-sm bg-[var(--color2)] rounded-md transition-colors cursor-pointer hover:bg-[var(--color4)] sm:text-base"
              >
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-5 pt-12 pb-6 w-full text-white bg-[var(--color2)] snap-end shrink-0 sm:px-8 lg:px-[7vw]">
        <div className="mx-auto max-w-[1400px]">
          {/* TOP FOOTER */}
          <div className="grid grid-cols-1 gap-10 gap-16 sm:grid-cols-2 lg:grid-cols-4">
            {/* BRAND */}
            <div>
              <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
                Dentist @
                <br />
                The Place
              </h2>

              <p className="mt-3 text-base sm:text-lg">
                Dental Care For Your New Smile
              </p>

              <p className="mt-6 max-w-xs text-sm leading-[1.4] text-white/90">
                From preventive checkups and cosmetic dentistry to emergency
                care, we provide professional treatment in a welcoming
                environment where your comfort comes first.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="mb-4 text-lg font-medium">Quick Links</h3>

              <ul className="text-sm text-white/90 space-y-3">
                <li>
                  <Link href="/">· Home</Link>
                </li>
                <li>
                  <Link href="/aboutus">· About Us</Link>
                </li>
                <li>
                  <Link href="/services">· Services</Link>
                </li>
                <li>
                  <Link href="/dentists">· Our Doctors</Link>
                </li>
                <li>
                  <Link href="/contact">· Contact Us</Link>
                </li>
                <li>
                  <Link href="/testimonials">· Testimonials</Link>
                </li>
              </ul>
            </div>

            {/* SERVICES */}
            <div>
              <h3 className="mb-4 text-lg font-medium">Services</h3>

              <ul className="text-sm text-white/90 space-y-3">
                <li>· General Dentistry</li>
                <li>· Cosmetic Dentistry</li>
                <li>· Dental Implants</li>
                <li>· Orthodontics</li>
                <li>· Paediatric Dentistry</li>
              </ul>
            </div>

            {/* LEGAL + NEWSLETTER */}
            <div>
              <h3 className="mb-4 text-lg font-medium">Legal</h3>

              <ul className="text-sm text-white/90 space-y-3">
                <li>· Privacy Policy</li>
                <li>· Terms of Services</li>
                <li>· Cookies</li>
              </ul>

              <div className="mt-7">
                <h3 className="text-lg font-medium">Newsletter</h3>

                <p className="mt-2 text-sm text-white/90">
                  Join the Community and receive our monthly newsletter straight
                  to your inbox.
                </p>

                <div className="flex flex-col gap-2 mt-4 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="flex-1 px-3 h-11 text-[var(--color4)] text-sm bg-white rounded-md outline-none"
                  />

                  <button className="px-6 h-11 text-[var(--color2)] font-medium bg-white rounded-md transition-colors cursor-pointer hover:bg-gray-100">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT BAR */}
          <div className="grid grid-cols-1 gap-60 mt-12 pt-6 text-sm border-t border-white/20 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-white/70">Visit Our Clinic</p>

              <p className="font-medium">
                The Place, General Mathenge Drive, Nairobi
              </p>
            </div>

            <div>
              <p className="text-white/70">General Inquiries</p>

              <p className="font-medium">Info@example.com</p>
            </div>

            <div className="lg:text-right">
              <p>© {new Date().getFullYear()} Terms & Conditions</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
