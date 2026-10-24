"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { ArrowRight, Award, IndianRupee, ShieldCheck, Star, Users } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { ZodiacWheel } from "@/components/brand/ZodiacWheel";
import { Starfield } from "@/components/sections/home/Starfield";
import { site, whatsappLink } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

const rise = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const trust = [
  { icon: Award, value: site.experience, label: "Of practice" },
  { icon: Users, value: site.clientsServed, label: "Clients guided" },
  { icon: IndianRupee, value: site.consultationFee, label: "Fixed fee" },
];

export function HomeHero() {
  return (
    <section className="bg-cosmic relative isolate overflow-hidden border-b border-line">
      <Starfield className="pointer-events-none absolute inset-0 -z-10 h-full w-full" />
      <div className="container-site grid items-center gap-12 py-12 sm:py-14 md:grid-cols-[1.25fr_0.75fr] md:gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:py-20 xl:py-24">
        <m.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          <m.p variants={rise} className="eyebrow">
            Vedic And Face Reading Astrologer · Jaipur
          </m.p>
          <h1 className="text-display-xl xl:text-display-2xl">
            Clear Answers For Marriage, Career And Money{" "}
            <span className="accent block pt-1 text-[1.12em] leading-[1.05]">from Sachin Jain</span>
          </h1>
          <m.p variants={rise} className="mt-6 max-w-2xl text-lg text-fg-muted md:text-xl">
            When the rishta keeps falling through, work will not move or money never stays, a
            generic horoscope is not enough. Sachin Jain reads your kundli, your face and your palm
            together, cross-checks what each one shows, and tells you honestly what he sees, with
            remedies you can actually follow.
          </m.p>
          <m.div variants={rise} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/contact#book" size="lg">
              Book Your Consultation <ArrowRight size={18} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={whatsappLink()} variant="whatsapp" size="lg">
              <WhatsAppIcon /> WhatsApp Sachin Jain
            </ButtonLink>
          </m.div>
          <m.ul
            variants={rise}
            className="mt-10 grid max-w-xl grid-cols-3 divide-x divide-line rounded-2xl border border-line bg-card/70 backdrop-blur"
          >
            {trust.map((t) => {
              const Icon = t.icon;
              return (
                <li key={t.label} className="px-3 py-4 text-center sm:px-4">
                  <Icon size={18} aria-hidden="true" className="mx-auto text-saffron" />
                  <span className="mt-2 block font-display text-lg font-bold text-fg sm:text-xl">
                    {t.value}
                  </span>
                  <span className="block text-xs text-fg-muted sm:text-sm">{t.label}</span>
                </li>
              );
            })}
          </m.ul>
          <m.p variants={rise} className="mt-5 flex items-start gap-2 text-sm text-fg-subtle">
            <ShieldCheck size={16} className="mt-0.5 shrink-0 text-success" aria-hidden="true" />
            No fear tactics, no forced pujas, and your details stay private.
          </m.p>
        </m.div>

        <m.figure
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="relative mx-auto w-full max-w-[20rem] sm:max-w-sm md:max-w-none"
        >
          <div className="relative">
            <ZodiacWheel className="absolute left-1/2 top-[38%] -z-10 w-[135%] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-80" />
            <div className="relative overflow-hidden rounded-b-[2rem] rounded-t-full border border-brand/60 bg-tint p-2 shadow-glow">
              <div className="relative aspect-[4/5] overflow-hidden rounded-b-[1.6rem] rounded-t-full">
                <Image
                  src="/images/sachin-jain-astrologer-jaipur-portrait.jpg"
                  alt="Vedic astrologer Sachin Jain at his office in Jaipur"
                  fill
                  preload
                  sizes="(min-width: 1024px) 420px, (min-width: 768px) 35vw, 80vw"
                  className="object-cover object-[50%_25%]"
                />
              </div>
            </div>
          </div>
          <figcaption className="card-premium mx-auto mt-4 flex items-center justify-between gap-3 px-5 py-3.5">
            <span className="min-w-0">
              <span className="block font-display text-base font-semibold text-fg">
                {site.astrologer}
              </span>
              <span className="block text-xs text-fg-muted sm:text-sm">
                Vedic And Face Reading Astrologer
              </span>
            </span>
            <span
              className="flex shrink-0 gap-0.5 text-brand"
              aria-label="Rated 5 out of 5 by clients"
            >
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} size={14} className="fill-current" aria-hidden="true" />
              ))}
            </span>
          </figcaption>
        </m.figure>
      </div>
    </section>
  );
}
