"use client";

import { Growth } from "@/components/growth";
import { Hero } from "@/components/hero";
import { Portfolio } from "@/components/portfolio";
import { Pricing } from "@/components/pricing";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { Stats } from "@/components/stats";

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Hero />
      <Stats />
      <Portfolio />
      <Growth />
      <Services />
      <Process />
      <Pricing />
    </div>
  );
}
