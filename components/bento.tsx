"use client";

import {
  ArrowRight,
  ShieldCheck,
  Activity,
  Mic2,
  FileText,
  Fingerprint,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
// Assuming you have these components imported via your shadcn setup
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const useInView = (options = { threshold: 0.1 }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  return { ref, isInView };
};

export const BentoGrid = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 md:py-32 bg-muted text-foreground">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header: Structured and separated */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-12 gap-12 items-end border-b border-border pb-12">
          <div className="md:col-span-7">
            <h2 className="text-5xl md:text-6xl text-foreground mb-6 tracking-tight leading-[0.9]">
              The <span className="italic text-primary font-serif">engine</span>{" "}
              behind <br /> the narrative.
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-lg text-muted-foreground font-sans leading-relaxed mb-2">
              Casevia isn't just a transcriber. It is a reasoning engine trained
              to structure raw conversation into persuasive B2B assets.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Narrative Synth esis (The core AI feature) - Wide Card */}
          <Card
            className={`md:col-span-2 relative overflow-hidden group h-[450px] transition-all duration-700 border-border ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <CardHeader className="p-8 pb-4">
              <div className="w-12 h-12 bg-muted flex items-center justify-center text-primary mb-6">
                <Mic2 strokeWidth={1.5} size={24} />
              </div>
              <CardTitle className="text-3xl text-foreground mb-3">
                Narrative Synthesis
              </CardTitle>
            </CardHeader>
            <CardContent className="px-8 flex flex-col h-[calc(100%-8rem)]">
              <p className="text-muted-foreground text-base max-w-md leading-relaxed font-sans mb-8">
                We identify the "Conflict," "Resolution," and "ROI" moments in
                the audio and map them to a story arc.
              </p>
              {/* Visualization: Audio Waveform turning into Text Lines */}
              <div className="w-full h-32 border-t border-border mt-auto relative flex items-center gap-4 pt-4">
                {/* Left: The Raw Audio (Chaotic) */}
                <div className="flex-1 flex items-center gap-1 h-full opacity-40">
                  {[40, 90, 30, 80, 20, 95, 40, 60, 30, 70, 40].map((h, i) => (
                    <div
                      key={i}
                      className="w-1.5 bg-foreground animate-pulse"
                      style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>

                {/* Center: The Processor */}
                <div className="flex items-center justify-center">
                  <ArrowRight className="text-primary" />
                </div>

                {/* Right: The Structured Story (Clean) */}
                <div className="flex-1 space-y-3 opacity-80">
                  <div className="h-2 w-full bg-primary/20 rounded-full" />
                  <div className="h-2 w-5/6 bg-primary/20 rounded-full" />
                  <div className="h-2 w-full bg-primary/20 rounded-full" />
                  <div className="flex gap-2 mt-2">
                    <span className="text-[10px] font-mono text-primary border border-primary/30 px-2 py-0.5 rounded-sm">
                      ROI DETECTED
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 2: Voice Calibration (Brand consistency) - Single Card */}
          <Card
            className={`relative overflow-hidden group h-[450px] transition-all duration-700 delay-100 border-border ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Abstract Background Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />

            <CardHeader className="p-8 pb-4">
              <div className="w-12 h-12 bg-primary flex items-center justify-center text-primary-foreground mb-6">
                <Fingerprint strokeWidth={1.5} size={24} />
              </div>
              <CardTitle className="text-2xl text-foreground mb-3">
                Voice Calibration
              </CardTitle>
            </CardHeader>
            <CardContent className="px-8 flex flex-col justify-between h-[calc(100%-8rem)]">
              <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                Upload previous whitepapers. Casevia analyzes sentence structure
                and vocabulary to mimic your brand voice perfectly.
              </p>

              {/* Visualization: Matching Rings */}
              <div className="relative w-full aspect-square max-h-[160px] flex items-center justify-center border border-border bg-card shadow-sm mt-4">
                {/* Ring 1 (Target) */}
                <div className="absolute w-24 h-24 border-2 border-foreground/20 rounded-full opacity-20" />
                {/* Ring 2 (AI Matching) - Pulsing */}
                <div
                  className="absolute w-24 h-24 border border-primary rounded-full animate-ping opacity-20"
                  style={{ animationDuration: "3s" }}
                />
                <div className="absolute w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="font-mono text-xs font-bold text-primary">
                    98%
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 3: Data Sovereignty (Security) - Dark Card using Secondary/Foreground */}
          <Card
            className={`relative overflow-hidden group bg-foreground text-secondary-foreground p-8 h-[400px] transition-all duration-700 delay-200 border-secondary-foreground/10 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <CardHeader className="p-0 pb-4">
              <div className="w-12 h-12 bg-secondary-foreground/10 flex items-center justify-center text-secondary-foreground mb-6 border border-secondary-foreground/10">
                <ShieldCheck strokeWidth={1.5} size={24} />
              </div>
              <CardTitle className="text-2xl text-secondary-foreground mb-3">
                Data Sovereignty
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex flex-col justify-between h-[calc(100%-8rem)]">
              <p className="text-secondary-foreground/60 text-sm leading-relaxed font-sans">
                SOC-2 Type II compliant. Your interviews are processed in
                isolated containers and never used to train global models.
              </p>

              {/* Visualization: Static, solid lock visualization */}
              <div className="w-full bg-secondary-foreground/5 border border-secondary-foreground/10 h-24 mt-6 relative overflow-hidden flex items-center px-4 font-mono text-xs text-primary">
                <div className="flex gap-3 items-center">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span>ENCRYPTION_ACTIVE</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 4: Impact Metrics - Wide Card */}
          <Card
            className={`md:col-span-2 relative overflow-hidden group h-[400px] transition-all duration-700 delay-300 border-border ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <CardHeader className="p-8 pb-4 flex flex-row justify-between items-start">
              <div>
                <div className="w-12 h-12 bg-muted flex items-center justify-center text-foreground mb-6">
                  <Activity strokeWidth={1.5} size={24} />
                </div>
                <CardTitle className="text-3xl text-foreground mb-3">
                  Content ROI
                </CardTitle>
              </div>
              {/* Metric Badge */}
              <div className="bg-card border border-border px-4 py-2 shadow-sm text-right">
                <span className="block text-xs font-mono text-muted-foreground uppercase">
                  Avg. Lift
                </span>
                <span className="text-2xl text-primary">+24%</span>
              </div>
            </CardHeader>
            <CardContent className="px-8 flex flex-col h-[calc(100%-8rem)]">
              <p className="text-muted-foreground text-base max-w-sm font-sans mb-auto">
                Track how your case studies influence deal velocity and win
                rates via CRM integration.
              </p>
              {/* Visualization: Clean Bar Chart */}
              <div className="flex-1 w-full flex items-end justify-between gap-2 border-b border-border relative pt-4 px-2">
                <div className="absolute inset-0 border-t border-dashed border-border top-1/2" />

                {[30, 45, 40, 60, 55, 75, 65, 90].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-foreground/20 hover:bg-primary transition-colors duration-300 relative group/bar"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
