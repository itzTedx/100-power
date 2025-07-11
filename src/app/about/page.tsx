import { CheckCircle, Handshake, Leaf, ShieldCheck } from "lucide-react";

import { Cta } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
          {[
            { country: "USA", desc: "Headquarters & Manufacturing" },
            { country: "India", desc: "Regional Office" },
            { country: "UAE", desc: "Manufacturing & Office" },
            { country: "Russia", desc: "Defense Sector" },
            { country: "Australia", desc: "Defense Sector" },
            { country: "Israel", desc: "Defense Sector" },
            { country: "Serbia", desc: "Defense Sector" },
          ].map((item, i) => (
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
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {[
            { label: "Automotive" },
            { label: "Railways" },
            { label: "Mining" },
            { label: "Marine & Shipping" },
            { label: "Construction" },
            { label: "Agriculture" },
            { label: "Defense & Military" },
            { label: "Industrial Equipment" },
          ].map((industry) => (
            <Card
              key={industry.label}
              className="flex h-24 items-center justify-center"
            >
              <CardContent className="flex h-full w-full items-center justify-center">
                <span className="text-center text-base font-semibold sm:text-lg">
                  {industry.label}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Product Highlights */}
      <section className="container flex flex-col gap-8">
        <h2 className="text-center text-2xl font-bold italic sm:text-4xl">
          Product Highlights
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {[
            {
              title: "X-Power Lubricants",
              desc: "Our flagship lubricant, engineered for extreme durability and performance in the harshest conditions.",
            },
            {
              title: "Tirrent Booster (Oil Additive)",
              desc: "Advanced additive to boost oil performance, reduce friction, and extend engine life.",
            },
            {
              title: "Fuel Conditioner",
              desc: "Optimizes fuel quality, improves combustion, and reduces emissions for cleaner operations.",
            },
            {
              title: "TG-10 Critical Maintenance Lubricant",
              desc: "Multi-purpose lubricant for critical maintenance, ensuring smooth operation and protection.",
            },
            {
              title: "EP-2 Lithium Complex Grease",
              desc: "High-performance grease for heavy-duty applications, providing superior protection and longevity.",
            },
          ].map((product) => (
            <Card
              key={product.title}
              className="group border-border h-full border transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <CardTitle className="group-hover:text-primary text-lg font-bold italic transition-colors">
                  {product.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">
                {product.desc}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Mission, Vision, Goals */}
      <section className="container flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              To continuously innovate through deep R&D, and engineer advanced
              lubrication technologies that drastically reduce wear, extend
              equipment lifespan, and reduce operational and environmental
              costs.
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              To be the most trusted provider of ultra-performance lubrication
              solutions—offering globally competitive quality and reliability
              through strong partnerships and local distribution.
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Our Goals</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-primary" size={18} /> Extend oil
                change intervals by up to <span className="font-bold">3×</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-primary" size={18} /> Increase
                equipment life by up to <span className="font-bold">8×</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-primary" size={18} /> Reduce fuel
                consumption by up to <span className="font-bold">20%</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-primary" size={18} /> Decrease
                engine wear by up to <span className="font-bold">95%</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-primary" size={18} /> Lower
                maintenance costs and minimize downtime
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-primary" size={18} /> Contribute to
                cleaner, more sustainable operations
              </div>
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
          <Card className="flex h-full flex-col items-center text-center">
            <CardHeader className="flex flex-col items-center">
              <ShieldCheck className="text-primary mb-2" size={36} />
              <CardTitle className="font-bold">Quality</CardTitle>
            </CardHeader>
            <Separator className="my-2" />
            <CardContent className="text-muted-foreground">
              We follow rigorous quality control to ensure every drop performs
              at the highest standard.
            </CardContent>
          </Card>
          <Card className="flex h-full flex-col items-center text-center">
            <CardHeader className="flex flex-col items-center">
              <Leaf className="text-primary mb-2" size={36} />
              <CardTitle className="font-bold">Sustainability</CardTitle>
            </CardHeader>
            <Separator className="my-2" />
            <CardContent className="text-muted-foreground">
              We engineer solutions that help reduce emissions, oil waste, and
              carbon impact.
            </CardContent>
          </Card>
          <Card className="flex h-full flex-col items-center text-center">
            <CardHeader className="flex flex-col items-center">
              <Handshake className="text-primary mb-2" size={36} />
              <CardTitle className="font-bold">Integrity</CardTitle>
            </CardHeader>
            <Separator className="my-2" />
            <CardContent className="text-muted-foreground">
              We operate transparently and ethically, building lasting
              relationships with customers and partners.
            </CardContent>
          </Card>
        </div>
      </section>

      <Cta />
    </main>
  );
}
