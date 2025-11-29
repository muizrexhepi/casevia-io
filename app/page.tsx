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
import { FeaturedCaseStudies } from "@/components/featured-use-cases";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faqs";

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

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Hero />
      <BentoGrid />
      <FeatureShowcase />
      <UseCases />
      <FeaturedCaseStudies />
      <Pricing />
      <FAQ />
    </div>
  );
}
