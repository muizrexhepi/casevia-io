"use client";

import React, { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

const allProjects = [
  {
    id: "lumina",
    title: "Lumina Financial",
    category: "Fintech Rebrand",
    image: "https://picsum.photos/seed/arch1/1200/900",
    year: "2024",
  },
  {
    id: "apex",
    title: "Apex Architecture",
    category: "Web Development",
    image: "https://picsum.photos/seed/arch2/1200/900",
    year: "2024",
  },
  {
    id: "veloce",
    title: "Veloce Motors",
    category: "Digital Campaign",
    image: "https://picsum.photos/seed/car1/1200/900",
    year: "2023",
  },
  {
    id: "seren",
    title: "Seren Spas",
    category: "Identity System",
    image: "https://picsum.photos/seed/nature1/1200/900",
    year: "2023",
  },
  {
    id: "quant",
    title: "Quant AI",
    category: "SaaS Platform",
    image: "https://picsum.photos/seed/tech1/1200/900",
    year: "2023",
  },
  {
    id: "elevate",
    title: "Elevate Real Estate",
    category: "Brand Strategy",
    image: "https://picsum.photos/seed/build1/1200/900",
    year: "2022",
  },
];

const WorkPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-black min-h-screen pt-32 md:pt-40 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col items-start justify-center mb-24 md:mb-32">
          <Reveal>
            <span className="block text-left text-xs font-bold uppercase tracking-[0.25em] text-gray-400 mb-6">
              Selected Projects
            </span>
          </Reveal>
          <Reveal width="100%">
            <h1 className="font-display text-[11vw] md:text-[8vw] leading-[0.8] font-black uppercase tracking-tighter text-left mb-12">
              Our Work
            </h1>
          </Reveal>
          <Reveal delay={0.1} width="100%">
            <div className="w-full h-px bg-black/10"></div>
          </Reveal>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {allProjects.map((project, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <Link
                href={`/work/${project.id}`}
                className="group cursor-pointer block"
              >
                {/* Image Container */}
                <div className="overflow-hidden mb-8 relative aspect-[4/3] bg-gray-100">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent z-10 transition-colors duration-1000 ease-out"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                  />
                </div>

                {/* Content */}
                <div className="flex justify-between items-end border-b border-black/10 pb-6 group-hover:border-black transition-colors duration-500">
                  <div className="relative">
                    <h3 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight mb-2 transform group-hover:-translate-y-1 transition-transform duration-500">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-4">
                      <p className="text-gray-500 text-xs font-bold uppercase tracking-widest group-hover:text-black transition-colors duration-500">
                        {project.category}
                      </p>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                        {project.year}
                      </p>
                    </div>
                  </div>

                  <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 pt-24 border-t border-black/10 text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl font-medium uppercase tracking-tight mb-8">
              Have a project in mind?
            </h2>
            <Link
              href="/contact"
              className="inline-block text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-all"
            >
              Start a Conversation
            </Link>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
