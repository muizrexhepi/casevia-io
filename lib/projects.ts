// lib/projects.ts

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  year: string;
  tagline: string;
  brief: string;
  execution: string;
  stats: { val: string; label: string; icon: string }[];
  secondaryImage: string;
  heroImage: string;
  deliverables?: { title: string; description: string }[];
  techStack?: string[];
  impact?: string;
  quote?: { text: string; author: string; title: string };
  nextProjectSlug?: string;
  nextProjectTitle?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "nuroo",
    title: "Nuroo AI", // Shortened from "Nuroo AI Organizer"
    category: "Productivity Intelligence",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
    year: "2025",
    tagline: "Enterprise-grade AI transforming chaos into structured action.", // Punchier
    brief:
      "Nuroo required a system capable of parsing disorganized voice and text input into structured task lists instantly. The challenge was masking the complexity of LLM latency behind a fluid, native mobile experience.",
    execution:
      "We architected a local-first React Native solution. By implementing optimistic UI updates and background synchronization, we completely decoupled the user interface from network latency. The backend leverages a custom queuing system to handle AI processing bursts without degrading performance.",
    stats: [
      { val: "+35%", label: "Task Completion", icon: "trend" },
      { val: "99.9%", label: "Uptime", icon: "check" },
      { val: "< 2s", label: "Processing", icon: "zap" },
      { val: "Native", label: "iOS & Android", icon: "award" },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
    secondaryImage:
      "https://images.unsplash.com/photo-1544655486-19349c844131?q=80&w=2574&auto=format&fit=crop",
    deliverables: [
      {
        title: "Native Mobile Core",
        description: "React Native architecture with shared business logic.",
      },
      {
        title: "Offline Sync",
        description: "Firebase-powered optimistic state management.",
      },
      {
        title: "AI Pipeline",
        description: "Resilient OpenAI integration with retry logic.",
      },
    ],
    techStack: ["React Native", "TypeScript", "Firebase", "OpenAI", "Redux"],
    impact:
      "Post-launch metrics showed a 35% increase in daily active usage compared to the MVP. The optimistic UI implementation reduced perceived latency by 100%, creating an 'instant' feel.",
    quote: {
      text: "Casevia didn't just build an app; they engineered a productivity engine. The speed is indistinguishable from magic.",
      author: "Sarah Chen",
      title: "CEO, Nuroo",
    },
    nextProjectSlug: "gobusly",
    nextProjectTitle: "GoBusly Transit",
  },
  {
    id: "gobusly",
    title: "GoBusly", // Shortened from "GoBusly European Booking Platform"
    category: "High-Volume Commerce",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a8d462c?q=80&w=2666&auto=format&fit=crop",
    year: "2025",
    tagline: "A booking engine processing millions in pan-European transit.",
    brief:
      "GoBusly's legacy infrastructure was losing revenue due to slow load times (8s+) and scaling failures during peak holiday traffic. They needed a sub-second booking experience to retain market share.",
    execution:
      "We migrated the monolith to a Next.js 14 architecture with aggressive Edge Caching. By moving seat availability logic to the edge and implementing a Redis caching layer, we reduced Time-to-First-Byte (TTFB) to under 50ms globally.",
    stats: [
      { val: "2.1x", label: "Conversion Rate", icon: "trend" },
      { val: "400ms", label: "Load Time", icon: "zap" },
      { val: "15", label: "Countries", icon: "award" },
      { val: "100%", label: "SEO Score", icon: "check" },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1544620347-c4fd4a8d462c?q=80&w=2666&auto=format&fit=crop",
    secondaryImage:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2574&auto=format&fit=crop",
    deliverables: [
      {
        title: "Edge Architecture",
        description:
          "Vercel Edge Functions for sub-second availability checks.",
      },
      {
        title: "Booking Engine",
        description: "State machine handling complex multi-leg journeys.",
      },
      {
        title: "Payment Nexus",
        description: "Unified stripe integration for 12 currencies.",
      },
    ],
    techStack: ["Next.js 14", "Redis", "PostgreSQL", "Stripe", "Vercel Edge"],
    impact:
      "The new architecture drove a 2.1x increase in conversions immediately upon launch. Revenue increased by €3.2M in the first six months due to performance gains alone.",
    quote: {
      text: "Our old platform was losing money. Casevia's architecture printed money. The ROI was immediate.",
      author: "Marcus Weber",
      title: "COO, GoBusly",
    },
    nextProjectSlug: "hakbus",
    nextProjectTitle: "Hakbus Ecosystem",
  },
  {
    id: "hakbus",
    title: "Hakbus", // Shortened
    category: "Unified Ecosystem",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop",
    year: "2024",
    tagline:
      "Unifying fragmented sales channels into a single source of truth.",
    brief:
      "Hakbus suffered from data fragmentation across web, mobile, and physical counters. Management lacked real-time visibility, leading to empty seats and lost revenue opportunities.",
    execution:
      "We engineered a centralized API gateway that serves as the single source of truth for web, iOS, and Android clients. A real-time socket layer pushes inventory updates instantly across all channels, preventing double-bookings.",
    stats: [
      { val: "3-in-1", label: "Unified Core", icon: "check" },
      { val: "-60%", label: "Admin Overhead", icon: "trend" },
      { val: "100%", label: "Mobile Sync", icon: "check" },
      { val: "Live", label: "Analytics", icon: "zap" },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop",
    secondaryImage:
      "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=2680&auto=format&fit=crop",
    deliverables: [
      {
        title: "Unified API",
        description: "Node.js middleware tailored for high-concurrency.",
      },
      {
        title: "Cross-Platform",
        description: "Shared React ecosystem for Web and Mobile.",
      },
      {
        title: "Live Dashboard",
        description: "Real-time socket.io visualization of fleet metrics.",
      },
    ],
    techStack: ["Next.js", "React Native", "Node.js", "AWS", "Socket.io"],
    impact:
      "Mobile bookings surged 140% in Q1. The real-time dashboard allowed operations to optimize route pricing dynamically, increasing margin per mile by 18%.",
    quote: {
      text: "We went from driving blind to having a complete GPS for our business logic.",
      author: "Dimitri Novak",
      title: "MD, Hakbus",
    },
    nextProjectSlug: "menyro",
    nextProjectTitle: "Menyro Global",
  },
  {
    id: "menyro",
    title: "Menyro", // Shortened
    category: "Hospitality Tech",
    image:
      "https://images.unsplash.com/photo-1550968943-3b47b2c069b1?q=80&w=2535&auto=format&fit=crop",
    year: "2024",
    tagline: "Automated localization engine eliminating 85% of printing costs.",
    brief:
      "Managing printed menus across 35+ languages was an operational nightmare. The client needed a digital solution that felt premium enough to replace physical paper while handling complex translation logic.",
    execution:
      "We built a dynamic rendering engine using Next.js. It detects user locale and serves optimized images and translated content via a global CDN. The system uses a hybrid translation approach: AI for speed, human-verified glossaries for culinary accuracy.",
    stats: [
      { val: "35+", label: "Languages", icon: "award" },
      { val: "-85%", label: "OpEx Costs", icon: "trend" },
      { val: "< 1s", label: "Global Load", icon: "zap" },
      { val: "Instant", label: "Updates", icon: "check" },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1550968943-3b47b2c069b1?q=80&w=2535&auto=format&fit=crop",
    secondaryImage:
      "https://images.unsplash.com/photo-1555577626-d18721c430e5?q=80&w=2670&auto=format&fit=crop",
    deliverables: [
      {
        title: "Dynamic QR Core",
        description: "Context-aware menu rendering engine.",
      },
      {
        title: "Localization Pipeline",
        description: "Hybrid AI/Human translation workflow.",
      },
      {
        title: "Admin Suite",
        description: "Multi-tenant management for global franchises.",
      },
    ],
    techStack: ["Next.js", "Google Cloud AI", "Tailwind", "Firebase"],
    impact:
      "The client saved €45k annually in printing costs. Customer satisfaction scores rose 23% due to native-language accessibility.",
    quote: {
      text: "Our international customers love it, and our margins love it even more.",
      author: "Isabella Romano",
      title: "Director of Ops",
    },
    nextProjectSlug: "insylink",
    nextProjectTitle: "Insylink POS",
  },
  {
    id: "insylink",
    title: "Insylink",
    category: "Mission Critical",
    image:
      "https://images.unsplash.com/photo-1555577626-d18721c430e5?q=80&w=2670&auto=format&fit=crop",
    year: "2024",
    tagline:
      "Offline-first architecture ensuring zero revenue loss during outages.",
    brief:
      "Internet instability was costing this hospitality group €15k/month in lost orders. They needed a POS that was resilient, local-first, and synced automatically without user intervention.",
    execution:
      "We engineered a Progressive Web App (PWA) with a robust IndexedDB local layer. The app functions 100% offline, queuing transactions and resolving conflicts via a custom algorithm once connectivity is restored.",
    stats: [
      { val: "100%", label: "Offline Uptime", icon: "check" },
      { val: "Zero", label: "Data Loss", icon: "award" },
      { val: "+25%", label: "Throughput", icon: "zap" },
      { val: "5min", label: "Onboarding", icon: "trend" },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1555577626-d18721c430e5?q=80&w=2670&auto=format&fit=crop",
    secondaryImage:
      "https://images.unsplash.com/photo-1581456492476-8096f9a6504b?q=80&w=2670&auto=format&fit=crop",
    deliverables: [
      {
        title: "Offline PWA",
        description: "Local-first React architecture with IndexedDB.",
      },
      {
        title: "Conflict Resolution",
        description: "Algorithmic handling of async data merges.",
      },
      {
        title: "Kitchen Display",
        description: "WebSocket-powered real-time order routing.",
      },
    ],
    techStack: ["React", "IndexedDB", "Node.js", "WebSockets"],
    impact:
      "Revenue loss from outages dropped to zero. Order processing speed increased by 25% due to the optimized local-first UI.",
    quote: {
      text: "I didn't even realize the internet was down until it came back up. The system is bulletproof.",
      author: "Andreas Müller",
      title: "Operations Manager",
    },
    nextProjectSlug: "tvojpazar",
    nextProjectTitle: "TvojPazar Market",
  },
  {
    id: "tvojpazar",
    title: "TvojPazar",
    category: "Scale E-commerce",
    image:
      "https://images.unsplash.com/photo-1488197779269-58b688327914?q=80&w=2670&auto=format&fit=crop",
    year: "2023",
    tagline:
      "High-scale infrastructure handling 10k+ SKUs with sub-100ms latency.",
    brief:
      "Launching a challenger marketplace required infrastructure that could compete with giants on day one. The goal: Support thousands of products and concurrent users with instant search and filtering.",
    execution:
      "We utilized Next.js Server Components to minimize client-side bundle size. Search is powered by Algolia with custom indexing strategies, ensuring 10k+ products can be filtered in milliseconds without hitting the primary database.",
    stats: [
      { val: "10k+", label: "SKUs", icon: "award" },
      { val: "95%", label: "Retention", icon: "trend" },
      { val: "100ms", label: "Query Time", icon: "zap" },
      { val: "250%", label: "YoY Growth", icon: "check" },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1488197779269-58b688327914?q=80&w=2670&auto=format&fit=crop",
    secondaryImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop",
    deliverables: [
      {
        title: "Server Components",
        description: "Zero-bundle-size architecture for max speed.",
      },
      {
        title: "Algolia Search",
        description: "Instant faceted filtering and typo-tolerance.",
      },
      {
        title: "Inventory Ops",
        description: "Real-time stock tracking and automated alerts.",
      },
    ],
    techStack: ["Next.js 13", "Algolia", "PostgreSQL", "Stripe"],
    impact:
      "The platform scaled to support 250% year-over-year growth without a single infrastructure change. Customer retention holds steady at 95% due to superior UX.",
    quote: {
      text: "We compete with companies 100x our size because our tech stack is faster. Casevia gave us that edge.",
      author: "Marko Petrović",
      title: "Founder",
    },
    nextProjectSlug: "nuroo",
    nextProjectTitle: "Nuroo AI",
  },
];

export const getProjectBySlug = (slug: string) => {
  return PROJECTS.find((p) => p.id === slug);
};

export const getProjectList = () => {
  return PROJECTS.map(({ id, title, category, image, year }) => ({
    id,
    title,
    category,
    image,
    year,
  }));
};

export const generateStaticSlugs = () => {
  return PROJECTS.map((p) => ({ slug: p.id }));
};
