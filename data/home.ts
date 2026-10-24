import {
  BriefcaseBusiness,
  Building2,
  Clock,
  Globe,
  Hand,
  Hash,
  HeartHandshake,
  House,
  IndianRupee,
  Lock,
  Moon,
  Baby,
  ScanFace,
  Scale,
  Sprout,
  type LucideIcon,
} from "lucide-react";

export const disciplines = [
  "Kundli Matching",
  "Face Reading",
  "Horoscope Reading",
  "Numerology",
  "Vastu Shastra",
  "Gemstone Advice",
  "Palmistry",
  "Muhurta",
  "Aura Reading",
];

export type Lens = { icon: LucideIcon; title: string; reveals: string; href: string };

export const lenses: Lens[] = [
  {
    icon: Moon,
    title: "Your Kundli",
    reveals:
      "The planetary periods you are in now, what they are doing to marriage, career and money, and when they change.",
    href: "/services/horoscope-reading",
  },
  {
    icon: ScanFace,
    title: "Your Face",
    reveals:
      "The permanent features of your face show your instincts and the patterns that keep repeating, even when the birth time is uncertain.",
    href: "/services/face-reading",
  },
  {
    icon: Hand,
    title: "Your Palm",
    reveals:
      "Life, head, heart and fate lines confirm the chart and show how your choices are shaping the years ahead.",
    href: "/services/palmistry",
  },
  {
    icon: Hash,
    title: "Your Numbers",
    reveals:
      "Your date of birth and the spelling of your name or business show whether they support you or create friction.",
    href: "/services/numerology",
  },
  {
    icon: House,
    title: "Your Space",
    reveals:
      "The layout of your home, shop or office can quietly drain peace and money. Vastu shows what to correct without demolition.",
    href: "/services/vastu-shastra",
  },
];

export type Audience = { icon: LucideIcon; title: string; body: string; href: string };

export const audiences: Audience[] = [
  {
    icon: HeartHandshake,
    title: "Families Planning A Marriage",
    body: "Parents who want an honest kundli milan, a clear view on Mangal dosha and an auspicious wedding date before saying yes.",
    href: "/services/kundli-matching",
  },
  {
    icon: BriefcaseBusiness,
    title: "Professionals At A Crossroads",
    body: "People weighing a job change, a move abroad or a new field, who want to know which path suits them and when to move.",
    href: "/services/horoscope-reading",
  },
  {
    icon: Building2,
    title: "Business Owners Facing Losses",
    body: "Owners whose sales dropped or cash flow dried up, looking at timing, business name numerology and the Vastu of their premises.",
    href: "/services/vastu-shastra",
  },
  {
    icon: House,
    title: "New Homes And Property Buyers",
    body: "Families moving into a new house or choosing a plot, who want the direction, layout and griha pravesh muhurta right.",
    href: "/services/vastu-shastra",
  },
  {
    icon: Baby,
    title: "Parents Naming A Child",
    body: "Parents choosing a name for a newborn whose numbers and sound support the child from the very start.",
    href: "/services/numerology",
  },
  {
    icon: Globe,
    title: "Clients Across India And Abroad",
    body: "Indians living in other cities and countries who consult by video call, phone or WhatsApp, at a time that suits their time zone.",
    href: "/contact#book",
  },
];

export type Commitment = { icon: LucideIcon; title: string; body: string };

export const promises: Commitment[] = [
  {
    icon: Scale,
    title: "Honest, Even When The Answer Is No",
    body: "If a match is weak or a plan is badly timed, you will hear it plainly, with what can be done about it.",
  },
  {
    icon: IndianRupee,
    title: "One Fixed Fee, Told Upfront",
    body: "A consultation is ₹1,100 per sitting. No surprise charges, and nothing to buy to receive your reading.",
  },
  {
    icon: Sprout,
    title: "Remedies You Can Afford",
    body: "Mantras, charity and simple routines come first. Many remedies cost nothing; gemstones only when the chart truly needs them.",
  },
  {
    icon: Lock,
    title: "Complete Confidentiality",
    body: "Your birth details, family matters and questions stay between you and Sachin Jain. Always.",
  },
  {
    icon: Clock,
    title: "Time For Every Question",
    body: "Your chart is prepared before your session starts, so the full 45 to 60 minutes is spent on what matters to you.",
  },
];
