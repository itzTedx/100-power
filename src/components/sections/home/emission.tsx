import { memo } from "react";

import Dither from "@/components/background/dither";

const MemoDither = memo(Dither);

export const Emissions = () => {
  return (
    <section className="relative flex h-[60vh] max-h-[42rem] min-h-[24rem] items-end py-20">
      <div className="pointer-events-none relative z-10 container py-6">
        <h2 className="text-4xl font-bold tracking-tighter italic md:text-6xl">
          Built for Performance.
          <br />
          Powered by Responsibility
        </h2>
        <p className="mt-6 max-w-prose text-xl">
          We reduce emissions, prevent pollution, and contribute to a cleaner
          industrial future by reducing oil waste, extending equipment life, and
          minimizing energy loss.
        </p>
      </div>
      <div className="before:from-background after:from-background absolute inset-0 opacity-75 before:pointer-events-none before:absolute before:inset-x-0 before:bottom-0 before:z-10 before:h-1/4 before:bg-gradient-to-t before:to-transparent before:content-[''] after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:z-10 after:h-1/2 after:bg-gradient-to-b after:to-transparent after:content-['']">
        <MemoDither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={1}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={2.5}
          waveSpeed={0.05}
        />
      </div>
    </section>
  );
};
