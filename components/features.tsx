"use client";

import { useInView } from "@/app/page"; // Assuming this custom hook is available
import {
  Code2,
  FileText,
  Globe,
  LayoutTemplate,
  Share2,
  Sparkles,
  Users,
  Wand2,
  BookOpen, // New Icon for Editorial feel
  MessageCircle, // New Icon for Collaboration
  Zap, // New Icon for Instant/Analysis
} from "lucide-react";
import { useEffect, useState } from "react";

export const FeatureShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  // Refactored to use generic background for consistency
  const { ref, isInView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 4);
    }, 5000); // Auto-rotate every 5 seconds
    return () => clearInterval(interval);
  }, [isInView]);

  const features = [
    {
      id: 0,
      title: "Artifact Analysis",
      desc: "Automatically detects pain points, solutions, and hard metrics embedded in the raw conversation.",
      icon: <Sparkles size={20} />,
      visual: (
        <div className="relative h-full w-full bg-background flex items-center justify-center p-8">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]"></div>

          <div className="w-full max-w-md bg-card border border-border p-6 space-y-4 shadow-xl z-10 relative overflow-hidden group">
            {/* Editorial Header */}
            <div className="flex items-center gap-2 mb-2 border-b border-border pb-3">
              <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse"></div>
              <span className="text-[10px] font-mono font-bold text-muted-foreground uppercase">
                ANALYSIS_ACTIVE
              </span>
            </div>

            {/* Detected Metric Card - Uses primary color for highlight */}
            <div className="space-y-3">
              <div className="flex gap-4 items-start p-4 bg-primary/5 rounded-none border border-primary/20 relative overflow-hidden">
                <div className="mt-0.5">
                  <Zap size={16} className="text-primary" />
                </div>
                <div className="relative z-10">
                  <div className="text-[10px] font-bold text-primary uppercase tracking-wide mb-1">
                    Detected Metric
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    "Reduced friction by{" "}
                    <span className="bg-primary/20 text-primary px-1.5 rounded-sm font-bold">
                      45%
                    </span>
                    "
                  </div>
                </div>
              </div>

              {/* Fake Text Blocks - Analog look */}
              <div className="space-y-2 pl-2 opacity-50">
                <div className="h-1.5 w-3/4 bg-border rounded-full"></div>
                <div className="h-1.5 w-1/2 bg-border rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      title: "Brand Voice Simulation",
      desc: "Mimic your unique brand voice perfectly from existing content samples for immediate authenticity.",
      icon: <Wand2 size={20} />,
      visual: (
        <div className="relative h-full w-full bg-background flex items-center justify-center p-8">
          <div className="flex flex-col gap-8 w-full max-w-md relative">
            {/* Connecting Line - Muted and straight */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-border z-0"></div>

            {/* Input Card (Generic/Plain) */}
            <div className="bg-card p-5 border border-border rounded-none shadow-sm opacity-60 scale-[0.9] z-10 relative transition-transform duration-500 hover:scale-100">
              <div className="text-[10px] uppercase text-muted-foreground font-bold mb-3">
                Input (Raw/Generic)
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-background rounded-none"></div>
                <div className="h-2 w-3/4 bg-background rounded-none"></div>
              </div>
            </div>

            {/* Processor Indicator - Primary color accent */}
            <div className="flex justify-center -my-4 z-20">
              <div className="bg-primary text-primary-foreground p-3 rounded-full shadow-lg ring-4 ring-background animate-pulse-slow">
                <BookOpen size={20} className="animate-spin-slow" />
              </div>
            </div>

            {/* Output Card (Refined/On-Brand) - Strong border accent */}
            <div className="bg-card p-6 border-2 border-primary/50 rounded-none shadow-lg ring-1 ring-primary/10 z-10 relative overflow-hidden">
              <div className="flex justify-between items-center mb-3">
                <div className="text-[10px] uppercase text-primary font-bold bg-primary/10 px-2 py-0.5 rounded-sm">
                  On Brand
                </div>
              </div>
              <p className="text-sm  italic text-foreground leading-relaxed">
                "We didn't just build a tool; we crafted an engine for growth
                and revenue acceleration."
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Collaborative Editor",
      desc: "Review drafts with your team, leave contextual comments, and manage approval workflows in one place.",
      icon: <Users size={20} />,
      visual: (
        <div className="relative h-full w-full bg-background flex items-center justify-center">
          <div className="w-full max-w-md bg-card border border-border rounded-none shadow-lg overflow-hidden">
            {/* Header: Team Presence - Using primary/secondary for avatars */}
            <div className="bg-background px-6 py-3 border-b border-border flex items-center gap-3">
              <div className="flex -space-x-2">
                {/* User 1 (Primary) */}
                <div className="w-7 h-7 rounded-full bg-primary/20 border-2 border-card z-20"></div>
                {/* User 2 (Secondary/Sage) */}
                <div className="w-7 h-7 rounded-full bg-secondary/20 border-2 border-card z-10"></div>
              </div>
              <span className="text-[10px] text-muted-foreground font-mono ml-auto flex items-center gap-1.5">
                {/* Live Dot - Using Secondary color for success/status */}
                <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse"></span>
                LIVE
              </span>
            </div>

            <div className="p-6 space-y-4">
              {/* Message 1 (Teammate) */}
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0 border-2 border-primary/10"></div>
                <div className="bg-background p-4 rounded-none text-sm text-foreground/80 w-full">
                  Can we emphasize the ROI metric in the intro?
                </div>
              </div>

              {/* Animated Reply Indicator (Self) */}
              <div className="flex gap-4 flex-row-reverse items-start">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex-shrink-0 border border-secondary/20"></div>
                <div className="bg-card border border-border shadow-sm p-3 rounded-none text-sm text-muted-foreground w-auto min-w-[80px] flex items-center gap-1">
                  <MessageCircle size={14} className="text-primary mr-1" />
                  <span className="text-primary text-xs font-mono">
                    Replying...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Publication Ready Assets",
      desc: "Export to PDF, Markdown, or sync directly to your headless CMS (Contentful, Webflow, etc.).",
      icon: <Share2 size={20} />,
      visual: (
        <div className="relative h-full w-full bg-background flex items-center justify-center overflow-hidden">
          {/* Central Hub Visual - Primary color accent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary rounded-full flex items-center justify-center z-10 shadow-xl ring-4 ring-card">
            <Share2 className="text-primary-foreground" size={24} />
          </div>

          {/* Orbiting Icons - Clean, structured appearance */}
          <div className="grid grid-cols-2 gap-12 w-full max-w-sm relative z-0">
            {[
              { icon: <FileText size={24} />, label: "PDF", delay: "0s" },
              {
                icon: <LayoutTemplate size={24} />,
                label: "Notion",
                delay: "1s",
              },
              { icon: <Globe size={24} />, label: "Webflow", delay: "2s" },
              { icon: <Code2 size={24} />, label: "Markdown", delay: "3s" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-2 animate-float"
                style={{ animationDelay: item.delay }}
              >
                <div className="w-20 h-20 bg-card border border-border rounded-none shadow-sm flex items-center justify-center hover:border-primary hover:shadow-md transition-colors group cursor-pointer">
                  <div className="text-muted-foreground group-hover:text-primary transition-colors">
                    {item.icon}
                  </div>
                </div>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      ref={ref}
      id="features"
      className="py-16 md:py-32 bg-background border-t border-border"
    >
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl  font-bold text-foreground mb-4 tracking-tight">
            The simplest workflow.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto font-sans leading-relaxed">
            Everything you need to scale your customer success stories.
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-0 border border-border shadow-md items-stretch bg-card rounded-xl overflow-hidden">
          {/* LEFT PANEL: Feature Tabs */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-border grid grid-cols-2 lg:grid-cols-1 divide-x divide-border lg:divide-x-0 lg:divide-y">
            {features.map((f, i) => (
              <div
                key={f.id}
                className={`p-6 cursor-pointer transition-all duration-300 group relative overflow-hidden ${activeTab === f.id ? "bg-background" : "hover:bg-background/50"} border-border`}
                onClick={() => setActiveTab(f.id)}
              >
                {/* Active Tab Progress Indicator */}
                {activeTab === f.id && isInView && (
                  <div
                    key={activeTab}
                    className="absolute right-0 bottom-0 lg:top-0 lg:bottom-auto lg:h-full lg:w-1 w-full h-1 bg-border"
                  >
                    {/* Primary Color Progress Bar */}
                    <div className="h-full bg-primary animate-progress origin-left lg:origin-top lg:w-full lg:animate-progress-vertical"></div>
                  </div>
                )}

                {/* Tab Content */}
                <div className="flex flex-col gap-1 lg:pl-4">
                  <h3
                    className={` font-bold text-xl transition-colors ${activeTab === f.id ? "text-foreground" : "text-muted-foreground"}`}
                  >
                    {f.title}
                  </h3>
                  <p
                    className={`hidden md:block text-sm leading-relaxed transition-colors font-sans ${activeTab === f.id ? "text-foreground/80" : "text-muted-foreground"}`}
                  >
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT PANEL: Visual Showcase */}
          <div className="lg:col-span-7 bg-background relative overflow-hidden flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
            {features.map((f) => (
              <div
                key={f.id}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${activeTab === f.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8 pointer-events-none"}`}
              >
                {f.visual}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
