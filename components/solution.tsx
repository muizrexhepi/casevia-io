import { ArrowRight } from "lucide-react";

export function SolutionBridge() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container max-w-5xl">
        <div className="relative">
          {/* Subtle gradient line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2" />

          <div className="relative flex flex-col items-center text-center space-y-6">
            {/* Icon */}
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
              <ArrowRight className="w-6 h-6 text-primary" strokeWidth={2} />
            </div>

            {/* Heading */}
            <div className="space-y-3 max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-semibold">
                What if you could skip all of that?
              </h2>
              <p className="text-lg text-muted-foreground">
                Record. Transcribe. Structure. Done.
                <br className="hidden sm:inline" />
                <span className="font-medium text-foreground">
                  {" "}
                  Your case study in 15 minutes.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
