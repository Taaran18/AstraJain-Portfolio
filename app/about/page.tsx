import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Award, Star, Users } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTASection from "@/components/sections/CTASection";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Sachin Jain – Best Astrologer in Jaipur",
  description:
    "Learn about Sachin Jain, Jaipur's most trusted Vedic astrologer with 20+ years of experience in horoscope reading, kundli, palmistry and Vastu Shastra.",
  alternates: { canonical: "https://www.astrojain.in/about" },
};

const JOURNEY = [
  {
    year: "2002",
    title: "Beginning of the Journey",
    desc: "Sachin Jain began his formal study of Vedic Jyotish under renowned Jyotish Acharyas in Rajasthan, immersing himself in the classical texts of Brihat Parashara Hora Shastra and Jataka Parijata.",
  },
  {
    year: "2005",
    title: "Deep Specialization",
    desc: "Expanded study to include palmistry, numerology, and Vastu Shastra — integrating multiple streams of Vedic knowledge into a holistic consultative approach.",
  },
  {
    year: "2010",
    title: "Establishing AstroJain",
    desc: "Founded AstroJain in Jaipur, bringing professional Vedic consultations to the public. Word of mouth and accurate predictions quickly built a loyal and growing clientele.",
  },
  {
    year: "2018",
    title: "Online Consultations",
    desc: "Extended services to online consultations, enabling clients across India and internationally to benefit from Sachin Ji's expertise via phone and video sessions.",
  },
  {
    year: "2024",
    title: "Thousands of Lives Touched",
    desc: "With over 5,000 satisfied clients and a reputation built purely on accuracy, compassion, and results, AstroJain stands as Jaipur's most trusted astrology practice.",
  },
];

const EXPERTISE = [
  { icon: Award, label: "Certified Jyotish Acharya" },
  { icon: Star, label: "20+ Years Practice" },
  { icon: Users, label: "5000+ Clients Served" },
  { icon: CheckCircle, label: "100% Confidential" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center pt-20 overflow-hidden bg-cosmic-gradient">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-cosmic-violet/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-900/20 rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-cosmic-gold/50" />
              <span className="font-cinzel text-xs tracking-[0.3em] uppercase text-cosmic-gold/80">
                The Astrologer
              </span>
              <div className="h-px w-8 bg-cosmic-gold/50" />
            </div>
            <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              About <span className="text-gold">Sachin Jain</span>
            </h1>
            <p className="font-cormorant text-xl text-cosmic-silver/75 max-w-2xl mx-auto leading-relaxed">
              Two decades of Vedic wisdom, thousands of lives illuminated,
              and one unwavering purpose — to guide you toward your highest
              destiny.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Expertise badges */}
      <section className="relative bg-cosmic-deep/60 border-y border-[rgba(212,168,67,0.1)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {EXPERTISE.map(({ icon: Icon, label }, i) => (
              <AnimatedSection key={i} delay={i * 80} direction="fade">
                <div className="flex items-center gap-3">
                  <Icon size={18} className="text-cosmic-gold flex-shrink-0" />
                  <span className="text-sm text-cosmic-silver/70 font-inter">{label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Main bio */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">

            {/* Profile card */}
            <AnimatedSection direction="left" className="lg:col-span-2">
              <div className="glass-card rounded-2xl p-8 sticky top-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cosmic-violet via-indigo-900 to-cosmic-deep flex items-center justify-center border-2 border-[rgba(212,168,67,0.4)] shadow-gold-md">
                    <span className="font-cinzel text-3xl font-bold text-cosmic-gold">S</span>
                  </div>
                  <div>
                    <h2 className="font-cinzel text-xl font-bold text-white">Sachin Jain</h2>
                    <p className="text-xs text-cosmic-gold/70 tracking-wider mt-0.5">
                      Jyotish Acharya & Vedic Astrologer
                    </p>
                    <div className="flex gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className="text-cosmic-gold fill-cosmic-gold" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="gold-divider mb-5" />

                <div className="space-y-4 mb-6">
                  {[
                    ["Location", "Jaipur, Rajasthan, India"],
                    ["Practice", "Vedic Astrology & Jyotish"],
                    ["Experience", "20+ Years"],
                    ["Languages", "Hindi, English"],
                    ["Consultations", "In-person & Online"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between text-sm">
                      <span className="text-cosmic-silver/40">{label}</span>
                      <span className="text-cosmic-silver/80">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="gold-divider mb-5" />

                <div className="flex flex-col gap-3">
                  <Link href="/contact#book" className="btn-gold text-center text-xs py-3">
                    Book Consultation
                  </Link>
                  <a
                    href={`tel:${SITE_CONFIG.phone1.replace(/\s/g, "")}`}
                    className="btn-cosmic text-center text-xs py-3"
                  >
                    {SITE_CONFIG.phone1}
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Bio text */}
            <AnimatedSection direction="right" className="lg:col-span-3">
              <div className="space-y-6">
                <div>
                  <h3 className="font-cinzel text-xl text-white mb-4">
                    A Life Devoted to Vedic Wisdom
                  </h3>
                  <div className="space-y-4 font-cormorant text-lg text-cosmic-silver/75 leading-relaxed">
                    <p>
                      Sachin Jain was drawn to the stars from an early age,
                      fascinated by the ancient science that could reveal the
                      invisible patterns shaping human lives. What began as a
                      deeply personal spiritual inquiry became a lifelong
                      calling — and ultimately, a mission to serve others.
                    </p>
                    <p>
                      Trained formally in Vedic Jyotish under distinguished
                      Acharyas in Rajasthan, Sachin Ji spent years mastering
                      the classical texts — the Brihat Parashara Hora Shastra,
                      Jataka Parijata, and Phaladeepika — before integrating
                      this timeless knowledge with modern analytical approaches.
                    </p>
                    <p>
                      His approach is holistic and compassionate. He understands
                      that astrology is not merely about prediction — it is about
                      empowering people with self-awareness, helping them
                      navigate challenges with grace, and timing important
                      decisions with cosmic wisdom.
                    </p>
                    <p>
                      Over two decades and thousands of consultations later,
                      Sachin Ji&apos;s reputation rests on three pillars:
                      remarkable accuracy, genuine care for his clients, and
                      practical, actionable guidance. He has helped people
                      across India and abroad find resolution in matters of
                      marriage, career, health, finance, and personal growth.
                    </p>
                  </div>
                </div>

                {/* Specializations */}
                <div>
                  <h3 className="font-cinzel text-xl text-white mb-5">
                    Areas of Expertise
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {SERVICES.map((s) => (
                      <div
                        key={s.id}
                        className="glass-card rounded-lg p-3 flex items-center gap-2.5"
                      >
                        <span className="text-lg">{s.icon}</span>
                        <span className="text-xs text-cosmic-silver/70">{s.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding bg-gradient-to-b from-cosmic-deep/60 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-cosmic-gold/50" />
                <span className="font-cinzel text-xs tracking-[0.3em] uppercase text-cosmic-gold/80">
                  The Journey
                </span>
                <div className="h-px w-8 bg-cosmic-gold/50" />
              </div>
              <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white">
                Two Decades of <span className="text-gold">Dedication</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cosmic-gold/30 to-transparent" />

            <div className="space-y-8">
              {JOURNEY.map((item, i) => (
                <AnimatedSection key={i} delay={i * 100}>
                  <div
                    className={`relative flex ${
                      i % 2 === 0
                        ? "md:flex-row"
                        : "md:flex-row-reverse"
                    } items-center gap-6 md:gap-0`}
                  >
                    {/* Year badge */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-14 h-7 glass-card rounded-full flex items-center justify-center z-10">
                      <span className="font-cinzel text-xs text-cosmic-gold font-semibold">
                        {item.year}
                      </span>
                    </div>

                    {/* Card */}
                    <div
                      className={`ml-20 md:ml-0 md:w-5/12 ${
                        i % 2 === 0 ? "md:pr-12" : "md:pl-12 md:ml-auto"
                      }`}
                    >
                      <div className="glass-card rounded-xl p-5">
                        <h3 className="font-cinzel text-sm font-semibold text-cosmic-gold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-cosmic-silver/65 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
