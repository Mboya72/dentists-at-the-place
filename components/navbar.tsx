
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [navTheme, setNavTheme] = useState<"light" | "dark">("dark");

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/aboutus", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/dentists", label: "The Dentists" },
    { href: "/testimonials", label: "Testimonials" },
  ];

  useEffect(() => {
    const updateNavTheme = () => {
      const sections = document.querySelectorAll<HTMLElement>(
        "[data-nav-theme]"
      );

      // Check the area directly underneath the navbar
      const navY = 40;

      let currentTheme: "light" | "dark" = "dark";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= navY && rect.bottom > navY) {
          const theme = section.dataset.navTheme;

          if (theme === "light" || theme === "dark") {
            currentTheme = theme;
          }
        }
      });

      setNavTheme(currentTheme);
    };

    // Wait until the page has rendered
    const frame = requestAnimationFrame(updateNavTheme);

    window.addEventListener("scroll", updateNavTheme, { passive: true });
    window.addEventListener("resize", updateNavTheme);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateNavTheme);
      window.removeEventListener("resize", updateNavTheme);
    };
  }, []);

  const isDark = navTheme === "dark";

  return (
    <header className="z-50 absolute top-0 left-0 right-0 flex items-center justify-between py-6 mx-auto max-w-[90vw]">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={60}
          height={60}
          className="h-10 w-auto"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden items-center space-x-10 md:flex lg:space-x-20">
        <nav
          className={`flex items-center text-md font-light space-x-8 lg:space-x-[4vw] transition-colors duration-300 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`pb-1 transition-colors hover:text-[var(--color2)] ${
                pathname === item.href
                  ? "text-[var(--color2)] font-medium border-b-4 border-[var(--color2)] rounded-sm"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact Us Button */}
        <Link href="#contact">
          <button className="px-5 py-3 text-[#0399B0] font-medium bg-white rounded-md shadow-sm transition-all duration-200 cursor-pointer hover:bg-[var(--color2)] hover:text-white active:scale-95">
            Contact Us
          </button>
        </Link>
      </div>

      {/* Hamburger */}
      <button
        className="z-50 flex flex-col justify-center gap-1.5 cursor-pointer md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        <span
          className={`block h-0.5 w-7 transition ${
            isDark ? "bg-white" : "bg-black"
          } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
        />

        <span
          className={`block h-0.5 w-7 transition ${
            isDark ? "bg-white" : "bg-black"
          } ${menuOpen ? "opacity-0" : ""}`}
        />

        <span
          className={`block h-0.5 w-7 transition ${
            isDark ? "bg-white" : "bg-black"
          } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
        />
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-[70dvh] w-72 bg-white/20 backdrop-blur-xl border border-white/30 shadow-xl transform transition-transform duration-300 md:hidden z-40 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav
          className={`flex flex-col items-start gap-8 pt-28 px-8 text-lg ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`transition-colors hover:text-[var(--color2)] ${
                pathname === item.href
                  ? "text-[var(--color2)] font-semibold"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="#contact"
            className="w-full"
            onClick={() => setMenuOpen(false)}
          >
            <button className="mt-4 py-3 w-full text-[#0399B0] font-medium bg-white rounded-md shadow-md transition-all duration-200 cursor-pointer hover:bg-[var(--color2)] hover:text-white active:scale-[0.98]">
              Contact Us
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

