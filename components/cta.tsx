import { WaitlistForm } from "@/components/emails/waitlist-form";

export default function CtaSection() {
  return (
    <section className="container border-x">
      <div className="bg-muted rounded-lg shadow-sm py-12 lg:py-24">
        <div className="px-2 mx-auto text-center max-w-4xl">
          <h2 className="text-foreground text-balance text-3xl font-semibold lg:text-4xl">
            Stop Spending Weeks on Case Studies.
            <br />
            <span className="text-foreground/60">
              {" "}
              Start Scaling Your Social Proof in Minutes.
            </span>{" "}
          </h2>

          <p className="mt-4 text-lg text-muted-foreground mx-auto max-w-xl">
            Upload your customer interview and get a publish-ready case study
            instantly.
          </p>

          <div className="mt-8 flex gap-3 justify-center">
            {/* Primary CTA: Directly to Free Trial / Sign Up */}
            {/*
            <Button asChild className="pr-2">
              <Link href="/signup">
                Try Casevia Free
                <ChevronRight
                  strokeWidth={2.5}
                  className="size-3.5! opacity-50"
                />
              </Link>
            </Button>
            */}
            {/* Secondary CTA: For high-value leads (Agencies) to book a call */}
            {/*
            <Button asChild variant="outline" className="pl-2.5">
              <Link href="/schedule-demo">
                <Calendar className="size-3.5! opacity-50" strokeWidth={2.5} />
                Request a Demo
              </Link>
            </Button>
            */}
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}
