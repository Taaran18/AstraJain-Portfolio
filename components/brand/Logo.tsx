import { LogoMark } from "@/components/brand/LogoMark";
import { cn } from "@/lib/utils";

type LogoProps = {
  idPrefix: string;
  size?: "md" | "lg";
  compact?: boolean;
  className?: string;
};

export function Logo({ idPrefix, size = "md", compact = false, className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 sm:gap-3", className)}>
      <LogoMark
        idPrefix={idPrefix}
        size={size === "lg" ? 56 : 44}
        className={
          size === "lg"
            ? "h-14 w-14"
            : compact
              ? "h-9 w-9 lg:h-10 lg:w-10"
              : "h-10 w-10 lg:h-11 lg:w-11"
        }
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display font-bold tracking-[0.14em]",
            size === "lg"
              ? "text-[1.7rem]"
              : compact
                ? "text-[1.1rem] sm:text-[1.25rem] lg:text-[1.35rem]"
                : "text-[1.3rem] lg:text-[1.45rem]",
          )}
        >
          <span className="text-gold-sheen">ASTRO</span>
          <span className="text-fg">JAIN</span>
        </span>
        <span
          className={cn(
            "mt-1.5 font-sans font-semibold uppercase tracking-[0.28em] text-fg-subtle",
            size === "lg" ? "text-[0.68rem]" : "text-[0.56rem] lg:text-[0.6rem]",
            compact && "hidden min-[400px]:block",
          )}
        >
          Vedic Astrology · Jaipur
        </span>
      </span>
    </span>
  );
}
