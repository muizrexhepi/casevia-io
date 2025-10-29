"use client";

import { Upload, Wand2, FileText, Download } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Your Interview",
    description:
      "Drop in your recorded client conversation—audio or video, up to 60 minutes.",
    detail: "Supports .mp4, .mp3, .wav, .mov, and more",
  },
  {
    icon: Wand2,
    title: "AI Does the Heavy Lifting",
    description:
      "We transcribe, analyze, and extract the story: challenge, solution, results, and quotes.",
    detail: "Powered by AI",
  },
  {
    icon: FileText,
    title: "Get Your Case Study",
    description:
      "Review a polished, publish-ready case study with proper structure and narrative flow.",
    detail: "Choose from multiple templates",
  },
  {
    icon: Download,
    title: "Export & Share",
    description:
      "Download as Markdown, HTML or PDF. Generate SEO-friendly posts or social content in one click.",
    detail: "No watermark on paid plans",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-12 lg:py-24 relative overflow-hidden">
      {/* Background gradient */}{" "}
      <div className="absolute inset-0 opacity-[0.15] bg-[repeating-linear-gradient(-45deg,var(--border),var(--border)_1px,transparent_1px,transparent_16px)]" />
      <div className="container relative z-10 max-w-5xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16 text-balance">
          <h2 className="text-3xl md:text-4xl font-semibold text-center">
            From conversation to case study
            <br />
            <span className="text-primary">in four simple steps.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stop spending days writing case studies manually. Let Casevia handle
            the transcription, analysis, and formatting—so you can focus on
            closing deals.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="group relative">
                {/* Connecting line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[calc(100%+1.5rem)] w-12 h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                )}

                <div className="flex gap-4">
                  {/* Icon container */}
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-2 pt-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-primary">
                        STEP {index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                    <p className="text-sm text-muted-foreground/70 italic">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom stats/social proof */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
            <div>
              <div className="text-3xl font-bold text-foreground">~10 min</div>
              <div className="text-sm text-muted-foreground mt-1">
                Average processing time
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">
                5x faster
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Than manual creation
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">
                $0 to start
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Try it free, no credit card
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
