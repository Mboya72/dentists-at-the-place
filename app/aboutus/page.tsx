"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import "../globals.css";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="bg-white text-[var(--color4)]">
      {/* HERO */}
      <section className="relative h-[100dvh] w-full overflow-hidden">
        <Image
          src="/aboutus.jpg"
          alt="Dentists at The Place"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[90vw] flex-col text-white">
          <Navbar />

          <main className="flex flex-1 flex-col justify-center pb-20">
            <div className="max-w-4xl">
              {/* Label */}
              <div
                className="
                  mb-5 inline-flex items-center
                  rounded-full
                  border border-white/20
                  bg-white/10
                  px-4 py-2
                  text-sm
                  backdrop-blur-sm
                "
              >
                <span className="mr-2 text-[var(--color2)]">•</span>
                About Us
              </div>

              {/* Heading */}
              <h1
                className="
                  text-5xl
                  font-medium
                  leading-[1.05]
                  tracking-tight
                  sm:text-6xl
                  md:text-7xl
                  lg:text-8xl
                "
              >
                Dental Care for
                <span className="block text-[var(--color2)]">Everyone.</span>
              </h1>

              {/* Description */}
              <p
                className="
                  mt-6
                  max-w-2xl
                  text-base
                  font-light
                  leading-relaxed
                  text-white/85
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
                <a
                  href="/services"
                  className="
                    rounded-full
                    bg-[var(--color2)]
                    px-6 py-3
                    text-sm
                    font-medium
                    text-white
                    transition-all
                    hover:bg-white
                    hover:text-[var(--color2)]
                    sm:text-base
                  "
                >
                  Explore Our Services
                </a>

                <a
                  href="#our-story"
                  className="
                    rounded-full
                    border border-white/40
                    bg-white/5
                    px-6 py-3
                    text-sm
                    font-medium
                    text-white
                    backdrop-blur-sm
                    transition-all
                    hover:bg-white
                    hover:text-[var(--color4)]
                    sm:text-base
                  "
                >
                  Discover More
                </a>
              </div>
            </div>
          </main>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section
        id="our-story"
        className="
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[90vw]
          items-center
          py-20
        "
      >
        <div className="grid w-full items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Text */}
          <div>
            <div
              className="
                mb-4 inline-flex items-center
                rounded-full
                bg-[var(--color5)]
                px-4 py-2
                text-sm
                font-medium
                text-[var(--color4)]
              "
            >
              <span className="mr-2 text-[var(--color2)]">•</span>
              Who We Are
            </div>

            <h2
              className="
                text-4xl
                font-medium
                leading-tight
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

          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl">
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

      {/* WHAT WE DO */}
      <section
        className="
          min-h-screen
          w-full
          bg-[var(--color5)]
          px-6
          py-20
          lg:px-10
        "
      >
        <div className="mx-auto max-w-[90vw]">
          <div className="max-w-3xl">
            <div className="mb-4 text-sm font-medium text-[var(--color2)]">
              WHAT WE DO
            </div>

            <h2
              className="
                text-4xl
                font-medium
                leading-tight
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

          {/* Services */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Dental Implants",
              "Cavity Prevention",
              "Dental Hygiene",
              "Family Dentistry",
              "Root Canal Treatment",
              "Tooth Extraction",
              "Crowns & Bridges",
              "Orthodontics",
              "Invisalign",
            ].map((service) => (
              <div
                key={service}
                className="
                  rounded-2xl
                  bg-white
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                <span className="text-sm text-[var(--color2)]">
                  0
                  {[
                    ...[
                      "Dental Implants",
                      "Cavity Prevention",
                      "Dental Hygiene",
                      "Family Dentistry",
                      "Root Canal Treatment",
                      "Tooth Extraction",
                      "Crowns & Bridges",
                      "Orthodontics",
                      "Invisalign",
                    ],
                  ].indexOf(service) + 1}
                </span>

                <h3 className="mt-4 text-xl font-medium">{service}</h3>

                <p className="mt-3 text-sm font-light leading-relaxed text-gray-500">
                  Professional, patient-centred dental care delivered using
                  modern techniques and personalised treatment.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="w-full px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-[90vw]">
          {/* Gallery Heading */}
          <div className="max-w-3xl">
            <div className="mb-4 text-sm font-medium text-[var(--color2)]">
              OUR CLINIC
            </div>

            <h2
              className="
          text-4xl
          font-medium
          leading-tight
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

          {/* Gallery */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Large Image */}
            <div className="relative h-[300px] overflow-hidden rounded-3xl sm:col-span-2 sm:h-[380px] lg:row-span-2 lg:h-full">
              <Image
                src="/img1.jpg"
                alt="Dentists at The Place clinic"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Image 2 */}
            <div className="relative h-[220px] overflow-hidden rounded-3xl sm:h-[260px]">
              <Image
                src="/gallery/gallery-2.jpg"
                alt="Dental treatment room"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Image 3 */}
            <div className="relative h-[220px] overflow-hidden rounded-3xl sm:h-[260px]">
              <Image
                src="/gallery/gallery-3.jpg"
                alt="Dental care at The Place"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Image 4 */}
            <div className="relative h-[220px] overflow-hidden rounded-3xl sm:h-[260px]">
              <Image
                src="/gallery/gallery-4.jpg"
                alt="Dentist consultation"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Image 5 */}
            <div className="relative h-[220px] overflow-hidden rounded-3xl sm:h-[260px]">
              <Image
                src="/gallery/gallery-5.jpg"
                alt="Modern dental clinic"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-5 py-3 mt-6 text-sm font-medium text-white bg-[var(--color2)] rounded-full transition-colors hover:bg-[var(--color4)]"
          >
            View Full Gallery
            <Image
              src="/arrow_forward.svg"
              alt=""
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </Link>
        </div>
      </section>

      {/* INNOVATION */}
      <section className="min-h-auto w-full px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-[90vw] items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="mb-4 text-sm font-medium text-[var(--color2)]">
              OUR APPROACH
            </div>

            <h2
              className="
                text-4xl
                font-medium
                leading-tight
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

          <div className="rounded-3xl bg-[var(--color3)] p-8 text-white sm:p-12">
            <p className="text-sm font-medium uppercase tracking-widest text-white/70">
              Our Philosophy
            </p>

            <h3 className="mt-6 text-3xl font-medium leading-tight sm:text-4xl">
              Contemporary care.
              <br />
              Personal attention.
              <br />
              Healthier smiles.
            </h3>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="
          w-full
          bg-[var(--color4)]
          px-6
          py-24
          text-center
          text-white
          lg:px-10
        "
      >
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-white/60">
            Your Smile Starts Here
          </p>

          <h2
            className="
              mt-4
              text-4xl
              font-medium
              leading-tight
              sm:text-5xl
              lg:text-6xl
            "
          >
            Ready to take care of
            <span className="text-[var(--color2)]"> your smile?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/70">
            Get in touch with Dentists @ The Place and let our team help you
            find the right dental care for your needs.
          </p>

          <a
            href="#contact"
            className="
              mt-8
              inline-flex
              rounded-full
              bg-[var(--color2)]
              px-7 py-3
              text-sm
              font-medium
              text-white
              transition-all
              hover:bg-white
              hover:text-[var(--color4)]
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
