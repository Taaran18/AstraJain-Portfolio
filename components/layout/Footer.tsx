import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS, SERVICES } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-cosmic-deep border-t border-[rgba(212,168,67,0.1)]">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-cosmic-gold/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-cinzel text-2xl font-bold text-gold tracking-widest">
                ASTRO<span className="text-white">JAIN</span>
              </span>
            </Link>
            <p className="text-cosmic-silver/60 text-sm leading-relaxed mb-5 font-cormorant text-base">
              Ancient Vedic wisdom guiding modern lives. Sachin Jain brings
              clarity, purpose, and cosmic alignment to thousands across India
              and the world.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[rgba(212,168,67,0.25)] flex items-center justify-center text-cosmic-silver/60 hover:text-cosmic-gold hover:border-cosmic-gold/50 transition-all"
                aria-label="Facebook"
              >
                <Facebook size={15} />
              </a>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[rgba(212,168,67,0.25)] flex items-center justify-center text-cosmic-silver/60 hover:text-cosmic-gold hover:border-cosmic-gold/50 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-cinzel text-sm font-semibold tracking-widest uppercase text-cosmic-gold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.filter((l) => !l.highlight).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cosmic-silver/60 hover:text-cosmic-gold transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-cosmic-gold/40 group-hover:text-cosmic-gold transition-colors">✦</span>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact#book"
                  className="text-sm text-cosmic-silver/60 hover:text-cosmic-gold transition-colors flex items-center gap-2 group"
                >
                  <span className="text-cosmic-gold/40 group-hover:text-cosmic-gold transition-colors">✦</span>
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-cinzel text-sm font-semibold tracking-widest uppercase text-cosmic-gold mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services#${s.id}`}
                    className="text-sm text-cosmic-silver/60 hover:text-cosmic-gold transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-cosmic-gold/40 group-hover:text-cosmic-gold transition-colors">{s.icon}</span>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-cinzel text-sm font-semibold tracking-widest uppercase text-cosmic-gold mb-4">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-cosmic-gold mt-0.5 flex-shrink-0" />
                <span className="text-sm text-cosmic-silver/60 leading-relaxed">
                  {SITE_CONFIG.address.line1},<br />
                  {SITE_CONFIG.address.line2},<br />
                  {SITE_CONFIG.address.city} – {SITE_CONFIG.address.pin}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-cosmic-gold flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a
                    href={`tel:${SITE_CONFIG.phone1.replace(/\s/g, "")}`}
                    className="text-sm text-cosmic-silver/60 hover:text-cosmic-gold transition-colors"
                  >
                    {SITE_CONFIG.phone1}
                  </a>
                  <a
                    href={`tel:${SITE_CONFIG.phone2.replace(/\s/g, "")}`}
                    className="text-sm text-cosmic-silver/60 hover:text-cosmic-gold transition-colors"
                  >
                    {SITE_CONFIG.phone2}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-cosmic-gold flex-shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-sm text-cosmic-silver/60 hover:text-cosmic-gold transition-colors break-all"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={15} className="text-cosmic-gold flex-shrink-0" />
                <span className="text-sm text-cosmic-silver/60">{SITE_CONFIG.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="gold-divider mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cosmic-silver/40 font-inter">
            © {year} AstroJain – Sachin Jain. All rights reserved.
          </p>
          <p className="text-xs text-cosmic-silver/30 font-inter">
            From Kundli matching to predictions — Marriage · Love · Career · Health
          </p>
        </div>
      </div>
    </footer>
  );
}
