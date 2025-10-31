"use client";
import { Clock, DollarSign, FileQuestion, MessageSquareX } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      icon: Clock,
      title: "Takes days or weeks to write",
      description:
        "Manual writing is slow. By the time you finish, momentum is gone and the client's excitement has faded.",
    },
    {
      icon: DollarSign,
      title: "Expensive to outsource",
      description:
        "Writers cost $500-2000 per case study. Plus hours of briefing, revisions, and back-and-forth.",
    },
    {
      icon: FileQuestion,
      title: "Inconsistent quality and voice",
      description:
        "Different writers mean different styles. Your case studies feel disconnected from your brand.",
    },
    {
      icon: MessageSquareX,
      title: "Clients disappear during review",
      description:
        "Getting interview time is hard enough. Then they ghost you when you need approval on drafts.",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-muted">
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl tracking-tight leading-[1]">
                Creating case studies shouldn't be this hard
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Your team has done incredible work. But turning that into
                compelling stories? That's where everything breaks down.
              </p>
            </div>

            {/* Problems List */}
            <div className="space-y-6">
              {problems.map(({ icon: Icon, title, description }, idx) => (
                <div
                  key={idx}
                  className="group flex items-start gap-4 transition-all duration-300 ease-out hover:translate-x-1"
                  style={{
                    animation: `fadeIn 0.6s ease-out ${idx * 0.1}s both`,
                  }}
                >
                  {/* Icon Container */}
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-10 h-10 rounded-lg bg-red-50 dark:bg-red-950/30 flex items-center justify-center border border-red-100 dark:border-red-900/50 transition-colors group-hover:bg-red-100 dark:group-hover:bg-red-900/50">
                      <Icon
                        className="w-5 h-5 text-red-600 dark:text-red-400"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 pt-0.5 space-y-1">
                    <h3 className="font-medium text-base leading-tight">
                      {title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-100/20 to-orange-100/20 dark:from-red-950/10 dark:to-orange-950/10 rounded-3xl blur-3xl" />

              {/* Image container */}
              <div className="relative">
                <img
                  src="/icons/problem.webp"
                  alt="Frustrated marketer struggling with case study creation"
                  className="w-full h-auto relative z-10"
                  style={{
                    animation: "float 6s ease-in-out infinite",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
}
