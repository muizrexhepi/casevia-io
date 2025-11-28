import { Clock, Building2, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { WaitlistForm } from "@/components/emails/waitlist-form";

// 1. Make this a Server Component for SEO Metadata
export const metadata = {
  title: "Streamline Case Study: 60% Onboarding Time Reduction",
  description:
    "Read how Streamline Software used our solution to reduce customer onboarding time by 60% and achieve $200K in annual cost savings.",
};

export default function ExampleCaseStudy() {
  return (
    <section className="bg-background">
      {/* 1. Header Section - Clean White Background */}
      <div className="py-16 md:py-24 container max-w-4xl mx-auto">
        <div className="space-y-6">
          <Badge
            variant="outline"
            className="text-sm px-3 bg-white border-border/70 text-primary"
          >
            AI-Generated Example
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            How Streamline Reduced Customer Onboarding Time by 60%
          </h1>
          {/* Metadata Block - Simplified and Clean */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pt-2">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-primary" />
              <span>Streamline Software</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>12 min read</span>
            </div>
            <span>•</span>
            <span>SaaS & B2B</span>
          </div>
        </div>
      </div>

      {/* 2. Key Metrics Section - Separated by Full-Width BG Color */}
      <div className="py-12 bg-muted">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6">Key Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cards use background/border for definition, NOT separators */}
            <div className="bg-background p-6 rounded-xl border border-border shadow-sm">
              <div className="flex items-center gap-2 text-primary mb-2">
                <TrendingUp className="h-5 w-5" />
                <span className="text-3xl font-bold">60%</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Reduction in onboarding time
              </p>
            </div>
            <div className="bg-background p-6 rounded-xl border border-border shadow-sm">
              <div className="flex items-center gap-2 text-primary mb-2">
                <TrendingUp className="h-5 w-5" />
                <span className="text-3xl font-bold">85%</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Customer satisfaction increase
              </p>
            </div>
            <div className="bg-background p-6 rounded-xl border border-border shadow-sm">
              <div className="flex items-center gap-2 text-primary mb-2">
                <TrendingUp className="h-5 w-5" />
                <span className="text-3xl font-bold">$200K</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Annual cost savings
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Main Content - Clean White Background */}
      <div className="py-16 md:py-24 bg-background container max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Overview, Challenge, Solution, etc. */}
          {/* Using a max-width narrower than the container for better reading flow (prose) */}
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Overview
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Streamline Software is a B2B SaaS company providing project
                management tools for remote teams. With over 5,000 customers
                across 40 countries, they were facing a critical challenge:
                their customer onboarding process was taking too long, leading
                to delays in time-to-value and increased churn during the trial
                period.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This case study explores how Streamline partnered with our team
                to completely redesign their onboarding experience, resulting in
                dramatic improvements in customer satisfaction and operational
                efficiency.
              </p>
            </section>

            {/* Challenge */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                The Challenge
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Before implementing changes, Streamline's onboarding process was
                taking an average of 14 days from signup to first productive
                use. This extended timeline was causing several problems:
              </p>
              {/* List: Removed bullet icons for cleaner look, relying on list styling */}
              <ul className="space-y-3 text-lg text-muted-foreground list-none pl-0">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl leading-none mt-1">
                    •
                  </span>
                  <span className="flex-1">
                    <strong>High trial abandonment:</strong> 35% of trial users
                    never completed onboarding
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl leading-none mt-1">
                    •
                  </span>
                  <span className="flex-1">
                    <strong>Support burden:</strong> The customer success team
                    was overwhelmed with basic setup questions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl leading-none mt-1">
                    •
                  </span>
                  <span className="flex-1">
                    <strong>Delayed revenue:</strong> Long onboarding meant
                    customers took longer to see value and convert to paid plans
                  </span>
                </li>
              </ul>
              {/* Quote Block: Simplified and elegant border-left */}
              <div className="bg-muted p-6 rounded-lg border-l-4 border-primary my-8">
                <p className="text-foreground italic text-lg leading-relaxed">
                  "We knew we had a great product, but we were losing customers
                  before they even got to experience it. The onboarding process
                  was our biggest bottleneck."
                </p>
                <p className="text-sm text-muted-foreground mt-3">
                  — Sarah Chen, VP of Product at Streamline
                </p>
              </div>
            </section>

            {/* Solution */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                The Solution
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We worked closely with Streamline's product and engineering
                teams to redesign the entire onboarding experience. The solution
                involved three key components:
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    1. Intelligent Onboarding Flow
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We implemented a smart, context-aware onboarding system that
                    adapts based on the customer's industry, team size, and use
                    case. Instead of a one-size-fits-all approach, users now see
                    only the setup steps relevant to their specific needs.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    2. Interactive Tutorials
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Rather than static documentation, we created interactive,
                    in-app tutorials that guide users through key features as
                    they use them. This "learning by doing" approach
                    dramatically reduced the time to first value.
                  </p>
                </div>
              </div>
            </section>

            {/* Results */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                The Results
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The impact of the new onboarding system exceeded expectations:
              </p>
              {/* Results List: Using a clean definition list style for impact */}
              <div className="space-y-6 text-muted-foreground mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-24 shrink-0 text-xl font-bold text-primary">
                    60% faster
                  </div>
                  <p className="text-lg leading-relaxed">
                    Average onboarding time dropped from 14 days to just 5.6
                    days, a 60% reduction
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-24 shrink-0 text-xl font-bold text-primary">
                    85% increase
                  </div>
                  <p className="text-lg leading-relaxed">
                    Customer satisfaction scores (CSAT) for onboarding improved
                    from 6.5/10 to 8.9/10
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-24 shrink-0 text-xl font-bold text-primary">
                    $200K saved
                  </div>
                  <p className="text-lg leading-relaxed">
                    Annual cost savings from reduced support burden and
                    increased conversion rates
                  </p>
                </div>
              </div>

              <div className="bg-muted p-6 rounded-lg border-l-4 border-primary my-8">
                <p className="text-foreground italic text-lg leading-relaxed">
                  "The new onboarding experience has been transformative. Not
                  only are our customers getting value faster, but our team can
                  now focus on strategic initiatives instead of hand-holding
                  through setup. It's been a complete game-changer."
                </p>
                <p className="text-sm text-muted-foreground mt-3">
                  — Sarah Chen, VP of Product at Streamline
                </p>
              </div>
            </section>

            {/* Conclusion & CTA Note */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Conclusion
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By reimagining their onboarding experience, Streamline Software
                transformed a major pain point into a competitive advantage. The
                60% reduction in onboarding time, combined with significantly
                improved customer satisfaction, has positioned them for
                accelerated growth. This case study demonstrates how investing
                in customer experience can yield substantial returns in both
                customer success and operational efficiency.
              </p>

              {/* CTA Note: Kept clean and simple */}
              <div className="bg-muted p-6 rounded-xl text-center mt-12 border border-border">
                <p className="text-base text-foreground font-semibold mb-1">
                  This entire case study was generated with Casevia
                </p>
                <p className="text-sm text-muted-foreground">
                  Created from a 18-minute customer interview recording
                </p>
              </div>
            </section>
          </div>{" "}
          {/* End of max-w-3xl content block */}
        </div>
      </div>

      {/* 4. Bottom CTA - Full-Width, High Impact */}
      <div className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto text-center space-y-8 flex flex-col items-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
              Create case studies like this in minutes
            </h2>
            <p className="text-xl text-muted-foreground">
              Transform your customer interviews into professional,
              publish-ready case studies with AI. Stop wasting time and start
              converting leads.
            </p>
          </div>
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
