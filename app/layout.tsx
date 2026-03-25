import type { Metadata, Viewport } from "next";
import { Cinzel, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import BackToTop from "@/components/ui/BackToTop";
import ThemeProvider from "@/components/providers/ThemeProvider";
import CustomCursor from "@/components/ui/CustomCursor";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cinzel",
  display: "swap",
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.astrojain.in"),
  title: {
    default: "Best Astrologer in Jaipur | Sachin Jain – AstroJain",
    template: "%s | AstroJain – Vedic Astrology Jaipur",
  },
  description:
    "Consult Sachin Jain, the most trusted Vedic astrologer in Jaipur. Expert in horoscope reading, kundli matching, palmistry, numerology, gemstone consultation & Vastu Shastra. Book your online consultation today.",
  keywords: [
    "best astrologer in Jaipur","Vedic astrologer Jaipur","horoscope reading Jaipur",
    "kundli matching Jaipur","online astrology consultation","Sachin Jain astrologer",
    "AstroJain","palmistry Jaipur","numerology Jaipur","Vastu Shastra Jaipur",
    "gemstone consultation Jaipur",
  ],
  authors:   [{ name: "Sachin Jain", url: "https://www.astrojain.in" }],
  creator:   "Sachin Jain – AstroJain",
  publisher: "AstroJain",
  openGraph: {
    type: "website", locale: "en_IN", url: "https://www.astrojain.in",
    siteName: "AstroJain",
    title: "Best Astrologer in Jaipur | Sachin Jain – AstroJain",
    description: "Trusted Vedic astrologer Sachin Jain offers personalized horoscope, kundli, palmistry & Vastu consultations in Jaipur and online.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "AstroJain – Sachin Jain" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Astrologer in Jaipur | Sachin Jain – AstroJain",
    description: "Trusted Vedic astrologer Sachin Jain offers personalized consultations.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: "https://www.astrojain.in" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)",  color: "#0a0f2e" },
    { media: "(prefers-color-scheme: light)", color: "#f8f5ee" },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AstroJain – Sachin Jain Astrologer",
  description: "Best Vedic astrologer in Jaipur offering horoscope reading, kundli matching, palmistry, numerology, gemstone consultation and Vastu Shastra.",
  url: "https://www.astrojain.in",
  telephone: ["+91-9694553351", "+91-7878095569"],
  email: "sachinjain@astrojain.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "F-18, 1st Floor, Gautam Marg, Sector 6, Vaishali Nagar",
    addressLocality: "Jaipur", addressRegion: "Rajasthan",
    postalCode: "302021", addressCountry: "IN",
  },
  openingHours: "Mo-Su 09:00-20:00",
  priceRange: "₹₹",
  image: "https://www.astrojain.in/og-image.jpg",
  sameAs: ["https://www.facebook.com/astrojain.in","https://www.instagram.com/astrojain.in"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${cormorant.variable} ${inter.variable} dark`} suppressHydrationWarning>
      <head>
        {/* Sync theme before paint — prevents flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('astrojain-theme')||'dark';document.documentElement.classList.add(t);}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-inter antialiased">
        <ThemeProvider>
          <CustomCursor />
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
