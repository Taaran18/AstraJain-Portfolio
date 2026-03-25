export const SITE_CONFIG = {
  name: "AstroJain",
  astrologer: "Sachin Jain",
  tagline: "Ancient Wisdom. Modern Guidance.",
  description:
    "Consult Jaipur's most trusted Vedic astrologer for personalized horoscope readings, kundli matching, and life guidance rooted in centuries of astrological wisdom.",
  phone1: "+91 9694553351",
  phone2: "+91 7878095569",
  whatsapp: "919694553351",
  email: "sachinjain@astrojain.in",
  address: {
    line1: "F-18, 1st Floor, Gautam Marg",
    line2: "Sector 6, Vaishali Nagar",
    city: "Jaipur",
    state: "Rajasthan",
    pin: "302021",
  },
  hours: "9:00 AM – 8:00 PM (All Days)",
  social: {
    facebook: "https://www.facebook.com/astrojain.in",
    instagram: "https://www.instagram.com/astrojain.in",
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  { label: "Book Consultation", href: "/contact#book", highlight: true },
];

export const SERVICES = [
  {
    id: "horoscope",
    icon: "☽",
    title: "Horoscope Reading",
    subtitle: "Birth Chart Analysis",
    description:
      "A deeply personalized analysis of your natal chart, revealing planetary positions at the moment of your birth and how they shape your personality, destiny, and life path.",
    features: [
      "Daily, weekly & yearly predictions",
      "Detailed birth chart (Kundli) interpretation",
      "Planetary transit analysis",
      "Dasha period guidance",
    ],
    color: "from-indigo-900/40 to-purple-900/40",
    accent: "#818cf8",
  },
  {
    id: "vedic",
    icon: "✦",
    title: "Vedic Astrology",
    subtitle: "Traditional Jyotish Science",
    description:
      "Rooted in 5,000 years of Indian tradition, Vedic Jyotish provides profound insights into your karma, dharma, and the cosmic blueprint of your soul's journey.",
    features: [
      "Kundli matching for marriage",
      "Mangal Dosha analysis",
      "Remedies for planetary afflictions",
      "Auspicious muhurta selection",
    ],
    color: "from-violet-900/40 to-indigo-900/40",
    accent: "#a78bfa",
  },
  {
    id: "palmistry",
    icon: "🤲",
    title: "Palmistry",
    subtitle: "Lines of Destiny",
    description:
      "Your hands hold the map of your life. Expert palmistry decodes the major and minor lines, mounts, and markings to reveal hidden truths about your potential and path.",
    features: [
      "Major life line interpretation",
      "Career & success line analysis",
      "Relationship & marriage lines",
      "Health & longevity indicators",
    ],
    color: "from-purple-900/40 to-fuchsia-900/40",
    accent: "#c084fc",
  },
  {
    id: "numerology",
    icon: "◈",
    title: "Numerology",
    subtitle: "The Science of Numbers",
    description:
      "Numbers are the language of the universe. Numerological analysis of your name and birth date unlocks your life path number, destiny, and hidden strengths.",
    features: [
      "Life path & destiny number",
      "Name correction for success",
      "Lucky numbers, dates & colors",
      "Business name numerology",
    ],
    color: "from-blue-900/40 to-indigo-900/40",
    accent: "#60a5fa",
  },
  {
    id: "gemstone",
    icon: "◆",
    title: "Gemstone Consultation",
    subtitle: "Planetary Remedies",
    description:
      "Certified gemstones carry the vibrational frequency of planets. A precise consultation ensures you wear stones that amplify positive energies and protect against malefic influences.",
    features: [
      "Personalized gemstone recommendation",
      "Certified, authentic stones only",
      "Wearing guidance & activation rituals",
      "Metal & finger specifications",
    ],
    color: "from-teal-900/40 to-cyan-900/40",
    accent: "#2dd4bf",
  },
  {
    id: "vastu",
    icon: "⌂",
    title: "Vastu Shastra",
    subtitle: "Harmonious Spaces",
    description:
      "Transform your living and working spaces into sanctuaries of positive energy. Vastu aligns your environment with cosmic principles to invite prosperity, health, and harmony.",
    features: [
      "Residential & commercial consultation",
      "Site selection & direction analysis",
      "Remedies without demolition",
      "Energy-enhancing placements",
    ],
    color: "from-amber-900/40 to-orange-900/40",
    accent: "#fbbf24",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Anjali Sharma",
    role: "Business Owner, Jaipur",
    text: "Sachin Ji's readings have been a true guiding light in my life. His predictions are remarkably accurate, and the remedies he suggested helped me navigate through a very difficult phase. I feel a sense of clarity and peace I had not felt in years.",
    rating: 5,
    date: "March 2024",
    initial: "A",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Software Engineer, Pune",
    text: "I was facing serious career stagnation and personal setbacks for over two years. After consulting Sachin Ji, the remedies and guidance he gave completely transformed my situation. Within months I received a major promotion. His insight is extraordinary.",
    rating: 5,
    date: "January 2024",
    initial: "R",
  },
  {
    id: 3,
    name: "Priya Verma",
    role: "Homemaker, Delhi",
    text: "His Vastu consultation transformed our new home into a true haven of peace and prosperity. We had been struggling with constant tension and financial stress. After implementing his recommendations, everything changed for the better. Truly grateful.",
    rating: 5,
    date: "February 2024",
    initial: "P",
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Entrepreneur, Jaipur",
    text: "The gemstone consultation was incredibly precise. Sachin Ji explained everything in detail – which stone, which finger, which metal, and at what time to wear it. After wearing the suggested stone, I noticed a remarkable improvement in my business dealings.",
    rating: 5,
    date: "April 2024",
    initial: "V",
  },
  {
    id: 5,
    name: "Meera Patel",
    role: "Teacher, Ahmedabad",
    text: "I consulted for kundli matching before my daughter's wedding. Sachin Ji was thorough, compassionate, and honest. He identified a minor dosha and gave simple, practical remedies. The wedding was beautiful and the couple are now very happy.",
    rating: 5,
    date: "December 2023",
    initial: "M",
  },
];

export const WHY_CHOOSE = [
  {
    icon: "✦",
    title: "Proven Accuracy",
    description:
      "Over two decades of practice with consistently accurate predictions backed by deep Vedic knowledge and intuitive insight.",
  },
  {
    icon: "◈",
    title: "Holistic Approach",
    description:
      "Every consultation considers the full spectrum – planetary positions, karmic patterns, and practical life circumstances.",
  },
  {
    icon: "◆",
    title: "Complete Confidentiality",
    description:
      "Your personal details and life matters are treated with the highest discretion. Privacy is a sacred commitment, not just a policy.",
  },
  {
    icon: "☽",
    title: "Actionable Guidance",
    description:
      "Beyond predictions, receive clear, practical remedies and guidance you can implement immediately to shift your circumstances.",
  },
  {
    icon: "✧",
    title: "20+ Years Experience",
    description:
      "Thousands of satisfied clients across India and abroad, with expertise spanning all major branches of Vedic astrology.",
  },
  {
    icon: "⌂",
    title: "Online & In-Person",
    description:
      "Consult from anywhere in the world via phone, video call, or visit the Jaipur office for an in-person session.",
  },
];
