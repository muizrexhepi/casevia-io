// ==================== PROJECTS.TS ====================
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
    title: "Nuroo AI Organizer",
    category: "AI Productivity System",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
    year: "2025 - Present",
    tagline:
      "Transforming chaotic thoughts into structured action plans with enterprise-grade AI intelligence.",
    brief:
      "A fast-growing productivity startup approached us with an ambitious vision: to build a proprietary mobile application that could instantly transform scattered notes, voice memos, and disorganized thoughts into structured, actionable task lists using advanced AI. The challenge wasn't just technical—it was about creating an experience so seamless that users wouldn't even notice the complexity happening behind the scenes. They needed native mobile applications for both iOS and Android that felt instant, intuitive, and intelligent.",
    execution:
      "We architected a robust, cross-platform solution using React Native, enabling us to deliver native performance on both iOS and Android from a single, maintainable codebase. The application leverages cutting-edge AI APIs for natural language processing, with intelligent fallback systems ensuring 99.9% uptime. We implemented real-time synchronization across devices using Firebase, allowing users to capture ideas on their phone and see them organized on their tablet instantly. The architecture prioritizes speed: tasks are generated in under 2 seconds, with optimistic UI updates ensuring the app feels instantaneous even on slower connections.",
    stats: [
      { val: "+35%", label: "Task Completion Rate", icon: "trend" },
      { val: "99.9%", label: "System Uptime", icon: "check" },
      { val: "< 2s", label: "AI Processing Time", icon: "zap" },
      { val: "Native", label: "Mobile Performance", icon: "award" },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
    secondaryImage:
      "https://images.unsplash.com/photo-1544655486-19349c844131?q=80&w=2574&auto=format&fit=crop",
    deliverables: [
      {
        title: "Native iOS App",
        description:
          "Built with React Native for true native performance and App Store compliance",
      },
      {
        title: "Native Android App",
        description:
          "Optimized for the Android ecosystem with Material Design principles",
      },
      {
        title: "Real-time Sync Engine",
        description:
          "Firebase-powered synchronization ensuring data consistency across all devices",
      },
      {
        title: "AI Integration Layer",
        description:
          "Robust API integration with intelligent error handling and retry logic",
      },
    ],
    techStack: [
      "React Native",
      "TypeScript",
      "Firebase",
      "OpenAI API",
      "Redux Toolkit",
      "Jest",
    ],
    impact:
      "Within three months of launch, Nuroo saw a 35% increase in user task completion rates and achieved a 4.8-star rating across both app stores. The seamless AI integration reduced the average time from idea capture to actionable task by 78%, fundamentally changing how users approach their daily productivity.",
    quote: {
      text: "Casevia didn't just build an app—they built the foundation of our entire product vision. The speed and reliability they achieved with the AI integration is something our users rave about daily.",
      author: "Sarah Chen",
      title: "CEO & Founder, Nuroo",
    },
    nextProjectSlug: "gobusly",
    nextProjectTitle: "GoBusly European Booking Platform",
  },
  {
    id: "gobusly",
    title: "GoBusly European Booking Platform",
    category: "High-Volume E-commerce",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a8d462c?q=80&w=2666&auto=format&fit=crop",
    year: "2025",
    tagline:
      "Engineering a lightning-fast booking engine that handles millions of transactions across European markets.",
    brief:
      "GoBusly, a major European bus operator serving 15+ countries, faced a critical problem: their legacy booking system was costing them millions in lost conversions. With page load times exceeding 8 seconds and poor mobile performance, they were hemorrhaging customers to competitors. They needed a complete digital transformation—a modern, blazingly fast platform that could handle peak traffic loads during holiday seasons while maintaining sub-second page loads. The stakes were high: every 100ms of delay meant measurable revenue loss.",
    execution:
      "We built a cutting-edge Next.js 14 application with server-side rendering (SSR) and aggressive edge caching, reducing initial page loads to under 400ms. The architecture leverages Vercel's edge network for global content delivery, ensuring European users get sub-second response times regardless of location. We integrated directly with their fleet management APIs to provide real-time seat availability, implementing sophisticated caching strategies that balance freshness with performance. The payment flow was redesigned from the ground up, reducing the checkout process from 7 steps to 3, with automatic form validation and one-click payment options. We implemented comprehensive SEO optimization, resulting in a 45% increase in organic traffic within the first quarter.",
    stats: [
      { val: "2.1x", label: "Booking Conversions", icon: "trend" },
      { val: "+45%", label: "Organic Traffic", icon: "trend" },
      { val: "0.4s", label: "Page Load Time", icon: "zap" },
      { val: "15", label: "Countries Served", icon: "award" },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1544620347-c4fd4a8d462c?q=80&w=2666&auto=format&fit=crop",
    secondaryImage:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2574&auto=format&fit=crop",
    deliverables: [
      {
        title: "High-Performance Web App",
        description:
          "Next.js 14 SSR application with edge caching and optimized Core Web Vitals",
      },
      {
        title: "Real-time Booking Engine",
        description:
          "Integration with fleet APIs for live seat availability and instant confirmations",
      },
      {
        title: "Multi-currency Payment System",
        description:
          "Stripe integration supporting 12 European currencies with fraud detection",
      },
      {
        title: "Advanced SEO Infrastructure",
        description:
          "Structured data, dynamic sitemaps, and internationalization for maximum visibility",
      },
    ],
    techStack: [
      "Next.js 14",
      "React",
      "TypeScript",
      "Stripe",
      "Vercel",
      "PostgreSQL",
      "Redis",
    ],
    impact:
      "The new platform drove a 2.1x increase in booking conversions, directly contributing to €3.2M in additional revenue in the first six months. The performance improvements and SEO optimization resulted in GoBusly claiming the #1 position in Google search results for key booking terms across multiple European markets.",
    quote: {
      text: "Our old platform was actively losing us money. Casevia's solution didn't just fix the problems—it transformed our entire digital strategy. The ROI was immediate and continues to compound.",
      author: "Marcus Weber",
      title: "Chief Operations Officer, GoBusly",
    },
    nextProjectSlug: "hakbus",
    nextProjectTitle: "Hakbus Multi-platform System",
  },
  {
    id: "hakbus",
    title: "Hakbus Multi-platform System",
    category: "Unified Ticketing Solution",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop",
    year: "2024",
    tagline:
      "Unifying fragmented sales channels into one seamless, data-driven ecosystem.",
    brief:
      "Hakbus operated across three disconnected sales channels: a dated website, outdated mobile apps, and manual ticket sales—each with its own database and no real-time reporting. Management had zero visibility into real-time sales performance, route profitability, or customer behavior. They were flying blind, making critical business decisions based on week-old spreadsheets. The challenge was to build a complete digital ecosystem from scratch: web platform, iOS app, Android app, and a powerful admin dashboard—all synchronized in real-time and sharing a single source of truth.",
    execution:
      "We executed a comprehensive multi-platform strategy, building simultaneously across all surfaces while maintaining a unified backend architecture. The web platform was built with Next.js for optimal performance and SEO, while native mobile apps were developed in React Native to maximize code reuse without sacrificing user experience. The crown jewel is the admin dashboard—a sophisticated real-time analytics platform built with React and Recharts, giving management instant visibility into every aspect of the business. We implemented a robust REST API backend with PostgreSQL, handling complex operations like dynamic pricing, seat reservations, and refund processing. The entire system is deployed on cloud infrastructure with auto-scaling, ensuring reliability even during peak travel seasons.",
    stats: [
      { val: "3-in-1", label: "Platforms Unified", icon: "check" },
      { val: "-60%", label: "Manual Reporting", icon: "trend" },
      { val: "100%", label: "Mobile Coverage", icon: "check" },
      { val: "Real-time", label: "Business Analytics", icon: "zap" },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop",
    secondaryImage:
      "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=2680&auto=format&fit=crop",
    deliverables: [
      {
        title: "Responsive Web Platform",
        description:
          "Next.js application with server-side rendering and advanced booking features",
      },
      {
        title: "iOS & Android Apps",
        description:
          "Native-feeling React Native applications with offline booking capabilities",
      },
      {
        title: "Real-time Admin Dashboard",
        description:
          "Comprehensive analytics platform with live sales tracking and route performance metrics",
      },
      {
        title: "Unified Backend API",
        description:
          "Scalable Node.js API handling all business logic, payments, and data synchronization",
      },
    ],
    techStack: [
      "Next.js",
      "React Native",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Recharts",
    ],
    impact:
      "Hakbus transformed from a company making decisions on intuition to one driven by data. The unified platform reduced manual reporting time by 60%, while mobile bookings increased by 140% in the first quarter. Management now has real-time insights into route profitability, allowing them to optimize schedules and pricing dynamically, resulting in an 18% increase in per-route revenue.",
    quote: {
      text: "Before Casevia, we were essentially guessing at which routes were profitable. Now we have real-time data on everything. It's like going from driving blind to having a complete GPS system.",
      author: "Dimitri Novak",
      title: "Managing Director, Hakbus",
    },
    nextProjectSlug: "menyro",
    nextProjectTitle: "Menyro Multi-Language QR Menu",
  },
  {
    id: "menyro",
    title: "Menyro Multi-Language QR Menu",
    category: "Hospitality Technology",
    image:
      "https://images.unsplash.com/photo-1550968943-3b47b2c069b1?q=80&w=2535&auto=format&fit=crop",
    year: "2024",
    tagline:
      "Eliminating language barriers and printing costs with intelligent, instant menu translation.",
    brief:
      "An international restaurant group with locations across Europe faced a recurring nightmare: managing printed menus in 35+ languages. Every price change, seasonal menu update, or promotional item required reprinting thousands of menus across multiple locations—costing tens of thousands annually. Worse, accuracy was inconsistent, with translation errors embarrassing staff and confusing customers. They needed a digital solution that could deliver professional-quality translations instantly, update menus in real-time across all locations, and provide a premium customer experience that justified eliminating physical menus entirely.",
    execution:
      "We built a sophisticated web-based platform that serves dynamic, QR-accessible menus with intelligent language detection and professional-grade translation. The system integrates Google's Cloud Translation API with custom glossaries to ensure culinary terms, dish names, and brand language remain consistent across all 35+ supported languages. Restaurant managers can update prices, descriptions, or entire menu sections from a centralized admin panel, with changes propagating instantly to all locations worldwide. The frontend is built with Next.js for optimal performance, with aggressive caching ensuring menus load in under 1 second even in areas with poor connectivity. We implemented a sophisticated image optimization pipeline, allowing high-resolution food photography while maintaining fast load times. The system supports complex menu features including allergen information, dietary preferences, and dynamic pricing based on time of day or location.",
    stats: [
      { val: "35+", label: "Languages Supported", icon: "award" },
      { val: "-85%", label: "Printing Costs", icon: "trend" },
      { val: "< 1s", label: "Menu Load Time", icon: "zap" },
      { val: "Instant", label: "Global Updates", icon: "check" },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1550968943-3b47b2c069b1?q=80&w=2535&auto=format&fit=crop",
    secondaryImage:
      "https://images.unsplash.com/photo-1555577626-d18721c430e5?q=80&w=2670&auto=format&fit=crop",
    deliverables: [
      {
        title: "Dynamic Menu Platform",
        description:
          "Next.js web application with real-time updates and sub-second load times",
      },
      {
        title: "Translation Integration",
        description:
          "Google Cloud Translation API with custom culinary glossaries for accuracy",
      },
      {
        title: "Multi-location Admin Panel",
        description:
          "Centralized management system for updating menus across all restaurant locations",
      },
      {
        title: "QR Code Generation System",
        description:
          "Automated QR code generation with unique tracking for each table and location",
      },
    ],
    techStack: [
      "Next.js",
      "React",
      "Google Cloud Translation",
      "Firebase",
      "Tailwind CSS",
      "Vercel",
    ],
    impact:
      "The restaurant group eliminated 85% of their printing costs, saving over €45,000 annually. More importantly, customer satisfaction scores increased by 23% as international guests could now browse menus in their native language with confidence. The system paid for itself in just 4 months, and the group is now licensing the technology to other restaurant chains.",
    quote: {
      text: "We went from spending thousands on reprinting menus every time we changed a price to updating everything globally in seconds. Our international customers love it, and our margins love it even more.",
      author: "Isabella Romano",
      title: "Director of Operations, Restaurant Group",
    },
    nextProjectSlug: "insylink",
    nextProjectTitle: "Insylink Restaurant POS",
  },
  {
    id: "insylink",
    title: "Insylink Restaurant POS",
    category: "Mission-Critical Operations",
    image:
      "https://images.unsplash.com/photo-1555577626-d18721c430e5?q=80&w=2670&auto=format&fit=crop",
    year: "2024",
    tagline:
      "Building an offline-first POS system that never stops taking orders, even when the internet does.",
    brief:
      "A hospitality group operating busy restaurants in areas with unreliable internet connectivity faced a critical operational challenge: their cloud-dependent POS system would freeze during internet outages, bringing service to a complete halt. During peak dinner hours, connectivity issues meant lost orders, frustrated staff, and angry customers. They needed a bulletproof solution—a POS system that would continue operating flawlessly regardless of internet connectivity, with an interface optimized for the chaos of restaurant service. The system had to be fast, intuitive enough for new staff to learn in minutes, and absolutely reliable. Downtime was not an option.",
    execution:
      "We engineered an offline-first Progressive Web App (PWA) using React and IndexedDB for local data persistence. The architecture prioritizes local-first operations: every order is saved locally first, then synced to the cloud when connectivity is available. This means the system continues working perfectly during internet outages, with automatic background synchronization once connectivity returns. The interface is specifically designed for tablet devices with large touch targets, gesture controls for common actions, and a streamlined order flow that minimizes taps. We implemented sophisticated conflict resolution for scenarios where multiple devices take orders offline simultaneously. The system includes real-time kitchen display integration, automated inventory tracking, and comprehensive reporting that helps managers optimize operations.",
    stats: [
      { val: "100%", label: "Offline Availability", icon: "check" },
      { val: "+25%", label: "Order Processing Speed", icon: "zap" },
      { val: "Zero", label: "Transaction Loss", icon: "award" },
      { val: "< 5min", label: "Staff Training Time", icon: "trend" },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1555577626-d18721c430e5?q=80&w=2670&auto=format&fit=crop",
    secondaryImage:
      "https://images.unsplash.com/photo-1581456492476-8096f9a6504b?q=80&w=2670&auto=format&fit=crop",
    deliverables: [
      {
        title: "Offline-First PWA",
        description:
          "React-based application with local-first architecture ensuring zero downtime",
      },
      {
        title: "Kitchen Display System",
        description:
          "Real-time order management with priority queuing and prep time tracking",
      },
      {
        title: "Tablet-Optimized UI",
        description:
          "Touch-first interface designed for speed and accuracy in high-pressure environments",
      },
      {
        title: "Sync Engine",
        description:
          "Intelligent background synchronization with conflict resolution and data integrity checks",
      },
    ],
    techStack: [
      "React",
      "TypeScript",
      "IndexedDB",
      "PWA",
      "WebSocket",
      "Node.js",
      "PostgreSQL",
    ],
    impact:
      "The hospitality group eliminated 100% of revenue loss from connectivity issues, which had previously cost them an estimated €15,000 monthly. Staff training time decreased from 2 hours to under 5 minutes, and order processing speed increased by 25%, allowing them to serve 30% more customers during peak hours without additional staff.",
    quote: {
      text: "During our last internet outage, I didn't even realize we were offline until connectivity came back and everything synced automatically. That would have been a disaster with our old system. This POS literally pays for itself every month.",
      author: "Andreas Müller",
      title: "Restaurant Operations Manager",
    },
    nextProjectSlug: "tvojpazar",
    nextProjectTitle: "TvojPazar E-commerce Platform",
  },
  {
    id: "tvojpazar",
    title: "TvojPazar E-commerce Platform",
    category: "Scalable E-commerce",
    image:
      "https://images.unsplash.com/photo-1488197779269-58b688327914?q=80&w=2670&auto=format&fit=crop",
    year: "2023",
    tagline:
      "Architecting a scalable marketplace that handles thousands of products and concurrent shoppers with ease.",
    brief:
      "An ambitious entrepreneur wanted to launch a comprehensive online marketplace to compete with established e-commerce giants in the Balkan region. The vision was bold: support 10,000+ products across multiple categories, handle thousands of concurrent users, provide lightning-fast search and filtering, and deliver a premium shopping experience that would justify premium prices. The technical challenge was significant—building e-commerce infrastructure that could scale from day one while maintaining the polish and performance users expect from market leaders. The platform needed to handle complex product variants, real-time inventory management, and integrate with multiple payment providers.",
    execution:
      "We built a modern, scalable e-commerce platform using Next.js 13 with server components for optimal performance and SEO. The architecture leverages PostgreSQL with sophisticated indexing strategies for sub-100ms search queries even with 10,000+ products. We implemented Algolia for advanced search and filtering capabilities, providing users with instant, typo-tolerant search results and faceted filtering across dozens of product attributes. The frontend uses React Server Components to minimize JavaScript sent to the client, resulting in faster page loads and better Core Web Vitals scores. We integrated Stripe and PayPal for payments, with a streamlined checkout flow that reduced cart abandonment by 40% compared to industry averages. The admin panel provides comprehensive product management, order tracking, and analytics, with automated inventory alerts preventing stockouts.",
    stats: [
      { val: "10K+", label: "Products Supported", icon: "award" },
      { val: "95%", label: "Customer Retention", icon: "trend" },
      { val: "< 100ms", label: "Search Query Time", icon: "zap" },
      { val: "Mobile-First", label: "Responsive Design", icon: "check" },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1488197779269-58b688327914?q=80&w=2670&auto=format&fit=crop",
    secondaryImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop",
    deliverables: [
      {
        title: "High-Performance Storefront",
        description:
          "Next.js 13 application with server components and edge caching for optimal speed",
      },
      {
        title: "Advanced Search System",
        description:
          "Algolia integration providing instant, intelligent search with filters and facets",
      },
      {
        title: "Multi-Payment Integration",
        description:
          "Stripe and PayPal support with automated fraud detection and currency conversion",
      },
      {
        title: "Comprehensive Admin Dashboard",
        description:
          "Full-featured product, order, and inventory management system with analytics",
      },
    ],
    techStack: [
      "Next.js 13",
      "React",
      "PostgreSQL",
      "Algolia",
      "Stripe",
      "PayPal",
      "Vercel",
      "AWS S3",
    ],
    impact:
      "TvojPazar launched to immediate success, processing over €500K in gross merchandise value within the first three months. The platform's performance and user experience drove a 95% customer retention rate, significantly above the e-commerce industry average of 30%. The scalable architecture has allowed the business to grow 250% year-over-year without requiring infrastructure changes.",
    quote: {
      text: "Casevia built us an e-commerce platform that competes with companies 100x our size. Our customers constantly tell us our site is faster and easier to use than the big marketplaces. That's our competitive advantage.",
      author: "Marko Petrović",
      title: "Founder & CEO, TvojPazar",
    },
    nextProjectSlug: "nuroo",
    nextProjectTitle: "Nuroo AI Organizer",
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
