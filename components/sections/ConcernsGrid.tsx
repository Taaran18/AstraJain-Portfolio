import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { concerns } from "@/data/concerns";

export function ConcernsGrid() {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {concerns.map((c, i) => {
        const Icon = c.icon;
        return (
          <Reveal as="li" key={c.title} delay={(i % 3) * 0.08}>
            <Link href={c.href} className="card card-hover group flex h-full flex-col gap-4 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-violet-soft text-violet">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="font-sans text-lg font-semibold tracking-normal">{c.title}</h3>
              </div>
              <p className="flex-1 text-[0.95rem] text-fg-muted">{c.body}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                {c.cta}
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
