"use client";

import React, { useState, useEffect } from "react";
import { X, Sparkles, ShieldCheck, Loader2, Check } from "lucide-react";
import { useWaitlistStore } from "@/lib/store";
import { toast } from "sonner";

export const WaitlistModal: React.FC = () => {
  const { isOpen, closeWaitlist } = useWaitlistStore();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    company: "",
    role: "",
    intention: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Handle field change
  const update = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setError("");
      setForm({
        fullName: "",
        email: "",
        company: "",
        role: "",
        intention: "",
      });
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

    if (!form.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await res.json();

      if (result.exists) {
        toast("You're already on the waitlist!", {
          description: "We'll keep you updated.",
        });
      } else {
        toast.success("🎉 You're on the waitlist!");
      }

      setSubmitted(true);
    } catch (err: any) {
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
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeWaitlist}
      />

      {/* Panel */}
      <div className="bg-cream w-full max-w-2xl p-10 relative z-10 animate-fade-up rounded-2xl border border-charcoal/10 shadow-2xl shadow-black/20">
        {/* Close button */}
        <button
          onClick={closeWaitlist}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-charcoal/5 flex items-center justify-center text-charcoal/40 hover:bg-charcoal/10 hover:text-charcoal transition-all"
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <>
            {/* Header */}
            <div className="text-center mb-10">
              <div className="w-14 h-14 bg-terracotta/10 rounded-xl border border-terracotta/20 flex items-center justify-center mx-auto mb-4 text-terracotta">
                <Sparkles size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-[2rem] text-charcoal tracking-tight leading-tight">
                Join the waitlist
              </h3>
              <p className="text-charcoal/60 text-[15px] font-light leading-relaxed mt-2">
                Tell us a bit about you — we onboard based on fit.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* GRID: 2×2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label className="block text-[11px] font-bold text-charcoal/70 uppercase tracking-wide mb-2">
                    Full Name
                  </label>
                  <input
                    className="w-full bg-white border border-charcoal/10 text-charcoal px-4 h-11 text-[15px] rounded-xl placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-terracotta/20"
                    value={form.fullName}
                    onChange={(e) => update("fullName", e.target.value)}
                    placeholder="John Carter"
                    required
                  />
                </div>

                {/* Work Email */}
                <div>
                  <label className="block text-[11px] font-bold text-charcoal/70 uppercase tracking-wide mb-2">
                    Work Email
                  </label>
                  <input
                    className="w-full bg-white border border-charcoal/10 text-charcoal px-4 h-11 text-[15px] rounded-xl placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-terracotta/20"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="name@company.com"
                    required
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-[11px] font-bold text-charcoal/70 uppercase tracking-wide mb-2">
                    Company
                  </label>
                  <input
                    className="w-full bg-white border border-charcoal/10 text-charcoal px-4 h-11 text-[15px] rounded-xl placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-terracotta/20"
                    value={form.company}
                    onChange={(e) => update("company", e.target.value)}
                    placeholder="Acme Inc."
                  />
                </div>

                {/* Role */}
                <div>
                  <label className="block text-[11px] font-bold text-charcoal/70 uppercase tracking-wide mb-2">
                    Role
                  </label>
                  <input
                    className="w-full bg-white border border-charcoal/10 text-charcoal px-4 h-11 text-[15px] rounded-xl placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-terracotta/20"
                    value={form.role}
                    onChange={(e) => update("role", e.target.value)}
                    placeholder="Marketing Lead"
                  />
                </div>
              </div>

              {/* Full-width field */}
              <div>
                <label className="block text-[11px] font-bold text-charcoal/70 uppercase tracking-wide mb-2">
                  What do you want to use Casevia for?
                </label>
                <textarea
                  rows={3}
                  className="w-full bg-white border border-charcoal/10 text-charcoal px-4 py-3 text-[15px] rounded-xl placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-terracotta/20"
                  value={form.intention}
                  onChange={(e) => update("intention", e.target.value)}
                  placeholder="Case studies, social content, sales enablement…"
                />
              </div>

              {error && (
                <p className="text-red-600 text-xs mt-1 font-medium">{error}</p>
              )}

              {/* Submit button */}
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

            {/* Footer */}
            <div className="mt-5 flex items-center justify-center text-[11px] text-charcoal/40 uppercase tracking-wider font-bold">
              <ShieldCheck size={14} className="mr-1" />
              100% secure — no spam
            </div>
          </>
        ) : (
          /** SUCCESS SCREEN */
          <div className="text-center py-10 animate-in fade-in duration-300">
            <div className="w-16 h-16 bg-terracotta/10 border border-terracotta/20 rounded-full mx-auto flex items-center justify-center mb-6 text-terracotta">
              <Check size={32} />
            </div>
            <h3 className="font-serif text-[2rem] text-charcoal">
              You're on the list!
            </h3>
            <p className="text-charcoal/60 text-[15px] leading-relaxed font-light mt-2 max-w-sm mx-auto">
              Thanks for applying — we’ll review your submission and reach out
              soon.
            </p>

            <button
              onClick={closeWaitlist}
              className="mt-7 text-sm text-charcoal/60 hover:text-terracotta border-b border-charcoal/20 pb-1 transition-colors"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
