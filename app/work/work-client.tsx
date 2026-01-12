"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Project } from "@/lib/projects";

interface WorkPageClientProps {
  projects: Project[];
}

// ==================== COMPONENT ====================

export default function WorkPageClient({ projects }: WorkPageClientProps) {
  // Logic: Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 md:pt-48 pb-32 reveal active min-h-screen">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        {/* Header Section - Exact Styling Applied */}
        <div className="max-w-6xl mb-24">
          <Reveal width="100%">
            {/* Note: 'text-gradient' assumes you have this class in your globals.css. 
                If not, you can replace it with 'bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600' */}
            <h1 className="text-5xl md:text-8xl lg:text-[8rem] font-normal leading-[0.85] tracking-tighter text-gradient mb-12">
              Engineering the future of business
            </h1>
          </Reveal>

          <Reveal delay={0.1} width="100%">
            <p className="text-xl md:text-2xl text-[#4A1D3A]/80 font-normal max-w-2xl leading-[1.3] tracking-tight">
              Explore our portfolio of high-performance digital systems built
              for enterprise and medium-sized businesses across Europe.
            </p>
          </Reveal>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((study, idx) => (
            <Reveal key={study.id} delay={idx * 0.1} width="100%">
              <Link
                href={`/work/${study.id}`}
                className="cursor-pointer group block"
              >
                {/* Recreated 'CaseCard' UI Logic Inline 
                   Matches the props: title={study.title} subtitle={study.category} imageUrl={study.image}
                */}
                <div className="!w-full flex flex-col gap-6">
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-[4/3] rounded-lg bg-gray-100">
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="flex flex-col gap-1">
                    <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-[#4A1D3A] group-hover:opacity-70 transition-opacity duration-300">
                      {study.title}
                    </h3>
                    <p className="text-lg text-[#4A1D3A]/60 font-normal tracking-tight">
                      {study.category}
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
