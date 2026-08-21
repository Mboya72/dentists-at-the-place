"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "../../globals.css";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const supabase = createClient();

      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) {
        setError("Invalid email or password.");
        return;
      }

      // Login successful
      router.push("/admin/testimonials");
      router.refresh();
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--color5)] px-6 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <div
            className="
              mb-4
              inline-flex
              items-center
              rounded-full
              bg-white
              px-4
              py-2
              text-sm
              font-medium
              text-[var(--color4)]
            "
          >
            <span className="mr-2 text-[var(--color2)]">•</span>
            Admin Portal
          </div>

          <h1
            className="
              text-4xl
              font-medium
              tracking-tight
              text-[var(--color4)]
            "
          >
            Welcome back
          </h1>

          <p className="mt-3 text-sm text-[var(--color4)]/50">
            Sign in to manage patient testimonials.
          </p>
        </div>

        {/* Login Card */}
        <form
          onSubmit={handleLogin}
          className="
            rounded-[2rem]
            bg-white
            p-8
            shadow-sm
            sm:p-10
          "
        >
          <div className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="
                  mb-2
                  block
                  text-sm
                  font-medium
                  text-[var(--color4)]
                "
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@dentalclinic.com"
                autoComplete="email"
                required
                disabled={loading}
                className="
                  w-full
                  rounded-xl
                  border
                  border-[var(--color4)]/10
                  bg-[var(--color5)]/40
                  px-4
                  py-3
                  text-sm
                  text-[var(--color4)]
                  outline-none
                  transition
                  placeholder:text-gray-400
                  focus:border-[var(--color2)]
                  focus:ring-2
                  focus:ring-[var(--color2)]/10
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="
                  mb-2
                  block
                  text-sm
                  font-medium
                  text-[var(--color4)]
                "
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                autoComplete="current-password"
                required
                disabled={loading}
                className="
                  w-full
                  rounded-xl
                  border
                  border-[var(--color4)]/10
                  bg-[var(--color5)]/40
                  px-4
                  py-3
                  text-sm
                  text-[var(--color4)]
                  outline-none
                  transition
                  placeholder:text-gray-400
                  focus:border-[var(--color2)]
                  focus:ring-2
                  focus:ring-[var(--color2)]/10
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              />
            </div>

            {/* Error */}
            {error && (
              <div
                role="alert"
                className="
                  rounded-xl
                  bg-red-50
                  px-4
                  py-3
                  text-sm
                  text-red-600
                "
              >
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                rounded-full
                bg-[var(--color4)]
                px-6
                py-3.5
                text-sm
                font-medium
                text-white
                transition
                hover:bg-[var(--color2)]
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </div>
        </form>

        {/* View Testimonials */}
        <div className="mt-5 text-center">
          <Link
            href="/testimonials"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-medium
              text-[var(--color4)]/60
              transition
              hover:text-[var(--color2)]
            "
          >
            <span aria-hidden="true">←</span>
            Back to Patient Testimonials
          </Link>
        </div>

        {/* Security Notice */}
        <p
          className="
            mt-5
            text-center
            text-xs
            text-[var(--color4)]/40
          "
        >
          Authorized clinic staff only.
        </p>
      </div>
    </main>
  );
}
