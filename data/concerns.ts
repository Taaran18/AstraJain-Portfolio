import {
  BriefcaseBusiness,
  HeartCrack,
  HeartHandshake,
  House,
  TrendingDown,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export type Concern = {
  title: string;
  body: string;
  cta: string;
  href: string;
  icon: LucideIcon;
};

export const concerns: Concern[] = [
  {
    title: "Marriage Keeps Getting Delayed",
    body: "Good proposals fall through, or the guna score has the family worried. Find out what your chart says about timing and whether this match is right.",
    cta: "Kundli Matching",
    href: "/services/kundli-matching",
    icon: HeartHandshake,
  },
  {
    title: "Career Stuck Despite Hard Work",
    body: "Years of effort, no promotion, no clear direction. Learn which field suits you and when your efforts are most likely to pay off.",
    cta: "Career Reading",
    href: "/services/horoscope-reading",
    icon: BriefcaseBusiness,
  },
  {
    title: "Business Losses And Slow Sales",
    body: "Cash flow dried up or the new shop never picked up. Check the timing in your chart, your business name and the Vastu of your premises.",
    cta: "Business Vastu And Numerology",
    href: "/services/vastu-shastra",
    icon: TrendingDown,
  },
  {
    title: "Money That Never Stays",
    body: "You earn, but savings keep slipping away. Understand the planetary patterns behind it and the periods when wealth builds.",
    cta: "Finance Astrology",
    href: "/services/horoscope-reading",
    icon: Wallet,
  },
  {
    title: "Love And Relationship Strain",
    body: "The same arguments keep coming back. See what your chart and your nature say about how you connect, and what would help.",
    cta: "Relationship Reading",
    href: "/services/face-reading",
    icon: HeartCrack,
  },
  {
    title: "Tension At Home Since The Move",
    body: "More quarrels, illness or expense after moving into a new house. Find Vastu corrections that need no demolition.",
    cta: "Home Vastu",
    href: "/services/vastu-shastra",
    icon: House,
  },
];
