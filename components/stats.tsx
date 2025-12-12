import React from "react";
import { Reveal } from "./ui/Reveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-32 bg-gray-50 border-b border-black/5">
      <div className="container mx-auto px-6 md:px-12">
        {/* Layout Grid - Top Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* Left Column: Title & Label */}
          <div className="lg:col-span-5 relative">
            <Reveal>
              <span className="block mb-6 text-xs font-bold uppercase tracking-[0.25em] text-gray-400">
                Our Mission
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-display text-5xl md:text-7xl leading-[0.9] font-medium uppercase tracking-tighter text-black mb-12">
                Design as the silent ambassador.
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wide leading-loose mb-12 max-w-md">
                We strip away the unnecessary, revealing the core of your
                business. We believe in systems over decoration and performance
                over trends.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <Link
                href="/about"
                className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] border-b border-black/20 pb-2 hover:text-gray-600 hover:border-black transition-all w-max"
              >
                Read Our Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>

          {/* Right Column: Image Composition */}
          <div className="lg:col-span-7 relative pt-8 lg:pt-0">
            <Reveal delay={0.4}>
              <div className="relative aspect-[4/3] md:aspect-[16/9] overflow-hidden bg-white">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop"
                  alt="Agency Office"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-expo"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
