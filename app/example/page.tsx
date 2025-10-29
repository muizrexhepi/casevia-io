"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, Building2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import FooterSection from "@/components/footer";
import { WaitlistForm } from "@/components/emails/waitlist-form";

export default function ExamplePage() {
  return (
    <>
      <section>
        {/* Header */}
        <div className="py-12 md:py-16 border-x container">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* <Link
              href="/"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to home
            </Link> */}
            <Badge variant="outline" className="text-sm px-3 bg-white">
              Example Case Study
            </Badge>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              How Streamline Reduced Customer Onboarding Time by 60%
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                <span>Streamline Software</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>12 min read</span>
              </div>
              <span>•</span>
              <span>SaaS & B2B</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Key Metrics Section */}
        <div className="py-12 bg-muted border-x container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold mb-6">Key Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background p-6 rounded-lg border">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <TrendingUp className="h-5 w-5" />
                  <span className="text-3xl font-bold">60%</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Reduction in onboarding time
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <TrendingUp className="h-5 w-5" />
                  <span className="text-3xl font-bold">85%</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Customer satisfaction increase
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border">
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

        <Separator />

        {/* Main Content */}
        <div className="py-12 md:py-16 border-x container">
          <div className="max-w-3xl mx-auto prose prose-gray">
            {/* Overview */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Streamline Software is a B2B SaaS company providing project
                management tools for remote teams. With over 5,000 customers
                across 40 countries, they were facing a critical challenge:
                their customer onboarding process was taking too long, leading
                to delays in time-to-value and increased churn during the trial
                period.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This case study explores how Streamline partnered with our team
                to completely redesign their onboarding experience, resulting in
                dramatic improvements in customer satisfaction and operational
                efficiency.
              </p>
            </section>

            {/* Challenge */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Before implementing changes, Streamline's onboarding process was
                taking an average of 14 days from signup to first productive
                use. This extended timeline was causing several problems:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>High trial abandonment:</strong> 35% of trial users
                    never completed onboarding
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Support burden:</strong> The customer success team
                    was overwhelmed with basic setup questions
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Delayed revenue:</strong> Long onboarding meant
                    customers took longer to see value and convert to paid plans
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Competitive disadvantage:</strong> Competitors were
                    offering faster setup experiences
                  </span>
                </li>
              </ul>
              <div className="bg-muted p-6 rounded-lg border-l-4 border-primary my-6">
                <p className="text-foreground italic">
                  "We knew we had a great product, but we were losing customers
                  before they even got to experience it. The onboarding process
                  was our biggest bottleneck."
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  — Sarah Chen, VP of Product at Streamline
                </p>
              </div>
            </section>

            {/* Solution */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We worked closely with Streamline's product and engineering
                teams to redesign the entire onboarding experience. The solution
                involved three key components:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-3">
                    1. Intelligent Onboarding Flow
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We implemented a smart, context-aware onboarding system that
                    adapts based on the customer's industry, team size, and use
                    case. Instead of a one-size-fits-all approach, users now see
                    only the setup steps relevant to their specific needs.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3">
                    2. Interactive Tutorials
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Rather than static documentation, we created interactive,
                    in-app tutorials that guide users through key features as
                    they use them. This "learning by doing" approach
                    dramatically reduced the time to first value.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3">
                    3. Automated Setup Assistance
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We built automation tools that handle common setup tasks
                    like data import, team invitations, and initial
                    configuration. What previously required manual steps now
                    happens automatically, saving hours of setup time.
                  </p>
                </div>
              </div>
            </section>

            {/* Implementation */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Implementation</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The project was completed in three phases over 12 weeks:
              </p>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-medium text-foreground mb-2">
                    Phase 1: Discovery & Design (Weeks 1-4)
                  </h4>
                  <p className="leading-relaxed">
                    We conducted user research with 50+ customers to understand
                    pain points, created user journey maps, and designed the new
                    onboarding flow with multiple prototypes and user testing
                    sessions.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">
                    Phase 2: Development (Weeks 5-9)
                  </h4>
                  <p className="leading-relaxed">
                    The engineering team built the new onboarding system,
                    integrated it with existing infrastructure, and created the
                    automation tools. We used an agile approach with bi-weekly
                    sprint reviews.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">
                    Phase 3: Testing & Launch (Weeks 10-12)
                  </h4>
                  <p className="leading-relaxed">
                    We ran a beta program with 200 new customers, collected
                    feedback, made refinements, and gradually rolled out to 100%
                    of new signups over two weeks.
                  </p>
                </div>
              </div>
            </section>

            {/* Results */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">The Results</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The impact of the new onboarding system exceeded expectations:
              </p>
              <div className="space-y-4 text-muted-foreground mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-24 shrink-0 font-semibold text-primary">
                    60% faster
                  </div>
                  <p>
                    Average onboarding time dropped from 14 days to just 5.6
                    days, a 60% reduction
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-24 shrink-0 font-semibold text-primary">
                    85% increase
                  </div>
                  <p>
                    Customer satisfaction scores (CSAT) for onboarding improved
                    from 6.5/10 to 8.9/10
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-24 shrink-0 font-semibold text-primary">
                    45% reduction
                  </div>
                  <p>
                    Trial abandonment rate decreased from 35% to 19%, meaning
                    more users complete onboarding
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-24 shrink-0 font-semibold text-primary">
                    70% fewer
                  </div>
                  <p>
                    Support tickets related to onboarding dropped by 70%,
                    freeing up the CS team for high-value activities
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-24 shrink-0 font-semibold text-primary">
                    $200K saved
                  </div>
                  <p>
                    Annual cost savings from reduced support burden and
                    increased conversion rates
                  </p>
                </div>
              </div>
              <div className="bg-muted p-6 rounded-lg border-l-4 border-primary my-6">
                <p className="text-foreground italic">
                  "The new onboarding experience has been transformative. Not
                  only are our customers getting value faster, but our team can
                  now focus on strategic initiatives instead of hand-holding
                  through setup. It's been a complete game-changer."
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  — Sarah Chen, VP of Product at Streamline
                </p>
              </div>
            </section>

            {/* Lessons Learned */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Key Takeaways</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This project reinforced several important lessons:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>User research is critical:</strong> Understanding
                    actual user pain points led to solutions we wouldn't have
                    discovered otherwise
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Personalization matters:</strong> One-size-fits-all
                    onboarding doesn't work for diverse customer bases
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Automation reduces friction:</strong> Eliminating
                    manual steps wherever possible dramatically improves the
                    user experience
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Iterative approach works:</strong> Beta testing and
                    gradual rollout helped us catch issues before full launch
                  </span>
                </li>
              </ul>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
              <p className="text-muted-foreground leading-relaxed">
                By reimagining their onboarding experience, Streamline Software
                transformed a major pain point into a competitive advantage. The
                60% reduction in onboarding time, combined with significantly
                improved customer satisfaction, has positioned them for
                accelerated growth. This case study demonstrates how investing
                in customer experience can yield substantial returns in both
                customer success and operational efficiency.
              </p>
            </section>

            {/* CTA Note */}
            <div className="bg-muted p-6 rounded-lg text-center mt-12">
              <p className="text-sm text-muted-foreground mb-2">
                This case study was generated with Casevia
              </p>
              <p className="text-xs text-muted-foreground">
                Created from a 18-minute customer interview
              </p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom CTA */}
        <div className="py-16 md:py-24 border-x container text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Create case studies like this in minutes
            </h2>
            <p className="text-lg text-muted-foreground">
              Transform your customer interviews into professional,
              publish-ready case studies with AI.
            </p>
          </div>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg">
              <Link href="/signup">
                Start for free
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/pricing">View pricing</Link>
            </Button>
          </div> */}
          <WaitlistForm />
        </div>

        <Separator />
      </section>
      <FooterSection />
    </>
  );
}
