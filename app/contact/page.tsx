import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact & Book Consultation – AstroJain Jaipur",
  description:
    "Book a consultation with Sachin Jain, Jaipur's trusted Vedic astrologer. Call, WhatsApp, or fill in the form. Online and in-person sessions available.",
  alternates: { canonical: "https://www.astrojain.in/contact" },
};

const FAQ = [
  {
    q: "How long does a consultation typically take?",
    a: "A standard consultation is 45–60 minutes. Extended sessions (90 min) are available for comprehensive analysis covering multiple life areas.",
  },
  {
    q: "What information do I need to provide for a horoscope reading?",
    a: "For an accurate birth chart analysis, please provide your full date of birth, exact time of birth (as close as possible), and place of birth.",
  },
  {
    q: "Are online consultations as effective as in-person ones?",
    a: "Absolutely. The astrology reading is based on your birth details and planetary positions — these are the same regardless of whether we meet in person or via video/phone.",
  },
  {
    q: "How soon can I get an appointment?",
    a: "Usually within 1–3 days depending on availability. WhatsApp or call for urgent consultations — we do our best to accommodate.",
  },
  {
    q: "Are my details and consultation kept confidential?",
    a: "Complete confidentiality is a sacred commitment at AstroJain. Your details are never shared, discussed, or disclosed under any circumstances.",
  },
  {
    q: "Do you provide remedies along with predictions?",
    a: "Yes. Every consultation includes practical remedies — mantras, gemstones, rituals, or lifestyle adjustments — tailored to your specific planetary situation.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center pt-20 overflow-hidden bg-cosmic-gradient">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-cosmic-violet/15 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-cosmic-gold/50" />
              <span className="font-cinzel text-xs tracking-[0.3em] uppercase text-cosmic-gold/80">
                Reach Out
              </span>
              <div className="h-px w-8 bg-cosmic-gold/50" />
            </div>
            <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              Connect With <span className="text-gold">Sachin Ji</span>
            </h1>
            <p className="font-cormorant text-xl text-cosmic-silver/75 max-w-xl mx-auto leading-relaxed">
              Begin your journey toward clarity and cosmic alignment. A
              consultation is just one message or call away.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Map & Contact Section */}
      <ContactSection />

      {/* Map embed (static placeholder) */}
      <section className="py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <AnimatedSection>
            <div className="glass-card rounded-2xl overflow-hidden h-64 md:h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl mb-3">📍</div>
                <p className="font-cinzel text-sm text-white mb-1">Visit Us</p>
                <p className="text-sm text-cosmic-silver/60 max-w-xs mx-auto">
                  {SITE_CONFIG.address.line1},{" "}
                  {SITE_CONFIG.address.line2},<br />
                  {SITE_CONFIG.address.city} – {SITE_CONFIG.address.pin}
                </p>
                <a
                  href={`https://maps.google.com/?q=Vaishali+Nagar+Sector+6+Jaipur`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-xs text-cosmic-gold border border-[rgba(212,168,67,0.3)] px-4 py-2 rounded-full hover:bg-cosmic-gold/10 transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gradient-to-b from-cosmic-deep/50 to-transparent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-cosmic-gold/50" />
                <span className="font-cinzel text-xs tracking-[0.3em] uppercase text-cosmic-gold/80">
                  FAQ
                </span>
                <div className="h-px w-8 bg-cosmic-gold/50" />
              </div>
              <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white">
                Common <span className="text-gold">Questions</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {FAQ.map((item, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div className="glass-card rounded-xl p-5 md:p-6">
                  <h3 className="font-cinzel text-sm text-white mb-3 leading-relaxed">
                    {item.q}
                  </h3>
                  <p className="font-cormorant text-base text-cosmic-silver/65 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
