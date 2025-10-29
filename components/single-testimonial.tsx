import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

export default function SingleTestimonialSection() {
  return (
    <section>
      <div className="bg-muted py-12 lg:py-24 container border-x">
        <div className="mx-auto w-full max-w-4xl px-6 text-center">
          <div className="max-w-4xl">
            <blockquote className="mt-6">
              <p className="text-foreground text-xl md:text-2xl">
                &quot;Before Casevia, creating a single case study took us{" "}
                <strong>2–3 weeks</strong> and over <strong>$1,500</strong> in
                writer and editor costs. Now, we upload an interview and get a{" "}
                <strong>
                  polished, publish-ready draft in under 15 minutes
                </strong>{" "}
                — every time.&quot;
              </p>
              <footer className="mt-6 flex flex-col items-center justify-center">
                {/* Note: Avatar details are updated to reflect the target user segment */}
                <Avatar className="ring-foreground/10 size-12 border border-transparent shadow ring-1">
                  <AvatarImage
                    src="https://www.muizrexhepi.com/_next/image?url=%2Fassets%2Fimages%2Fprofile.jpeg&w=1080&q=75" // Keep or replace with a generic image URL
                    alt="Muiz R."
                  />
                  <AvatarFallback>S</AvatarFallback>
                </Avatar>
                <cite className="text-foreground mt-2 text-lg font-medium">
                  Muiz R.
                </cite>
                <span className="text-muted-foreground">
                  Founder, Mid-Sized Software Agency
                </span>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
