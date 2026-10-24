import { PhoneIcon } from "@/components/ui/BrandIcon";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { Reveal } from "@/components/ui/Reveal";
import { primaryPhone, site, whatsappLink } from "@/lib/site";

type CtaSectionProps = {
  title?: string;
  body?: string;
};

export function CtaSection({
  title = "Stop Guessing. Get A Clear Answer.",
  body = "Share your question and birth details with Sachin Jain. You get a straight reading of what your chart shows, what is likely next, and simple remedies you can actually follow. No fear tactics and no pressure to buy costly pujas.",
}: CtaSectionProps) {
  return (
    <section className="section" aria-labelledby="cta-heading">
      <div className="container-site">
        <Reveal className="relative isolate overflow-hidden rounded-card bg-night p-8 text-cream ring-1 ring-white/10 dark:bg-night-800 md:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-brand/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 left-1/3 -z-10 h-80 w-80 rounded-full bg-[#5b3cc4]/30 blur-3xl"
          />
          <div className="relative max-w-3xl">
            <h2 id="cta-heading" className="text-display-lg text-cream">
              {title}
            </h2>
            <p className="mt-4 text-lg text-cream/80">{body}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/contact#book" size="lg">
                Book Your Consultation
              </ButtonLink>
              <ButtonLink href={whatsappLink()} variant="whatsapp" size="lg">
                <WhatsAppIcon /> WhatsApp Sachin Jain
              </ButtonLink>
              <ButtonLink
                href={`tel:${primaryPhone.tel}`}
                variant="secondary"
                size="lg"
                className="border-white/30 bg-transparent text-cream hover:border-brand hover:text-brand"
              >
                <PhoneIcon size={18} aria-hidden="true" /> {primaryPhone.display}
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm text-cream/60">
              Open {site.hours.label}. All consultations are online, by video call, phone or
              WhatsApp, phone and video from anywhere.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
