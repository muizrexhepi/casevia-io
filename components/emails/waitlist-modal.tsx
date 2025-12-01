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
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/70 backdrop-blur-md transition-opacity duration-300"
        onClick={closeWaitlist}
      />

      {/* Modal Content */}
      <div className="bg-cream w-full max-w-md p-8 md:p-10 relative z-10 animate-fade-up border border-charcoal/[0.08] shadow-2xl shadow-charcoal/20 rounded-2xl">
        <button
          onClick={closeWaitlist}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-charcoal/5 flex items-center justify-center text-charcoal/40 hover:bg-charcoal/10 hover:text-charcoal transition-all"
          aria-label="Close modal"
        >
          <X size={18} strokeWidth={2} />
        </button>

        {!submitted ? (
          <>
            <div className="mb-8 text-center">
              {/* Icon Container */}
              <div className="w-14 h-14 bg-terracotta/10 flex items-center justify-center mx-auto mb-5 text-terracotta rounded-xl border border-terracotta/20">
                <Sparkles size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-[2rem] md:text-[2.25rem] text-charcoal mb-3 tracking-tight leading-tight">
                Join the waitlist
              </h3>
              <p className="text-charcoal/60 text-[15px] leading-relaxed font-sans font-light">
                Be the first to experience Casevia. We're onboarding new
                marketing teams every week.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-[11px] font-bold text-charcoal/70 uppercase tracking-[0.12em] mb-2.5 font-sans"
                >
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-white border border-charcoal/10 text-charcoal px-5 h-12 text-[15px] font-sans focus:outline-none focus:border-terracotta/50 focus:ring-2 focus:ring-terracotta/20 transition-all placeholder:text-charcoal/30 rounded-xl"
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
                className="w-full bg-charcoal text-cream h-12 text-[15px] font-semibold font-sans hover:bg-terracotta transition-all duration-300 active:scale-[0.98] rounded-full shadow-lg shadow-charcoal/10 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
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

            <div className="mt-7 flex items-center justify-center gap-2 text-[11px] text-charcoal/40 uppercase tracking-[0.12em] font-bold font-sans">
              <ShieldCheck size={14} strokeWidth={2} /> Secure & Spam-free
            </div>
          </>
        ) : (
          <div className="text-center py-8 animate-in fade-in zoom-in duration-300">
            <div className="w-16 h-16 bg-terracotta/10 text-terracotta border-2 border-terracotta/30 flex items-center justify-center mx-auto mb-6 rounded-full">
              <Check size={32} strokeWidth={2.5} />
            </div>
            <h3 className="font-serif text-[2rem] text-charcoal mb-3 tracking-tight">
              You're on the list!
            </h3>
            <p className="text-charcoal/60 text-[15px] font-sans font-light mb-8 leading-relaxed">
              Thanks for your interest. We'll be in touch shortly.
            </p>
            <button
              onClick={closeWaitlist}
              className="text-[13px] font-bold uppercase tracking-[0.08em] text-charcoal/60 hover:text-terracotta transition-colors font-sans inline-flex items-center gap-1.5 border-b-2 border-charcoal/10 hover:border-terracotta pb-1"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
