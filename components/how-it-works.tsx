"use client";

import { ShieldCheck, TrendingUp, Briefcase, Users } from "lucide-react";

export const UseCases = () => {
  const cases = [
    {
      title: "Freelancers",
      desc: "Automate your portfolio and close more high-value retainers with instant proof points.",
      accentClass: "text-primary border-primary/20",
      visual: (
        <div className="flex-1 relative overflow-hidden bg-muted/50 group-hover:bg-muted transition-colors border-t border-border flex items-center justify-center pt-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--primary)/10,transparent_70%)] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          <div
            className="w-48 h-48 bg-card border border-border shadow-sm p-4 animate-float"
            style={{ animationDuration: "6s" }}
          >
            <div className="flex gap-4 mb-4 items-center">
              <Users className="w-6 h-6 text-primary" />
              <div className="space-y-1.5">
                <div className="w-16 h-2 bg-primary/20 rounded-none"></div>
                <div className="w-10 h-2 bg-primary/10 rounded-none"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-full h-2 bg-muted rounded-none"></div>
              <div className="w-full h-2 bg-muted rounded-none"></div>
              <div className="w-2/3 h-2 bg-muted rounded-none"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Startups",
      desc: "Build social proof and velocity rapidly without needing a dedicated case study marketing team.",
      accentClass: "text-secondary border-secondary/20",
      visual: (
        <div className="flex-1 relative overflow-hidden bg-muted/50 group-hover:bg-muted transition-colors border-t border-border flex items-end justify-center px-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--secondary)/10,transparent_70%)] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          {/* Bar Chart Visualization - Uses Secondary (Sage Green) for Growth */}
          <div className="absolute bottom-0 left-8 right-8 top-10 flex items-end gap-3 px-2 pb-0">
            {[30, 50, 40, 70, 60, 90].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-border group-hover:bg-secondary/70 transition-colors duration-500 relative rounded-t-sm"
                style={{ height: `${h}%`, transitionDelay: `${i * 0.1}s` }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Agencies",
      desc: "Instantly scale case study production volume and speed for every client engagement you manage.",
      accentClass: "text-accent border-accent/20",
      visual: (
        <div className="flex-1 relative overflow-hidden bg-muted/50 group-hover:bg-muted transition-colors border-t border-border flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,var(--accent)/10,transparent_70%)] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          {/* Layered Volume Indicator - Uses Accent (Warm Amber) */}
          <div className="relative w-40 h-40">
            <Briefcase
              size={64}
              className="text-accent/20 absolute -top-4 -right-4 transition-transform group-hover:rotate-12 duration-500"
            />
            <div className="w-32 h-40 bg-card border border-border shadow-md absolute z-10 transition-all duration-500 group-hover:translate-x-3 group-hover:-translate-y-3">
              <div className="h-full w-full bg-accent/5 opacity-50" />
            </div>
            <div className="w-32 h-40 bg-card border border-border shadow-sm absolute top-4 left-4 z-0 transition-all duration-500">
              <div className="h-full w-full bg-accent/10 opacity-50" />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Enterprise",
      desc: "Implement secure, compliant, and scalable workflows integrated directly into your large MarTech stack.",
      accentClass: "text-foreground border-foreground/20",
      visual: (
        <div className="flex-1 relative overflow-hidden bg-muted/50 group-hover:bg-muted transition-colors border-t border-border flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--foreground)/5,transparent_70%)] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          <div className="relative">
            {/* Security Check Visual - Uses Foreground/Border for corporate compliance look */}
            <div className="w-20 h-20 border-2 border-border rounded-full flex items-center justify-center transition-all duration-500 group-hover:border-foreground/40 group-hover:scale-110">
              <ShieldCheck
                size={32}
                className="text-muted-foreground/50 transition-colors duration-500 group-hover:text-foreground"
              />
            </div>
            {/* Ring Animation */}
            <div className="absolute inset-0 border-2 border-dashed border-border/50 rounded-full animate-[spin_10s_linear_infinite] group-hover:border-foreground/10" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-16 md:py-32 bg-muted">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-5xl font-bold text-foreground mb-4 tracking-tight">
            Built for every stage of growth.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-sans">
            From solo founders to global enterprises, Casevia scales with your
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c, index) => (
            <div
              key={index}
              className="group bg-card border border-border p-0 relative overflow-hidden transition-all duration-300 h-[340px] flex flex-col hover:shadow-xl hover:-translate-y-1 rounded-xl"
            >
              {/* Card Header (Text Content) */}
              <div className="p-8 relative z-10">
                <h3 className="font-bold text-xl text-foreground mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                  {c.desc}
                </p>
              </div>

              {/* Card Visual (Dynamically Rendered) */}
              {c.visual}

              {/* Hover Accent Bar (Primary Color) */}
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-border transition-colors duration-500 group-hover:bg-primary`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
