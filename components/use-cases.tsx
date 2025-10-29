import { Briefcase, User, Users2, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function UseCasesSection() {
  const useCases = [
    {
      icon: User,
      title: "Freelancers",
      description:
        "Build your portfolio fast. Show potential clients real results from past projects.",
      stat: "5 case studies/month",
      plan: "Starter Plan",
    },
    {
      icon: Briefcase,
      title: "Agencies",
      description:
        "Scale your content engine. Create case studies for every client without hiring writers.",
      stat: "50+ case studies/month",
      plan: "Agency Plan",
    },
    {
      icon: Users2,
      title: "Marketing Teams",
      description:
        "Support sales with proof. Turn customer interviews into assets for your website and decks.",
      stat: "20 case studies/month",
      plan: "Pro Plan",
    },
    {
      icon: Building2,
      title: "Enterprises",
      description:
        "Standardize storytelling. Maintain consistent case study quality across all departments.",
      stat: "Custom volume",
      plan: "Enterprise",
    },
  ];

  return (
    <section className="py-12 lg:py-24 relative">
      {/* Horizontal line pattern */}
      <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(0deg,var(--border),var(--border)_1px,transparent_1px,transparent_20px)]" />

      <div className="container relative z-10">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Built for teams that need case studies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you're solo or enterprise, Casevia scales with your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase, idx) => {
            const Icon = useCase.icon;
            return (
              <Card
                key={idx}
                className="relative overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {useCase.description}
                  </p>
                  <div className="pt-4 border-t space-y-1">
                    <p className="text-sm font-semibold">{useCase.stat}</p>
                    <p className="text-xs text-muted-foreground">
                      {useCase.plan}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
