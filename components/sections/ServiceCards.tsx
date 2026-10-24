import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { servicePages } from "@/data/services";

export function ServiceCards({ exclude = [] }: { exclude?: string[] }) {
  const items = servicePages.filter((s) => !exclude.includes(s.slug));
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((s, i) => {
        const Icon = s.icon;
        return (
          <Reveal as="li" key={s.slug} delay={(i % 3) * 0.08}>
            <Link
              href={`/services/${s.slug}`}
              className="card-premium card-hover group relative flex h-full flex-col p-6 md:p-7"
            >
              <span className="flex items-start justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-soft text-gold">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <span
                  aria-hidden="true"
                  className="font-display text-2xl font-bold text-line-strong/60"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </span>
              <h3 className="mt-5 text-xl">{s.shortName}</h3>
              <p className="mt-2 flex-1 text-[0.95rem] text-fg-muted">{s.cardSummary}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                {s.cardLink}
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          </Reveal>
        );
      })}
    </ul>
  );
}
