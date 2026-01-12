import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: LegalLayoutProps) {
  return (
    <div className="pt-32 md:pt-48 pb-32 min-h-screen ">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <Reveal width="100%">
          <h1 className="text-5xl md:text-8xl lg:text-[7rem] font-normal leading-[0.9] tracking-tighter text-gradient mb-12 max-w-5xl italic py-2 pr-4">
            {title.split(" ").map((word, i) => (
              <React.Fragment key={i}>
                {word} {i === 0 && <br className="block" />}
              </React.Fragment>
            ))}
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-[12px] font-bold text-[#d1326e] tracking-tight mb-16 border-b border-[#d1326e]/20 pb-2 inline-block">
            Last Updated: {lastUpdated}
          </p>
        </Reveal>

        <Reveal delay={0.2} width="100%">
          <div className="max-w-4xl prose prose-lg md:prose-xl prose-stone prose-headings:tracking-tighter prose-headings:font-normal prose-headings:text-[#221221] prose-p:text-[#4a1d3a]/80 prose-strong:text-[#d1326e]">
            {children}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
