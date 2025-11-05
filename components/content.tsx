"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils"; // optional; remove cn() if you don't use it

type Card = {
  k: string;
  title: string;
  body: string;
  points: string[];
  img: string;
  imgAlt: string;
  tint: "primary" | "neutral" | "accent" | "success";
};

const CARDS: Card[] = [
  {
    k: "a1",
    title: "A: Capture once. Reuse everywhere.",
    body: "Turn a single client interview into assets for web, sales decks, and social—without rewriting.",
    points: ["One source of truth", "Auto-format to multiple outputs"],
    img: "/images/value-1.webp",
    imgAlt: "Repurposing case study assets",
    tint: "primary",
  },
  {
    k: "a2",
    title: "A: Real proof—never AI fiction.",
    body: "Everything is derived from verified conversations. Quotes and metrics are traceable back to the transcript.",
    points: ["Pull-quote extraction", "Evidence links by timestamp"],
    img: "/images/value-2.webp",
    imgAlt: "Verified quotes and timestamps",
    tint: "accent",
  },
  {
    k: "a3",
    title: "A: Review in minutes, not meetings.",
    body: "Share a review link. Clients approve quotes and redlines async—no more back-and-forth calls.",
    points: ["Comment & approve link", "Version-safe changes"],
    img: "/images/value-3.webp",
    imgAlt: "Async approval workflow",
    tint: "neutral",
  },
  {
    k: "a4",
    title: "A: Privacy-first by design.",
    body: "Your data stays yours. Option to store transcript only, auto-redact PII, and one-click delete.",
    points: ["Store transcript-only", "PII redaction • Data deletion"],
    img: "/images/value-4.webp",
    imgAlt: "Privacy and security controls",
    tint: "success",
  },
];

const tintMap = {
  // coral/orange primary tint
  primary: {
    ring: "from-orange-500/15",
    icon: "text-orange-500",
    chip: "bg-orange-500/10 text-orange-600 border-orange-500/20",
    border: "hover:border-orange-500/30",
  },
  // slate/neutral
  neutral: {
    ring: "from-neutral-500/12",
    icon: "text-neutral-600",
    chip: "bg-neutral-500/10 text-neutral-700 border-neutral-500/20",
    border: "hover:border-neutral-500/30",
  },
  // blue/purple accent
  accent: {
    ring: "from-indigo-500/15",
    icon: "text-indigo-500",
    chip: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20",
    border: "hover:border-indigo-500/30",
  },
  // green success
  success: {
    ring: "from-emerald-500/15",
    icon: "text-emerald-600",
    chip: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
    border: "hover:border-emerald-500/30",
  },
};

export default function ContentSection() {
  return (
    <section className="relative bg-background py-16 md:py-24 overflow-hidden">
      {/* soft pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container max-w-6xl relative z-10">
        {/* header */}
        <div className="mb-12 md:mb-16 text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-600">
            Why teams choose Casevia
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Not just faster—
            <span className="text-gradient-primary">better</span> case studies.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Four product values that compound: capture once, prove authenticity,
            review async, and stay privacy-first.
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CARDS.map((c, i) => {
            const t = tintMap[c.tint];
            const isRightColumn = i % 2 === 1;
            return (
              <article
                key={c.k}
                className={cn(
                  "group relative rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm",
                  "transition-all duration-300 hover:shadow-xl",
                  t.border,
                  // Stagger cards: right column higher, left column lower
                  isRightColumn ? "md:-translate-y-12" : "md:translate-y-12"
                )}
              >
                {/* brand halo - only show on hover */}
                <div
                  className={cn(
                    "absolute -inset-0.5 -z-10 rounded-2xl opacity-0 blur-xl transition-opacity duration-500",
                    "bg-gradient-to-br",
                    t.ring,
                    "to-transparent group-hover:opacity-70"
                  )}
                />

                {/* image band (Stripe-style) */}
                <div className="relative h-64 overflow-hidden rounded-t-2xl bg-muted/30 border-b border-border/60">
                  {/* slight inner tint on hover */}
                  <div className="absolute inset-0 bg-muted group-hover:from-white/10 transition-colors duration-300" />
                  <div
                    className={cn(
                      "absolute",
                      // Offset the image so it doesn't fill perfectly – feels editorial
                      i % 2 === 0 ? "top-6 left-8" : "top-8 right-8",
                      "w-[78%] md:w-[72%] rounded-xl border border-border/60 shadow-sm",
                      "bg-background backdrop-blur",
                      "transition-transform duration-500 ease-out group-hover:-translate-y-1.5 group-hover:translate-x-1"
                    )}
                  >
                    <Image
                      src={c.img}
                      alt={c.imgAlt}
                      width={900}
                      height={600}
                      className="rounded-xl"
                      priority={i < 2}
                    />
                  </div>
                </div>

                {/* copy */}
                <div className="p-7 md:p-8 space-y-4">
                  <div
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs font-medium",
                      t.chip
                    )}
                  >
                    A
                    <span className="h-1 w-1 rounded-full bg-current/50" />
                    USP
                  </div>

                  <h3 className="text-xl md:text-2xl font-semibold">
                    {c.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {c.body}
                  </p>

                  <ul className="mt-2 grid gap-1.5 text-sm text-foreground/80">
                    {c.points.map((p) => (
                      <li key={p} className="flex items-center gap-2">
                        <span
                          className={cn(
                            "h-1.5 w-1.5 rounded-full",
                            t.icon,
                            "bg-current/60"
                          )}
                        />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <button className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground/90 hover:text-foreground transition-all opacity-0 group-hover:opacity-100 duration-300">
                    Learn more{" "}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
