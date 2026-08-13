"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "../globals.css";
import { galleryImages } from "@/app/galleryImages";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const showPrevious = () => {
    if (selectedImage === null) return;

    setSelectedImage(
      selectedImage === 0
        ? galleryImages.length - 1
        : selectedImage - 1
    );
  };

  const showNext = () => {
    if (selectedImage === null) return;

    setSelectedImage(
      selectedImage === galleryImages.length - 1
        ? 0
        : selectedImage + 1
    );
  };

  // Keyboard controls
  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Prevent background scrolling while lightbox is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <main className="min-h-screen bg-[var(--color1)] text-[var(--color4)]">
      {/* HEADER */}
      <section className="px-5 pt-10 pb-12 sm:px-8 lg:px-[7vw]">
        <div className="mx-auto">
          <Link
            href="/aboutus"
            className="inline-flex items-center gap-2 mb-8 text-sm text-[var(--color2)] transition-colors hover:text-[var(--color4)]"
          >
            ← Back Home
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-1 mb-4 text-sm font-medium bg-gray-100 rounded-full">
              <span className="mr-1">•</span>
              Our Gallery
            </div>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              A Look Inside
              <br />
              <span className="text-[var(--color2)]">
                Our Dental Experience
              </span>
            </h1>

            <p className="max-w-2xl mt-5 text-sm leading-relaxed text-[var(--color4)]/70 sm:text-base">
              Explore our clinic, dental team, treatments, facilities, and the
              environment we have created to make every visit comfortable.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-5 pb-20 sm:px-8 lg:px-[7vw]">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setSelectedImage(index)}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--color2)]"
              aria-label={`Open gallery image ${index + 1}`}
            >
              <Image
                src={`/gallery/${image}`}
                alt={`Dental clinic gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
                <span className="px-4 py-2 text-sm font-medium text-white opacity-0 rounded-full bg-black/40 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  View Image
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 sm:p-6"
          onClick={closeLightbox}
        >
          {/* CLOSE */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute z-30 flex items-center justify-center w-10 h-10 text-2xl text-white rounded-full top-4 right-4 bg-white/10 backdrop-blur-md transition-colors hover:bg-white/20 sm:top-6 sm:right-6"
            aria-label="Close gallery"
          >
            ×
          </button>

          {/* COUNTER */}
          <div className="absolute z-30 px-4 py-2 text-xs text-white rounded-full top-4 left-4 bg-black/40 backdrop-blur-md sm:top-6 sm:left-6 sm:text-sm">
            {selectedImage + 1} / {galleryImages.length}
          </div>

          {/* PREVIOUS */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute z-30 flex items-center justify-center w-10 h-10 text-3xl text-white -translate-y-1/2 rounded-full left-2 top-1/2 bg-white/10 backdrop-blur-md transition-colors hover:bg-white/20 sm:left-6 sm:w-12 sm:h-12"
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* IMAGE */}
          <div
            className="relative w-full h-[75vh] max-w-7xl sm:h-[85vh]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={`/gallery/${galleryImages[selectedImage]}`}
              alt={`Dentists @ The Place gallery image ${
                selectedImage + 1
              }`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          {/* NEXT */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute z-30 flex items-center justify-center w-10 h-10 text-3xl text-white -translate-y-1/2 rounded-full right-2 top-1/2 bg-white/10 backdrop-blur-md transition-colors hover:bg-white/20 sm:right-6 sm:w-12 sm:h-12"
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </main>
  );
}