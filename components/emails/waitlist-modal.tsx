"use client";
import React, { useState, useEffect } from "react";
import { X, Sparkles, ShieldCheck, Loader2, Check } from "lucide-react";
import { useWaitlistStore } from "@/lib/store";
import { toast } from "sonner";

export const WaitlistModal: React.FC = () => {
  const { isOpen, closeWaitlist } = useWaitlistStore();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setError("");
      setEmail("");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error();

      toast.success("🎉 You're on the waitlist!");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 font-sans">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={closeWaitlist}
      />

      {/* Panel */}
      <div className="bg-cream w-full max-w-md p-8 relative z-10 animate-fade-up rounded-2xl border border-charcoal/10 shadow-2xl shadow-black/20">
        {/* Close */}
        <button
          onClick={closeWaitlist}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-charcoal/5 flex items-center justify-center text-charcoal/40 hover:bg-charcoal/10 hover:text-charcoal transition-all"
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <>
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-14 h-14 bg-terracotta/10 rounded-xl border border-terracotta/20 flex items-center justify-center mx-auto mb-4 text-terracotta">
                <Sparkles size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-[2rem] text-charcoal">
                Join the waitlist
              </h3>
              <p className="text-charcoal/60 text-sm mt-1">
                Be the first to access Casevia.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block text-[11px] font-bold text-charcoal/70 uppercase tracking-wide">
                Work Email
              </label>
              <input
                className="w-full bg-white border border-charcoal/10 text-charcoal px-4 h-11 text-[15px] rounded-xl placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-terracotta/20"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                required
              />

              {error && (
                <p className="text-red-600 text-xs mt-1 font-medium">{error}</p>
              )}

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-charcoal text-cream h-12 font-semibold rounded-full hover:bg-terracotta transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Joining...
                  </>
                ) : (
                  "Join Waitlist"
                )}
              </button>
            </form>

            {/* Note */}
            <div className="mt-4 flex items-center justify-center text-[11px] text-charcoal/40 uppercase tracking-wider font-bold">
              <ShieldCheck size={14} className="mr-1" />
              100% secure — no spam
            </div>
          </>
        ) : (
          // Success screen
          <div className="text-center py-10">
            <div className="w-16 h-16 bg-terracotta/10 border border-terracotta/20 rounded-full mx-auto flex items-center justify-center mb-6 text-terracotta">
              <Check size={32} />
            </div>
            <h3 className="font-serif text-[2rem] text-charcoal">
              You're on the list!
            </h3>
            <p className="text-charcoal/60 text-[15px] leading-relaxed font-light mt-2 max-w-sm mx-auto">
              We’ll keep you updated. Stay tuned.
            </p>

            <button
              onClick={closeWaitlist}
              className="mt-6 text-sm text-charcoal/60 hover:text-terracotta border-b border-charcoal/20 pb-1 transition-colors"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
