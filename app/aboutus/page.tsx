"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="relative w-[100vw] h-[100dvh] overflow-hidden">
            {/* Background Image */}
            <Image
              src="/aboutus.jpg"
              alt="Landing page hero image"
              fill
              className="object-cover object-center"
              priority
            />

            {/* Dark Tint Overlay */}
            <div className="absolute inset-0 bg-black/55 pointer-events-none z-0" />

            {/* Content */}
            <div className="min-h-screen relative max-w-[90vw] mx-auto flex flex-col text-white z-10">
              <Navbar />

              <main className="relative max-w-[90vw] pt-50">
                <h1 className="text-5xl font-bold">About Us</h1>
                <p className="mt-6">
                  This is the about us page.
                </p>
              </main>
            </div>
          </section>
  );
}