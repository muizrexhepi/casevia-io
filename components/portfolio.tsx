"use client";
import React from "react";
import { Reveal } from "./ui/Reveal";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";

export const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-16 md:py-32 bg-[#050505] text-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header - Aligned Left with Description */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 md:gap-12 text-left">
          <div className="md:w-2/3">
            <Reveal>
              <span className="block text-xs font-bold uppercase tracking-[0.25em] text-purple-500 mb-6 text-left">
                Case Studies
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-8xl font-medium uppercase tracking-tighter leading-[0.9] text-left text-white">
                Selected <br /> Works
              </h2>
            </Reveal>
          </div>
          <div className="md:w-1/3 text-left">
            <Reveal delay={0.2}>
              <p className="text-sm text-gray-400 font-medium leading-loose mb-8 text-left">
                Enterprise-grade digital solutions that drive measurable
                business growth. From AI-powered productivity tools to
                high-volume e-commerce platforms.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] border-b border-white/30 pb-1 hover:text-purple-400 hover:border-purple-400 transition-all"
              >
                View Full Archive <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Featured Project - GoBusly */}
        <div className="mb-16 md:mb-32">
          <Reveal width="100%">
            <Link
              href="/work/gobusly"
              className="group block relative w-full h-[60vh] md:h-[80vh] overflow-hidden border border-white/10 rounded-sm"
            >
              <div className="absolute top-0 left-0 w-full z-20 p-6 md:p-8 flex justify-between items-start mix-blend-difference text-white">
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-widest mb-1 text-left">
                    01 / Featured
                  </span>
                  <h3 className="font-display text-3xl md:text-6xl font-bold uppercase tracking-tight text-left">
                    GoBusly Platform
                  </h3>
                </div>
                <div className="hidden md:block text-right">
                  <span className="block text-[10px] font-bold uppercase tracking-widest mb-1">
                    Category
                  </span>
                  <span className="text-sm font-bold uppercase tracking-wider">
                    E-commerce
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700 z-10"></div>

              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a8d462c?q=80&w=2666&auto=format&fit=crop"
                alt="GoBusly European Booking Platform"
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              />

              <div className="absolute bottom-0 left-0 w-full z-20 p-6 md:p-8 flex justify-between items-end">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-white text-black px-3 py-1 mb-3 inline-block">
                    Case Study
                  </span>
                  <p className="text-sm text-white/90 max-w-md hidden md:block">
                    Engineered a lightning-fast booking platform that doubled
                    conversions and serves 15+ European markets.
                  </p>
                </div>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white flex items-center justify-center text-black group-hover:scale-110 group-hover:rotate-45 transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>
            </Link>
          </Reveal>
        </div>

        {/* Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-12">
          {/* Project 02 - Nuroo */}
          <Reveal delay={0.1}>
            <Link href="/work/nuroo" className="group block text-left">
              <div className="aspect-[4/3] overflow-hidden border border-white/10 rounded-sm relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                <img
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop"
                  alt="Nuroo AI Organizer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-purple-500 text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1 z-20">
                  AI Powered
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-medium uppercase tracking-tight group-hover:text-purple-400 transition-colors text-white mb-2">
                    Nuroo AI Organizer
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    Mobile App Development
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600">
                  02
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                Native iOS & Android productivity app with AI-powered task
                generation and 99.9% uptime.
              </p>
            </Link>
          </Reveal>

          {/* Project 03 - TvojPazar */}
          <Reveal delay={0.2}>
            <Link
              href="/work/tvojpazar"
              className="group block md:mt-24 text-left"
            >
              <div className="aspect-[4/3] overflow-hidden border border-white/10 rounded-sm relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                <img
                  src="https://images.unsplash.com/photo-1488197779269-58b688327914?q=80&w=2670&auto=format&fit=crop"
                  alt="TvojPazar E-commerce Platform"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white text-black text-[9px] font-bold uppercase tracking-wider px-3 py-1 z-20">
                  Scalable
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-medium uppercase tracking-tight group-hover:text-purple-400 transition-colors text-white mb-2">
                    TvojPazar Marketplace
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    E-commerce Platform
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600">
                  03
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                High-performance marketplace supporting 10K+ products with
                sub-100ms search queries.
              </p>
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-24 text-center md:hidden">
          <Link
            href="/work"
            className="inline-block text-xs font-bold uppercase tracking-[0.2em] border-b border-white pb-1 hover:text-purple-400 hover:border-purple-400 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};
