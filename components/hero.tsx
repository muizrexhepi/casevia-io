// components/sections/Hero.tsx
"use client";

import { ArrowRight } from "lucide-react";
import { TEXT } from "@/lib/styles";
import HeroIllustration from "@/components/hero-illustration";

export default function Hero() {
  const scrollToMethodology = () => {
    document
      .getElementById("methodology")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-16 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 w-full text-left relative z-10">
        <div className="max-w-6xl relative z-20">
          <h1
            className={`${TEXT.h1} mb-10 animate-in fade-in slide-in-from-left-12 duration-1000`}
          >
            High-performance software for market leaders.
          </h1>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <p
              className={`${TEXT.body} max-w-2xl animate-in fade-in slide-in-from-left-16 duration-1000 delay-200`}
            >
              We are a Berlin-based engineering studio. We replace generic
              development with precision-engineered software architectures,
              autonomous systems, and enterprise-grade AI.
            </p>

            <button
              onClick={scrollToMethodology}
              className={`${TEXT.link} self-start animate-in fade-in slide-in-from-left-20 duration-1000 delay-400`}
            >
              See How We Work <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[100vw] h-[100vw] lg:w-[50vw] lg:h-[50vw] pointer-events-none opacity-10 md:opacity-20 z-0">
        <HeroIllustration />
      </div>
    </section>
  );
}
