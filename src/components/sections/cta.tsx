import Image from "next/image";

import { IconArrowUpRight } from "@tabler/icons-react";

import { Button } from "../ui/button";

export const Cta = () => {
  return (
    <section className="container py-12">
      <div className="text-secondary-foreground bg-secondary relative grid grid-cols-5 overflow-hidden rounded-sm">
        <div className="relative z-10 col-span-2 p-9">
          <h2 className="font-aloevera mb-3 text-6xl leading-[1.1] font-extrabold text-balance italic">
            Ready to Power up your Operations?
          </h2>
          <p className="mb-9 text-balance">
            Talk to our team to discover how 100 Power can reduce friction, cut
            costs, and boost efficiency across your operations.
          </p>
          <Button>
            Talk to an expert <IconArrowUpRight />
          </Button>
        </div>
        <div className="absolute -top-1/2 -right-12 z-10 -rotate-30">
          <Image src="/images/xpower-hi.webp" alt="" height={962} width={689} />
        </div>
        <Image src="/images/cta-bg.webp" alt="" fill className="object-cover" />
      </div>
    </section>
  );
};
