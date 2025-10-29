import { Card, CardContent } from "@/components/ui/card";
import { FileText, Mic, Download, Sparkles } from "lucide-react";

export default function BentoSection() {
  return (
    <section className="container py-12 lg:py-24">
      <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12 ">
        <h2 className="text-3xl md:text-4xl font-semibold max-w-xl">
          The only tool built specifically for
          <span className="text-primary"> interview-to-case-study</span>{" "}
          workflow
        </h2>
        <p className="max-w-sm text-lg sm:ml-auto text-muted-foreground">
          No more manual transcription. No more staring at blank docs. No more
          "we'll publish it next quarter." Get professional case studies from
          conversations—today.
        </p>
      </div>
      <div className="pt-12 lg:pt-24">
        <div className="relative">
          <div className="relative z-10 grid grid-cols-6 gap-2">
            {/* Card 1: Upload Interview - More Specific */}
            <Card className="relative col-span-full flex overflow-hidden lg:col-span-2">
              <CardContent className="relative m-auto size-fit pt-6">
                <div className="relative flex h-24 w-56 items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Mic className="w-16 h-16 text-primary/20" />
                  </div>
                  <span className="relative text-5xl font-semibold">
                    60 min
                  </span>
                </div>
                <h2 className="mt-6 text-center text-2xl font-semibold">
                  Max Video Length
                </h2>
                <p className="text-center text-sm text-muted-foreground mt-2">
                  Upload hour-long client interviews. Supports .mp4, .mp3,
                  .wav—even Zoom recordings.
                </p>
              </CardContent>
            </Card>

            {/* Card 2: AI Analysis - Show What It Actually Does */}
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
              <CardContent className="pt-6">
                <div className="relative mx-auto flex aspect-square size-32 rounded-full border items-center justify-center before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                  <Sparkles className="w-12 h-12 text-primary" />
                </div>
                <div className="relative z-10 mt-6 space-y-2 text-center">
                  <h2 className="text-lg font-semibold transition">
                    Extracts Challenge, Solution & Results
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Our AI identifies the story structure from your
                    conversation— what problem your client had, how you solved
                    it, and the measurable outcomes. Plus pull quotes.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 3: Narrative Generation - Show Real Example */}
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
              <CardContent className="pt-6">
                <div className="pt-6 lg:px-6">
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
                </div>
                <div className="relative z-10 mt-6 space-y-2 text-center">
                  <h2 className="text-lg font-semibold transition">
                    Professional Narrative, Instantly
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Get a complete, publish-ready story formatted with proper
                    sections, headers, and flow—no editing required.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 4: Export Options - More Specific */}
            <Card className="card variant-outlined relative col-span-full overflow-hidden lg:col-span-3">
              <CardContent className="grid pt-6 sm:grid-cols-2">
                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                  <div className="relative flex aspect-square size-12 rounded-full border items-center justify-center before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                    <Download className="size-5" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold">
                      Export to Your Workflow
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Markdown for your blog, PDF for client presentations, HTML
                      with SEO meta tags—plus social posts for LinkedIn and X.
                      One case study, infinite formats.
                    </p>
                  </div>
                </div>
                <div className="rounded-tl-(--radius) relative -mb-6 -mr-6 mt-6 h-fit border-l border-t p-6 py-6 sm:ml-6">
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2 p-2 border rounded bg-background">
                      <FileText className="w-4 h-4" />
                      <span>case-study.md</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 border rounded bg-background">
                      <FileText className="w-4 h-4" />
                      <span>case-study.pdf</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 border rounded bg-background">
                      <FileText className="w-4 h-4" />
                      <span>linkedin-post.txt</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 5: Templates - Show Real Benefit */}
            <Card className="card variant-outlined relative col-span-full overflow-hidden lg:col-span-3">
              <CardContent className="grid h-full pt-6 sm:grid-cols-2">
                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                  <div className="relative flex aspect-square size-12 rounded-full border items-center justify-center before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                    <Sparkles className="size-6" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold transition">
                      Your Brand, Zero Design Work
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Pick a template, customize colors and fonts once, and
                      every case study matches your brand. No watermarks on paid
                      plans.
                    </p>
                  </div>
                </div>
                <div className="before:bg-(--color-border) relative mt-6 before:absolute before:inset-0 before:mx-auto before:w-px sm:-my-6 sm:-mr-6">
                  <div className="relative flex h-full flex-col justify-center space-y-4 py-6 pl-6">
                    <div className="h-20 border rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900"></div>
                    <div className="h-20 border rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900"></div>
                    <div className="h-20 border rounded-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900"></div>
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
