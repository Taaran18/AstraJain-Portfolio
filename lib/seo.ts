import type { Metadata } from "next";
import { absoluteUrl, site } from "@/lib/site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  noindex?: boolean;
  keywords?: string[];
};

export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle,
  noindex,
  keywords,
}: PageMetaInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: {
      canonical: path,
      languages: { "en-IN": path, "x-default": path },
    },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "website",
      locale: site.locale,
      siteName: site.name,
      url: path,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export const businessId = `${site.url}/#business`;
export const personId = `${site.url}/about#sachin-jain`;
const websiteId = `${site.url}/#website`;

export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": businessId,
    name: `${site.name} – ${site.astrologer}, Vedic Astrologer`,
    alternateName: [site.name, `${site.astrologer} Astrologer Jaipur`],
    url: site.url,
    logo: absoluteUrl("/icon.svg"),
    image: absoluteUrl("/opengraph-image"),
    description:
      "Vedic and face reading astrologer based in Jaipur offering online kundli matching, horoscope and birth chart reading, palmistry, numerology, gemstone advice and Vastu Shastra consultations by video call, phone and WhatsApp.",
    telephone: site.phones.map((p) => p.tel),
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location.city,
      addressRegion: site.location.region,
      addressCountry: site.location.country,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: site.hours.opens,
      closes: site.hours.closes,
    },
    areaServed: [
      { "@type": "City", name: "Jaipur" },
      { "@type": "Country", name: "India" },
      { "@type": "Place", name: "Worldwide" },
    ],
    knowsLanguage: site.languages,
    sameAs: site.socials.map((s) => s.href),
    founder: { "@id": personId },
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: site.astrologer,
    jobTitle: "Vedic Astrologer",
    url: absoluteUrl("/about"),
    worksFor: { "@id": businessId },
    knowsAbout: [
      "Vedic astrology",
      "Kundli matching",
      "Horoscope reading",
      "Palmistry",
      "Numerology",
      "Gemstone recommendation",
      "Vastu Shastra",
    ],
    knowsLanguage: site.languages,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location.city,
      addressRegion: site.location.region,
      addressCountry: site.location.country,
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: site.name,
    url: site.url,
    inLanguage: "en-IN",
    publisher: { "@id": businessId },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema(input: {
  name: string;
  serviceType: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(input.path)}#service`,
    name: input.name,
    serviceType: input.serviceType,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: { "@id": businessId },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Place", name: "Worldwide" },
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      name: "Online consultation by video call, phone or WhatsApp",
      servicePhone: { "@type": "ContactPoint", telephone: site.phones[0].tel },
      availableLanguage: site.languages,
    },
  };
}

export function serviceListSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${absoluteUrl("/services")}#list`,
    name: "Astrology consultations",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
