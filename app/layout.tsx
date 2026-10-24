import type { Metadata, Viewport } from "next";
import { Cinzel, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { Analytics } from "@/components/seo/Analytics";
import { businessSchema, personSchema, websiteSchema } from "@/lib/seo";
import { site } from "@/lib/site";
import { themeInitScript } from "@/lib/theme";

const display = Cinzel({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Best Astrologer In Jaipur | Sachin Jain, Vedic Astrologer | AstroJain",
    template: `%s | ${site.name}`,
  },
  description:
    "Consult Sachin Jain, Jaipur-based Vedic astrologer with 40 years of practice, online for kundli matching, marriage, career and business guidance, numerology and Vastu.",
  applicationName: site.name,
  authors: [{ name: site.astrologer, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "Astrology",
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
  },
  twitter: { card: "summary_large_image" },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf8f1" },
    { media: "(prefers-color-scheme: dark)", color: "#070a1c" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-IN"
      className={`${display.variable} ${serif.variable} ${body.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <MotionProvider>
          <Navbar />
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
          <FloatingActions />
        </MotionProvider>
        <JsonLd data={[businessSchema(), personSchema(), websiteSchema()]} />
        <Analytics />
      </body>
    </html>
  );
}
