import Link from "next/link";

const links = [
  {
    group: "Product",
    items: [
      {
        title: "Features",
        href: "/features", // Updated link
      },
      {
        title: "How It Works", // New title
        href: "/how-it-works", // Updated link
      },
      {
        title: "Pricing", // Moved up for visibility
        href: "/pricing", // Updated link
      },
      {
        title: "Integrations", // New title
        href: "/integrations", // Updated link
      },
      {
        title: "Case Study Library", // New title (linking to the generated content)
        href: "/library", // Updated link
      },
      {
        title: "Demo", // New title
        href: "/schedule-demo", // Updated link
      },
    ],
  },
  {
    group: "Company",
    items: [
      {
        title: "About Us", // Updated title
        href: "/about", // Updated link
      },
      {
        title: "Blog", // Moved up
        href: "/blog", // Updated link
      },
      {
        title: "Careers",
        href: "/careers", // Updated link
      },
      {
        title: "Support / FAQ", // Updated title
        href: "/faq", // Updated link
      },
      {
        title: "Contact Sales", // New title
        href: "/contact", // Updated link
      },
      // Removed generic 'Help' and 'Press'
    ],
  },
  {
    group: "Legal",
    items: [
      {
        title: "Terms of Service", // Updated title
        href: "/terms", // Updated link
      },
      {
        title: "Privacy Policy", // Updated title
        href: "/privacy", // Updated link
      },
      {
        title: "Cookie Policy", // Updated title
        href: "/cookies", // Updated link
      },
      {
        title: "Security & Data", // Updated title
        href: "/security", // Updated link
      },
      // Removed 'Licence' as it's less common for end-user SaaS
    ],
  },
];

export default function FooterSection() {
  return (
    <footer className="bg-background border-b pt-12 lg:pt-24 container">
      <div className="">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <Link href="/" aria-label="go home" className="block size-fit">
              <span className="text-2xl font-semibold">Casevia.io</span>{" "}
              {/* Logo */}
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              The AI-powered platform for agencies and marketers to generate,
              manage, and scale social proof effortlessly.
            </p>
          </div>

          <div className="col-span-3 grid grid-cols-3 gap-6">
            {links.map((link, index) => (
              <div key={index} className="space-y-4">
                <span className="block font-medium">{link.group}</span>
                {link.items.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-muted-foreground hover:text-primary block duration-150"
                  >
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t py-6">
          <span className="text-muted-foreground order-last block text-center text-sm md:order-first">
            © {new Date().getFullYear()} Casevia.io, All rights reserved
          </span>
          <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
            {/* X/Twitter - Updated href to a placeholder for your social handle */}
            <Link
              href="https://x.com/yourcaseviahandle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X/Twitter"
              className="text-muted-foreground hover:text-primary block"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
                ></path>
              </svg>
            </Link>

            {/* LinkedIn - Updated href */}
            <Link
              href="https://linkedin.com/company/casevia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary block"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                ></path>
              </svg>
            </Link>

            {/* Removed Facebook, Threads, and TikTok as they are less common for B2B SaaS in the footer */}
            {/* If you add them back, update the hrefs */}
          </div>
        </div>
      </div>
    </footer>
  );
}
