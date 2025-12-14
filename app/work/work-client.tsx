"use client";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import React, { useEffect } from "react";

// Define a type for the project structure
interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  year: string;
}

// Define props for the client component
interface WorkPageClientProps {
  projects: Project[];
}

export default function WorkPageClient({ projects }: WorkPageClientProps) {
  // useEffect is a client-side hook, so this must be in a client component
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#050505] text-white min-h-screen pt-32 md:pt-40 pb-24">
      <div className="container mx-auto px-6 md:px-12 text-left">
        {/* Consistent Left-Aligned Header Pattern */}
        <div className="flex flex-col items-start justify-center mb-24 md:mb-32">
          <Reveal>
            <span className="block text-left text-xs font-bold uppercase tracking-[0.25em] text-purple-500 mb-6">
              Archive
            </span>
          </Reveal>
          <Reveal width="100%">
            <h1 className="font-display text-[12vw] md:text-[8vw] leading-[0.8] font-black uppercase tracking-tighter text-left mb-12 text-white">
              Selected <br /> Works
            </h1>
          </Reveal>
          <Reveal delay={0.1} width="100%">
            {/* Faded Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 md:gap-y-32">
          {projects.map((project, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <Link
                href={`/work/${project.id}`}
                className="group cursor-pointer block text-left"
              >
                {/* Image Container - No borders, just clean image */}
                <div className="overflow-hidden mb-8 relative aspect-[4/3] bg-[#111]">
                  <div className="absolute inset-0 bg-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out opacity-80 group-hover:opacity-100"
                  />
                </div>

                {/* Info */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight mb-2 text-white group-hover:text-purple-400 transition-colors duration-500">
                      {project.title}
                    </h3>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                      {project.category}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600 border border-white/10 px-2 py-1">
                    {project.year}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-32 pt-24 border-t border-white/10 text-center md:text-left relative">
          {/* Faded Top Border for Footer Area */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl font-medium uppercase tracking-tight mb-8 text-white">
              Have a project in mind?
            </h2>
            <Link
              href="/contact"
              className="inline-block text-xs font-bold uppercase tracking-widest border-b border-white pb-1 hover:text-purple-400 hover:border-purple-400 transition-all text-white"
            >
              Start a Conversation
            </Link>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
