"use client";

import { useState } from "react";
import Image from "next/image";
import "./globals.css";
import Navbar from "@/components/navbar";
import Link from "next/link";

const doctors = [
  {
    name: "Dr. Chand Shah",
    specialty: "Dental Surgeon",
    image: null,
  },
  {
    name: "Dr. Kunal Shah",
    specialty: "Dental Surgeon & Implantologist",
    image: null,
  },
  {
    name: "Dr. Aisha Mohamed",
    specialty: "Dental Surgeon & Paediatric Dentist",
    image: null,
  },
];

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
    title: "Dental Hygiene & Gum Care",
    description:
      "Professional cleaning and gum care designed to maintain healthy teeth, prevent gum disease, and keep your smile fresh.",
    image: "/emergency-dentistry.jpg",
  },
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    dentist: "",
    date: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setSuccess(
        "Your appointment request has been sent successfully. We will get back to you shortly."
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        dentist: "",
        date: "",
        message: "",
      });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to send appointment request."
      );
    } finally {
      setLoading(false);
    }
  };

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const [newsletterMessage, setNewsletterMessage] = useState("");
  const [newsletterError, setNewsletterError] = useState("");

  const handleNewsletterSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setNewsletterLoading(true);
    setNewsletterMessage("");
    setNewsletterError("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: newsletterEmail,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setNewsletterMessage("You're subscribed!");
      setNewsletterEmail("");
    } catch (error) {
      setNewsletterError(
        error instanceof Error ? error.message : "Failed to subscribe."
      );
    } finally {
      setNewsletterLoading(false);
    }
  };
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
            We provide all aspects of general dentistry together with advanced
            procedures, delivered with a contemporary and conservative approach
            to oral health care.
          </p>

          <div className="flex flex-wrap justify-between gap-3 mt-5 max-w-240 sm:max-w-175">
            <Link href="#contact">
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
            </Link>

            <Link href="/services">
              <button className="z-30 flex items-center gap-4 px-3 py-3 text-[var(--color1)] text-sm font-medium bg-[var(--color2)] rounded-full transition-colors cursor-pointer hover:bg-[var(--color1)] hover:text-[var(--color2)] sm:text-xl">
                <span>Explore Services</span>

                <Image
                  src="/arrow_forward.svg"
                  alt="arrow"
                  width={40}
                  height={40}
                  className="p-1 w-6 h-6 h-8 h-10 bg-[var(--color2)] rounded-full sm:w-8 md:w-10"
                />
              </button>
            </Link>
          </div>

          <div className="flex justify-between gap-2 mt-9">
            <div className="p-5 w-60 text-neutral-800 bg-white/20 border-[var(--color2)] rounded-2xl border-white/30 shadow-xl border dark:bg-black/30 backdrop-blur-xl dark:border-white/10 dark:text-neutral-100 sm:w-70">
              <h1 className="text-2xl sm:text-3xl">
                Working <br /> Hours
              </h1>

              <div className="flex items-center gap-4 mt-2">
                <Image src="/clock.svg" alt="clock" width={45} height={45} />

                <div className="flex flex-col text-sm sm:text-sm">
                  <p>MON - FRI</p>
                  <p>8:30 AM - 5:30 PM</p>
                  <p>SAT: 8:30 AM - 1:00 PM</p>
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
                    The Place, General Mathenge Rd, next to Autoexpress and
                    Zucchini, Westlands, Nairobi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Section */}
      <section
        data-nav-theme="light"
        className="
    flex
    flex-col 
    items-center
    justify-center
    mx-auto
    w-full
    min-h-dvh
    max-w-[90vw]
    py-10
    snap-start
    snap-always
    shrink-0
    lg:py-12
  "
      >
        {/* WHO WE ARE */}
        <div className="mb-6 shrink-0 text-center lg:mb-8">
          <div
            className="
        inline-flex
        items-center
        rounded-full
        bg-[var(--color5)]
        px-4
        py-1.5
        text-sm
        font-medium
        text-[var(--color4)]
        sm:text-base
      "
          >
            <span className="mr-2 text-[var(--color2)]">•</span>
            Who We Are
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div
          className="
      flex
      w-full
      flex-col
      items-center
      justify-center
      gap-8
      lg:flex-row
      lg:gap-12
      xl:gap-16
    "
        >
          {/* TEXT CONTENT */}
          <div
            className="
        flex
        w-full
        flex-col
        lg:w-[55%]
      "
          >
            {/* Heading */}
            <h2
              className="
          text-[var(--color4)]
          text-2xl
          font-medium
          leading-[1.05]
          sm:text-3xl
          md:text-4xl
          lg:text-5xl
          xl:text-6xl
        "
            >
              Multidisciplinary Dental Care
              <br />
              <span className="text-[var(--color2)]">Designed Around You.</span>
            </h2>

            {/* Main Description */}
            <p
              className="
          mt-6
          max-w-3xl
          text-base
          font-light
          leading-[1.5]
          text-[var(--color4)]
          sm:text-lg
          md:text-xl
          lg:text-[24px]
          lg:leading-[1.35]
          xl:text-[27px]
        "
            >
              Dentists @ The Place is a{" "}
              <span className="font-semibold text-[var(--color2)]">
                multidisciplinary dental clinic
              </span>{" "}
              in the heart of Westlands, Nairobi, providing accessible,
              high-quality dental care in a welcoming and modern environment.
            </p>

            {/* Secondary Description */}
            <p
              className="
          mt-4
          max-w-3xl
          text-sm
          font-light
          leading-[1.6]
          text-[var(--color4)]/70
          sm:text-base
          lg:text-lg
        "
            >
              We provide all aspects of general dentistry together with advanced
              procedures, combining qualified dental professionals, innovative
              therapy, and a contemporary approach to oral health care.
            </p>

            {/* SERVICES / HIGHLIGHTS */}
            <div
              className="
          mt-7
          grid
          grid-cols-2
          gap-3
          sm:grid-cols-3
          sm:gap-4
          lg:mt-8
        "
            >
              {/* General Dentistry */}
              <div
                className="
            rounded-xl
            bg-[var(--color5)]
            p-4
            sm:p-5
          "
              >
                <span className="text-2xl text-[var(--color2)] sm:text-3xl">
                  01
                </span>

                <h3
                  className="
              mt-3
              text-sm
              font-medium
              text-[var(--color4)]
              sm:text-base
            "
                >
                  General Dentistry
                </h3>

                <p
                  className="
              mt-1
              text-xs
              font-light
              leading-[1.4]
              text-[var(--color4)]/60
              sm:text-sm
            "
                >
                  Everyday dental care for healthy smiles.
                </p>
              </div>

              {/* Advanced Procedures */}
              <div
                className="
            rounded-xl
            bg-[var(--color3)]
            p-4
            sm:p-5
          "
              >
                <span className="text-2xl text-white sm:text-3xl">02</span>

                <h3
                  className="
              mt-3
              text-sm
              font-medium
              text-white
              sm:text-base
            "
                >
                  Advanced Procedures
                </h3>

                <p
                  className="
              mt-1
              text-xs
              font-light
              leading-[1.4]
              text-white/70
              sm:text-sm
            "
                >
                  Modern solutions for complex dental needs.
                </p>
              </div>

              {/* Comprehensive Care */}
              <div
                className="
            col-span-2
            rounded-xl
            bg-[var(--color5)]
            p-4
            sm:col-span-1
            sm:p-5
          "
              >
                <span className="text-2xl text-[var(--color2)] sm:text-3xl">
                  03
                </span>

                <h3
                  className="
              mt-3
              text-sm
              font-medium
              text-[var(--color4)]
              sm:text-base
            "
                >
                  Comprehensive Care
                </h3>

                <p
                  className="
              mt-1
              text-xs
              font-light
              leading-[1.4]
              text-[var(--color4)]/60
              sm:text-sm
            "
                >
                  From prevention to complete smile rehabilitation.
                </p>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div
            className="
        flex
        w-full
        items-center
        justify-center
        lg:w-[45%]
      "
          >
            <Image
              src="/aboutus.png"
              width={1050}
              height={1050}
              alt="Dental care at Dentists @ The Place"
              className="
          h-auto
          w-[70vw]
          max-w-[520px]
          object-contain
          sm:w-[60vw]
          md:w-[50vw]
          lg:w-[42vw]
          xl:max-w-[650px]
        "
            />
          </div>
        </div>

        {/* BOTTOM CONTENT */}
        <div
          className="
      mt-7
      flex
      w-full
      flex-col
      items-start
      justify-between
      gap-5
      lg:mt-8
      lg:flex-row
      lg:items-center
    "
        >
          {/* Location */}
          <div className="flex items-start gap-3">
            <div
              className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[var(--color5)]
          text-[var(--color2)]
        "
            >
              •
            </div>

            <div>
              <p className="text-sm font-medium text-[var(--color4)]">
                Visit Us
              </p>

              <p className="mt-1 text-xs font-light text-[var(--color4)]/60 sm:text-sm">
                General Mathenge Rd, next to Autoexpress and Zucchini,
                Westlands, Nairobi.
              </p>
            </div>
          </div>

          {/* BUTTON */}
          <Link
  href="/aboutus"
  className="
    group
    flex
    shrink-0
    items-center
    gap-2
    rounded-full
    bg-[var(--color2)]
    py-1
    pl-5
    pr-1
    text-sm
    font-medium
    text-[var(--color1)]
    sm:text-base
  "
>
  <span>More About Us</span>

  <span
    className="
      flex
      h-8
      w-8
      items-center
      justify-center
      rounded-full
      bg-[var(--color1)]
      text-[var(--color2)]
      transition-transform
      duration-300
      ease-out
      group-hover:rotate-45
      sm:h-9
      sm:w-9
    "
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  </span>
</Link>
        </div>
      </section>

      {/* 3. Services Section */}
      <section
        className="
    min-h-screen w-full
    snap-start snap-always shrink-0
    flex flex-col items-center justify-center
    px-4
    sm:px-6
    md:px-8
    lg:px-10
    py-8
    sm:py-10
    md:py-12
    lg:py-10
    overflow-hidden
  "
      >
        {/* Heading */}
        <div className="mb-5 text-center sm:mb-6 md:mb-7 lg:mb-7">
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
      md:gap-5
      lg:gap-5
      w-full
      max-w-[1350px]
      min-h-0
    "
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="
          group
          overflow-hidden
          w-full
          min-w-0
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
            h-[120px]
            sm:h-[135px]
            md:h-[145px]
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
            pr-14
            min-h-[100px]
            sm:min-h-[105px]
            md:min-h-[110px]
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
              md:text-lg
              lg:text-xl
            "
                >
                  {service.title}
                </h3>

                <p
                  className="
              max-w-[92%]
              text-[var(--color4)]
              text-xs
              leading-[1.3]
              font-light
              sm:text-sm
              md:text-sm
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
    group/arrow
    absolute right-3 bottom-3
    flex items-center justify-center
    w-9 h-9
    sm:w-10 sm:h-10
    md:w-11 md:h-11
    lg:w-12 lg:h-12
    rounded-full
    bg-[var(--color4)]
    text-[var(--color1)]
    transition-all duration-300 ease-out
    hover:bg-[var(--color2)]
    hover:text-white
    hover:scale-105
  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
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
    flex items-center gap-2
    mt-5 sm:mt-6 md:mt-7 lg:mt-7
    pl-4 pr-2 py-1.5
    rounded-full
    bg-[var(--color2)]
    text-[var(--color1)]
    text-sm sm:text-base
    font-medium
    shrink-0
  "
>
  <span>All Services</span>

  <span
    className="
      flex items-center justify-center
      w-8 h-8
      sm:w-9 sm:h-9
      rounded-full
      bg-[var(--color1)]
      text-[var(--color2)]
      transition-transform
      duration-300
      ease-out
      group-hover:rotate-45
    "
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 sm:w-5 sm:h-5"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
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
          Meet the Doctors Who Keep
          <br />
          Your <span className="text-[var(--color2)]">Smiles Healthy.</span>
        </h2>

        {/* DOCTORS */}
        <div className="grid grid-cols-1 gap-6 mt-10 w-full max-w-[1200px] sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <div key={doctor.name} className="w-full">
              {/* IMAGE / PLACEHOLDER */}
              <div className="overflow-hidden relative flex items-center justify-center w-full bg-[var(--color5)] rounded-[24px] aspect-[4/5]">
                {doctor.image ? (
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center w-24 h-24 text-[var(--color2)] bg-white/70 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="w-14 h-14"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* INFO */}
              <div className="flex items-center justify-between mt-4">
                <div className="pr-3">
                  <h3 className="text-[var(--color4)] text-xl leading-none font-medium sm:text-2xl">
                    {doctor.name}
                  </h3>

                  <p className="mt-1 text-[var(--color4)] text-sm sm:text-base">
                    {doctor.specialty}
                  </p>
                </div>

                <Link
                  href="/dentists"
                  className="group flex items-center justify-center w-14 h-14 h-16 bg-[var(--color5)] rounded-full transition-colors duration-300 cursor-pointer shrink-0 hover:bg-[var(--color2)] sm:w-16"
                  aria-label={`View ${doctor.name}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-[var(--color4)] transition-colors duration-300 group-hover:text-white"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* SEE ALL BUTTON */}
        <Link
  href="/dentists"
  className="
    group
    flex
    items-center
    gap-2
    px-2
    pl-4
    py-1.5
    mt-8
    text-base
    font-medium
    text-[var(--color1)]
    bg-[var(--color2)]
    rounded-full
    sm:text-lg
    lg:mt-10
  "
>
  <span>All The Team</span>

  <span
    className="
      flex
      items-center
      justify-center
      w-8
      h-8
      text-[var(--color2)]
      bg-[var(--color1)]
      rounded-full
      transition-transform
      duration-300
      ease-out
      group-hover:rotate-45
      sm:w-9
      sm:h-9
    "
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  </span>
</Link>
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
      <section
        id="contact"
        className="flex flex-col justify-center px-5 py-12 py-10 min-h-screen w-full snap-start snap-always shrink-0 sm:px-8 lg:px-[7vw]"
      >
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
                  <span>8:30 AM - 5:30 PM</span>
                </div>

                <div className="flex justify-between py-3 text-sm border-b border-[var(--color5)] sm:text-base">
                  <span>Saturday</span>
                  <span>8:30 AM - 1:00 PM</span>
                </div>

                <div className="flex justify-between py-3 text-sm sm:text-base">
                  <span>Sunday</span>
                  <span>Closed</span>
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
                    The Place, General Mathenge Rd, next to Autoexpress and
                    Zucchini, Westlands, Nairobi.
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
                    0725 272727
                    <br />
                    0754 272727
                  </p>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 text-white bg-[var(--color2)] rounded-md">
                  <span className="text-xl">@</span>
                </div>

                <div>
                  <p className="text-xs text-[var(--color2)]">Email Us</p>

                  <p className="text-sm font-medium text-[var(--color2)] sm:text-base">
                    dentists@theplace.co.ke
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

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name + Email */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="px-3 w-full h-12 text-sm bg-white rounded-md border-[var(--color2)]/20 outline-none border focus:border-[var(--color2)]"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="px-3 w-full h-12 text-sm bg-white rounded-md border-[var(--color2)]/20 outline-none border focus:border-[var(--color2)]"
                />
              </div>

              {/* Phone + Department */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  required
                  className="px-3 w-full h-12 text-sm bg-white rounded-md border-[var(--color2)]/20 outline-none border focus:border-[var(--color2)]"
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="px-3 w-full h-12 text-sm bg-white rounded-md border-[var(--color2)]/20 outline-none border focus:border-[var(--color2)]"
                >
                  <option value="">Select Service</option>
                  <option>Dental Implants</option>
                  <option>Cavity Prevention</option>
                  <option>Dental Hygiene</option>
                  <option>Family Dentistry</option>
                  <option>Root Canal Treatment</option>
                  <option>Tooth Extraction</option>
                  <option>Crowns & Bridges</option>
                  <option>Orthodontics</option>
                  <option>Invisalign</option>
                </select>
              </div>

              {/* Doctor + Date */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <select
                  name="dentist"
                  value={formData.dentist}
                  onChange={handleChange}
                  required
                  className="px-3 w-full h-12 text-sm bg-white rounded-md border-[var(--color2)]/20 outline-none border focus:border-[var(--color2)]"
                >
                  <option value="">Select Dentist</option>
                  <option>Any</option>
                  <option>Dr. Chand Shah</option>
                  <option>Dr. Kunal Shah</option>
                  <option>Dr. Aisha Mohamed</option>
                </select>

                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="px-3 w-full h-12 text-sm bg-white rounded-md border-[var(--color2)]/20 outline-none border focus:border-[var(--color2)]"
                />
              </div>

              {/* Message */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type Your Message"
                rows={5}
                className="px-3 py-3 w-full text-sm bg-white rounded-md border-[var(--color2)]/20 outline-none border resize-none focus:border-[var(--color2)]"
              />

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="px-5 py-2.5 text-white text-sm bg-[var(--color2)] rounded-md transition-colors cursor-pointer hover:bg-[var(--color4)] sm:text-base disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Book Appointment"}
              </button>
              {success && (
                <p className="mt-3 text-sm font-medium text-green-600">
                  {success}
                </p>
              )}

              {error && (
                <p className="mt-3 text-sm font-medium text-red-600">{error}</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-5 pt-12 pb-6 w-full text-[var(--color4)] bg-[var(--color5)] snap-end shrink-0 sm:px-8 lg:px-[7vw]">
        <div className="mx-auto max-w-[1400px]">
          {/* TOP FOOTER */}
          <div className="grid grid-cols-1 gap-10 gap-16 sm:grid-cols-2 lg:grid-cols-4">
            {/* BRAND */}
            <div>
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Dentists @ The Place Logo"
                  width={60}
                  height={60}
                  className="h-10 w-auto"
                />
              </Link>

              <p className="mt-3 text-base sm:text-lg">
                Dental Care For Your New Smile
              </p>

              <p className="mt-6 max-w-xs text-sm leading-[1.4] text-[var(--color4)]/70">
                We provide all aspects of general dentistry together with
                advanced procedures in a welcoming and comfortable environment
                where your oral health comes first.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="mb-4 text-lg font-medium">Quick Links</h3>

              <ul className="text-sm text-[var(--color4)]/70 space-y-3">
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
                  <Link href="/#contact">· Contact Us</Link>
                </li>
                <li>
                  <Link href="/testimonials">· Testimonials</Link>
                </li>
              </ul>
            </div>

            {/* SERVICES */}
            <div>
              <h3 className="mb-4 text-lg font-medium">Services</h3>

              <ul className="text-sm text-[var(--color4)]/70 space-y-3">
                <li>· Dental Implants</li>
                <li>· Cavity Prevention</li>
                <li>· Dental Hygiene</li>
                <li>· Family Dentistry</li>
                <li>· Root Canal Treatment</li>
                <li>· Tooth Extraction</li>
                <li>· Crowns & Bridges</li>
                <li>· Orthodontics</li>
                <li>· Invisalign</li>
              </ul>
            </div>

            {/* LEGAL + NEWSLETTER */}
            <div>
              <h3 className="mb-4 text-lg font-medium">Legal</h3>

              <ul className="text-sm text-[var(--color4)]/70 space-y-3">
                <li>· Privacy Policy</li>
                <li>· Terms of Services</li>
                <li>· Cookies</li>
              </ul>

              <div className="mt-7">
                <h3 className="text-lg font-medium">Newsletter</h3>

                <p className="mt-2 text-sm text-[var(--color4)]/70">
                  Join the Community and receive our monthly newsletter straight
                  to your inbox.
                </p>

                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex flex-col gap-2 mt-4 sm:flex-row"
                >
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter Your Email Address"
                    required
                    className="flex-1 px-3 h-11 text-[var(--color4)] text-sm bg-white rounded-md outline-none"
                  />

                  <button
                    type="submit"
                    disabled={newsletterLoading}
                    className="px-6 h-11 text-[var(--color2)] font-medium bg-white rounded-md transition-colors cursor-pointer hover:bg-gray-100 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {newsletterLoading ? "Joining..." : "Join"}
                  </button>
                </form>

                {newsletterMessage && (
                  <p className="mt-2 text-sm font-medium text-green-600">
                    {newsletterMessage}
                  </p>
                )}

                {newsletterError && (
                  <p className="mt-2 text-sm font-medium text-red-600">
                    {newsletterError}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* CONTACT BAR */}
          <div className="grid grid-cols-1 gap-60 mt-12 pt-6 text-sm border-t border-[var(--color4)]/15 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-[var(--color4)]/50">Visit Our Clinic</p>

              <p className="font-medium">
                The Place, General Mathenge Rd, next to Autoexpress and
                Zucchini, Westlands, Nairobi.
              </p>
            </div>

            <div>
              <p className="text-[var(--color4)]/50">General Inquiries</p>

              <p className="font-medium">dentists@theplace.co.ke</p>
            </div>

            <div>
              <p className="text-[var(--color4)]/50">Call Us</p>

              <p className="font-medium">
                0725 272727
                <br />
                0754 272727
              </p>
            </div>

            <div className="lg:text-right">
              <p>© {new Date().getFullYear()} Dentists @ The Place</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
