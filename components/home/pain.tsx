import React from "react";
import { Clock, DollarSign, TrendingDown, AlertCircle } from "lucide-react";

export default function PainSection() {
  const painPoints = [
    {
      icon: AlertCircle,
      label: "Invisible Wins",
      title: "Your wins are invisible",
      description:
        "You closed a customer who cut onboarding time by 60%. That's the story that closes your next three deals. But it's locked in Slack threads and email chains while your competitor's case study is already in their pitch deck.",
      stat: "12 interviews unused",
      gradient: "from-red-500/10 to-orange-500/10",
      iconBg: "bg-red-50",
      iconColor: "text-red-500",
      borderColor: "border-red-500/20",
    },
    {
      icon: Clock,
      label: "Urgent Requests",
      title: "Sales is asking. You're scrambling.",
      description:
        "Your pipeline needs social proof to convert. Your AE keeps requesting customer stories for late-stage calls. Marketing is overwhelmed. Legal wants approvals. By the time you'd publish something, the deal is already cold.",
      stat: "48hr turnaround needed",
      gradient: "from-blue-500/10 to-cyan-500/10",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500",
      borderColor: "border-blue-500/20",
    },
    {
      icon: DollarSign,
      label: "High Cost",
      title: "Writers cost $3K and take 6 weeks",
      description:
        "You don't have a content team. Freelancers are expensive and slow. Meanwhile, you're sitting on 12 customer interviews that could each become a conversion asset—but they're just transcripts gathering dust.",
      stat: "$3,000 per case study",
      gradient: "from-purple-500/10 to-pink-500/10",
      iconBg: "bg-purple-50",
      iconColor: "text-purple-500",
      borderColor: "border-purple-500/20",
    },
    {
      icon: TrendingDown,
      label: "Lost Revenue",
      title: "Every week without proof is revenue left on the table.",
      description:
        "Your competitors have testimonials on their homepage. Case studies in their decks. ROI stats in their follow-up emails. You're losing credibility in every sales conversation because you can't back up what you've built.",
      stat: "30% longer sales cycle",
      gradient: "from-amber-500/10 to-yellow-500/10",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
      borderColor: "border-amber-500/20",
    },
  ];

  return (
    <section className="section-spacing bg-[var(--color-cream)] px-4 sm:px-6 md:px-12 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-charcoal) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="section-header-gap">
          <label className="block text-[var(--color-terracotta)] mb-6">
            For Early-Stage B2B SaaS Founders
          </label>

          <h2 className="mb-6 text-[var(--color-charcoal)] max-w-4xl">
            You just closed your best customer. Now prove it.
          </h2>

          <p className="mb-8 max-w-3xl text-[var(--color-charcoal)] opacity-90">
            You're winning deals. Raising rounds. Building momentum. But when
            investors ask for proof—or prospects want to see results—you've got
            nothing to show. No polished case studies. No customer quotes. Just
            raw Zoom recordings buried in your drive and a sales deck that needs
            more credibility.
          </p>

          {/* Quick Stats Bar */}
          <div className="flex flex-wrap gap-4 items-center mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[var(--color-charcoal)]/5">
              <div className="w-2 h-2 rounded-full bg-[var(--color-terracotta)] animate-pulse" />
              <small className="text-[var(--color-charcoal)]/60 font-medium">
                Average: 6 weeks to publish one case study
              </small>
            </div>
          </div>
        </div>

        {/* Pain Points Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-6 sm:p-7 lg:p-8 border ${point.borderColor} hover:border-[var(--color-terracotta)]/40 transition-all duration-500 hover:shadow-xl hover:shadow-[var(--color-charcoal)]/5 hover:-translate-y-1`}
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${point.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Header with Icon and Label */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl ${point.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className={`w-6 h-6 ${point.iconColor}`} />
                    </div>
                    <div className="text-right">
                      <label
                        className={`text-[var(--color-charcoal)]/40 group-hover:text-[var(--color-terracotta)] transition-colors`}
                      >
                        {point.label}
                      </label>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-[var(--color-charcoal)] mb-3 group-hover:text-[var(--color-charcoal)] transition-colors">
                    {point.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--color-gray)] mb-5 leading-relaxed">
                    {point.description}
                  </p>

                  {/* Stat Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--color-charcoal)]/5 border border-[var(--color-charcoal)]/5 group-hover:bg-[var(--color-terracotta)]/10 group-hover:border-[var(--color-terracotta)]/20 transition-colors">
                    <small className="font-semibold text-[var(--color-charcoal)]/70 group-hover:text-[var(--color-terracotta)] transition-colors">
                      {point.stat}
                    </small>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Social Proof */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-[var(--color-charcoal)]/5 shadow-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-terracotta)] to-[var(--color-charcoal)] border-2 border-white"
                />
              ))}
            </div>
            <small className="text-[var(--color-gray)] font-medium">
              Used by founders at Series A companies who don't have time to wait
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}
