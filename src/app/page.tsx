import Image from "next/image";

import { Emissions } from "@/components/sections/home/emission";
import { Header } from "@/components/sections/home/header";
import { Industries } from "@/components/sections/home/industries";
import { Products } from "@/components/sections/home/products";
import { Video } from "@/components/sections/home/video";
import { WhoWeAre } from "@/components/sections/home/who-we-are";
import { Separator } from "@/components/ui/separator";
import { TECHNOLOGIES } from "@/data/constants";

export default function Home() {
  return (
    <div className="min-h-svh">
      <Header />
      <main id="main-content">
        <WhoWeAre />
        <Video />
        <Products />
        <div className="container">
          <Separator className="my-12" />
        </div>
        <Industries />
        <Emissions />
        <section className="container py-12">
          <h2 className="font-aloevera text-center text-4xl font-semibold italic">
            Our Core Technologies
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {TECHNOLOGIES.map((item) => (
              <div
                className="group bg-secondary relative aspect-[1.16/1] overflow-hidden rounded-sm"
                key={item.id}
              >
                <div className="text-secondary-foreground relative z-10 flex h-full flex-col justify-between p-9">
                  <div>
                    <h3 className="font-aloevera text-3xl font-bold italic">
                      {item.title}
                    </h3>
                    <p>{item.subtext}</p>
                  </div>
                  <ul className="space-y-4 text-xl">
                    {item.lists.map((list) => (
                      <li key={list}>{list}</li>
                    ))}
                  </ul>

                  <p>{item.description}</p>
                </div>
                <div
                  className="from-secondary absolute inset-x-0 bottom-0 z-1 h-1/4 bg-gradient-to-t to-transparent"
                  aria-hidden="true"
                />
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
