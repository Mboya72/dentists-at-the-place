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
    { href: "/the_team", label: "Our Team" },
    { href: "/testimonials", label: "Testimonials" },
  ];

  useEffect(() => {
    const updateNavTheme = () => {
      const sections =
        document.querySelectorAll<HTMLElement>("[data-nav-theme]");

      // Position directly underneath the navbar
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
    <header className="absolute top-0 left-0 right-0 z-50 mx-auto flex max-w-[90vw] items-center justify-between py-6">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={60}
          height={60}
          className="h-10 w-auto"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden items-center space-x-10 md:flex lg:space-x-20">
        <nav
          className={`flex items-center space-x-8 text-md font-light transition-colors duration-300 lg:space-x-[4vw] ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`pb-1 transition-colors duration-300 hover:text-[var(--color2)] ${
                pathname === item.href
                  ? "rounded-sm border-b-4 border-[var(--color3)] font-medium text-[var(--color3)]"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact Us */}
        <Link href="/#contact">
          <button
            className={`
      cursor-pointer rounded-md px-5 py-3 font-medium
      shadow-sm transition-all duration-300
      active:scale-95
      ${
        isDark
          ? `
            bg-white text-[var(--color3)]
            hover:bg-[var(--color2)] hover:text-white
          `
          : `
            bg-[var(--color3)] text-white
            hover:bg-[var(--color4)] hover:text-white
          `
      }
    `}
          >
            Contact Us
          </button>
        </Link>
      </div>

      {/* Hamburger */}
      <button
        className="z-50 flex cursor-pointer flex-col justify-center gap-1.5 md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
        aria-expanded={menuOpen}
      >
        <span
          className={`
            block h-0.5 w-7 transition-all duration-300
            ${isDark ? "bg-white" : "bg-black"}
            ${menuOpen ? "translate-y-2 rotate-45" : ""}
          `}
        />

        <span
          className={`
            block h-0.5 w-7 transition-all duration-300
            ${isDark ? "bg-white" : "bg-black"}
            ${menuOpen ? "opacity-0" : ""}
          `}
        />

        <span
          className={`
            block h-0.5 w-7 transition-all duration-300
            ${isDark ? "bg-white" : "bg-black"}
            ${menuOpen ? "-translate-y-2 -rotate-45" : ""}
          `}
        />
      </button>

      {/* Mobile Menu */}
      <div
        className={`
          fixed top-0 right-0 z-40 h-[70dvh] w-72
          transform border shadow-xl
          backdrop-blur-xl
          transition-transform duration-300
          md:hidden
          ${
            isDark
              ? "border-white/20 bg-black/20"
              : "border-black/10 bg-white/80"
          }
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <nav
          className={`
            flex flex-col items-start gap-8 px-8 pt-28 text-lg
            ${isDark ? "text-white" : "text-black"}
          `}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`
                transition-colors duration-300
                hover:text-[var(--color3)]
                ${
                  pathname === item.href
                    ? "font-semibold text-[var(--color2)]"
                    : ""
                }
              `}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile Contact Us */}
          <Link
            href="/#contact"
            className="w-full"
            onClick={() => setMenuOpen(false)}
          >
            <button
              className={`
      mt-4 w-full rounded-md py-3
      font-medium shadow-md
      transition-all duration-300
      active:scale-[0.98]
      ${
        isDark
          ? `
            bg-white text-[var(--color3)]
            hover:bg-[var(--color2)] hover:text-white
          `
          : `
            bg-[var(--color3)] text-white
            hover:bg-[var(--color4)] hover:text-white
          `
      }
    `}
            >
              Contact Us
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
