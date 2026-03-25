"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";
import AnimatedSection from "@/components/ui/AnimatedSection";

const SERVICES_LIST = [
  "Horoscope Reading",
  "Vedic Astrology",
  "Kundli Matching",
  "Palmistry",
  "Numerology",
  "Gemstone Consultation",
  "Vastu Shastra",
  "Other",
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — replace with actual API/email service
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section className="section-padding relative" id="book">
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-navy/30 via-transparent to-cosmic-navy/30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left: Info */}
          <AnimatedSection direction="left">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-cosmic-gold/50" />
              <span className="font-cinzel text-xs tracking-[0.3em] uppercase text-cosmic-gold/80">
                Get In Touch
              </span>
            </div>

            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
              Begin Your{" "}
              <span className="text-gold">Consultation</span>
            </h2>

            <p className="font-cormorant text-lg text-cosmic-silver/70 leading-relaxed mb-10">
              Reach out to Sachin Ji through any of the channels below, or fill
              in the booking form and he will respond within a few hours. Your
              path to clarity is just one conversation away.
            </p>

            {/* Contact Details */}
            <div className="space-y-5 mb-10">
              {[
                {
                  icon: <Phone size={16} className="text-cosmic-gold" />,
                  label: "Phone",
                  items: [
                    <a key="p1" href={`tel:${SITE_CONFIG.phone1.replace(/\s/g, "")}`} className="hover:text-cosmic-gold transition-colors">
                      {SITE_CONFIG.phone1}
                    </a>,
                    <a key="p2" href={`tel:${SITE_CONFIG.phone2.replace(/\s/g, "")}`} className="hover:text-cosmic-gold transition-colors">
                      {SITE_CONFIG.phone2}
                    </a>,
                  ],
                },
                {
                  icon: <Mail size={16} className="text-cosmic-gold" />,
                  label: "Email",
                  items: [
                    <a key="em" href={`mailto:${SITE_CONFIG.email}`} className="hover:text-cosmic-gold transition-colors break-all">
                      {SITE_CONFIG.email}
                    </a>,
                  ],
                },
                {
                  icon: <MapPin size={16} className="text-cosmic-gold" />,
                  label: "Address",
                  items: [
                    <span key="addr">
                      {SITE_CONFIG.address.line1}, {SITE_CONFIG.address.line2},{" "}
                      {SITE_CONFIG.address.city} – {SITE_CONFIG.address.pin}
                    </span>,
                  ],
                },
                {
                  icon: <Clock size={16} className="text-cosmic-gold" />,
                  label: "Hours",
                  items: [<span key="hr">{SITE_CONFIG.hours}</span>],
                },
              ].map((contact, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg border border-[rgba(212,168,67,0.2)] bg-cosmic-violet/20 flex items-center justify-center flex-shrink-0">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-xs text-cosmic-silver/40 uppercase tracking-widest mb-1">
                      {contact.label}
                    </p>
                    <div className="space-y-0.5">
                      {contact.items.map((item, ii) => (
                        <div key={ii} className="text-sm text-cosmic-silver/75">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={getWhatsAppLink(SITE_CONFIG.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #25d366 0%, #128c7e 100%)",
                boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
              }}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="font-cinzel text-sm text-white tracking-wider">
                Chat on WhatsApp
              </span>
            </a>
          </AnimatedSection>

          {/* Right: Form */}
          <AnimatedSection direction="right">
            <div className="glass-card rounded-2xl p-6 md:p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle size={56} className="text-cosmic-gold mx-auto mb-4" />
                  <h3 className="font-cinzel text-xl text-white mb-3">
                    Message Received
                  </h3>
                  <p className="font-cormorant text-lg text-cosmic-silver/70">
                    Thank you for reaching out. Sachin Ji will respond within a
                    few hours. The stars are aligning for your consultation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-cinzel text-lg text-white mb-1">
                      Book a Consultation
                    </h3>
                    <p className="text-sm text-cosmic-silver/50 font-inter">
                      Fill in your details and Sachin Ji will contact you shortly.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-cosmic-silver/50 tracking-wider uppercase mb-1.5 block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full bg-cosmic-navy/60 border border-[rgba(212,168,67,0.15)] rounded-lg px-4 py-3 text-sm text-white placeholder-cosmic-silver/30 transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-cosmic-silver/50 tracking-wider uppercase mb-1.5 block">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-cosmic-navy/60 border border-[rgba(212,168,67,0.15)] rounded-lg px-4 py-3 text-sm text-white placeholder-cosmic-silver/30 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-cosmic-silver/50 tracking-wider uppercase mb-1.5 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-cosmic-navy/60 border border-[rgba(212,168,67,0.15)] rounded-lg px-4 py-3 text-sm text-white placeholder-cosmic-silver/30 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-cosmic-silver/50 tracking-wider uppercase mb-1.5 block">
                      Service Required
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-cosmic-navy/60 border border-[rgba(212,168,67,0.15)] rounded-lg px-4 py-3 text-sm text-white transition-all appearance-none"
                    >
                      <option value="" className="bg-cosmic-navy">
                        Select a service...
                      </option>
                      {SERVICES_LIST.map((s) => (
                        <option key={s} value={s} className="bg-cosmic-navy">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-cosmic-silver/50 tracking-wider uppercase mb-1.5 block">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Briefly describe what you would like guidance on..."
                      className="w-full bg-cosmic-navy/60 border border-[rgba(212,168,67,0.15)] rounded-lg px-4 py-3 text-sm text-white placeholder-cosmic-silver/30 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full py-4 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="animate-spin w-4 h-4 border-2 border-cosmic-black/50 border-t-cosmic-black rounded-full" />
                    ) : (
                      <>
                        <Send size={15} />
                        Send Consultation Request
                      </>
                    )}
                  </button>

                  <p className="text-xs text-cosmic-silver/30 text-center font-inter">
                    Your details are kept 100% confidential.
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
