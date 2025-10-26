import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="flex container border-x border-border justify-center items-center flex-col gap-5 py-12 lg:py-20 w-full relative">
      <div className="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_100%)]"></div>

      <Badge variant={"outline"} className="text-base md:text-sm px-3 bg-white">
        We are hiring
      </Badge>
      <h1 className="text-4xl md:text-5xl lg:text-7xl tracking-tight text-center font-medium leading-[1em]">
        AI search analytics <br />
        <span className="text-foreground/60">for marketing teams</span>
      </h1>
      <p className="text-center text-muted-foreground max-w-lg">
        Track, analyze, and improve brand performance on AI search platforms
        through key metrics like Visibility , Position , and Sentiment
      </p>
      <div className="flex items-center justify-center gap-4 ">
        <Button size="lg" variant={"outline"}>
          Contact Sales
        </Button>
        <Button size="lg">Get Started</Button>
      </div>
      <div className="w-full h-[500px] rounded-lg mt-12 bg-accent relative">
        <Image src={"/images/bg.webp"} alt="background image" fill />
      </div>
    </section>
  );
}
