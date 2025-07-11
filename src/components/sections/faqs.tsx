import { IconArrowUpRight } from "@tabler/icons-react";

import { FAQS } from "@/data/faqs";

import Beams from "../background/beams";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";

export const Faqs = () => {
  return (
    <section className="container py-12">
      <div className="flex flex-col items-center">
        <div className="relative grid h-80 w-full place-content-center overflow-hidden rounded-sm">
          <div className="absolute inset-0">
            <Beams
              beamWidth={4}
              beamHeight={30}
              beamNumber={12}
              lightColor="#EFBF04"
              speed={2}
              noiseIntensity={1.75}
              scale={0.25}
              rotation={30}
            />
          </div>
          <h2 className="text-secondary-foreground relative z-50 text-4xl font-medium">
            Have any question?
          </h2>
        </div>
        <Button variant="secondary" className="-translate-y-1/2">
          Talk to an expert <IconArrowUpRight />
        </Button>

        <h3 className="text-center text-3xl">Frequently Asked Questions</h3>
        <div className="mt-6 grid w-full grid-cols-2 gap-6">
          {(() => {
            const half = Math.ceil(FAQS.length / 2);
            const firstHalf = FAQS.slice(0, half);
            const secondHalf = FAQS.slice(half);
            return (
              <>
                <Accordion
                  type="single"
                  collapsible
                  className="w-full space-y-3"
                >
                  {firstHalf.map((item) => (
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
                  ))}
                </Accordion>
                <Accordion
                  type="single"
                  collapsible
                  className="w-full space-y-3"
                >
                  {secondHalf.map((item) => (
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
                  ))}
                </Accordion>
              </>
            );
          })()}
        </div>
      </div>
    </section>
  );
};
