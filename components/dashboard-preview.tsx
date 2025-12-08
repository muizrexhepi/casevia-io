import React from "react";
import {
  BarChart3,
  Users,
  FileText,
  ArrowUpRight,
  Search,
  Plus,
  Filter,
  MoreHorizontal,
  LayoutGrid,
} from "lucide-react";

const DashboardPreview: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium uppercase tracking-wide mb-6">
            <LayoutGrid size={12} />
            System of Record
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 mb-6 font-serif leading-[1.2em] sm:leading-none text-balance">
            The operating system for customer proof
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Manage your entire library of wins in one place. Track pipeline
            influence, usage by sales, and asset freshness from a single view.
          </p>
        </div>

        {/* Dashboard Mockup Container */}
        <div className="relative rounded-2xl bg-white border border-slate-200/80 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] overflow-hidden max-w-6xl mx-auto ring-1 ring-slate-900/5">
          {/* Window Controls / Header */}
          <div className="border-b border-slate-100 px-6 py-4 flex items-center justify-between bg-white sticky top-0 z-20">
            <div className="flex items-center gap-5">
              <div className="flex gap-1.5 opacity-40">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-900"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-900"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-900"></div>
              </div>
              <div className="h-4 w-[1px] bg-slate-200 hidden sm:block"></div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-indigo-600 rounded flex items-center justify-center text-white">
                  <span className="font-serif italic text-xs font-bold">c</span>
                </div>
                <nav className="hidden sm:flex items-center gap-1 text-sm font-medium text-slate-500">
                  <span className="text-slate-900 bg-slate-50 px-2.5 py-1 rounded-md shadow-sm border border-slate-200/60">
                    Overview
                  </span>
                  <span className="hover:text-slate-900 hover:bg-slate-50 px-2.5 py-1 rounded-md transition-colors cursor-pointer">
                    Interviews
                  </span>
                  <span className="hover:text-slate-900 hover:bg-slate-50 px-2.5 py-1 rounded-md transition-colors cursor-pointer">
                    Assets
                  </span>
                </nav>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative hidden md:block group">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="text"
                  placeholder="Search accounts..."
                  className="pl-9 pr-4 py-1.5 text-sm bg-slate-50 border border-slate-200 rounded-lg w-56 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder:text-slate-400"
                />
              </div>
              <button className="bg-slate-900 text-white px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1.5 shadow-sm hover:bg-slate-800 transition-all">
                <Plus size={14} />
                <span className="hidden sm:inline">New Story</span>
              </button>
            </div>
          </div>

          {/* KPI Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100 border-b border-slate-100 bg-slate-50/20">
            {[
              {
                label: "Pipeline Influenced",
                value: "$2.4M",
                trend: "+12%",
                icon: BarChart3,
              },
              {
                label: "Active Assets",
                value: "142",
                trend: "+8",
                icon: FileText,
              },
              {
                label: "Win Rate Lift",
                value: "18%",
                trend: "+2.4%",
                icon: ArrowUpRight,
              },
              {
                label: "Sales Usage",
                value: "89%",
                trend: "Top 5%",
                icon: Users,
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="px-6 py-5 group hover:bg-white transition-colors cursor-default"
              >
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                  <stat.icon
                    size={12}
                    className="text-slate-400 group-hover:text-indigo-600 transition-colors"
                  />
                  {stat.label}
                </div>
                <div className="flex items-baseline gap-2.5">
                  <span className="text-2xl font-bold text-slate-900 tracking-tight font-sans">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100/50">
                    {stat.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Table View */}
          <div className="bg-white min-h-[400px]">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                Recent Case Studies
                <span className="px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[10px]">
                  142
                </span>
              </div>
              <button className="text-xs font-medium text-slate-500 flex items-center gap-1.5 hover:text-slate-900 border border-slate-200 rounded-md px-2.5 py-1.5 bg-white shadow-sm hover:shadow transition-all">
                <Filter size={12} />
                <span>Filter</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left whitespace-nowrap">
                <thead>
                  <tr className="border-b border-slate-100 text-[11px] text-slate-400 font-semibold uppercase tracking-wider bg-slate-50/40">
                    <th className="px-6 py-3 pl-8 w-1/3">Company / Account</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Format</th>
                    <th className="px-6 py-3">Created</th>
                    <th className="px-6 py-3 text-right pr-8">Action</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    {
                      name: "Acme Corp",
                      industry: "Enterprise SaaS",
                      status: "Published",
                      format: ["PDF", "Web"],
                      date: "2h ago",
                    },
                    {
                      name: "Linear",
                      industry: "DevTools",
                      status: "Review",
                      format: ["Web"],
                      date: "5h ago",
                    },
                    {
                      name: "Raycast",
                      industry: "Productivity",
                      status: "Processing",
                      format: ["..."],
                      date: "Just now",
                    },
                    {
                      name: "Vercel",
                      industry: "Cloud Infrastructure",
                      status: "Published",
                      format: ["PDF", "Slide"],
                      date: "1d ago",
                    },
                    {
                      name: "Ramp",
                      industry: "Fintech",
                      status: "Draft",
                      format: ["-"],
                      date: "2d ago",
                    },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-slate-50 hover:bg-slate-50/80 transition-colors group cursor-pointer"
                    >
                      <td className="px-6 py-4 pl-8">
                        <div className="font-semibold text-slate-900 flex items-center gap-3">
                          <div
                            className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold text-white shadow-sm ${
                              [
                                "bg-indigo-600",
                                "bg-blue-600",
                                "bg-purple-600",
                                "bg-slate-800",
                                "bg-emerald-600",
                              ][i % 5]
                            }`}
                          >
                            {row.name.charAt(0)}
                          </div>
                          {row.name}
                        </div>
                        <div className="text-[11px] text-slate-500 pl-9 mt-0.5">
                          {row.industry}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-xs font-medium border ${
                            row.status === "Published"
                              ? "bg-white text-emerald-700 border-emerald-200 shadow-sm"
                              : row.status === "Processing"
                                ? "bg-white text-blue-700 border-blue-200 shadow-sm"
                                : row.status === "Review"
                                  ? "bg-white text-amber-700 border-amber-200 shadow-sm"
                                  : "bg-slate-50 text-slate-500 border-slate-200"
                          }`}
                        >
                          {row.status === "Processing" && (
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></div>
                          )}
                          {row.status === "Published" && (
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                          )}
                          {row.status === "Review" && (
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                          )}
                          {row.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-1.5">
                          {row.format.map((f, idx) => (
                            <span
                              key={idx}
                              className="px-1.5 py-0.5 rounded border border-slate-200 text-[11px] font-medium text-slate-500 bg-white"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-500 text-xs font-medium">
                        {row.date}
                      </td>
                      <td className="px-6 py-4 text-right pr-8">
                        <button className="text-slate-400 hover:text-slate-900 p-1.5 hover:bg-slate-100 rounded-md transition-all">
                          <MoreHorizontal size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
