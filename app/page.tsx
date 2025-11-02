import ContentSection from "@/components/content";
import BentoSection from "@/components/bento";
import HeroSection from "@/components/hero";
import { ProblemSection } from "@/components/problem";
import { ComparisonSection } from "@/components/comparison";
import { CtaSection } from "@/components/cta";
import { FAQsSection } from "@/components/faqs";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection /> {/* bg-white - Hook */}
      <BentoSection /> {/* bg-white - Solution */}
      <ComparisonSection />
      <ProblemSection /> {/* bg-muted - Pain */}
      <ContentSection /> {/* bg-muted - How it works */}
      {/* <CtaSection /> */}
      <FAQsSection /> {/* bg-muted - Objections */}
      {/* <CtaSection />  */}
    </main>
  );
}
