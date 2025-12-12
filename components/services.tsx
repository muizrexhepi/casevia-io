import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import Link from "next/link";

export const servicesData = [
  {
    id: "brand-strategy",
    number: "01",
    title: "Brand Strategy",
    description:
      "Market analysis, competitor research, and brand positioning that carves out your unique space in the industry.",
    fullDescription:
      "Your brand is more than a logo—it's the gut feeling your customers have when they interact with you. We strip away the noise to find your core truth. Through deep market auditing and psychological profiling, we position your business to dominate its category, not just compete in it.",
    deliverables: [
      "Market Audit",
      "Competitor Research",
      "Brand Archetypes",
      "Value Proposition",
      "Voice & Tone Guidelines",
      "Communication Framework",
    ],
    painPoints: [
      {
        title: "The Commodity Trap",
        desc: "You are forced to compete on price because buyers cannot distinguish you from competitors.",
      },
      {
        title: "Fragmented Messaging",
        desc: "Sales says one thing, marketing says another, and your product says a third. The story is broken.",
      },
      {
        title: "Low Brand Recall",
        desc: "Prospects visit your site but forget you the moment they close the tab. You lack 'stickiness'.",
      },
    ],
    processSteps: [
      {
        title: "Immersion",
        desc: "We interview stakeholders, audit existing assets, and dissect your business model.",
      },
      {
        title: "Market Mapping",
        desc: "We analyze the competitive landscape to find the 'white space' where you can win.",
      },
      {
        title: "Positioning",
        desc: "We define the core promise, personality, and 'One Big Idea' that sets you apart.",
      },
      {
        title: "Playbook",
        desc: "We document the strategy into actionable guidelines for your entire team.",
      },
    ],
    faq: [
      {
        q: "What is the final output?",
        a: "A comprehensive Brand Strategy Guide (PDF) containing your positioning, pillars, voice, and messaging matrix.",
      },
      {
        q: "How long does this take?",
        a: "Typically 4-6 weeks depending on stakeholder availability and depth of research required.",
      },
      {
        q: "Do I need this before design?",
        a: "Absolutely. Design without strategy is just decoration. We need to know 'who' you are before we draw it.",
      },
    ],
  },
  {
    id: "visual-identity",
    number: "02",
    title: "Visual Identity",
    description:
      "Logo design, typography systems, and art direction that communicate authority and build immediate trust.",
    fullDescription:
      "We translate strategy into a visual language that commands attention. Our design systems are built for the digital age—flexible, scalable, and impossible to ignore. We create identities that don't just look good; they work hard to convert viewers into believers.",
    deliverables: [
      "Logo Design",
      "Typography Systems",
      "Color Palettes",
      "Iconography Sets",
      "Social Media Assets",
      "Brand Guidelines Book",
    ],
    painPoints: [
      {
        title: "Outdated Aesthetics",
        desc: "Your visual look screams '2015' while your competitors look cutting-edge and modern.",
      },
      {
        title: "Inconsistent Application",
        desc: "Your slide decks, website, and social assets look like they came from three different companies.",
      },
      {
        title: "Low Perceived Value",
        desc: "Your product is premium, but your design looks cheap, causing customers to hesitate.",
      },
    ],
    processSteps: [
      {
        title: "Visual Discovery",
        desc: "Moodboarding and aesthetic exploration to align on a visual direction.",
      },
      {
        title: "Concept Development",
        desc: "We create 2-3 distinct visual territories for you to choose from.",
      },
      {
        title: "System Design",
        desc: "Expanding the chosen concept into a full system (typography, color, layout).",
      },
      {
        title: "Guidelines",
        desc: "We deliver a UI Kit, logo files, and a Brand Standards manual to ensure consistency.",
      },
    ],
    faq: [
      {
        q: "Do you just design logos?",
        a: "No. We build complete visual systems. A logo is useless without the context of type, color, and layout.",
      },
      {
        q: "Can we keep our current logo?",
        a: "Yes. We can do a 'refresh' that modernizes the system around your existing mark if the equity is strong.",
      },
      {
        q: "What files do we get?",
        a: "Everything. Vector source files (AI/FIG), exported assets (PNG/SVG/JPG), and web-font licenses.",
      },
    ],
  },
  {
    id: "web-experience",
    number: "03",
    title: "Web Experience",
    description:
      "High-performance websites and digital products designed to convert visitors into loyal customers.",
    fullDescription:
      "A website is your 24/7 sales engine. We build lightning-fast, visually stunning digital experiences using modern frameworks. We prioritize user flow and conversion mechanics, ensuring that every click moves the user closer to a purchase decision.",
    deliverables: [
      "UX/UI Design",
      "React / Next.js Development",
      "Motion Design",
      "CMS Integration",
      "Performance Optimization",
      "SEO Technical Foundation",
    ],
    painPoints: [
      {
        title: "High Bounce Rates",
        desc: "Users land, get confused by the layout or messaging, and leave within seconds.",
      },
      {
        title: "Poor Mobile Experience",
        desc: "50% of your traffic is on mobile, but your site is broken or hard to use on phones.",
      },
      {
        title: "Impossible to Edit",
        desc: "Your marketing team has to beg developers to change a comma. You need autonomy.",
      },
    ],
    processSteps: [
      {
        title: "UX Architecture",
        desc: "Sitemaps and wireframes to define the user journey and content structure.",
      },
      {
        title: "UI Design",
        desc: "High-fidelity mockups of key pages, including interactions and motion design.",
      },
      {
        title: "Development",
        desc: "Pixel-perfect implementation using React/Next.js and a headless CMS.",
      },
      {
        title: "Launch & Training",
        desc: "QA, SEO migration, and training your team on how to update content independently.",
      },
    ],
    faq: [
      {
        q: "Which CMS do you use?",
        a: "We prefer Sanity or Contentful for headless flexibility, or Webflow for marketing-focused teams.",
      },
      {
        q: "Is SEO included?",
        a: "We build the technical foundation (speed, semantic tags, structure), but ongoing content strategy is separate.",
      },
      {
        q: "Do you write the copy?",
        a: "We can. We have expert copywriters on our team, or we can work with your provided draft.",
      },
    ],
  },
  {
    id: "growth-systems",
    number: "04",
    title: "Growth Systems",
    description:
      "Analytics implementation, conversion rate optimization, and scalable marketing infrastructures.",
    fullDescription:
      "Launch is just the beginning. We implement rigorous data loops to measure what works and what doesn't. By continuously testing and optimizing your funnels, we turn your digital presence into a predictable revenue generator.",
    deliverables: [
      "Analytics Setup",
      "Conversion Rate Optimization",
      "A/B Testing",
      "Email Marketing Setup",
      "CRM Integration",
      "Growth Dashboards",
    ],
    painPoints: [
      {
        title: "Guesswork Marketing",
        desc: "You are spending money on ads but don't know which ones actually drive revenue.",
      },
      {
        title: "Leaky Funnel",
        desc: "You get traffic, but they don't convert into leads. You are wasting ad spend.",
      },
      {
        title: "Data Blindness",
        desc: "You have Google Analytics installed but don't know how to read it or act on the data.",
      },
    ],
    processSteps: [
      {
        title: "Data Audit",
        desc: "We check your tracking setup to ensure data integrity and fix broken tags.",
      },
      {
        title: "Funnel Mapping",
        desc: "We identify the key drop-off points in your user journey to focus our efforts.",
      },
      {
        title: "Optimization Sprints",
        desc: "We run A/B tests on landing pages and flows to improve conversion rates systematically.",
      },
      {
        title: "Reporting",
        desc: "We build dashboards that show real ROI, allowing you to scale spend confidently.",
      },
    ],
    faq: [
      {
        q: "What tools do you work with?",
        a: "GA4, Mixpanel, Segment, HubSpot, and various A/B testing platforms.",
      },
      {
        q: "How quickly do we see results?",
        a: "Optimization is iterative, but we usually spot 'low hanging fruit' fixes in the first week.",
      },
      {
        q: "Is this a one-time project?",
        a: "It can be, but Growth works best as an ongoing monthly retainer for continuous improvement.",
      },
    ],
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white text-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-24">
          {/* Left: Sticky Header */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <Reveal>
                <span className="block text-xs font-bold uppercase tracking-[0.25em] text-gray-400 mb-6">
                  Capabilities
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-display text-5xl md:text-6xl font-medium uppercase tracking-tighter mb-8 leading-[0.9]">
                  Holistic <br /> Design <br /> Solutions
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-gray-500 text-sm font-medium leading-loose uppercase tracking-wide max-w-xs">
                  We don't just make things look good. We build systems that
                  work, scale, and drive real business value.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Right: The List */}
          <div className="lg:w-2/3">
            <div className="flex flex-col">
              {servicesData.map((service, idx) => (
                <Reveal key={idx} delay={idx * 0.1} width="100%">
                  <Link
                    href={`/services/${service.id}`}
                    className="group relative block border-t border-black/10 py-16 hover:bg-gray-50 transition-all duration-500 -mx-6 px-6 md:mx-0 md:px-8 hover:pl-12"
                  >
                    <div className="flex flex-col md:flex-row md:items-baseline gap-6 md:gap-12 relative z-10">
                      <span className="text-xs font-bold text-gray-400 font-display group-hover:text-black transition-colors duration-500">
                        {service.number}
                      </span>
                      <div className="flex-1">
                        <h3 className="font-display text-3xl md:text-5xl font-medium uppercase tracking-tight mb-4 group-hover:translate-x-0 transition-transform duration-500">
                          {service.title}
                        </h3>
                        <p className="text-gray-500 text-sm font-medium uppercase tracking-wide max-w-md group-hover:text-black transition-colors duration-500 leading-loose">
                          {service.description}
                        </p>
                      </div>
                      <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-all duration-500 self-center transform group-hover:-translate-x-4">
                        <ArrowUpRight className="w-8 h-8 stroke-1" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
              <div className="w-full h-px bg-black/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
