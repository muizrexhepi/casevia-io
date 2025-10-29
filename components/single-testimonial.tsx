import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

export default function SingleTestimonialSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="py-16 lg:py-32 container relative z-10">
        <div className="mx-auto w-full max-w-4xl px-6">
          {/* Optional: Add decorative quote icon */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Quote className="w-8 h-8 text-primary" />
            </div>
          </div>

          <blockquote className="text-center space-y-8">
            <p className="text-foreground text-xl md:text-2xl lg:text-3xl leading-relaxed">
              &quot;Before Casevia, creating a single case study took us{" "}
              <span className="font-semibold text-primary">2–3 weeks</span> and
              over <span className="font-semibold text-primary">$1,500</span> in
              writer and editor costs. Now, we upload an interview and get a{" "}
              <span className="font-semibold text-primary">
                polished, publish-ready draft in under 15 minutes
              </span>{" "}
              — every time.&quot;
            </p>

            <footer className="flex flex-col items-center justify-center pt-4">
              <Avatar className="ring-foreground/10 size-16 border-2 border-primary/20 shadow-lg ring-2 mb-4">
                <AvatarImage
                  src="https://www.muizrexhepi.com/_next/image?url=%2Fassets%2Fimages%2Fprofile.jpeg&w=1080&q=75"
                  alt="Muiz R."
                />
                <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                  MR
                </AvatarFallback>
              </Avatar>
              <cite className="text-foreground text-lg font-semibold not-italic">
                Muiz Rexhepi
              </cite>
              <span className="text-muted-foreground text-sm">
                Founder, Mid-Sized Software Agency
              </span>
              {/* Optional: Add company logo or location */}
              <span className="text-xs text-muted-foreground/70 mt-2">
                Skopje, North Macedonia
              </span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
