"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Zap, // For AI Generation
  Pencil, // For Customization/Editing
  Share2, // For Exporting/Sharing
  ShieldCheck, // For Security/Data
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Separator } from "./ui/separator";

export default function ContentSection() {
  type ImageKey = "item-1" | "item-2" | "item-3" | "item-4";
  const [activeItem, setActiveItem] = useState<ImageKey>("item-1");

  // NOTE: Image paths updated to reflect files found in your project explorer
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
      {/* Background Styling (kept from original) */}
      <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>

      <div className="px-2 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
        {/* Header (Updated for Casevia) */}
        <div className="py-12 lg:py-24 border-x container relative z-10 mx-auto space-y-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Go from interview to final <br />
            <span className="text-muted-foreground">
              case study, instantly.
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Casevia transforms raw customer interviews (audio/video) into
            high-quality, structured social proof, cutting weeks of manual work
            down to minutes.
          </p>
        </div>
        <Separator />
        <div className="flex flex-col gap-12 sm:px-12 md:flex-row lg:gap-20 p-2 border-x container">
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
                Upload your customer interview (audio or video), and our AI
                extracts key quotes and automatically drafts a complete
                Challenge → Solution → Results narrative. No more transcription
                or drafting from scratch.
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
                Refine the AI's draft using our powerful editor. You can adjust
                the tone, change the persona, and integrate additional data
                points to ensure the final story perfectly matches your brand
                voice.
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
                Instantly export your case study in multiple formats:
                SEO-friendly Web content, PDF for sales collateral, and
                pre-formatted social media posts (LinkedIn, X, etc.) to maximize
                reach.
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
                Keep your customer data secure with enterprise-grade
                authentication and private storage. Manage team access and
                permissions easily, ensuring compliance and data integrity
                across your organization.
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
