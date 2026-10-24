import { cn } from "@/lib/utils";

export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((item) => (
        <li key={item} className="flex items-center">
          <span className="whitespace-nowrap px-6 font-display text-lg font-semibold tracking-[0.12em] md:text-xl">
            {item}
          </span>
          <svg width="14" height="14" viewBox="0 0 64 64" aria-hidden="true" className="text-brand">
            <path
              d="M32 4l6.6 21.4L60 32l-21.4 6.6L32 60l-6.6-21.4L4 32l21.4-6.6z"
              fill="currentColor"
            />
          </svg>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={cn(
        "relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]",
        className,
      )}
    >
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
