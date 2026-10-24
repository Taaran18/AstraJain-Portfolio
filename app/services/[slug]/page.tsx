import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertCircle, ArrowRight, Check, ClipboardList } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { FaqList } from "@/components/sections/FaqList";
import { CtaSection } from "@/components/sections/CtaSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { getService, servicePages } from "@/data/services";
import { faqSchema, pageMetadata, serviceSchema } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    keywords: service.keywords,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const path = `/services/${service.slug}`;
  const related = service.related
    .map((r) => getService(r))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Services", path: "/services" },
          { name: service.name, path },
        ]}
        eyebrow={service.navLabel}
        title={service.h1}
        intro={service.intro}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={`/contact?service=${service.slug}#book`} size="lg">
            Book {service.name}
          </ButtonLink>
          <ButtonLink
            href={whatsappLink(
              `Namaste Sachin Jain, I would like to book a ${service.name.toLowerCase()} consultation.\nPreferred date:\nVideo call or phone:`,
            )}
            variant="whatsapp"
            size="lg"
          >
            <WhatsAppIcon /> Ask On WhatsApp
          </ButtonLink>
        </div>
      </PageHero>

      <section className="section" aria-labelledby="problems-heading">
        <div className="container-site grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              id="problems-heading"
              eyebrow="Sound Familiar?"
              title="Why People Book This Consultation"
              className="mb-8"
            />
            <ul className="space-y-4">
              {service.problems.map((p, i) => (
                <Reveal as="li" key={p} delay={i * 0.06} className="card flex gap-3 p-5">
                  <AlertCircle
                    size={20}
                    className="mt-0.5 shrink-0 text-saffron"
                    aria-hidden="true"
                  />
                  <span className="text-fg-muted">{p}</span>
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              eyebrow="What Changes"
              title="What You Get From The Session"
              className="mb-8"
            />
            <ul className="space-y-6">
              {service.outcomes.map((o) => (
                <li key={o.title} className="border-l-2 border-gold pl-5">
                  <h3 className="font-sans text-lg font-semibold tracking-normal">{o.title}</h3>
                  <p className="mt-2 text-fg-muted">{o.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section border-y border-line bg-tint" aria-labelledby="includes-heading">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading id="includes-heading" title="What Is Included" className="mb-6" />
            <ul className="grid gap-3">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check size={20} className="mt-0.5 shrink-0 text-success" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card self-start p-6 md:p-8">
            <h2 className="flex items-center gap-2 text-display-sm">
              <ClipboardList size={22} className="text-gold" aria-hidden="true" /> What To Share
            </h2>
            <ul className="mt-5 space-y-3">
              {service.bring.map((item) => (
                <li key={item} className="flex gap-3 text-fg-muted">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-line pt-5 text-sm text-fg-muted">
              Fee: <strong className="text-fg">{site.consultationFee} per sitting</strong>,
              confirmed when you book. Sessions usually last 45 to 60 minutes.
            </p>
            <ButtonLink
              href={`/contact?service=${service.slug}#book`}
              className="mt-5 w-full sm:w-auto"
            >
              Book {service.name}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-heading">
        <div className="container-site max-w-4xl">
          <SectionHeading id="faq-heading" title={`${service.name}: Common Questions`} />
          <FaqList faqs={service.faqs} />
        </div>
      </section>

      <section className="section pt-0" aria-labelledby="related-heading">
        <div className="container-site">
          <h2 id="related-heading" className="text-display-md">
            Often Booked Together
          </h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/services/${r.slug}`}
                  className="card card-hover group flex h-full items-center justify-between gap-4 p-5"
                >
                  <span className="min-w-0">
                    <span className="block font-sans text-lg font-semibold">{r.shortName}</span>
                    <span className="text-sm text-fg-muted">{r.cardSummary}</span>
                  </span>
                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    className="shrink-0 text-gold transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection />
      <JsonLd
        data={[
          serviceSchema({
            name: `${service.name} in Jaipur`,
            serviceType: service.serviceType,
            description: service.metaDescription,
            path,
          }),
          faqSchema(service.faqs),
        ]}
      />
    </>
  );
}
