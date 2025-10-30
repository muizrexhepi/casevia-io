import { Upload, Sparkles, Download } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: Upload,
      title: "Upload your recording",
      description:
        "Drop in your Zoom call, phone recording, or video. We handle the rest.",
      illustration: (
        <div className="w-full h-40 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-lg flex items-center justify-center border border-border">
          <div className="text-center">
            <Upload className="w-12 h-12 mx-auto mb-2 text-primary" />
            <div className="text-xs text-muted-foreground">video.mp4</div>
          </div>
        </div>
      ),
    },
    {
      icon: Sparkles,
      title: "AI builds your story",
      description:
        "We identify the challenge, solution, and results. Plus pull the best quotes.",
      illustration: (
        <div className="w-full h-40 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 rounded-lg flex items-center justify-center border border-border p-4">
          <div className="space-y-2 w-full">
            <div className="h-2 bg-primary/30 rounded w-3/4 animate-pulse" />
            <div className="h-2 bg-primary/30 rounded w-full animate-pulse delay-100" />
            <div className="h-2 bg-primary/30 rounded w-5/6 animate-pulse delay-200" />
          </div>
        </div>
      ),
    },
    {
      icon: Download,
      title: "Export & publish",
      description:
        "Get Markdown, PDF, or HTML. Share on LinkedIn. Add to your site. Done.",
      illustration: (
        <div className="w-full h-40 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-lg flex items-center justify-center border border-border p-4">
          <div className="text-center space-y-2">
            <div className="text-3xl">📄</div>
            <div className="text-xs font-medium">case-study-acme-inc.pdf</div>
            <div className="text-xs text-muted-foreground">Ready to share</div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="container py-16 md:py-20">
      <div className="text-center space-y-3 mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold">
          Three steps. Ten minutes.
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          No complex workflows. No learning curve. Just upload and go.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={idx} className="relative">
              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
              )}

              <div className="relative space-y-4">
                {/* Step number */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <span className="text-sm font-semibold text-primary">
                      {idx + 1}
                    </span>
                  </div>
                  <Icon className="w-5 h-5 text-muted-foreground" />
                </div>

                {/* Illustration */}
                <div>{step.illustration}</div>

                {/* Text */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
