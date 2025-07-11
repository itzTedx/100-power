import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandTelegram,
  IconBrandX,
  IconBrandYoutube,
  IconHeartHandshake,
  IconLeaf,
  IconShieldCheck,
} from "@tabler/icons-react";

export const NAV_LINKS = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "About",
    href: "/about",
  },
  {
    id: 3,
    title: "Solutions",
    href: "/",
  },
  {
    id: 4,
    title: "Products",
    href: "/products",
  },
];

export const PRODUCTS = [
  {
    id: 1,
    title: "X-Power Motor Oil",
    label: "X-Power",
    badge: "5W-30",
    href: "/",
  },
  {
    id: 2,
    title: "100 Power Booster",
    label: "X-Power",
    badge: "5W-30",
    href: "/",
  },
  {
    id: 3,
    title: "Fuel Conditioner",
    label: "X-Power",
    badge: "5W-30",
    href: "/",
  },
  {
    id: 4,
    title: "TG-10 Critical Maintenance Lubricant",
    label: "X-Power",
    badge: "5W-30",
    href: "/",
  },
  {
    id: 5,
    title: "EP-2 Lithium Complex Grease",
    label: "X-Power",
    badge: "5W-30",
    href: "/",
  },
];

export const FOOTER = [
  {
    id: 1,
    heading: "Quick Links",
    items: [
      ...NAV_LINKS.slice(0, 3),
      {
        id: 4,
        title: "Contact",
        href: "/",
      },
    ],
  },
  {
    id: 2,
    heading: "Products",
    items: [...PRODUCTS],
  },
  {
    id: 3,
    heading: "Contact",
    items: [
      {
        id: 1,
        title:
          "Al Moosa Tower 2 - 2403, 24th Floor, Sheikh Zayed Rd, near Emirates Tower Metro, Dubai, United Arab Emirates",
      },
      {
        id: 2,
        title: "support@tirrentglobal.com",
      },
      {
        id: 3,
        title: "+971 4 557 9964",
      },
    ],
  },
];

export const SOCIALS = [
  {
    id: 1,
    icon: IconBrandInstagram,
    href: "/",
  },
  {
    id: 2,
    icon: IconBrandX,
    href: "/",
  },
  {
    id: 3,
    icon: IconBrandTelegram,
    href: "/",
  },
  {
    id: 4,
    icon: IconBrandYoutube,
    href: "/",
  },
  {
    id: 5,
    icon: IconBrandPinterest,
    href: "/",
  },
  {
    id: 6,
    icon: IconBrandFacebook,
    href: "/",
  },
];

export const TECHNOLOGIES = [
  {
    id: 1,
    title: "Micro Metallurgical Process",
    subtext: "Stronger. Smoother. Smarter Metal.",
    lists: [
      "Eliminates friction",
      "Polishes internal surfaces",
      "Prevents sludge and build-up",
      "Increases durability under stress",
    ],
    description:
      "Our proprietary micro-metallurgical process transforms metal friction surfaces into ultra-hard, ultra-smooth layers — eliminating wear and extending surface life. It polishes and cleans internals, ensuring cleaner oil flow, fewer deposits, and improved efficiency.",

    image: "/images/micro-process.webp",
  },
  {
    id: 2,
    title: "Anti-Friction Technology (AFT)",
    subtext: "SFriction-Resistant by Design.",
    lists: [
      "Reduces metal-to-metal contact",
      "Minimizes noise and vibration",
      "Resists abrasion and oxidation",
      "Optimizes reliability and uptime",
    ],
    description:
      "Our cutting-edge AFT technology forms a protective micro-layer between metal parts — reducing contact, preventing wear, and cutting down vibration noise. It resists corrosion and oxidation, ensuring longer equipment life and quieter, smoother performance.",

    image: "/images/anti-friction.webp",
  },
];

export const COUNTRIES = [
  { country: "USA", desc: "Headquarters & Manufacturing" },
  { country: "India", desc: "Regional Office" },
  { country: "UAE", desc: "Manufacturing & Office" },
  { country: "Russia", desc: "Defense Sector" },
  { country: "Australia", desc: "Defense Sector" },
  { country: "Israel", desc: "Defense Sector" },
  { country: "Serbia", desc: "Defense Sector" },
];

export const INDUSTRIES = [
  { label: "Automotive", image: "/images/automotive.webp" },
  { label: "Railways", image: "/images/railway.webp" },
  { label: "Mining", image: "/images/mining.webp" },
  { label: "Marine & Shipping", image: "/images/marine.webp" },
  { label: "Construction", image: "/images/construction.webp" },
  { label: "Agriculture", image: "/images/agriculture.webp" },
  { label: "Defense & Military", image: "/images/military.webp" },
  { label: "Industrial Equipment", image: "/images/industrial.webp" },
];

export const MISSION =
  "To continuously innovate through deep R&D, and engineer advanced lubrication technologies that drastically reduce wear, extend equipment lifespan, and reduce operational and environmental costs.";

export const VISION =
  "To be the most trusted provider of ultra-performance lubrication solutions—offering globally competitive quality and reliability through strong partnerships and local distribution.";

export const GOALS = [
  "Extend oil change intervals by up to 3×",
  "Increase equipment life by up to 8×",
  "Reduce fuel consumption by up to 20%",
  "Decrease engine wear by up to 95%",
  "Lower maintenance costs and minimize downtime",
  "Contribute to cleaner, more sustainable operations",
];

export const RESPONSIBILITY = [
  {
    icon: IconShieldCheck,
    title: "Quality",
    desc: "We follow rigorous quality control to ensure every drop performs at the highest standard.",
  },
  {
    icon: IconLeaf,
    title: "Sustainability",
    desc: "We engineer solutions that help reduce emissions, oil waste, and carbon impact.",
  },
  {
    icon: IconHeartHandshake,
    title: "Integrity",
    desc: "We operate transparently and ethically, building lasting relationships with customers and partners.",
  },
];
