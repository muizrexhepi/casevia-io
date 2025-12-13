import React from "react";
import { Reveal } from "./ui/Reveal";

export const Growth: React.FC = () => {
  return (
    <section
      id="growth"
      className="py-16 md:py-32 bg-[#050505] text-white overflow-hidden relative"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16 md:mb-24"></div>
        {/* Main Section Separator - Faded Edges */}

        {/* Centered Header */}
        <div className="text-center mb-16 md:mb-24">
          <Reveal>
            <span className="block mb-6 text-xs font-bold uppercase tracking-[0.25em] text-purple-500">
              Performance
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-5xl md:text-8xl lg:text-9xl font-medium uppercase tracking-tighter text-white leading-[0.8]">
              Measurable <br /> Impact
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-white/10">
          {/* Item 1: Lead Gen */}
          <Reveal delay={0.3} className="w-full">
            <div className="py-12 md:pr-12 md:border-r border-white/10 group text-left">
              <span className="block text-xs font-bold uppercase tracking-[0.25em] text-gray-500 mb-6 group-hover:text-purple-500 transition-colors text-left">
                Lead Gen
              </span>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-display text-6xl md:text-8xl font-medium tracking-tighter text-white">
                  62%
                </span>
                <span className="text-3xl font-light text-gray-600 group-hover:text-purple-500 transition-colors">
                  ↑
                </span>
              </div>
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wide leading-relaxed max-w-[200px] text-left">
                Average increase in qualified leads within 3 months.
              </p>
            </div>
          </Reveal>

          {/* Item 2: Conversion */}
          <Reveal delay={0.4} className="w-full">
            <div className="py-12 md:px-12 md:border-r border-white/10 group text-left">
              <span className="block text-xs font-bold uppercase tracking-[0.25em] text-gray-500 mb-6 group-hover:text-purple-500 transition-colors text-left">
                Conversion
              </span>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-display text-6xl md:text-8xl font-medium tracking-tighter text-white">
                  4.5x
                </span>
                <span className="text-3xl font-light text-gray-600 group-hover:text-purple-500 transition-colors">
                  ×
                </span>
              </div>
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wide leading-relaxed max-w-[200px] text-left">
                Return on investment for rebranding projects.
              </p>
            </div>
          </Reveal>

          {/* Item 3: Speed */}
          <Reveal delay={0.5} className="w-full">
            <div className="py-12 md:pl-12 group text-left">
              <span className="block text-xs font-bold uppercase tracking-[0.25em] text-gray-500 mb-6 group-hover:text-purple-500 transition-colors text-left">
                Speed
              </span>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-display text-6xl md:text-8xl font-medium tracking-tighter text-white">
                  98
                </span>
                <span className="text-3xl font-light text-gray-600 group-hover:text-purple-500 transition-colors">
                  /100
                </span>
              </div>
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wide leading-relaxed max-w-[200px] text-left">
                Google Lighthouse performance score on all builds.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
