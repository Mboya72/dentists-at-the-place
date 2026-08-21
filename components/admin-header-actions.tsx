"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminHeaderActions() {
  const router = useRouter();
  const supabase = createClient();

  const [loading, setLoading] = useState(false);

  async function handleSignOut() {
    setLoading(true);

    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Sign out error:", error);
      setLoading(false);
      return;
    }

    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {/* Dashboard */}
      <button
        type="button"
        onClick={() => router.push("/admin/testimonials")}
        className="
          hidden
          rounded-full
          border
          border-[var(--color4)]/10
          px-4
          py-2.5
          text-sm
          font-medium
          text-[var(--color4)]
          transition
          hover:bg-[var(--color5)]
          sm:block
        "
      >
        Dashboard
      </button>

      {/* Rejected */}
      <button
        type="button"
        onClick={() => router.push("/admin/rejected")}
        className="
          hidden
          rounded-full
          border
          border-red-200
          px-4
          py-2.5
          text-sm
          font-medium
          text-red-500
          transition
          hover:bg-red-50
          sm:block
        "
      >
        Rejected
      </button>

      {/* View Profile */}
      <button
        type="button"
        onClick={() => router.push("/admin/profile")}
        className="
          rounded-full
          border
          border-[var(--color4)]/10
          px-4
          py-2.5
          text-sm
          font-medium
          text-[var(--color4)]
          transition
          hover:bg-[var(--color5)]
        "
      >
        <span className="sm:hidden">Profile</span>
        <span className="hidden sm:inline">View Profile</span>
      </button>

      {/* Sign Out */}
      <button
        type="button"
        onClick={handleSignOut}
        disabled={loading}
        className="
          rounded-full
          bg-[var(--color4)]
          px-4
          py-2.5
          text-sm
          font-medium
          text-white
          transition
          hover:bg-red-500
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        {loading ? "Signing Out..." : "Sign Out"}
      </button>
    </div>
  );
}