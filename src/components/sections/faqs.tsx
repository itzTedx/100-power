import Beams from "../background/beams";

export const Faqs = () => {
  return (
    <section className="container py-12">
      <div className="relative h-96">
        <Beams
          beamWidth={2}
          beamHeight={30}
          beamNumber={12}
          lightColor="#EFBF04"
          speed={2}
          noiseIntensity={1.75}
          scale={2}
          rotation={30}
        />
      </div>
    </section>
  );
};
