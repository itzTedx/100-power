import Image from "next/image";

import { IconArrowUpRight } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Products = () => {
  return (
    <section className="container py-12">
      <h2 className="mb-4 text-2xl">Flagship Products</h2>
      <div className="grid grid-cols-3 gap-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="bg-secondary size-2 rounded-full" />
                <p className="font-aloevera font-medium italic">X Power</p>
              </div>
              <Button size="icon" variant="secondary">
                <IconArrowUpRight />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-square">
                <Image
                  src="/images/xpower.webp"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div className="absolute inset-0 z-10 flex items-end justify-center p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <Button className="z-10 mx-auto" variant="outline">
                  Discover it
                </Button>

                <div className="from-card pointer-events-none absolute inset-0 translate-y-full bg-gradient-to-t to-transparent transition-transform group-hover:translate-y-0" />
              </div>
            </CardContent>
            <CardFooter>
              <CardDescription>5W-30</CardDescription>
              <CardTitle>X Power Motor Oil</CardTitle>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
