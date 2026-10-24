import Link from "next/link";
import { Clock, Globe, Mail } from "lucide-react";
import { BrandBadge, PhoneIcon } from "@/components/ui/BrandIcon";
import { Logo } from "@/components/brand/Logo";
import { servicePages } from "@/data/services";
import { site } from "@/lib/site";

const exploreLinks = [
  { href: "/about", label: "About Sachin Jain" },
  { href: "/services", label: "All Consultations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
  { href: "/contact#book", label: "Book A Consultation" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms Of Service" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-card">
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12">
        <div className="sm:col-span-2 lg:col-span-4">
          <Link href="/" aria-label="AstroJain home" className="inline-block rounded-xl">
            <Logo idPrefix="ftr" size="lg" />
          </Link>
          <p className="mt-5 max-w-sm text-sm text-fg-muted">
            Vedic astrologer {site.astrologer} helps families and professionals in Jaipur and across
            India make clearer decisions about marriage, career, business, health and home, with
            honest readings and practical remedies.
          </p>
          <ul className="mt-5 flex gap-3" aria-label="Social media">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.name} on ${s.label}`}
                  className="block rounded-full shadow-card transition-transform hover:-translate-y-0.5"
                >
                  <BrandBadge name={s.brand} size={32} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-labelledby="footer-services" className="lg:col-span-3">
          <h2 id="footer-services" className="font-display text-base font-semibold">
            Consultations
          </h2>
          <ul className="mt-4 space-y-1 text-sm">
            {servicePages.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="inline-block py-1.5 text-fg-muted hover:text-gold"
                >
                  {s.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-explore" className="lg:col-span-2">
          <h2 id="footer-explore" className="font-display text-base font-semibold">
            Explore
          </h2>
          <ul className="mt-4 space-y-1 text-sm">
            {exploreLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-block py-1.5 text-fg-muted hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="font-display text-base font-semibold">Consult Online</h2>
          <ul className="mt-4 space-y-3 text-sm text-fg-muted">
            <li className="flex items-start gap-2.5">
              <Globe size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
              <span>{site.location.label}</span>
            </li>
            {site.phones.map((p) => (
              <li key={p.tel} className="flex items-start gap-2.5">
                <PhoneIcon size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                <a href={`tel:${p.tel}`} className="hover:text-fg">
                  {p.display}
                </a>
              </li>
            ))}
            <li className="flex items-start gap-2.5">
              <Mail size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-fg">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
              <span>{site.hours.label}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-site flex flex-col gap-4 pb-28 pt-6 text-xs text-fg-subtle sm:pb-24 md:flex-row md:items-center md:justify-between md:pr-24">
          <p>
            © {new Date().getFullYear()} {site.name} · {site.astrologer}, Jaipur. All rights
            reserved.
          </p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-fg">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
