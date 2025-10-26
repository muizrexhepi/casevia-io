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
                &quot;Before Casevia, every case study took us 2-3 weeks and
                $1,500+ in writer and editor fees. Now, we turn an interview
                into a publish-ready draft in under 15 minutes,
                consistently.&quot;
              </p>
              <footer className="mt-6 flex flex-col items-center justify-center">
                {/* Note: Avatar details are updated to reflect the target user segment */}
                <Avatar className="ring-foreground/10 size-12 border border-transparent shadow ring-1">
                  <AvatarImage
                    src="https://avatars.githubusercontent.com/u/68236786?v=4" // Keep or replace with a generic image URL
                    alt="Sarah L."
                  />
                  <AvatarFallback>S</AvatarFallback>
                </Avatar>
                <cite className="text-foreground mt-2 text-lg font-medium">
                  Sarah L.
                </cite>
                <span className="text-muted-foreground">
                  Founder, Mid-Sized Marketing Agency
                </span>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
