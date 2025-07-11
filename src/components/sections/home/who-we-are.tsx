import Link from "next/link";

import { IconArrowUpRight } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const WhoWeAre = () => {
  return (
    <section
      className="container py-8 sm:py-12"
      aria-labelledby="who-we-are-heading"
    >
      <Separator className="my-8 sm:my-12" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <h2 id="who-we-are-heading" className="text-xl font-medium sm:text-2xl">
          Who we are
        </h2>
        <div className="col-span-1 space-y-4 md:col-span-2">
          <p className="text-2xl leading-snug tracking-tighter sm:text-4xl md:text-5xl [&_span]:font-bold">
            100 Power is a UAE-based brand born from American innovation.
            We&apos;ve redefined how lubrication works - Pushing boundaries with{" "}
            <span>Military-grade, eco-conscious anti-friction solutions</span>{" "}
            for industrial strength performance.
          </p>
          <Button variant="secondary" asChild>
            <Link href="/about" aria-label="Learn more about 100 Power">
              Learn more <IconArrowUpRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
