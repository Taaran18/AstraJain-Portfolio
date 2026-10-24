import {
  Gem,
  Hand,
  Hash,
  HeartHandshake,
  House,
  Moon,
  ScanFace,
  type LucideIcon,
} from "lucide-react";

export type Faq = { q: string; a: string };

export type ServicePage = {
  slug: string;
  name: string;
  navLabel: string;
  shortName: string;
  cardLink: string;
  icon: LucideIcon;
  serviceType: string;
  keywords: string[];
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  cardSummary: string;
  problems: string[];
  outcomes: { title: string; body: string }[];
  includes: string[];
  bring: string[];
  faqs: Faq[];
  related: string[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "kundli-matching",
    name: "Kundli Matching",
    navLabel: "Kundli Matching For Marriage",
    shortName: "Kundli Matching For Marriage",
    cardLink: "Check Your Kundli Milan",
    icon: HeartHandshake,
    serviceType: "Kundli matching (Vedic marriage compatibility)",
    keywords: [
      "kundli matching in jaipur",
      "kundli milan",
      "kundli matching for marriage",
      "manglik dosha matching",
      "online kundli matching by astrologer",
    ],
    metaTitle: "Kundli Matching For Marriage In Jaipur | Kundli Milan",
    metaDescription:
      "Kundli milan by Jaipur Vedic astrologer Sachin Jain: 36 guna matching, Manglik dosha check and cancellation, and honest advice for families. Online consultations.",
    h1: "Kundli Matching In Jaipur That Looks Beyond The Guna Score",
    intro:
      "A score out of 36 from an app cannot tell you whether a marriage will be happy. Sachin Jain reads both kundlis in full, checks Mangal dosha properly and tells you plainly whether the match is strong, workable with care, or a real concern.",
    cardSummary:
      "Guna milan, Manglik dosha and full chart comparison for both partners, with a clear yes, no or what to watch.",
    problems: [
      "The rishta feels right, but the online guna score came out low and the families are worried.",
      "One partner is Manglik and you have heard conflicting advice on whether that is a problem.",
      "Two astrologers or apps gave two different answers and you need a reliable second opinion.",
      "You want to know the right time for the wedding, not just whether the charts match.",
    ],
    outcomes: [
      {
        title: "A Clear Verdict, Not Just A Number",
        body: "You learn what the 36-point guna milan means for this couple, which kootas matter most and which low scores are cancelled by other factors in the charts.",
      },
      {
        title: "Mangal Dosha Checked Properly",
        body: "Many Manglik matches are fine once cancellation rules, the partner's chart and the age at marriage are considered. Where a real dosha exists, you get practical remedies.",
      },
      {
        title: "Timing For The Wedding",
        body: "Dasha periods for both partners are compared so you can choose a supportive year and an auspicious muhurta for the ceremony.",
      },
    ],
    includes: [
      "Ashtakoot guna milan with every koota explained",
      "Mangal dosha check for both partners, including cancellations",
      "7th house, Venus and Jupiter strength for marriage",
      "Dasha comparison for the coming years",
      "Simple remedies only where they are actually needed",
      "Wedding muhurta suggestions on request",
    ],
    bring: [
      "Date, time and place of birth for both partners",
      "Any kundli or matching report you already have",
      "The questions your family is most worried about",
    ],
    faqs: [
      {
        q: "How many gunas are needed for a good kundli match?",
        a: "Traditionally 18 or more out of 36 is accepted, but the total alone is not enough. A match with 24 gunas can have a serious issue, and one with 16 can be strong once the full charts are read. Sachin Jain explains which factors matter for your couple.",
      },
      {
        q: "Can a Manglik marry a non-Manglik?",
        a: "Often, yes. Mangal dosha can be cancelled by the position of Mars, the partner's chart or other factors. Sachin Jain checks this case by case and suggests a remedy only when a real dosha remains.",
      },
      {
        q: "Can you do kundli matching online?",
        a: "Yes. All consultations are online. Send both partners' birth details and the full reading is done by video call, phone or WhatsApp.",
      },
      {
        q: "What if we do not know the exact birth time?",
        a: "Share the closest time you have. Sachin Jain will tell you which conclusions are still reliable and, where needed, use palmistry or birth time rectification to fill the gap.",
      },
    ],
    related: ["horoscope-reading", "numerology", "gemstone-consultation"],
  },
  {
    slug: "face-reading",
    name: "Face Reading",
    navLabel: "Face Reading (Physiognomy)",
    shortName: "Face Reading Astrology",
    cardLink: "Book A Face Reading",
    icon: ScanFace,
    serviceType: "Face reading (physiognomy) with birth chart verification",
    keywords: [
      "face reading astrologer in jaipur",
      "face reading in jaipur",
      "physiognomy reading",
      "face reader near me",
    ],
    metaTitle: "Face Reading Astrologer In Jaipur",
    metaDescription:
      "Face reading by Sachin Jain, Jaipur: forehead, eyes, nose, lips and jaw read together, then cross-checked with your kundli for career, love and money.",
    h1: "Face Reading Astrologer In Jaipur, Checked Against Your Kundli",
    intro:
      "A horoscope tells you what the planets are doing. A face reading tells you who you are: the instincts you can trust, the patterns that keep repeating and the strengths others have missed. Sachin Jain reads the permanent features of your face, then confirms every observation with your birth chart.",
    cardSummary:
      "Sachin Jain's specialty: five facial zones read together and cross-checked with your birth chart.",
    problems: [
      "You have had a horoscope reading but still feel something about your situation is unexplained.",
      "The same problems keep repeating in work or relationships and you cannot see why.",
      "You do not know your exact birth time, so a chart alone feels uncertain.",
      "You want a reading that starts from you, without having to explain everything first.",
    ],
    outcomes: [
      {
        title: "Words For What You Already Sensed",
        body: "Clients often say the session put words to something they had felt about themselves for years: which instincts to trust and which patterns to change.",
      },
      {
        title: "Two Methods, One Answer",
        body: "Every observation from your face is checked against your birth chart, so the reading never rests on a single method.",
      },
      {
        title: "Practical Direction",
        body: "You leave with clear guidance for career, relationships and money, not just interesting observations.",
      },
    ],
    includes: [
      "Forehead: how your thinking and early life shaped you",
      "Eyes and eyebrows: emotional depth, intuition and trust",
      "Nose: money, decisions and the middle years of life",
      "Mouth and lips: communication and relationships",
      "Jaw and chin: determination and the later years",
      "Cross-check of every observation with your kundli",
    ],
    bring: [
      "Yourself: the reading can begin without any paperwork",
      "Your birth details, so observations can be confirmed against your chart",
      "A clear, front-facing photo in daylight, for online sessions",
    ],
    faqs: [
      {
        q: "What does Sachin Jain look at during a face reading?",
        a: "He studies the forehead, eyes, nose, lips and jawline as separate zones, each linked to a different area of life, then combines them into one reading rather than judging any single feature alone.",
      },
      {
        q: "Is face reading the same as a horoscope reading?",
        a: "No. A horoscope is based on your birth chart alone. A face reading works from your physical features and is then cross-checked against your chart, giving you two independent sources instead of one.",
      },
      {
        q: "How is face reading different from a psychic reading?",
        a: "A psychic reading relies on intuition in the moment. Face reading works with fixed, observable features, which makes it more consistent and repeatable from one session to the next.",
      },
      {
        q: "Can I get a face reading without my birth details?",
        a: "Yes, the face reading itself can begin without them. Sharing your birth details lets Sachin Jain confirm what he sees against your chart.",
      },
    ],
    related: ["horoscope-reading", "palmistry", "kundli-matching"],
  },
  {
    slug: "horoscope-reading",
    name: "Horoscope Reading",
    navLabel: "Horoscope And Birth Chart Reading",
    shortName: "Horoscope And Birth Chart Reading",
    cardLink: "Get Your Kundli Read",
    icon: Moon,
    serviceType: "Vedic horoscope and birth chart (kundli) reading",
    keywords: [
      "horoscope reading in jaipur",
      "birth chart reading",
      "kundli reading",
      "career astrology",
      "marriage delay astrology",
    ],
    metaTitle: "Kundli And Birth Chart Reading In Jaipur",
    metaDescription:
      "Kundli (birth chart) reading by Sachin Jain in Jaipur or online. Clear answers on career, marriage delay, money and Sade Sati, with simple remedies.",
    h1: "Kundli And Horoscope Reading In Jaipur For Real-Life Questions",
    intro:
      "When marriage keeps getting delayed, a job will not move or money keeps slipping away, you want to know why and when it will change. A full reading of your kundli shows the planetary periods behind it and the timing ahead.",
    cardSummary:
      "Your full kundli read for career, marriage, money and health, with dasha timing and practical remedies.",
    problems: [
      "Marriage proposals keep falling through and nobody can tell you why.",
      "You have worked hard for years but promotions and growth keep stalling.",
      "Shani Sade Sati, a difficult dasha or Kaal Sarp dosh has you anxious about what comes next.",
      "You face a big decision, such as a job change, a move abroad or a new business, and want the timing right.",
    ],
    outcomes: [
      {
        title: "Understand What Is Happening Now",
        body: "Your current mahadasha and antardasha, plus major transits like Saturn and Jupiter, explain why this phase feels the way it does.",
      },
      {
        title: "Know When Things Are Likely To Change",
        body: "You get the windows that favour marriage, career moves, property and investments, so you can plan instead of waiting.",
      },
      {
        title: "Remedies You Can Actually Follow",
        body: "Mantras, charity, fasting or gemstones are suggested only where your chart calls for them, explained simply and never as a condition for help.",
      },
    ],
    includes: [
      "Lagna, Moon sign and full house-by-house reading",
      "Current mahadasha and antardasha analysis",
      "Sade Sati, Kaal Sarp and Mangal dosha check",
      "Career, marriage, money and health outlook",
      "Favourable periods for major decisions",
      "Personal remedies with clear instructions",
    ],
    bring: [
      "Exact date, time and place of birth",
      "Your two or three most important questions",
      "Dates of major past events, if you want them checked",
    ],
    faqs: [
      {
        q: "How long does a horoscope reading take?",
        a: "A standard consultation takes 45 to 60 minutes. Longer sessions are available when you want several areas of life covered in depth.",
      },
      {
        q: "Can astrology explain a delay in marriage?",
        a: "Your chart can show the periods that delay marriage and the ones that support it. Sachin Jain identifies both and suggests remedies for the planets involved.",
      },
      {
        q: "Is an online reading as accurate as meeting in person?",
        a: "Yes. The reading depends on your birth details, not on where you sit. Your chart is prepared before the session and you get the full time for your questions.",
      },
      {
        q: "Will I be asked to buy expensive pujas or stones?",
        a: "No. Remedies are suggested only when your chart needs them, many cost nothing, and you are never required to buy anything from us.",
      },
    ],
    related: ["kundli-matching", "gemstone-consultation", "numerology"],
  },
  {
    slug: "numerology",
    name: "Numerology",
    navLabel: "Numerology And Name Correction",
    shortName: "Numerology And Name Correction",
    cardLink: "Check Your Numbers",
    icon: Hash,
    serviceType: "Numerology consultation and name correction",
    keywords: [
      "numerologist in jaipur",
      "name correction numerology",
      "business name numerology",
      "lucky number by date of birth",
    ],
    metaTitle: "Numerologist In Jaipur | Name Correction And Business Name",
    metaDescription:
      "Numerology in Jaipur by Sachin Jain: name correction, lucky numbers and business or brand name checks. Online by video, phone or WhatsApp.",
    h1: "Numerologist In Jaipur For Names, Businesses And Big Decisions",
    intro:
      "A name that is out of tune with your birth numbers can feel like constant friction. Numerology shows how your name, your date of birth and your business name work together, and how small spelling changes can bring them into line.",
    cardSummary:
      "Life path and destiny numbers, name spelling correction, business names and lucky dates.",
    problems: [
      "You are launching a business or brand and want a name that supports growth.",
      "Effort is not turning into results and you wonder whether your name is working against you.",
      "You are naming a newborn and want the numbers to be right from the start.",
      "You need a lucky date for signing, registering or launching something important.",
    ],
    outcomes: [
      {
        title: "Your Core Numbers Explained",
        body: "Life path, destiny and soul urge numbers show your natural strengths, the work that suits you and the patterns that keep repeating.",
      },
      {
        title: "A Name That Works For You",
        body: "Where a change helps, you get spelling options that keep your name recognisable while aligning it with your birth numbers.",
      },
      {
        title: "Better Dates And Numbers",
        body: "Lucky dates, colours and numbers for launches, signatures, vehicles and mobile numbers.",
      },
    ],
    includes: [
      "Life path, destiny and soul urge numbers",
      "Personal name compatibility check",
      "Spelling correction options where helpful",
      "Business, shop or brand name analysis",
      "Lucky dates, numbers and colours",
      "Newborn name suggestions on request",
    ],
    bring: [
      "Full date of birth",
      "Your name exactly as you use it, including spelling on documents",
      "Business or brand names you are considering",
    ],
    faqs: [
      {
        q: "Do I need to change my name legally?",
        a: "Usually not. Most clients adopt the corrected spelling in signatures, business use and social media. Sachin Jain explains which uses matter most for you.",
      },
      {
        q: "Can numerology help choose a business name?",
        a: "Yes. Several names can be checked against the owner's birth numbers and the launch date so you choose one that supports the business.",
      },
      {
        q: "Is numerology different from astrology?",
        a: "Numerology works from your date of birth and name, while astrology uses your full birth chart. Sachin Jain often uses both together for a fuller picture.",
      },
    ],
    related: ["horoscope-reading", "vastu-shastra", "gemstone-consultation"],
  },
  {
    slug: "vastu-shastra",
    name: "Vastu Shastra",
    navLabel: "Vastu For Home And Office",
    shortName: "Vastu For Home And Office",
    cardLink: "Fix Your Vastu",
    icon: House,
    serviceType: "Vastu Shastra consultation for homes and businesses",
    keywords: [
      "vastu consultant in jaipur",
      "vastu for home",
      "vastu for office",
      "vastu without demolition",
      "vastu for new house",
    ],
    metaTitle: "Vastu Consultant In Jaipur | Home And Office Vastu",
    metaDescription:
      "Vastu consultation for homes, flats, shops and offices in Jaipur by Sachin Jain. Floor plan review with practical corrections before any costly changes.",
    h1: "Vastu Consultant In Jaipur For Homes, Shops And Offices",
    intro:
      "Constant arguments at home, money that never stays, a shop that does not pick up after the move. Vastu looks at how your space is laid out and suggests corrections, most of which need no breaking of walls.",
    cardSummary:
      "Home, flat, shop and office Vastu with practical corrections that need no demolition.",
    problems: [
      "Since moving into the new house there has been more tension, illness or expense.",
      "Sales dropped after you shifted your shop or office.",
      "You are about to buy a plot or flat and want to check its direction and shape first.",
      "You were told to demolish part of your home and want a sensible second opinion.",
    ],
    outcomes: [
      {
        title: "A Clear Picture Of Your Space",
        body: "Entrance, kitchen, bedrooms, puja room, water and heavy storage are checked against Vastu principles, room by room.",
      },
      {
        title: "Corrections Without Demolition",
        body: "Most fixes use placement, colours, mirrors, metals or small changes in use, so you can act without construction work.",
      },
      {
        title: "Better Decisions Before You Buy",
        body: "Check a plot or flat before you commit, including facing direction, cuts and extensions.",
      },
    ],
    includes: [
      "Room-by-room Vastu review from your floor plan",
      "Entrance and facing direction analysis",
      "Kitchen, bedroom, puja room and toilet placement",
      "Office seating, cash counter and owner's cabin",
      "Corrections that need no demolition",
      "Griha pravesh and shop opening muhurta on request",
    ],
    bring: [
      "A floor plan or hand sketch with north marked",
      "Photos of the entrance and main rooms",
      "What has changed since you moved in, if anything",
    ],
    faqs: [
      {
        q: "Can Vastu be corrected without demolition?",
        a: "In most homes and offices, yes. Sachin Jain suggests changes in placement, use and simple corrective items first, and recommends construction only if nothing else will work.",
      },
      {
        q: "Do you do Vastu for flats and rented homes?",
        a: "Yes. Flats and rented spaces get the same review, with corrections that do not need structural changes.",
      },
      {
        q: "Can Vastu be checked online?",
        a: "Yes. Send a floor plan with north marked and a few photos, and the consultation is done by phone or video.",
      },
    ],
    related: ["numerology", "horoscope-reading", "gemstone-consultation"],
  },
  {
    slug: "gemstone-consultation",
    name: "Gemstone Consultation",
    navLabel: "Gemstone Recommendation",
    shortName: "Gemstone Recommendation",
    cardLink: "Find Your Right Stone",
    icon: Gem,
    serviceType: "Astrological gemstone recommendation",
    keywords: [
      "gemstone recommendation by date of birth",
      "which gemstone should i wear",
      "astrologer for gemstone in jaipur",
      "gemstone consultation",
    ],
    metaTitle: "Gemstone Recommendation By Kundli | Jaipur Astrologer",
    metaDescription:
      "Find out which gemstone suits your kundli, and which to avoid. Sachin Jain checks your full chart before suggesting any stone. Jaipur or online.",
    h1: "Gemstone Recommendation By Kundli: The Right Stone, Or None At All",
    intro:
      "A gemstone chosen from your zodiac sign alone can strengthen the wrong planet. Sachin Jain checks your full chart first, recommends a stone only when it will help, and tells you exactly how to wear it.",
    cardSummary:
      "Which stone suits your chart, with weight, metal, finger and the day to start, and which to avoid.",
    problems: [
      "You were told to wear a stone but are not sure it suits your chart.",
      "You already wear a gemstone and things have not improved, or have got worse.",
      "You want support for career or health but do not want to waste money on the wrong stone.",
    ],
    outcomes: [
      {
        title: "A Recommendation Based On Your Chart",
        body: "The stone is chosen from your lagna, the planet that needs strength and your current dasha, not from your sun sign.",
      },
      {
        title: "Exact Wearing Instructions",
        body: "Weight, metal, finger, day and time to start wearing it, and how to check the stone is genuine.",
      },
      {
        title: "Stones To Avoid",
        body: "You also learn which gemstones could strengthen a difficult planet in your chart.",
      },
    ],
    includes: [
      "Chart check for benefic and difficult planets",
      "Primary stone and affordable substitute",
      "Weight, metal and finger guidance",
      "Day, time and simple energising method",
      "Review of stones you already wear",
    ],
    bring: [
      "Exact date, time and place of birth",
      "Details or photos of any gemstone you already wear",
    ],
    faqs: [
      {
        q: "Can I choose a gemstone from my zodiac sign?",
        a: "It is risky. Two people with the same sign can need very different stones. The right gemstone depends on your lagna and dasha, which is why your full birth details are needed.",
      },
      {
        q: "Do I have to buy the gemstone from you?",
        a: "No. You can buy a certified stone from any trusted jeweller. Sachin Jain tells you what to ask for and how to check it.",
      },
      {
        q: "Is there a cheaper alternative to precious stones?",
        a: "Often, yes. Semi-precious substitutes are suggested where they suit your chart and budget.",
      },
    ],
    related: ["horoscope-reading", "kundli-matching", "palmistry"],
  },
  {
    slug: "palmistry",
    name: "Palmistry",
    navLabel: "Palm Reading",
    shortName: "Palm Reading (Hast Rekha)",
    cardLink: "Get Your Palm Read",
    icon: Hand,
    serviceType: "Palmistry (hast rekha) reading",
    keywords: ["palm reading in jaipur", "palmist in jaipur", "hast rekha", "palmistry reading"],
    metaTitle: "Palmist In Jaipur | Palm Reading By Sachin Jain",
    metaDescription:
      "Palm reading in Jaipur with Sachin Jain: hand lines read with your kundli for career, marriage and health questions. Online, from clear photos of your palms.",
    h1: "Palm Reading In Jaipur, Read Together With Your Kundli",
    intro:
      "Your hands change as your life changes. A palm reading shows your strengths, the turning points in your career and relationships, and helps confirm your chart when the birth time is uncertain.",
    cardSummary:
      "Life, head, heart and fate lines and the mounts of your hands, read alongside your birth chart.",
    problems: [
      "You do not know your exact birth time, so chart readings feel uncertain.",
      "You want a second view on career direction or a relationship.",
      "You are curious what your hands show about your strengths and the years ahead.",
    ],
    outcomes: [
      {
        title: "Your Strengths And Tendencies",
        body: "The shape of your hands, fingers and mounts shows your temperament and the work that suits you.",
      },
      {
        title: "Key Lines Explained",
        body: "Life, head, heart, fate and marriage lines are read for health, career and relationship patterns.",
      },
      {
        title: "Confirmation For Your Kundli",
        body: "When the birth time is not certain, palmistry helps check which chart is the right one.",
      },
    ],
    includes: [
      "Both hands read, active and passive",
      "Major and minor lines with timing",
      "Mounts, marks and finger analysis",
      "Career, relationship and health indications",
      "Cross-check with your birth chart",
    ],
    bring: [
      "Clear photos of both palms in daylight, for online sessions",
      "Your birth details, if you have them",
    ],
    faqs: [
      {
        q: "Can palm reading be done online?",
        a: "Yes. Send clear daylight photos of both palms, straight on and from the side. Sachin Jain may ask for an extra photo if a line is unclear.",
      },
      {
        q: "Which hand is read in palmistry?",
        a: "Both. One hand shows what you were born with and the other shows how your life is unfolding, so the two are read together.",
      },
      {
        q: "Do the lines on the hand change?",
        a: "Minor lines can change over the years, which is why palmistry is useful for tracking how your choices are shaping your path.",
      },
    ],
    related: ["horoscope-reading", "numerology", "kundli-matching"],
  },
];

export function getService(slug: string) {
  return servicePages.find((s) => s.slug === slug);
}
