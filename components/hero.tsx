import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="flex container border-x border-border justify-center items-center flex-col gap-5 py-12 lg:py-20 w-full relative">
      <div className="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_100%)]"></div>

      <Badge variant={"outline"} className="text-base md:text-sm px-3 bg-white">
        Productivity | AI-Powered
      </Badge>
      <h1 className="text-4xl md:text-5xl lg:text-7xl tracking-tight text-center font-medium leading-[1em]">
        Turn Interviews into <br />
        <span className="text-foreground/60">Professional Case Studies.</span>
      </h1>
      <p className="text-center text-muted-foreground max-w-lg">
        Casevia is the AI platform that automatically transforms client
        interviews into publish-ready, structured business case studies in
        minutes, not weeks.
      </p>
      <div className="flex items-center justify-center gap-4 ">
        <Button size="lg" variant={"outline"}>
          View Case Study Examples
        </Button>
        <Button size="lg">Start for Free</Button>
      </div>
      <div className="w-full h-full rounded-lg mt-12 relative [mask-image:radial-gradient(ellipse_100%_70%_at_50%_30%,#000_80%,transparent_100%)]">
        <Image
          src={"/images/image.png"}
          alt="Casevia product dashboard screenshot"
          width={1920}
          height={1080}
          className="object-contain rounded-lg h-60] w-full"
        />
      </div>
    </section>
  );
}
