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
                A curation of digital products defined by precision and
                performance. We build systems that define categories.
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

        {/* Featured Project - Cinema Mode */}
        <div className="mb-16 md:mb-32">
          <Reveal width="100%">
            <Link
              href="/work/lumina"
              className="group block relative w-full h-[60vh] md:h-[80vh] overflow-hidden border border-white/10"
            >
              <div className="absolute top-0 left-0 w-full z-20 p-6 md:p-8 flex justify-between items-start mix-blend-difference text-white">
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-widest mb-1 text-left">
                    01 / Featured
                  </span>
                  <h3 className="font-display text-3xl md:text-6xl font-bold uppercase tracking-tight text-left">
                    Lumina Financial
                  </h3>
                </div>
                <div className="hidden md:block text-right">
                  <span className="block text-[10px] font-bold uppercase tracking-widest mb-1">
                    Service
                  </span>
                  <span className="text-sm font-bold uppercase tracking-wider">
                    Rebrand & Platform
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>

              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auhref=format&fit=crop"
                alt="Lumina"
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-expo group-hover:scale-105"
              />

              <div className="absolute bottom-0 left-0 w-full z-20 p-6 md:p-8 flex justify-between items-end">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-white text-black px-3 py-1">
                  Case Study
                </span>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white flex items-center justify-center text-black group-hover:scale-110 transition-transform duration-500">
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>
            </Link>
          </Reveal>
        </div>

        {/* Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-12">
          {/* Project 02 */}
          <Reveal delay={0.1}>
            <Link href="/work/apex" className="group block text-left">
              <div className="aspect-[4/3] overflow-hidden border border-white/10 relative mb-6">
                <div className="absolute inset-0 bg-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auhref=format&fit=crop"
                  alt="Apex"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-medium uppercase tracking-tight group-hover:text-purple-400 transition-colors text-white mb-2">
                    Architecture Scale
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    Web Development
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600">
                  02
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Project 03 */}
          <Reveal delay={0.2}>
            <Link
              href="/work/lumina"
              className="group block md:mt-24 text-left"
            >
              <div className="aspect-[4/3] overflow-hidden border border-white/10 relative mb-6">
                <div className="absolute inset-0 bg-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                <img
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2672&auhref=format&fit=crop"
                  alt="Veloce"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-medium uppercase tracking-tight group-hover:text-purple-400 transition-colors text-white mb-2">
                    Veloce Motors
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    Digital Campaign
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600">
                  03
                </span>
              </div>
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-24 text-center md:hidden">
          <Link
            href="/work"
            className="inline-block text-xs font-bold uppercase tracking-[0.2em] border-b border-white pb-1"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};
