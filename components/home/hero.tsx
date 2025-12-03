"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Sparkles, Zap, Users } from "lucide-react";
import Image from "next/image";

const Hero: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const waitlistCount = 247;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Added to waitlist!");
      setEmail("");
    }, 1500);
  };

  return (
    // Increased vertical padding (pt-40 pb-36)
    <section className="relative w-full pt-40 pb-36 md:pt-48 md:pb-40 px-6 overflow-hidden bg-cream">
      {/* ============================
          ATMOSPHERE & BACKGROUND
      ============================ */}

      {/* 1. Subtle Grid Pattern */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* 2. Top Spotlight/Glow */}
      {/* Increased blur radius for softer glow (blur-[120px]) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-terracotta/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        {/* ============================
            BADGE (Social Proof/News) - Reinstated and improved
        ============================ */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-charcoal/5 shadow-sm mb-8 hover:border-terracotta/20 transition-colors cursor-default">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-terracotta/10 text-terracotta">
            <Users className="w-3 h-3 fill-terracotta" />
          </span>
          <span className="text-sm font-sans font-medium text-charcoal/60">
            Join {waitlistCount}+ marketers using Casevia Beta
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-charcoal/30 ml-1" />
        </div>

        {/* ============================
            HEADLINE
        ============================ */}
        <h1 className="font-serif text-6xl md:text-7xl lg:text-[6rem] leading-[1.05] tracking-tight text-charcoal max-w-5xl mx-auto mb-8">
          From customer call to <br className="hidden md:block" />
          <span className="relative inline-block">
            polished case study
            {/* Subtle underline decoration */}
            <svg
              className="absolute w-full h-3 -bottom-1 left-0 text-terracotta/30"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0 5 Q 50 10 100 5"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
            </svg>
          </span>
        </h1>

        {/* ============================
            SUBHEADLINE
        ============================ */}
        <p className="font-sans text-xl md:text-2xl text-charcoal/60 leading-relaxed max-w-3xl mx-auto mb-12 font-light">
          Upload a raw interview. AI extracts the narrative arc, verifies the
          quotes, and writes a professional story{" "}
          <span className="text-charcoal font-medium">in 30 minutes</span>.
        </p>

        {/* ============================
            INPUT FORM (Mintlify Style)
        ============================ */}
        <div className="w-full max-w-lg relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-terracotta/20 via-charcoal/5 to-terracotta/20 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

          <form
            onSubmit={handleSubmit}
            className="relative flex items-center p-1.5 rounded-full bg-white border border-charcoal/10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]"
          >
            <input
              type="email"
              placeholder="Enter your work email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 px-6 bg-transparent text-charcoal placeholder:text-charcoal/40 focus:outline-none text-[15px] font-sans"
            />
            <button
              type="submit"
              disabled={loading}
              className="h-11 px-6 rounded-full bg-charcoal text-white font-sans font-medium text-sm hover:bg-terracotta transition-all duration-300 shadow-lg shadow-charcoal/20 flex items-center gap-2 whitespace-nowrap"
            >
              {loading ? (
                <span className="animate-pulse">Processing...</span>
              ) : (
                <>
                  Start for free <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-xs text-charcoal/40 mt-4 font-sans">
            No credit card required • 14-day free trial
          </p>
        </div>

        {/* ============================
            PRODUCT VISUAL (The "Hero" Shot)
        ============================ */}
        {/* Max width increased to 7xl, slightly larger container */}
        <div className="relative w-full max-w-7xl mt-24 md:mt-32">
          {/* The "Aurora" Glow behind the image - increased size/blur */}
          <div className="absolute -inset-6 md:-inset-16 bg-gradient-to-t from-terracotta/30 via-terracotta/10 to-transparent blur-3xl opacity-50 rounded-[50%]" />

          {/* The Dashboard Container */}
          <div className="relative rounded-3xl border border-charcoal/10 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_25px_80px_-15px_rgba(0,0,0,0.15)] overflow-hidden">
            {/* Simple Browser Chrome / Header */}
            <div className="h-12 border-b border-charcoal/5 bg-charcoal/[0.02] flex items-center px-6 gap-2">
              <div className="w-3 h-3 rounded-full bg-charcoal/10"></div>
              <div className="w-3 h-3 rounded-full bg-charcoal/10"></div>
              <div className="w-3 h-3 rounded-full bg-charcoal/10"></div>
              <div className="ml-4 h-6 w-80 rounded-md bg-charcoal/5"></div>
            </div>

            {/* Image */}
            <Image
              src="/images/dashboard.webp" // Ensure you have this or use a placeholder
              alt="Casevia Dashboard"
              width={1600}
              height={1000}
              className="w-full h-auto object-cover"
              priority
            />

            {/* Floating UI Badge (Optional - adds depth) */}
            <div className="absolute bottom-10 right-10 bg-white/90 backdrop-blur-md border border-charcoal/10 p-5 rounded-xl shadow-2xl hidden md:block animate-[float_4s_ease-in-out_infinite]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-sans text-charcoal/50 uppercase tracking-wide">
                    Status
                  </p>
                  <p className="text-sm font-sans font-bold text-charcoal">
                    Draft Generated
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================
            FEATURES ROW (Bigger Blocks)
        ============================ */}
        {/* Increased vertical margin and max-width for prominence */}
        {/* <div className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl border-t border-charcoal/10 pt-12">
          {[
            {
              icon: Zap,
              title: "Instant Drafts",
              desc: "Go from a 45-minute audio recording to a structured case study draft in less than 2 minutes.",
            },
            {
              icon: CheckCircle2,
              title: "Zero Hallucinations",
              desc: "Every claim and quote in the final asset is automatically linked and verified against the original audio timestamp.",
            },
            {
              icon: Sparkles,
              title: "Brand Aligned AI",
              desc: "Custom AI models are trained on your existing content library to perfectly match your unique brand tone and style guide.",
            },
          ].map((feature, i) => (
            // Feature Block - Increased Text Size and spacing
            <div
              key={i}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-terracotta/10 flex items-center justify-center text-terracotta mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-charcoal mb-2">
                {feature.title}
              </h3>
              <p className="font-sans text-base text-charcoal/70 leading-relaxed max-w-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
