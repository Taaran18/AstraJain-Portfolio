import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/sections/LegalPage";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const path = "/disclaimer";

export const metadata: Metadata = pageMetadata({
  title: "Disclaimer",
  description:
    "Important information about astrology readings, remedies and gemstone advice from AstroJain, and why they do not replace medical, legal or financial advice.",
  path,
});

const sections: LegalSection[] = [
  {
    id: "guidance",
    title: "Astrology Is Guidance, Not Certainty",
    body: (
      <p>
        Readings from {site.name} are based on the traditional principles of Vedic astrology,
        palmistry, numerology and Vastu Shastra. They describe tendencies and timing as these
        systems understand them. They are not scientific predictions, and no astrologer can promise
        that a particular event will or will not happen.
      </p>
    ),
  },
  {
    id: "professional-advice",
    title: "Not A Substitute For Professional Advice",
    body: (
      <>
        <p>
          A consultation does not replace advice from a qualified professional. Always speak to:
        </p>
        <ul>
          <li>A doctor about any physical health concern, pregnancy or medication.</li>
          <li>A mental health professional if you feel anxious, low or overwhelmed.</li>
          <li>A lawyer about legal, property or family disputes.</li>
          <li>A registered financial adviser before investing or borrowing money.</li>
        </ul>
        <p>
          Never stop or delay medical treatment because of an astrological reading. In an emergency
          in India, call 112.
        </p>
      </>
    ),
  },
  {
    id: "remedies",
    title: "Remedies And Gemstones",
    body: (
      <p>
        Suggested remedies, mantras, rituals and gemstones are traditional practices that you follow
        by your own choice. Gemstones are not medicine and do not treat illness. Results differ from
        person to person.
      </p>
    ),
  },
  {
    id: "testimonials",
    title: "Client Stories",
    body: (
      <p>
        The client experiences shown on this website are personal accounts. They describe what
        individual clients felt after a consultation and are not a promise that you will have the
        same experience.
      </p>
    ),
  },
  {
    id: "responsibility",
    title: "Your Decisions Are Your Own",
    body: (
      <p>
        You remain responsible for the decisions you make in your life, career, relationships and
        business. {site.name} is not liable for outcomes that follow from acting on a reading.
      </p>
    ),
  },
  {
    id: "website",
    title: "Website Information",
    body: (
      <p>
        We work to keep this website accurate and up to date, but its content is general
        information, not a personal reading. Links to other websites are provided for convenience,
        and we are not responsible for their content.
      </p>
    ),
  },
];

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      path={path}
      updated="24 October 2026"
      intro="Please read this before you act on any reading, remedy or gemstone recommendation."
      sections={sections}
    />
  );
}
