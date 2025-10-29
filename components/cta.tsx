import { WaitlistForm } from "@/components/emails/waitlist-form";

export default function CtaSection() {
  return (
    <section className="container border-x">
      <div className="bg-muted rounded-lg shadow-sm py-12 lg:py-24">
        <div className="px-2 mx-auto text-center max-w-4xl">
          <h2 className="text-foreground text-balance text-3xl font-semibold lg:text-4xl">
            Turn Interviews into Case Studies —
            <br />
            <span className="text-muted-foreground">
              in Minutes, Not Weeks.
            </span>
          </h2>

          <p className="mt-4 text-lg text-muted-foreground mx-auto max-w-xl">
            Upload your customer interview and let Casevia generate a polished,
            publish-ready case study automatically — so you can scale
            credibility while you sleep.
          </p>

          <div className="mt-8 flex gap-3 justify-center">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}
