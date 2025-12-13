import React from "react";
import { Reveal } from "./ui/Reveal";
import { Check } from "lucide-react";
import Link from "next/link";

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 md:py-32 bg-[#050505] text-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header - Left Aligned Global */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-12 text-left">
          <div className="md:w-2/3">
            <Reveal>
              <span className="block mb-6 text-xs font-bold uppercase tracking-[0.25em] text-purple-500 text-left">
                Investment
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-7xl font-medium uppercase tracking-tighter leading-[0.9] text-left text-white">
                Transparent <br /> Value
              </h2>
            </Reveal>
          </div>
          <div className="md:w-1/3 text-left">
            <Reveal delay={0.2}>
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wide leading-loose text-left">
                Flat rates. No hidden fees. We work with a 50% deposit structure
                to ensure mutual commitment.
              </p>
            </Reveal>
          </div>
        </div>

        {/* 3-Column Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Plan 1: Launch */}
          <Reveal delay={0.1} className="h-full">
            <div className="flex flex-col h-full p-8 md:p-10 bg-[#0a0a0a] border border-white/10 hover:border-white/30 transition-all duration-500 group relative overflow-hidden text-left">
              <div className="mb-8 relative z-10">
                <span className="inline-block px-3 py-1 mb-6 bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-300">
                  Starter
                </span>
                <h3 className="font-display text-3xl font-medium uppercase tracking-tight mb-2 text-white">
                  The Launch
                </h3>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">
                  Essential Brand Presence
                </p>

                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-display text-5xl font-medium tracking-tighter text-white">
                    $1,500
                  </span>
                </div>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-6">
                  + $150/mo maintenance
                </p>
                <p className="text-gray-400 text-sm leading-relaxed border-t border-white/10 pt-6">
                  Perfect for startups needing a high-impact landing page to
                  validate their market.
                </p>
              </div>

              <div className="flex-1 mb-8 relative z-10">
                <ul className="space-y-4">
                  {[
                    "Single Page Application",
                    "Mobile Responsive",
                    "Contact Form Integration",
                    "Basic SEO",
                    "1 Week Turnaround",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-400"
                    >
                      <Check className="w-3 h-3 text-purple-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 mt-auto">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-4">
                  50% Deposit • 50% Launch
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center py-4 bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-all duration-300"
                >
                  Start Project
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Plan 2: Scale (Subtle Purple) */}
          <Reveal delay={0.2} className="h-full">
            <div className="flex flex-col h-full p-8 md:p-10 bg-[#0a0a0a] border border-purple-900/30 hover:border-purple-500/50 transition-all duration-500 group relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-900/5 blur-[80px] rounded-full pointer-events-none"></div>

              <div className="mb-8 relative z-10">
                <span className="inline-block px-3 py-1 mb-6 bg-purple-900/20 border border-purple-500/20 text-[10px] font-bold uppercase tracking-[0.25em] text-purple-300">
                  Growth
                </span>
                <h3 className="font-display text-3xl font-medium uppercase tracking-tight mb-2 text-white">
                  The Scale
                </h3>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">
                  Conversion System
                </p>

                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-display text-5xl font-medium tracking-tighter text-white">
                    $5,000
                  </span>
                </div>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-6">
                  + $300/mo maintenance
                </p>
                <p className="text-gray-300 text-sm leading-relaxed border-t border-white/10 pt-6">
                  Comprehensive digital platform designed to convert traffic
                  into revenue.
                </p>
              </div>

              <div className="flex-1 mb-8 relative z-10">
                <ul className="space-y-4">
                  {[
                    "Multi-Page Architecture",
                    "Easy Content Management",
                    "Advanced Animations",
                    "Analytics Setup",
                    "Conversion Optimization",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-300"
                    >
                      <Check className="w-3 h-3 text-purple-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 mt-auto">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-4">
                  50% Deposit • 50% Launch
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center py-4 bg-purple-900/20 border border-purple-500/30 text-white text-xs font-bold uppercase tracking-[0.25em] hover:bg-purple-900/40 hover:border-purple-500/50 transition-all duration-300"
                >
                  Select Plan
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Plan 3: Enterprise */}
          <Reveal delay={0.3} className="h-full">
            <div className="flex flex-col h-full p-8 md:p-10 bg-[#0a0a0a] border border-white/10 hover:border-white/30 transition-all duration-500 group relative overflow-hidden text-left">
              <div className="mb-8 relative z-10">
                <span className="inline-block px-3 py-1 mb-6 bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-300">
                  Enterprise
                </span>
                <h3 className="font-display text-3xl font-medium uppercase tracking-tight mb-2 text-white">
                  Custom
                </h3>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">
                  Market Leadership
                </p>

                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-display text-5xl font-medium tracking-tighter text-white">
                    Book Call
                  </span>
                </div>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-6">
                  Custom Support SLA
                </p>
                <p className="text-gray-400 text-sm leading-relaxed border-t border-white/10 pt-6">
                  Complex infrastructure, SaaS platforms, and large-scale
                  ecommerce systems.
                </p>
              </div>

              <div className="flex-1 mb-8 relative z-10">
                <ul className="space-y-4">
                  {[
                    "Custom Functionality",
                    "3rd Party Integrations",
                    "User Accounts / Portals",
                    "Dedicated Success Manager",
                    "Priority Support",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-400"
                    >
                      <Check className="w-3 h-3 text-purple-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 mt-auto">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-4">
                  Custom Terms
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center py-4 bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-all duration-300"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
