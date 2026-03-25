import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import CTASection from "@/components/sections/CTASection";
import CosmicBackground from "@/components/three/CosmicBackgroundClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Astrologer in Jaipur | Sachin Jain – AstroJain",
  description:
    "Consult Sachin Jain, Jaipur's most trusted Vedic astrologer. Expert in horoscope, kundli matching, palmistry, numerology, gemstone & Vastu. Book online consultation.",
};

export default function HomePage() {
  return (
    <>
      <CosmicBackground />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
