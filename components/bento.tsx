import { Card, CardContent } from "@/components/ui/card";
import { FileText, Mic, Download, Sparkles } from "lucide-react";

export default function BentoSection() {
  return (
    <section className="bg-muted py-12 md:py-20">
      <div className="container">
        <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
          <h2 className="text-3xl md:text-4xl leading-tight">
            The only tool built specifically for interview-to-case-study
            workflow
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="pt-12 lg:pt-20">
          <div className="relative z-10 grid grid-cols-6 gap-4 md:gap-6 lg:gap-8">
            {/* 1️⃣ Max Video Length */}
            <Card className="relative col-span-full flex overflow-hidden lg:col-span-2 border bg-background rounded-2xl hover:shadow-sm transition">
              <CardContent className="relative m-auto size-fit pt-6 pb-8 px-6 text-center">
                <div className="relative flex h-24 w-56 items-center justify-center mx-auto">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Mic className="w-16 h-16 text-primary/20" />
                  </div>
                  <span className="relative text-5xl font-semibold">
                    60 min
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold">Max Video Length</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Upload hour-long client interviews. Supports .mp4, .mp3,
                  .wav—even Zoom recordings.
                </p>
              </CardContent>
            </Card>

            {/* 2️⃣ AI Analysis */}
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 border bg-background rounded-2xl hover:shadow-sm transition">
              <CardContent className="pt-8 px-6 text-center">
                <div className="relative mx-auto flex aspect-square size-32 rounded-full border items-center justify-center before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                  <Sparkles className="w-12 h-12 text-primary" />
                </div>
                <div className="mt-6 space-y-2">
                  <h3 className="text-lg font-semibold">
                    Extracts Challenge, Solution & Results
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Our AI identifies the story structure from your
                    conversation—what problem your client had, how you solved
                    it, and the measurable outcomes. Plus pull quotes.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 3️⃣ Narrative Generation */}
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 border bg-background rounded-2xl hover:shadow-sm transition">
              <CardContent className="pt-8 px-6 text-center">
                <div className="bg-muted rounded-lg p-4 text-xs space-y-2 border">
                  <p className="font-semibold">Challenge:</p>
                  <p className="text-muted-foreground leading-relaxed">
                    "We were losing 30% profit margin due to..."
                  </p>
                  <p className="font-semibold mt-3">Solution:</p>
                  <p className="text-muted-foreground leading-relaxed">
                    "Casevia helped us implement..."
                  </p>
                </div>
                <div className="mt-6 space-y-2">
                  <h3 className="text-lg font-semibold">
                    Professional Narrative, Instantly
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Get a complete, publish-ready story formatted with proper
                    sections, headers, and flow—no editing required.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 4️⃣ Export Options */}
            <Card className="relative col-span-full overflow-hidden lg:col-span-3 border bg-background rounded-2xl hover:shadow-sm transition">
              <CardContent className="grid pt-8 sm:grid-cols-2 gap-6">
                <div className="flex flex-col justify-between">
                  <div className="flex aspect-square size-12 rounded-full border items-center justify-center mb-4">
                    <Download className="size-5" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">
                      Export to Your Workflow
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Markdown for your blog, PDF for client presentations, HTML
                      with SEO meta tags—plus social posts for LinkedIn and X.
                    </p>
                  </div>
                </div>
                <div className="relative border-l border-t p-6 sm:ml-6 rounded-tl-xl bg-muted/30">
                  <div className="space-y-2 text-xs">
                    {[
                      "case-study.md",
                      "case-study.pdf",
                      "linkedin-post.txt",
                    ].map((f) => (
                      <div
                        key={f}
                        className="flex items-center gap-2 p-2 border rounded bg-background"
                      >
                        <FileText className="w-4 h-4" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 5️⃣ Templates */}
            <Card className="relative col-span-full overflow-hidden lg:col-span-3 border bg-background rounded-2xl hover:shadow-sm transition">
              <CardContent className="grid h-full pt-8 sm:grid-cols-2 gap-6">
                <div className="flex flex-col justify-between">
                  <div className="flex aspect-square size-12 rounded-full border items-center justify-center mb-4">
                    <Sparkles className="size-6" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">
                      Your Brand, Zero Design Work
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Pick a template, customize colors and fonts once, and
                      every case study matches your brand. No watermarks on paid
                      plans.
                    </p>
                  </div>
                </div>
                <div className="relative mt-6 sm:-my-6 sm:-mr-6">
                  <div className="flex h-full flex-col justify-center space-y-4 py-6 pl-6">
                    <div className="h-20 border rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900" />
                    <div className="h-20 border rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900" />
                    <div className="h-20 border rounded-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
