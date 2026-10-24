import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/sections/LegalPage";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const path = "/privacy-policy";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How AstroJain collects, uses and protects the contact and birth details you share when you book a consultation.",
  path,
});

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who We Are",
    body: (
      <p>
        This website is run by {site.name}, the online astrology practice of {site.astrologer},
        based in Jaipur, Rajasthan, India. In this policy, &ldquo;we&rdquo; and &ldquo;us&rdquo;
        mean {site.name}. We decide how your personal data is used, so we are the data fiduciary
        under India&apos;s Digital Personal Data Protection Act, 2023.
      </p>
    ),
  },
  {
    id: "what-we-collect",
    title: "What We Collect",
    body: (
      <>
        <p>We only collect what we need to arrange and prepare your consultation:</p>
        <ul>
          <li>
            <strong>Contact details:</strong> your name, phone or WhatsApp number and, if you give
            it, your email address.
          </li>
          <li>
            <strong>Booking details:</strong> the consultation you want, how you want to consult,
            your preferred date and your message.
          </li>
          <li>
            <strong>Birth details (optional):</strong> date, time and place of birth. Astrology
            readings depend on these, so we treat them with particular care.
          </li>
          <li>
            <strong>Technical and usage data:</strong> your IP address and basic request
            information, which our hosting provider records for security and to stop abuse of the
            booking form, and website usage statistics collected by Google Analytics.
          </li>
        </ul>
        <p>
          We do not ask for payment card details, government ID numbers or passwords on this
          website.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    body: (
      <ul>
        <li>To contact you about your request and confirm a consultation time.</li>
        <li>To prepare your chart and reading before the session.</li>
        <li>To answer follow-up questions you send us.</li>
        <li>To protect the website from spam and misuse.</li>
        <li>To understand which pages help visitors, so we can improve the website.</li>
      </ul>
    ),
  },
  {
    id: "legal-basis",
    title: "Your Consent",
    body: (
      <p>
        We process your details because you agree to it when you tick the consent box and send the
        booking form, or when you contact us by phone, WhatsApp or email. You can withdraw consent
        at any time by contacting us. Withdrawing consent does not affect anything we did before you
        withdrew it, but we may not be able to complete your consultation without the details it
        needs.
      </p>
    ),
  },
  {
    id: "sharing",
    title: "Who We Share It With",
    body: (
      <>
        <p>We never sell your data or share it for advertising. It reaches only:</p>
        <ul>
          <li>
            <strong>Our email delivery provider (Resend),</strong> which carries your booking form
            to our inbox.
          </li>
          <li>
            <strong>Our hosting provider (Vercel),</strong> which runs this website and keeps
            short-term technical logs.
          </li>
          <li>
            <strong>WhatsApp (Meta),</strong> only if you choose to message us there.
            WhatsApp&apos;s own privacy policy applies to those chats.
          </li>
          <li>
            <strong>Google Analytics,</strong> which tells us how visitors use the website, such as
            which pages are viewed and whether the booking form, call or WhatsApp buttons are used.
            It never receives the contents of your booking form or your birth details.
          </li>
          <li>Authorities, only when Indian law requires us to.</li>
        </ul>
      </>
    ),
  },
  {
    id: "storage",
    title: "Cookies And Browser Storage",
    body: (
      <>
        <p>This website does not use advertising cookies. It uses the following:</p>
        <ul>
          <li>
            <strong>Google Analytics cookies</strong>, which count visits and show us how the site
            is used (pages viewed, device type, approximate city or country, and clicks on the
            booking, call and WhatsApp buttons). This helps us improve the website. You can block
            these cookies in your browser settings or with Google&apos;s{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
            >
              Analytics opt-out add-on
            </a>
            .
          </li>
          <li>Your light or dark theme choice, so the site looks the way you left it.</li>
          <li>
            A draft of the booking form while you fill it in, so a page refresh does not lose your
            details. The draft lives only in the current browser tab, is deleted when you close the
            tab, send the form or press Clear Form, and is never sent to us until you submit.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "retention",
    title: "How Long We Keep It",
    body: (
      <p>
        Booking requests arrive in our email inbox; the website itself does not keep a database of
        them. We keep your details for as long as we are consulting with you and for a reasonable
        period afterwards so we can answer follow-up questions. Ask us at any time and we will
        delete them, unless the law requires us to keep a record.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your Rights",
    body: (
      <>
        <p>Under the Digital Personal Data Protection Act, 2023, you can ask us to:</p>
        <ul>
          <li>Tell you what personal data we hold about you and how we use it.</li>
          <li>Correct or update details that are wrong or incomplete.</li>
          <li>Erase your details when they are no longer needed.</li>
          <li>Nominate someone to exercise these rights for you.</li>
        </ul>
        <p>
          Send your request to <a href={`mailto:${site.email}`}>{site.email}</a>. We will reply
          within a reasonable time. If you are not satisfied with our answer, you can complain to
          the Data Protection Board of India.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "How We Protect It",
    body: (
      <p>
        The website is served only over HTTPS, the booking form checks every field before it is
        accepted, and repeated or automated submissions are blocked. No method of sending data over
        the internet is completely secure, so please do not include anything in your message that
        you would not want to share by email.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <p>
        Consultations are booked by adults. If you share a child&apos;s birth details, for example
        for a naming or education reading, you confirm that you are the child&apos;s parent or
        lawful guardian.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes To This Policy",
    body: (
      <p>If we change how we handle your data, we will update this page and the date at the top.</p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      path={path}
      updated="24 October 2026"
      intro="What we collect when you book a consultation, why we need it, and how you stay in control of it."
      sections={sections}
    />
  );
}
