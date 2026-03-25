import Link from "next/link";
import { CheckCircle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { SERVICES } from "@/lib/constants";

const CREDENTIALS = [
  "20+ years of dedicated Vedic practice",
  "Trained in traditional Jyotish Shastra",
  "Expert in Kundli, Palmistry & Vastu",
  "5000+ satisfied clients across India",
  "Online & in-person consultations available",
  "Confidential & personalized approach",
];

export default function AboutSection() {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none opacity-60"
        style={{ background: "linear-gradient(180deg, transparent, var(--bg-secondary), transparent)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Visual */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="absolute -inset-4 border border-[rgba(212,168,67,0.08)] rounded-2xl" />
              <div className="absolute -inset-8 border border-[rgba(212,168,67,0.04)] rounded-3xl" />
              <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-[120px] opacity-5 font-cinzel leading-none select-none text-cosmic-gold">ॐ</div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cosmic-violet to-indigo-900 flex items-center justify-center border-2 border-[rgba(212,168,67,0.3)] shadow-gold-md">
                    <span className="font-cinzel text-2xl font-bold text-cosmic-gold">S</span>
                  </div>
                  <div>
                    <h3 className="font-cinzel text-lg font-bold dark:text-white text-cosmic-deep">Sachin Jain</h3>
                    <p className="text-xs text-cosmic-gold/70 tracking-wider">Vedic Astrologer & Jyotish Acharya</p>
                    <div className="flex gap-1 mt-1">{[...Array(5)].map((_, i) => <span key={i} className="text-cosmic-gold text-xs">★</span>)}</div>
                  </div>
                </div>
                <blockquote className="font-cormorant text-xl italic dark:text-cosmic-silver/80 text-cosmic-deep/75 leading-relaxed mb-8 border-l-2 border-cosmic-gold/30 pl-4">
                  &ldquo;The stars do not compel, they impel. My purpose is to help you understand the cosmic forces at work in your life and guide you toward your highest expression.&rdquo;
                </blockquote>
                <div className="grid grid-cols-3 gap-3">
                  {SERVICES.map((s) => (
                    <div key={s.id} className="text-center p-3 rounded-lg border border-[rgba(212,168,67,0.1)] bg-cosmic-navy/20">
                      <div className="text-lg mb-1">{s.icon}</div>
                      <div className="text-[10px] dark:text-cosmic-silver/50 text-cosmic-deep/50 leading-tight font-inter">{s.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection direction="right">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-cosmic-gold/50" />
                <span className="font-cinzel text-xs tracking-[0.3em] uppercase text-cosmic-gold/80">About The Astrologer</span>
              </div>
              <h2 className="font-cinzel text-3xl md:text-4xl font-bold dark:text-white text-cosmic-deep mb-6 leading-tight">
                Guiding Lives Through <span className="text-gold">Ancient Wisdom</span>
              </h2>
              <div className="space-y-4 mb-8">
                <p className="font-cormorant text-lg dark:text-cosmic-silver/75 text-cosmic-deep/70 leading-relaxed">
                  Sachin Jain is one of Jaipur&apos;s most respected Vedic astrologers, with over two decades of dedicated practice. His reputation for remarkable accuracy and compassionate guidance has earned the trust of thousands of clients across India and the world.
                </p>
                <p className="font-cormorant text-lg dark:text-cosmic-silver/75 text-cosmic-deep/70 leading-relaxed">
                  Combining timeless Vedic knowledge with modern analytical techniques, Sachin Ji offers a truly holistic consultation — going beyond prediction to provide genuine transformation and direction.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {CREDENTIALS.map((c, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle size={15} className="text-cosmic-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm dark:text-cosmic-silver/70 text-cosmic-deep/70">{c}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-cosmic inline-block">Read Full Story</Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
