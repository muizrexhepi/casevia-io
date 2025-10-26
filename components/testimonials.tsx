import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  // --- Casevia Testimonials (All Updated) ---

  {
    name: "Maria K.",
    role: "Director of Content, Digital Agency",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    quote:
      "Casevia is an operational game-changer. We cut our case study production time from 10 days to under an hour, freeing up our senior writers for client work.",
  },
  {
    name: "Alex P.",
    role: "Freelance B2B Consultant",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    quote:
      "The Free tier gave me the exact social proof I needed immediately. Now I'm on Starter, and the professional PDF export without the watermark is worth every penny.",
  },
  {
    name: "David R.",
    role: "Marketing & Growth Team Lead",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    quote:
      "Inconsistency was killing us. Now, every single case study follows the perfect Challenge → Solution → Results structure, thanks to the AI analysis (GPT-4o).",
  },
  {
    name: "Jenna L.",
    role: "Mid-Market Agency Owner",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    quote:
      "The Agency plan handles our volume easily. Being able to upload 50 files a month and get them processed asynchronously is critical for scaling our content.",
  },
  {
    name: "Sam T.",
    role: "Solo Professional",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    quote:
      "Uploading an MP4 interview and getting a Markdown file ready for my CMS is magic. It's the fastest way to get high-quality content on my site.",
  },
  {
    name: "Lisa H.",
    role: "B2B Startup Content Manager",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    quote:
      "The **SEO-friendly post export** on the Pro plan is invaluable. We generate the content, export it, and the AI has already handled the title and slug optimization.",
  },
  {
    name: "Zeki B.",
    role: "Founder, Enterprise Project",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    quote:
      "For structured internal documentation, Casevia is unmatched. The ability to use different templates standardizes our storytelling at scale.",
  },
  {
    name: "Joseph K.",
    role: "Consulting Firm Partner",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    quote:
      "The fact that my team can collaborate, see shared usage limits, and manage everything from the dashboard is exactly what we needed for operational control.",
  },

  // --- LAST FOUR TESTIMONIALS FIX APPLIED HERE ---
  {
    name: "Khatab W.",
    role: "Agency Content Lead",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    quote:
      "Casevia is the most elegant solution I've found for automating the case study pipeline. It saves us nearly $10,000 a month in freelance writing fees alone.",
  },
  {
    name: "Rodrigo A.",
    role: "Founder, Marketing Stack",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    quote:
      "The secure library built on **Supabase** is fantastic. We never worry about losing our client proof, and the search function makes repurposing content a breeze.",
  },
  {
    name: "Eric A.",
    role: "Product Marketing Manager",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    quote:
      "I'm a PMM, not a writer, but Casevia lets me generate high-quality drafts myself. It's the perfect tool for non-writers who need to quickly document client success.",
  },
  {
    name: "Roland T.",
    role: "B2B Sales Enablement",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    quote:
      "The speed of the transcription and analysis is incredible. It takes raw audio and gives me a refined, persuasive narrative that I can immediately share with our sales team.",
  },
];

const chunkArray = (
  array: Testimonial[],
  chunkSize: number
): Testimonial[][] => {
  const result: Testimonial[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const testimonialChunks = chunkArray(
  testimonials,
  Math.ceil(testimonials.length / 3)
);

export default function TestimonialsSection() {
  return (
    <section className="relative container border-x">
      <div className="py-12 lg:py-24">
        <div className="mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-semibold">
              The Social Proof Engine Trusted by Pros
            </h2>
            <p className="mt-6 text-muted-foreground">
              Casevia delivers consistent, high-quality case studies—the
              essential social proof—without the usual time and cost
              bottlenecks.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3 [mask-image:radial-gradient(ellipse_90%_50%_at_50%_50%,#000_70%,transparent_100%)] bg-muted p-2">
            {testimonialChunks.map((chunk, chunkIndex) => (
              <div key={chunkIndex} className="space-y-3">
                {chunk.map(({ name, role, quote, image }, index) => (
                  <Card key={index}>
                    <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                      <Avatar className="size-9">
                        <AvatarImage
                          alt={name}
                          src={image}
                          loading="lazy"
                          width="120"
                          height="120"
                        />
                        <AvatarFallback>
                          {/* Simple fallback using first letters of first two words of the name */}
                          {name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .substring(0, 2)
                            .toUpperCase()}
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <h3 className="font-medium">{name}</h3>

                        <span className="text-muted-foreground block text-sm tracking-wide">
                          {role}
                        </span>

                        <blockquote className="mt-3">
                          <p className="text-gray-700 dark:text-gray-300">
                            {quote}
                          </p>
                        </blockquote>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
