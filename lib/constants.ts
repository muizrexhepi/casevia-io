import { PricingPlan, FaqItem, CaseStudy } from "./types";

export const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Methodology", href: "#methodology" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "#faq" },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "gobusly",
    title: "GoBusly: Scaling Regional Transit",
    subtitle: "Logistics • Engineering • Fintech",
    imageUrl:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2070",
    fullDescription:
      "A market-leading bus booking platform that has successfully scaled to thousands of daily active users across the Balkans and Central Europe.",
    challenge:
      "The Balkan bus travel market lacked a user-friendly platform that could handle complex routes, real-time availability, and diverse payment needs for a pan-continental audience.",
    solution:
      "Built a highly scalable and resilient booking engine from the ground up. The platform’s architecture is designed for high-traffic, ensuring a fast and smooth experience for thousands of concurrent users, even during peak booking seasons.",
    outcome:
      "Grew to over 2,500 monthly active users and has processed over 5,000 bookings to date. GoBusly maintains a 4.8/5 star user satisfaction rating and has become a go-to platform for bus travel in its core markets.",
    results: [
      "Successfully processed 5,000+ bookings",
      "99.8% Payment Success Rate",
      "Real-time seat mapping < 100ms latency",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "WebSocket",
      "Email Automation",
    ],
    year: 2024,
    category: "Travel & Transport",
    role: "Full-Stack Development & Branding",
    metrics: [
      { label: "Monthly Active Users", value: "2,500+" },
      { label: "User Satisfaction", value: "4.8/5" },
      { label: "Load Time", value: "< 1.2s" },
    ],
    testimonial: {
      quote:
        "GoBusly made online bookings possible for our bus company. Customers love the seat selection feature and we've reduced booking errors to nearly zero.",
      author: "Alex Dimitrov",
      position: "Transport Manager",
    },
    gallery: [
      "https://images.unsplash.com/photo-1570126618953-d437176e8c79?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1509012854419-b0188337c7ee?auto=format&fit=crop&q=80&w=1000",
    ],
  },
  {
    slug: "menyro",
    title: "Menyro: AI-Driven Menu Automation",
    subtitle: "SaaS • AI • Restaurant Tech",
    imageUrl:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2070",
    fullDescription:
      "A revolutionary SaaS platform for restaurants that digitizes menus via QR codes, eliminating printing costs and language barriers.",
    challenge:
      "Restaurants struggle with the high costs of reprinting menus and the difficulty of serving international customers. Making quick changes to daily specials was an inefficient, manual process.",
    solution:
      "Created a subscription-based platform where restaurant owners can manage their digital menu from a simple dashboard. The system features an AI engine for instant, accurate translations.",
    outcome:
      "Menyro has helped partner restaurants eliminate printing costs entirely and increase average order value by 15% through easy upselling of daily specials.",
    results: [
      "Eliminated 100% of printing costs",
      "Average order value increased by 15%",
      "Supports 50+ languages instantly",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "AI Translation",
      "Real-time Updates",
      "QR Generation",
    ],
    year: 2024,
    category: "SaaS Platform",
    role: "Full-Stack Development & Design",
    metrics: [
      { label: "Languages Supported", value: "50+" },
      { label: "Avg Order Boost", value: "15%" },
      { label: "Setup Time", value: "< 5m" },
    ],
    testimonial: {
      quote:
        "Menyro eliminated our printing costs entirely. We can update prices instantly and our international customers can read the menu in their language.",
      author: "Maria Santos",
      position: "Restaurant Manager",
    },
    gallery: [
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&q=80&w=1000",
    ],
  },
  {
    slug: "insylink",
    title: "Insylink: Fiscal-Compliant POS",
    subtitle: "Fintech • Enterprise • SaaS",
    imageUrl:
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=2070",
    fullDescription:
      "An enterprise-grade Point-of-Sale (POS) system for restaurant chains in Germany, fully compliant with KassenSichV.",
    challenge:
      "German restaurants require a POS system that not only streamlines operations but also adheres to strict fiscal laws. Existing solutions were often expensive or non-compliant.",
    solution:
      "Developed a modern POS system with a core integration to Fiskaly’s certified TSE service, ensuring every transaction is legally recorded. Includes real-time order syncing and robust offline support.",
    outcome:
      "Insylink has been successfully deployed across 5 restaurant chains in over 30 locations, processing over €1.5 million in transactions monthly.",
    results: [
      "100% Fiskaly Certified Compliance",
      "Processes €1.5M+ monthly",
      "Reduces staff training time by 50%",
    ],
    technologies: [
      "Next.js",
      "Socket.IO",
      "IndexedDB",
      "Fiskaly API",
      "Offline Support",
    ],
    year: 2024,
    category: "Restaurant Technology",
    role: "POS System Development",
    metrics: [
      { label: "Monthly Volume", value: "€1.5M+" },
      { label: "Total Deployments", value: "30+" },
      { label: "System Uptime", value: "99.9%" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1556742049-04ff120a0a58?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&q=80&w=1000",
    ],
  },
  {
    slug: "tvojpazar",
    title: "TvojPazar: Marketplace Evolution",
    subtitle: "E-commerce • Search Tech • UI/UX",
    imageUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2070",
    fullDescription:
      "A next-generation online marketplace for the Balkans, built with a laser focus on speed and intuitive user experience.",
    challenge:
      "The regional marketplace scene was dominated by slow, outdated platforms with frustrating search functionality. Users needed a modern alternative that was fast and reliable.",
    solution:
      "Developed from the ground up with a focus on UX. Implemented advanced search that delivers results 70% faster than competitors and designed a clean interface that simplifies browsing.",
    outcome:
      "In user testing, 3 out of 4 users preferred TvojPazar over existing platforms. Achieved 50% higher user engagement and rapid market share gains.",
    results: [
      "Search results 70% faster",
      "50% higher listing engagement",
      "Mobile-first architecture",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Algolia Search",
      "Real-time Chat",
      "Image Optimization",
    ],
    year: 2024,
    category: "Marketplace",
    role: "Full-Stack Development & UI/UX",
    metrics: [
      { label: "Search Latency", value: "< 200ms" },
      { label: "User Preference", value: "75%" },
      { label: "Engagement", value: "+50%" },
    ],
    testimonial: {
      quote:
        "Finally, a marketplace that actually works well. The search finds what I'm looking for and the chat system makes communication simple.",
      author: "Petar Nikolovski",
      position: "Regular User",
    },
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
    ],
  },
  {
    slug: "amgmbh",
    title: "AMGMBH: Service Growth Engine",
    subtitle: "Business Website • SEO • Automation",
    imageUrl:
      "https://images.unsplash.com/photo-1581578731548-c64695ce6958?auto=format&fit=crop&q=80&w=2070",
    fullDescription:
      "A modern, lead-generating platform for a Hamburg-based cleaning company, featuring custom quote automation.",
    challenge:
      "The client needed a professional presence to stand out in the Hamburg market. Previous sites failed to convert visitors or allow for easy content updates.",
    solution:
      "Built a fast, SEO-optimized bilingual site with Sanity CMS. Added an online quote calculator to pre-qualify leads and streamline the sales pipeline.",
    outcome:
      "Increased qualified leads by 40% in three months. The client now manages 95% of content updates in-house, saving significant maintenance costs.",
    results: [
      "40% increase in qualified leads",
      "95% client self-sufficiency",
      "Top 3 Local SEO ranking",
    ],
    technologies: [
      "Next.js",
      "Sanity CMS",
      "Quote Calculator",
      "SEO Optimization",
    ],
    year: 2024,
    category: "Business Website",
    role: "Web Development & Design",
    metrics: [
      { label: "Lead Quality", value: "+40%" },
      { label: "Conversion", value: "+25%" },
      { label: "SEO Authority", value: "Top 3" },
    ],
    testimonial: {
      quote:
        "The new website transformed our business. We get higher quality leads and the quote calculator saves us hours of back-and-forth emails.",
      author: "Andreas Müller",
      position: "Business Owner",
    },
    gallery: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1000",
    ],
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Launchpad",
    setupPrice: "2,950", // Accessible for small businesses
    monthlyPrice: "149", // Easy "Yes" for maintenance
    description:
      "A high-speed, conversion-focused website for small businesses and startups.",
    features: [
      "5-Page Custom Design",
      "Mobile-First Responsive",
      "Next.js Speed Optimization",
      "CMS for Easy Edits", // Sanity or simple MDX
    ],
  },
  {
    name: "Growth Engine",
    setupPrice: "5,500", // Standard agency rate
    monthlyPrice: "299", // Pure profit MRR
    isPopular: true,
    description:
      "Complete brand overhaul and marketing infrastructure for scaling companies.",
    features: [
      "10+ Page Strategy & Design",
      "Advanced Animations (Framer Motion)",
      "SEO Technical Foundation",
      "Analytics & Conversion Tracking",
    ],
  },
  {
    name: "E-Commerce / Custom",
    setupPrice: "8,500+",
    monthlyPrice: "499",
    description:
      "Robust online stores or custom web applications for specific business needs.",
    features: [
      "Shopify or Custom E-com Integration",
      "Inventory Management Setup",
      "Payment Gateway Integration",
      "Priority 24/7 Support",
    ],
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "How does Casevia approach custom projects?",
    answer:
      "We start with a deep logic audit of your business operations to architect a technical solution that delivers direct, measurable ROI.",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer:
      "Yes. Every project includes a growth retainer to ensure your software stays secure, updated, and scales with your user base.",
  },
  {
    question: "Where is the engineering team based?",
    answer:
      "Our core engineering and design squad is based in Berlin-Mitte, operating with German standards of precision and quality.",
  },
  {
    question: "Who owns the intellectual property?",
    answer:
      "You do. Upon project completion and final payment, 100% of the proprietary source code and IP is transferred to your company.",
  },
];
