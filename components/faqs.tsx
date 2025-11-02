"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to create a case study?",
    answer:
      "Most case studies are ready in 5-10 minutes. Just upload your interview recording, and our AI handles transcription, analysis, and drafting automatically.",
  },
  {
    question: "What file formats do you support?",
    answer:
      "We support all major audio and video formats including MP3, WAV, MP4, MOV, and more. You can upload recordings from Zoom, Google Meet, Loom, or any other recording tool.",
  },
  {
    question: "Can I customize the output to match my brand?",
    answer:
      "Yes! You can set your brand voice, tone, and style preferences. Every case study will be formatted consistently with your brand guidelines.",
  },
  {
    question: "How accurate is the AI transcription?",
    answer:
      "Our transcription is 95%+ accurate for clear audio. The AI also identifies speakers, extracts key quotes, and highlights important metrics automatically.",
  },
  {
    question: "What if I need to make edits?",
    answer:
      "You have full editing control. Review and refine the generated draft before publishing. Most users only need minor tweaks, saving hours compared to writing from scratch.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes! Start with our free plan to test Casevia with your first case study. No credit card required.",
  },
];

export function FAQsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-accent/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl" />

      <div className="container max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent">
            <HelpCircle className="w-3.5 h-3.5" />
            FAQs
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            Questions? We've got answers
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about creating case studies with
            Casevia.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="border-2 border-border/50 rounded-2xl bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 md:px-8 py-6 flex items-start justify-between gap-4 text-left transition-colors"
                >
                  <span className="font-semibold text-lg text-foreground pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  >
                    {isOpen ? (
                      <Minus
                        className="w-4 h-4 text-primary"
                        strokeWidth={2.5}
                      />
                    ) : (
                      <Plus
                        className="w-4 h-4 text-primary"
                        strokeWidth={2.5}
                      />
                    )}
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 md:px-8 pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-br from-muted/50 to-transparent border border-border/50">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Get in touch
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
