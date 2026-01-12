import React from "react";
import { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy | Casevia",
  description: "Enterprise-grade data protection and privacy standards.",
};

export default function PrivacyPage() {
  const sections = [
    {
      id: "01",
      title: "Data Collection",
      content:
        "We collect information necessary to architect your digital systems, including technical requirements and professional contact details provided during consultations.",
    },
    {
      id: "02",
      title: "Usage & Security",
      content:
        "Your data is used exclusively for project execution. We implement multi-layer encryption and localized data persistence to protect your business legacy.",
    },
    {
      id: "03",
      title: "Your Rights",
      content:
        "As an enterprise partner, you maintain full control over your project data. You may request data audits or deletion at any stage of our partnership.",
    },
  ];

  return (
    <div className="pt-32 md:pt-48 pb-32 min-h-screen">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="max-w-5xl mb-24">
          <Reveal>
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-normal leading-[0.85] tracking-tighter text-gradient mb-12 italic">
              Privacy <br /> Policy
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
              <p className="text-[12px] font-bold text-[#D1326E] tracking-[0.2em] uppercase border-b border-[#D1326E]/20 pb-2">
                Last Updated: January 12, 2026
              </p>
              <p className="text-xl text-[#221221]/60 font-medium tracking-tight">
                Our commitment to your data integrity.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Enterprise Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-16 md:gap-24 border-t border-[#221221]/5 pt-20">
          <div className="lg:col-span-4 sticky top-32 h-fit">
            <h2 className="text-[11px] font-bold text-[#221221]/40 tracking-[0.3em] uppercase mb-8">
              Governance Framework
            </h2>
            <p className="text-lg text-[#221221]/80 leading-relaxed mb-8">
              Casevia operates under strict European data protection standards,
              ensuring that every line of code we write for you respects user
              privacy.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-24">
            {sections.map((section) => (
              <Reveal key={section.id} width="100%">
                <div className="group">
                  <div className="flex items-start gap-8 mb-6">
                    <span className="text-[#D1326E] font-bold text-sm tracking-tighter pt-1">
                      {section.id}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-normal tracking-tighter text-[#221221] group-hover:italic transition-all">
                      {section.title}
                    </h3>
                  </div>
                  <div className="pl-12">
                    <p className="text-xl md:text-2xl text-[#4A1D3A]/80 leading-relaxed font-normal tracking-tight max-w-3xl">
                      {section.content}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
