import { X, Clock, DollarSign, FileQuestion } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      icon: Clock,
      title: "Takes days or weeks",
      description:
        "Writing case studies manually is slow. By the time you finish, the momentum is gone.",
    },
    {
      icon: DollarSign,
      title: "Expensive to outsource",
      description:
        "Hiring writers costs $500-2000 per case study. And you still need to brief them and review drafts.",
    },
    {
      icon: FileQuestion,
      title: "Inconsistent quality",
      description:
        "Different writers = different styles. Your case studies feel disconnected from your brand.",
    },
    {
      icon: X,
      title: "Clients ghost you",
      description:
        "Getting interview time is hard enough. Then they disappear when you ask for approval on drafts.",
    },
  ];

  return (
    <section className="py-12 lg:py-24 relative overflow-hidden">
      {/* Diagonal line pattern background */}
      <div className="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(45deg,var(--border),var(--border)_1px,transparent_1px,transparent_12px)]" />

      <div className="container relative z-10">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Creating case studies shouldn't be this hard
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            But right now, it takes forever, costs a fortune, and the results
            are inconsistent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, idx) => {
            const Icon = problem.icon;
            return (
              <div
                key={idx}
                className="relative bg-background border rounded-lg p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-950 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="font-semibold">{problem.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
