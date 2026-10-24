import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/sections/LegalPage";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const path = "/terms-of-service";

export const metadata: Metadata = pageMetadata({
  title: "Terms Of Service",
  description:
    "The terms that apply when you use the AstroJain website or book an astrology, kundli, numerology or Vastu consultation with Sachin Jain.",
  path,
});

const sections: LegalSection[] = [
  {
    id: "agreement",
    title: "Agreement To These Terms",
    body: (
      <p>
        By using this website or booking a consultation with {site.name} ({site.astrologer}), you
        agree to these terms. If you do not agree, please do not use the website or book a session.
      </p>
    ),
  },
  {
    id: "services",
    title: "Our Services",
    body: (
      <p>
        We offer Vedic astrology consultations, including horoscope and birth chart reading, kundli
        matching, palmistry, numerology, gemstone recommendations, Vastu Shastra advice and muhurta
        selection. All sessions take place online, by video call, phone or WhatsApp.
      </p>
    ),
  },
  {
    id: "booking",
    title: "Booking A Consultation",
    body: (
      <ul>
        <li>
          Sending the booking form is a request, not a confirmed appointment. Your consultation is
          confirmed only when our team agrees a date and time with you.
        </li>
        <li>
          The consultation fee is told to you before your session is confirmed. Payment methods and
          timing are agreed at the same time.
        </li>
        <li>
          If you cannot attend, tell us as early as possible so we can offer the slot to someone
          else. Rescheduling and refund terms for paid sessions are confirmed with you when you
          book.
        </li>
      </ul>
    ),
  },
  {
    id: "your-responsibilities",
    title: "Your Responsibilities",
    body: (
      <ul>
        <li>
          Give accurate birth details. A reading can only be as accurate as the date, time and place
          it is based on.
        </li>
        <li>
          Share details of another person only with their permission, or as their parent or
          guardian.
        </li>
        <li>Do not misuse the website, send spam or try to disrupt it.</li>
      </ul>
    ),
  },
  {
    id: "remedies",
    title: "Remedies, Gemstones And Rituals",
    body: (
      <p>
        Any remedy, gemstone, mantra or ritual we suggest is optional. You decide whether to follow
        it. You are never required to buy a product or book a puja through us to receive a reading.
      </p>
    ),
  },
  {
    id: "no-guarantee",
    title: "No Guaranteed Outcomes",
    body: (
      <p>
        Astrology offers guidance based on traditional principles. We do not guarantee any
        particular result in marriage, career, health, money or any other area of life. Please read
        our <Link href="/disclaimer">Disclaimer</Link> before acting on a reading.
      </p>
    ),
  },
  {
    id: "content",
    title: "Website Content",
    body: (
      <p>
        The text, design and logo on this website belong to {site.name}. You may share links to our
        pages, but you may not copy or republish the content without our written permission.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation Of Liability",
    body: (
      <p>
        To the extent the law allows, {site.name} is not liable for decisions you make or losses you
        suffer based on a consultation or on content from this website. Nothing in these terms
        limits any right you have under Indian consumer protection law.
      </p>
    ),
  },
  {
    id: "privacy",
    title: "Privacy",
    body: (
      <p>
        How we handle your personal and birth details is explained in our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>
    ),
  },
  {
    id: "law",
    title: "Governing Law",
    body: (
      <p>
        These terms are governed by the laws of India. Any dispute will be handled by the courts at
        Jaipur, Rajasthan.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes To These Terms",
    body: (
      <p>
        We may update these terms from time to time. The version on this page, with the date at the
        top, is the one that applies when you book.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms Of Service"
      path={path}
      updated="24 October 2026"
      intro="The ground rules for using this website and booking a consultation with Sachin Jain."
      sections={sections}
    />
  );
}
