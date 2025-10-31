"use client"; // This is an interactive client component

import Image from "next/image";
import { useState, useEffect } from "react";

// --- Define the tools your AI platform replaces ---
// These are the realistic costs for specialized B2B tools.
const tools = [
  {
    id: "transcription",
    label: "Transcription Service (e.g., Otter, Descript)",
    cost: 30, // Pro-level transcription cost
  },
  {
    id: "ai_writer",
    label: "AI Drafting Tool (e.g., Jasper, Copy.ai)",
    cost: 49, // A common "Pro" plan for AI writers
  },
  {
    id: "editing_suite",
    label: "Editing & Grammar Suite (e.g., Grammarly Premium)",
    cost: 15, // Cost per user
  },
  {
    id: "social_writer",
    label: "Social Media Post Generator",
    cost: 25, // Cost for another specialized AI tool
  },
];

// Helper to format numbers as currency (e.g., $1,500)
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
};

export function ComparisonSection() {
  // State for selected checkboxes
  const [selectedTools, setSelectedTools] = useState({
    transcription: true,
    ai_writer: true,
    editing_suite: true,
    social_writer: true,
  });

  // State for team size
  const [teamSize, setTeamSize] = useState(10);

  // State for calculated "per user" cost
  const [perUserCost, setPerUserCost] = useState(0);

  // State for final savings
  const [savings, setSavings] = useState({
    monthly: 0,
    annual: 0,
  });

  // Handle checkbox changes
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setSelectedTools((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  // Handle team size change
  const handleTeamSizeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTeamSize(Number(event.target.value));
  };

  // --- Recalculate savings whenever selection or team size changes ---
  useEffect(() => {
    let monthlyTotalPerUser = 0;

    // Calculate total cost of selected tools
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
    <section className="py-12 md:py-20 bg-white">
      <div className="container max-w-6xl">
        {/* === Top Section: Intro Text & Image === */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-4xl md:text-5xl tracking-tight leading-[1] mb-6">
              Stop overspending on manual work.
            </h2>

            <p className="text-lg text-muted-foreground mb-6 max-w-md">
              Your team is losing time and money on single-task tools. See how
              much you'll save by replacing them with Casevia's all-in-one AI
              platform.
            </p>

            <a
              href="/pricing"
              className="text-primary font-medium inline-flex items-center gap-1 hover:underline"
            >
              See pricing plans →
            </a>
          </div>

          {/* Right: Illustration */}
          <div className="flex justify-center md:justify-end">
            <Image
              src={"/icons/comparison.webp"}
              alt="Casevia replaces manual work illustration"
              className="w-[260px] h-auto"
              width={260}
              height={260}
              priority
            />
          </div>
        </div>

        {/* === Bottom Section: The Savings Calculator === */}
        <div className="mt-16 border rounded-xl shadow-lg bg-white overflow-hidden">
          {/* --- Part 1: The "Bill" (Tools you're replacing) --- */}
          <div className="p-8 md:p-10">
            <h3 className="text-2xl font-semibold tracking-tight mb-6">
              Replace your expensive tool stack
            </h3>

            {/* List of replaceable tools */}
            <div className="space-y-4">
              {tools.map((tool) => (
                <label
                  key={tool.id}
                  htmlFor={tool.id}
                  className="flex justify-between items-center cursor-pointer p-4 rounded-lg border hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id={tool.id}
                      name={tool.id}
                      checked={
                        selectedTools[tool.id as keyof typeof selectedTools]
                      }
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="font-medium text-gray-800">
                      {tool.label}
                    </span>
                  </div>
                  <span className="font-semibold text-lg text-gray-700">
                    {formatCurrency(tool.cost)}
                    <span className="text-sm text-muted-foreground font-normal">
                      /user
                    </span>
                  </span>
                </label>
              ))}
            </div>

            {/* Per-user total */}
            <div className="flex justify-between items-center mt-6 pt-6 border-t border-dashed">
              <span className="font-semibold text-lg text-gray-900">
                Total monthly cost per user
              </span>
              <span className="font-semibold text-xl text-primary">
                {formatCurrency(perUserCost)}
              </span>
            </div>
          </div>

          {/* --- Part 2: The Summary (Inputs & Savings) --- */}
          <div className="p-8 md:p-10 border-t bg-gray-50">
            <div className="grid md:grid-cols-3 gap-8 md:items-end">
              {/* Team Size Input */}
              <div>
                <label
                  htmlFor="team-size"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Team size
                </label>
                <select
                  id="team-size"
                  name="team-size"
                  value={teamSize}
                  onChange={handleTeamSizeChange}
                  className="block w-full max-w-[120px] rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                >
                  <option value={1}>1</option>
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
              </div>

              {/* Monthly Savings */}
              <div>
                <p className="text-muted-foreground mb-1 text-base">
                  Monthly savings
                </p>
                <p className="text-4xl font-semibold tracking-tight text-gray-900">
                  {formatCurrency(savings.monthly)}
                </p>
              </div>

              {/* Annual Savings */}
              <div>
                <p className="text-muted-foreground mb-1 text-base">
                  Annual savings
                </p>
                <p className="text-4xl font-semibold tracking-tight text-gray-900">
                  {formatCurrency(savings.annual)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
