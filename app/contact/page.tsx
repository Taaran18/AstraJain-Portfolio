import type { Metadata } from "next";
import { Suspense } from "react";
import {
  CalendarCheck,
  Clock,
  Globe,
  IndianRupee,
  Mail,
  MessageCircleHeart,
  Video,
} from "lucide-react";
import { BrandBadge, PhoneIcon } from "@/components/ui/BrandIcon";
import { PageHero } from "@/components/sections/PageHero";
import { BookingForm } from "@/components/sections/contact/BookingForm";
import { FaqList } from "@/components/sections/FaqList";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { generalFaqs } from "@/data/faqs";
import { pageMetadata } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";

const path = "/contact";

export const metadata: Metadata = pageMetadata({
  title: "Book An Online Consultation With Sachin Jain",
  description:
    "Book an online consultation with Sachin Jain by video, phone or WhatsApp. Call +91 96945 53351 or send your details here.",
  path,
});

const onlineSteps = [
  {
    icon: CalendarCheck,
    title: "Book And Share Your Details",
    body: "Send the form, call or WhatsApp with your question and, if you can, your date, time and place of birth.",
  },
  {
    icon: Video,
    title: "Choose Video, Phone Or WhatsApp",
    body: "We confirm a time and how you would like to talk. A stable connection and a quiet room is all you need.",
  },
  {
    icon: MessageCircleHeart,
    title: "Get Your Reading And Remedies",
    body: "Sachin Jain prepares your chart beforehand, answers every question and explains remedies you can follow at home.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Contact", path }]}
        eyebrow="Book A Consultation"
        title="Talk To Sachin Jain About What Is Worrying You"
        intro="Send the form, call or WhatsApp. Most consultations are confirmed within 1 to 3 days, by video call, phone or WhatsApp from anywhere in India or abroad."
      />

      <section className="section" aria-labelledby="book-heading">
        <div className="container-site grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="min-w-0 lg:col-span-7" id="book">
            <div className="card p-5 md:p-8">
              <h2 id="book-heading" className="text-display-md">
                Book Your Consultation
              </h2>
              <p className="mt-2 text-fg-muted">
                Takes about two minutes. Fields marked <span className="text-danger">*</span> are
                required.
              </p>
              <div className="mt-8">
                <Suspense fallback={<p className="text-fg-muted">Loading the booking form…</p>}>
                  <BookingForm />
                </Suspense>
              </div>
            </div>
          </div>

          <aside
            className="grid min-w-0 gap-5 md:grid-cols-2 lg:sticky lg:top-28 lg:col-span-5 lg:grid-cols-1"
            aria-label="Contact details"
          >
            <div className="card p-6">
              <h2 className="text-display-sm">Prefer To Talk Now?</h2>
              <div className="mt-5 grid gap-3">
                <ButtonLink href={whatsappLink()} variant="whatsapp">
                  <WhatsAppIcon /> WhatsApp Sachin Jain
                </ButtonLink>
                {site.phones.map((p) => (
                  <ButtonLink key={p.tel} href={`tel:${p.tel}`} variant="secondary">
                    <PhoneIcon size={16} aria-hidden="true" /> Call {p.display}
                  </ButtonLink>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <ul className="space-y-4 text-fg-muted">
                <li className="flex gap-3">
                  <Globe size={20} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold text-fg">Online Consultations</span>
                    {site.consultationModes}. {site.location.label}.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Clock size={20} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold text-fg">Hours</span>
                    {site.hours.label}
                  </span>
                </li>
                <li className="flex gap-3">
                  <IndianRupee size={20} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold text-fg">Consultation Fee</span>
                    {site.consultationFee} per sitting, confirmed when you book
                  </span>
                </li>
                <li className="flex gap-3">
                  <Mail size={20} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block font-semibold text-fg">Email</span>
                    <a href={`mailto:${site.email}`} className="break-all hover:text-gold">
                      {site.email}
                    </a>
                  </span>
                </li>
              </ul>
              <ul className="mt-6 flex gap-2 border-t border-line pt-5" aria-label="Social media">
                {site.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2.5 rounded-full border border-line-strong py-1.5 pl-2 pr-4 text-sm font-semibold text-fg-muted hover:border-gold hover:text-fg"
                    >
                      <BrandBadge name={s.brand} size={24} /> {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="section pt-0" aria-labelledby="online-heading">
        <div className="container-site">
          <SectionHeading
            id="online-heading"
            eyebrow="Online Consultations"
            title="How Your Online Session Works"
            description="Every consultation is held online, so you can speak to Sachin Jain from home, wherever you live."
          />
          <ol className="grid gap-5 md:grid-cols-3">
            {onlineSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <li key={step.title} className="card-premium p-6">
                  <span className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-soft text-gold">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <span
                      aria-hidden="true"
                      className="font-display text-2xl font-bold text-line-strong/60"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <h3 className="mt-4 font-sans text-lg font-semibold tracking-normal">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] text-fg-muted">{step.body}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="section border-t border-line bg-tint" aria-labelledby="faq-heading">
        <div className="container-site max-w-4xl">
          <SectionHeading id="faq-heading" eyebrow="Questions" title="Before You Book" />
          <FaqList faqs={generalFaqs} />
        </div>
      </section>
    </>
  );
}
