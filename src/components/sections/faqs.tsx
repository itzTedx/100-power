import { IconArrowUpRight } from "@tabler/icons-react";

import Beams from "../background/beams";
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
      </div>
    </section>
  );
};
