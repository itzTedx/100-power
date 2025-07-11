import { Suspense, lazy, useMemo } from "react";

import { IconArrowUpRight } from "@tabler/icons-react";

import { FAQS } from "@/data/faqs";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";

// Lazy load the Beams component
const Beams = lazy(() => import("../background/beams"));

export const Faqs = () => {
  // Memoize the split of FAQS
  const [firstHalf, secondHalf] = useMemo(() => {
    const half = Math.ceil(FAQS.length / 2);
    return [FAQS.slice(0, half), FAQS.slice(half)];
  }, []);

  // Memoize rendering of accordion items
  const renderAccordionItems = (items: typeof FAQS) =>
    items.map((item) => (
      <AccordionItem
        value={item.id.toFixed()}
        key={item.id}
        className="bg-secondary-foreground has-focus-visible:border-ring has-focus-visible:ring-ring/50 h-fit rounded-md px-4 py-1 outline-none last:border-b has-focus-visible:ring-[3px]"
      >
        <AccordionTrigger className="py-2 text-[15px] leading-6 hover:no-underline focus-visible:ring-0">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground pb-2">
          {item.content}
        </AccordionContent>
      </AccordionItem>
    ));

  // Remove memoizedBeams, use Suspense for lazy loading
  return (
    <section className="container py-8 md:py-12">
      <div className="flex flex-col items-center">
        <div className="relative grid h-52 w-full place-content-center overflow-hidden rounded-sm md:h-80">
          <div className="bg-secondary absolute inset-0">
            <Suspense
              fallback={<div style={{ width: "100%", height: "100%" }} />}
            >
              <Beams
                beamWidth={8}
                beamHeight={100}
                beamNumber={16}
                lightColor="#EFBF04"
                speed={2}
                noiseIntensity={1.75}
                scale={0.2}
                rotation={40}
              />
            </Suspense>
          </div>
          <h2 className="text-secondary-foreground relative z-50 text-4xl font-medium">
            Have any question?
          </h2>
        </div>
        <Button variant="secondary" className="-translate-y-1/2">
          Talk to an expert <IconArrowUpRight />
        </Button>

        <h3 className="text-center text-3xl">Frequently Asked Questions</h3>
        <div className="mt-6 grid w-full gap-4 md:grid-cols-2 md:gap-6">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {renderAccordionItems(firstHalf)}
          </Accordion>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {renderAccordionItems(secondHalf)}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
