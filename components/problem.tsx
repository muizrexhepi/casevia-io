"use client";
import {
  Clock,
  DollarSign,
  FileQuestion,
  MessageSquareX,
  AlertCircle,
} from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      icon: Clock,
      title: "Takes days or weeks to write",
      description:
        "Manual writing is slow. By the time you finish, momentum is gone and the client's excitement has faded.",
      stat: "2-3 weeks",
    },
    {
      icon: DollarSign,
      title: "Expensive to outsource",
      description:
        "Writers cost $500-2000 per case study. Plus hours of briefing, revisions, and back-and-forth.",
      stat: "$500-2000",
    },
    {
      icon: FileQuestion,
      title: "Inconsistent quality and voice",
      description:
        "Different writers mean different styles. Your case studies feel disconnected from your brand.",
      stat: "No control",
    },
    {
      icon: MessageSquareX,
      title: "Clients disappear during review",
      description:
        "Getting interview time is hard enough. Then they ghost you when you need approval on drafts.",
      stat: "Endless wait",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-destructive/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-primary/5 to-transparent rounded-full blur-3xl" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-10">
            {/* Header */}
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 border border-destructive/20 text-sm font-medium text-destructive">
                <AlertCircle className="w-3.5 h-3.5" />
                The Problem
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
                Creating case studies{" "}
                <span className="text-gradient-primary">
                  shouldn't be this hard
                </span>
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Your team has done incredible work. But turning that into
                compelling stories? That's where everything breaks down.
              </p>
            </div>

            {/* Problems Grid - 2x2 */}
            <div className="grid sm:grid-cols-2 gap-4">
              {problems.map(({ icon: Icon, title, description, stat }, idx) => (
                <div
                  key={idx}
                  className="group relative bg-card border-2 border-border/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:border-destructive/20 hover:-translate-y-1"
                  style={{
                    animation: `fadeIn 0.6s ease-out ${idx * 0.1}s both`,
                  }}
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                  <div className="relative z-10 space-y-4">
                    {/* Icon and Stat */}
                    <div className="flex items-start justify-between">
                      <div className="w-11 h-11 rounded-xl bg-destructive/10 border border-destructive/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <Icon
                          className="w-5 h-5 text-destructive"
                          strokeWidth={1.5}
                        />
                      </div>
                      <span className="text-xs font-bold text-destructive/60 bg-destructive/5 px-2.5 py-1 rounded-full">
                        {stat}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="font-semibold text-base leading-tight text-foreground">
                        {title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 via-primary/10 to-accent/10 rounded-full blur-3xl opacity-60" />

              {/* Image container */}
              <div className="relative">
                <img
                  src="/icons/problem.webp"
                  alt="Frustrated marketer struggling with case study creation"
                  className="w-full h-auto relative z-10 animate-float"
                />

                {/* Decorative corner accents */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-bl from-destructive/10 to-transparent rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom callout */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-lg">
            Sound familiar?{" "}
            <span className="text-foreground font-semibold">
              There's a better way
            </span>{" "}
            →
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
