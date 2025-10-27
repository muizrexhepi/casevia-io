import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="flex container border-x border-border justify-center items-center flex-col gap-5 py-12 lg:py-20 w-full relative">
      {/* Background Gradient Effect */}
      <div className="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_100%)]"></div>

      {/* Badge */}
      <Badge variant={"outline"} className="text-sm bg-white">
        Productivity | AI-Powered
      </Badge>

      {/* Revised Headline (Slightly smoother transition) */}
      <h1 className="text-4xl md:text-5xl lg:text-7xl tracking-tight text-center font-medium leading-[1em]">
        Automate Your <br />
        <span className="text-muted-foreground">Case Study Pipeline.</span>
      </h1>

      {/* **CRITICALLY SHORTER PARAGRAPH** */}
      <p className="text-center text-muted-foreground max-w-lg">
        Casevia transforms raw client interviews into structured, publish-ready
        case studies.
      </p>

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-2">
        <Button size="lg" variant={"outline"}>
          View Examples
        </Button>
        <Button size="lg">Start for Free</Button>
      </div>

      {/* Product Image */}
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
