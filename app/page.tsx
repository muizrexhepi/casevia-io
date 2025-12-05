"use client";
import Hero from "@/components/home/hero";
import AppShowcase from "@/components/home/app-showcase";
import FAQ from "@/components/home/faq";
import Pricing from "@/components/home/pricing";
import UseCases from "@/components/home/use-cases";

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Hero />
      <UseCases />
      <AppShowcase />
      <Pricing />
      <FAQ />
    </div>
  );
}
