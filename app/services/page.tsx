import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTASection from "@/components/sections/CTASection";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Astrology Services – Horoscope, Kundli, Vastu & More",
  description:
    "Explore Sachin Jain's comprehensive Vedic astrology services: horoscope reading, kundli matching, palmistry, numerology, gemstone consultation & Vastu Shastra in Jaipur.",
  alternates: { canonical: "https://www.astrojain.in/services" },
};

const PROCESS = [
  {
    step: "01",
    title: "Initial Inquiry",
    desc: "Contact us via phone, WhatsApp or the booking form with your details and the service you require.",
  },
  {
    step: "02",
    title: "Schedule Session",
    desc: "Sachin Ji's team will confirm a convenient time for your in-person visit or online consultation.",
  },
  {
    step: "03",
    title: "Deep Consultation",
    desc: "A thorough, unhurried session exploring your specific questions with precision and empathy.",
  },
  {
    step: "04",
    title: "Guidance & Remedies",
    desc: "Receive personalised predictions, practical remedies, and actionable steps to improve your life.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center pt-20 overflow-hidden bg-cosmic-gradient">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cosmic-violet/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-indigo-900/15 rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-cosmic-gold/50" />
              <span className="font-cinzel text-xs tracking-[0.3em] uppercase text-cosmic-gold/80">
                Sacred Offerings
              </span>
              <div className="h-px w-8 bg-cosmic-gold/50" />
            </div>
            <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              Our <span className="text-gold">Services</span>
            </h1>
            <p className="font-cormorant text-xl text-cosmic-silver/75 max-w-2xl mx-auto leading-relaxed">
              Six sacred pathways to self-understanding, cosmic alignment, and
              meaningful transformation — each rooted in Vedic wisdom and
              personalised to your unique life.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services - detailed */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {SERVICES.map((service, i) => (
              <AnimatedSection key={service.id} delay={i * 60}>
                <div
                  id={service.id}
                  className="glass-card rounded-2xl overflow-hidden"
                >
                  <div
                    className={`grid md:grid-cols-5 gap-0 ${
                      i % 2 !== 0 ? "md:direction-rtl" : ""
                    }`}
                  >
                    {/* Color accent panel */}
                    <div
                      className={`md:col-span-1 p-8 flex flex-col items-center justify-center text-center ${
                        i % 2 !== 0 ? "md:order-2" : ""
                      }`}
                      style={{
                        background: `linear-gradient(135deg, ${service.accent}15, ${service.accent}05)`,
                        borderRight: i % 2 === 0 ? `1px solid ${service.accent}20` : "none",
                        borderLeft: i % 2 !== 0 ? `1px solid ${service.accent}20` : "none",
                      }}
                    >
                      <div
                        className="text-5xl mb-3"
                        style={{ color: service.accent }}
                      >
                        {service.icon}
                      </div>
                      <div
                        className="font-cinzel text-xs tracking-widest uppercase font-semibold mb-1"
                        style={{ color: service.accent }}
                      >
                        {service.subtitle}
                      </div>
                      <div className="text-[10px] text-cosmic-silver/40 mt-2 font-inter">
                        Service #{String(i + 1).padStart(2, "0")}
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className={`md:col-span-4 p-8 ${
                        i % 2 !== 0 ? "md:order-1" : ""
                      }`}
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                        <div className="flex-1">
                          <h2 className="font-cinzel text-xl md:text-2xl font-bold text-white mb-3">
                            {service.title}
                          </h2>
                          <p className="font-cormorant text-lg text-cosmic-silver/70 leading-relaxed mb-6 max-w-2xl">
                            {service.description}
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {service.features.map((f, fi) => (
                              <div key={fi} className="flex items-start gap-2">
                                <CheckCircle
                                  size={14}
                                  className="flex-shrink-0 mt-0.5"
                                  style={{ color: service.accent }}
                                />
                                <span className="text-sm text-cosmic-silver/65">{f}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex-shrink-0">
                          <Link
                            href="/contact#book"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border text-sm font-cinzel tracking-wider uppercase transition-all hover:scale-105"
                            style={{
                              borderColor: `${service.accent}40`,
                              color: service.accent,
                              background: `${service.accent}10`,
                            }}
                          >
                            Book Now
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gradient-to-b from-cosmic-deep/50 to-transparent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-cosmic-gold/50" />
                <span className="font-cinzel text-xs tracking-[0.3em] uppercase text-cosmic-gold/80">
                  How It Works
                </span>
                <div className="h-px w-8 bg-cosmic-gold/50" />
              </div>
              <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white">
                Your Consultation <span className="text-gold">Journey</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-cosmic-gold/20 to-transparent" />

            {PROCESS.map((step, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="glass-card glass-card-hover rounded-xl p-6 text-center relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cosmic-violet to-indigo-900 border border-[rgba(212,168,67,0.3)] flex items-center justify-center mx-auto mb-4">
                    <span className="font-cinzel text-xs font-bold text-cosmic-gold">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-cinzel text-sm font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-cosmic-silver/60 leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
