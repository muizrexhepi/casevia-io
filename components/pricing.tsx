import React from "react";
import { Reveal } from "./ui/Reveal";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export const Pricing: React.FC = () => {
  return (
    <section
      id="pricing"
      className="py-32 bg-white text-black border-t border-black/5"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <Reveal>
            <span className="block mb-6 text-xs font-bold uppercase tracking-[0.25em] text-gray-400">
              Plans
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-5xl md:text-7xl font-medium uppercase tracking-tighter leading-[0.9] mb-8">
              Investment
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wide leading-loose max-w-lg mx-auto">
              Transparent pricing. No hidden fees. <br /> Just clear, flat-rate
              packages.
            </p>
          </Reveal>
        </div>

        {/* Pricing Grid - Consistent Heights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Card 1: The Sprint */}
          <Reveal delay={0.1} className="h-full">
            <div className="flex flex-col h-full p-10 border border-gray-200 hover:border-black transition-colors duration-500 bg-white group">
              <div className="mb-8">
                <span className="inline-block px-3 py-1 bg-gray-100 text-[10px] font-bold uppercase tracking-[0.25em] mb-6 text-gray-500">
                  Audit
                </span>
                <h3 className="font-display text-3xl font-medium uppercase tracking-tight mb-2">
                  The Sprint
                </h3>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.25em] mb-8">
                  Strategy & Roadmap
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-5xl font-medium tracking-tighter">
                    €2.5k
                  </span>
                  <span className="text-xs text-gray-400 uppercase tracking-wide">
                    / flat
                  </span>
                </div>
              </div>

              <div className="flex-1 border-t border-gray-100 pt-8 mb-12">
                <ul className="space-y-4">
                  {[
                    "UX/UI Heuristic Audit",
                    "Competitor Analysis",
                    "Growth Roadmap",
                    "1-Week Turnaround",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-xs font-bold uppercase tracking-widest text-gray-500"
                    >
                      <Check className="w-4 h-4 text-black shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="w-full flex justify-center items-center py-4 bg-gray-50 text-black border border-transparent group-hover:border-black text-xs font-bold uppercase tracking-[0.25em] hover:bg-black hover:text-white transition-all duration-300"
              >
                Book Sprint
              </Link>
            </div>
          </Reveal>

          {/* Card 2: The Build (Featured) */}
          <Reveal delay={0.2} className="h-full">
            <div className="flex flex-col h-full p-10 border border-black bg-black text-white relative shadow-xl">
              <div className="absolute top-0 right-0 bg-white text-black text-[10px] font-bold uppercase tracking-[0.25em] px-4 py-2 translate-y-[-50%] translate-x-[-10%] border border-black">
                Recommended
              </div>

              <div className="mb-8">
                <span className="inline-block px-3 py-1 bg-white/10 text-[10px] font-bold uppercase tracking-[0.25em] mb-6 text-white">
                  Project
                </span>
                <h3 className="font-display text-3xl font-medium uppercase tracking-tight mb-2">
                  The Build
                </h3>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.25em] mb-8">
                  Complete Transformation
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-5xl font-medium tracking-tighter">
                    €9.5k
                  </span>
                  <span className="text-xs text-gray-400 uppercase tracking-wide">
                    / project
                  </span>
                </div>
              </div>

              <div className="flex-1 border-t border-white/20 pt-8 mb-12">
                <ul className="space-y-4">
                  {[
                    "Full Brand Identity",
                    "High-End Website (5-7 Pages)",
                    "CMS Implementation",
                    "Interactive Motion",
                    "SEO Foundation",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-xs font-bold uppercase tracking-widest text-gray-300"
                    >
                      <Check className="w-4 h-4 text-white shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="w-full flex justify-center items-center py-4 bg-white text-black text-xs font-bold uppercase tracking-[0.25em] hover:bg-gray-200 transition-all duration-300"
              >
                Start Project
              </Link>
            </div>
          </Reveal>

          {/* Card 3: The Partner */}
          <Reveal delay={0.3} className="h-full">
            <div className="flex flex-col h-full p-10 border border-gray-200 hover:border-black transition-colors duration-500 bg-white group">
              <div className="mb-8">
                <span className="inline-block px-3 py-1 bg-gray-100 text-[10px] font-bold uppercase tracking-[0.25em] mb-6 text-gray-500">
                  Retainer
                </span>
                <h3 className="font-display text-3xl font-medium uppercase tracking-tight mb-2">
                  The Partner
                </h3>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.25em] mb-8">
                  Growth & Scale
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-5xl font-medium tracking-tighter">
                    €3k
                  </span>
                  <span className="text-xs text-gray-400 uppercase tracking-wide">
                    / month
                  </span>
                </div>
              </div>

              <div className="flex-1 border-t border-gray-100 pt-8 mb-12">
                <ul className="space-y-4">
                  {[
                    "Weekly A/B Testing",
                    "New Landing Pages",
                    "Analytics Reporting",
                    "Dedicated Design Team",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-xs font-bold uppercase tracking-widest text-gray-500"
                    >
                      <Check className="w-4 h-4 text-black shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="w-full flex justify-center items-center py-4 bg-gray-50 text-black border border-transparent group-hover:border-black text-xs font-bold uppercase tracking-[0.25em] hover:bg-black hover:text-white transition-all duration-300"
              >
                Become Partner
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Contact Link */}
        <Reveal delay={0.4}>
          <div className="mt-20 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-all"
            >
              Need a Custom Quote? <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
