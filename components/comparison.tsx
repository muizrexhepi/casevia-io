"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Check, TrendingDown, Sparkles } from "lucide-react";

const tools = [
  {
    id: "transcription",
    label: "Transcription Service",
    example: "Otter, Descript",
    cost: 30,
  },
  {
    id: "ai_writer",
    label: "AI Drafting Tool",
    example: "Jasper, Copy.ai",
    cost: 49,
  },
  {
    id: "editing_suite",
    label: "Editing & Grammar Suite",
    example: "Grammarly Premium",
    cost: 15,
  },
  {
    id: "social_writer",
    label: "Social Media Post Generator",
    example: "Buffer, Lately",
    cost: 25,
  },
];

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
};

export function ComparisonSection() {
  const [selectedTools, setSelectedTools] = useState({
    transcription: true,
    ai_writer: true,
    editing_suite: true,
    social_writer: true,
  });

  const [teamSize, setTeamSize] = useState(10);
  const [perUserCost, setPerUserCost] = useState(0);
  const [savings, setSavings] = useState({
    monthly: 0,
    annual: 0,
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setSelectedTools((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleTeamSizeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTeamSize(Number(event.target.value));
  };

  useEffect(() => {
    let monthlyTotalPerUser = 0;

    tools.forEach((tool) => {
      if (selectedTools[tool.id as keyof typeof selectedTools]) {
        monthlyTotalPerUser += tool.cost;
      }
    });

    const monthly = monthlyTotalPerUser * teamSize;
    const annual = monthly * 12;

    setPerUserCost(monthlyTotalPerUser);
    setSavings({ monthly, annual });
  }, [selectedTools, teamSize]);

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-secondary/5 to-transparent rounded-full blur-3xl" />

      <div className="container max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left: Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent">
              <TrendingDown className="w-3.5 h-3.5" />
              ROI Calculator
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Stop overspending on{" "}
              <span className="text-gradient-primary">manual work</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Your team is losing time and money on single-task tools. See how
              much you'll save by replacing them with Casevia's all-in-one AI
              platform.
            </p>

            <a
              href="/pricing"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200 group"
            >
              See pricing plans
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {/* Right: Illustration */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-2xl opacity-50" />
              <Image
                src="/icons/comparison.webp"
                alt="Casevia replaces manual work"
                className="w-full md:w-90 h-auto relative z-10 animate-float"
                width={260}
                height={260}
                priority
              />
            </div>
          </div>
        </div>

        {/* Calculator Card */}
        <div className="border-2 border-border/50 rounded-3xl shadow-xl bg-card overflow-hidden">
          {/* Tools Selection */}
          <div className="p-8 md:p-10">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                Replace your expensive tool stack
              </h3>
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-sm font-medium text-primary">
                <Sparkles className="w-3.5 h-3.5" />
                Select your tools
              </div>
            </div>

            {/* Tools List */}
            <div className="space-y-3">
              {tools.map((tool) => {
                const isChecked =
                  selectedTools[tool.id as keyof typeof selectedTools];
                return (
                  <label
                    key={tool.id}
                    htmlFor={tool.id}
                    className={`
                      group flex justify-between items-center cursor-pointer p-5 rounded-2xl border-2 
                      transition-all duration-200
                      ${
                        isChecked
                          ? "border-primary/30 bg-primary/5 shadow-sm"
                          : "border-border/50 bg-background hover:border-border hover:shadow-sm"
                      }
                    `}
                  >
                    <div className="flex items-center gap-4">
                      {/* Custom checkbox */}
                      <div
                        className={`
                        relative w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all
                        ${isChecked ? "bg-primary border-primary" : "border-muted-foreground/30 bg-background"}
                      `}
                      >
                        <input
                          type="checkbox"
                          id={tool.id}
                          name={tool.id}
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                          className="sr-only"
                        />
                        {isChecked && (
                          <Check
                            className="w-3.5 h-3.5 text-primary-foreground"
                            strokeWidth={3}
                          />
                        )}
                      </div>

                      <div>
                        <span className="font-semibold text-foreground block">
                          {tool.label}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {tool.example}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="font-bold text-xl text-foreground">
                        {formatCurrency(tool.cost)}
                      </span>
                      <span className="text-sm text-muted-foreground font-normal ml-1">
                        /user
                      </span>
                    </div>
                  </label>
                );
              })}
            </div>

            {/* Per-user total */}
            <div className="flex justify-between items-center mt-8 pt-8 border-t-2 border-dashed border-border/50">
              <span className="font-bold text-lg text-foreground">
                Total monthly cost per user
              </span>
              <span className="font-bold text-2xl text-primary">
                {formatCurrency(perUserCost)}
              </span>
            </div>
          </div>

          {/* Summary Section */}
          <div className="p-8 md:p-10 border-t-2 bg-gradient-to-br from-muted/30 to-muted/10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-end">
              {/* Team Size */}
              <div>
                <label
                  htmlFor="team-size"
                  className="block text-sm font-semibold text-muted-foreground mb-3"
                >
                  Team size
                </label>
                <select
                  id="team-size"
                  name="team-size"
                  value={teamSize}
                  onChange={handleTeamSizeChange}
                  className="block w-full max-w-[140px] px-4 py-3 rounded-xl border-2 border-border/50 bg-background shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 font-semibold text-lg transition-all"
                >
                  <option value={1}>1 person</option>
                  <option value={5}>5 people</option>
                  <option value={10}>10 people</option>
                  <option value={25}>25 people</option>
                  <option value={50}>50 people</option>
                </select>
              </div>

              {/* Monthly Savings */}
              <div className="p-6 rounded-2xl bg-card border-2 border-border/50">
                <p className="text-muted-foreground mb-2 text-sm font-semibold uppercase tracking-wide">
                  Monthly savings
                </p>
                <p className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                  {formatCurrency(savings.monthly)}
                </p>
              </div>

              {/* Annual Savings - Highlighted */}
              <div className="sm:col-span-2 lg:col-span-1 p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-2 border-primary/30 shadow-lg relative overflow-hidden">
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full" />

                <p className="text-primary mb-2 text-sm font-bold uppercase tracking-wide relative z-10">
                  💰 Annual savings
                </p>
                <p className="text-4xl md:text-5xl font-bold tracking-tight text-foreground relative z-10">
                  {formatCurrency(savings.annual)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Plus <strong className="text-foreground">unlimited</strong> case
            studies, <strong className="text-foreground">unlimited</strong> team
            members
          </p>
        </div>
      </div>
    </section>
  );
}
