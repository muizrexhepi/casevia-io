"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function FAQs() {
  const faqItems = [
    {
      id: "item-1",
      question: "Do I need to transcribe my interviews first?",
      answer:
        "Nope! Just upload the raw audio or video file. Casevia automatically transcribes it using AssemblyAI, then structures everything into a case study. You don't touch the transcript unless you want to.",
    },
    {
      id: "item-2",
      question:
        "Will this actually sound like my brand, or generic AI content?",
      answer:
        "You control the tone. Set your brand voice once (professional, casual, technical, etc.), and Casevia maintains it across all case studies. You can also edit any section before publishing—it's a starting point, not a final draft.",
    },
    {
      id: "item-3",
      question:
        "What if my client said something confidential in the interview?",
      answer:
        "You can review and edit everything before exporting. Remove sensitive info, adjust quotes, or regenerate specific sections. Your client never sees anything until you send them the final version.",
    },
    {
      id: "item-4",
      question: "How long does it take to get a case study?",
      answer:
        "About 10 minutes for a 30-minute interview. Upload → AI processes (5-8 min) → Review and edit (2-5 min) → Export. Way faster than the days or weeks it takes to write one manually.",
    },
    {
      id: "item-5",
      question: "Can I try it before paying?",
      answer:
        "Yes! The Free plan gives you 1 case study per month (up to 10 minutes of video). No credit card required. Perfect for testing the workflow before upgrading.",
    },
    {
      id: "item-6",
      question: "What formats can I export to?",
      answer:
        "Markdown (for your CMS/blog), PDF (for client presentations), and HTML with SEO meta tags. Pro users also get automatic LinkedIn and X post snippets generated from each case study.",
    },
  ];

  return (
    <section className="py-12 md:py-24 container">
      <div className="mx-auto max-w-2xl">
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl tracking-tight leading-[1] text-balance text-center">
            Questions you're probably asking
          </h2>

          <Accordion type="single" collapsible className="-mx-2 sm:mx-0">
            {faqItems.map((item) => (
              <div className="group" key={item.id}>
                <AccordionItem
                  value={item.id}
                  className="data-[state=open]:bg-muted peer rounded-xl border-none px-5 py-1 data-[state=open]:border-none md:px-7"
                >
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <hr className="mx-5 -mb-px group-last:hidden peer-data-[state=open]:opacity-0 md:mx-7" />
              </div>
            ))}
          </Accordion>

          <p className="text-muted-foreground text-center">
            Still have questions?{" "}
            <Link
              href="/contact"
              className="text-primary font-medium hover:underline"
            >
              Talk to us
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
