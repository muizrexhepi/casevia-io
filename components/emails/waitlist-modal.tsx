// components/WaitlistModal.tsx
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in font-sans">
      {/* Dark overlay with higher opacity */}
      <div
        className="absolute inset-0 bg-foreground/70 backdrop-blur-sm"
        onClick={closeWaitlist}
      />

      {/* Modal - Updated border, background, and rounded-xl */}
      <div className="relative bg-card border border-border shadow-2xl max-w-md w-full p-8 rounded-xl animate-scale-in">
        {/* Close button */}
        <button
          onClick={closeWaitlist}
          // Neutral colors for close button
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Title - Using serif font */}
        <h2 className="text-3xl font-serif font-bold text-foreground mb-2">
          Join the waitlist
        </h2>

        {/* Description */}
        <p className="text-muted-foreground text-base mb-6">
          Be the first to know when Casevia launches.
        </p>

        {/* Waitlist form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // Input styling updated for brand
            className="w-full px-4 h-12 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors rounded-lg"
          />

          <button
            type="submit"
            disabled={loading}
            // Button styling updated to use Primary (Terracotta) color
            className="w-full bg-primary text-primary-foreground h-12 text-sm font-bold hover:bg-primary/90 transition-all shadow-md shadow-primary/20 flex items-center justify-center gap-2 rounded-lg disabled:opacity-70"
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
