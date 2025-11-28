// components/WaitlistForm.tsx
"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Loader2, Mail, SendHorizonal } from "lucide-react";
import { Button } from "../ui/button";

// inside Footer component, replace your <div className="flex ..."> with this:

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Failed to join waitlist");

      const result = await res.json();

      if (result.exists) {
        toast("You're already on the waitlist!", {
          description: "Thanks for sticking with us — big updates coming soon.",
        });
      } else {
        toast.success("🎉 You're officially on the waitlist!");
      }

      setEmail("");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md justify-center items-center mt-4"
    >
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-white border border-zinc-300 text-zinc-900 px-4 py-3 text-sm flex-1 focus:outline-none focus:ring-2 focus:ring-zinc-300 placeholder:text-zinc-500"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-zinc-900 text-white px-6 py-3 text-sm font-bold uppercase tracking-wide hover:bg-zinc-800 transition-colors flex items-center gap-2"
      >
        {loading ? (
          <>
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
            Joining…
          </>
        ) : (
          "Join Waitlist"
        )}
      </button>
    </form>
  );
}
