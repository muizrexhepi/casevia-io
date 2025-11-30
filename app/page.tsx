"use client";
import React, { useState, useEffect, useRef } from "react";
import Hero from "@/components/home/hero";
import BentoGrid from "@/components/home/bento-grid";
import AppShowcase from "@/components/home/app-showcase";
import FAQ from "@/components/home/faq";
import Pricing from "@/components/home/pricing";

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
      <AppShowcase />
      <Pricing />
      <FAQ />
    </div>
  );
}
