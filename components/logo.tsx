import { cn } from "@/lib/utils";

export const Logo = ({ className = "text-xl" }) => (
  <span
    className={cn("font-display tracking-tighter text-zinc-900", className)}
  >
    <span className="font-bold ">casevia</span>
  </span>
);
