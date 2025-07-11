import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-svh">
      <section className="flex min-h-svh items-end">
        <div className="container py-20">
          <div className="grid grid-cols-3 gap-6">
            <h1 className="col-span-2 text-7xl font-bold tracking-tighter italic">
              Unleash 100% Performance with <span>100 Power.</span>
            </h1>
            <p className="font-aloevera text-xl">
              Next-gen lubrication technology to maximize performance, minimize
              friction, and protect the planet.
            </p>
          </div>
          <Button asChild>
            <Link href="/solutions">Explore Solutions</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
