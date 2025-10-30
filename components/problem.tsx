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
    <section className="py-12 md:py-20 bg-muted">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        {/* Illustration */}
        <div className="flex justify-center">
          <img
            src="/icons/problem.webp"
            alt="Frustrated marketer illustration"
            className="w-[85%] max-w-md"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl md:text-4xl mb-4">
            Creating case studies shouldn’t be this hard
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            It takes forever, costs a fortune, and results are inconsistent.
          </p>

          {/* Single Problem Card */}
          <div className="bg-background border rounded-xl p-6 space-y-4 shadow-sm">
            {problems.map(({ icon: Icon, title, description }, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <h3 className="font-medium text-sm">{title}</h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
