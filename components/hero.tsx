"use client";

import Image from "next/image";
import { WaitlistForm } from "./emails/waitlist-form";

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center container gap-8 py-20 md:py-28">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_90%,transparent_100%)]"></div>

      {/* Headline */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1em] max-w-3xl text-balance">
        Conversations in.{" "}
        <span className="text-primary font-semibold">Case studies out.</span>
      </h1>

      {/* Supporting text */}
      <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
        Turn real client interviews into structured, story-driven case studies
        in minutes — not weeks. Save days of writing and design work.
      </p>

      <div className="w-full max-w-md">
        <WaitlistForm />
      </div>

      {/* Product screenshot */}
      <div className="w-full mt-12 relative rounded-xl overflow-hidden [mask-image:radial-gradient(ellipse_100%_70%_at_50%_30%,#000_80%,transparent_100%)]">
        <Image
          src="/images/image.png"
          alt="Casevia converts recorded interviews into structured case studies"
          width={1920}
          height={1080}
          priority
          className="object-contain mx-auto rounded-xl bg-muted shadow border border-border/40 p-2"
        />
      </div>
    </section>
  );
}
