"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import "../globals.css";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div
      data-nav-theme="light"
      className="
        text-[var(--color4)]
        bg-white
      "
    >
      {/* HERO */}
      <section
        className="
          overflow-hidden
          h-[100dvh] w-full
          relative
        "
      >
        {/* IMAGE */}
        <div
          className="
            absolute inset-0 will-change-transform
          "
        >
          <Image
            src="/1.jpg"
            alt="Dentists at The Place"
            fill
            priority
            className="
              object-cover object-center
            "
          />
        </div>

        {/* LIGHT OVERLAY */}
        <div
          className="
            bg-white/25
            absolute inset-0
          "
        />

        {/* EXTRA SOFT GRADIENT */}
        <div
          className="
            bg-gradient-to-r from-white/80 via-white/45 to-white/10
            absolute inset-0
          "
        />

        {/* CONTENT */}
        <div
          className="
            z-10 flex flex-col
            min-h-screen max-w-[90vw]
            mx-auto
            relative
          "
        >
          <Navbar />

          <main
            className="
              flex flex-1 flex-col
              pb-20
              justify-center
            "
          >
            <div
              className="
                max-w-4xl
                will-change-transform
              "
            >
              {/* LABEL */}
              <div
                className="
                  inline-flex
                  mb-5 px-4 py-2
                  text-sm font-medium text-[var(--color4)]
                  bg-white/75
                  rounded-full
                  shadow-sm
                  items-center backdrop-blur-sm
                  sm:text-base
                "
              >
                <span
                  className="
                    mr-2
                    text-[var(--color2)]
                  "
                >
                  •
                </span>
                About Us
              </div>

              {/* HEADING */}
              <h1
                className="
                  text-5xl font-medium leading-[1.05] tracking-tight text-[var(--color4)]
                  sm:text-6xl
                  md:text-7xl
                  lg:text-8xl
                "
              >
                Dental Care for
                <span
                  className="
                    block
                    text-[var(--color2)]
                  "
                >
                  Everyone.
                </span>
              </h1>

              {/* DESCRIPTION */}
              <p
                className="
                  max-w-2xl
                  mt-6
                  text-base font-light leading-relaxed text-[var(--color4)]/80
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
              <div
                className="
                  flex flex-wrap
                  mt-8
                  gap-4
                "
              >
                <Link
                  href="/services"
                  className="
                    px-6 py-3
                    text-sm font-medium text-white
                    bg-[var(--color2)]
                    rounded-full
                    transition-all
                    duration-300 hover:-translate-y-0.5 hover:bg-[var(--color4)]
                    sm:text-base
                  "
                >
                  Explore Our Services
                </Link>

                <Link
                  href="#our-story"
                  className="
                    px-6 py-3
                    text-sm font-medium text-[var(--color4)]
                    bg-white/70
                    rounded-full border border-[var(--color4)]/20
                    transition-all
                    backdrop-blur-sm duration-300 hover:-translate-y-0.5 hover:border-[var(--color2)] hover:bg-[var(--color2)] hover:text-white
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

      {/* WHO WE ARE */}
      <section
        id="our-story"
        className="
          flex
          min-h-screen w-full max-w-[90vw]
          mx-auto py-20
          items-center
        "
      >
        <div
          className="
            grid
            w-full
            items-center gap-14
            lg:grid-cols-2 lg:gap-20
          "
        >
          {/* Text */}
          <div>
            <div
              className="
                inline-flex
                mb-4 px-4 py-2
                text-sm font-medium text-[var(--color4)]
                bg-[var(--color5)]
                rounded-full
                items-center
              "
            >
              <span
                className="
                  mr-2
                  text-[var(--color2)]
                "
              >
                •
              </span>
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
              <span
                className="
                  text-[var(--color2)]
                "
              >
                {" "}
                Oral Healthcare.
              </span>
            </h2>

            <p
              className="
                mt-7
                text-lg font-light leading-relaxed text-gray-600
              "
            >
              Dentists @ The Place is a multidisciplinary clinic located in the
              heart of Westlands, with accessible on-site parking. We provide
              comprehensive general dentistry alongside advanced dental
              procedures.
            </p>

            <p
              className="
                mt-5
                text-lg font-light leading-relaxed text-gray-600
              "
            >
              Our approach to dental care is contemporary and conservative,
              combining qualified dental professionals, innovative therapy, and
              personalised treatment plans to provide care around the individual
              needs of every patient.
            </p>

            <p
              className="
                mt-5
                text-lg font-light leading-relaxed text-gray-600
              "
            >
              From preventive care and routine dental hygiene to advanced
              procedures and complete smile transformations, our goal is to help
              every patient maintain a healthy and confident smile.
            </p>
          </div>

          {/* Image */}
          <div
            className="
              overflow-hidden
              rounded-3xl
              relative
            "
          >
            <Image
              src="/aboutus.png"
              alt="Dental care at Dentists at The Place"
              width={850}
              height={850}
              className="
                object-cover
                h-auto w-full
              "
            />
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section
        className="
          min-h-screen w-full
          px-6 py-20
          bg-[var(--color5)]
          lg:px-10
        "
      >
        <div
          className="
            max-w-[90vw]
            mx-auto
          "
        >
          <div
            className="
              max-w-3xl
            "
          >
            <div
              className="
                mb-4
                text-sm font-medium text-[var(--color2)]
              "
            >
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
              <span
                className="
                  text-[var(--color2)]
                "
              >
                {" "}
                for Everyone.
              </span>
            </h2>

            <p
              className="
                mt-6
                text-lg font-light leading-relaxed text-gray-600
              "
            >
              We provide all aspects of general dentistry together with advanced
              procedures designed to meet a wide range of dental care needs.
            </p>
          </div>

          {/* Services */}
          <div
            className="
              grid
              mt-12
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
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
                  p-6
                  bg-white
                  rounded-2xl
                  transition-all
                  duration-300 hover:-translate-y-1
                "
              >
                <span
                  className="
                    text-sm text-[var(--color2)]
                  "
                >
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

                <h3
                  className="
                    mt-4
                    text-xl font-medium
                  "
                >
                  {service}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm font-light leading-relaxed text-gray-500
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

      {/* GALLERY */}
      <section
        className="
          w-full
          px-6 py-20
          lg:px-10
        "
      >
        <div
          className="
            max-w-[90vw]
            mx-auto
          "
        >
          {/* Gallery Heading */}
          <div
            className="
              max-w-3xl
            "
          >
            <div
              className="
                mb-4
                text-sm font-medium text-[var(--color2)]
              "
            >
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
              <span
                className="
                  text-[var(--color2)]
                "
              >
                {" "}
                Our Dental Care.
              </span>
            </h2>

            <p
              className="
                mt-6
                text-lg font-light leading-relaxed text-gray-600
              "
            >
              Take a closer look at our clinic, our environment, and the spaces
              designed to make every dental visit comfortable.
            </p>
          </div>

          {/* Gallery */}
          <div
            className="
              grid grid-cols-1
              mt-12
              gap-4
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {/* Large Image */}
            <div
              className="
                overflow-hidden
                h-[300px]
                rounded-3xl
                relative
                sm:h-[380px] sm:col-span-2
                lg:h-full lg:row-span-2
              "
            >
              <Image
                src="/img1.jpg"
                alt="Dentists at The Place clinic"
                fill
                className="
                  object-cover
                  transition-transform
                  duration-500 hover:scale-105
                "
              />
            </div>

            {/* Image 2 */}
            <div
              className="
                overflow-hidden
                h-[220px]
                rounded-3xl
                relative
                sm:h-[260px]
              "
            >
              <Image
                src="/img2.jpg"
                alt="Dental treatment room"
                fill
                className="
                  object-cover
                  transition-transform
                  duration-500 hover:scale-105
                "
              />
            </div>

            {/* Image 3 */}
            <div
              className="
                overflow-hidden
                h-[220px]
                rounded-3xl
                relative
                sm:h-[260px]
              "
            >
              <Image
                src="/img3.jpg"
                alt="Dental care at The Place"
                fill
                className="
                  object-cover
                  transition-transform
                  duration-500 hover:scale-105
                "
              />
            </div>

            {/* Image 4 */}
            <div
              className="
                overflow-hidden
                h-[220px]
                rounded-3xl
                relative
                sm:h-[260px]
              "
            >
              <Image
                src="/img4.jpg"
                alt="Dentist consultation"
                fill
                className="
                  object-cover
                  transition-transform
                  duration-500 hover:scale-105
                "
              />
            </div>

            {/* Image 5 */}
            <div
              className="
                overflow-hidden
                h-[220px]
                rounded-3xl
                relative
                sm:h-[260px]
              "
            >
              <Image
                src="/img5.jpg"
                alt="Modern dental clinic"
                fill
                className="
                  object-cover
                  transition-transform
                  duration-500 hover:scale-105
                "
              />
            </div>
          </div>
          <Link
            href="/gallery"
            className="
              inline-flex
              px-5 py-3 mt-6
              text-sm font-medium text-white
              bg-[var(--color2)]
              rounded-full
              transition-colors
              items-center gap-2 hover:bg-[var(--color4)]
            "
          >
            View Full Gallery
            <Image
              src="/arrow_forward.svg"
              alt=""
              width={20}
              height={20}
              className="
                w-5 h-5
              "
            />
          </Link>
        </div>
      </section>

      {/* INNOVATION */}
      <section
        className="
          min-h-auto w-full
          px-6 py-20
          lg:px-10
        "
      >
        <div
          className="
            grid
            max-w-[90vw]
            mx-auto
            items-center gap-14
            lg:grid-cols-2
          "
        >
          <div>
            <div
              className="
                mb-4
                text-sm font-medium text-[var(--color2)]
              "
            >
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
              <span
                className="
                  text-[var(--color2)]
                "
              >
                {" "}
                Qualified Dentists.
              </span>
            </h2>

            <p
              className="
                mt-7
                text-lg font-light leading-relaxed text-gray-600
              "
            >
              We combine modern dental technology with professional expertise to
              provide effective, personalised treatment. Our contemporary
              approach allows us to address both routine dental needs and more
              advanced procedures while keeping patient comfort at the centre of
              care.
            </p>

            <p
              className="
                mt-5
                text-lg font-light leading-relaxed text-gray-600
              "
            >
              Whether you are visiting for preventive care, restorative
              treatment, cosmetic dentistry, or a complete smile transformation,
              our team is committed to providing care tailored to you.
            </p>
          </div>

          <div
            className="
              p-8
              text-white
              bg-[var(--color3)]
              rounded-3xl
              sm:p-12
            "
          >
            <p
              className="
                text-sm font-medium tracking-widest text-white/70
                uppercase
              "
            >
              Our Philosophy
            </p>

            <h3
              className="
                mt-6
                text-3xl font-medium leading-tight
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

      {/* CTA */}
      <section
        className="
          w-full
          px-6 py-24
          text-center text-white
          bg-[var(--color4)]
          lg:px-10
        "
      >
        <div
          className="
            max-w-3xl
            mx-auto
          "
        >
          <p
            className="
              text-sm font-medium tracking-widest text-white/60
              uppercase
            "
          >
            Your Smile Starts Here
          </p>

          <h2
            className="
              mt-4
              text-4xl font-medium leading-tight
              sm:text-5xl
              lg:text-6xl
            "
          >
            Ready to take care of
            <span
              className="
                text-[var(--color2)]
              "
            >
              {" "}
              your smile?
            </span>
          </h2>

          <p
            className="
              max-w-2xl
              mx-auto mt-6
              text-lg font-light leading-relaxed text-white/70
            "
          >
            Get in touch with Dentists @ The Place and let our team help you
            find the right dental care for your needs.
          </p>

          <a
            href="#contact"
            className="
              inline-flex
              mt-8 px-7 py-3
              text-sm font-medium text-white
              bg-[var(--color2)]
              rounded-full
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
