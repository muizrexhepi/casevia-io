"use client";
import Hero from "@/components/home/hero";
import BentoGrid from "@/components/home/bento-grid";
import AppShowcase from "@/components/home/app-showcase";
import FAQ from "@/components/home/faq";
import Pricing from "@/components/home/pricing";
import SeeItInAction from "@/components/home/see-in-action";
import UseCases from "@/components/home/use-cases";

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Hero />
      {/* <SeeItInAction /> */}
      {/* <BentoGrid /> */} <UseCases /> {/* ADD THIS */}
      <AppShowcase />
      <Pricing />
      <FAQ />
    </div>
  );
}
