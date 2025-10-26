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
      question: "How is usage calculated, and what happens if I hit my limit?",
      answer:
        "Usage is tracked by <strong>uploaded minutes of audio/video</strong> across your entire organization. If you reach your limit, your team can still view and export existing case studies, but you will need to upgrade your plan to upload more files.",
    },
    {
      id: "item-2",
      question: "What file types do you accept for customer interviews?",
      answer:
        "We support all common audio and video formats, including <strong>MP3, MP4, MOV, WAV, and M4A</strong>. Simply drag and drop your files into the Casevia dashboard, and our AI will handle the transcription and analysis.",
    },
    {
      id: "item-3",
      question: "Can I customize the structure of the generated case studies?",
      answer:
        "Yes! While the default structure is the best-practice <strong>Challenge → Solution → Results</strong> format, you can use our in-app editor to customize, refine, and re-order sections before exporting.",
    },
    {
      id: "item-4",
      question: "How secure is my data and who manages user authentication?",
      // FIX APPLIED: Using <strong> tags instead of **
      answer:
        "Your data is highly secure. Customer data is stored privately via <strong>Supabase</strong>. We use <strong>Better Auth</strong> for enterprise-grade login and organization management, ensuring team data is segmented and protected.",
    },
    {
      id: "item-5",
      question: "Do you offer a plan for a solo professional or freelancer?",
      answer:
        "Yes, our <strong>Free tier</strong> is perfect for solo users who need occasional social proof. Our <strong>Starter Plan</strong> is cost-effective and removes the Casevia watermark for professional use.",
    },
  ];

  return (
    <section className="py-16 md:py-24 border-x container">
      <div className="mx-auto max-w-2xl px-6">
        <div className="space-y-12">
          <h2 className="text-foreground text-center text-4xl font-semibold">
            Your questions answered
          </h2>

          <Accordion type="single" collapsible className="-mx-2 sm:mx-0">
            {faqItems.map((item) => (
              <div className="group" key={item.id}>
                <AccordionItem
                  value={item.id}
                  className="data-[state=open]:bg-muted peer rounded-xl border-none px-5 py-1 data-[state=open]:border-none md:px-7"
                >
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {/* NOTE: You will need to use dangerouslySetInnerHTML here 
                       to render the <strong> tags from the string.
                       If you cannot use dangerouslySetInnerHTML, you should 
                       change the 'answer' property to be a JSX element (ReactNode).
                       
                       Assuming you can use dangerouslySetInnerHTML for this common pattern:
                    */}
                    <p
                      className="text-base"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    ></p>
                  </AccordionContent>
                </AccordionItem>
                <hr className="mx-5 -mb-px group-last:hidden peer-data-[state=open]:opacity-0 md:mx-7" />
              </div>
            ))}
          </Accordion>

          <p className="text-muted-foreground text-center">
            Can't find what you're looking for? Contact our{" "}
            <Link
              href="/support"
              className="text-primary font-medium hover:underline"
            >
              customer support team
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
