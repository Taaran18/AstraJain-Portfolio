import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Quote } from "lucide-react";
import { PhoneIcon } from "@/components/ui/BrandIcon";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { ConcernsGrid } from "@/components/sections/ConcernsGrid";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqList } from "@/components/sections/FaqList";
import { CtaSection } from "@/components/sections/CtaSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { CountUp } from "@/components/ui/CountUp";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { JsonLd } from "@/components/seo/JsonLd";
import { generalFaqs } from "@/data/faqs";
import { audiences, disciplines, lenses, promises } from "@/data/home";
import { testimonials } from "@/data/testimonials";
import { faqSchema, pageMetadata } from "@/lib/seo";
import { primaryPhone, site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Best Astrologer In Jaipur – Sachin Jain | AstroJain",
  description:
    "Kundli matching, marriage, career and money answers from Sachin Jain, Jaipur astrologer with 40 years of practice. ₹1,100, online.",
  path: "/",
  absoluteTitle: true,
});

const numbers = [
  { to: 40, suffix: "", label: "Years of practice" },
  { to: 5000, suffix: "+", label: "Clients guided" },
  { to: 7, suffix: "", label: "Disciplines combined" },
  { to: 1100, prefix: "₹", suffix: "", label: "Fixed consultation fee" },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section aria-label="Disciplines" className="border-b border-line bg-night py-5 text-cream">
        <Marquee items={disciplines} />
      </section>

      <section className="section" aria-labelledby="concerns-heading">
        <div className="container-site">
          <SectionHeading
            id="concerns-heading"
            eyebrow="What Brings People To Sachin Jain"
            title={
              <>
                Is One Of These <span className="accent">holding you back?</span>
              </>
            }
            description="Most people arrive with one urgent question they have carried for months. Start with the one that weighs on you most."
          />
          <ConcernsGrid />
        </div>
      </section>

      <section className="section border-y border-line bg-tint" aria-labelledby="lenses-heading">
        <div className="container-site grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:col-span-5">
            <SectionHeading
              id="lenses-heading"
              eyebrow="The AstroJain Method"
              title={
                <>
                  Five Lenses. <span className="accent">One clear answer.</span>
                </>
              }
              description="Most astrologers rely on a single chart. Sachin Jain reads up to five independent sources and only tells you what they agree on, which is why his readings feel specific instead of vague."
              className="mb-8"
            />
            <Reveal className="relative hidden aspect-[4/3] overflow-hidden rounded-card border border-line shadow-lift sm:block">
              <Image
                src="/images/sachin-jain-astrologer-consultation-desk.jpg"
                alt="Sachin Jain preparing a reading at his desk"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover object-[50%_35%]"
              />
            </Reveal>
          </div>
          <ol className="space-y-4 lg:col-span-7">
            {lenses.map((lens, i) => {
              const Icon = lens.icon;
              return (
                <Reveal as="li" key={lens.title} delay={i * 0.06}>
                  <Link
                    href={lens.href}
                    className="card-premium card-hover group grid grid-cols-[auto_1fr_auto] items-start gap-4 p-5 sm:gap-6 sm:p-7"
                  >
                    <span className="font-display text-3xl font-bold leading-none text-gold/70 sm:text-4xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="flex items-center gap-2.5">
                        <Icon size={20} aria-hidden="true" className="text-saffron" />
                        <span className="font-display text-xl font-semibold">{lens.title}</span>
                      </span>
                      <span className="mt-2 block text-fg-muted">{lens.reveals}</span>
                    </span>
                    <ArrowUpRight
                      size={20}
                      aria-hidden="true"
                      className="text-fg-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
                    />
                  </Link>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="services-heading">
        <div className="container-site">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              id="services-heading"
              eyebrow="Consultations"
              title={
                <>
                  Astrology Services <span className="accent">in Jaipur and online</span>
                </>
              }
              description="Every consultation starts from your own birth details and ends with practical next steps."
              className="md:mb-12"
            />
            <ButtonLink
              href="/services"
              variant="secondary"
              className="mb-10 self-start md:mb-12 md:self-auto"
            >
              Compare All Consultations <ArrowRight size={16} aria-hidden="true" />
            </ButtonLink>
          </div>
          <ServiceCards exclude={["palmistry"]} />
        </div>
      </section>

      <section className="section border-y border-line bg-tint" aria-labelledby="about-heading">
        <div className="container-site">
          <SectionHeading
            id="about-heading"
            eyebrow="Meet Your Astrologer"
            title={
              <>
                Sachin Jain: <span className="accent">honest guidance, not fear</span>
              </>
            }
            className="max-w-none"
          />
        </div>
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-lg lg:mx-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-card border border-line shadow-lift">
              <Image
                src="/images/sachin-jain-traditional-attire.jpg"
                alt="Sachin Jain in traditional dress"
                fill
                sizes="(min-width: 1024px) 512px, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <figure className="card-premium relative p-6 md:p-8">
              <Quote size={28} aria-hidden="true" className="text-gold" />
              <blockquote className="mt-3 font-serif text-2xl font-medium leading-snug text-fg md:text-[1.7rem]">
                The stars do not compel, they impel. My purpose is to help you understand the forces
                at work in your life and guide you toward your highest expression.
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-saffron">
                Sachin Jain
              </figcaption>
            </figure>
            <div className="prose-site mt-8 max-w-none text-lg">
              <p>
                For {site.experience}, Sachin Jain has studied Vedic Jyotish, face reading,
                palmistry, numerology and Vastu Shastra. Families across Jaipur and India consult
                him before marriages, career moves, business decisions and property purchases.
              </p>
              <p>
                You will not be frightened with talk of doshas or pushed into expensive rituals. He
                reads carefully, explains plainly in Hindi or English, and suggests only the
                remedies that are really needed.
              </p>
            </div>
            <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
              {numbers.map((n) => (
                <div key={n.label} className="flex flex-col-reverse bg-card px-3 py-5 text-center">
                  <dt className="mt-1 text-xs text-fg-muted sm:text-sm">{n.label}</dt>
                  <dd className="font-display text-2xl font-bold text-gold md:text-3xl">
                    <CountUp to={n.to} prefix={n.prefix} suffix={n.suffix} />
                  </dd>
                </div>
              ))}
            </dl>
            <ButtonLink href="/about" variant="secondary" className="mt-8">
              Read Sachin Jain&apos;s Story <ArrowRight size={16} aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="audience-heading">
        <div className="container-site">
          <SectionHeading
            id="audience-heading"
            eyebrow="Who Consults Sachin Jain"
            title={
              <>
                People who need a decision, <span className="accent">not a prediction</span>
              </>
            }
            description="Clients come at turning points, when the next step matters and guessing is too expensive."
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((a, i) => {
              const Icon = a.icon;
              return (
                <Reveal as="li" key={a.title} delay={(i % 3) * 0.08}>
                  <Link href={a.href} className="card card-hover group flex h-full flex-col p-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-soft text-gold">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-sans text-lg font-semibold tracking-normal">
                      {a.title}
                    </h3>
                    <p className="mt-2 flex-1 text-[0.95rem] text-fg-muted">{a.body}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                      See How He Helps
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
        </div>
      </section>

      <section
        className="relative isolate overflow-hidden bg-night py-16 text-cream md:py-24"
        aria-labelledby="promise-heading"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-0 -z-10 h-96 w-96 rounded-full bg-[#5b3cc4]/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-96 w-96 rounded-full bg-brand/15 blur-3xl"
        />
        <div className="container-site">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="eyebrow text-[#ff9f43]">The AstroJain Promise</p>
            <h2 id="promise-heading" className="text-display-lg text-cream">
              Astrology without the fear <span className="accent text-brand">or the upselling</span>
            </h2>
            <p className="mt-4 text-lg text-cream/75">
              Many clients come to us after readings that were vague, frightening or followed by
              costly pujas. These five commitments are why they stay.
            </p>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-card border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {promises.map((p) => {
              const Icon = p.icon;
              return (
                <li key={p.title} className="bg-night-800 p-6 md:p-7">
                  <Icon size={24} aria-hidden="true" className="text-brand" />
                  <h3 className="mt-4 font-sans text-base font-semibold tracking-normal text-cream md:text-lg">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-cream/70 md:text-[0.95rem]">{p.body}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="process-heading">
        <div className="container-site">
          <SectionHeading
            id="process-heading"
            eyebrow="How It Works"
            title={
              <>
                From your first message <span className="accent">to clear next steps</span>
              </>
            }
          />
          <ProcessSteps />
        </div>
      </section>

      <section className="section border-y border-line bg-tint" aria-labelledby="stories-heading">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              id="stories-heading"
              eyebrow="Client Stories"
              title={
                <>
                  In their <span className="accent">own words</span>
                </>
              }
              description={`${testimonials.length} clients share what changed after their consultation, from kundli matching to Vastu and career guidance.`}
              className="mb-8"
            />
            <div className="hidden grid-cols-2 gap-4 sm:grid">
              {[
                {
                  src: "/images/sachin-jain-vedic-astrologer-office.jpg",
                  alt: "Sachin Jain seated at his desk, ready for a client consultation",
                },
                {
                  src: "/images/sachin-jain-online-consultation.jpg",
                  alt: "Sachin Jain giving an online astrology consultation on his laptop",
                },
              ].map(({ src, alt }) => (
                <div
                  key={src}
                  className="relative aspect-square overflow-hidden rounded-card border border-line"
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(min-width: 1024px) 20vw, 45vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <Testimonials />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-heading">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              id="faq-heading"
              eyebrow="Questions"
              title={
                <>
                  Before <span className="accent">you book</span>
                </>
              }
              description="Straight answers to what people ask most."
            />
            <FaqList faqs={generalFaqs} />
          </div>
          <aside className="lg:col-span-5">
            <div className="card-premium p-6 md:p-8 lg:sticky lg:top-28">
              <p className="eyebrow">Still Unsure?</p>
              <h3 className="text-display-sm">Ask Sachin Jain directly</h3>
              <p className="mt-3 text-fg-muted">
                Tell us your question on WhatsApp or by phone. We will tell you which consultation
                fits and when the next slot is available.
              </p>
              <div className="mt-6 grid gap-3">
                <ButtonLink href={whatsappLink()} variant="whatsapp">
                  <WhatsAppIcon /> WhatsApp Your Question
                </ButtonLink>
                <ButtonLink href={`tel:${primaryPhone.tel}`} variant="secondary">
                  <PhoneIcon size={16} aria-hidden="true" /> Call {primaryPhone.display}
                </ButtonLink>
              </div>
              <p className="mt-5 text-sm text-fg-subtle">Open {site.hours.label}.</p>
            </div>
          </aside>
        </div>
      </section>

      <CtaSection />
      <JsonLd data={faqSchema(generalFaqs)} />
    </>
  );
}
