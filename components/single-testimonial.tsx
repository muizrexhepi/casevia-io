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
                &quot;Using Tailark has been like unlocking a secret design
                superpower. It's the perfect fusion of simplicity and
                versatility, enabling us to create UIs that are as stunning as
                they are user-friendly.&quot;
              </p>
              <footer className="mt-6 flex flex-col items-center justify-center">
                <Avatar className="ring-foreground/10 size-12 border border-transparent shadow ring-1">
                  <AvatarImage
                    src="https://avatars.githubusercontent.com/u/68236786?v=4"
                    alt="Théo Balick"
                  />
                  <AvatarFallback>T</AvatarFallback>
                </Avatar>
                <cite className="text-foreground mt-2 text-lg font-medium">
                  Théo Balick
                </cite>
                <span className="text-muted-foreground">@theo_b</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
