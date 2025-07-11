import Image from "next/image";
import Link from "next/link";

import { IconArrowUpRight, IconPlayerPlay } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="min-h-svh">
      <section className="relative flex min-h-svh items-end">
        <div className="relative z-10 container py-20">
          <div className="mb-6 grid grid-cols-3 gap-6">
            <h1 className="col-span-2 text-7xl font-bold tracking-tighter italic">
              Unleash 100% Performance with{" "}
              <span className="gold inline-block" data-heading="100 Power.">
                100 Power.
              </span>
            </h1>
            <p className="font-aloevera text-xl">
              Next-gen lubrication technology to maximize performance, minimize
              friction, and protect the planet.
            </p>
          </div>
          <Button asChild>
            <Link href="/solutions">
              Explore Solutions <IconArrowUpRight />
            </Link>
          </Button>
        </div>
        <div className="from-background absolute inset-x-0 z-1 h-2/3 bg-gradient-to-t to-transparent" />
        <Image
          src="/images/hero-oil.webp"
          fill
          alt=""
          priority
          className="object-cover"
        />
      </section>
      <section className="container py-12">
        <Separator className="my-12" />
        <div className="grid grid-cols-3 gap-4">
          <h2 className="text-2xl font-medium">Who we are</h2>
          <div className="col-span-2 space-y-4">
            <p className="text-5xl leading-snug tracking-tighter [&_span]:font-bold">
              100 Power is a UAE-based brand born from American innovation.
              We&apos;ve redefined how lubrication works - Pushing boundaries
              with{" "}
              <span>Military-grade, eco-conscious anti-friction solutions</span>{" "}
              for industrial strength performance.
            </p>
            <Button variant="secondary">
              More About us <IconArrowUpRight />
            </Button>
          </div>
        </div>
      </section>
      <section className="container py-12">
        <div className="relative flex aspect-video flex-col items-start justify-between rounded-sm bg-gray-200 p-9">
          <button className="group hover:text-primary z-10 flex cursor-pointer items-center gap-2 text-lg font-semibold tracking-tight italic transition-colors delay-75">
            <div className="bg-secondary text-secondary-foreground group-hover:bg-primary grid size-14 place-content-center rounded-full transition-colors duration-300">
              <IconPlayerPlay className="size-6" />
            </div>
            Play Video
          </button>
          <div className="relative z-10 space-y-4">
            <h2 className="text-6xl font-bold tracking-tighter italic">
              Driven by Innovation.
              <br />
              Engineered for Impact.
            </h2>
            <p className="max-w-prose text-lg tracking-tight text-balance">
              Our advanced American-made anti-friction and lubrication solutions
              are trusted across industries for maximizing equipment life,
              lowering maintenance, and reducing emissions. At 100 Power, we
              don’t sell oil - we deliver performance.
            </p>
            <Button variant="secondary">
              Learn More <IconArrowUpRight />
            </Button>
          </div>
          <div className="from-background absolute inset-x-0 bottom-0 z-1 h-2/3 bg-gradient-to-t to-transparent" />
        </div>
      </section>
    </main>
  );
}
