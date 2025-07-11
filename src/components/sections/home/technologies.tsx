import Image from "next/image";

import { TECHNOLOGIES } from "@/data/constants";

export const Technologies = () => {
  return (
    <section className="container py-12">
      <h2 className="font-aloevera mb-6 text-center text-2xl font-semibold italic sm:text-4xl md:text-6xl">
        Our Core Technologies
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {TECHNOLOGIES.map((item) => (
          <div
            className="group bg-secondary relative aspect-4/5 overflow-hidden rounded-sm md:aspect-[1.16/1]"
            key={item.id}
          >
            <div className="text-secondary-foreground relative z-10 flex h-full flex-col justify-between p-6 md:p-12">
              <div>
                <h3 className="font-aloevera text-2xl font-bold italic md:text-3xl">
                  {item.title}
                </h3>
                <p>{item.subtext}</p>
              </div>
              <ul className="space-y-4 text-base sm:text-lg md:text-xl">
                {item.lists.map((list) => (
                  <li key={list} className="flex items-center gap-4">
                    <div className="bg-primary size-1 rounded-full" /> {list}
                  </li>
                ))}
              </ul>

              <p className="text-balance max-md:text-sm">{item.description}</p>
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
  );
};
