export const galleryCategories = ["Sachin Jain", "Consultations", "Practices"] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  description: string;
  category: GalleryCategory;
  href?: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "portrait",
    src: "/images/sachin-jain-astrologer-jaipur-portrait.jpg",
    width: 1210,
    height: 1238,
    alt: "Vedic astrologer Sachin Jain in a blue brocade jacket at his Jaipur office",
    title: "Sachin Jain, Vedic Astrologer",
    description:
      "Sachin Jain reads every chart himself and explains it in plain Hindi or English, so you leave knowing exactly what was said and why.",
    category: "Sachin Jain",
    href: "/about",
  },
  {
    id: "office",
    src: "/images/sachin-jain-vedic-astrologer-office.jpg",
    width: 600,
    height: 600,
    alt: "Sachin Jain seated at his desk in the AstroJain office, Jaipur",
    title: "Where Your Reading Is Prepared",
    description:
      "Sachin Jain studies every chart at his desk before your online session, so the full time is spent on your questions.",
    category: "Consultations",
    href: "/contact",
  },
  {
    id: "desk",
    src: "/images/sachin-jain-astrologer-consultation-desk.jpg",
    width: 960,
    height: 1280,
    alt: "Sachin Jain at his consultation desk with a gemstone tree beside him",
    title: "Ready For Your Session",
    description:
      "Your kundli is prepared before your online session, so the full time is spent on your questions rather than on calculations.",
    category: "Consultations",
    href: "/services/horoscope-reading",
  },
  {
    id: "online",
    src: "/images/sachin-jain-online-consultation.jpg",
    width: 600,
    height: 400,
    alt: "Sachin Jain giving an online astrology consultation on a laptop",
    title: "Online Consultations",
    description:
      "Video, phone and WhatsApp sessions for clients across India and abroad, wherever they live.",
    category: "Consultations",
    href: "/contact#book",
  },
  {
    id: "office-wide",
    src: "/images/sachin-jain-astrology-office-jaipur.jpg",
    width: 960,
    height: 1280,
    alt: "Wide view of Sachin Jain's astrology consultation room in Jaipur",
    title: "A Private Consultation Room",
    description:
      "Every conversation stays confidential. Nothing you share is discussed with anyone else.",
    category: "Consultations",
    href: "/about",
  },
  {
    id: "traditional",
    src: "/images/sachin-jain-traditional-attire.jpg",
    width: 960,
    height: 1280,
    alt: "Sachin Jain in a cream jacket and yellow kurta at a cultural event",
    title: "Rooted In Tradition",
    description:
      "Sachin Jain's approach rests on classical Jyotish texts, applied to the decisions families face today.",
    category: "Sachin Jain",
    href: "/about",
  },
  {
    id: "event",
    src: "/images/sachin-jain-astrologer-event.jpg",
    width: 960,
    height: 1280,
    alt: "Sachin Jain standing in traditional dress before a decorated wall",
    title: "Guidance For Families",
    description:
      "From kundli milan to choosing a wedding muhurta, families return to Sachin Jain for every important occasion.",
    category: "Sachin Jain",
    href: "/services/kundli-matching",
  },
  {
    id: "palm",
    src: "/images/palm-reading-session.jpg",
    width: 600,
    height: 400,
    alt: "Hands held open during a palm reading by candlelight",
    title: "Palm Reading",
    description:
      "The lines and mounts of both hands are read together with your kundli, which helps when the birth time is uncertain.",
    category: "Practices",
    href: "/services/palmistry",
  },
  {
    id: "kundli",
    src: "/images/kundli-chart-analysis.jpg",
    width: 797,
    height: 1197,
    alt: "A hand-drawn birth chart being studied with a pen on a table",
    title: "Kundli Analysis",
    description:
      "Planetary positions, dashas and transits are worked out in detail before any prediction is made.",
    category: "Practices",
    href: "/services/horoscope-reading",
  },
  {
    id: "planets",
    src: "/images/planets-vedic-astrology.jpg",
    width: 934,
    height: 1400,
    alt: "Illustration of planets orbiting in a cosmic spiral",
    title: "The Nine Grahas",
    description:
      "Vedic astrology studies the Sun, Moon, five planets and the nodes Rahu and Ketu, and how their periods shape your life.",
    category: "Practices",
    href: "/services",
  },
  {
    id: "chakra",
    src: "/images/chakra-energy-reading.jpg",
    width: 797,
    height: 1197,
    alt: "Illustration of a meditating figure with the seven chakras glowing",
    title: "Aura And Energy Reading",
    description:
      "Aura reading is often paired with face reading to understand how you feel right now, not only what your chart predicts.",
    category: "Practices",
    href: "/services/face-reading",
  },
];
