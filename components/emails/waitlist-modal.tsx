"use client";

import { useWaitlistStore } from "@/lib/store";
import { X, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const WaitlistModal = () => {
  const { isOpen, closeWaitlist } = useWaitlistStore();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // Disable scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Submit logic (same as footer form)
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
          description: "We'll keep you posted with updates!",
        });
      } else {
        toast.success("🎉 You're on the waitlist!");
      }

      setEmail("");
      closeWaitlist(); // Optional — auto closes after success
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-zinc-900/50 backdrop-blur-sm"
        onClick={closeWaitlist}
      />

      {/* Modal */}
      <div className="relative bg-white border border-zinc-200 shadow-2xl max-w-md w-full p-8 animate-scale-in">
        {/* Close button */}
        <button
          onClick={closeWaitlist}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-display font-bold text-zinc-900 mb-2">
          Join the waitlist
        </h2>

        <p className="text-zinc-600 text-sm mb-6">
          Be the first to know when Casevia launches.
        </p>

        {/* Waitlist form */}
        <form onSubmit={handleSubmit} className="space-y-2.5">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 h-12 bg-white border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 transition-colors"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-zinc-900 text-white h-12 text-sm font-bold hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/10 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin h-4 w-4" />
                Joining…
              </>
            ) : (
              "Join waitlist"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
