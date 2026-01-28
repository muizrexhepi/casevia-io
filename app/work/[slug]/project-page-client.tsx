"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  User,
  ChevronRight,
  Activity,
  Zap,
  Shield,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Project } from "@/lib/projects";
import { TEXT } from "@/lib/styles";

interface ProjectPageClientProps {
  project: Project;
}

export default function ProjectPageClient({ project }: ProjectPageClientProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen text-[#221221]">
      {/* SECTION 1: ENTERPRISE HEADER */}
      <section className="pt-32 md:pt-48 pb-16">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <Reveal>
            <Link
              href="/work"
              className="flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[#D1326E] mb-12 hover:opacity-70 transition-opacity"
            >
              <ArrowRight size={14} className="rotate-180" />
              Back to Portfolio
            </Link>
          </Reveal>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="max-w-4xl">
              <Reveal>
                <p className="text-[13px] font-bold text-[#221221]/40 tracking-widest uppercase mb-4">
                  {project.category} // {project.year}
                </p>
                <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-normal leading-[0.9] tracking-tighter text-gradient">
                  {project.title}
                </h1>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <div className="lg:text-right">
                <p className="text-xl text-[#221221]/60 font-medium max-w-sm">
                  {project.tagline}
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal width="100%" delay={0.3}>
            <div className="w-full aspect-[21/9] rounded-[2rem] overflow-hidden bg-[#221221] shadow-2xl">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 2: PERFORMANCE METRICS BAR */}
      <section className="py-16 border-y border-[#221221]/5 bg-gray-50/30">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {project.stats.map((metric, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-[#D1326E] uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Activity size={12} /> {metric.label}
                  </span>
                  <span className="text-4xl md:text-5xl font-medium tracking-tighter">
                    {metric.val}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: THE ANALYSIS (CHALLENGE & OUTCOME) */}
      <section className="py-24 md:py-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-20">
          {/* Main Dossier */}
          <div className="lg:col-span-7 space-y-32">
            {/* 01 / Challenge */}
            <div className="relative">
              <Reveal>
                <span className="absolute -left-8 md:-left-12 top-0 text-[12px] font-bold text-[#D1326E]/30 rotate-90 origin-left uppercase tracking-widest">
                  Process_01
                </span>
                <h2 className="text-4xl md:text-6xl font-normal tracking-tight mb-10">
                  The Challenge
                </h2>
                <p className="text-xl md:text-2xl text-[#221221]/70 leading-relaxed font-normal">
                  {project.brief}
                </p>
              </Reveal>
            </div>

            {/* 02 / Outcome */}
            <div className="relative pt-20 border-t border-[#221221]/5">
              <Reveal>
                <span className="absolute -left-8 md:-left-12 top-20 text-[12px] font-bold text-[#D1326E]/30 rotate-90 origin-left uppercase tracking-widest">
                  Result_02
                </span>
                <h2 className="text-4xl md:text-6xl font-normal tracking-tight mb-10">
                  The Outcome
                </h2>
                <div className="space-y-8">
                  <p className="text-xl md:text-2xl text-[#221221]/80 leading-relaxed">
                    {project.execution}
                  </p>
                  {project.impact && (
                    <div className="p-8 bg-[#D1326E]/5 rounded-3xl border border-[#D1326E]/10">
                      <p className="text-lg font-bold text-[#D1326E] mb-2 uppercase tracking-widest text-[11px]">
                        Commercial Impact
                      </p>
                      <p className="text-xl text-[#221221] font-medium leading-relaxed">
                        {project.impact}
                      </p>
                    </div>
                  )}
                </div>
              </Reveal>
            </div>

            <Reveal width="100%">
              <div className="w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-lg">
                <img
                  src={project.secondaryImage}
                  alt="Detailed View"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* Right Column: Technical Spec Sidebar */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-12">
              {/* Deliverables List */}
              {project.deliverables && (
                <Reveal width="100%">
                  <div className="p-10 border border-[#221221]/10 rounded-[2rem] bg-white">
                    <h3 className="text-[11px] font-bold text-[#221221]/40 uppercase tracking-[0.2em] mb-8 pb-4 border-b border-[#221221]/5">
                      Service Matrix Deliverables
                    </h3>
                    <ul className="space-y-6">
                      {project.deliverables.map((item, i) => (
                        <li key={i} className="group">
                          <h4 className="font-bold text-[#221221] group-hover:text-[#D1326E] transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-sm text-[#221221]/50 leading-relaxed">
                            {item.description}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}

              {/* Technical Infrastructure */}
              <Reveal width="100%" delay={0.2}>
                <div className="px-10">
                  <h3 className="text-[11px] font-bold text-[#221221]/40 uppercase tracking-[0.2em] mb-6">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack?.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-gray-50 border border-[#221221]/5 rounded-lg text-[10px] font-bold uppercase tracking-widest"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Executive Testimonial */}
              {project.quote && (
                <Reveal width="100%" delay={0.3}>
                  <div className="p-10 bg-[#221221] rounded-[2.5rem] text-white">
                    <p className="text-xl font-normal leading-relaxed mb-8 opacity-90">
                      "{project.quote.text}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#D1326E] flex items-center justify-center font-bold">
                        {project.quote.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-sm">
                          {project.quote.author}
                        </p>
                        <p className="text-[10px] uppercase opacity-40 tracking-widest">
                          {project.quote.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: NEXT PROJECT (Immersive) */}
      {project.nextProjectSlug && (
        <section className="border-t border-[#221221]/5 bg-[#FDFBFD]">
          <Link
            href={`/work/${project.nextProjectSlug}`}
            className="group block py-32 px-6 md:px-12 hover:bg-[#D1326E]/[0.02] transition-colors"
          >
            <div className="max-w-screen-2xl px-6 md:px-12 mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <div>
                <span className="text-[11px] font-bold text-[#D1326E] tracking-[0.4em] uppercase mb-4 block">
                  Next Case Study
                </span>
                <h2 className="text-5xl md:text-8xl font-normal tracking-tighter group-hover:translate-x-4 transition-transform duration-700">
                  {project.nextProjectTitle || "View Next"}
                </h2>
              </div>
              <div className="mt-12 md:mt-0 w-24 h-24 rounded-full border border-[#221221]/10 flex items-center justify-center group-hover:bg-[#221221] group-hover:text-white transition-all duration-500">
                <ChevronRight size={40} />
              </div>
            </div>
          </Link>
        </section>
      )}
    </div>
  );
}
