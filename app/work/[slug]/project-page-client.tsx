// ==================== PROJECT-PAGE-CLIENT.TSX ====================
"use client";
import React, { useEffect } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  TrendingUp,
  Zap,
  Award,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import { getProjectBySlug, Project } from "@/lib/projects";

interface ProjectPageClientProps {
  project: Project;
}

export default function ProjectPageClient({ project }: ProjectPageClientProps) {
  const location = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const nextLink = project.nextProjectSlug
    ? `/work/${project.nextProjectSlug}`
    : "/work";

  const nextTitle = project.nextProjectTitle || "Back to Archive";

  return (
    <div className="bg-[#050505] text-white min-h-screen pt-32 md:pt-40">
      <div className="container mx-auto px-6 md:px-12 text-left">
        {/* Header Section */}
        <div className="flex flex-col items-start justify-start mb-16 md:mb-24">
          <Reveal>
            <span className="block text-left text-xs font-bold uppercase tracking-[0.25em] text-purple-500 mb-6">
              Case Study
            </span>
          </Reveal>
          <Reveal width="100%">
            <h1 className="font-display text-[10vw] md:text-[8vw] leading-[0.85] font-black uppercase tracking-tighter text-left mb-8">
              {project.title.split(" ").slice(0, 1)} <br />
              {project.title.split(" ").slice(1).join(" ")}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-lg md:text-xl text-gray-400 font-medium mb-12 max-w-3xl leading-relaxed">
              {project.tagline}
            </p>
          </Reveal>

          {/* Faded Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          <div className="w-full pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-gray-400 text-left">
            <Reveal delay={0.2}>
              <span>{project.category}</span>
            </Reveal>
            <Reveal delay={0.3}>
              <span>Casevia Project</span>
            </Reveal>
            <Reveal delay={0.4}>
              <span>{project.year}</span>
            </Reveal>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-24 md:mb-32">
          <Reveal width="100%" delay={0.5}>
            <div className="w-full aspect-video md:aspect-[2.4/1] bg-[#111] overflow-hidden rounded-sm border border-white/10 relative group">
              <img
                src={project.heroImage}
                alt={`${project.title} Hero`}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </Reveal>
        </div>

        {/* Stats Grid with Icons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0 relative pb-16 md:pb-24 mb-24 md:mb-32 text-left">
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          {project.stats.map((stat, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div
                className={`flex flex-col items-start justify-start ${i !== 0 ? "md:border-l md:border-white/10 md:pl-12" : ""}`}
              >
                <div className="mb-3 text-purple-500">
                  {stat.icon === "trend" && <TrendingUp className="w-6 h-6" />}
                  {stat.icon === "zap" && <Zap className="w-6 h-6" />}
                  {stat.icon === "check" && (
                    <CheckCircle2 className="w-6 h-6" />
                  )}
                  {stat.icon === "award" && <Award className="w-6 h-6" />}
                </div>
                <span className="font-display text-4xl md:text-6xl font-medium tracking-tight mb-2 md:mb-4">
                  {stat.val}
                </span>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-500 text-left">
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* The Challenge */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 md:mb-32 text-left gap-12">
          <div className="md:w-1/3">
            <Reveal>
              <h2 className="font-display text-4xl md:text-5xl font-medium uppercase tracking-tight text-left">
                The Challenge
              </h2>
            </Reveal>
          </div>
          <div className="md:w-1/2">
            <Reveal delay={0.1}>
              <div className="space-y-6 text-gray-300 font-medium">
                <p className="text-base md:text-lg leading-loose text-left">
                  {project.brief}
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Image Break */}
        <div className="mb-24 md:mb-32">
          <Reveal width="100%">
            <div className="w-full aspect-[4/3] md:aspect-[2/1] bg-[#111] overflow-hidden flex items-center justify-center rounded-sm border border-white/10 relative group">
              <img
                src={project.secondaryImage}
                alt="Project Details"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
          </Reveal>
        </div>

        {/* Key Deliverables Section - NEW */}
        {project.deliverables && (
          <div className="mb-24 md:mb-32">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl font-medium uppercase tracking-tight mb-12 text-left">
                Key Deliverables
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.deliverables.map((item, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="bg-[#0a0a0a] p-6 md:p-8 border border-white/10 rounded-sm hover:border-purple-500/30 transition-colors duration-300">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-sm uppercase tracking-wider mb-2 text-white">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Quote Section */}
        {project.quote && (
          <div className="bg-[#0a0a0a] p-8 md:p-24 mb-24 md:mb-32 border border-white/10 text-left relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"></div>
            <div className="max-w-4xl mr-auto relative z-10">
              <Reveal>
                <p className="font-display text-2xl md:text-4xl font-medium leading-tight mb-12 text-gray-200">
                  &ldquo;{project.quote.text}&rdquo;
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="flex flex-col items-start">
                  <span className="font-bold text-xs uppercase tracking-[0.2em] mb-1 text-white">
                    {project.quote.author}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500">
                    {project.quote.title}
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        )}

        {/* The Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 mb-24 md:mb-32 items-center text-left">
          <div className="order-2 lg:order-1">
            <Reveal>
              <h2 className="font-display text-3xl md:text-5xl font-medium uppercase tracking-tight mb-8 text-left">
                Our Approach
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-6 text-gray-300 font-medium">
                <p className="text-base md:text-lg leading-loose text-left">
                  {project.execution}
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2} width="100%" className="order-1 lg:order-2">
            <div className="aspect-[3/4] bg-[#111] overflow-hidden rounded-sm border border-white/10 relative group">
              <img
                src={project.heroImage}
                alt="Strategic Solution"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent"></div>
            </div>
          </Reveal>
        </div>

        {/* Tech Stack Section - NEW */}
        {project.techStack && (
          <div className="mb-24 md:mb-32 bg-[#0a0a0a] border border-white/10 rounded-sm p-8 md:p-12">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl font-medium uppercase tracking-tight mb-8 text-left">
                Technology Stack
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-[#050505] border border-white/10 rounded-sm text-xs font-bold uppercase tracking-wider text-gray-400 hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        )}

        {/* Results Impact Section - NEW */}
        {project.impact && (
          <div className="mb-24 md:mb-32">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl font-medium uppercase tracking-tight mb-8 text-left">
                Business Impact
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base md:text-lg text-gray-300 leading-loose max-w-4xl">
                {project.impact}
              </p>
            </Reveal>
          </div>
        )}

        {/* Next Project Footer */}
        <div className="relative pt-24 pb-12 text-left">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl font-medium uppercase tracking-tight text-left mb-16">
              Next Case
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal delay={0.1}>
              <Link href={nextLink} className="group block cursor-pointer">
                <div className="aspect-[4/3] bg-[#111] overflow-hidden mb-6 relative rounded-sm border border-white/10">
                  <img
                    src={
                      project.nextProjectSlug
                        ? getProjectBySlug(project.nextProjectSlug)?.heroImage
                        : project.image
                    }
                    alt={nextTitle}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
                </div>
                <div className="flex justify-between items-center text-left">
                  <h3 className="font-display text-xl font-bold uppercase group-hover:text-purple-400 transition-colors text-white">
                    {nextTitle}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-purple-400" />
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
