import Image from "next/image";

import {
  IconBolt,
  IconDroplet,
  IconEngine,
  IconFlask,
  IconGasStation,
  IconLeaf,
  IconRepeat,
  IconRocket,
  IconSettings,
  IconShieldCheck,
  IconThermometer,
  IconTruck,
} from "@tabler/icons-react";
import { Wrench } from "lucide-react";

import { Cta } from "@/components/sections/cta";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SolutionsPage() {
  return (
    <main className="flex flex-col gap-16 py-12 md:py-16">
      {/* Hero Section */}
      <section className="container mt-24 mb-8 flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight italic sm:text-5xl md:text-7xl">
          Solutions That Drive Industry Forward
        </h1>
        <p className="text-muted-foreground max-w-3xl text-lg">
          Advanced Lubrication Technologies for Maximum Performance &
          Sustainability
        </p>
        <p className="max-w-4xl text-lg">
          At 100 Power, we engineer next-generation lubrication and
          anti-friction technologies that protect your equipment, extend
          machinery life, and deliver measurable efficiency gains across
          critical industries. Our solutions are built on a proprietary
          micro-metallurgical process that delivers consistent, long-lasting
          results—backed by years of research and military-grade testing.
        </p>
      </section>

      {/* Technology Highlight */}
      <section className="container grid items-center gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold italic sm:text-4xl">
            <IconFlask className="text-primary" size={36} /> Advanced
            Micro-Metallurgical Technology
          </h2>
          <p className="text-muted-foreground text-lg">
            Our micro-metallurgical additive formula transforms metal surfaces
            at the microscopic level—forming a highly polished, wear-resistant
            layer that reduces friction by up to 95% and extends equipment life
            by up to 8×.
          </p>
          <ul className="space-y-3 text-base sm:text-lg md:text-xl">
            <li className="flex items-center gap-3">
              <IconShieldCheck className="text-primary" size={24} /> Durability
            </li>
            <li className="flex items-center gap-3">
              <IconThermometer className="text-primary" size={24} /> Thermal
              resistance
            </li>
            <li className="flex items-center gap-3">
              <IconSettings className="text-primary" size={24} /> Mechanical
              efficiency
            </li>
            <li className="flex items-center gap-3">
              <IconDroplet className="text-primary" size={24} /> Lubrication
              stability
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/micro-process.webp"
            alt="Micro-metallurgical process"
            width={420}
            height={420}
            className="rounded-xl object-cover shadow-lg"
          />
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="container flex flex-col items-center gap-6 text-center">
        <h2 className="mb-2 text-2xl font-bold italic sm:text-4xl">
          Ideal For:
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          <div className="flex flex-col items-center gap-2">
            <IconEngine size={36} className="text-primary" />
            <span>Engines</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IconShieldCheck size={36} className="text-primary" />
            <span>Hydraulics</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IconSettings size={36} className="text-primary" />
            <span>Gears</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IconBolt size={36} className="text-primary" />
            <span>Compressors</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IconTruck size={36} className="text-primary" />
            <span>Heavy-duty machines</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IconSettings size={36} className="text-primary" />
            <span>Industrial Equipment</span>
          </div>
        </div>
      </section>

      {/* The 100 Power Difference */}
      <section className="container grid gap-8 md:grid-cols-3">
        <Card className="h-full">
          <CardHeader className="flex flex-row items-center gap-3">
            <IconRepeat className="text-primary" size={32} />
            <CardTitle className="text-xl font-bold">
              Extended Service Life
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Maintain peak efficiency far beyond conventional lubricant life
            cycles.
          </CardContent>
        </Card>
        <Card className="h-full">
          <CardHeader className="flex flex-row items-center gap-3">
            <IconRocket className="text-primary" size={32} />
            <CardTitle className="text-xl font-bold">
              Consistent Performance
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Avoid performance drop-offs—even under continuous or high-stress
            operation.
          </CardContent>
        </Card>
        <Card className="h-full">
          <CardHeader className="flex flex-row items-center gap-3">
            <IconGasStation className="text-primary" size={32} />
            <CardTitle className="text-xl font-bold">
              Fuel & Oil Efficiency
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Prevent spikes in fuel and oil consumption as machines age or
            workloads increase.
          </CardContent>
        </Card>
        <Card className="h-full">
          <CardHeader className="flex flex-row items-center gap-3">
            <Wrench className="text-primary" size={32} />
            <CardTitle className="text-xl font-bold">
              Longer Equipment Lifespan
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Reduce wear and tear significantly, extending machinery life by up
            to 8x.
          </CardContent>
        </Card>
        <Card className="h-full">
          <CardHeader className="flex flex-row items-center gap-3">
            <IconLeaf className="text-primary" size={32} />
            <CardTitle className="text-xl font-bold">
              Environmental Responsibility
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Cut emissions, reduce oil waste, and contribute to cleaner, more
            sustainable operations.
          </CardContent>
        </Card>
        <Card className="h-full">
          <CardHeader className="flex flex-row items-center gap-3">
            <IconBolt className="text-primary" size={32} />
            <CardTitle className="text-xl font-bold">
              Enhanced Energy Efficiency
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Minimize energy usage by reducing internal friction—saving both fuel
            and electricity.
          </CardContent>
        </Card>
      </section>

      {/* Comparison Table */}
      <section className="container flex flex-col items-center gap-6">
        <h2 className="mb-2 text-2xl font-bold italic sm:text-4xl">
          With vs. Without Our Additive
        </h2>
        <div className="w-full max-w-3xl overflow-x-auto">
          <table className="border-muted w-full rounded-md border text-left text-base">
            <thead>
              <tr className="bg-muted text-muted-foreground">
                <th className="p-3 font-bold">Feature</th>
                <th className="p-3 font-bold">Without Booster</th>
                <th className="p-3 font-bold">With 100 Power Booster</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3">Equipment Life</td>
                <td className="p-3">Standard lifespan</td>
                <td className="text-primary p-3 font-bold">
                  Extended up to 8×
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Fuel Consumption</td>
                <td className="p-3">Increases over time</td>
                <td className="text-primary p-3 font-bold">Remains stable</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Maintenance Costs</td>
                <td className="p-3">Frequent</td>
                <td className="text-primary p-3 font-bold">
                  Reduced by up to 60%
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Downtime</td>
                <td className="p-3">Common</td>
                <td className="text-primary p-3 font-bold">
                  Significantly reduced
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Emissions & Oil Waste</td>
                <td className="p-3">Higher</td>
                <td className="text-primary p-3 font-bold">
                  Lower and more sustainable
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Applications Across Industries */}
      <section className="container flex flex-col items-center gap-8">
        <h2 className="mb-2 text-2xl font-bold italic sm:text-4xl">
          Applications Across Industries
        </h2>
        <div className="grid w-full max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl">🚗</span>
            <span>Automotive</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl">🏭</span>
            <span>Industrial Manufacturing</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl">🏗️</span>
            <span>Construction</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl">⛏️</span>
            <span>Mining</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl">🛢</span>
            <span>Oil & Gas</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl">🚢</span>
            <span>Marine</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl">🌾</span>
            <span>Agriculture</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl">🪖</span>
            <span>Military</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl">🚆</span>
            <span>Railways</span>
          </div>
        </div>
        <p className="mt-4 max-w-3xl text-center text-lg">
          No matter the environment, we help businesses lower costs, improve
          safety, and operate with long-term sustainability.
        </p>
      </section>

      {/* CTA Section */}
      <Cta />
    </main>
  );
}
