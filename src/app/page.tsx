import Image from "next/image";
import Link from "next/link";

import { IconArrowUpRight, IconPlayerPlay } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-svh">
      <header
        className="relative flex min-h-svh flex-col items-end justify-end md:flex-row"
        role="banner"
      >
        <div className="relative z-10 container py-12 md:py-20">
          <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            <h1 className="col-span-1 text-4xl font-bold tracking-tighter italic sm:text-5xl md:col-span-2 md:text-7xl">
              Unleash 100% Performance with{" "}
              <span className="gold inline-block" data-heading="100 Power.">
                100 Power.
              </span>
            </h1>
            <p className="font-aloevera text-lg sm:text-xl">
              Next-gen lubrication technology to maximize performance, minimize
              friction, and protect the planet.
            </p>
          </div>
          <Button asChild>
            <Link
              href="/solutions"
              aria-label="Explore our lubrication solutions"
            >
              Explore Solutions <IconArrowUpRight />
            </Link>
          </Button>
        </div>
        <div
          className="from-background absolute inset-x-0 bottom-0 z-1 h-2/3 bg-gradient-to-t to-transparent"
          aria-hidden="true"
        />
        <Image
          src="/images/hero-oil.webp"
          fill
          alt="Golden oil swirl - 100 Power lubrication technology hero image"
          priority
          className="object-cover"
        />
      </header>
      <main id="main-content" className="container">
        <section className="py-8 sm:py-12" aria-labelledby="who-we-are-heading">
          <Separator className="my-8 sm:my-12" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <h2
              id="who-we-are-heading"
              className="text-xl font-medium sm:text-2xl"
            >
              Who we are
            </h2>
            <div className="col-span-1 space-y-4 md:col-span-2">
              <p className="text-2xl leading-snug tracking-tighter sm:text-4xl md:text-5xl [&_span]:font-bold">
                100 Power is a UAE-based brand born from American innovation.
                We&apos;ve redefined how lubrication works - Pushing boundaries
                with{" "}
                <span>
                  Military-grade, eco-conscious anti-friction solutions
                </span>{" "}
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
        <section className="py-8 sm:py-12" aria-labelledby="innovation-heading">
          <article className="relative flex aspect-video flex-col items-start justify-between gap-4 overflow-hidden rounded-sm bg-gray-200 p-4 sm:p-9">
            <button
              className="group hover:text-primary z-10 flex cursor-pointer items-center gap-2 self-end text-base font-semibold tracking-tight text-white italic transition-colors delay-75 sm:text-lg"
              aria-label="Play brand video"
            >
              <div className="bg-secondary text-secondary-foreground group-hover:bg-primary grid size-12 place-content-center rounded-full transition-colors duration-300 sm:size-14">
                <IconPlayerPlay className="size-5 sm:size-6" />
              </div>
              Play Video
            </button>
            <div className="relative z-10 space-y-4">
              <h2
                id="innovation-heading"
                className="text-3xl font-bold tracking-tighter italic sm:text-5xl md:text-6xl"
              >
                Driven by Innovation.
                <br />
                Engineered for Impact.
              </h2>
              <p className="max-w-prose text-base tracking-tight text-balance sm:text-lg">
                Our advanced American-made anti-friction and lubrication
                solutions are trusted across industries for maximizing equipment
                life, lowering maintenance, and reducing emissions. At 100
                Power, we don’t sell oil - we deliver performance.
              </p>
              <Button variant="secondary" asChild>
                <Link
                  href="/technology"
                  aria-label="Learn more about our technology"
                >
                  Learn More <IconArrowUpRight />
                </Link>
              </Button>
            </div>
            <div
              className="from-background absolute inset-x-0 bottom-0 z-1 h-1/3 bg-gradient-to-t to-transparent md:h-2/3"
              aria-hidden="true"
            />
            <video
              autoPlay
              loop
              muted
              className="absolute inset-0 h-full w-full object-cover"
              title="100 Power brand video"
              aria-label="100 Power brand video"
            >
              <source src="/videos/powerx.webm" />
              Your browser does not support the video tag. Watch our brand video
              on our{" "}
              <a
                href="https://www.youtube.com/@100poweruae"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube channel
              </a>
              .
            </video>
          </article>
        </section>
        <section>
          <h2>Flagship Products</h2>
        </section>
      </main>
    </div>
  );
}
