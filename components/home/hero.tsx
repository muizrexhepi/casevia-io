import React, { useState } from "react";
import { ArrowRight, Star, Clock, Shield, DollarSign } from "lucide-react";
import MetricCard from "./metric-card";
import Image from "next/image";

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
    <section className="relative w-full pt-32 pb-16 md:pb-24 md:pt-40 px-6 md:px-12 bg-cream overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-charcoal/5 to-transparent"></div>

      <div className="max-w-6xl mx-auto flex flex-col gap-14 md:gap-20 lg:gap-32">
        {/* Top Section: Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          {/* Left Column: Typography */}
          <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8 relative z-10">
            {/* Heading */}
            <h1 className="font-serif text-[3.5rem] md:text-[5.5rem] lg:text-[6.5rem] leading-[0.9] tracking-tight text-charcoal drop-shadow-sm">
              Stop writing <br />
              <span className="italic text-charcoal font-normal relative inline-block text-[3.85rem] md:text-[6.05rem] lg:text-[7.15rem]">
                case studies
                {/* Underline accent */}
                <svg
                  className="absolute w-full h-4 md:h-5 -bottom-1 md:-bottom-2 left-0 text-terracotta/50 -z-10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="7"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subhead */}
            <p className="font-sans text-base md:text-xl text-charcoal/70 leading-relaxed max-w-xl font-light">
              Casevia turns your raw client calls into high-converting marketing
              assets automatically.{" "}
              <strong className="font-semibold text-charcoal">
                Zero drafting required.
              </strong>
            </p>

            {/* Waitlist Form */}
            <div className="w-full max-w-lg pt-1">
              <form
                onSubmit={handleSubmit}
                className="relative flex items-center h-14 md:h-[3.75rem] rounded-full bg-white border border-charcoal/10 shadow-lg shadow-charcoal/8 overflow-hidden hover:shadow-xl hover:shadow-charcoal/12 transition-all duration-300"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-full px-6 font-sans text-[15px] text-charcoal placeholder:text-charcoal/40 bg-transparent focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="h-full px-7 sm:px-8 bg-charcoal text-cream font-sans font-semibold text-[15px] hover:bg-terracotta transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50"
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

            {/* Social Proof */}
            <div className="hidden sm:flex items-center gap-3 pt-1">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full bg-charcoal/10 border-2 border-cream overflow-hidden"
                  >
                    <img
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 13}`}
                      alt="User"
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-terracotta text-terracotta"
                  />
                ))}
              </div>
              <span className="text-sm font-sans font-medium text-charcoal/55">
                Built for marketers & founders
              </span>
            </div>
          </div>

          {/* Right Column: Visual Anchor */}
          <div className="lg:col-span-5 w-full relative group">
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <Image
                src="/images/heroIllustration.webp"
                alt="Casevia hero illustration"
                fill={false}
                width={520}
                height={520}
                className="object-contain drop-shadow-xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom Section: Metrics - Compact on Mobile */}
        <div className="relative hidden md:block">
          {/* <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-charcoal/10 to-transparent"></div> */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x divide-charcoal/[0.08] pt-2">
            <MetricCard
              icon={Clock}
              value="10x"
              label="Faster Turnaround"
              description="From recording to published PDF in minutes, not weeks."
            />
            <MetricCard
              icon={Shield}
              value="0%"
              label="Hallucination Rate"
              description="Strict adherence to source audio for enterprise compliance."
            />
            <MetricCard
              icon={DollarSign}
              value="$4k"
              label="Saved per Story"
              description="Eliminate agency fees and internal writing hours."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
