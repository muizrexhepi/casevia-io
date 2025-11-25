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
import { toast } from "sonner";
import { Hero } from "@/components/hero";
import { BentoGrid } from "@/components/bento";
import { FeatureShowcase } from "@/components/features";
import { Logo } from "@/components/logo";
import { Navbar } from "@/components/navbar";
import { UseCases } from "@/components/how-it-works";

// --- UTILS ---

export const useInView = (options = { threshold: 0.1 }) => {
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

// Waitlist Modal
const WaitlistModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter your email");

    setLoading(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Failed to join waitlist");

      const result = await res.json();

      if (result.exists) {
        toast("You're already on the waitlist!", {
          description: "We've got your spot reserved! Stay tuned for updates.",
        });
      } else {
        toast.success("🎉 You're on the waitlist!");
      }

      setSubmitted(true);
      setEmail("");

      // Close modal after showing success state
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
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
                  disabled={loading}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-zinc-900 text-white py-4 text-sm font-bold hover:bg-zinc-800 transition-all active:translate-y-0.5 rounded-none shadow-lg shadow-zinc-900/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 className="animate-spin size-5" />
                    Joining...
                  </div>
                ) : (
                  "Get Early Access"
                )}
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
