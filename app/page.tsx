import ContentSection from "@/components/content";
import BentoSection from "@/components/bento";
import HeroSection from "@/components/hero";
import { ProblemSection } from "@/components/problem";
import { ComparisonSection } from "@/components/comparison";
import CtaSection from "@/components/cta";
import { FAQsSection } from "@/components/faqs";
import LogoCloud from "@/components/logo-cloud";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection /> {/* bg-white - Hook */}
      {/* <LogoCloud /> */}
      <BentoSection /> {/* bg-white - Solution */}
      <ComparisonSection />
      <ProblemSection /> {/* bg-muted - Pain */}
      <ContentSection /> {/* bg-muted - How it works */}
      {/* <CtaSection /> */}
      <CtaSection />
      <FAQsSection /> {/* bg-muted - Objections */}
    </main>
  );
}
