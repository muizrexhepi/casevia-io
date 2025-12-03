"use client";
import Hero from "@/components/home/hero";
import BentoGrid from "@/components/home/bento-grid";
import AppShowcase from "@/components/home/app-showcase";
import FAQ from "@/components/home/faq";
import Pricing from "@/components/home/pricing";
import SeeItInAction from "@/components/home/see-in-action";

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Hero />
      <SeeItInAction />
      <BentoGrid />
      <AppShowcase />
      <Pricing />
      <FAQ />
    </div>
  );
}
