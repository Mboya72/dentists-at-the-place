"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import "../globals.css";

/* =========================================
   SNAP BOUNCE OBSERVER
========================================= */

function useSnapBounce() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".snap-bounce, .snap-bounce-image, .snap-bounce-card"
    );

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}

/* =========================================
   SERVICES
========================================= */

const services = [
  "Dental Implants",
  "Cavity Prevention",
  "Dental Hygiene",
  "Family Dentistry",
  "Root Canal Treatment",
  "Tooth Extraction",
  "Crowns & Bridges",
  "Orthodontics",
  "Invisalign",
];

export default function AboutUs() {
  useSnapBounce();

  return (
    <div data-nav-theme="light" className="bg-white text-[var(--color4)]">
      {/* =========================================
          HERO
      ========================================= */}

      <section className="relative h-[100dvh] w-full overflow-hidden">
        {/* IMAGE */}
        <div className="absolute inset-0">
          <Image
            src="/1.jpg"
            alt="Dentists at The Place"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* LIGHT OVERLAY */}
        <div className="absolute inset-0 bg-white/25" />

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/45 to-white/10" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-[90vw] flex-col">
          <Navbar />

          <main className="flex flex-1 flex-col justify-center pb-20">
            <div className="snap-bounce max-w-4xl">
              {/* LABEL */}
              <div
                className="
                  mb-5 inline-flex items-center
                  rounded-full bg-white/75 px-4 py-2
                  text-sm font-medium text-[var(--color4)]
                  shadow-sm backdrop-blur-sm
                  sm:text-base
                "
              >
                <span className="mr-2 text-[var(--color2)]">•</span>
                About Us
              </div>

              {/* HEADING */}
              <h1
                className="
                  text-5xl font-medium leading-[1.05]
                  tracking-tight text-[var(--color4)]
                  sm:text-6xl
                  md:text-7xl
                  lg:text-8xl
                "
              >
                Dental Care for
                <span className="block text-[var(--color2)]">Everyone.</span>
              </h1>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-6 max-w-2xl
                  text-base font-light leading-relaxed
                  text-[var(--color4)]/80
                  sm:text-lg
                  lg:text-xl
                "
              >
                Dentists @ The Place is a multidisciplinary dental clinic in the
                heart of Westlands, Nairobi. We provide all aspects of general
                dentistry together with advanced procedures, delivering
                contemporary and conservative oral healthcare in a welcoming
                environment.
              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="
                    rounded-full bg-[var(--color2)]
                    px-6 py-3
                    text-sm font-medium text-white
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:bg-[var(--color4)]
                    sm:text-base
                  "
                >
                  Explore Our Services
                </Link>

                <Link
                  href="#our-story"
                  className="
                    rounded-full border border-[var(--color4)]/20
                    bg-white/70 px-6 py-3
                    text-sm font-medium text-[var(--color4)]
                    backdrop-blur-sm
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-[var(--color2)]
                    hover:bg-[var(--color2)]
                    hover:text-white
                    sm:text-base
                  "
                >
                  Discover More
                </Link>
              </div>
            </div>
          </main>
        </div>
      </section>

      {/* =========================================
          WHO WE ARE
      ========================================= */}

      <section
        id="our-story"
        className="
          mx-auto flex min-h-screen w-full max-w-[90vw]
          items-center py-20
        "
      >
        <div
          className="
            grid w-full items-center gap-14
            lg:grid-cols-2 lg:gap-20
          "
        >
          {/* TEXT */}
          <div className="snap-bounce">
            <div
              className="
                mb-4 inline-flex items-center
                rounded-full bg-[var(--color5)]
                px-4 py-2
                text-sm font-medium text-[var(--color4)]
              "
            >
              <span className="mr-2 text-[var(--color2)]">•</span>
              Who We Are
            </div>

            <h2
              className="
                text-4xl font-medium leading-tight
                sm:text-5xl
                lg:text-6xl
              "
            >
              A Contemporary Approach to
              <span className="text-[var(--color2)]"> Oral Healthcare.</span>
            </h2>

            <p className="mt-7 text-lg font-light leading-relaxed text-gray-600">
              Dentists @ The Place is a multidisciplinary clinic located in the
              heart of Westlands, with accessible on-site parking. We provide
              comprehensive general dentistry alongside advanced dental
              procedures.
            </p>

            <p className="mt-5 text-lg font-light leading-relaxed text-gray-600">
              Our approach to dental care is contemporary and conservative,
              combining qualified dental professionals, innovative therapy, and
              personalised treatment plans to provide care around the individual
              needs of every patient.
            </p>

            <p className="mt-5 text-lg font-light leading-relaxed text-gray-600">
              From preventive care and routine dental hygiene to advanced
              procedures and complete smile transformations, our goal is to help
              every patient maintain a healthy and confident smile.
            </p>
          </div>

          {/* IMAGE */}
          <div className="snap-bounce-image relative overflow-hidden rounded-3xl">
            <Image
              src="/aboutus.png"
              alt="Dental care at Dentists at The Place"
              width={850}
              height={850}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* =========================================
          WHAT WE DO
      ========================================= */}

      <section
        className="
          min-h-screen w-full
          bg-[var(--color5)]
          px-6 py-20
          lg:px-10
        "
      >
        <div className="mx-auto max-w-[90vw]">
          <div className="snap-bounce max-w-3xl">
            <div className="mb-4 text-sm font-medium text-[var(--color2)]">
              WHAT WE DO
            </div>

            <h2
              className="
                text-4xl font-medium leading-tight
                sm:text-5xl
                lg:text-6xl
              "
            >
              Comprehensive Dental Care
              <span className="text-[var(--color2)]"> for Everyone.</span>
            </h2>

            <p className="mt-6 text-lg font-light leading-relaxed text-gray-600">
              We provide all aspects of general dentistry together with advanced
              procedures designed to meet a wide range of dental care needs.
            </p>
          </div>

          {/* SERVICES */}
          <div
            className="
              mt-12 grid gap-4
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {services.map((service, index) => (
              <div
                key={service}
                className="snap-bounce-card rounded-2xl bg-white p-6"
                style={{
                  transitionDelay: `${index * 70}ms`,
                }}
              >
                <span className="text-sm text-[var(--color2)]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-4 text-xl font-medium">{service}</h3>

                <p
                  className="
                    mt-3
                    text-sm font-light leading-relaxed
                    text-gray-500
                  "
                >
                  Professional, patient-centred dental care delivered using
                  modern techniques and personalised treatment.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          GALLERY
      ========================================= */}

      <section className="w-full px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-[90vw]">
          {/* HEADING */}
          <div className="snap-bounce max-w-3xl">
            <div className="mb-4 text-sm font-medium text-[var(--color2)]">
              OUR CLINIC
            </div>

            <h2
              className="
                text-4xl font-medium leading-tight
                sm:text-5xl
                lg:text-6xl
              "
            >
              A Look Inside
              <span className="text-[var(--color2)]"> Our Dental Care.</span>
            </h2>

            <p className="mt-6 text-lg font-light leading-relaxed text-gray-600">
              Take a closer look at our clinic, our environment, and the spaces
              designed to make every dental visit comfortable.
            </p>
          </div>

          {/* GALLERY */}
          <div
            className="
              mt-12 grid grid-cols-1 gap-4
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {/* IMAGE 1 */}
            <div
              className="
                snap-bounce-image
                relative h-[300px] overflow-hidden rounded-3xl
                sm:col-span-2 sm:h-[380px]
                lg:row-span-2 lg:h-full
              "
            >
              <Image
                src="/img1.jpg"
                alt="Dentists at The Place clinic"
                fill
                className="
                  object-cover
                  transition-transform duration-500
                  hover:scale-105
                "
              />
            </div>

            {/* IMAGE 2 */}
            <div
              className="
                snap-bounce-image
                relative h-[220px] overflow-hidden rounded-3xl
                sm:h-[260px]
              "
              style={{ transitionDelay: "100ms" }}
            >
              <Image
                src="/img2.jpg"
                alt="Dental treatment room"
                fill
                className="
                  object-cover
                  transition-transform duration-500
                  hover:scale-105
                "
              />
            </div>

            {/* IMAGE 3 */}
            <div
              className="
                snap-bounce-image
                relative h-[220px] overflow-hidden rounded-3xl
                sm:h-[260px]
              "
              style={{ transitionDelay: "160ms" }}
            >
              <Image
                src="/img3.jpg"
                alt="Dental care at The Place"
                fill
                className="
                  object-cover
                  transition-transform duration-500
                  hover:scale-105
                "
              />
            </div>

            {/* IMAGE 4 */}
            <div
              className="
                snap-bounce-image
                relative h-[220px] overflow-hidden rounded-3xl
                sm:h-[260px]
              "
              style={{ transitionDelay: "220ms" }}
            >
              <Image
                src="/img4.jpg"
                alt="Dentist consultation"
                fill
                className="
                  object-cover
                  transition-transform duration-500
                  hover:scale-105
                "
              />
            </div>

            {/* IMAGE 5 */}
            <div
              className="
                snap-bounce-image
                relative h-[220px] overflow-hidden rounded-3xl
                sm:h-[260px]
              "
              style={{ transitionDelay: "280ms" }}
            >
              <Image
                src="/img5.jpg"
                alt="Modern dental clinic"
                fill
                className="
                  object-cover
                  transition-transform duration-500
                  hover:scale-105
                "
              />
            </div>
          </div>

          {/* GALLERY BUTTON */}
          <Link
            href="/gallery"
            className="
              snap-bounce
              mt-6 inline-flex items-center gap-2
              rounded-full bg-[var(--color2)]
              px-5 py-3
              text-sm font-medium text-white
              transition-colors
              hover:bg-[var(--color4)]
            "
          >
            View Full Gallery
            <Image
              src="/arrow_forward.svg"
              alt=""
              width={20}
              height={20}
              className="h-5 w-5"
            />
          </Link>
        </div>
      </section>

      {/* =========================================
          INNOVATION
      ========================================= */}

      <section className="w-full px-6 py-20 lg:px-10">
        <div
          className="
            mx-auto grid max-w-[90vw]
            items-center gap-14
            lg:grid-cols-2
          "
        >
          {/* TEXT */}
          <div className="snap-bounce">
            <div className="mb-4 text-sm font-medium text-[var(--color2)]">
              OUR APPROACH
            </div>

            <h2
              className="
                text-4xl font-medium leading-tight
                sm:text-5xl
                lg:text-6xl
              "
            >
              Innovative Therapy &
              <span className="text-[var(--color2)]"> Qualified Dentists.</span>
            </h2>

            <p className="mt-7 text-lg font-light leading-relaxed text-gray-600">
              We combine modern dental technology with professional expertise to
              provide effective, personalised treatment. Our contemporary
              approach allows us to address both routine dental needs and more
              advanced procedures while keeping patient comfort at the centre of
              care.
            </p>

            <p className="mt-5 text-lg font-light leading-relaxed text-gray-600">
              Whether you are visiting for preventive care, restorative
              treatment, cosmetic dentistry, or a complete smile transformation,
              our team is committed to providing care tailored to you.
            </p>
          </div>

          {/* PHILOSOPHY CARD */}
          <div
            className="
              snap-bounce
              rounded-3xl bg-[var(--color3)]
              p-8 text-white
              sm:p-12
            "
          >
            <p
              className="
                text-sm font-medium uppercase
                tracking-widest text-white/70
              "
            >
              Our Philosophy
            </p>

            <h3
              className="
                mt-6 text-3xl font-medium leading-tight
                sm:text-4xl
              "
            >
              Contemporary care.
              <br />
              Personal attention.
              <br />
              Healthier smiles.
            </h3>
          </div>
        </div>
      </section>

      {/* =========================================
          CTA
      ========================================= */}

      <section
        className="
          w-full
          bg-[var(--color4)]
          px-6 py-24
          text-center text-white
          lg:px-10
        "
      >
        <div className="snap-bounce mx-auto max-w-3xl">
          <p
            className="
              text-sm font-medium uppercase
              tracking-widest text-white/60
            "
          >
            Your Smile Starts Here
          </p>

          <h2
            className="
              mt-4 text-4xl font-medium leading-tight
              sm:text-5xl
              lg:text-6xl
            "
          >
            Ready to take care of
            <span className="text-[var(--color2)]"> your smile?</span>
          </h2>

          <p
            className="
              mx-auto mt-6 max-w-2xl
              text-lg font-light leading-relaxed
              text-white/70
            "
          >
            Get in touch with Dentists @ The Place and let our team help you
            find the right dental care for your needs.
          </p>

          <a
            href="#contact"
            className="
              mt-8 inline-flex
              rounded-full bg-[var(--color2)]
              px-7 py-3
              text-sm font-medium text-white
              transition-all
              hover:bg-white hover:text-[var(--color4)]
              sm:text-base
            "
          >
            Book An Appointment
          </a>
        </div>
      </section>
    </div>
  );
}
