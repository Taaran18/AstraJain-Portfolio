import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

type Crumb = { name: string; path: string };

type PageHeroProps = {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  crumbs: Crumb[];
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, intro, crumbs, children }: PageHeroProps) {
  return (
    <section className="bg-cosmic relative isolate overflow-hidden border-b border-line">
      <div className="container-site relative py-12 md:py-16 lg:py-20">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-fg-muted">
            <li>
              <Link href="/" className="hover:text-gold">
                Home
              </Link>
            </li>
            {crumbs.map((c, i) => (
              <li key={c.path} className="flex items-center gap-1">
                <ChevronRight size={14} aria-hidden="true" className="text-fg-subtle" />
                {i === crumbs.length - 1 ? (
                  <span aria-current="page" className="font-medium text-fg">
                    {c.name}
                  </span>
                ) : (
                  <Link href={c.path} className="hover:text-gold">
                    {c.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="max-w-4xl text-display-xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-fg-muted md:text-xl">{intro}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
      <JsonLd data={breadcrumbSchema(crumbs)} />
    </section>
  );
}
