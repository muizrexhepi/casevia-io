"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  FileText,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Play,
  Users,
  Zap,
  BarChart3,
  Globe,
  Lock,
  ChevronDown,
  Loader2,
  RefreshCw,
  Download,
  HelpCircle,
  Plus,
  Minus,
  ChevronUp,
  MousePointer2,
  Share2,
  LayoutTemplate,
  Mic,
  PenTool,
  MoveRight,
  Check,
  Briefcase,
  Building2,
  Info,
  Bold,
  Italic,
  List,
  Underline,
  AlignLeft,
  Wand2,
  Layers,
  MessageSquare,
  Code2,
  Copy,
  Database,
  Cpu,
  FileCheck,
  Mail,
  ShieldCheck,
  Globe2,
  ZapIcon,
  Search,
  Activity,
  Rocket,
  TrendingUp,
  LayoutGrid,
  CheckCircle,
  Fingerprint,
  LineChart,
  BrainCircuit,
  Shield,
} from "lucide-react";

// --- UTILS ---

const useInView = (options = { threshold: 0.1 }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  return { ref, isInView };
};

// --- ASSETS ---

const Logo = ({ className = "text-xl" }: { className?: string }) => (
  <span className={`font-display tracking-tighter ${className}`}>
    <span className="font-extrabold text-zinc-900">case</span>
    <span className="font-medium text-zinc-500">via</span>
  </span>
);

// --- COMPONENTS ---

// Waitlist Modal
const WaitlistModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>
      <div className="bg-white w-full max-w-md p-10 relative z-10 animate-fade-up border border-zinc-200 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900 transition-colors"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <div className="mb-8 text-center">
              <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center mx-auto mb-5 text-white">
                <Sparkles size={24} />
              </div>
              <h3 className="text-3xl font-display font-bold text-zinc-900 mb-3 tracking-tight">
                Join the waitlist
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Be the first to experience Casevia. We're onboarding new teams
                every week.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-bold text-zinc-700 uppercase tracking-widest mb-2"
                >
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 px-4 py-3 text-sm focus:outline-none focus:border-zinc-900 focus:ring-0 transition-all placeholder:text-zinc-400 rounded-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-zinc-900 text-white py-4 text-sm font-bold hover:bg-zinc-800 transition-all active:translate-y-0.5 rounded-none shadow-lg shadow-zinc-900/20"
              >
                Get Early Access
              </button>
            </form>
            <div className="mt-8 flex items-center justify-center gap-2 text-[10px] text-zinc-400 uppercase tracking-widest font-medium">
              <ShieldCheck size={12} /> Secure & Spam-free
            </div>
          </>
        ) : (
          <div className="text-center py-10">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
              <Check size={32} />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-2">
              You're on the list!
            </h3>
            <p className="text-zinc-500 text-sm">We'll be in touch shortly.</p>
          </div>
        )}
      </div>
    </div>
  );
};

// 1. Navigation
const Navbar = ({ onOpenWaitlist }: { onOpenWaitlist: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 border-b ${scrolled ? "bg-white/95 backdrop-blur-md border-zinc-200 py-4" : "bg-white/0 border-transparent py-6"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer group z-50 relative">
            <Logo className="text-2xl" />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              How it works
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              Pricing
            </a>
            <div className="h-4 w-px bg-zinc-200"></div>
            <a
              href="#"
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              Log in
            </a>
            <button
              onClick={onOpenWaitlist}
              className="bg-zinc-900 text-white px-6 py-2.5 text-sm font-bold hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/10 active:translate-y-0.5 rounded-none"
            >
              Sign up
            </button>
          </div>

          <button
            className="md:hidden p-2 text-zinc-900 z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col pt-32 px-6 animate-fade-in md:hidden">
          <div className="flex flex-col gap-8">
            <a
              href="#features"
              className="text-4xl font-display font-bold text-zinc-900 tracking-tight"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-4xl font-display font-bold text-zinc-900 tracking-tight"
              onClick={() => setIsOpen(false)}
            >
              How it works
            </a>
            <a
              href="#pricing"
              className="text-4xl font-display font-bold text-zinc-900 tracking-tight"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <div className="h-px bg-zinc-100 w-full my-4"></div>
            <a
              href="#"
              className="text-xl font-medium text-zinc-600"
              onClick={() => setIsOpen(false)}
            >
              Log in
            </a>
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenWaitlist();
              }}
              className="bg-zinc-900 text-white py-5 text-lg font-bold w-full rounded-none mt-4"
            >
              Sign up to Waitlist
            </button>
          </div>

          <div className="mt-auto mb-12 text-zinc-400 text-sm">
            © 2025 Casevia Inc.
          </div>
        </div>
      )}
    </>
  );
};

// 2. Hero Section
const Hero = ({ onOpenWaitlist }: { onOpenWaitlist: () => void }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-50 via-white to-white"></div>
        <div
          className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-indigo-100/30 blur-[100px] animate-float"
          style={{ animationDuration: "20s" }}
        ></div>
        <div
          className="absolute top-[10%] -right-[20%] w-[60%] h-[60%] rounded-full bg-blue-100/20 blur-[100px] animate-float"
          style={{ animationDuration: "25s", animationDelay: "-5s" }}
        ></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(228,228,231,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/50 border border-zinc-200/60 backdrop-blur-sm mb-8 animate-fade-up cursor-default hover:border-zinc-300 transition-colors shadow-sm relative group rounded-none">
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-none relative z-10 animate-pulse"></div>
          <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest group-hover:text-zinc-900 transition-colors">
            v2.0 Public Beta
          </span>
        </div>

        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-zinc-900 tracking-tight mb-6 leading-[1.1] text-balance animate-fade-up w-full"
          style={{ animationDelay: "100ms" }}
        >
          Turn client interviews into <br className="hidden md:block" />
          <span className="relative inline-block">
            revenue assets.
            <div className="absolute bottom-2 left-0 w-full h-3 bg-indigo-100/50 -z-10 -rotate-1"></div>
          </span>
        </h1>

        <p
          className="text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up font-light"
          style={{ animationDelay: "200ms" }}
        >
          Casevia automatically identifies pain points, metrics, and quotes from
          your calls to generate high-converting case studies.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-up w-full max-w-sm sm:max-w-none"
          style={{ animationDelay: "300ms" }}
        >
          <button
            onClick={onOpenWaitlist}
            className="h-14 w-full sm:w-auto px-10 bg-zinc-900 text-white font-bold text-sm hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-900/10 flex items-center justify-center gap-2 group border border-zinc-900 active:translate-y-0.5 rounded-none"
          >
            Join the waitlist
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </button>
          <button className="h-14 w-full sm:w-auto px-10 bg-white text-zinc-900 border border-zinc-300 font-bold text-sm hover:bg-zinc-50 hover:border-zinc-400 transition-all flex items-center justify-center gap-2 shadow-sm group active:translate-y-0.5 rounded-none">
            <Play size={16} className="fill-zinc-900" />
            View demo
          </button>
        </div>

        {/* Dashboard Illustration */}
        <div
          className="relative w-full max-w-5xl mx-auto animate-fade-up perspective-[2000px] group pb-12 z-20"
          style={{ animationDelay: "500ms" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[60%] bg-indigo-500/10 blur-[100px] -z-10 rounded-full"></div>

          <div className="relative transform-gpu rotate-x-[6deg] group-hover:rotate-x-[2deg] transition-transform duration-1000 ease-out">
            <div className="absolute inset-0 bg-zinc-900/5 translate-y-8 blur-2xl rounded-none -z-10"></div>

            <div className="bg-white border border-zinc-200 shadow-2xl rounded-none overflow-hidden h-[550px] md:h-[650px] relative flex font-sans text-left ring-1 ring-black/5">
              <div className="w-64 border-r border-zinc-100 bg-zinc-50/50 p-6 hidden md:flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-zinc-900 rounded-none flex items-center justify-center text-white font-bold font-display text-lg">
                    M
                  </div>
                  <div className="font-bold text-zinc-900 text-sm">
                    Miliboro{" "}
                    <span className="text-[10px] bg-zinc-200 px-1.5 py-0.5 rounded-none text-zinc-600 font-normal ml-1 align-middle">
                      Pro
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-3 px-2">
                    Platform
                  </div>
                  {[
                    "Dashboard",
                    "Case Studies",
                    "Projects",
                    "Analytics",
                    "Library",
                  ].map((item, i) => (
                    <div
                      key={item}
                      className={`flex items-center gap-3 px-3 py-2 rounded-none text-sm font-medium transition-colors ${item === "Projects" ? "bg-white shadow-sm text-zinc-900 border border-zinc-200/50" : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/50"}`}
                    >
                      <div
                        className={`w-2 h-2 rounded-none ${item === "Projects" ? "bg-indigo-500" : "bg-transparent"}`}
                      ></div>
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-auto">
                  <div className="flex items-center gap-3 px-2">
                    <div className="w-8 h-8 rounded-none bg-zinc-200 flex items-center justify-center text-zinc-500 font-bold text-xs">
                      AI
                    </div>
                    <div className="text-xs">
                      <div className="font-bold text-zinc-900">
                        Amir Ibraimi
                      </div>
                      <div className="text-zinc-400">amir@casevia.io</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-white p-8 md:p-10 flex flex-col relative overflow-hidden">
                <div className="flex justify-between items-end mb-8 md:mb-10">
                  <div>
                    <h2 className="text-2xl font-bold text-zinc-900 mb-1 font-display tracking-tight">
                      Projects
                    </h2>
                    <p className="text-zinc-500 text-sm">
                      Manage your customer interviews and case studies.
                    </p>
                  </div>
                  <button className="bg-zinc-900 hover:bg-zinc-800 text-white px-4 py-2 rounded-none text-xs font-bold shadow-lg shadow-zinc-900/10 transition-all flex items-center gap-2 active:scale-95 uppercase tracking-wide">
                    <Plus size={14} /> New Project
                  </button>
                </div>
                <div className="bg-gradient-to-br from-zinc-50 to-white border border-zinc-100 rounded-none p-6 md:p-8 mb-8 md:mb-10 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-[0.03] transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-12 origin-top-right">
                    <BarChart3 size={180} className="text-zinc-900" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 relative z-10 gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-indigo-600 rounded-none flex items-center justify-center text-white shadow-md shadow-indigo-200">
                        <Zap size={24} fill="currentColor" />
                      </div>
                      <div>
                        <div className="font-bold text-zinc-900 text-lg">
                          Pro Plan
                        </div>
                        <div className="text-zinc-500 text-xs">
                          Monthly usage overview
                        </div>
                      </div>
                    </div>
                    <button className="text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-none text-xs font-bold transition-colors w-fit uppercase tracking-wide">
                      Upgrade Plan
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative z-10">
                    <div>
                      <div className="flex items-center gap-2 mb-2 text-zinc-500 text-xs font-medium">
                        <FileText size={14} /> Case Studies
                      </div>
                      <div className="text-2xl font-bold text-zinc-900 mb-2 font-display">
                        4 <span className="text-zinc-300 text-base">/ 20</span>
                      </div>
                      <div className="h-1.5 w-full bg-zinc-100 rounded-none overflow-hidden">
                        <div
                          className="h-full bg-indigo-500 w-[20%] rounded-none animate-progress"
                          style={{ animationDuration: "1.5s" }}
                        ></div>
                      </div>
                      <div className="mt-2 text-[10px] text-zinc-400">
                        20% used
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2 text-zinc-500 text-xs font-medium">
                        <Database size={14} /> Storage
                      </div>
                      <div className="text-2xl font-bold text-zinc-900 mb-2 font-display">
                        108{" "}
                        <span className="text-zinc-300 text-base">
                          / 2048 MB
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-zinc-100 rounded-none overflow-hidden">
                        <div
                          className="h-full bg-purple-500 w-[5%] rounded-none animate-progress"
                          style={{
                            animationDuration: "1.5s",
                            animationDelay: "0.2s",
                          }}
                        ></div>
                      </div>
                      <div className="mt-2 text-[10px] text-zinc-400">
                        5% used
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2 text-zinc-500 text-xs font-medium">
                        <Users size={14} /> Team Seats
                      </div>
                      <div className="text-2xl font-bold text-zinc-900 mb-2 font-display">
                        5
                      </div>
                      <div className="text-[10px] text-zinc-400">
                        3 active • 0 pending
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 relative z-10">
                  {[
                    {
                      name: "Profitability Case Study - McKinsey",
                      date: "Oct 28",
                      size: "13.8 MB",
                      duration: "31m",
                      status: "Ready",
                    },
                    {
                      name: "BCG Case Interview - CookieCo",
                      date: "Oct 27",
                      size: "13.6 MB",
                      duration: "26m",
                      status: "Ready",
                    },
                    {
                      name: "Consulting Case Interview",
                      date: "Oct 25",
                      size: "39.5 MB",
                      duration: "29m",
                      status: "Processing",
                    },
                  ].map((file, i) => (
                    <div
                      key={i}
                      className="flex items-center p-4 bg-white border border-zinc-100 rounded-none hover:border-zinc-300 hover:shadow-md transition-all group/item cursor-pointer"
                    >
                      <div className="w-10 h-10 bg-indigo-50 rounded-none flex items-center justify-center text-indigo-600 mr-4 group-hover/item:scale-110 transition-transform flex-shrink-0">
                        {file.status === "Processing" ? (
                          <Loader2 size={20} className="animate-spin" />
                        ) : (
                          <Mic size={20} />
                        )}
                      </div>
                      <div className="flex-1 min-w-0 mr-4">
                        <div className="font-bold text-zinc-900 text-sm truncate">
                          {file.name}
                        </div>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-400 mt-1 font-medium">
                          <span>{file.date}</span>
                          <span className="hidden sm:inline">•</span>
                          <span className="hidden sm:inline">
                            {file.duration}
                          </span>
                          <span className="hidden sm:inline">•</span>
                          <span>{file.size}</span>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        {file.status === "Ready" ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-none bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wide border border-emerald-100">
                            <CheckCircle2 size={12} />{" "}
                            <span className="hidden sm:inline">Ready</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-none bg-amber-50 text-amber-700 text-[10px] font-bold uppercase tracking-wide border border-amber-100">
                            <Activity size={12} className="animate-pulse" />{" "}
                            <span className="hidden sm:inline">Processing</span>
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 3. Bento Grid (Separated & Sharp)
const BentoGrid = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-4xl font-display font-bold text-zinc-900 mb-4 tracking-tight">
            Intelligence, baked in.
          </h2>
          <p className="text-lg text-zinc-500 font-light leading-relaxed">
            A complete toolkit designed for marketing teams, agencies, and
            founders who refuse to compromise on quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Smart Extraction */}
          <div
            className={`md:col-span-2 relative overflow-hidden group bg-white border border-zinc-200 p-8 h-[400px] hover:shadow-xl hover:border-zinc-300 transition-all duration-300 ${isInView ? "animate-fade-up opacity-100" : "opacity-0 translate-y-8"}`}
            style={{ animationDelay: "100ms" }}
          >
            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-6">
                <div className="w-10 h-10 bg-zinc-900 flex items-center justify-center text-white mb-4 rounded-none">
                  <BrainCircuit size={20} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 font-display mb-2">
                  Smart Extraction
                </h3>
                <p className="text-zinc-500 text-sm max-w-md leading-relaxed">
                  Identify core metrics, ROI outcomes, and conflict points
                  instantly. No manual tagging required.
                </p>
              </div>

              {/* Animation Container */}
              <div className="flex-1 w-full bg-zinc-900 border border-zinc-800 p-6 font-mono text-xs text-zinc-400 relative overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.5)] animate-[scan_3s_ease-in-out_infinite] opacity-50"></div>

                <div className="relative z-10 flex flex-col justify-between h-full">
                  {/* Visualizing Audio Wave -> Data */}
                  <div className="flex items-center gap-2 opacity-60">
                    <div className="flex gap-1 items-end h-8">
                      {[40, 70, 30, 80, 50, 90, 20, 60].map((h, i) => (
                        <div
                          key={i}
                          className="w-1 bg-zinc-500 animate-wave"
                          style={{
                            height: `${h}%`,
                            animationDelay: `${i * 0.1}s`,
                          }}
                        ></div>
                      ))}
                    </div>
                    <ArrowRight size={16} className="text-zinc-600" />
                    <div className="bg-zinc-800 px-2 py-1 rounded-none border border-zinc-700 text-[10px] text-indigo-400">
                      Processing...
                    </div>
                  </div>

                  <div className="space-y-2 mt-auto">
                    <div className="flex gap-2 group-hover:translate-x-2 transition-transform duration-300">
                      <span className="text-green-400">{">"}</span>
                      <span className="text-zinc-300">
                        Found: "30% efficiency gain"
                      </span>
                    </div>
                    <div className="flex gap-2 group-hover:translate-x-2 transition-transform duration-300 delay-75">
                      <span className="text-green-400">{">"}</span>
                      <span className="text-zinc-300">
                        Found: "2 weeks to implement"
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Global Scale */}
          <div
            className={`relative overflow-hidden group bg-white border border-zinc-200 p-8 h-[400px] hover:shadow-xl hover:border-zinc-300 transition-all duration-300 ${isInView ? "animate-fade-up opacity-100" : "opacity-0 translate-y-8"}`}
            style={{ animationDelay: "200ms" }}
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-zinc-100 flex items-center justify-center text-zinc-900 mb-4 rounded-none">
                  <Globe2 size={20} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2 font-display">
                  Global Scale
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Auto-translate to 30+ languages instantly.
                </p>
              </div>
              <div className="relative w-full aspect-square flex items-center justify-center">
                <div className="w-40 h-40 border border-zinc-200 rounded-full relative animate-[spin_20s_linear_infinite]">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 text-xs font-bold text-zinc-400">
                    EN
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-2 text-xs font-bold text-zinc-400">
                    ES
                  </div>
                  <div className="absolute top-1/2 -left-3 -translate-y-1/2 bg-white px-2 text-xs font-bold text-zinc-400">
                    JP
                  </div>
                  <div className="absolute top-1/2 -right-3 -translate-y-1/2 bg-white px-2 text-xs font-bold text-zinc-400">
                    DE
                  </div>
                  <div className="absolute inset-4 border border-dashed border-zinc-100 rounded-full"></div>
                </div>
                <Globe
                  size={64}
                  className="absolute text-zinc-200 group-hover:text-indigo-500 transition-colors duration-500"
                  strokeWidth={1}
                />
              </div>
            </div>
          </div>

          {/* Card 3: Enterprise Security */}
          <div
            className={`relative overflow-hidden group bg-white border border-zinc-200 p-8 h-[400px] hover:shadow-xl hover:border-zinc-300 transition-all duration-300 ${isInView ? "animate-fade-up opacity-100" : "opacity-0 translate-y-8"}`}
            style={{ animationDelay: "300ms" }}
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-zinc-100 flex items-center justify-center text-zinc-900 mb-4 rounded-none">
                  <Fingerprint size={20} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2 font-display">
                  SOC-2 Security
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  End-to-end encryption for all client data.
                </p>
              </div>
              <div className="w-full bg-zinc-50 p-6 border border-zinc-100 mt-6 font-mono text-[10px] text-zinc-400 group-hover:bg-zinc-100 transition-colors overflow-hidden relative">
                {/* Binary Stream Effect */}
                <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-zinc-50 to-transparent z-10"></div>
                <div className="absolute inset-0 opacity-10 flex flex-col text-[8px] leading-none overflow-hidden pointer-events-none">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={i}
                      className="whitespace-nowrap animate-marquee"
                      style={{ animationDuration: `${Math.random() * 5 + 5}s` }}
                    >
                      01010101010101010101010101010101010101010101010101
                    </div>
                  ))}
                </div>

                <div className="flex justify-between border-b border-zinc-200 pb-2 mb-2 relative z-20">
                  <span>STATUS</span>
                  <span className="text-emerald-600 font-bold animate-pulse">
                    LOCKED
                  </span>
                </div>
                <div className="mt-4 flex justify-center relative z-20">
                  <Lock
                    size={32}
                    className="text-zinc-300 group-hover:text-emerald-500 transition-colors duration-500"
                  />
                  {/* Scanning Laser */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent -translate-y-full group-hover:animate-[shimmer_2s_linear_infinite]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Analytics */}
          <div
            className={`md:col-span-2 relative overflow-hidden group bg-white border border-zinc-200 p-8 h-[400px] hover:shadow-xl hover:border-zinc-300 transition-all duration-300 ${isInView ? "animate-fade-up opacity-100" : "opacity-0 translate-y-8"}`}
            style={{ animationDelay: "400ms" }}
          >
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="w-10 h-10 bg-zinc-900 flex items-center justify-center text-white mb-4 rounded-none">
                    <LineChart size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 font-display">
                    Performance Analytics
                  </h3>
                </div>
                <div className="hidden sm:flex gap-2">
                  <div className="px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-mono font-medium border border-zinc-200">
                    Views: +24%
                  </div>
                  <div className="px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-mono font-medium border border-zinc-200">
                    Conv: 4.2%
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full flex items-end justify-between gap-2 px-4 pb-4 border-b border-zinc-200 relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_90%,rgba(0,0,0,0.02)_100%)]"></div>
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-zinc-200 group-hover:bg-indigo-600 transition-all duration-700 ease-out relative group/bar"
                    style={{ height: `${h}%`, transitionDelay: `${i * 50}ms` }}
                  >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity text-[10px] font-bold text-zinc-900 font-mono">
                      {h}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 5. Feature Showcase
const FeatureShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { ref, isInView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, [isInView]);

  const features = [
    {
      id: 0,
      title: "Smart Extraction",
      desc: "Automatically detects pain points, solutions, and hard metrics.",
      icon: <Sparkles size={20} />,
      visual: (
        <div className="relative h-full w-full bg-zinc-50 flex items-center justify-center p-8">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]"></div>
          <div className="w-full max-w-md bg-white border border-zinc-200 p-6 space-y-4 shadow-xl z-10 rounded-none">
            <div className="flex items-center gap-2 mb-2 border-b border-zinc-100 pb-3">
              <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase">
                AI_ANALYSIS_ACTIVE
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex gap-4 items-start p-4 bg-indigo-50/50 rounded-none border border-indigo-100">
                <div className="mt-0.5">
                  <Code2 size={16} className="text-indigo-600" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-indigo-700 uppercase tracking-wide mb-1">
                    Detected Metric
                  </div>
                  <div className="text-sm font-medium text-zinc-800">
                    "Reduced churn by{" "}
                    <span className="bg-indigo-200 px-1.5 rounded-none">
                      45%
                    </span>
                    "
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      title: "Tone Match",
      desc: "Mimic your unique brand voice perfectly from existing content.",
      icon: <Wand2 size={20} />,
      visual: (
        <div className="relative h-full w-full bg-zinc-50 flex items-center justify-center p-8">
          <div className="flex flex-col gap-6 w-full max-w-md">
            <div className="bg-white p-5 border border-zinc-200 rounded-none shadow-sm opacity-60 scale-95 blur-[0.5px]">
              <div className="text-[10px] uppercase text-zinc-400 font-bold mb-3">
                Input (Generic)
              </div>
              <div className="h-2 w-full bg-zinc-100 rounded-none mb-3"></div>
              <div className="h-2 w-3/4 bg-zinc-100 rounded-none"></div>
            </div>
            <div className="flex justify-center -my-4 z-10">
              <div className="bg-indigo-600 text-white p-3 rounded-none shadow-lg">
                <Wand2 size={20} />
              </div>
            </div>
            <div className="bg-white p-6 border border-indigo-100 rounded-none shadow-lg ring-1 ring-indigo-500/10">
              <div className="flex justify-between items-center mb-3">
                <div className="text-[10px] uppercase text-indigo-600 font-bold bg-indigo-50 px-2 py-0.5 rounded-none">
                  On Brand
                </div>
              </div>
              <p className="text-sm font-serif italic text-zinc-800 leading-relaxed">
                "We didn't just build a tool; we crafted an engine for growth
                that redefines how teams operate."
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Team Workspaces",
      desc: "Collaborate on drafts, leave comments, and approve content.",
      icon: <Users size={20} />,
      visual: (
        <div className="relative h-full w-full bg-zinc-50 flex items-center justify-center">
          <div className="w-full max-w-md bg-white border border-zinc-200 rounded-none shadow-lg overflow-hidden">
            <div className="bg-zinc-50 px-6 py-3 border-b border-zinc-200 flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-indigo-100 border-2 border-white"></div>
                <div className="w-7 h-7 rounded-full bg-emerald-100 border-2 border-white"></div>
              </div>
              <span className="text-[10px] text-zinc-400 font-mono ml-auto">
                ACTIVE_SESSION
              </span>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-zinc-200 flex-shrink-0"></div>
                <div className="bg-zinc-100 p-4 rounded-none text-sm text-zinc-600">
                  Can we emphasize the ROI metric in the intro?
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Instant Export",
      desc: "Export to PDF, Markdown, or sync directly to your headless CMS.",
      icon: <Share2 size={20} />,
      visual: (
        <div className="relative h-full w-full bg-zinc-50 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <FileText size={24} />, label: "PDF" },
              { icon: <LayoutTemplate size={24} />, label: "Notion" },
              { icon: <Globe size={24} />, label: "Webflow" },
              { icon: <Code2 size={24} />, label: "Markdown" },
            ].map((item, i) => (
              <div
                key={i}
                className="w-28 h-28 bg-white border border-zinc-200 rounded-none shadow-sm flex flex-col items-center justify-center gap-3 hover:border-indigo-500 hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="text-zinc-400 group-hover:text-indigo-600 transition-colors">
                  {item.icon}
                </div>
                <span className="text-xs font-bold text-zinc-600">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      ref={ref}
      id="features"
      className="py-24 bg-white border-t border-zinc-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-display font-bold text-zinc-900 mb-4">
            The simplest workflow.
          </h2>
          <p className="text-lg text-zinc-500 max-w-xl mx-auto font-light leading-relaxed">
            Everything you need to scale your customer success stories.
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-0 border border-zinc-200 shadow-sm items-stretch">
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-zinc-200 bg-white grid grid-cols-2 lg:grid-cols-1">
            {features.map((f, i) => (
              <div
                key={f.id}
                className={`p-6 cursor-pointer transition-all duration-300 group relative overflow-hidden ${activeTab === f.id ? "bg-zinc-50" : "hover:bg-zinc-50/50"} border-zinc-200 ${i % 2 === 0 ? "border-r lg:border-r-0" : ""} ${i < 2 ? "border-b" : "lg:border-b"} ${i === features.length - 1 ? "lg:border-b-0" : ""}`}
                onClick={() => setActiveTab(f.id)}
              >
                {activeTab === f.id && isInView && (
                  <div
                    key={activeTab}
                    className="absolute left-0 bottom-0 lg:top-0 lg:bottom-auto lg:h-full lg:w-1 w-full h-1 bg-zinc-200"
                  >
                    <div className="h-full bg-indigo-600 animate-progress origin-left lg:origin-top lg:w-full lg:animate-progress-vertical"></div>
                  </div>
                )}
                <div className="flex items-center gap-3 mb-2 lg:pl-4">
                  <div
                    className={`p-0 transition-colors ${activeTab === f.id ? "text-indigo-600" : "text-zinc-400 group-hover:text-zinc-600"}`}
                  >
                    {f.icon}
                  </div>
                  <h3
                    className={`font-bold text-base font-display transition-colors ${activeTab === f.id ? "text-zinc-900" : "text-zinc-500"}`}
                  >
                    {f.title}
                  </h3>
                </div>
                <p
                  className={`text-sm leading-relaxed transition-colors lg:pl-4 ${activeTab === f.id ? "text-zinc-600" : "text-zinc-400"}`}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7 bg-zinc-50 relative overflow-hidden flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
            {features.map((f) => (
              <div
                key={f.id}
                className={`absolute inset-0 transition-all duration-500 ease-in-out px-8 py-8 lg:px-16 lg:py-16 ${activeTab === f.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8 pointer-events-none"}`}
              >
                {f.visual}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// 6. Use Cases
const UseCases = () => {
  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl font-display font-bold text-zinc-900 mb-6">
            Built for every stage of growth.
          </h2>
          <p className="text-lg text-zinc-500 font-light leading-relaxed">
            From solo founders to global enterprises, Casevia scales with your
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Freelancers */}
          <div className="group bg-white border border-zinc-200 p-0 relative overflow-hidden hover:border-zinc-300 transition-all duration-300 h-[340px] flex flex-col hover:shadow-lg hover:-translate-y-1 rounded-none">
            <div className="p-8 relative z-10">
              <h3 className="font-bold text-lg text-zinc-900 mb-2 font-display">
                Freelancers
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Automate your portfolio and close more retainers.
              </p>
            </div>
            <div className="flex-1 relative overflow-hidden bg-zinc-50/50 group-hover:bg-white transition-colors border-t border-zinc-100">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.1),transparent_70%)] opacity-100 lg:opacity-20 lg:group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-10 left-8 right-8 bottom-0">
                <div
                  className="bg-white border border-zinc-200 shadow-sm w-full h-full p-4 lg:animate-none lg:group-hover:animate-float animate-float rounded-none"
                  style={{ animationDuration: "6s" }}
                >
                  <div className="flex gap-4 mb-4">
                    <div className="w-8 h-8 bg-zinc-100 rounded-none"></div>
                    <div className="space-y-1.5">
                      <div className="w-16 h-2 bg-zinc-100 rounded-none"></div>
                      <div className="w-10 h-2 bg-zinc-50 rounded-none"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-2 bg-zinc-50 rounded-none"></div>
                    <div className="w-full h-2 bg-zinc-50 rounded-none"></div>
                    <div className="w-2/3 h-2 bg-zinc-50 rounded-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Startups */}
          <div className="group bg-white border border-zinc-200 p-0 relative overflow-hidden hover:border-zinc-300 transition-all duration-300 h-[340px] flex flex-col hover:shadow-lg hover:-translate-y-1 rounded-none">
            <div className="p-8 relative z-10">
              <h3 className="font-bold text-lg text-zinc-900 mb-2 font-display">
                Startups
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Build social proof without a marketing team.
              </p>
            </div>
            <div className="flex-1 relative overflow-hidden bg-zinc-50/50 group-hover:bg-white transition-colors border-t border-zinc-100">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.1),transparent_70%)] opacity-100 lg:opacity-20 lg:group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-10 left-8 right-8 bottom-0 flex items-end gap-3 px-2 pb-0">
                {[30, 50, 40, 70, 60, 90].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-zinc-200 lg:bg-zinc-200 group-hover:bg-emerald-500 transition-colors duration-500 relative group/bar rounded-t-none animate-pulse-slow lg:animate-none lg:group-hover:animate-pulse-slow"
                    style={{ height: `${h}%`, animationDelay: `${i * 0.2}s` }}
                  >
                    <div className="absolute top-0 left-0 w-full h-full bg-emerald-500 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Agencies */}
          <div className="group bg-white border border-zinc-200 p-0 relative overflow-hidden hover:border-zinc-300 transition-all duration-300 h-[340px] flex flex-col hover:shadow-lg hover:-translate-y-1 rounded-none">
            <div className="p-8 relative z-10">
              <h3 className="font-bold text-lg text-zinc-900 mb-2 font-display">
                Agencies
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Scale case study production for every client.
              </p>
            </div>
            <div className="flex-1 relative overflow-hidden bg-zinc-50/50 group-hover:bg-white transition-colors border-t border-zinc-100">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,rgba(245,158,11,0.1),transparent_70%)] opacity-100 lg:opacity-20 lg:group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-10 left-0 right-0 bottom-0 flex justify-center">
                <div
                  className="w-32 h-40 bg-white border border-zinc-200 shadow-sm relative top-4 transition-all duration-500 rounded-none animate-float lg:animate-none lg:group-hover:animate-float"
                  style={{ animationDuration: "8s" }}
                >
                  <div
                    className="absolute -top-4 -left-4 w-32 h-40 bg-zinc-50 border border-zinc-200 shadow-sm z-[-1] transition-all duration-500 rounded-none animate-float lg:animate-none lg:group-hover:animate-float"
                    style={{ animationDuration: "8s", animationDelay: "1s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Enterprise */}
          <div className="group bg-white border border-zinc-200 p-0 relative overflow-hidden hover:border-zinc-300 transition-all duration-300 h-[340px] flex flex-col hover:shadow-lg hover:-translate-y-1 rounded-none">
            <div className="p-8 relative z-10">
              <h3 className="font-bold text-lg text-zinc-900 mb-2 font-display">
                Enterprise
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Secure, compliant workflows for large operations.
              </p>
            </div>
            <div className="flex-1 relative overflow-hidden bg-zinc-50/50 group-hover:bg-white transition-colors border-t border-zinc-100 flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.1),transparent_70%)] opacity-100 lg:opacity-20 lg:group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-20 h-20 border-2 border-zinc-200 rounded-full flex items-center justify-center transition-all duration-500 group-hover:border-pink-500 group-hover:scale-110 border-pink-500 scale-110 lg:border-zinc-200 lg:scale-100">
                  <ShieldCheck
                    size={32}
                    className="text-zinc-300 transition-colors duration-500 group-hover:text-pink-500 text-pink-500 lg:text-zinc-300"
                  />
                </div>
                <div className="absolute inset-0 border-2 border-dashed border-zinc-200 rounded-full animate-[spin_10s_linear_infinite] group-hover:border-pink-200 border-pink-200 lg:border-zinc-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 7. Featured Case Studies
const FeaturedCaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const intervalDuration = 6000;

  const cases = [
    {
      company: "Linear",
      logo: "Linear",
      metric: "50% faster shipping",
      quote:
        "Casevia completely automated our internal documentation, allowing us to focus on building features.",
      author: "Karri Saarinen",
      role: "CEO, Linear",
    },
    {
      company: "Ramp",
      logo: "Ramp",
      metric: "1,000+ hours saved",
      quote:
        "We generate expense report narratives for enterprise clients automatically. It's a game changer.",
      author: "Eric Glyman",
      role: "CEO, Ramp",
    },
    {
      company: "Vercel",
      logo: "Vercel",
      metric: "99.9% uptime docs",
      quote:
        "From engineering syncs to incident reports, Casevia handles the structured output we need.",
      author: "Guillermo Rauch",
      role: "CEO, Vercel",
    },
    {
      company: "Retool",
      logo: "Retool",
      metric: "2x dev velocity",
      quote:
        "Our developer advocates use Casevia to turn community calls into tutorials instantly.",
      author: "David Hsu",
      role: "CEO, Retool",
    },
  ];

  useEffect(() => {
    if (!isInView) return;

    setProgress(0);

    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / intervalDuration) * 100, 100);
      setProgress(newProgress);

      if (elapsed >= intervalDuration) {
        setActiveIndex((prev) => (prev + 1) % cases.length);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [activeIndex, isInView]);

  return (
    <section
      ref={ref}
      className="py-24 bg-zinc-950 text-white overflow-hidden relative"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="min-h-[350px] flex flex-col justify-center items-center text-center mb-16 relative">
          {cases.map((c, i) => (
            <div
              key={i}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out px-4 ${
                activeIndex === i
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-8 pointer-events-none"
              }`}
            >
              <div className="text-indigo-400 font-mono text-xs uppercase tracking-widest font-bold mb-8">
                {c.metric}
              </div>
              <h3 className="text-3xl md:text-5xl font-display font-bold leading-tight max-w-4xl mb-10">
                "{c.quote}"
              </h3>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center font-bold text-zinc-500 text-lg">
                  {c.author.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="text-base font-bold text-white">
                    {c.author}
                  </div>
                  <div className="text-xs text-zinc-500">{c.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-20 border-t border-zinc-900 pt-10">
          {cases.map((c, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="group relative pb-10 focus:outline-none"
            >
              <span
                className={`text-xl font-bold font-display transition-colors duration-300 ${
                  activeIndex === i
                    ? "text-white"
                    : "text-zinc-600 group-hover:text-zinc-400"
                }`}
              >
                {c.logo}
              </span>

              {activeIndex === i && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-500 transition-all duration-75 ease-linear"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

// 9. Pricing
const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for getting started",
      features: [
        {
          label: "2 case studies / month",
          tooltip:
            "Generate and export up to 2 complete case studies per month.",
        },
        {
          label: "15 min max video length",
          tooltip: "Upload interviews up to 15 minutes long.",
        },
        {
          label: "Basic custom tone",
          tooltip: "Access to our 3 standard tone presets.",
        },
        { label: "1 team seat", tooltip: "Single user access only." },
      ],
      highlight: false,
      btnText: "GET STARTED",
    },
    {
      name: "Starter",
      price: "$39",
      description: "For independent professionals",
      features: [
        {
          label: "8 case studies / month",
          tooltip: "Generate and export up to 8 case studies per month.",
        },
        {
          label: "30 min max video length",
          tooltip: "Upload interviews up to 30 minutes long.",
        },
        {
          label: "No Casevia branding",
          tooltip: "Remove 'Powered by Casevia' from your PDF exports.",
        },
        {
          label: "3 design templates",
          tooltip: "Access to our Starter template library.",
        },
      ],
      highlight: false,
      btnText: "UPGRADE TO STARTER",
    },
    {
      name: "Pro",
      price: "$99",
      description: "For growing teams",
      features: [
        {
          label: "25 case studies / month",
          tooltip: "Generate and export up to 25 case studies per month.",
        },
        {
          label: "60 min max video length",
          tooltip: "Process full hour-long interviews.",
        },
        {
          label: "SEO title/slug generation",
          tooltip: "AI suggests SEO-optimized headlines and URL slugs.",
        },
        {
          label: "5 team seats",
          tooltip:
            "Collaborate with up to 5 team members in a shared workspace.",
        },
      ],
      highlight: true,
      btnText: "UPGRADE TO PRO",
    },
    {
      name: "Agency",
      price: "$199",
      description: "For agencies and larger teams",
      features: [
        {
          label: "60 case studies / month",
          tooltip: "High volume generation for client work.",
        },
        {
          label: "120 min max video length",
          tooltip: "Process extra-long interviews or workshops.",
        },
        {
          label: "High-priority processing",
          tooltip: "Skip the queue for faster AI generation times.",
        },
        {
          label: "Dedicated account manager",
          tooltip: "Direct access to our support team for custom setups.",
        },
      ],
      highlight: false,
      btnText: "CONTACT SALES",
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-display font-bold text-zinc-900 mb-6">
            Simple, transparent pricing.
          </h2>
          <p className="text-lg text-zinc-600 font-light leading-relaxed">
            Start for free, upgrade as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-zinc-200 bg-white">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`flex flex-col p-8 border-b md:border-b-0 md:border-r border-zinc-200 last:border-r-0 relative ${plan.highlight ? "bg-zinc-50" : "bg-white"}`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0">
                  <span className="bg-zinc-900 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-zinc-900">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8 mt-2">
                <h3 className="text-lg font-bold text-zinc-900 font-display">
                  {plan.name}
                </h3>
                <p className="text-xs text-zinc-500 mb-6 h-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display font-bold text-zinc-900 tracking-tight">
                    {plan.price}
                  </span>
                  {plan.price !== "$0" && (
                    <span className="text-zinc-500 text-sm">/mo</span>
                  )}
                </div>
                <div className="text-[10px] text-zinc-400 mt-2 font-mono uppercase tracking-wide">
                  Billed monthly
                </div>
              </div>

              <button
                className={`w-full py-3.5 font-bold text-[10px] uppercase tracking-wider transition-all mb-8 border rounded-none ${plan.highlight ? "bg-zinc-900 text-white border-zinc-900 hover:bg-zinc-800" : "bg-white text-zinc-900 border-zinc-200 hover:bg-zinc-50"}`}
              >
                {plan.btnText}
              </button>

              <ul className="space-y-4 flex-1">
                {plan.features.map((feat, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-xs text-zinc-600 leading-relaxed group/item relative"
                  >
                    <Check
                      size={14}
                      className="flex-shrink-0 text-zinc-900 mt-0.5"
                    />
                    <span className="flex-1 border-b border-dotted border-zinc-300 cursor-help hover:border-zinc-900 transition-colors">
                      {feat.label}
                    </span>

                    {/* Tooltip - Sharp */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-zinc-900 text-white text-[10px] p-3 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all z-20 shadow-xl pointer-events-none border border-zinc-800 font-light leading-relaxed">
                      {feat.tooltip}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-900"></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 10. FAQ
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What file formats do you support?",
      a: "We support all major audio and video formats including MP3, WAV, M4A, MP4, and MOV.",
    },
    {
      q: "Can I customize the output structure?",
      a: "Yes. Pro and Agency plans allow you to define custom headers and sections.",
    },
    {
      q: "How accurate is the transcription?",
      a: "We use top-tier speech-to-text models that typically achieve 98-99% accuracy.",
    },
    {
      q: "Is my data secure?",
      a: "Absolutely. All uploads are encrypted at rest and in transit.",
    },
    {
      q: "Do you offer a free trial?",
      a: "Yes! You can generate your first case study for free.",
    },
  ];

  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl font-display font-bold text-zinc-900 mb-12 text-center">
          Frequently asked questions
        </h2>

        <div className="space-y-0 border border-zinc-200 bg-white">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-zinc-200 last:border-b-0">
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-bold text-sm text-zinc-900 pr-8">
                  {faq.q}
                </span>
                {openIndex === i ? (
                  <ChevronUp size={16} className="text-zinc-900" />
                ) : (
                  <ChevronDown size={16} className="text-zinc-400" />
                )}
              </button>

              {openIndex === i && (
                <div className="px-6 pb-6 text-zinc-500 text-sm leading-relaxed border-t border-zinc-50 pt-4 bg-zinc-50/50 font-light">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 11. Footer
const Footer = ({ onOpenWaitlist }: { onOpenWaitlist: () => void }) => {
  const footerRef = useRef<HTMLElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        setCursorPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const footer = footerRef.current;
    if (footer) {
      footer.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (footer) {
        footer.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full bg-zinc-950 text-zinc-400 pt-24 pb-12 border-t border-zinc-900 overflow-hidden relative group/footer"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 mb-24">
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-3xl font-display tracking-tighter text-white">
                <span className="font-extrabold">case</span>
                <span className="font-medium opacity-70">via</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-8 max-w-xs text-zinc-500 font-light">
              The enterprise standard for automated case study generation.
              Trusted by high-growth startups and agencies worldwide.
            </p>
            <div className="flex flex-col gap-4">
              <div className="text-xs font-bold text-zinc-600 uppercase tracking-widest font-mono">
                Join the waitlist
              </div>
              <div className="flex w-full max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-zinc-900 border-y border-l border-r-0 border-zinc-800 text-white px-4 py-3 text-sm flex-1 focus:outline-none focus:border-zinc-700 rounded-none placeholder:text-zinc-700"
                />
                <button
                  onClick={onOpenWaitlist}
                  className="bg-white text-zinc-950 px-6 py-3 text-sm font-bold uppercase tracking-wide hover:bg-zinc-200 transition-colors rounded-none border-y border-r border-white"
                >
                  Join
                </button>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest font-mono">
              Product
            </h4>
            <ul className="space-y-4 text-sm font-light">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Changelog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Docs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest font-mono">
              Company
            </h4>
            <ul className="space-y-4 text-sm font-light">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest font-mono">
              Legal
            </h4>
            <ul className="space-y-4 text-sm font-light">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-zinc-600 font-mono">
          <div>© 2025 Casevia Inc. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-400 transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-zinc-400 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-zinc-400 transition-colors">
              GitHub
            </a>
            <div className="flex items-center gap-2 text-emerald-500">
              <div className="w-1.5 h-1.5 bg-emerald-500 animate-pulse"></div>
              <span>SYSTEM_OPERATIONAL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Giant Background Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[20%] pointer-events-none opacity-[0.03] whitespace-nowrap z-0">
        <span className="text-[18vw] font-display font-bold leading-none tracking-tighter text-white">
          CASEVIA
        </span>
      </div>

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[20%] pointer-events-none whitespace-nowrap z-10 text-white opacity-0 group-hover/footer:opacity-100 transition-opacity duration-300"
        style={{
          maskImage: `radial-gradient(circle 300px at ${cursorPos.x}px ${cursorPos.y}px, black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 300px at ${cursorPos.x}px ${cursorPos.y}px, black 0%, transparent 100%)`,
        }}
      >
        <span className="text-[18vw] font-display font-bold leading-none tracking-tighter text-white opacity-10 drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">
          CASEVIA
        </span>
      </div>
    </footer>
  );
};

export default function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar onOpenWaitlist={() => setIsWaitlistOpen(true)} />
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
      <Hero onOpenWaitlist={() => setIsWaitlistOpen(true)} />
      <BentoGrid />
      <FeatureShowcase />
      <UseCases />
      <FeaturedCaseStudies />
      <Pricing />
      <FAQ />
      <Footer onOpenWaitlist={() => setIsWaitlistOpen(true)} />
    </div>
  );
}
