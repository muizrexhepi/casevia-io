import { Button } from "@/components/ui/button";
import { Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="container border-x">
      <div className="bg-muted rounded-lg shadow-sm py-12 lg:py-24">
        <div className="px-2">
          <h2 className="text-foreground max-w-lg text-balance text-3xl font-semibold lg:text-4xl">
            Build Modern Websites.
            <br />
            <span className="text-foreground/60"> That Drive Results</span>{" "}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Libero sapiente aliquam quibusdam aspernatur, praesentium iusto
            repellendus.
          </p>
          <div className="mt-8 flex gap-3">
            <Button asChild className="pr-2">
              <Link href="#">
                Try Mist for Free
                <ChevronRight
                  strokeWidth={2.5}
                  className="size-3.5! opacity-50"
                />
              </Link>
            </Button>
            <Button asChild variant="outline" className="pl-2.5">
              <Link href="#">
                <Calendar className="!size-3.5 opacity-50" strokeWidth={2.5} />
                Request a Demo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
