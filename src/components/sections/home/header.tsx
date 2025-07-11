import Image from "next/image";
import Link from "next/link";

import { IconArrowUpRight } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
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
  );
};
