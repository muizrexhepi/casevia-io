"use client";

import { HelpCircle } from "lucide-react";

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
      "No, we don't offer a free trial — but we do have a free plan you can start with. No credit card required.",
  },
];

export function FAQsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent">
            <HelpCircle className="w-3.5 h-3.5" />
            FAQs
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.05]">
            Questions? We've got{" "}
            <span className="text-gradient-primary">answers</span>
          </h2>

          {/* <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about creating case studies with
            Casevia.
          </p> */}
        </div>

        {/* FAQ Grid - Simple, no animations */}
        <div className="grid gap-8 md:gap-10">
          {faqs.map((faq, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="font-semibold text-lg md:text-xl text-foreground">
                {faq.question}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center p-8 rounded-2xl bg-muted border border-border/50">
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
