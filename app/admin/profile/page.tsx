"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "../../globals.css";

export default function AdminProfilePage() {
  const router = useRouter();
  const supabase = createClient();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [changingPassword, setChangingPassword] = useState(false);

  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  /*
   * LOAD USER
   */
  useEffect(() => {
    async function loadProfile() {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
          router.replace("/admin/login");
          return;
        }

        setUserId(user.id);
        setEmail(user.email ?? "");

        setFullName(
          user.user_metadata?.full_name ?? user.user_metadata?.name ?? "Admin"
        );

        setAvatarUrl(user.user_metadata?.avatar_url ?? "");
      } catch (err) {
        console.error("Profile loading error:", err);
        setError("Unable to load your profile.");
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, [router, supabase]);

  /*
   * SAVE PROFILE DETAILS
   */
  async function handleSave() {
    setSaving(true);
    setError("");
    setMessage("");

    try {
      const trimmedName = fullName.trim();
      const trimmedEmail = email.trim();

      if (!trimmedName) {
        setError("Please enter your full name.");
        setSaving(false);
        return;
      }

      if (!trimmedEmail) {
        setError("Please enter your email address.");
        setSaving(false);
        return;
      }

      const { error } = await supabase.auth.updateUser({
        email: trimmedEmail,
        data: {
          full_name: trimmedName,
          avatar_url: avatarUrl,
        },
      });

      if (error) {
        console.error("Profile update error:", error);
        setError(error.message);
        setSaving(false);
        return;
      }

      setMessage("Profile updated successfully.");
    } catch (err) {
      console.error("Profile update error:", err);
      setError("Unable to update your profile.");
    } finally {
      setSaving(false);
    }
  }

  /*
   * UPLOAD AVATAR
   */
  async function handleAvatarUpload(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    try {
      setError("");
      setMessage("");

      const file = event.target.files?.[0];

      if (!file) {
        return;
      }

      if (!userId) {
        setError("Unable to identify your account.");
        return;
      }

      if (!file.type.startsWith("image/")) {
        setError("Please select an image file.");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setError("Image must be smaller than 5MB.");
        return;
      }

      setUploading(true);

      /*
       * Get authenticated user again.
       * This ensures the Supabase session is available
       * when Storage RLS evaluates the upload.
       */
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        setError("Your session has expired. Please sign in again.");
        router.replace("/admin/login");
        return;
      }

      /*
       * Use the user's ID as the first folder.
       *
       * avatars/
       *   USER_ID/
       *     avatar.jpg
       */
      const filePath = `${user.id}/avatar`;

      /*
       * Remove previous avatar if one exists.
       *
       * We use the same filename and upsert it.
       */
      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file, {
          upsert: true,
          contentType: file.type,
          cacheControl: "3600",
        });

      if (uploadError) {
        console.error("Avatar upload error:", uploadError);

        setError(`Unable to upload profile picture: ${uploadError.message}`);

        return;
      }

      /*
       * Get public URL
       */
      const {
        data: { publicUrl },
      } = supabase.storage.from("avatars").getPublicUrl(filePath);

      /*
       * Add cache-busting timestamp so the browser
       * immediately displays the new image.
       */
      const updatedAvatarUrl = `${publicUrl}?t=${Date.now()}`;

      setAvatarUrl(updatedAvatarUrl);

      /*
       * Save avatar URL to Supabase Auth metadata
       */
      const { error: updateError } = await supabase.auth.updateUser({
        data: {
          avatar_url: updatedAvatarUrl,
          full_name: fullName.trim(),
        },
      });

      if (updateError) {
        console.error("Avatar profile update error:", updateError);

        setError(updateError.message);
        return;
      }

      setMessage("Profile picture updated successfully.");
    } catch (err) {
      console.error("Avatar upload error:", err);
      setError("Unable to upload profile picture.");
    } finally {
      setUploading(false);

      /*
       * Reset input so selecting the same image again
       * still triggers onChange.
       */
      event.target.value = "";
    }
  }

  /*
   * CHANGE PASSWORD
   */
  async function handlePasswordChange() {
    setError("");
    setMessage("");

    if (!newPassword) {
      setError("Please enter a new password.");
      return;
    }

    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setChangingPassword(true);

    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) {
        console.error("Password update error:", error);

        setError(error.message);
        return;
      }

      setNewPassword("");
      setConfirmPassword("");

      setMessage("Password changed successfully.");
    } catch (err) {
      console.error("Password update error:", err);

      setError("Unable to change your password.");
    } finally {
      setChangingPassword(false);
    }
  }

  /*
   * SIGN OUT
   */
  async function handleSignOut() {
    await supabase.auth.signOut();
    router.replace("/admin/login");
    router.refresh();
  }

  /*
   * LOADING
   */
  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[var(--color5)]">
        <p className="text-sm text-[var(--color4)]/50">Loading profile...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--color5)]">
      {/* HEADER */}
      <header className="border-b border-[var(--color4)]/10 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-5">
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
            className="rounded-full border border-[var(--color4)]/10 px-5 py-2.5 text-sm font-medium text-[var(--color4)] transition hover:bg-[var(--color5)]"
          >
            Back to Dashboard
          </Link>
        </div>
      </header>

      {/* CONTENT */}
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm sm:p-10">
          {/* PROFILE HEADER */}
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt="Profile picture"
                  className="h-30 w-30 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-30 w-30 items-center justify-center rounded-full bg-[var(--color2)]/10 text-4xl font-medium text-[var(--color2)]">
                  {(fullName || email || "A").charAt(0).toUpperCase()}
                </div>
              )}

              {/* UPLOAD BUTTON */}
              <label
                htmlFor="avatar"
                className="absolute bottom-0 right-0 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[var(--color4)] text-white shadow-md transition hover:bg-[var(--color2)]"
                title="Change profile picture"
              >
                ✎
              </label>

              <input
                id="avatar"
                type="file"
                accept="image/jpeg,image/png,image/webp,image/gif"
                onChange={handleAvatarUpload}
                className="hidden"
                disabled={uploading}
              />
            </div>

            <h2 className="mt-5 text-2xl font-medium text-[var(--color4)]">
              {fullName || "Admin"}
            </h2>

            <p className="mt-1 text-sm text-[var(--color4)]/50">
              Clinic Administrator
            </p>

            {uploading && (
              <p className="mt-3 text-xs text-[var(--color2)]">
                Uploading profile picture...
              </p>
            )}
          </div>

          {/* MESSAGES */}
          {error && (
            <div className="mt-8 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {message && (
            <div className="mt-8 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-600">
              {message}
            </div>
          )}

          {/* ACCOUNT DETAILS */}
          <section className="mt-10">
            <div className="mb-6">
              <h3 className="text-xl font-medium text-[var(--color4)]">
                Account Details
              </h3>

              <p className="mt-1 text-sm text-[var(--color4)]/50">
                Update your administrator information.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {/* FULL NAME */}
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-medium text-[var(--color4)]"
                >
                  Full Name
                </label>

                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Administrator"
                  className="w-full rounded-xl border border-[var(--color4)]/10 bg-[var(--color5)]/40 px-4 py-3 text-sm text-[var(--color4)] outline-none transition placeholder:text-gray-400 focus:border-[var(--color2)] focus:ring-2 focus:ring-[var(--color2)]/10"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[var(--color4)]"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@dentalclinic.com"
                  className="w-full rounded-xl border border-[var(--color4)]/10 bg-[var(--color5)]/40 px-4 py-3 text-sm text-[var(--color4)] outline-none transition placeholder:text-gray-400 focus:border-[var(--color2)] focus:ring-2 focus:ring-[var(--color2)]/10"
                />

                <p className="mt-2 text-xs text-[var(--color4)]/40">
                  Supabase may require email confirmation after changing your
                  email.
                </p>
              </div>
            </div>

            {/* SAVE */}
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={handleSave}
                disabled={saving || uploading}
                className="rounded-full bg-[var(--color4)] px-7 py-3 text-sm font-medium text-white transition hover:bg-[var(--color2)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </section>

          {/* PASSWORD */}
          {/* PASSWORD */}
          <section className="mt-10 border-t border-[var(--color4)]/10 pt-10">
            <div className="mb-6">
              <h3 className="text-xl font-medium text-[var(--color4)]">
                Change Password
              </h3>

              <p className="mt-1 text-sm text-[var(--color4)]/50">
                Update the password used to access the admin portal.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {/* NEW PASSWORD */}
<div>
  <label
    htmlFor="newPassword"
    className="mb-2 block text-sm font-medium text-[var(--color4)]"
  >
    New Password
  </label>

  <div className="relative">
    <input
      id="newPassword"
      type={showNewPassword ? "text" : "password"}
      value={newPassword}
      onChange={(e) => setNewPassword(e.target.value)}
      placeholder="••••••••"
      autoComplete="new-password"
      className="w-full rounded-xl border border-[var(--color4)]/10 bg-[var(--color5)]/40 px-4 py-3 pr-12 text-sm text-[var(--color4)] outline-none transition placeholder:text-gray-400 focus:border-[var(--color2)] focus:ring-2 focus:ring-[var(--color2)]/10"
    />

    <button
      type="button"
      onClick={() => setShowNewPassword((prev) => !prev)}
      className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color4)]/40 transition hover:text-[var(--color2)]"
      aria-label={showNewPassword ? "Hide password" : "Show password"}
    >
      {showNewPassword ? (
        /* Eye Off */
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3l18 18"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.58 10.58a2 2 0 002.83 2.83"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.88 4.24A9.77 9.77 0 0112 4c5 0 8.5 4 9.5 8a11.8 11.8 0 01-2.16 4.11"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.61 6.61C4.73 7.92 3.45 9.73 2.5 12c1 4 4.5 8 9.5 8 1.61 0 3.07-.4 4.39-1.1"
          />
        </svg>
      ) : (
        /* Eye */
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7z"
          />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      )}
    </button>
  </div>
</div>

{/* CONFIRM PASSWORD */}
<div>
  <label
    htmlFor="confirmPassword"
    className="mb-2 block text-sm font-medium text-[var(--color4)]"
  >
    Confirm Password
  </label>

  <div className="relative">
    <input
      id="confirmPassword"
      type={showConfirmPassword ? "text" : "password"}
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      placeholder="••••••••"
      autoComplete="new-password"
      className="w-full rounded-xl border border-[var(--color4)]/10 bg-[var(--color5)]/40 px-4 py-3 pr-12 text-sm text-[var(--color4)] outline-none transition placeholder:text-gray-400 focus:border-[var(--color2)] focus:ring-2 focus:ring-[var(--color2)]/10"
    />

    <button
      type="button"
      onClick={() => setShowConfirmPassword((prev) => !prev)}
      className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color4)]/40 transition hover:text-[var(--color2)]"
      aria-label={
        showConfirmPassword
          ? "Hide confirm password"
          : "Show confirm password"
      }
    >
      {showConfirmPassword ? (
        /* Eye Off */
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3l18 18"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.58 10.58a2 2 0 002.83 2.83"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.88 4.24A9.77 9.77 0 0112 4c5 0 8.5 4 9.5 8a11.8 11.8 0 01-2.16 4.11"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.61 6.61C4.73 7.92 3.45 9.73 2.5 12c1 4 4.5 8 9.5 8 1.61 0 3.07-.4 4.39-1.1"
          />
        </svg>
      ) : (
        /* Eye */
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7z"
          />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      )}
    </button>
  </div>
</div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={handlePasswordChange}
                disabled={changingPassword}
                className="rounded-full border border-[var(--color4)]/10 px-7 py-3 text-sm font-medium text-[var(--color4)] transition hover:bg-[var(--color5)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {changingPassword ? "Updating..." : "Change Password"}
              </button>
            </div>
          </section>

          {/* ACCOUNT */}
          <section className="mt-10 border-t border-[var(--color4)]/10 pt-10">
            <h3 className="text-xl font-medium text-[var(--color4)]">
              Account
            </h3>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {/* STATUS */}
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

              {/* ROLE */}
              <div className="rounded-2xl bg-[var(--color5)] p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-[var(--color4)]/40">
                  Role
                </p>

                <p className="mt-2 text-sm font-medium text-[var(--color4)]">
                  Administrator
                </p>
              </div>
            </div>
          </section>

          {/* SIGN OUT */}
          <section className="mt-10 border-t border-[var(--color4)]/10 pt-10">
            <button
              type="button"
              onClick={handleSignOut}
              className="rounded-full bg-red-50 px-7 py-3 text-sm font-medium text-red-600 transition hover:bg-red-100"
            >
              Sign Out
            </button>
          </section>
        </div>
      </div>
    </main>
  );
}
