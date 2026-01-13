"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TEXT } from "@/lib/styles";
import { ProjectCarousel } from "@/components/ui/ProjectsCarousel";
import { PROJECTS } from "@/lib/projects";

export default function WorkShowcase() {
  // Only show first 3 projects
  const featuredProjects = PROJECTS.slice(0, 3).map((project) => ({
    slug: project.id,
    title: project.title,
    subtitle: project.tagline,
    imageUrl: project.image,
    category: project.category,
  }));

  return (
    <section id="work" className="py-32 md:py-40 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto w-full">
        {/* Header Block - Clean Grid */}
        <div className="px-6 md:px-12 mb-20">
          <div className="grid lg:grid-cols-12 gap-16 items-end">
            {/* Left: Title */}
            <div className="lg:col-span-5">
              <span className={TEXT.label}>Selected Work</span>
              <h2 className={`${TEXT.sectionTitle} mt-4`}>
                Built to <span className="text-gradient">convert.</span>
                <br />
                Engineered to <span className="text-gradient">scale.</span>
              </h2>
            </div>

            {/* Right: Description */}
            <div className="lg:col-span-7 lg:border-l lg:border-[#D1326E]/20 lg:pl-12 flex flex-col justify-end gap-8">
              <p className={`${TEXT.body} text-[#221221]/70 max-w-xl`}>
                From AI-powered productivity tools to high-volume booking
                platforms processing millions—every project delivers measurable
                business impact through technical excellence.
              </p>

              <Link href="/work" className={`${TEXT.link} self-start group`}>
                View All Projects
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden -mx-0">
          <ProjectCarousel items={featuredProjects} />
        </div>

        {/* Desktop: Grid of 3 */}
        <div className="hidden md:block px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProjects.map((project, index) => (
              <Link
                key={index}
                href={`/work/${project.slug}`}
                className="group/card relative"
              >
                <div className="relative h-[550px] w-full overflow-hidden rounded-[2rem] bg-gray-100 transition-transform duration-500 hover:-translate-y-2">
                  {/* Image */}
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover/card:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#221221]/90 via-[#221221]/20 to-transparent opacity-80" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 w-full p-8 lg:p-10 text-white flex flex-col gap-2">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#D1326E] mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-2xl lg:text-4xl font-normal tracking-tighter leading-none">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-sm lg:text-base line-clamp-2 max-w-[90%]">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Hover Button */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="text-white" size={20} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
