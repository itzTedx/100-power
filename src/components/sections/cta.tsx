import Image from "next/image";

import { IconArrowUpRight } from "@tabler/icons-react";

import { Button } from "../ui/button";

export const Cta = () => {
  return (
    <section className="container py-8 md:py-12" aria-labelledby="cta-heading">
      <div className="text-secondary-foreground bg-secondary relative grid grid-cols-1 overflow-hidden rounded-sm md:grid-cols-5">
        <div className="relative z-10 p-6 md:col-span-2 md:p-9">
          <h2
            id="cta-heading"
            className="font-aloevera mb-2 text-2xl leading-tight font-extrabold text-balance italic sm:text-4xl md:text-6xl md:leading-[1.1]"
          >
            Ready to Power up your Operations?
          </h2>
          <p className="mb-4 text-sm text-balance sm:text-base md:mb-9 md:text-lg">
            Talk to our team to discover how 100 Power can reduce friction, cut
            costs, and boost efficiency across your operations.
          </p>
          <Button aria-label="Talk to an expert at 100 Power">
            Talk to an expert <IconArrowUpRight />
          </Button>
        </div>
        <div className="absolute -top-1/2 -right-12 z-10 hidden -rotate-30 md:block">
          <Image
            src="/images/xpower-hi.webp"
            alt="100 Power branding illustration"
            height={962}
            width={689}
            priority
          />
        </div>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cta-bg.webp"
            alt="Abstract background pattern"
            fill
            className="object-cover object-left md:object-center"
            priority
          />
        </div>
      </div>
    </section>
  );
};
