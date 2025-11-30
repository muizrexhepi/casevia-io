"use client";

import React, { useState, useEffect } from "react";
import { X, Sparkles, ShieldCheck, Loader2, Check } from "lucide-react";
// Ensure you have these imports correctly set up in your project
import { useWaitlistStore } from "@/lib/store";
import { toast } from "sonner";

export const WaitlistModal: React.FC = () => {
  // Use your zustand store state
  const { isOpen, closeWaitlist } = useWaitlistStore();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Lock body scroll when open and reset state on re-open
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setEmail("");
      setError("");
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

    if (!email.trim()) {
      setError("Please enter your email address.");
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

      if (!res.ok) throw new Error("Failed to join waitlist");

      const result = await res.json();

      if (result.exists) {
        toast("You're already on the waitlist!", {
          description: "We'll keep you posted with updates!",
        });
        // Still show success state even if existing
        setSubmitted(true);
      } else {
        toast.success("🎉 You're on the waitlist!");
        setSubmitted(true);
      }

      setEmail("");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 font-sans">
      {/* Backdrop - Uses charcoal with opacity and blur */}
      <div
        className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeWaitlist}
      />

      {/* Modal Content - Uses cream background and rounded-lg corners */}
      <div className="bg-cream w-full max-w-md p-8 md:p-10 relative z-10 animate-fade-up border border-charcoal/10 shadow-2xl shadow-charcoal/20 rounded-lg">
        <button
          onClick={closeWaitlist}
          className="absolute top-4 right-4 text-charcoal/40 hover:text-terracotta transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <div className="mb-8 text-center">
              {/* Icon Container - Using rounded-sm to match brand aesthetic */}
              <div className="w-12 h-12 bg-charcoal flex items-center justify-center mx-auto mb-5 text-cream rounded-sm shadow-lg shadow-charcoal/10">
                <Sparkles size={20} />
              </div>
              <h3 className="text-3xl font-serif text-charcoal mb-3 tracking-tight">
                Join the waitlist
              </h3>
              <p className="text-charcoal/60 text-sm leading-relaxed font-sans">
                Be the first to experience Casevia. We're onboarding new
                marketing teams every week.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-bold text-charcoal/80 uppercase tracking-widest mb-2 font-sans"
                >
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-white/50 border border-charcoal/10 text-charcoal px-4 h-12 text-sm font-sans focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition-all placeholder:text-charcoal/30 rounded-lg"
                  required
                />
                {error && (
                  <p className="text-red-600 text-xs mt-2 font-medium animate-pulse">
                    {error}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-charcoal text-cream h-12 text-sm font-medium font-sans hover:bg-terracotta transition-all duration-300 active:translate-y-0.5 rounded-full shadow-xl shadow-charcoal/10 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Securing spot...</span>
                  </>
                ) : (
                  "Get early access"
                )}
              </button>
            </form>

            <div className="mt-8 flex items-center justify-center gap-2 text-[10px] text-charcoal/40 uppercase tracking-widest font-medium font-sans">
              <ShieldCheck size={12} /> Secure & Spam-free
            </div>
          </>
        ) : (
          <div className="text-center py-10 animate-in fade-in zoom-in duration-300">
            <div className="w-16 h-16 bg-terracotta/10 text-terracotta border border-terracotta/20 flex items-center justify-center mx-auto mb-6 rounded-full">
              <Check size={32} />
            </div>
            <h3 className="text-2xl font-serif text-charcoal mb-2">
              You're on the list!
            </h3>
            <p className="text-charcoal/60 text-sm font-sans mb-8">
              Thanks for your interest. We'll be in touch shortly.
            </p>
            <button
              onClick={closeWaitlist}
              className="text-xs font-bold uppercase tracking-widest border-b border-charcoal/20 hover:border-terracotta hover:text-terracotta transition-colors pb-0.5 font-sans"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
