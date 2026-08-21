import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import "../../globals.css";

export default async function AdminProfilePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/api/admin/login");
  }

  return (
    <main className="min-h-screen bg-[var(--color5)]">
      {/* Header */}
      <header className="border-b border-[var(--color4)]/10 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-sm font-medium text-[var(--color2)]">
              Admin Portal
            </p>

            <h1 className="mt-1 text-2xl font-medium text-[var(--color4)]">
              Profile
            </h1>
          </div>

          <Link
            href="/admin/testimonials"
            className="
              rounded-full
              border
              border-[var(--color4)]/10
              px-5
              py-2.5
              text-sm
              font-medium
              text-[var(--color4)]
              transition
              hover:bg-[var(--color5)]
            "
          >
            Back to Dashboard
          </Link>
        </div>
      </header>

      {/* Profile */}
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm sm:p-10">
          {/* Avatar */}
          <div className="flex flex-col items-center text-center">
            <div
              className="
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-full
                bg-[var(--color2)]/10
                text-3xl
                font-medium
                text-[var(--color2)]
              "
            >
              {user.email?.charAt(0).toUpperCase() ?? "A"}
            </div>

            <h2 className="mt-5 text-2xl font-medium text-[var(--color4)]">
              Admin
            </h2>

            <p className="mt-1 text-sm text-[var(--color4)]/50">
              Clinic Administrator
            </p>
          </div>

          {/* Account Information */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl bg-[var(--color5)] p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-[var(--color4)]/40">
                Email Address
              </p>

              <p className="mt-2 break-all text-sm font-medium text-[var(--color4)]">
                {user.email}
              </p>
            </div>

            <div className="rounded-2xl bg-[var(--color5)] p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-[var(--color4)]/40">
                Account ID
              </p>

              <p className="mt-2 break-all text-sm font-medium text-[var(--color4)]">
                {user.id}
              </p>
            </div>

            <div className="rounded-2xl bg-[var(--color5)] p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-[var(--color4)]/40">
                Account Status
              </p>

              <div className="mt-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500" />

                <span className="text-sm font-medium text-[var(--color4)]">
                  Active
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-[var(--color5)] p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-[var(--color4)]/40">
                Role
              </p>

              <p className="mt-2 text-sm font-medium text-[var(--color4)]">
                Administrator
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}