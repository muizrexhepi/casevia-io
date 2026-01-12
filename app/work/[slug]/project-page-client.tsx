"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, User } from "lucide-react"; // Added User icon for testimonial
import { Reveal } from "@/components/ui/Reveal";
import { Project } from "@/lib/projects";

interface ProjectPageClientProps {
  project: Project;
}

export default function ProjectPageClient({ project }: ProjectPageClientProps) {
  // Logic: Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen reveal active">
      {/* SECTION 1: HEADER & HERO 
        Styled with: pt-32 md:pt-48 pb-20
      */}
      <section className="pt-32 md:pt-48 pb-20">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          {/* Back Button */}
          <Reveal>
            <Link
              href="/work"
              className="text-[#D1326E] text-[13px] font-bold tracking-tight mb-16 hover:opacity-60 transition-all flex items-center gap-3 group w-fit"
            >
              <span className="w-8 h-8 rounded-full border border-[#D1326E]/20 flex items-center justify-center group-hover:bg-[#D1326E] group-hover:text-white transition-all">
                ←
              </span>
              Back to projects
            </Link>
          </Reveal>

          {/* Title & Info Grid */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 mb-20 items-end">
            <div className="lg:col-span-8">
              <Reveal>
                <p className="text-[13px] font-bold text-[#D1326E] tracking-tight mb-8">
                  {project.category} • {project.year}
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                {/* Note: Added inline gradient style since 'text-gradient' class might not be in your CSS */}
                <h1 className="text-5xl md:text-8xl lg:text-[8rem] font-normal leading-[0.85] tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-br from-[#4A1D3A] to-[#D1326E]">
                  {project.title}
                </h1>
              </Reveal>
            </div>

            {/* Sidebar Stats (Role/Impact) */}
            <div className="lg:col-span-4">
              <Reveal delay={0.2}>
                <div className="space-y-10 border-l border-[#221221]/10 pl-10">
                  <div>
                    <p className="text-[11px] font-bold text-[#221221]/40 tracking-tight mb-2">
                      Core Category
                    </p>
                    <p className="text-xl font-normal tracking-tight text-[#4A1D3A]">
                      {project.category}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-[#221221]/40 tracking-tight mb-2">
                      Primary Highlight
                    </p>
                    <p className="text-xl font-normal tracking-tight text-[#4A1D3A]">
                      {/* Dynamically grabbing the first stat or a fallback */}
                      {project.stats[0]?.val} {project.stats[0]?.label}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Hero Image */}
          <Reveal width="100%" delay={0.3}>
            <div className="w-full aspect-[21/9] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative bg-[#111]">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#221221]/40 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 2: METRICS BAR
        Styled with: py-20 bg-[#221221]
      */}
      <section className="py-20 bg-[#221221] text-white">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-24">
            {project.stats.map((metric, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="text-left">
                  <p className="text-4xl md:text-6xl lg:text-7xl font-normal tracking-tighter text-[#D1326E] mb-3">
                    {metric.val}
                  </p>
                  <div className="h-0.5 w-8 bg-[#D1326E]/40 mb-3" />
                  <p className="text-[12px] font-bold tracking-tight text-white/40 uppercase">
                    {metric.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: MAIN CONTENT (Challenge/Outcome + Sidebar)
        Styled with: py-24 md:py-32
      */}
      <section className="py-24 md:py-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-24">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-32">
            {/* Challenge */}
            <div>
              <Reveal>
                <div className="text-[12px] font-bold text-[#D1326E] tracking-tight mb-8">
                  01 / The Challenge
                </div>
                <h2 className="text-4xl md:text-7xl font-normal tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-[#4A1D3A] to-[#D1326E] leading-[1] mb-10 italic">
                  Addressing inefficiencies
                </h2>
                <p className="text-xl md:text-2xl text-[#4A1D3A]/90 leading-relaxed font-normal tracking-tight">
                  {project.brief}
                </p>
              </Reveal>
            </div>

            {/* Outcome (Execution/Impact) */}
            <div>
              <Reveal>
                <div className="text-[12px] font-bold text-[#D1326E] tracking-tight mb-8">
                  02 / The Outcome
                </div>
                <h2 className="text-4xl md:text-7xl font-normal tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-[#4A1D3A] to-[#D1326E] leading-[1] mb-10 italic">
                  Sustainable Growth
                </h2>
                <div className="space-y-8">
                  <p className="text-xl md:text-2xl text-[#4A1D3A]/90 leading-relaxed font-normal tracking-tight">
                    {project.execution}
                  </p>
                  {project.impact && (
                    <div className="pl-6 border-l-2 border-[#D1326E]/30">
                      <p className="text-lg text-[#4A1D3A]/80 font-medium">
                        {project.impact}
                      </p>
                    </div>
                  )}
                </div>
              </Reveal>
            </div>

            {/* Extra Image (Secondary) */}
            <Reveal width="100%">
              <div className="w-full aspect-[16/9] rounded-[2rem] overflow-hidden shadow-lg mt-12">
                <img
                  src={project.secondaryImage}
                  alt="Secondary View"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-10">
              {/* Tech Stack Card */}
              {project.techStack && (
                <Reveal delay={0.2} width="100%">
                  <div className="p-10 md:p-12 border border-[#221221]/5 rounded-[2.5rem] bg-white/40 backdrop-blur-xl shadow-xl">
                    <h3 className="text-[12px] font-bold text-[#D1326E] tracking-tight mb-10 uppercase">
                      Technical Stack
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-5 py-2.5 rounded-full bg-white border border-[#221221]/5 text-[11px] font-bold text-[#221221] shadow-sm tracking-tight uppercase"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}

              {/* Testimonial Card */}
              {project.quote && (
                <Reveal delay={0.4} width="100%">
                  <div className="p-10 md:p-12 bg-white rounded-[3rem] shadow-2xl relative overflow-hidden group border border-[#221221]/5">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#D1326E]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="text-6xl text-[#D1326E]/10 font-serif leading-none mb-2">
                      “
                    </div>
                    <p className="text-xl md:text-2xl font-medium italic text-[#4A1D3A] leading-snug mb-10 relative z-10">
                      {project.quote.text}
                    </p>
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-[#D1326E]/10 rounded-full flex items-center justify-center shrink-0">
                        <User className="text-[#D1326E]" size={24} />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-[#221221]">
                          {project.quote.author}
                        </p>
                        <p className="text-sm text-[#D1326E] font-bold tracking-tight">
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

      {/* SECTION 4: FOOTER CTA
        Styled with: py-24 md:py-40 bg-[#221221]
      */}
      <section className="py-24 md:py-40 bg-[#221221] text-white text-center overflow-hidden relative">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
          <Reveal>
            <h2 className="text-5xl md:text-8xl lg:text-[8rem] font-normal tracking-tighter mb-16 leading-[0.9]">
              Ready to build <br />
              your legacy?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center text-lg px-16 py-8 bg-white text-[#221221] rounded-full font-bold hover:bg-[#D1326E] hover:text-white transition-colors duration-300"
            >
              Start Project <ArrowRight className="ml-4" size={28} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
