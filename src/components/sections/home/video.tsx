import Link from "next/link";

import { IconArrowUpRight, IconPlayerPlay } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";

export const Video = () => {
  return (
    <section
      className="container py-8 sm:py-12"
      aria-labelledby="innovation-heading"
    >
      <article className="relative flex aspect-4/3 flex-col items-start justify-between gap-4 overflow-hidden rounded-sm bg-gray-200 p-4 sm:aspect-video sm:p-9">
        <button
          className="group hover:text-primary z-10 flex cursor-pointer items-center gap-2 self-end text-base font-semibold tracking-tight text-white italic transition-colors delay-75 sm:text-lg"
          aria-label="Play brand video"
        >
          <div className="bg-secondary text-secondary-foreground group-hover:bg-primary grid size-12 place-content-center rounded-full transition-colors duration-300 sm:size-14">
            <IconPlayerPlay className="size-5 sm:size-6" />
          </div>
          Play Video
        </button>
        <div className="relative z-10 space-y-2 md:space-y-4">
          <h2
            id="innovation-heading"
            className="text-xl font-bold tracking-tighter italic sm:text-5xl md:text-6xl"
          >
            Driven by Innovation.
            <br />
            Engineered for Impact.
          </h2>
          <p className="max-w-prose text-xs tracking-tight text-balance max-md:leading-none sm:text-lg">
            Our advanced American-made anti-friction and lubrication solutions
            are trusted across industries for maximizing equipment life,
            lowering maintenance, and reducing emissions. At 100 Power, we don’t
            sell oil - we deliver performance.
          </p>
          <Button variant="secondary" asChild>
            <Link
              href="/technology"
              aria-label="Learn more about our technology"
            >
              Learn More <IconArrowUpRight className="size-3 sm:size-5" />
            </Link>
          </Button>
        </div>
        <div
          className="from-background absolute inset-x-0 bottom-0 z-1 h-2/3 bg-gradient-to-t to-transparent"
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
          Your browser does not support the video tag. Watch our brand video on
          our{" "}
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
  );
};
