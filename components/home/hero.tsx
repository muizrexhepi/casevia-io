"use client";

import React, { useState } from "react";
import { ArrowRight, Users, CheckCircle2 } from "lucide-react";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const waitlistCount = 247;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Added to waitlist!");
      setEmail("");
    }, 1500);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden bg-cream">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_20%,#000_70%,transparent_100%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-terracotta/5 blur-[140px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10 py-20 sm:py-24 lg:py-28">
        <div className="flex flex-col items-center text-center">
          {/* Social Proof Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-charcoal/8 shadow-sm mb-12 hover:border-terracotta/25 hover:shadow-md transition-all duration-300 cursor-default">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-terracotta/12">
              <Users className="w-3 h-3 text-terracotta" />
            </span>
            <span className="text-[13px] font-medium text-charcoal/70">
              Join {waitlistCount}+ marketers in beta
            </span>
          </div>

          {/* Main Headline - Improved Typography Hierarchy */}
          <h1 className="font-serif text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-[-0.02em] text-charcoal max-w-5xl mb-7">
            From customer call to
            <br />
            <span className="inline-block mt-1 sm:mt-2">
              polished case study
            </span>
          </h1>

          {/* Subheadline - Better Spacing & Readability */}
          <p className="font-sans text-base sm:text-lg lg:text-xl text-charcoal/70 leading-[1.65] max-w-2xl mb-12 px-4">
            Upload raw audio or video interviews. AI extracts the narrative,
            verifies quotes, and writes a professional story{" "}
            <span className="text-charcoal/90 font-semibold">
              in 15 minutes
            </span>
            .
          </p>

          {/* CTA Form - Improved Mobile Responsiveness */}
          <div className="w-full max-w-[540px] mb-16 px-4 sm:px-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-terracotta/20 via-terracotta/10 to-terracotta/20 rounded-full blur-md opacity-30 group-hover:opacity-50 transition duration-500" />

              <div className="relative flex items-stretch gap-2 p-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-charcoal/10 shadow-lg shadow-black/5">
                <input
                  type="email"
                  placeholder="Enter your work email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-11 sm:h-12 px-4 sm:px-5 bg-transparent text-charcoal text-[15px] placeholder:text-charcoal/40 focus:outline-none rounded-full sm:rounded-none"
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
                />
                <button
                  onClick={handleSubmit}
                  disabled={loading || !email}
                  className="h-11 sm:h-12 px-6 sm:px-7 rounded-full bg-charcoal text-white font-medium text-[14px] hover:bg-terracotta disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-charcoal/15 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span className="hidden sm:inline">Processing...</span>
                    </span>
                  ) : (
                    <>
                      Start free
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>

            <p className="text-center text-xs text-charcoal/40 mt-3.5">
              No credit card required
            </p>
          </div>

          {/* Product Visual - Enhanced Spacing */}
          <div className="relative w-full max-w-6xl">
            <div className="relative rounded-2xl sm:rounded-3xl border border-charcoal/10 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.02),0_20px_70px_-12px_rgba(0,0,0,0.15)] overflow-hidden">
              {/* Browser Chrome */}
              <div className="h-10 sm:h-12 border-b border-charcoal/6 bg-charcoal/[0.015] flex items-center px-4 sm:px-6 gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-charcoal/10" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-charcoal/10" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-charcoal/10" />
                </div>
                <div className="hidden sm:flex ml-3 h-6 w-64 rounded-md bg-charcoal/5 items-center px-3 text-xs text-charcoal/30">
                  app.casevia.io
                </div>
              </div>

              {/* Dashboard Preview */}
              <div className="relative w-full bg-gradient-to-br from-cream/30 via-white to-cream/20">
                <img
                  src={"/images/dashboard.webp"}
                  alt="Dashboard Preview"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Trust Indicators - Improved Spacing */}
          <div className="mt-16 sm:mt-20 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-charcoal/50 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-terracotta" />
              <span>Zero hallucinations</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-terracotta" />
              <span>Verified quotes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-terracotta" />
              <span>Brand-aligned</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
