"use client";

import Image from "next/image";
import { useState } from "react";
import { Users, Building2, TrendingUp, Heart } from "lucide-react";

type UseCase = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  position: string;
  icon: any;
  color: "primary" | "secondary" | "accent" | "chart-4";
};

const useCases: UseCase[] = [
  {
    id: "marketing",
    title: "Marketing teams",
    description:
      "Scale your content production. Turn every customer conversation into compelling stories for your blog, social media, and campaigns.",
    image: "/images/marketing-teams.webp",
    alt: "Marketing dashboard",
    position: "bottom-4 right-4",
    icon: Users,
    color: "primary",
  },
  {
    id: "agencies",
    title: "Agencies",
    description:
      "Deliver more value to clients. Create professional case studies faster, showcase results better, and win more business.",
    image: "/images/agencies.webp",
    alt: "Agency workflow",
    position: "top-4 left-4",
    icon: Building2,
    color: "secondary",
  },
  {
    id: "sales",
    title: "Sales teams",
    description:
      "Close deals with proof. Keep your sales collateral fresh with real customer stories that speak to prospects' exact pain points.",
    image: "/images/sales.webp",
    alt: "Sales enablement",
    position: "top-4 right-4",
    icon: TrendingUp,
    color: "accent",
  },
  {
    id: "customer-success",
    title: "Customer success",
    description:
      "Celebrate wins efficiently. Document customer outcomes without the back-and-forth. Get approval faster, publish sooner.",
    image: "/images/success.webp",
    alt: "Customer success tools",
    position: "bottom-4 left-4",
    icon: Heart,
    color: "chart-4",
  },
];

const colorMap = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
    border: "border-primary/20",
    hover: "hover:border-primary/30",
    gradient: "from-primary/5",
  },
  secondary: {
    bg: "bg-secondary/10",
    text: "text-secondary",
    border: "border-secondary/20",
    hover: "hover:border-secondary/30",
    gradient: "from-secondary/5",
  },
  accent: {
    bg: "bg-accent/10",
    text: "text-accent",
    border: "border-accent/20",
    hover: "hover:border-accent/30",
    gradient: "from-accent/5",
  },
  "chart-4": {
    bg: "bg-chart-4/10",
    text: "text-chart-4",
    border: "border-chart-4/20",
    hover: "hover:border-chart-4/30",
    gradient: "from-chart-4/5",
  },
};

export default function ContentSection() {
  const [hoveredCase, setHoveredCase] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-tl from-secondary/5 to-transparent rounded-full blur-3xl" />

      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16 space-y-5 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-sm font-medium text-secondary">
            <Users className="w-3.5 h-3.5" />
            Who it's for
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] max-w-3xl mx-auto text-balance">
            Built for teams that{" "}
            <span className="text-gradient-primary">need to scale</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            From solo founders to enterprise teams, Casevia adapts to your
            workflow.
          </p>
        </div>

        {/* Stripe-style asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Column 1 - Left side */}
          <div className="space-y-6">
            {[useCases[0], useCases[2]].map((useCase) => {
              const Icon = useCase.icon;
              const colors = colorMap[useCase.color];
              const isHovered = hoveredCase === useCase.id;

              return (
                <div
                  key={useCase.id}
                  onMouseEnter={() => setHoveredCase(useCase.id)}
                  onMouseLeave={() => setHoveredCase(null)}
                  className={`group relative bg-card border-2 ${colors.border} rounded-2xl overflow-hidden transition-all duration-300 shadow-sm md:border-border/50 md:shadow-none md:hover:shadow-xl md:${colors.hover}`}
                >
                  {/* Image area with floating screenshot */}
                  <div className="relative h-64 md:h-82 bg-muted/30 overflow-hidden">
                    {/* Gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300`}
                    />

                    {/* Floating screenshot */}
                    {/* <div
                      className={`absolute ${useCase.position} w-3/4 transition-all duration-300 ease-out ${
                        isHovered ? "translate-y-[-4px] scale-[1.02]" : ""
                      }`}
                    > */}
                    <Image
                      src={useCase.image}
                      alt={useCase.alt}
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-xl shadow-2xl border border-border/50"
                    />
                    {/* </div> */}

                    {/* Corner accent */}
                    <div
                      className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${colors.gradient} to-transparent rounded-bl-3xl opacity-50`}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className={`w-10 h-10 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center transition-transform duration-300 ${isHovered ? "scale-110 rotate-3" : ""}`}
                      >
                        <Icon
                          className={`w-5 h-5 ${colors.text}`}
                          strokeWidth={1.5}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-foreground pt-1.5">
                        {useCase.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Column 2 - Right side with offset */}
          <div className="space-y-6 md:mt-32">
            {[useCases[1], useCases[3]].map((useCase) => {
              const Icon = useCase.icon;
              const colors = colorMap[useCase.color];
              const isHovered = hoveredCase === useCase.id;

              return (
                <div
                  key={useCase.id}
                  onMouseEnter={() => setHoveredCase(useCase.id)}
                  onMouseLeave={() => setHoveredCase(null)}
                  className={`group relative bg-card border-2 border-border/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl ${colors.hover}`}
                >
                  {/* Image area */}
                  <div className="relative h-64 md:h-82 bg-muted/30 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />

                    {/* <div
                      className={`absolute ${useCase.position} w-3/4 transition-all duration-300 ease-out ${
                        isHovered ? "translate-y-[-4px] scale-[1.02]" : ""
                      }`}
                    > */}
                    <Image
                      src={useCase.image}
                      alt={useCase.alt}
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-xl shadow-2xl border border-border/50"
                    />
                    {/* </div> */}

                    <div
                      className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${colors.gradient} to-transparent rounded-tr-3xl opacity-50`}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className={`w-10 h-10 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center transition-transform duration-300 ${isHovered ? "scale-110 rotate-3" : ""}`}
                      >
                        <Icon
                          className={`w-5 h-5 ${colors.text}`}
                          strokeWidth={1.5}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-foreground pt-1.5">
                        {useCase.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Join <strong className="text-foreground">200+ teams</strong> already
            scaling their case study production
          </p>
        </div>
      </div>
    </section>
  );
}
