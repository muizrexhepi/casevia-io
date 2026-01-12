export interface PricingPlan {
  name: string;
  setupPrice: string;
  monthlyPrice: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  outcome: string;
  results: string[];
  technologies: string[];
  year: number;
  category: string;
  role: string;
  metrics: { label: string; value: string }[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  gallery?: string[];
}
