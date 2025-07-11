import type { Metadata } from "next";

import { aloevera, dmSans } from "@/assets/fonts";
import { Footer, Navbar } from "@/components/layout";
import { cn } from "@/lib/utils";

import "./globals.css";

export const metadata: Metadata = {
  title: "100 Power | Next-Gen Lubrication Technology for Maximum Performance",
  description:
    "100 Power is a UAE-based brand delivering American innovation in lubrication. Maximize performance, minimize friction, and protect the planet with our military-grade, eco-conscious solutions.",
  openGraph: {
    title:
      "100 Power | Next-Gen Lubrication Technology for Maximum Performance",
    description:
      "100 Power is a UAE-based brand delivering American innovation in lubrication. Maximize performance, minimize friction, and protect the planet with our military-grade, eco-conscious solutions.",
    url: "https://100power.com/",
    siteName: "100 Power",
    images: [
      {
        url: "/images/hero-oil.webp",
        width: 1200,
        height: 630,
        alt: "100 Power - Next-Gen Lubrication Technology",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "100 Power | Next-Gen Lubrication Technology for Maximum Performance",
    description:
      "100 Power is a UAE-based brand delivering American innovation in lubrication. Maximize performance, minimize friction, and protect the planet with our military-grade, eco-conscious solutions.",
    images: ["/images/hero-oil.webp"],
    site: "@100poweruae",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(dmSans.className, aloevera.variable, "antialiased")}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
