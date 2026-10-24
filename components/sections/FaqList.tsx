import { ChevronDown } from "lucide-react";
import type { Faq } from "@/data/services";

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-line rounded-card border border-line bg-card">
      {faqs.map((faq) => (
        <details key={faq.q} className="group px-5 md:px-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
            <h3 className="font-sans text-base font-semibold tracking-normal md:text-lg">
              {faq.q}
            </h3>
            <ChevronDown
              size={20}
              aria-hidden="true"
              className="shrink-0 text-gold transition-transform group-open:rotate-180"
            />
          </summary>
          <p className="pb-5 text-fg-muted">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
