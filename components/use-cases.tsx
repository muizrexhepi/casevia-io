import { Upload, Mic, Zap, Share2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Helper Component (Same style as BentoSection)
function BentoCardHeader({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      {/* Slightly smaller title for the summary section */}
    </div>
  );
}

export function CoreValueSection() {
  const coreFeatures = [
    {
      icon: Upload,
      title: "1. Zero-Friction Import",
      description:
        "Upload any raw audio or video interview file. Our platform instantly transcribes the full recording and prepares the data for analysis.",
      tag: "Drag & Drop Ready",
    },
    {
      icon: Mic,
      title: "2. Conversational Intelligence",
      description:
        "The AI analyzes content, automatically tagging key customer quotes, pain points, and extracting quantifiable success metrics.",
      tag: "AI Analysis Engine",
    },
    {
      icon: Zap,
      title: "3. Instant Narrative Generation",
      description:
        "Generate a complete, formatted, and brand-aligned case study draft in seconds. Focus only on high-level review, not drafting.",
      tag: "Zero Drafting Required",
    },
    {
      icon: Share2,
      title: "4. Multi-Channel Assets",
      description:
        "Instantly generate optimized social posts, quote cards, and internal sales enablement snippets from the finished story.",
      tag: "Ready-to-Post Content",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-muted">
      {/* Container max-w-6xl as requested */}
      <div className="container max-w-6xl mx-auto">
        {/* Header - Consistent with BentoSection's clean typography */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl tracking-tight leading-[1] text-balance font-bold">
            The Complete AI Workflow. No External Tools Needed.
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Casevia is the only app that combines all four essential steps into
            a single, seamless, and intelligent process.
          </p>
        </div>

        {/* --- GRID Layout: lg:grid-cols-4 --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Card
                key={idx}
                className="bg-background border rounded-3xl shadow-none transition hover:shadow-lg h-full flex flex-col"
              >
                <CardContent className="space-y-5 flex-grow flex flex-col justify-between">
                  {/* Icon Header (Bento Style) */}
                  <div>
                    <BentoCardHeader
                      icon={<Icon className="w-5 h-5 text-primary" />}
                      title={feature.title}
                    />
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                    {feature.description}
                  </p>

                  {/* Tag at the bottom, using the Bento-style subtle border divider */}
                  <div className="mt-auto pt-4 border-t border-border/70">
                    <p className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full w-fit">
                      {feature.tag}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
