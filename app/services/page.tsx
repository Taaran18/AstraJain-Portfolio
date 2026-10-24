import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, IndianRupee, Sparkles } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FaqList } from "@/components/sections/FaqList";
import { CtaSection } from "@/components/sections/CtaSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { servicePages } from "@/data/services";
import { additionalServices, generalFaqs } from "@/data/faqs";
import { faqSchema, pageMetadata, serviceListSchema } from "@/lib/seo";
import { site } from "@/lib/site";

const path = "/services";

export const metadata: Metadata = pageMetadata({
  title: "Astrology Services In Jaipur And Online",
  description:
    "Kundli matching, face reading, horoscope, numerology, Vastu, gemstones and palmistry with Sachin Jain. Online, ₹1,100 per sitting.",
  path,
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Services", path }]}
        eyebrow="Consultations"
        title="Astrology Services In Jaipur For The Questions That Keep You Up At Night"
        intro="Choose the consultation that fits your question. Not sure which one? Book a general consultation and Sachin Jain will cover what matters most."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact#book" size="lg">
            Book A Consultation
          </ButtonLink>
          <p className="flex items-center gap-2 text-fg-muted">
            <IndianRupee size={18} className="text-gold" aria-hidden="true" />
            {site.consultationFee} per sitting, online by video, phone or WhatsApp
          </p>
        </div>
      </PageHero>

      <section className="section" aria-label="All consultations">
        <div className="container-site">
          <ul className="grid gap-6 md:grid-cols-2">
            {servicePages.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal as="li" key={s.slug} delay={(i % 2) * 0.08}>
                  <article className="card flex h-full flex-col p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-soft text-gold">
                        <Icon size={24} aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <h2 className="text-display-sm">
                          <Link href={`/services/${s.slug}`} className="hover:text-gold">
                            {s.shortName}
                          </Link>
                        </h2>
                        <p className="mt-1 text-fg-muted">{s.cardSummary}</p>
                      </div>
                    </div>
                    <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-fg-subtle">
                      Right for you if
                    </p>
                    <ul className="mt-3 flex-1 space-y-2">
                      {s.problems.slice(0, 3).map((p) => (
                        <li key={p} className="flex gap-2.5 text-[0.95rem] text-fg-muted">
                          <Check
                            size={18}
                            className="mt-0.5 shrink-0 text-success"
                            aria-hidden="true"
                          />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <ButtonLink href={`/services/${s.slug}`} variant="secondary">
                        About {s.name} <ArrowRight size={16} aria-hidden="true" />
                      </ButtonLink>
                      <ButtonLink href={`/contact?service=${s.slug}#book`} variant="ghost">
                        Book This Consultation
                      </ButtonLink>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </ul>

          <div className="card mt-10 p-6 md:p-8">
            <h2 className="flex items-center gap-2 text-display-sm">
              <Sparkles size={22} className="text-gold" aria-hidden="true" /> Also Available
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {additionalServices.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-line-strong px-4 py-2 text-sm text-fg-muted"
                >
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-fg-muted">
              Ask about any of these when you{" "}
              <Link href="/contact#book" className="font-semibold text-gold hover:underline">
                book your consultation
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="section border-y border-line bg-tint" aria-labelledby="process-heading">
        <div className="container-site">
          <SectionHeading
            id="process-heading"
            eyebrow="How It Works"
            title="What Happens After You Book"
          />
          <ProcessSteps />
        </div>
      </section>

      <section className="section" aria-labelledby="faq-heading">
        <div className="container-site max-w-4xl">
          <SectionHeading id="faq-heading" eyebrow="Questions" title="Fees, Timing And Privacy" />
          <FaqList faqs={generalFaqs} />
        </div>
      </section>

      <CtaSection />
      <JsonLd
        data={[
          serviceListSchema(
            servicePages.map((s) => ({ name: s.shortName, path: `/services/${s.slug}` })),
          ),
          faqSchema(generalFaqs),
        ]}
      />
    </>
  );
}
