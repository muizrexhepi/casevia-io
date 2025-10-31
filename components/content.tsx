"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Zap, Pencil, Share2, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export default function ContentSection() {
  type ImageKey = "item-1" | "item-2" | "item-3" | "item-4";
  const [activeItem, setActiveItem] = useState<ImageKey>("item-1");

  const images = {
    "item-1": {
      image: "/images/casevia-generation.png",
      alt: "Casevia AI generation dashboard showing transcribed interview and suggested narrative.",
    },
    "item-2": {
      image: "/images/casevia-library.png",
      alt: "Casevia editor showing layout customization options.",
    },
    "item-3": {
      image: "/images/casevia-usage.png",
      alt: "Casevia showing different export formats including web page and social post previews.",
    },
    "item-4": {
      image: "/images/casevia-billing.png",
      alt: "Casevia team management and security settings dashboard.",
    },
  };

  return (
    <section className="relative py-12 md:py-20">
      {/* Background Styling */}
      <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>

      <div className="space-y-12 lg:space-20 max-w-6xl mx-auto">
        <div className="container relative z-10 space-y-6 text-center text-balance">
          <h2 className="text-4xl md:text-5xl tracking-tight leading-[1]">
            Stop manually writing case studies.
            <br className="hidden md:block" />
            Start recording conversations
          </h2>
        </div>

        <div className="flex flex-col gap-12 md:flex-row lg:gap-20 container">
          {/* Accordion Feature List */}
          <Accordion
            type="single"
            value={activeItem}
            onValueChange={(value) => setActiveItem(value as ImageKey)}
            className="w-full"
          >
            {/* ITEM 1: AI Narrative Generation */}
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center gap-3 text-lg font-semibold">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Zap className="size-5" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      Interview → Case Study
                      <Badge variant="secondary" className="text-xs">
                        AI-Powered
                      </Badge>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed pl-[52px]">
                Drop in your recorded client conversation—Casevia's AI
                transcribes it (via AssemblyAI), extracts key moments, and
                structures a complete{" "}
                <span className="font-semibold text-foreground">
                  Challenge → Solution → Results
                </span>{" "}
                narrative with pull quotes. What used to take days now takes{" "}
                <span className="font-semibold text-foreground">
                  ~10 minutes
                </span>
                .
              </AccordionContent>
            </AccordionItem>

            {/* ITEM 2: Full Customization & Editing */}
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="flex items-center gap-3 text-lg font-semibold">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Pencil className="size-5" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      Your Brand, Your Voice
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed pl-[52px]">
                Choose from multiple design templates, customize tone and style
                to match your brand guidelines, and edit any section with our
                smart editor. The AI maintains professional narrative flow while
                you control the final message—no generic outputs.
              </AccordionContent>
            </AccordionItem>

            {/* ITEM 3: Multi-Format Export */}
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="flex items-center gap-3 text-lg font-semibold">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Share2 className="size-5" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      One Case Study, Every Format
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed pl-[52px]">
                Export as PDF for sales decks, Markdown for your blog, or
                SEO-optimized HTML for your site. Pro users get automatic social
                media snippets formatted for LinkedIn, X, and more—all generated
                from the same source material.
              </AccordionContent>
            </AccordionItem>

            {/* ITEM 4: Secure Data & Team Management */}
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <div className="flex items-center gap-3 text-lg font-semibold">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <ShieldCheck className="size-5" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      Built for Teams & Agencies
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed pl-[52px]">
                Manage unlimited team members (Agency plan), assign
                organization-level permissions, and keep all client data
                encrypted and secure. Track usage, manage billing, and scale
                your case study production without hiring writers.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Image Display */}
          <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2 shadow-lg">
            <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
            <div className="aspect-76/59 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
              <div className="size-full overflow-hidden rounded-2xl border bg-muted shadow-md">
                <Image
                  src={images[activeItem].image}
                  className="size-full object-cover object-top-left dark:mix-blend-lighten transition-all duration-300"
                  alt={images[activeItem].alt}
                  width={1207}
                  height={929}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
