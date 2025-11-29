"use client";

import React, { useState } from "react";
// Using the default shadcn icons for contrast with neutral tones
import { ChevronDown, ChevronUp } from "lucide-react";

export const FAQ = () => {
  // Initialize with the first item open
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What file formats do you support?",
      a: "We support all major audio and video formats including MP3, WAV, M4A, MP4, and MOV.",
    },
    {
      q: "Can I customize the output structure?",
      a: "Yes. Pro and Agency plans allow you to define custom headers and sections.",
    },
    {
      q: "How accurate is the transcription?",
      a: "We use top-tier speech-to-text models that typically achieve 98-99% accuracy.",
    },
    {
      q: "Is my data secure?",
      a: "Absolutely. All uploads are encrypted at rest and in transit.",
    },
    {
      q: "Do you offer a free trial?",
      a: "Yes! You can generate your first case study for free.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-32 bg-muted border-t border-border font-sans">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        {/* Heading: Using standard sans-serif font, bold, and foreground color */}
        <h2 className="text-4xl font-sans font-bold text-foreground mb-16 text-center tracking-tight">
          Frequently asked questions
        </h2>

        {/* Accordion Container: Minimalist border and background */}
        <div className="space-y-0 border border-border bg-card rounded-xl overflow-hidden shadow-lg">
          {faqs.map((faq, i) => (
            <div
              key={i}
              // Border below the active item is just a subtle darker border
              className={`border-b border-border transition-colors duration-300 ${
                openIndex === i ? "bg-muted/30" : "last:border-b-0"
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                onClick={() => toggleAccordion(i)}
              >
                <span
                  // Active question text is bold and uses main foreground color
                  className={`font-semibold text-base pr-8 transition-colors ${
                    openIndex === i ? "text-foreground" : "text-foreground/90"
                  }`}
                >
                  {faq.q}
                </span>

                {/* Icons: Use foreground color for high contrast */}
                {openIndex === i ? (
                  <ChevronUp
                    size={20}
                    className="flex-shrink-0 text-foreground"
                  />
                ) : (
                  <ChevronDown
                    size={20}
                    className="flex-shrink-0 text-muted-foreground"
                  />
                )}
              </button>

              {openIndex === i && (
                <div
                  // Answer Content: Subtle background color, lighter border top
                  className="px-6 pb-6 text-muted-foreground text-base leading-relaxed border-t border-border pt-4 bg-muted/50"
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
