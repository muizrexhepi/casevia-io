import ContentSection from "@/components/content";
import BentoSection from "@/components/bento";
import { HeroSection } from "@/components/hero";
import LogoCloud from "@/components/logo-cloud";
import SingleTestimonialSection from "@/components/single-testimonial";
import { Separator } from "@/components/ui/separator";
import FeaturesSection from "@/components/features";
import TestimonialsSection from "@/components/testimonials";
import CtaSection from "@/components/cta";
import FAQs from "@/components/faqs";
import FooterSection from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Separator />
      <LogoCloud />
      <Separator />
      <BentoSection />
      <Separator />
      <SingleTestimonialSection />
      <Separator />
      <ContentSection />
      <Separator />
      <FeaturesSection />
      <Separator />
      <TestimonialsSection />
      <Separator />
      <CtaSection />
      <Separator />
      <FAQs />
      <Separator />
      <FooterSection />
    </main>
  );
}
