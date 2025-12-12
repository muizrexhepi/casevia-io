import React from "react";
import { Reveal } from "./ui/Reveal";

export const Growth: React.FC = () => {
  return (
    <section
      id="growth"
      className="py-32 bg-[#0a0a0a] text-white overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
          <div>
            <Reveal>
              <span className="block mb-6 text-xs font-bold uppercase tracking-[0.25em] text-gray-500">
                Performance
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-5xl md:text-7xl font-medium uppercase tracking-tighter text-white leading-[0.9]">
                Measurable <br /> Impact
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <p className="text-gray-400 text-sm font-medium uppercase tracking-wide leading-loose max-w-sm text-left">
              We focus on metrics that matter. Our designs are engineered to
              perform, convert, and scale your business infrastructure.
            </p>
          </Reveal>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10">
          {/* Item 1 */}
          <Reveal delay={0.3} className="w-full">
            <div className="py-12 md:pr-12 md:border-r border-white/10 group">
              <span className="block text-xs font-bold uppercase tracking-[0.25em] text-gray-500 mb-6 group-hover:text-white transition-colors">
                Lead Gen
              </span>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-display text-7xl md:text-8xl font-medium tracking-tighter text-white">
                  62%
                </span>
                <span className="text-3xl font-light text-gray-600 group-hover:text-white transition-colors">
                  ↑
                </span>
              </div>
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wide leading-relaxed max-w-[200px]">
                Average increase in qualified leads within 3 months.
              </p>
            </div>
          </Reveal>

          {/* Item 2 */}
          <Reveal delay={0.4} className="w-full">
            <div className="py-12 md:px-12 md:border-r border-white/10 group">
              <span className="block text-xs font-bold uppercase tracking-[0.25em] text-gray-500 mb-6 group-hover:text-white transition-colors">
                Conversion
              </span>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-display text-7xl md:text-8xl font-medium tracking-tighter text-white">
                  4.5x
                </span>
                <span className="text-3xl font-light text-gray-600 group-hover:text-white transition-colors">
                  ×
                </span>
              </div>
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wide leading-relaxed max-w-[200px]">
                Return on investment for rebranding projects.
              </p>
            </div>
          </Reveal>

          {/* Item 3 */}
          <Reveal delay={0.5} className="w-full">
            <div className="py-12 md:pl-12 group">
              <span className="block text-xs font-bold uppercase tracking-[0.25em] text-gray-500 mb-6 group-hover:text-white transition-colors">
                Speed
              </span>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-display text-7xl md:text-8xl font-medium tracking-tighter text-white">
                  98
                </span>
                <span className="text-3xl font-light text-gray-600 group-hover:text-white transition-colors">
                  /100
                </span>
              </div>
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wide leading-relaxed max-w-[200px]">
                Google Lighthouse performance score on all builds.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
