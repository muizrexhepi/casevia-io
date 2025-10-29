import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowUp,
  CalendarCheck,
  Globe,
  Layout,
  Play,
  Plus,
  Signature,
  Sparkles,
  Target,
} from "lucide-react";
import Image from "next/image";

const MESCHAC_AVATAR = "https://avatars.githubusercontent.com/u/47919550?v=4";
const BERNARD_AVATAR = "https://avatars.githubusercontent.com/u/31113941?v=4";
const THEO_AVATAR = "https://avatars.githubusercontent.com/u/68236786?v=4";
const GLODIE_AVATAR = "https://avatars.githubusercontent.com/u/99137927?v=4";

export default function FeaturesSection() {
  return (
    <section className="border-x container">
      <div className="py-12 lg:py-24">
        <div className="p-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* 1️⃣ Case Study Generation */}
            <Card className="col-span-full overflow-hidden pl-6 pt-6">
              <Layout className="text-primary size-5" />
              <h3 className="text-foreground mt-5 text-lg font-semibold">
                AI-Powered Case Study Generation
              </h3>
              <p className="text-muted-foreground mt-3 max-w-xl text-balance">
                Upload your interview or call recording, and Casevia instantly
                transforms it into a structured, publish-ready case study —
                built around your client’s{" "}
                <strong>Challenge, Solution, and Results</strong>.
              </p>
              <div className="mask-b-from-95% -ml-2 -mt-2 mr-0.5 pl-2 pt-2">
                <div className="bg-background rounded-tl-(--radius) ring-foreground/5 relative mx-auto mt-8 h-96 overflow-hidden border border-transparent shadow ring-1">
                  <Image
                    src="/mist/tailark-2.png"
                    alt="Casevia AI case study generation preview"
                    width="2880"
                    height="1842"
                    className="object-top-left h-full object-cover"
                  />
                </div>
              </div>
            </Card>

            {/* 2️⃣ Interview Summarization */}
            <Card className="overflow-hidden p-6">
              <Target className="text-primary size-5" />
              <h3 className="text-foreground mt-5 text-lg font-semibold">
                AI Interview Summarization
              </h3>
              <p className="text-muted-foreground mt-3 text-balance">
                Casevia extracts key insights, quotes, and takeaways from long
                interviews — turning hours of dialogue into clear, story-ready
                highlights in seconds.
              </p>

              <MeetingIllustration />
            </Card>

            {/* 3️⃣ AI Editing */}
            <Card className="group overflow-hidden px-6 pt-6">
              <CalendarCheck className="text-primary size-5" />
              <h3 className="text-foreground mt-5 text-lg font-semibold">
                Smart Narrative Polishing
              </h3>
              <p className="text-muted-foreground mt-3 text-balance">
                Your content automatically adapts to your brand voice and tone —
                polished for clarity, credibility, and SEO, ready for instant
                export or team review.
              </p>

              <CodeReviewIllustration />
            </Card>

            {/* 4️⃣ AI Assistant */}
            <Card className="group overflow-hidden px-6 pt-6">
              <Sparkles className="text-primary size-5" />
              <h3 className="text-foreground mt-5 text-lg font-semibold">
                Context-Aware AI Assistant
              </h3>
              <p className="text-muted-foreground mt-3 text-balance">
                Ask Casevia’s AI anything — from headline suggestions to content
                rewrites. It understands your project context and keeps your
                messaging consistent across every case study.
              </p>

              <div className="mask-b-from-50 -mx-2 -mt-2 px-2 pt-2">
                <AIAssistantIllustration />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

const MeetingIllustration = () => {
  return (
    <Card aria-hidden className="mt-9 aspect-video p-4">
      <div className="mb-0.5 text-sm font-semibold">Interview Insights</div>
      <div className="mb-4 flex gap-2 text-sm">
        <span className="text-muted-foreground">
          “What was your biggest challenge?”
        </span>
      </div>
      <div className="mb-2 flex -space-x-1.5">
        {[
          { src: MESCHAC_AVATAR, alt: "Client A" },
          { src: BERNARD_AVATAR, alt: "Client B" },
          { src: THEO_AVATAR, alt: "Client C" },
          { src: GLODIE_AVATAR, alt: "Client D" },
        ].map((avatar, index) => (
          <div
            key={index}
            className="bg-background size-7 rounded-full border p-0.5 shadow shadow-zinc-950/5"
          >
            <img
              className="aspect-square rounded-full object-cover"
              src={avatar.src}
              alt={avatar.alt}
              height="460"
              width="460"
            />
          </div>
        ))}
      </div>
      <div className="text-muted-foreground text-sm font-medium">
        Key moments extracted automatically.
      </div>
    </Card>
  );
};

const CodeReviewIllustration = () => {
  return (
    <div aria-hidden className="relative mt-6">
      <Card className="aspect-video w-4/5 translate-y-4 p-3 transition-transform duration-200 ease-in-out group-hover:-rotate-3">
        <div className="mb-3 flex items-center gap-2">
          <div className="bg-background size-6 rounded-full border p-0.5 shadow shadow-zinc-950/5">
            <img
              className="aspect-square rounded-full object-cover"
              src={MESCHAC_AVATAR}
              alt="Editor Avatar"
              height="460"
              width="460"
            />
          </div>
          <span className="text-muted-foreground text-sm font-medium">
            Casevia Editor
          </span>

          <span className="text-muted-foreground/75 text-xs">2m</span>
        </div>

        <div className="ml-8 space-y-2">
          <div className="bg-foreground/10 h-2 rounded-full"></div>
          <div className="bg-foreground/10 h-2 w-3/5 rounded-full"></div>
          <div className="bg-foreground/10 h-2 w-1/2 rounded-full"></div>
        </div>

        <Signature className="ml-8 mt-3 size-5" />
      </Card>
      <Card className="aspect-3/5 absolute -top-4 right-0 flex w-2/5 translate-y-4 p-2 transition-transform duration-200 ease-in-out group-hover:rotate-3">
        <div className="bg-foreground/5 m-auto flex size-10 rounded-full">
          <Play className="fill-foreground/50 stroke-foreground/50 m-auto size-4" />
        </div>
      </Card>
    </div>
  );
};

const AIAssistantIllustration = () => {
  return (
    <Card
      aria-hidden
      className="mt-6 aspect-video translate-y-4 p-4 pb-6 transition-transform duration-200 group-hover:translate-y-0"
    >
      <div className="w-fit">
        <Sparkles className="size-3.5 fill-purple-300 stroke-purple-300" />
        <p className="mt-2 line-clamp-2 text-sm">
          Suggest a stronger headline for this customer success story.
        </p>
      </div>
      <div className="bg-foreground/5 -mx-3 -mb-3 mt-3 space-y-3 rounded-lg p-3">
        <div className="text-muted-foreground text-sm">Ask Casevia AI</div>

        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="size-7 rounded-2xl bg-transparent shadow-none"
            >
              <Plus />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="size-7 rounded-2xl bg-transparent shadow-none"
            >
              <Globe />
            </Button>
          </div>

          <Button size="icon" className="size-7 rounded-2xl bg-black">
            <ArrowUp strokeWidth={3} />
          </Button>
        </div>
      </div>
    </Card>
  );
};
