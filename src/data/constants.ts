import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandTelegram,
  IconBrandX,
  IconBrandYoutube,
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
    href: "/",
  },
  {
    id: 3,
    title: "Solutions",
    href: "/",
  },
  {
    id: 4,
    title: "Products",
    href: "/",
  },
];

export const PRODUCTS = [
  {
    id: 1,
    title: "X-Power",
    href: "/",
  },
  {
    id: 2,
    title: "100 Power Booster",
    href: "/",
  },
  {
    id: 3,
    title: "Fuel Conditioner",
    href: "/",
  },
  {
    id: 4,
    title: "TG-10 Critical Maintenance Lubricant",
    href: "/",
  },
  {
    id: 5,
    title: "EP-2 Lithium Complex Grease",
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
