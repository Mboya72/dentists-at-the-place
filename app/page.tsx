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
    >,
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
        "Your appointment request has been sent successfully. We will get back to you shortly.",
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
          : "Failed to send appointment request.",
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
    e: React.FormEvent<HTMLFormElement>,
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
        error instanceof Error ? error.message : "Failed to subscribe.",
      );
    } finally {
      setNewsletterLoading(false);
    }
  };

  return (
    <div
      className="
        flex flex-col
        w-full
        min-h-screen
        text-[var(--color2)] font-sans
        bg-white
        snap-y snap-proximity
        scroll-smooth
      "
    >
      {/* =========================================================
          1. HERO SECTION
      ========================================================= */}
      <section
        className="
          relative
          h-[100dvh]
          w-full
          shrink-0
          snap-start
          overflow-hidden
        "
      >
        {/* Background Image */}
        <Image
          src="/landingpage.jpg"
          alt="Landing page hero image"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark Overlay */}
        <div
          className="
            absolute inset-0
            z-0
            bg-black/15
            pointer-events-none
          "
        />

        {/* Navigation */}
        <header
          className="
            absolute top-0 left-0 right-0
            z-50
            flex
            items-center
            justify-between
            py-6
            mx-auto
          "
        >
          <Navbar />
        </header>

        {/* Hero Content */}
        <div
          className="
            absolute
            top-1/6
            left-0
            right-0
            mx-auto
            max-w-[90vw]
            text-white
            sm:top-1/5
          "
        >
          <h2
            className="
              text-xl
              font-normal
              tracking-tight
              sm:text-3xl
              md:text-2xl
            "
          >
            Dental Care For
          </h2>

          <h1
            className="
              text-[55px]/[1]
              font-semibold
              tracking-tight
              text-white/90
              sm:text-[150px]/[1]
            "
          >
            Your
            <br />
            New Smile
          </h1>

          <p
            className="
              mt-2
              max-w-180
              text-lg
              font-light
              leading-relaxed
              text-white
              sm:max-w-160
              lg:text-xl
            "
          >
            We provide all aspects of general dentistry together with
            advanced procedures, delivered with a contemporary and
            conservative approach to oral health care.
          </p>

          {/* Hero Buttons */}
          <div
            className="
              flex
              flex-wrap
              max-w-240
              mt-5
              justify-between
              gap-3
              sm:max-w-175
            "
          >
            <Link href="#contact">
              <span
                className="
                  z-30
                  flex
                  cursor-pointer
                  items-center
                  gap-4
                  rounded-full
                  bg-white
                  px-3
                  py-3
                  text-sm
                  font-medium
                  text-[#0399B0]
                  transition-colors
                  hover:bg-[var(--color2)]
                  hover:text-[var(--color1)]
                  sm:text-xl
                "
              >
                <span>Book An Appointment</span>

                <Image
                  src="/arrow_forward.svg"
                  alt="arrow"
                  width={40}
                  height={40}
                  className="
                    h-6
                    w-6
                    rounded-full
                    bg-[var(--color2)]
                    p-1
                    sm:h-8
                    sm:w-8
                    md:h-10
                    md:w-10
                  "
                />
              </span>
            </Link>

            <Link href="/services">
              <span
                className="
                  z-30
                  flex
                  cursor-pointer
                  items-center
                  gap-4
                  rounded-full
                  bg-[var(--color2)]
                  px-3
                  py-3
                  text-sm
                  font-medium
                  text-[var(--color1)]
                  transition-colors
                  hover:bg-[var(--color1)]
                  hover:text-[var(--color2)]
                  sm:text-xl
                "
              >
                <span>Explore Services</span>

                <Image
                  src="/arrow_forward.svg"
                  alt="arrow"
                  width={40}
                  height={40}
                  className="
                    h-6
                    w-6
                    rounded-full
                    bg-[var(--color2)]
                    p-1
                    sm:h-8
                    sm:w-8
                    md:h-10
                    md:w-10
                  "
                />
              </span>
            </Link>
          </div>

          {/* Hero Information Cards */}
          <div
            className="
              mt-9
              flex
              justify-between
              gap-2
            "
          >
            {/* Working Hours */}
            <div
              className="
                w-60
                rounded-2xl
                border
                border-white/30
                bg-white/20
                p-5
                text-neutral-800
                shadow-xl
                backdrop-blur-xl
                dark:border-white/10
                dark:bg-black/30
                dark:text-neutral-100
                sm:w-70
              "
            >
              <h1 className="text-xl sm:text-2xl">
                Working
                <br />
                Hours
              </h1>

              <div className="mt-2 flex items-center gap-4">
                <Image
                  src="/clock.svg"
                  alt="clock"
                  width={45}
                  height={45}
                />

                <div className="flex flex-col text-sm">
                  <p>MON - FRI</p>
                  <p>8:30 AM - 5:30 PM</p>
                  <p>SAT: 8:30 AM - 1:00 PM</p>
                </div>
              </div>
            </div>

            {/* Clinic Location */}
            <div
              className="
                w-60
                rounded-2xl
                border
                border-white/30
                bg-white/20
                p-5
                text-neutral-800
                shadow-xl
                backdrop-blur-xl
                dark:border-white/10
                dark:bg-black/30
                dark:text-neutral-100
                sm:w-70
              "
            >
              <h1 className="text-xl sm:text-2xl">
                Visit Our
                <br />
                Clinic
              </h1>

              <div className="mt-2 flex items-center gap-2">
                <Image
                  src="/location.svg"
                  alt="location"
                  width={65}
                  height={65}
                />

                <p className="text-sm">
                  The Place, General Mathenge Rd, next to Autoexpress and
                  Zucchini, Westlands, Nairobi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. ABOUT SECTION
      ========================================================= */}
      <section
        data-nav-theme="light"
        className="
          flex
          min-h-[100dvh]
          w-full
          max-w-[90vw]
          shrink-0
          snap-start
          flex-col
          items-center
          justify-center
          mx-auto
          py-10
          lg:py-12
        "
      >
        {/* Label */}
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

        {/* Main Content */}
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
          {/* Text */}
          <div className="flex w-full flex-col lg:w-[55%]">
            <h2
              className="
                text-2xl
                font-medium
                leading-[1.05]
                text-[var(--color4)]
                sm:text-3xl
                md:text-4xl
                lg:text-5xl
                xl:text-6xl
              "
            >
              Multidisciplinary Dental Care
              <br />
              <span className="text-[var(--color2)]">
                Designed Around You.
              </span>
            </h2>

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
              We provide all aspects of general dentistry together with
              advanced procedures, combining qualified dental professionals,
              innovative therapy, and a contemporary approach to oral health
              care.
            </p>

            {/* Highlights */}
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

                <h3 className="mt-3 text-sm font-medium text-[var(--color4)] sm:text-base">
                  General Dentistry
                </h3>

                <p className="mt-1 text-xs font-light leading-[1.4] text-[var(--color4)]/60 sm:text-sm">
                  Everyday dental care for healthy smiles.
                </p>
              </div>

              <div
                className="
                  rounded-xl
                  bg-[var(--color3)]
                  p-4
                  sm:p-5
                "
              >
                <span className="text-2xl text-white sm:text-3xl">
                  02
                </span>

                <h3 className="mt-3 text-sm font-medium text-white sm:text-base">
                  Advanced Procedures
                </h3>

                <p className="mt-1 text-xs font-light leading-[1.4] text-white/70 sm:text-sm">
                  Modern solutions for complex dental needs.
                </p>
              </div>

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

                <h3 className="mt-3 text-sm font-medium text-[var(--color4)] sm:text-base">
                  Comprehensive Care
                </h3>

                <p className="mt-1 text-xs font-light leading-[1.4] text-[var(--color4)]/60 sm:text-sm">
                  From prevention to complete smile rehabilitation.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex w-full items-center justify-center lg:w-[45%]">
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

        {/* Bottom Content */}
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

      {/* =========================================================
          3. SERVICES SECTION
      ========================================================= */}
      <section
        className="
          flex
          min-h-[100dvh]
          w-full
          shrink-0
          snap-start
          flex-col
          items-center
          justify-start
          px-4
          py-10
          sm:px-6
          sm:py-10
          md:px-8
          md:py-12
          lg:px-10
          lg:py-10
          lg:justify-center
        "
      >
        {/* Heading */}
        <div className="mb-5 text-center sm:mb-6 md:mb-7 lg:mb-7">
          <div
            className="
              mb-2
              inline-flex
              items-center
              rounded-full
              bg-gray-100
              px-3
              py-1
              text-xs
              font-medium
              text-[var(--color4)]
              sm:px-4
              sm:text-sm
            "
          >
            <span className="mr-1">•</span>
            Dental Services
          </div>

          <h2
            className="
              text-3xl
              font-medium
              leading-[1.05]
              tracking-tight
              text-[var(--color4)]
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              xl:text-7xl
            "
          >
            Comprehensive Dental Care
            <br />
            for{" "}
            <span className="text-[var(--color2)]">
              Every Smile
            </span>
          </h2>
        </div>

        {/* Services Grid */}
        <div
          className="
            grid
            min-h-0
            w-full
            max-w-[1350px]
            grid-cols-1
            gap-3
            sm:grid-cols-2
            sm:gap-4
            md:gap-5
            lg:grid-cols-3
            lg:gap-5
          "
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="
                group
                w-full
                min-w-0
                overflow-hidden
                rounded-xl
                bg-[#ccecf1]
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              {/* Image */}
              <div
                className="
                  relative
                  h-[120px]
                  w-full
                  overflow-hidden
                  sm:h-[135px]
                  md:h-[145px]
                  lg:h-[150px]
                  xl:h-[175px]
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

              {/* Content */}
              <div
                className="
                  relative
                  min-h-[100px]
                  px-4
                  py-3
                  pr-14
                  sm:min-h-[105px]
                  md:min-h-[110px]
                  lg:min-h-[115px]
                "
              >
                <h3
                  className="
                    mb-1.5
                    text-base
                    font-medium
                    leading-tight
                    text-[var(--color4)]
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
                    text-xs
                    font-light
                    leading-[1.3]
                    text-[var(--color4)]
                    sm:text-sm
                    md:text-sm
                    lg:text-[15px]
                  "
                >
                  {service.description}
                </p>

                <Link
                  href={`/services/${service.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  aria-label={`Learn more about ${service.title}`}
                  className="
                    group/arrow
                    absolute
                    bottom-3
                    right-3
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-[var(--color4)]
                    text-[var(--color1)]
                    transition-all
                    duration-300
                    ease-out
                    hover:scale-105
                    hover:bg-[var(--color2)]
                    hover:text-white
                    sm:h-10
                    sm:w-10
                    md:h-11
                    md:w-11
                    lg:h-12
                    lg:w-12
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
                    className="h-4 w-4 sm:h-5 sm:w-5"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* All Services */}
        <Link
          href="/services"
          className="
            group
            mt-5
            flex
            shrink-0
            items-center
            gap-2
            rounded-full
            bg-[var(--color2)]
            py-1.5
            pl-4
            pr-2
            text-sm
            font-medium
            text-[var(--color1)]
            sm:mt-6
            sm:text-base
            md:mt-7
            lg:mt-7
          "
        >
          <span>All Services</span>

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
              className="h-4 w-4 sm:h-5 sm:w-5"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </span>
        </Link>
      </section>

      {/* =========================================================
          4. DOCTORS SECTION
      ========================================================= */}
      <section
        className="
          flex
          min-h-[100dvh]
          w-full
          shrink-0
          snap-start
          flex-col
          items-center
          justify-start
          px-5
          py-10
          sm:px-8
          lg:px-12
          lg:justify-center
        "
      >
        {/* Label */}
        <div
          className="
            mb-4
            inline-flex
            items-center
            rounded-full
            bg-gray-100
            px-4
            py-1
            text-sm
            font-medium
            text-[var(--color4)]
            sm:text-base
          "
        >
          <span className="mr-1">•</span>
          Meet the Dentists
        </div>

        {/* Heading */}
        <h2
          className="
            max-w-4xl
            text-center
            text-3xl
            font-medium
            leading-[1.05]
            text-[var(--color4)]
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            xl:text-7xl
          "
        >
          Meet the Doctors Who Keep
          <br />
          Your{" "}
          <span className="text-[var(--color2)]">
            Smiles Healthy.
          </span>
        </h2>

        {/* Doctors */}
        <div
          className="
            mt-10
            grid
            w-full
            max-w-[1200px]
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {doctors.map((doctor) => (
            <div key={doctor.name} className="w-full">
              {/* Image */}
              <div
                className="
                  relative
                  flex
                  aspect-[4/5]
                  w-full
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[24px]
                  bg-[var(--color5)]
                "
              >
                {doctor.image ? (
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div
                    className="
                      flex
                      h-24
                      w-24
                      items-center
                      justify-center
                      rounded-full
                      bg-white/70
                      text-[var(--color2)]
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-14 w-14"
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

              {/* Info */}
              <div className="mt-4 flex items-center justify-between">
                <div className="pr-3">
                  <h3
                    className="
                      text-xl
                      font-medium
                      leading-none
                      text-[var(--color4)]
                      sm:text-2xl
                    "
                  >
                    {doctor.name}
                  </h3>

                  <p className="mt-1 text-sm text-[var(--color4)] sm:text-base">
                    {doctor.specialty}
                  </p>
                </div>

                <Link
                  href="/dentists"
                  aria-label={`View ${doctor.name}`}
                  className="
                    group
                    flex
                    h-14
                    w-14
                    shrink-0
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-full
                    bg-[var(--color5)]
                    transition-colors
                    duration-300
                    hover:bg-[var(--color2)]
                    sm:h-16
                    sm:w-16
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
                    className="
                      h-6
                      w-6
                      text-[var(--color4)]
                      transition-colors
                      duration-300
                      group-hover:text-white
                    "
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* All Team */}
        <Link
          href="/dentists"
          className="
            group
            mt-8
            flex
            items-center
            gap-2
            rounded-full
            bg-[var(--color2)]
            py-1.5
            pl-4
            pr-2
            text-base
            font-medium
            text-[var(--color1)]
            sm:text-lg
            lg:mt-10
          "
        >
          <span>All The Team</span>

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
      </section>

      {/* =========================================================
          5. TESTIMONIALS SECTION
      ========================================================= */}
      <section
        className="
          flex
          min-h-[100dvh]
          w-full
          shrink-0
          snap-start
          flex-col
          justify-start
          px-5
          py-10
          sm:px-8
          lg:px-[7vw]
          lg:justify-center
        "
      >
        {/* Label */}
        <div className="mb-8 text-center lg:mb-10">
          <div
            className="
              inline-flex
              items-center
              rounded-full
              bg-gray-100
              px-4
              py-1
              text-sm
              font-medium
              text-[var(--color4)]
              sm:text-base
            "
          >
            <span className="mr-1">•</span>
            What Our Patients Say
          </div>
        </div>

        {/* Main Content */}
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1400px]
            grid-cols-1
            items-center
            gap-10
            lg:grid-cols-[0.9fr_1.1fr]
          "
        >
          {/* Left */}
          <div>
            <h2
              className="
                text-4xl
                font-medium
                leading-[1.05]
                text-[var(--color4)]
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                xl:text-8xl
              "
            >
              What Our
              <br />
              Patients Says
            </h2>

            <p
              className="
                mt-6
                max-w-lg
                text-base
                leading-[1.35]
                text-[var(--color4)]
                sm:text-lg
                lg:text-xl
              "
            >
              Nothing means more to us than the trust and confidence of our
              patients. Every smile we care for is a reflection of our
              commitment to exceptional dentistry, compassionate service, and
              personalized treatment.
            </p>

            <p
              className="
                mt-3
                max-w-lg
                text-base
                leading-[1.35]
                text-[var(--color4)]
                sm:text-lg
                lg:text-xl
              "
            >
              Here&apos;s what our patients have to say about their experience
              with us.
            </p>

            <button
              className="
                mt-6
                cursor-pointer
                rounded-md
                bg-[var(--color2)]
                px-5
                py-2.5
                text-sm
                text-[var(--color1)]
                transition-colors
                hover:bg-[var(--color4)]
                sm:text-base
              "
            >
              View More
            </button>
          </div>

          {/* Testimonials */}
          <div className="flex flex-col gap-4 lg:gap-5">
            {/* Testimonial 1 */}
            <div
              className="
                relative
                flex
                items-center
                gap-4
                rounded-lg
                border
                border-[var(--color5)]
                bg-white
                p-5
                shadow-sm
                sm:gap-5
                lg:ml-16
              "
            >
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  top-0
                  w-2
                  rounded-l-lg
                  bg-[var(--color5)]
                "
              />

              <div
                className="
                  h-20
                  w-20
                  shrink-0
                  rounded-full
                  bg-[var(--color5)]
                  sm:w-20
                "
              />

              <div className="flex-1">
                <h3 className="text-lg font-medium text-[var(--color4)] sm:text-xl">
                  Sarah W.
                </h3>

                <p className="mt-1 text-xs leading-[1.3] text-[var(--color2)] sm:text-sm">
                  &quot;From the moment I walked in, I felt welcomed and cared
                  for. The staff were incredibly friendly, and the dentist
                  explained every step of my treatment. I couldn&apos;t be
                  happier with my smile.&quot;
                </p>
              </div>

              <span
                className="
                  absolute
                  right-4
                  top-2
                  text-4xl
                  leading-none
                  text-[var(--color2)]
                  sm:text-5xl
                "
              >
                ”
              </span>
            </div>

            {/* Testimonial 2 */}
            <div
              className="
                relative
                flex
                items-center
                gap-4
                rounded-lg
                border
                border-[var(--color2)]
                bg-white
                p-5
                shadow-sm
                sm:gap-5
                lg:mr-24
              "
            >
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  top-0
                  w-2
                  rounded-l-lg
                  bg-[var(--color2)]
                "
              />

              <div
                className="
                  h-20
                  w-20
                  shrink-0
                  rounded-full
                  bg-[var(--color2)]
                  sm:w-20
                "
              />

              <div className="flex-1">
                <h3 className="text-lg font-medium text-[var(--color4)] sm:text-xl">
                  David M.
                </h3>

                <p className="mt-1 text-xs leading-[1.3] text-[var(--color4)] sm:text-sm">
                  &quot;I used to be nervous about visiting the dentist, but
                  the team made the entire experience comfortable and
                  stress-free. Their professionalism and genuine care exceeded
                  my expectations.&quot;
                </p>
              </div>

              <span
                className="
                  absolute
                  right-4
                  top-2
                  text-4xl
                  leading-none
                  text-[var(--color2)]
                  sm:text-5xl
                "
              >
                ”
              </span>
            </div>

            {/* Testimonial 3 */}
            <div
              className="
                relative
                flex
                items-center
                gap-4
                rounded-lg
                border
                border-[var(--color5)]
                bg-white
                p-5
                shadow-sm
                sm:gap-5
                lg:ml-16
              "
            >
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  top-0
                  w-2
                  rounded-l-lg
                  bg-[var(--color5)]
                "
              />

              <div
                className="
                  h-20
                  w-20
                  shrink-0
                  rounded-full
                  bg-[var(--color5)]
                  sm:w-20
                "
              />

              <div className="flex-1">
                <h3 className="text-lg font-medium text-[var(--color4)] sm:text-xl">
                  Grace K.
                </h3>

                <p className="mt-1 text-xs leading-[1.3] text-[var(--color2)] sm:text-sm">
                  &quot;The clinic is clean, modern, and equipped with the
                  latest technology. My treatment was painless, and the results
                  were amazing. I highly recommend them to anyone looking for
                  quality dental care.&quot;
                </p>
              </div>

              <span
                className="
                  absolute
                  right-4
                  top-2
                  text-4xl
                  leading-none
                  text-[var(--color2)]
                  sm:text-5xl
                "
              >
                ”
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          6. CONTACT SECTION
      ========================================================= */}
      <section
        id="contact"
        className="
          flex
          min-h-[100dvh]
          w-full
          shrink-0
          snap-start
          flex-col
          justify-start
          px-5
          py-10
          sm:px-8
          lg:px-[7vw]
          lg:justify-center
        "
      >
        {/* Label */}
        <div className="mb-8 text-center lg:mb-10">
          <div
            className="
              inline-flex
              items-center
              rounded-full
              bg-gray-100
              px-4
              py-1
              text-sm
              font-medium
              text-[var(--color4)]
              sm:text-base
            "
          >
            <span className="mr-1">•</span>
            Contact Us
          </div>
        </div>

        {/* Content */}
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1400px]
            grid-cols-1
            items-center
            gap-10
            lg:grid-cols-2
          "
        >
          {/* Left */}
          <div>
            <h2
              className="
                text-4xl
                font-medium
                leading-[1.05]
                text-[var(--color4)]
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                xl:text-8xl
              "
            >
              Schedule Your Next
              <br />
              <span className="text-[var(--color2)]">
                Dental Appointment
              </span>
            </h2>

            {/* Calendar + Hours */}
            <div
              className="
                mt-8
                flex
                flex-col
                items-center
                gap-6
                sm:flex-row
              "
            >
              <div className="shrink-0">
                <Image
                  src="/calendar.png"
                  width={300}
                  height={300}
                  alt="Dental appointment calendar"
                  className="
                    h-auto
                    w-44
                    object-contain
                    sm:w-48
                    lg:w-56
                  "
                />
              </div>

              <div className="w-full max-w-sm">
                <div
                  className="
                    flex
                    justify-between
                    border-b
                    border-[var(--color5)]
                    py-3
                    text-sm
                    sm:text-base
                  "
                >
                  <span>Mon - Fri</span>
                  <span>8:30 AM - 5:30 PM</span>
                </div>

                <div
                  className="
                    flex
                    justify-between
                    border-b
                    border-[var(--color5)]
                    py-3
                    text-sm
                    sm:text-base
                  "
                >
                  <span>Saturday</span>
                  <span>8:30 AM - 1:00 PM</span>
                </div>

                <div className="flex justify-between py-3 text-sm sm:text-base">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div
              className="
                mt-8
                grid
                grid-cols-1
                gap-5
                sm:grid-cols-2
              "
            >
              {/* Location */}
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-md
                    bg-[var(--color2)]
                    text-white
                  "
                >
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
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-md
                    bg-[var(--color2)]
                    text-white
                  "
                >
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
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-md
                    bg-[var(--color2)]
                    text-white
                  "
                >
                  <span className="text-xl">@</span>
                </div>

                <div>
                  <p className="text-xs text-[var(--color2)]">
                    Email Us
                  </p>

                  <p className="text-sm font-medium text-[var(--color2)] sm:text-base">
                    dentists@theplace.co.ke
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div
            className="
              rounded-xl
              bg-[var(--color5)]
              p-5
              sm:p-6
              lg:p-7
            "
          >
            <h3
              className="
                mb-5
                text-2xl
                font-medium
                text-[var(--color4)]
                sm:text-3xl
                lg:text-4xl
              "
            >
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
                  className="
                    h-12
                    w-full
                    rounded-md
                    border
                    border-[var(--color2)]/20
                    bg-white
                    px-3
                    text-sm
                    outline-none
                    focus:border-[var(--color2)]
                  "
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="
                    h-12
                    w-full
                    rounded-md
                    border
                    border-[var(--color2)]/20
                    bg-white
                    px-3
                    text-sm
                    outline-none
                    focus:border-[var(--color2)]
                  "
                />
              </div>

              {/* Phone + Service */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  required
                  className="
                    h-12
                    w-full
                    rounded-md
                    border
                    border-[var(--color2)]/20
                    bg-white
                    px-3
                    text-sm
                    outline-none
                    focus:border-[var(--color2)]
                  "
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="
                    h-12
                    w-full
                    rounded-md
                    border
                    border-[var(--color2)]/20
                    bg-white
                    px-3
                    text-sm
                    outline-none
                    focus:border-[var(--color2)]
                  "
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

              {/* Dentist + Date */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <select
                  name="dentist"
                  value={formData.dentist}
                  onChange={handleChange}
                  required
                  className="
                    h-12
                    w-full
                    rounded-md
                    border
                    border-[var(--color2)]/20
                    bg-white
                    px-3
                    text-sm
                    outline-none
                    focus:border-[var(--color2)]
                  "
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
                  className="
                    h-12
                    w-full
                    rounded-md
                    border
                    border-[var(--color2)]/20
                    bg-white
                    px-3
                    text-sm
                    outline-none
                    focus:border-[var(--color2)]
                  "
                />
              </div>

              {/* Message */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type Your Message"
                rows={5}
                className="
                  w-full
                  resize-none
                  rounded-md
                  border
                  border-[var(--color2)]/20
                  bg-white
                  px-3
                  py-3
                  text-sm
                  outline-none
                  focus:border-[var(--color2)]
                "
              />

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="
                  cursor-pointer
                  rounded-md
                  bg-[var(--color2)]
                  px-5
                  py-2.5
                  text-sm
                  text-white
                  transition-colors
                  hover:bg-[var(--color4)]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  sm:text-base
                "
              >
                {loading ? "Sending..." : "Book Appointment"}
              </button>

              {success && (
                <p className="mt-3 text-sm font-medium text-green-600">
                  {success}
                </p>
              )}

              {error && (
                <p className="mt-3 text-sm font-medium text-red-600">
                  {error}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
          
          IMPORTANT:
          snap-start is included here so the footer itself is
          recognized as a valid snap destination.
      ========================================================= */}
      <footer
        className="
          w-full
          shrink-0
          snap-start
          bg-[var(--color5)]
          px-5
          pb-6
          pt-12
          text-[var(--color4)]
          sm:px-8
          lg:px-[7vw]
        "
      >
        <div className="mx-auto max-w-[1400px]">
          {/* Top Footer */}
          <div
            className="
              grid
              grid-cols-1
              gap-10
              sm:grid-cols-2
              sm:gap-x-10
              sm:gap-y-12
              lg:grid-cols-4
              lg:gap-16
            "
          >
            {/* Brand */}
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

              <p
                className="
                  mt-5
                  max-w-xs
                  text-sm
                  leading-[1.5]
                  text-[var(--color4)]/70
                "
              >
                We provide all aspects of general dentistry together with
                advanced procedures in a welcoming and comfortable environment
                where your oral health comes first.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-lg font-medium">
                Quick Links
              </h3>

              <ul className="space-y-3 text-sm text-[var(--color4)]/70">
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
                  <Link href="/testimonials">
                    · Testimonials
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-4 text-lg font-medium">
                Services
              </h3>

              <ul className="space-y-3 text-sm text-[var(--color4)]/70">
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

            {/* Legal + Newsletter */}
            <div>
              <h3 className="mb-4 text-lg font-medium">
                Legal
              </h3>

              <ul className="space-y-3 text-sm text-[var(--color4)]/70">
                <li>· Privacy Policy</li>
                <li>· Terms of Services</li>
                <li>· Cookies</li>
              </ul>

              <div className="mt-7">
                <h3 className="text-lg font-medium">
                  Newsletter
                </h3>

                <p
                  className="
                    mt-2
                    max-w-sm
                    text-sm
                    leading-relaxed
                    text-[var(--color4)]/70
                  "
                >
                  Join the Community and receive our monthly newsletter
                  straight to your inbox.
                </p>

                <form
                  onSubmit={handleNewsletterSubmit}
                  className="
                    mt-4
                    flex
                    h-25 sm:h-auto
                    w-full
                    flex-col
                    gap-2
                    sm:flex-row
                  "
                >
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) =>
                      setNewsletterEmail(e.target.value)
                    }
                    placeholder="Enter Your Email Address"
                    required
                    className="
                      h-11
                      min-w-0
                      flex-1
                      rounded-md
                      bg-white
                      px-3
                      text-sm
                      text-[var(--color4)]
                      outline-none
                      placeholder:text-gray-400
                    "
                  />

                  <button
                    type="submit"
                    disabled={newsletterLoading}
                    className="
                      h-11
                      w-full
                      shrink-0
                      rounded-md
                      bg-white
                      px-6
                      font-medium
                      text-[var(--color2)]
                      transition-colors
                      hover:bg-gray-100
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                      sm:w-auto
                    "
                  >
                    {newsletterLoading
                      ? "Joining..."
                      : "Join"}
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

          {/* Contact Bar */}
          <div
            className="
              mt-12
              grid
              grid-cols-1
              gap-7
              border-t
              border-[var(--color4)]/15
              pt-6
              text-sm
              sm:grid-cols-2
              sm:gap-x-10
              sm:gap-y-7
              lg:grid-cols-4
              lg:gap-10
            "
          >
            {/* Location */}
            <div>
              <p className="text-[var(--color4)]/50">
                Visit Our Clinic
              </p>

              <p className="mt-1 font-medium leading-relaxed">
                The Place, General Mathenge Rd, next to Autoexpress and
                Zucchini, Westlands, Nairobi.
              </p>
            </div>

            {/* Email */}
            <div>
              <p className="text-[var(--color4)]/50">
                General Inquiries
              </p>

              <p className="mt-1 break-words font-medium">
                dentists@theplace.co.ke
              </p>
            </div>

            {/* Phone */}
            <div>
              <p className="text-[var(--color4)]/50">
                Call Us
              </p>

              <p className="mt-1 font-medium leading-relaxed">
                0725 272727
                <br />
                0754 272727
              </p>
            </div>

            {/* Copyright */}
            <div className="lg:text-right">
              <p>
                © {new Date().getFullYear()} Dentists @ The Place
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}