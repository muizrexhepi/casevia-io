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
import { Separator } from "./ui/separator";

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
    <section className="relative">
      {/* Background Styling */}
      <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>

      <div className="px-2 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
        {/* Header */}
        <div className="py-12 lg:py-24 border-x container relative z-10 mx-auto space-y-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Go from interview to final <br className="hidden md:block" />
            <span className="text-muted-foreground">
              case study — instantly.
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Casevia turns raw client interviews into structured, publish-ready
            stories in minutes — no forms, no manual writing. Just upload and
            let the AI do the work.
          </p>
        </div>

        <Separator />

        <div className="flex flex-col gap-12 px-4 md:flex-row lg:gap-20 p-2 border-x container">
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
                <div className="flex items-center gap-2 text-base">
                  <Zap className="size-4 text-primary" />
                  AI Narrative Generation
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Upload your interview — video, audio, or transcript. Casevia’s
                AI extracts key quotes and automatically crafts a full{" "}
                <strong>Challenge → Solution → Results</strong> narrative. No
                transcription, no drafts, no starting from scratch.
              </AccordionContent>
            </AccordionItem>

            {/* ITEM 2: Full Customization & Editing */}
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <Pencil className="size-4 text-primary" />
                  Full Customization & Editing
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Make it yours. Edit tone, structure, or pull in extra details
                with one click. Our smart editor lets you tweak content while
                maintaining Casevia’s professionally written flow.
              </AccordionContent>
            </AccordionItem>

            {/* ITEM 3: Multi-Format Export */}
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <Share2 className="size-4 text-primary" />
                  Multi-Format Export & Sharing
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Export your final case study in any format: PDF for clients,
                Markdown or HTML for your CMS, or ready-to-post social snippets
                for platforms like LinkedIn and X — all instantly optimized.
              </AccordionContent>
            </AccordionItem>

            {/* ITEM 4: Secure Data & Team Management */}
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <ShieldCheck className="size-4 text-primary" />
                  Secure Data & Team Management
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Casevia uses enterprise-grade encryption and private workspace
                access. Manage teams, control permissions, and ensure your
                clients’ data stays protected — always.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Image Display */}
          <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
            <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
            <div className="aspect-76/59 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
              <div className="size-full overflow-hidden rounded-2xl border bg-muted shadow-md">
                <Image
                  src={images[activeItem].image}
                  className="size-full object-cover object-top-left dark:mix-blend-lighten"
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
