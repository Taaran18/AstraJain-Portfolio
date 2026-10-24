import type { Metadata } from "next";
import Image from "next/image";
import { Award, CheckCircle2, Languages, MapPin, Star, Users } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CtaSection } from "@/components/sections/CtaSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { servicePages } from "@/data/services";
import { pageMetadata } from "@/lib/seo";
import { primaryPhone, site } from "@/lib/site";

const path = "/about";

export const metadata: Metadata = pageMetadata({
  title: "About Sachin Jain | Vedic Astrologer In Jaipur",
  description:
    "Sachin Jain, Jaipur Vedic and face reading astrologer: 40 years of practice, honest readings, practical remedies, full privacy.",
  path,
});

const journey = [
  {
    year: "The Beginning",
    title: "Formal Study Of Jyotish Begins",
    body: "Sachin Jain begins studying Vedic Jyotish under respected acharyas in Rajasthan, working through classical texts such as the Brihat Parashara Hora Shastra and Jataka Parijata.",
  },
  {
    year: "Widening The Lens",
    title: "Palmistry, Face Reading, Numerology And Vastu",
    body: "He adds palmistry, face reading, numerology and Vastu Shastra, so that one reading can be checked against another rather than relying on a single method.",
  },
  {
    year: "AstroJain",
    title: "AstroJain Opens In Jaipur",
    body: "AstroJain is founded to offer professional, transparent consultations. Word of mouth from satisfied families builds the practice.",
  },
  {
    year: "Online",
    title: "Online Consultations",
    body: "Phone and video sessions bring the same careful readings to clients across India and abroad.",
  },
  {
    year: "Today",
    title: `${site.clientsServed} Clients Guided`,
    body: "Families return for kundli matching, career decisions, griha pravesh and business launches, and recommend Sachin Jain to friends.",
  },
];

const facts = [
  { icon: MapPin, label: "Based in", value: "Jaipur · Online" },
  { icon: Award, label: "Experience", value: site.experience },
  { icon: Users, label: "Clients guided", value: site.clientsServed },
  { icon: Languages, label: "Languages", value: site.languages.join(", ") },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", path }]}
        eyebrow="Meet Your Astrologer"
        title="Sachin Jain: The Astrologer Families In Jaipur Trust With Big Decisions"
        intro="Vedic astrologer and face reading specialist. Known for telling clients what their chart really shows, without fear, jargon or pressure."
      />

      <section className="section" aria-labelledby="story-heading">
        <div className="container-site grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="mx-auto w-full max-w-md lg:sticky lg:top-28 lg:col-span-5 lg:max-w-none">
            <div className="card overflow-hidden">
              <div className="relative aspect-[4/5] bg-tint">
                <Image
                  src="/images/sachin-jain-astrologer-jaipur-portrait.jpg"
                  alt="Portrait of Vedic astrologer Sachin Jain"
                  fill
                  preload
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="font-sans text-xl font-semibold tracking-normal">
                      {site.astrologer}
                    </h2>
                    <p className="text-sm text-fg-muted">Vedic Astrologer And Face Reader</p>
                  </div>
                  <div className="flex gap-0.5 text-gold" aria-label="Rated 5 out of 5 by clients">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} size={16} className="fill-current" aria-hidden="true" />
                    ))}
                  </div>
                </div>
                <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-line pt-5">
                  {facts.map((f) => {
                    const Icon = f.icon;
                    return (
                      <div key={f.label}>
                        <dt className="flex items-center gap-1.5 text-xs uppercase tracking-[0.12em] text-fg-subtle">
                          <Icon size={14} aria-hidden="true" /> {f.label}
                        </dt>
                        <dd className="mt-1 font-semibold text-fg">{f.value}</dd>
                      </div>
                    );
                  })}
                </dl>
                <div className="mt-6 grid gap-3">
                  <ButtonLink href="/contact#book">Book A Consultation</ButtonLink>
                  <ButtonLink href={`tel:${primaryPhone.tel}`} variant="secondary">
                    Call {primaryPhone.display}
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <SectionHeading
              id="story-heading"
              title="A Life Devoted To Vedic Wisdom"
              className="mb-6"
            />
            <div className="prose-site max-w-none text-lg">
              <p>
                Sachin Jain was drawn to the stars early, fascinated by a science that could reveal
                the patterns shaping a person&apos;s life. What began as a personal spiritual
                inquiry became a lifelong calling to help others.
              </p>
              <p>
                Trained formally in Vedic Jyotish under respected acharyas in Rajasthan, he spent
                years with the classical texts before combining them with palmistry, face reading,
                numerology and Vastu. Today he is especially known in Jaipur as a{" "}
                <strong>face reading astrologer</strong>: he reads the permanent features of your
                face and confirms every observation against your birth chart.
              </p>
              <p>
                Many clients come to him after a reading elsewhere left them more frightened than
                before, or after being asked to pay for expensive pujas. His approach is the
                opposite.{" "}
                <strong>Read carefully, explain plainly, and suggest only what is needed.</strong>{" "}
                Many of his remedies cost nothing at all.
              </p>
              <p>
                Over 40 years, families have consulted him on marriage, career, health, finance and
                property, consulting online with clients across India and abroad.
              </p>
            </div>

            <h3 className="mt-12 text-display-sm">How Sachin Jain Works</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Your chart is prepared before the session",
                "Kundli, palm and face cross-checked",
                "Plain answers in Hindi or English",
                "Remedies only when your chart needs them",
                "No pressure to buy stones or pujas",
                "Complete confidentiality, always",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-fg-muted">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-success"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-12 text-display-sm">Areas Of Expertise</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {servicePages.map((s) => (
                <li key={s.slug}>
                  <ButtonLink href={`/services/${s.slug}`} variant="secondary" size="sm">
                    {s.name}
                  </ButtonLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section border-y border-line bg-tint" aria-labelledby="journey-heading">
        <div className="container-site max-w-4xl">
          <SectionHeading
            id="journey-heading"
            eyebrow="The Journey"
            title="40 Years Of Practice"
            align="center"
          />
          <ol className="relative space-y-6 border-l-2 border-gold/40 pl-6 md:pl-10">
            {journey.map((item, i) => (
              <Reveal as="li" key={item.year} delay={i * 0.06} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[calc(1.5rem+7px)] top-6 h-3 w-3 rounded-full bg-brand ring-4 ring-tint md:-left-[calc(2.5rem+7px)]"
                />
                <div className="card p-5 md:p-6">
                  <p className="font-display text-sm font-semibold tracking-[0.14em] text-gold">
                    {item.year}
                  </p>
                  <h3 className="mt-1 font-sans text-lg font-semibold tracking-normal">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-fg-muted">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="photos-heading">
        <div className="container-site">
          <SectionHeading id="photos-heading" eyebrow="Gallery" title="Behind Every Reading" />
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              {
                src: "/images/sachin-jain-vedic-astrologer-office.jpg",
                alt: "Sachin Jain at his office desk",
              },
              {
                src: "/images/sachin-jain-astrology-office-jaipur.jpg",
                alt: "Sachin Jain's consultation room",
              },
              {
                src: "/images/sachin-jain-traditional-attire.jpg",
                alt: "Sachin Jain in traditional dress",
              },
              {
                src: "/images/sachin-jain-astrologer-event.jpg",
                alt: "Sachin Jain at a cultural event",
              },
            ].map((p) => (
              <li
                key={p.src}
                className="relative aspect-[3/4] overflow-hidden rounded-card border border-line bg-tint"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ButtonLink href="/gallery" variant="secondary">
              See The Full Gallery
            </ButtonLink>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
