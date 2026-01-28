"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { TEXT } from "@/lib/styles";
import { ProjectCarousel } from "@/components/ui/ProjectsCarousel";
import { PROJECTS } from "@/lib/projects";

export default function WorkShowcase() {
  const featuredProjects = PROJECTS.slice(0, 3).map((project) => ({
    slug: project.id,
    title: project.title,
    subtitle: project.tagline,
    imageUrl: project.image,
    category: project.category,
  }));

  return (
    <section id="work" className="py-20 md:py-32 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto w-full px-6 md:px-12">
        {/* Header - Stripped back for maximum impact */}
        <div className="mb-24 md:mb-32 text-center">
          <span
            className={`${TEXT.label} text-[#D1326E] mb-6 block uppercase tracking-[0.4em]`}
          >
            Selected Work
          </span>
          <h2
            className={`${TEXT.sectionTitle} leading-[0.9] tracking-tighter mx-auto max-w-4xl`}
          >
            Built to <span className="text-gradient">convert.</span>
            <br />
            Engineered to <span className="text-gradient">scale.</span>
          </h2>
        </div>

        {/* Mobile: Carousel stays for better UX on small screens */}
        <div className="md:hidden -mx-6">
          <ProjectCarousel items={featuredProjects} />
        </div>

        {/* Desktop: Asymmetric Editorial Grid */}
        <div className="hidden md:grid grid-cols-12 gap-8 items-start mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`relative group/item ${
                index === 0
                  ? "col-span-4 mt-0"
                  : index === 1
                    ? "col-span-4 mt-24" /* Staggered offset */
                    : "col-span-4 mt-12"
              }`}
            >
              <Link href={`/work/${project.slug}`} className="block relative">
                {/* Unique Card Container */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-[#221221] transition-all duration-700 ease-in-out group-hover/item:rounded-[1.5rem] group-hover/item:shadow-2xl group-hover/item:shadow-[#D1326E]/10">
                  {/* Image with subtle zoom */}
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="object-cover w-full h-full opacity-80 transition-transform duration-1000 ease-out group-hover/item:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#221221] via-[#221221]/20 to-transparent opacity-60 transition-opacity duration-500 group-hover/item:opacity-80" />

                  {/* Top-aligned 'Glass' Category */}
                  <div className="absolute top-6 left-6 overflow-hidden">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white uppercase tracking-widest transform -translate-y-12 opacity-0 transition-all duration-500 group-hover/item:translate-y-0 group-hover/item:opacity-100">
                      <Plus size={12} className="text-[#D1326E]" />{" "}
                      {project.category}
                    </span>
                  </div>

                  {/* Bottom-aligned Content */}
                  <div className="absolute inset-x-0 bottom-0 p-10 text-center flex flex-col items-center">
                    <h3 className="text-3xl font-medium text-white mb-3 tracking-tight transform transition-transform duration-500 group-hover/item:-translate-y-2">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm max-w-[240px] opacity-0 transition-all duration-500 group-hover/item:opacity-100 group-hover/item:-translate-y-2">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Floating "View" Indicator that follows mouse (CSS-based simplicity) */}
                <div className="absolute -bottom-4 right-8 w-14 h-14 bg-[#D1326E] rounded-full flex items-center justify-center text-white scale-0 transition-transform duration-500 group-hover/item:scale-100 shadow-xl shadow-[#D1326E]/40 z-20">
                  <ArrowRight size={24} />
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Final Call to Action - Under the Grid */}
        <div className="flex flex-col items-center justify-center gap-6 pt-12">
          <p className="text-[#221221]/40 text-sm font-medium tracking-[0.2em] uppercase">
            Curious about our capabilities?
          </p>
          <Link
            href="/work"
            className="group flex items-center gap-4 bg-[#221221] text-white px-8 py-4 rounded-full hover:bg-[#D1326E] transition-all duration-300 shadow-lg hover:shadow-[#D1326E]/20"
          >
            <span className="font-medium tracking-wide">View All Projects</span>
            <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <ArrowRight
                size={14}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
