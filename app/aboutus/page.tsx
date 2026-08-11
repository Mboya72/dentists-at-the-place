"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import "../globals.css";

export default function AboutUs() {
  return (
    <section className="overflow-hidden relative w-[100vw] h-[100dvh]">
            {/* Background Image */}
            <Image
              src="/aboutus.jpg"
              alt="Landing page hero image"
              fill
              className="object-cover object-center"
              priority
            />

            {/* Dark Tint Overlay */}
            <div className="z-0 absolute inset-0 bg-black/55 pointer-events-none" />

            {/* Content */}
            <div className="z-10 relative flex flex-col mx-auto min-h-screen max-w-[90vw] text-white">
              <Navbar />

              <main className="relative pt-50 max-w-[90vw]">
                <h1 className="text-5xl font-bold">About Us</h1>
                <p className="mt-6">
                  This is the about us page.
                </p>
              </main>
            </div>
          </section>
  );
}