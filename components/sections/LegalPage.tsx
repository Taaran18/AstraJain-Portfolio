import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { site } from "@/lib/site";

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms Of Service" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export type LegalSection = {
  id: string;
  title: string;
  body: React.ReactNode;
};

type LegalPageProps = {
  title: string;
  path: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
};

export function LegalPage({ title, path, intro, updated, sections }: LegalPageProps) {
  return (
    <>
      <PageHero crumbs={[{ name: title, path }]} eyebrow="Legal" title={title} intro={intro}>
        <p className="text-sm text-fg-subtle">Last updated: {updated}</p>
      </PageHero>
      <section className="section">
        <div className="container-site grid gap-10 lg:grid-cols-[16rem_1fr] lg:gap-16">
          <nav aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-fg-subtle">
              On This Page
            </p>
            <ol className="mt-4 space-y-1 text-sm">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="inline-block py-1 text-fg-muted hover:text-gold">
                    {i + 1}. {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="max-w-prose space-y-10">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`}>
                <h2 id={`${s.id}-title`} className="text-display-sm">
                  {i + 1}. {s.title}
                </h2>
                <div className="prose-site mt-4 [&_a:hover]:underline [&_a]:font-semibold [&_a]:text-gold [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">
                  {s.body}
                </div>
              </section>
            ))}
            <div className="card p-6">
              <h2 className="text-display-sm">Questions About This Page?</h2>
              <p className="mt-2 text-fg-muted">
                Email{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-semibold text-gold hover:underline"
                >
                  {site.email}
                </a>
                , call{" "}
                <a
                  href={`tel:${site.phones[0].tel}`}
                  className="font-semibold text-gold hover:underline"
                >
                  {site.phones[0].display}
                </a>
                . You can also read our{" "}
                {legalLinks
                  .filter((l) => l.href !== path)
                  .map((l, i) => (
                    <span key={l.href}>
                      {i > 0 && " and "}
                      <Link href={l.href} className="font-semibold text-gold hover:underline">
                        {l.label}
                      </Link>
                    </span>
                  ))}
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
