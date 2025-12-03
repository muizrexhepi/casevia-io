import React, { useState } from "react";
import {
  ArrowRight,
  Play,
  FileText,
  Share2,
  Download,
  Clock,
  Sparkles,
  CheckCircle2,
  Quote,
} from "lucide-react";

const SeeItInAction: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"before" | "after">("before");

  // Kept as a string to maintain the "raw/messy" aesthetic
  const beforeContent = `[00:03:42] Yeah, so before we started using your platform, 
our biggest challenge was really around customer onboarding. 
We were getting like maybe 60% of users to actually complete 
the setup process. It was super frustrating because we knew 
the product was good, but people would just drop off.

[00:04:15] And then, um, after we implemented your onboarding 
flow and the in-app guides, we saw completion rates jump to 
like 94%. Which is insane, right? And the best part was it 
only took us like two weeks to set everything up.

[00:05:02] Our support tickets dropped by half. Like, literally 
50% fewer "how do I do this" questions. The ROI was immediate.`;

  return (
    <section className="w-full px-6 md:px-12 py-16 md:py-20 lg:py-24 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-terracotta/10 border border-terracotta/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse"></span>
            <span className="text-xs font-sans font-bold text-terracotta tracking-wide uppercase">
              The Transformation
            </span>
          </div>

          <h2 className="font-serif text-[2.5rem] md:text-5xl lg:text-6xl text-charcoal leading-[1.1] tracking-tight mb-6">
            From messy transcript to <br />
            <span className="italic text-charcoal font-normal">
              polished story
            </span>
          </h2>

          <p className="font-sans text-lg md:text-xl text-charcoal/70 leading-relaxed max-w-2xl mx-auto font-light">
            Watch how Casevia transforms a raw customer call into a professional
            case study—automatically.
          </p>
        </div>

        {/* Toggle Controls */}
        <div className="flex justify-center mb-10">
          <div className="relative p-1 bg-charcoal/5 rounded-full inline-flex items-center border border-charcoal/5">
            <div
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-white shadow-sm transition-all duration-300 ease-spring ${
                activeTab === "before" ? "left-1" : "left-[calc(50%)]"
              }`}
            />
            <button
              onClick={() => setActiveTab("before")}
              className={`relative z-10 px-6 md:px-8 py-2.5 rounded-full font-sans font-semibold text-sm transition-colors duration-300 ${
                activeTab === "before"
                  ? "text-charcoal"
                  : "text-charcoal/50 hover:text-charcoal/70"
              }`}
            >
              Before: Raw Audio
            </button>
            <button
              onClick={() => setActiveTab("after")}
              className={`relative z-10 px-6 md:px-8 py-2.5 rounded-full font-sans font-semibold text-sm transition-colors duration-300 ${
                activeTab === "after"
                  ? "text-charcoal"
                  : "text-charcoal/50 hover:text-charcoal/70"
              }`}
            >
              After: Case Study
            </button>
          </div>
        </div>

        {/* Content Display Area */}
        <div className="relative min-h-[600px] md:min-h-[500px]">
          {/* BEFORE CARD */}
          <div
            className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
              activeTab === "before"
                ? "opacity-100 translate-y-0 z-20 scale-100"
                : "opacity-0 translate-y-4 z-10 scale-95 pointer-events-none"
            }`}
          >
            <div className="h-full bg-charcoal rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-2xl border border-charcoal flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                    <div className="flex gap-1 items-end h-4">
                      <span className="w-1 bg-red-500 h-2 rounded-full animate-pulse"></span>
                      <span className="w-1 bg-red-500 h-4 rounded-full animate-[pulse_1.5s_ease-in-out_infinite]"></span>
                      <span className="w-1 bg-red-500 h-3 rounded-full animate-[pulse_1s_ease-in-out_infinite]"></span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-cream font-mono text-sm tracking-tight">
                      zoom_recording_techflow.mp3
                    </span>
                    <span className="text-cream/40 text-xs font-mono mt-1">
                      42:15 • Transcribed via API
                    </span>
                  </div>
                </div>
              </div>

              {/* Raw Content */}
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                <pre className="font-mono text-sm md:text-base text-cream/70 leading-loose whitespace-pre-wrap font-light">
                  {beforeContent}
                </pre>
              </div>

              {/* Footer */}
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-3 text-cream/30 text-xs font-sans uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Raw Unstructured Data</span>
              </div>
            </div>
          </div>

          {/* AFTER CARD */}
          <div
            className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
              activeTab === "after"
                ? "opacity-100 translate-y-0 z-20 scale-100"
                : "opacity-0 translate-y-4 z-10 scale-95 pointer-events-none"
            }`}
          >
            <div className="h-full bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-stone-200/60 flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-stone-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-terracotta rounded-xl flex items-center justify-center shadow-lg shadow-terracotta/20">
                    <FileText className="w-6 h-6 text-white stroke-[2]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-charcoal font-serif font-bold text-lg leading-tight">
                      TechFlow Success Story
                    </span>
                    <span className="text-terracotta text-xs font-sans font-medium uppercase tracking-wide mt-1">
                      Generated Ready-to-Publish
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="p-2.5 text-charcoal/40 hover:text-terracotta hover:bg-terracotta/5 rounded-xl transition-all">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="p-2.5 text-charcoal/40 hover:text-terracotta hover:bg-terracotta/5 rounded-xl transition-all">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Structured Content - This uses proper JSX instead of dangerouslySetInnerHTML */}
              <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-8">
                {/* Section 1: Challenge */}
                <div>
                  <h3 className="text-charcoal font-serif font-bold text-xl mb-3">
                    The Challenge
                  </h3>
                  <p className="text-charcoal/70 font-sans leading-relaxed">
                    TechFlow struggled with low user activation rates, with only{" "}
                    <span className="font-semibold text-charcoal">
                      60% of new users
                    </span>{" "}
                    completing their initial setup. This created a significant
                    gap between sign-ups and active users, limiting growth
                    potential.
                  </p>
                  <div className="mt-4 pl-4 border-l-2 border-terracotta/30 italic text-charcoal/60 font-serif">
                    "We knew our product delivered value, but users were
                    dropping off before experiencing it."
                    <div className="mt-2 text-xs font-sans not-italic text-charcoal/40 uppercase tracking-wide font-bold">
                      — Sarah Chen, Head of Product
                    </div>
                  </div>
                </div>

                {/* Section 2: Solution */}
                <div>
                  <h3 className="text-charcoal font-serif font-bold text-xl mb-3">
                    The Solution
                  </h3>
                  <p className="text-charcoal/70 font-sans leading-relaxed">
                    TechFlow implemented Casevia's guided onboarding system with
                    contextual in-app tutorials, streamlining the focus to three
                    core actions.
                  </p>
                </div>

                {/* Section 3: Results (Visual Box) */}
                <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
                  <h3 className="text-charcoal font-serif font-bold text-xl mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-terracotta" />
                    The Results
                  </h3>
                  <div className="space-y-3">
                    {[
                      "94% onboarding completion (up from 60%)",
                      "50% reduction in support tickets",
                      "Immediate positive ROI",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-charcoal/80 font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps */}

        {/* CTA */}
        <div className="mt-20 text-center">
          <button className="inline-flex items-center gap-3 px-10 py-5 bg-charcoal text-cream rounded-full font-sans font-semibold text-lg hover:bg-terracotta hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] group">
            See Your Own Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform stroke-[2]" />
          </button>
          <p className="text-sm text-charcoal/50 mt-6 font-sans font-medium">
            Join the waitlist to get a personalized demo with your actual
            customer calls
          </p>
        </div>
      </div>
    </section>
  );
};

export default SeeItInAction;
