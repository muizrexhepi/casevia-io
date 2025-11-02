import Image from "next/image";
import { Mic, Sparkles, Download, PenSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Helper component with brand colors
function BentoCardHeader({
  icon,
  title,
  color = "primary",
}: {
  icon: React.ReactNode;
  title: string;
  color?: "primary" | "secondary" | "accent";
}) {
  const colorMap = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    accent: "bg-accent/10 text-accent",
  };

  return (
    <div className="flex items-center gap-3">
      <div
        className={`w-11 h-11 flex items-center justify-center rounded-xl ${colorMap[color]} transition-transform duration-300 hover:scale-110`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
}

export default function BentoSection() {
  return (
    <section className="bg-background py-16 md:py-24 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Organic accent blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-secondary/5 to-transparent rounded-full blur-3xl" />

      <div className="container max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-sm font-medium text-primary mb-4">
            How it works
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] max-w-3xl">
            Everything you need for interview-to-case-study workflow
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Four powerful steps. One seamless experience.
          </p>
        </div>

        {/* Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card 1: Upload - Spans 5 columns */}
          <Card className="lg:col-span-5 bg-card border-2 border-border/50 rounded-3xl hover:shadow-xl hover:border-primary/20 transition-all duration-300 group overflow-hidden">
            <CardContent className="flex flex-col justify-between h-full p-8">
              {/* Header with number badge */}
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <BentoCardHeader
                    icon={<Mic className="w-5 h-5" />}
                    title="Upload Your Interview"
                    color="primary"
                  />
                  <span className="text-xs font-bold text-primary/60 bg-primary/5 px-2 py-1 rounded-full">
                    01
                  </span>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed max-w-sm">
                  Supports video or audio up to 60 minutes. Works seamlessly
                  with Zoom, Loom, or Google Meet recordings.
                </p>
              </div>

              {/* Image with hover effect */}
              <div className="mt-10 relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-border/50 bg-muted/30 group-hover:border-primary/20 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                  src="/images/bento-1.png"
                  alt="Upload interface mockup"
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
              </div>
            </CardContent>
          </Card>

          {/* Card 2: AI Extracts - Spans 7 columns */}
          <Card className="lg:col-span-7 bg-card border-2 border-border/50 rounded-3xl hover:shadow-xl hover:border-secondary/20 transition-all duration-300 group overflow-hidden">
            <CardContent className="flex flex-col justify-between h-full p-8">
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <BentoCardHeader
                    icon={<Sparkles className="w-5 h-5" />}
                    title="AI extracts Challenge, Solution, and Results"
                    color="secondary"
                  />
                  <span className="text-xs font-bold text-secondary/60 bg-secondary/5 px-2 py-1 rounded-full">
                    02
                  </span>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed max-w-lg">
                  Our AI identifies key story elements automatically — turning
                  raw conversations into structured insights.
                </p>
              </div>

              <div className="mt-10 relative aspect-[16/9] overflow-hidden rounded-2xl border-2 border-border/50 bg-muted/30 group-hover:border-secondary/20 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                  src="/images/bento-2.png"
                  alt="AI extraction example"
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/10 to-transparent rounded-tr-full" />
              </div>
            </CardContent>
          </Card>

          {/* Card 3: Narrative Gen - Spans 6 columns */}
          <Card className="lg:col-span-6 bg-card border-2 border-border/50 rounded-3xl hover:shadow-xl hover:border-accent/20 transition-all duration-300 group overflow-hidden">
            <CardContent className="flex flex-col justify-between h-full p-8">
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <BentoCardHeader
                    icon={<PenSquare className="w-5 h-5" />}
                    title="Instant Narrative Generation"
                    color="accent"
                  />
                  <span className="text-xs font-bold text-accent/60 bg-accent/5 px-2 py-1 rounded-full">
                    03
                  </span>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed max-w-md">
                  Get a clean, readable narrative ready for publishing — no more
                  staring at blank documents or editing loops.
                </p>
              </div>

              <div className="mt-8 relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-border/50 bg-muted/30 group-hover:border-accent/20 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                  src="/images/bento-3.png"
                  alt="Generated case study layout preview"
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-accent/10 to-transparent rounded-br-full" />
              </div>
            </CardContent>
          </Card>

          {/* Card 4: Export - Spans 6 columns */}
          <Card className="lg:col-span-6 bg-card border-2 border-border/50 rounded-3xl hover:shadow-xl hover:border-primary/20 transition-all duration-300 group overflow-hidden">
            <CardContent className="flex flex-col justify-between h-full p-8">
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <BentoCardHeader
                    icon={<Download className="w-5 h-5" />}
                    title="Export Anywhere"
                    color="primary"
                  />
                  <span className="text-xs font-bold text-primary/60 bg-primary/5 px-2 py-1 rounded-full">
                    04
                  </span>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed max-w-md">
                  Export your finished story as Markdown, PDF, HTML, or LinkedIn
                  post — in one click.
                </p>
              </div>

              <div className="mt-8 relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-border/50 bg-muted/30 group-hover:border-primary/20 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                  src="/images/bento-4.png"
                  alt="Export options preview"
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary/10 to-transparent rounded-tl-full" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom callout */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            From raw audio to published story in{" "}
            <strong className="text-foreground">minutes, not weeks</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
