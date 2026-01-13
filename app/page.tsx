import Hero from "@/components/hero";
import Mission from "@/components/mission";
import Methodology from "@/components/methodology";
import WorkShowcase from "@/components/WorkShowcase"; // The component we built in the previous step
import Manifesto from "@/components/manifesto";
import Pricing from "@/components/pricing";
import FAQ from "@/components/faq";

export default function HomePage() {
  return (
    <main className="w-full relative overflow-hidden">
      <Hero />
      <Mission />
      <Methodology />
      <WorkShowcase />
      <Manifesto />
      <Pricing />
      <FAQ />
    </main>
  );
}
