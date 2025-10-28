// components/WaitlistForm.tsx
"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Loader2, Mail, SendHorizonal } from "lucide-react";
import { Button } from "../ui/button";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter your email");

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
          description: "We've got your spot reserved! Stay tuned for updates.",
        });
      } else {
        // Show the success message for a newly added contact
        toast.success("🎉 You're on the waitlist!");
      }

      setEmail("");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // Waitlist Form
    <form onSubmit={handleWaitlist} className="mx-auto max-w-sm w-full">
      <div className="bg-white has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.5rem)] border pr-2 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
        <Mail className="pointer-events-none absolute inset-y-0 left-4 my-auto size-4" />

        <input
          type="email"
          placeholder="Your mail address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 w-full bg-transparent pl-12 focus:outline-none"
        />

        <div className="md:pr-1.5 lg:pr-0">
          <Button
            aria-label="submit"
            size="sm"
            className="rounded-lg"
            disabled={loading}
          >
            <span className="hidden md:block">
              {loading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="animate-spin size-5" />
                  Joining...
                </div>
              ) : (
                "Join Waitlist"
              )}
            </span>
            <SendHorizonal
              className="relative mx-auto size-5 md:hidden"
              strokeWidth={2}
            />
          </Button>
        </div>
      </div>
    </form>
  );
}
