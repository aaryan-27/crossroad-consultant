import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}: Props) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span className={cn("eyebrow mb-4", align === "center" && "justify-center")}>
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-3xl leading-tight text-balance sm:text-4xl md:text-[2.75rem]",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed text-pretty md:text-lg",
            light ? "text-white/70" : "text-ink/65"
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
