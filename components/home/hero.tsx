import React, { useState } from "react";
import { FileText, ArrowRight, Star } from "lucide-react";
import PipelineIllustration from "./pipeline-illustration";
import MetricCard from "./metric-card";

const Hero: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      alert("Please enter your email");
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
        alert(
          "You're already on the waitlist! Thanks for sticking with us — big updates coming soon."
        );
      } else {
        alert("🎉 You're officially on the waitlist!");
      }

      setEmail("");
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full pt-20 md:pt-32 pb-24 px-6 md:px-12 bg-cream overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-charcoal/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        {/* Top Section: Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Typography */}
          <div className="lg:col-span-7 flex flex-col gap-8 md:gap-10 relative z-10">
            {/* Badge & Social Proof */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-charcoal/10 bg-white/50 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terracotta opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-terracotta"></span>
                </span>
                <span className="font-sans text-[11px] font-semibold tracking-widest uppercase text-charcoal/70">
                  Early Access Program
                </span>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1">
                <div className="flex -space-x-1.5">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-5 h-5 rounded-full bg-charcoal/10 border border-cream overflow-hidden"
                    >
                      <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 13}`}
                        alt="User"
                        className="w-full h-full"
                      />
                    </div>
                  ))}
                </div>
                {/* <div className="flex items-center gap-1 ml-1.5">
                  <Star className="w-3 h-3 fill-terracotta text-terracotta" />
                  <Star className="w-3 h-3 fill-terracotta text-terracotta" />
                  <Star className="w-3 h-3 fill-terracotta text-terracotta" />
                  <Star className="w-3 h-3 fill-terracotta text-terracotta" />
                  <Star className="w-3 h-3 fill-terracotta text-terracotta" />
                </div> */}
                <span className="text-[10px] font-sans font-medium text-charcoal/50">
                  Built for marketers, agencies & founders
                </span>
              </div>
            </div>

            {/* Heading */}
            <h1 className="font-serif text-[4rem] md:text-[5.5rem] lg:text-[7rem] leading-[0.9] tracking-tight text-charcoal">
              Turn calls into{" "}
              <span className="font-light italic text-charcoal/80 relative inline-block">
                stories
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-terracotta/30"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </span>{" "}
              that sell.
            </h1>

            {/* Subhead */}
            <p className="font-sans text-lg md:text-xl text-charcoal/70 leading-relaxed max-w-xl font-light">
              The first AI pipeline that transforms raw Zoom recordings into
              marketing-ready case studies. Zero drafting required.
            </p>

            {/* Waitlist Form */}
            <div className="w-full max-w-lg pt-4">
              <form
                onSubmit={handleSubmit}
                className="relative flex items-center h-14 rounded-full bg-white border border-charcoal/10 shadow-xl shadow-charcoal/10 overflow-hidden hover:shadow-2xl hover:shadow-charcoal/15 transition-all duration-300"
              >
                <input
                  type="email"
                  placeholder="Enter your email to join waitlist"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-full px-6 font-sans text-charcoal placeholder:text-charcoal/40 bg-transparent focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="h-full px-6 sm:px-8 bg-charcoal text-cream font-sans font-medium hover:bg-terracotta transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                      </svg>
                      <span className="hidden sm:inline">Joining...</span>
                    </>
                  ) : (
                    <>
                      <span className="hidden sm:inline">Join Waitlist</span>
                      <span className="sm:hidden">Join</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>

            <p className="text-xs font-sans text-charcoal/40 pl-2">
              No credit card required · SOC-2 Compliant
            </p>
          </div>

          {/* Right Column: Visual Anchor */}
          <div className="lg:col-span-5 w-full relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-terracotta/20 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>

            <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[4/5] bg-card-bg rounded-2xl border border-charcoal/5 shadow-2xl flex flex-col overflow-hidden">
              {/* Fake Browser Chrome */}
              <div className="h-12 border-b border-charcoal/5 bg-white/50 backdrop-blur-md flex items-center px-6 gap-2">
                <div className="w-3 h-3 rounded-full bg-charcoal/10"></div>
                <div className="w-3 h-3 rounded-full bg-charcoal/10"></div>
              </div>

              {/* Content Area */}
              <div className="flex-1 relative flex items-center justify-center p-8 lg:p-12 bg-cream/50">
                {/* Subtle Grid */}
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />

                <div className="relative z-10 w-full h-full transform transition-transform duration-700 group-hover:scale-[1.02]">
                  <PipelineIllustration />
                </div>

                {/* Floating Status Badge */}
                <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur border border-charcoal/5 pl-2 pr-4 py-2 rounded-lg shadow-lg flex items-center gap-3 animate-[float_4s_ease-in-out_infinite]">
                  <div className="w-8 h-8 rounded bg-terracotta/10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse"></div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-charcoal/40 tracking-wider">
                      Status
                    </span>
                    <span className="text-xs font-serif font-medium text-charcoal">
                      Processing Audio...
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Metrics Artifact */}
        <div className="border-t border-charcoal/10 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 md:divide-x divide-charcoal/10">
            <MetricCard
              value="10x"
              label="Faster Turnaround"
              description="From recording to published PDF in minutes, not weeks."
            />
            <MetricCard
              value="0%"
              label="Hallucination Rate"
              description="Strict adherence to source audio for enterprise compliance."
            />
            <MetricCard
              value="$4k"
              label="Saved per story"
              description="Eliminate agency fees and internal writing hours."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
