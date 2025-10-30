import ContentSection from "@/components/content";
import BentoSection from "@/components/bento";
import HeroSection from "@/components/hero";
import LogoCloud from "@/components/logo-cloud";
import SingleTestimonialSection from "@/components/single-testimonial";
import CtaSection from "@/components/cta";
import FAQs from "@/components/faqs";
import ProcessSection from "@/components/process";
import { ProblemSection } from "@/components/problem";
import { UseCasesSection } from "@/components/use-cases";
import { ComparisonSection } from "@/components/comparison";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      {/* <LogoCloud /> */}
      <ProblemSection /> {/* NEW - Shows pain points */}
      <BentoSection />
      <SingleTestimonialSection />
      <UseCasesSection /> {/* NEW - Shows who it's for */}
      <ContentSection />
      <ComparisonSection /> {/* NEW - Why Casevia vs others */}
      <ProcessSection /> {/* The 4-step flow we created earlier */}
      <CtaSection />
      <FAQs />
    </main>
  );
}
