"use client";
import { Reveal } from "@/components/ui/Reveal";
import React, { useEffect } from "react";

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "01. Introduction",
      content:
        "These Terms of Service govern your use of the website located at Casevia.io and any related services provided by Casevia. By accessing Casevia.io, you agree to abide by these Terms of Service and to comply with all applicable laws and regulations.",
    },
    {
      title: "02. Intellectual Property",
      content:
        "All materials on Casevia.io, including text, graphics, logos, icons, and images, are the property of Casevia or its content suppliers and are protected by international copyright laws. The compilation of all content on this site is the exclusive property of Casevia.",
    },
    {
      title: "03. Use License",
      content:
        "Permission is granted to temporarily download one copy of the materials on Casevia's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not modify or copy the materials.",
    },
    {
      title: "04. Limitations",
      content:
        "In no event shall Casevia or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Casevia's website.",
    },
    {
      title: "05. Accuracy of Materials",
      content:
        "The materials appearing on Casevia's website could include technical, typographical, or photographic errors. Casevia does not warrant that any of the materials on its website are accurate, complete, or current. Casevia may make changes to the materials contained on its website at any time without notice.",
    },
  ];

  return (
    <div className="bg-[#050505] text-white min-h-screen pt-32 md:pt-40 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-start justify-center mb-24 md:mb-32">
          <Reveal>
            <span className="block text-left text-xs font-bold uppercase tracking-[0.25em] text-purple-400 mb-6">
              Legal
            </span>
          </Reveal>
          <Reveal width="100%">
            <h1 className="font-display text-[11vw] md:text-[8vw] leading-[0.8] font-black uppercase tracking-tighter text-left mb-12">
              Terms of <br /> Service
            </h1>
          </Reveal>
          <Reveal delay={0.1} width="100%">
            <div className="w-full h-px bg-white/10"></div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-4">
            <Reveal delay={0.2}>
              <div className="sticky top-32">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500 mb-2">
                  Last Updated
                </p>
                <p className="font-display text-xl font-medium uppercase tracking-tight text-white">
                  December 12, 2024
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8 space-y-16">
            {sections.map((section, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="border-b border-white/10 pb-16">
                  <h2 className="font-display text-2xl md:text-3xl font-medium uppercase tracking-tight mb-8 text-gray-200">
                    {section.title}
                  </h2>
                  <p className="text-sm md:text-base leading-loose text-gray-400 font-medium uppercase tracking-wide">
                    {section.content}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
