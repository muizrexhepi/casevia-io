"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Play, X } from "lucide-react";
import { toast } from "sonner";
import LogoCloudTwo from "./logo-cloud";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showFullDemo, setShowFullDemo] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Enter a valid email");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Failed");

      const result = await res.json();
      setEmail("");

      if (result.exists) {
        toast("you're already on the waitlist ✨", {
          description: "we’ll keep you posted with updates",
        });
      } else {
        toast.success(`🎉 you’re #${result.queuePosition} in line`, {
          description: "first 100 get lifetime 50% off",
        });
      }
    } catch (err) {
      console.error(err);
      toast.error("something went wrong. try again?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="hero-section relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden bg-cream">
        {/* Grid + Glow Background */}
        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_75%_50%_at_50%_25%,#000_75%,transparent_100%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-terracotta/10 blur-[140px] rounded-full" />

        <div className="max-w-6xl mx-auto relative z-10 py-24 md:py-32">
          <div className="flex flex-col items-center text-center">
            {/* Social Proof Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-charcoal/10 shadow-sm mb-8">
              <span className="text-sm font-medium text-charcoal/70">
                For B2B Marketing & Sales
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-charcoal font-serif max-w-4xl mb-6 sm:mb-7">
              Generate sales-ready case studies fast.
            </h1>

            {/* Subheadline */}
            <p className="text-charcoal/70 max-w-2xl mb-10 sm:mb-12 px-4">
              Upload client interviews. AI writes the case study. No agencies,
              no waiting.
            </p>

            {/* CTA */}
            <div className="w-full max-w-[520px] mb-12 sm:mb-16 px-4 sm:px-0">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-terracotta/20 via-terracotta/10 to-terracotta/20 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition duration-500" />

                <div className="relative flex items-stretch gap-2 p-1.5 rounded-full bg-white/95 backdrop-blur-md border border-charcoal/10 shadow-lg shadow-black/5">
                  <input
                    type="email"
                    placeholder="Work email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-10 px-4 bg-transparent text-charcoal placeholder:text-charcoal/40 focus:outline-none text-[15px]"
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
                  />
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="h-10 px-7 rounded-full bg-charcoal text-white font-medium text-[14px] hover:bg-terracotta transition-all duration-300 shadow-md disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing…
                      </div>
                    ) : (
                      <>
                        Join Beta
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <small className="block text-center text-charcoal/40 mt-3.5">
                  First 100 get 50% off for life · No credit card
                </small>
              </div>
            </div>

            {/* Product Visual / Demo */}
            <div className="relative w-full max-w-6xl group/video mb-12 sm:mb-16">
              <div className="relative rounded-2xl sm:rounded-3xl border border-charcoal/10 bg-white shadow-xl overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto hidden sm:block"
                  poster="/images/dashboard.webp"
                >
                  <img src="/images/dashboard.webp" alt="Casevia dashboard" />
                </video>

                <img
                  src="/images/dashboard.webp"
                  alt="Casevia dashboard"
                  className="w-full h-auto sm:hidden"
                />

                {/* Watch Demo Button */}
                <button
                  onClick={() => setShowFullDemo(true)}
                  className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center gap-2 px-4 py-2.5 bg-white/95 backdrop-blur-sm border border-charcoal/10 rounded-full shadow-md hover:shadow-xl hover:bg-white hover:scale-105 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-terracotta flex items-center justify-center transition-colors">
                    <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                  </div>
                  <small className="font-medium text-charcoal pr-1">
                    Watch 60-second demo
                  </small>
                </button>
              </div>
            </div>

            {/* Logo Cloud */}
            <LogoCloudTwo />
          </div>
        </div>
      </section>

      {/* Full Demo Modal */}
      {showFullDemo && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setShowFullDemo(false)}
        >
          <div
            className="relative w-full max-w-5xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowFullDemo(false)}
              className="absolute -top-12 right-0 sm:-top-14 sm:-right-14 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110 group z-10"
              aria-label="Close demo"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
            </button>

            <div className="relative bg-charcoal rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <video
                controls
                autoPlay
                className="w-full aspect-video"
                poster="/images/dashboard.webp"
              >
                <source src="/demo/demo.webm" type="video/webm" />
                <source src="/demo/demo.mp4" type="video/mp4" />
                <p className="text-white p-8 text-center">
                  Your browser doesn't support video playback.{" "}
                  <a
                    href="/demo/demo.mp4"
                    download
                    className="text-terracotta underline"
                  >
                    Download the video
                  </a>
                </p>
              </video>
            </div>

            <div className="mt-4 text-center">
              <p className="text-white/90 font-medium">
                See how Casevia turns interviews into case studies in 15 minutes
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
