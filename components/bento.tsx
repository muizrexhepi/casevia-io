import Image from "next/image";
import {
  ArrowRight,
  Mic,
  Sparkles,
  Download,
  FileText,
  PenSquare, // <-- Added new icon
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// A helper component for the consistent icon header
// This makes the code cleaner and easier to maintain
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
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
}

export default function BentoSection() {
  return (
    <section className="bg-muted py-12 md:py-20">
      <div className="container max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 text-left space-y-4">
          <h2 className="text-4xl md:text-5xl tracking-tight leading-[1] text-balance">
            Everything you need for interview-to-case-study workflow
          </h2>
        </div>

        {/* Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* === Card 1: Upload === */}
          <Card className="lg:col-span-5 bg-background border rounded-3xl hover:shadow-sm transition">
            <CardContent className="flex flex-col justify-between h-full">
              <div className="space-y-6">
                <BentoCardHeader
                  icon={<Mic className="w-5 h-5 text-primary" />}
                  title="Upload Your Interview"
                />
                <p className="text-muted-foreground text-base max-w-sm">
                  Supports video or audio up to 60 minutes. Works seamlessly
                  with Zoom, Loom, or Google Meet recordings.
                </p>
              </div>
              <div className="mt-10 relative aspect-[4/3] overflow-hidden rounded-2xl border bg-muted">
                <Image
                  src="/images/bento-1.png"
                  alt="Upload interface mockup"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
            </CardContent>
          </Card>

          {/* === Card 2: AI Extracts === */}
          <Card className="lg:col-span-7 bg-background border rounded-3xl hover:shadow-sm transition">
            <CardContent className="flex flex-col justify-between h-full">
              <div className="space-y-4">
                <BentoCardHeader
                  icon={<Sparkles className="w-5 h-5 text-primary" />}
                  title="AI extracts Challenge, Solution, and Results"
                />
                <p className="text-muted-foreground text-base max-w-lg">
                  Our AI identifies key story elements automatically — turning
                  raw conversations into structured insights.
                </p>
              </div>
              <div className="mt-10 relative aspect-[16/9] overflow-hidden rounded-2xl border bg-muted">
                <Image
                  src="/images/bento-2.png"
                  alt="AI extraction example"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
            </CardContent>
          </Card>

          {/* === Card 3: Narrative Gen === */}
          <Card className="lg:col-span-6 bg-background border rounded-3xl hover:shadow-sm transition">
            <CardContent className="flex flex-col justify-between h-full">
              <div className="space-y-4">
                <BentoCardHeader
                  icon={<PenSquare className="w-5 h-5 text-primary" />}
                  title="Instant Narrative Generation"
                />
                <p className="text-muted-foreground text-base max-w-md">
                  Get a clean, readable narrative ready for publishing — no more
                  staring at blank documents or editing loops.
                </p>
              </div>
              <div className="mt-8 relative aspect-[4/3] overflow-hidden rounded-2xl border bg-muted">
                <Image
                  src="/images/bento-3.png"
                  alt="Generated case study layout preview"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-6 bg-background border rounded-3xl hover:shadow-sm transition">
            <CardContent className="flex flex-col justify-between h-full">
              <div className="space-y-4">
                <BentoCardHeader
                  icon={<Download className="w-5 h-5 text-primary" />}
                  title="Export Anywhere"
                />
                <p className="text-muted-foreground text-base max-w-md">
                  Export your finished story as Markdown, PDF, HTML, or LinkedIn
                  post — in one click.
                </p>
              </div>
              <div className="mt-8 relative aspect-[4/3] overflow-hidden rounded-2xl border bg-muted p-4">
                {" "}
                <Image
                  src="/images/bento-4.png"
                  alt="Generated case study layout preview"
                  fill
                  className="object-cover opacity-80"
                />
                {/* <div className="flex flex-col gap-2 text-xs">
                  {["case-study.md", "case-study.pdf", "linkedin-post.txt"].map(
                    (file) => (
                      <div
                        key={file}
                        className="flex items-center gap-2 border rounded-lg p-2 bg-background w-fit"
                      >
                        <FileText className="w-4 h-4 text-muted-foreground" />
                        <span>{file}</span>
                      </div>
                    )
                  )}
                </div> */}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
