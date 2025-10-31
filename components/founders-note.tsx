import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function TransformationSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container max-w-6xl mx-auto text-center space-y-10">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          From chaos to clarity — in one click.
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Turn unstructured interviews into polished, publish-ready case studies
          and social content instantly.
        </p>

        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
          {/* Before */}
          <div className="flex-1 bg-muted/70 rounded-2xl p-6 md:p-10 text-left space-y-3">
            <h3 className="font-semibold text-lg mb-3">Before Casevia</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>🕓 Hours of transcription & rewriting</li>
              <li>😩 Inconsistent formatting</li>
              <li>💸 Paying writers per case study</li>
            </ul>
          </div>

          <ArrowRight className="hidden md:block w-12 h-12 text-muted-foreground" />

          {/* After */}
          <div className="flex-1 bg-primary/5 rounded-2xl p-6 md:p-10 text-left space-y-3">
            <h3 className="font-semibold text-lg mb-3">After Casevia</h3>
            <ul className="space-y-2">
              <li>✅ Ready-to-publish case study</li>
              <li>📢 Auto-generated social posts</li>
              <li>📊 Key metrics and sales proof</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
