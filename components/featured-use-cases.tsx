"use client";

import { useEffect, useState } from "react";
// Assuming useInView is imported from a utility file
import { useInView } from "@/app/page";
import { ArrowRight } from "lucide-react";

// NOTE: Please ensure the 'useInView' hook is correctly imported and functional.

export const FeaturedCaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const { ref, isInView } = useInView({ threshold: 0.1 });
  // Increased duration slightly for a more measured pace
  const intervalDuration = 8000;

  const cases = [
    {
      company: "Linear",
      logo: "Linear",
      metric: "50% faster shipping",
      quote:
        "Casevia completely automated our internal documentation, allowing us to focus on building features.",
      author: "Karri Saarinen",
      role: "CEO, Linear",
    },
    {
      company: "Ramp",
      logo: "Ramp",
      metric: "1,000+ hours saved",
      quote:
        "We generate expense report narratives for enterprise clients automatically. It's a game changer.",
      author: "Eric Glyman",
      role: "CEO, Ramp",
    },
    {
      company: "Vercel",
      logo: "Vercel",
      metric: "99.9% uptime docs",
      quote:
        "From engineering syncs to incident reports, Casevia handles the structured output we need.",
      author: "Guillermo Rauch",
      role: "CEO, Vercel",
    },
    {
      company: "Retool",
      logo: "Retool",
      metric: "2x dev velocity",
      quote:
        "Our developer advocates use Casevia to turn community calls into tutorials instantly.",
      author: "David Hsu",
      role: "CEO, Retool",
    },
  ];

  useEffect(() => {
    if (!isInView) return;

    setProgress(0);

    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / intervalDuration) * 100, 100);
      setProgress(newProgress);

      if (elapsed >= intervalDuration) {
        setActiveIndex((prev) => (prev + 1) % cases.length);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [activeIndex, isInView]);

  return (
    <section
      ref={ref}
      // Use the deep charcoal primary background for contrast
      className="py-16 md:py-32 bg-foreground text-primary-foreground overflow-hidden relative"
    >
      {/* Subtle top border using primary color gradient for premium feel */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div className="container max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="min-h-[350px] flex flex-col justify-center items-center text-center mb-16 relative">
          {cases.map((c, i) => (
            <div
              key={i}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out px-4 ${
                activeIndex === i
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-8 pointer-events-none"
              }`}
            >
              {/* Metric: Uses Terracotta Primary color for impact */}
              <div className="text-primary font-mono text-xs uppercase tracking-widest font-semibold mb-8">
                {c.metric}
              </div>

              {/* Quote: Uses Serif font and off-white text */}
              <h3 className="text-3xl md:text-5xl font-serif font-light italic leading-tight max-w-4xl mb-10 text-card">
                "{c.quote}"
              </h3>

              {/* Author and Role */}
              <div className="flex items-center gap-4">
                {/* Avatar Initial: Using a muted background against the dark section */}
                <div className="w-10 h-10 bg-muted/20 border border-primary/20 rounded-full flex items-center justify-center font-bold text-primary/80 text-lg">
                  {c.author.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="text-base font-bold text-card">
                    {c.author}
                  </div>
                  {/* Role: Uses muted-foreground against the dark background */}
                  <div className="text-xs text-muted-foreground">{c.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tab Buttons (Company Logos) */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-20 border-t border-border/50 pt-10">
          {cases.map((c, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="group relative pb-10 focus:outline-none"
            >
              <span
                // Company Logo Text: Active is off-white, inactive is muted
                className={`text-xl font-serif font-bold transition-colors duration-300 ${
                  activeIndex === i
                    ? "text-card"
                    : "text-muted-foreground/60 group-hover:text-muted-foreground"
                }`}
              >
                {c.logo}
              </span>

              {activeIndex === i && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-border/50 rounded-full overflow-hidden">
                  {/* Progress Bar: Uses Terracotta Primary color */}
                  <div
                    className="h-full bg-primary transition-all duration-75 ease-linear"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              )}
            </button>
          ))}

          {/* Add a static CTA link on the right for flow */}
          <div className="relative pb-10 hidden md:block">
            <a
              href="/casestudies"
              className="text-primary flex items-center gap-2 text-base font-sans font-semibold group"
            >
              See all success stories
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
