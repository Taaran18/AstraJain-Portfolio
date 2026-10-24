import type { Faq } from "@/data/services";
import { site } from "@/lib/site";

export const generalFaqs: Faq[] = [
  {
    q: "How much does a consultation with Sachin Jain cost?",
    a: `A consultation is ${site.consultationFee} per sitting. The fee is confirmed when you book, and you are never asked to pay for remedies, pujas or gemstones to receive your reading.`,
  },
  {
    q: "How long does a consultation take?",
    a: "A standard consultation takes 45 to 60 minutes. Extended sessions are available when you want several areas of life covered in depth.",
  },
  {
    q: "What details do I need for a horoscope or kundli reading?",
    a: "Your date of birth, the most accurate time of birth you have and your place of birth. For kundli matching, bring the same details for both partners.",
  },
  {
    q: "Is an online consultation as accurate as meeting in person?",
    a: "Yes. A reading depends on your birth details, not on where you sit. Every consultation is held online, by video call, phone or WhatsApp, with your chart prepared before the session.",
  },
  {
    q: "How soon can I get an appointment?",
    a: "Usually within 1 to 3 days. For urgent questions, call or WhatsApp and we will try to fit you in sooner.",
  },
  {
    q: "Will my details be kept private?",
    a: "Yes. Your birth details and everything you discuss stay confidential and are never shared with anyone else.",
  },
  {
    q: "Do you give remedies along with predictions?",
    a: "Yes. Every consultation ends with practical remedies, such as mantras, charity, simple rituals or, where your chart supports it, a gemstone. Many cost nothing.",
  },
];

export const additionalServices = [
  "Aura and energy reading",
  "Chakra reading",
  "Pranic healing",
  "Gem therapy",
  "Vedic pooja arrangements",
  "Muhurta for weddings, griha pravesh and business launches",
  "Monthly insight updates on WhatsApp",
];
