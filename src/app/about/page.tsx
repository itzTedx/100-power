import Image from "next/image";

import { CheckCircle, Handshake, Leaf, ShieldCheck } from "lucide-react";

import { Cta } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SimpleMarquee, { MarqueeItem } from "@/components/ui/marquee";
import { Separator } from "@/components/ui/separator";
import {
  COUNTRIES,
  GOALS,
  INDUSTRIES,
  MISSION,
  RESPONSIBILITY,
  VISION,
} from "@/data/constants";

export default function AboutPage() {
  return (
    <main className="flex flex-col gap-16 py-12 md:py-16">
      <section className="container mt-20 flex h-96 flex-col items-center justify-center gap-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight italic sm:text-5xl md:text-7xl">
          Innovation. Precision. Performance.
        </h1>
        <p className="text-muted-foreground max-w-6xl text-lg">
          100 Power is a technology-driven American brand pioneering advanced
          lubrication and anti-friction solutions. Our proprietary
          micro-metallurgical technology creates a polished, ultra-durable layer
          on metal surfaces—resisting extreme wear, pressure, and
          temperature—empowering machines to run longer, cleaner, and more
          efficiently.
        </p>
        <div className="mt-2 flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg">Explore Our Tech</Button>
          <Button size="lg" variant="secondary">
            Contact Us
          </Button>
        </div>
      </section>

      {/* Legacy & Reach */}
      <section className="container flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-2xl font-bold italic sm:text-4xl">
            Military-Proven. Globally Deployed.
          </h2>
          <p className="text-muted-foreground max-w-2xl text-center text-lg">
            With manufacturing plants in California, USA and the Northern
            Emirates, UAE, and offices across the USA, India, and UAE, we serve
            industries worldwide with high-performance lubricants, tested and
            trusted in the most demanding environments.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
          {COUNTRIES.map((item, i) => (
            <Card key={item.country} className="h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-bold italic">
                  {item.country}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">
                {item.desc}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="container flex flex-col gap-8">
        <h2 className="text-center text-2xl font-bold italic sm:text-4xl">
          Industries We Serve
        </h2>
        <SimpleMarquee className="w-full" direction="left">
          {INDUSTRIES.map((src, i) => (
            <MarqueeItem key={i}>
              <div className="relative flex aspect-4/3 h-96 items-end p-6">
                <h3 className="text-secondary-foreground font-aloevera relative z-10 text-base font-semibold sm:text-lg">
                  {src.label}
                </h3>
                <Image
                  src={src.image}
                  alt={`Our supply chain ${i + 1}`}
                  className="rounded-2xl object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={i < 2}
                  loading={i < 2 ? "eager" : "lazy"}
                />
              </div>
            </MarqueeItem>
          ))}
        </SimpleMarquee>
      </section>

      {/* Mission, Vision, Goals */}
      <section className="container flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              {MISSION}
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              {VISION}
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Our Goals</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground flex flex-col gap-2">
              {GOALS.map((goal, i) => (
                <div className="flex items-center gap-2" key={i}>
                  <CheckCircle className="text-primary" size={18} /> {goal}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Responsibility Section */}
      <section className="container flex flex-col gap-8">
        <h2 className="text-center text-2xl font-bold italic sm:text-4xl">
          Our Responsibility
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {RESPONSIBILITY.map((item, i) => {
            const Icon =
              item.icon === "ShieldCheck"
                ? ShieldCheck
                : item.icon === "Leaf"
                  ? Leaf
                  : item.icon === "Handshake"
                    ? Handshake
                    : null;
            return (
              <Card
                className="flex h-full flex-col items-center text-center"
                key={item.title}
              >
                <CardHeader className="flex flex-col items-center">
                  {Icon && <Icon className="text-primary mb-2" size={36} />}
                  <CardTitle className="font-bold">{item.title}</CardTitle>
                </CardHeader>
                <Separator className="my-2" />
                <CardContent className="text-muted-foreground">
                  {item.desc}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <Cta />
    </main>
  );
}
