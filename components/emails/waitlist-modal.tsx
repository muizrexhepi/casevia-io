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

  // --- STYLING MAPPINGS ---
  // Hero Primary Color (Dark Blue BG): #1e3266
  // Hero Accent/Text Color (Light): text-white, text-blue-100 (for secondary text)
  // Hero CTA Button Color (Primary): bg-white / text-slate-900 (for the current hero's primary CTA)
  // New Accent/Icon Color: text-blue-500 (A clear contrast to the dark theme)

  const ModalBgColor = "bg-white"; // Use white/light gray for the panel for maximum contrast
  const HeaderTextColor = "text-slate-900"; // Dark text on light background
  const SecondaryTextColor = "text-slate-500";
  const AccentColor = "text-blue-600"; // The main blue accent color
  const AccentBg = "bg-blue-600/10"; // Light blue background for icons/success
  const PrimaryButtonClass =
    "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 font-sans">
      {/* Backdrop - Uses the same dark/blur effect as the mobile menu portal */}
      <div
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
        onClick={closeWaitlist}
      />

      {/* Panel */}
      <div
        className={`${ModalBgColor} w-full max-w-md p-8 relative z-10 animate-fade-up rounded-2xl border border-slate-100 shadow-2xl shadow-black/30`}
      >
        {/* Close Button */}
        <button
          onClick={closeWaitlist}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-all"
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <>
            {/* Header */}
            <div className="text-center mb-8">
              <div
                className={`w-14 h-14 ${AccentBg} rounded-xl border border-blue-600/20 flex items-center justify-center mx-auto mb-4 ${AccentColor}`}
              >
                <Sparkles size={24} strokeWidth={1.5} />
              </div>
              <h3 className={`font-serif text-[2rem] ${HeaderTextColor}`}>
                Get Early Access
              </h3>
              <p className={`${SecondaryTextColor} text-sm mt-1`}>
                Reserve your spot to be the first to access our powerful
                features.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wide">
                Work Email
              </label>
              <input
                className={`w-full bg-white border border-slate-200 text-slate-900 px-4 h-11 text-[15px] rounded-xl placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all`}
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
                className={`w-full h-12 font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 ${PrimaryButtonClass}`}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Joining...
                  </>
                ) : (
                  "Get Early Access"
                )}
              </button>
            </form>

            {/* Note */}
            <div
              className={`mt-4 flex items-center justify-center text-[11px] ${SecondaryTextColor} uppercase tracking-wider font-bold`}
            >
              <ShieldCheck size={14} className="mr-1" />
              100% secure — no spam
            </div>
          </>
        ) : (
          // Success screen
          <div className="text-center py-10">
            <div
              className={`w-16 h-16 ${AccentBg} border border-blue-600/20 rounded-full mx-auto flex items-center justify-center mb-6 ${AccentColor}`}
            >
              <Check size={32} />
            </div>
            <h3 className={`font-serif text-[2rem] ${HeaderTextColor}`}>
              Access secured!
            </h3>
            <p
              className={`${SecondaryTextColor} text-[15px] leading-relaxed font-light mt-2 max-w-sm mx-auto`}
            >
              You've successfully secured early access. We'll notify you when
              it's your turn.
            </p>

            <button
              onClick={closeWaitlist}
              className={`mt-6 text-sm ${SecondaryTextColor} hover:text-blue-600 border-b border-slate-300 pb-1 transition-colors`}
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
