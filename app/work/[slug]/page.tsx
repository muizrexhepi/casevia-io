"use client";

import React, { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProjectPage: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-white text-black min-h-screen pt-32 md:pt-40">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header Section - Centered & Clean */}
        <div className="flex flex-col items-center justify-center mb-16 md:mb-24">
          <Reveal>
            <span className="block text-center text-xs font-bold uppercase tracking-[0.25em] text-gray-400 mb-6">
              Case Study
            </span>
          </Reveal>
          <Reveal width="100%">
            <h1 className="font-display text-[10vw] md:text-[6vw] leading-[0.9] font-medium uppercase tracking-tighter text-center mb-12 md:mb-24">
              Lumina Financial
            </h1>
          </Reveal>

          {/* Meta Row - Top Border */}
          <div className="w-full border-t border-black/10 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-gray-800">
            <Reveal delay={0.1}>
              <span>Fintech & Web3</span>
            </Reveal>
            <Reveal delay={0.2}>
              <span>London, UK</span>
            </Reveal>
            <Reveal delay={0.3}>
              <span>2024 Release</span>
            </Reveal>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-24 md:mb-32">
          <Reveal width="100%" delay={0.4}>
            <div className="w-full aspect-video md:aspect-[2.4/1] bg-gray-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                alt="Lumina Hero"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </Reveal>
        </div>

        {/* Stats Grid - Bottom Border */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0 border-b border-black/10 pb-16 md:pb-24 mb-24 md:mb-32">
          {[
            { val: "+124%", label: "User Growth" },
            { val: "0.4s", label: "Load Time" },
            { val: "Awwwards", label: "Recognition" },
            { val: "Series B", label: "Funding Secured" },
          ].map((stat, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div
                className={`flex flex-col items-start justify-start ${
                  i !== 0 ? "md:border-l md:border-black/10 md:pl-12" : ""
                }`}
              >
                <span className="font-display text-4xl md:text-6xl font-medium tracking-tight mb-2 md:mb-4">
                  {stat.val}
                </span>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-400 text-left">
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Overview - Text Focused */}
        <div className="max-w-4xl mr-auto mb-24 md:mb-32">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl font-medium uppercase tracking-tight text-left mb-16">
              The Brief
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-8 text-gray-500 font-medium px-0 md:px-0 max-w-3xl">
              <p className="text-xs md:text-sm uppercase tracking-widest leading-loose text-left">
                Lumina needed to transition from a technical crypto tool to a
                mainstream financial platform. The challenge was to retain the
                trust of power users while inviting a broader audience through
                an accessible, premium interface.
              </p>
              <p className="text-xs md:text-sm uppercase tracking-widest leading-loose text-left">
                We identified three core pillars for the rebrand: Clarity,
                Speed, and Security. Every design decision, from the typography
                to the motion language, reinforced these pillars.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Detail Image */}
        <div className="mb-24 md:mb-32">
          <Reveal width="100%">
            <div className="w-full aspect-[4/3] md:aspect-[2/1] bg-gray-50 overflow-hidden flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2574&auto=format&fit=crop"
                alt="Product Details"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* Quote Section - Light Gray Background */}
        <div className="bg-gray-50 p-8 md:p-24 mb-24 md:mb-32">
          <div className="max-w-3xl mr-auto text-left">
            <Reveal>
              <p className="font-display text-xl md:text-2xl font-medium italic leading-relaxed mb-12 text-black">
                "Casevia didn't just redesign our website; they fundamentally
                changed how we communicate our value. The results speak for
                themselves and our users love the new direction."
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-col items-start">
                <span className="font-bold text-xs uppercase tracking-[0.2em] mb-1 text-black">
                  Sarah Chen
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gray-500">
                  CTO @ Lumina
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Execution / Solution Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 mb-24 md:mb-32 items-center">
          <div className="order-2 lg:order-1">
            <Reveal>
              <h2 className="font-display text-3xl md:text-5xl font-medium uppercase tracking-tight mb-8 text-left">
                The Execution
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-6 text-gray-500 font-medium px-0 md:px-0">
                <p className="text-xs md:text-sm uppercase tracking-widest leading-loose text-left">
                  We utilized Next.js for server-side rendering to ensure
                  instantaneous load times globally. The animation library was
                  custom-built using WebGL to provide fluid, 60fps transitions
                  without blocking the main thread.
                </p>
                <p className="text-xs md:text-sm uppercase tracking-widest leading-loose text-left">
                  The design system was built in Figma and synchronized directly
                  to the codebase, ensuring design parity during the development
                  phase.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2} width="100%" className="order-1 lg:order-2">
            <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=2680&auto=format&fit=crop"
                alt="Mobile Execution"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* Next Project - Clean Grid */}
        <div className="border-t border-black/10 pt-24 pb-12">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl font-medium uppercase tracking-tight text-left mb-4">
              Next Case
            </h2>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest text-left mb-16">
              Explore more of our recent work.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal delay={0.1}>
              <Link href="/work/apex" className="group block cursor-pointer">
                <div className="aspect-[4/3] bg-gray-200 overflow-hidden mb-6 relative">
                  <img
                    src="https://images.unsplash.com/photo-1590608897129-79da98d15969?q=80&w=2670&auto=format&fit=crop"
                    alt="Apex"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="flex justify-between items-center text-left">
                  <h3 className="font-display text-xl font-bold uppercase text-black">
                    Apex Architecture
                  </h3>
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-black" />
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
