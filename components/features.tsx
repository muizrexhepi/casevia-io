import { Button } from "@/components/ui/button";
// Update the import for the second icon
import { Target, FileText, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FeaturesSection() {
  return (
    <section className="container border-x">
      <div className="pt-12 lg:pt-24">
        <div>
          <div className="grid gap-12 md:grid-cols-5">
            <div className="md:col-span-2 px-2">
              <h2 className="text-3xl md:text-4xl font-semibold">
                The AI Engine That Transforms Interviews Into Case Studies
              </h2>
              <Button className="mt-8 pr-2" variant="outline" asChild>
                {/* Link to Free Trial/Sign Up */}
                <Link href="#">
                  Try Casevia Free
                  <ChevronRight className="size-4 opacity-50" />
                </Link>
              </Button>
            </div>

            <div className="space-y-6 md:col-span-3 md:space-y-10">
              {/* Feature 1: AI Analysis & Key Extraction (GPT-4o/DeepSeek) */}
              <div>
                <div className="flex items-center gap-2">
                  <Target className="size-5" />
                  <h3 className="text-foreground text-lg font-semibold">
                    AI Analysis & Key Extraction
                  </h3>
                </div>
                <p className="text-muted-foreground mt-3 text-balance">
                  Our AI models analyze your full interview transcript to
                  automatically pull out the core **Challenge, Solution,
                  Results,** and compelling client quotes.
                </p>
              </div>

              {/* Feature 2: Structured Narrative Generation (Output) */}
              <div>
                <div className="flex items-center gap-2">
                  <FileText className="size-5" />
                  <h3 className="text-foreground text-lg font-semibold">
                    Structured Narrative Generation
                  </h3>
                </div>
                <p className="text-muted-foreground mt-3 text-balance">
                  The AI uses the extracted data to instantly draft a clean,
                  structured narrative, ready for publishing. Export as
                  **Markdown, PDF, or an SEO-friendly post.**
                </p>
              </div>
            </div>
          </div>

          <div className="relative mt-16 bg-muted p-2">
            <div className="bg-background rounded-lg relative mx-auto overflow-hidden border border-transparent shadow-lg shadow-black/10 ring-1 ring-black/10">
              <Image
                src="/images/casevia-generation.png" // **Replace this path with your Case Study Generation screenshot**
                alt="Structured Case Study Generation Screen"
                width="2880"
                height="1842"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
