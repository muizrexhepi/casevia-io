"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TEXT } from "@/lib/styles"; // Importing your new shared styles
import { ProjectCarousel } from "@/components/ui/ProjectsCarousel";
import { CASE_STUDIES } from "@/lib/constants";

export default function WorkShowcase() {
  return (
    <section id="work" className="py-20 md:py-32 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto w-full">
        {/* Header Block - Strict Grid Alignment */}
        <div className="px-6 md:px-12 grid lg:grid-cols-12 gap-10 lg:gap-24 mb-12 lg:items-end">
          {/* Left Column: Title */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <span className={TEXT.label}>Selected Works</span>
            <h2 className={TEXT.sectionTitle}>Global Nexus</h2>
          </div>

          {/* Right Column: Description & Link */}
          <div className="lg:col-span-8 lg:border-l lg:border-[#D1326E]/20 lg:pl-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className={`${TEXT.body} max-w-xl`}>
              Resilient engineering that scales. Discover how we architect
              growth engines for enterprises across three continents.
            </p>

            <Link
              href="/work"
              className={`${TEXT.link} whitespace-nowrap group`}
            >
              All Case Studies
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>

        {/* Full Width Carousel Container */}
        <div className="-mx-0">
          <ProjectCarousel items={CASE_STUDIES} />
        </div>
      </div>
    </section>
  );
}
