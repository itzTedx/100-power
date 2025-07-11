import Image from "next/image";

export const Industries = () => {
  // Industries data for animation
  const industries = [
    { label: "Automotive", src: "/images/automotive.webp" },
    { label: "Industrial", src: "/images/industrial.webp" },
    { label: "Automotive", src: "/images/automotive.webp" },
    { label: "Industrial", src: "/images/industrial.webp" },
  ];

  return (
    <section className="relative container grid gap-5 py-8 sm:grid-cols-2 sm:py-12">
      <div className="h-fit py-6 md:sticky md:top-[12vh]">
        <h2 className="text-base sm:text-xl md:text-2xl">
          Industries We Serve
        </h2>
        <p className="text-2xl leading-snug tracking-tight sm:text-3xl md:text-5xl">
          From engines to excavation, we power the industries where friction
          hurts most - and performance matters most.
        </p>
      </div>
      <div className="sticky top-[12vh] aspect-5/4 overflow-hidden rounded-sm md:h-[60vh]">
        <div className="relative aspect-5/4">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className="relative mb-4 aspect-5/4 overflow-hidden rounded-sm"
            >
              <p className="text-accent relative z-10 p-9 text-xl font-medium">
                {industry.label}
              </p>
              <Image src={industry.src} fill alt="" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
