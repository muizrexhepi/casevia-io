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
    id: "doros-premium",
    title: "Doro's Premium",
    category: "Luxury E-commerce",
    image: "/projects/doros1.png",
    year: "2024",
    tagline: "The Art of Extraction: Swiss precision meets Italian soul.",
    brief:
      "Doro's Premium isn't just selling coffee; they are selling a sensory lifestyle. As a high-end Swiss brand utilizing exclusive Italian roasts, they needed a digital flagship store that felt as premium as their gold-standard machines. The goal was to translate the aroma and crema of coffee into a high-fidelity digital experience.",
    execution:
      "We engineered a headless commerce masterpiece. Using Shopify for the robust backend and Next.js for a fluid, cinema-grade frontend, we created an interface that feels liquid. We implemented high-resolution asset loading strategies and custom motion design to make browsing machines and beans feel like walking through a luxury boutique.",
    stats: [
      { val: "+45%", label: "AOV Increase", icon: "trend" },
      { val: "0.8s", label: "Page Load", icon: "zap" },
      { val: "Global", label: "Shipping Logic", icon: "award" },
      { val: "4.9/5", label: "UX Score", icon: "check" },
    ],
    heroImage: "/projects/doros1.png",
    secondaryImage: "/projects/doros2.png",
    deliverables: [
      {
        title: "Headless Storefront",
        description: "Next.js frontend coupled with Shopify Storefront API.",
      },
      {
        title: "Subscription Engine",
        description: "Custom logic for recurring bean & capsule deliveries.",
      },
      {
        title: "Brand Immersion",
        description: "WebGL interactions and premium motion design.",
      },
    ],
    techStack: ["Next.js", "Shopify Plus", "Framer Motion", "Tailwind"],
    impact:
      "The platform redefined the brand's digital presence, resulting in a 45% increase in Average Order Value. The subscription retention rate hit an industry-leading 92% within the first quarter.",
    quote: {
      text: "We wanted our website to smell like fresh coffee. Casevia somehow managed to do exactly that through design.",
      author: "Elena Rossi",
      title: "Head of Brand, Doro's",
    },
    nextProjectSlug: "nextloop",
    nextProjectTitle: "Nextloop Auctions",
  },

  {
    id: "nextloop",
    title: "Nextloop",
    category: "Real-Time Marketplace",
    image: "/projects/nextloop1.png",
    year: "2025",
    tagline: "The Swiss standard for luxury auctions. Für Dinge, die bleiben.",
    brief:
      "Challenging the dominance of legacy platforms like Ricardo.ch, Nextloop aimed to capture the premium segment of the second-hand market. They needed a platform that combined the trust of a Swiss bank with the excitement of a live auction house, all wrapped in a flawless UI/UX.",
    execution:
      "We built a high-concurrency bidding engine using WebSockets for real-time state synchronization. Unlike standard marketplaces, Nextloop updates prices instantly across thousands of connected clients without refreshing. We integrated 'Sniper Protection' logic and secure escrow payments to ensure trust is never compromised.",
    stats: [
      { val: "Real-time", label: "Bidding Sync", icon: "zap" },
      { val: "15k+", label: "Active Lots", icon: "award" },
      { val: "Zero", label: "Latency Issues", icon: "check" },
      { val: "Secure", label: "ID Verification", icon: "trend" },
    ],
    heroImage: "/projects/nextloop1.png",
    secondaryImage: "/projects/nextloop2.png",
    deliverables: [
      {
        title: "Live Auction Engine",
        description: "Socket-based bidding with anti-sniping extensions.",
      },
      {
        title: "Trust & Safety",
        description: "Automated identity verification and fraud detection.",
      },
      {
        title: "Modern UX",
        description: "A clutter-free, animation-rich browsing experience.",
      },
    ],
    techStack: ["Next.js", "Socket.io", "PostgreSQL", "Stripe Connect"],
    impact:
      "Nextloop successfully onboarded 10,000 verified users in its beta phase. The real-time engine handles peak auction closures with zero downtime, setting a new UX standard for Swiss marketplaces.",
    quote: {
      text: "Finally, a marketplace that looks as valuable as the items being sold on it. The real-time tech is flawless.",
      author: "Thomas Weber",
      title: "Founder, Nextloop",
    },
    nextProjectSlug: "agim-tours",
    nextProjectTitle: "Agim Tours ERP",
  },

  {
    id: "gobusly",
    title: "GoBusly", // Shortened from "GoBusly European Booking Platform"
    category: "High-Volume Commerce",
    image: "/projects/gobusly2.png",
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
    heroImage: "/projects/gobusly2.png",
    secondaryImage: "/projects/gobusly1.png",
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
    id: "agim-tours",
    title: "Agim Tours Internal",
    category: "Enterprise ERP",
    image: "/projects/agimtours2.png",
    year: "2024",
    tagline:
      "The central nervous system of Macedonia's largest transport giant.",
    brief:
      "Agim Tours manages a massive logistical web: international bus routes, hotel allotments, airplane reservations, and organized tourism. Their manual processes couldn't scale. They needed a custom 'Mission Control' to manage every seat, bed, and ticket from a single dashboard.",
    execution:
      "We developed a massive, role-based internal ERP system. It unifies fleet management (bus tracking/maintenance), dynamic hotel inventory, and flight ticketing into one cohesive React dashboard. Complex pricing rules and international compliance logic are handled automatically by the backend.",
    stats: [
      { val: "3", label: "Verticals Unified", icon: "award" },
      { val: "-60%", label: "Admin Time", icon: "trend" },
      { val: "100%", label: "Traceability", icon: "check" },
      { val: "24/7", label: "Availability", icon: "zap" },
    ],
    heroImage: "/projects/agimtours2.png",
    secondaryImage: "/projects/agimtours1.png",
    deliverables: [
      {
        title: "Unified Logistics Core",
        description: "Bus, Flight, and Hotel inventory in one database.",
      },
      {
        title: "Financial Suite",
        description: "Automated invoicing, payroll, and profit reporting.",
      },
      {
        title: "Fleet Telemetry",
        description: "Maintenance scheduling and route optimization.",
      },
    ],
    techStack: ["React Admin", "NestJS", "PostgreSQL", "Docker"],
    impact:
      "Operational efficiency skyrocketed. Tasks that took finance teams days are now generated in seconds. The system processes thousands of bookings monthly with zero double-entries.",
    quote: {
      text: "This isn't just software; it's the engine that drives our entire company forward. We have total control now.",
      author: "Agim Management",
      title: "Executive Board",
    },
    nextProjectSlug: "nuroo",
    nextProjectTitle: "Nuroo AI",
  },
  {
    id: "hakbus",
    title: "Hakbus", // Shortened
    category: "Unified Ecosystem",
    image: "/projects/hakbus1.png",
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
    heroImage: "/projects/hakbus1.png",
    secondaryImage: "/projects/hakbus2.png",
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
    image: "/projects/menyro1.png",
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
    heroImage: "/projects/menyro1.png",
    secondaryImage: "/projects/menyro2.png",
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
    image: "/projects/insylink1.png",
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
    heroImage: "/projects/insylink1.png",
    secondaryImage: "/projects/insylink2.png",
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
    image: "/projects/tvojpazar1.png",
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
    heroImage: "/projects/tvojpazar1.png",
    secondaryImage: "/projects/tvojpazar2.png",
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
    nextProjectSlug: "doros-premium",
    nextProjectTitle: "Doro's Premium",
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
