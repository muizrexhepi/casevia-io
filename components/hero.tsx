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
        <div className="max-w-4xl relative z-20">
          <h1 className={`${TEXT.h1} mb-10`}>
            We build websites that <br className="hidden lg:block" />
            <span className="text-gradient">actually sell.</span>
          </h1>

          <div className="flex flex-col gap-10">
            <p className={`${TEXT.body} max-w-2xl`}>
              Most websites are just digital brochures. We build
              high-performance marketing engines designed to turn visitors into
              revenue. Fast, beautiful, and built for growth.
            </p>

            <button onClick={scrollToMethodology} className={TEXT.link}>
              View Standard <ArrowRight size={20} />
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
