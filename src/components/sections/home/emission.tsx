import Dither from "@/components/background/dither";

export const Emissions = () => {
  return (
    <section className="relative flex h-[34rem] items-end py-20 md:h-[42rem]">
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
      <div className="absolute inset-0 opacity-75">
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={1}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={2.5}
          waveSpeed={0.05}
        />
        <div
          className="from-background pointer-events-none absolute inset-x-0 bottom-0 z-1 h-1/4 bg-gradient-to-t to-transparent"
          aria-hidden="true"
        />
        <div
          className="from-background pointer-events-none absolute inset-x-0 top-0 z-1 h-1/2 bg-gradient-to-b to-transparent"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};
