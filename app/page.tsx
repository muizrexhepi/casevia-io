import ContentSection from "@/components/content";
import BentoSection from "@/components/bento";
import HeroSection from "@/components/hero";
import CtaSection from "@/components/cta";
import FAQs from "@/components/faqs";
import { ProblemSection } from "@/components/problem";
import { ComparisonSection } from "@/components/comparison";
import { CoreValueSection } from "@/components/use-cases";
import { TransformationSection } from "@/components/founders-note";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection /> {/* bg-white - Hook */}
      <BentoSection /> {/* bg-white - Solution */}
      <ComparisonSection />
      <ProblemSection /> {/* bg-muted - Pain */}
      <ContentSection /> {/* bg-muted - How it works */}
      <CoreValueSection />
      <FAQs /> {/* bg-muted - Objections */}
      {/* <CtaSection />  */}
    </main>
  );
}
