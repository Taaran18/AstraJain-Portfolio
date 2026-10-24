const vercelHost =
  process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL;

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (vercelHost ? `https://${vercelHost}` : "https://www.astrojain.in");

export const site = {
  name: "AstroJain",
  astrologer: "Sachin Jain",
  url: siteUrl.replace(/\/$/, ""),
  locale: "en_IN",
  tagline: "Vedic Astrology · Jaipur",
  experience: "40 years",
  experienceYears: 40,
  clientsServed: "5,000+",
  consultationFee: "₹1,100",
  email: "sachinjain@astrojain.in",
  phones: [
    { display: "+91 96945 53351", tel: "+919694553351" },
    { display: "+91 78780 95569", tel: "+917878095569" },
  ],
  whatsapp: "919694553351",
  location: {
    city: "Jaipur",
    region: "Rajasthan",
    country: "IN",
    label: "Based in Jaipur · Consultations online worldwide",
  },
  consultationModes: "Video call, phone or WhatsApp",
  hours: { label: "9:00 AM – 8:00 PM, all days", opens: "09:00", closes: "20:00" },
  languages: ["Hindi", "English"],
  socials: [
    { label: "Facebook", brand: "facebook", href: "https://www.facebook.com/astrojain.in" },
    { label: "Instagram", brand: "instagram", href: "https://www.instagram.com/astrojain.in" },
  ],
} as const;

export const primaryPhone = site.phones[0];

export function absoluteUrl(path = "/") {
  return `${site.url}${path === "/" ? "" : path}`;
}

export const whatsappEnquiry =
  "Namaste Sachin Jain, I would like to book an online consultation.\nService:\nPreferred date:\nVideo call or phone:";

export function whatsappLink(message: string = whatsappEnquiry) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
