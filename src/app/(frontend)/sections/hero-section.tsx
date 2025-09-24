import { cn } from "../lib/cn";

interface HeroSectionProps {
  className?: string;
  text: string;
}

export default function HeroSection({ className, text }: HeroSectionProps) {
  return (
    <div className={cn("flex flex-col gap-20 md:justify-between p", className)}>
      <img src="ivkovic.svg" className="w-full" />
      <p className="text-3xl font-medium md:text-5xl">{text}</p>
    </div>
  );
}
