import React from "react";
import {
  Mic,
  CheckCircle2,
  Zap,
  Layers,
  Users,
  FileText,
  ArrowRight,
  Link,
  Bot,
  FileJson,
} from "lucide-react";

const BentoGrid: React.FC = () => {
  return (
    <section className="w-full px-6 md:px-12 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto py-20 md:py-32">
        {/* Section Header */}
        <div className="mb-20 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="flex flex-col gap-6 max-w-3xl">
            <h2 className="font-serif text-[3rem] md:text-6xl lg:text-7xl text-charcoal leading-[0.95] tracking-tight">
              Intelligence, <br />
              <span className="italic text-charcoal/90 font-light">
                structured.
              </span>
            </h2>
          </div>

          <p className="font-sans text-lg text-charcoal/60 leading-relaxed max-w-md font-light md:pb-2">
            Not just transcription. We extract the narrative structure your
            audience actually cares about, automatically.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5 auto-rows-[minmax(300px,auto)]">
          {/* Card 1: Semantic Extraction (Large - 8 cols) */}
          <div className="md:col-span-6 lg:col-span-8 bg-white rounded-3xl p-8 md:p-12 border border-charcoal/[0.06] shadow-sm hover:shadow-xl hover:border-charcoal/[0.12] transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#D97757_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full justify-between gap-12">
              <div>
                <div className="w-12 h-12 bg-charcoal/5 rounded-2xl flex items-center justify-center text-charcoal mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Layers className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
                  Semantic Extraction
                </h3>
                <p className="font-sans text-charcoal/60 text-lg leading-relaxed max-w-lg">
                  We don't just transcribe words. We map customer sentiment to
                  your value propositions, identifying the "Challenge,"
                  "Solution," and "Result" arc.
                </p>
              </div>

              {/* Visual: Semantic Tags */}
              <div className="flex flex-wrap gap-2 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                {[
                  "Pain Point",
                  "Buying Signal",
                  "Feature Request",
                  "Competitor Mention",
                ].map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg border border-charcoal/10 text-xs font-mono text-charcoal/70 bg-charcoal/[0.02]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Instant Velocity (Small - 4 cols) - Dark */}
          <div className="md:col-span-6 lg:col-span-4 bg-charcoal rounded-3xl p-8 md:p-10 border border-charcoal shadow-2xl relative overflow-hidden group">
            {/* Animated Glow */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(255,255,255,0.1)_360deg)] animate-[spin_8s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 backdrop-blur-md">
                  <Zap className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-3xl text-white mb-2">
                  Instant Velocity
                </h3>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between text-white/40 text-sm font-mono">
                  <span>Human</span>
                  <span>4h 30m</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-white/20 rounded-full"></div>
                </div>

                <div className="flex items-center justify-between text-terracotta text-sm font-mono font-bold pt-2">
                  <span className="flex items-center gap-2">
                    <Bot className="w-3 h-3" /> Casevia
                  </span>
                  <span>0m 28s</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[5%] bg-terracotta rounded-full shadow-[0_0_10px_rgba(217,119,87,0.8)]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Zero Hallucinations (Medium - 4 cols) */}
          <div className="md:col-span-6 lg:col-span-4 bg-stone-100 rounded-3xl p-8 md:p-10 border border-stone-200 shadow-sm relative overflow-hidden group hover:bg-white transition-colors duration-300">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-green-700 shadow-sm mb-6 border border-stone-200">
                  <CheckCircle2 className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-charcoal mb-3">
                  Zero Hallucinations
                </h3>
                <p className="font-sans text-charcoal/60 text-[15px] leading-relaxed">
                  Every claim links directly to the source timestamp. 100%
                  citable.
                </p>
              </div>

              {/* Visual: Source Link */}
              <div className="mt-6 p-3 bg-white rounded-xl border border-stone-200 flex items-center gap-3 shadow-sm group-hover:translate-y-[-4px] transition-transform duration-300">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <Link className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-charcoal">
                    Source Verified
                  </span>
                  <span className="text-[10px] text-charcoal/40 font-mono">
                    Timestamp 04:12
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Multi-Format (Large - 8 cols) */}
          <div className="md:col-span-6 lg:col-span-8 bg-gradient-to-br from-terracotta/5 to-cream rounded-3xl p-8 md:p-12 border border-terracotta/10 shadow-sm hover:shadow-md transition-all duration-500 group">
            <div className="flex flex-col md:flex-row h-full md:items-center justify-between gap-8">
              <div className="flex-1">
                <div className="w-12 h-12 bg-terracotta/10 rounded-2xl flex items-center justify-center text-terracotta mb-6">
                  <FileText className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
                  One Upload, Five Assets
                </h3>
                <p className="font-sans text-charcoal/60 text-lg leading-relaxed">
                  Get a full case study, LinkedIn post, Twitter thread,
                  one-pager, and sales deck slide—all from one recording.
                </p>
              </div>

              {/* Visual: File Stack */}
              <div className="relative w-full md:w-64 h-48 md:h-auto perspective-1000">
                <div className="absolute top-0 right-0 w-48 h-32 bg-white rounded-xl border border-charcoal/5 shadow-lg transform rotate-6 translate-x-4 translate-y-4 group-hover:rotate-12 transition-transform duration-500 z-10 p-4 flex flex-col justify-between">
                  <div className="w-8 h-8 rounded-full bg-blue-100 mb-2"></div>
                  <div className="h-2 w-2/3 bg-stone-100 rounded"></div>
                  <div className="h-2 w-1/2 bg-stone-100 rounded"></div>
                </div>
                <div className="absolute top-0 right-0 w-48 h-32 bg-white rounded-xl border border-charcoal/5 shadow-lg transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500 z-20 p-4 flex flex-col justify-between">
                  <div className="w-8 h-8 rounded-full bg-terracotta/10 mb-2"></div>
                  <div className="h-2 w-3/4 bg-stone-100 rounded"></div>
                  <div className="h-2 w-1/2 bg-stone-100 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Team (Medium - 6 cols) */}
          <div className="md:col-span-6 bg-white rounded-3xl p-8 md:p-10 border border-charcoal/[0.06] shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-charcoal/5 rounded-2xl flex items-center justify-center text-charcoal">
                  <Users className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-stone-200 border-2 border-white"
                    />
                  ))}
                </div>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-charcoal mb-3">
                Built for Teams
              </h3>
              <p className="font-sans text-charcoal/60 text-[15px] leading-relaxed max-w-sm">
                Share workspaces, maintain brand voice consistency, and track
                who's creating what.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-charcoal group-hover:text-terracotta transition-colors cursor-pointer">
              <span>Manage permissions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 6: Integrations (Medium - 6 cols) */}
          <div className="md:col-span-6 bg-charcoal rounded-3xl p-8 md:p-10 border border-charcoal shadow-lg group relative overflow-hidden">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 backdrop-blur-md">
                  <Mic className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-3">
                  Universal Ingest
                </h3>
                <p className="font-sans text-white/60 text-[15px] leading-relaxed max-w-sm">
                  Zoom, Google Meet, Gong, Loom, or upload any audio/video file.
                  We handle the rest.
                </p>
              </div>

              {/* Visual: File Types */}
              <div className="mt-8 flex gap-3 overflow-hidden">
                {[".mp3", ".mp4", ".wav", ".mov"].map((ext, i) => (
                  <div
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white/50"
                  >
                    {ext}
                  </div>
                ))}
              </div>
            </div>

            {/* Background Texture */}
            <div className="absolute right-[-20%] bottom-[-20%] opacity-[0.05] transform rotate-12 pointer-events-none">
              <FileJson className="w-64 h-64 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
