"use client";
import FinalCTA from "@/components/cta";
import DashboardPreview from "@/components/dashboard-preview";
import FeaturesZigZag from "@/components/features";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import QualityShowcase from "@/components/quality-showcase";

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Hero />
      <DashboardPreview />
      <FeaturesZigZag />
      <QualityShowcase />
      <Pricing />
      <FinalCTA />
    </div>
  );
}
