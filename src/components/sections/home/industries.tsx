"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const Industries = () => {
  // Industries data for animation
  const industries = [
    { label: "Automotive", src: "/images/automotive.webp" },
    { label: "Industrial", src: "/images/industrial.webp" },
    { label: "Automotive", src: "/images/automotive.webp" },
    { label: "Industrial", src: "/images/industrial.webp" },
  ];

  // For scroll animation
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [clipProgress, setClipProgress] = useState<number[]>(
    Array(industries.length).fill(0)
  );

  useEffect(() => {
    const handleScroll = () => {
      const newProgress = imageRefs.current.map((ref) => {
        if (!ref) return 0;
        const rect = ref.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Calculate progress: 0 when image enters, 1 when fully in view
        const progress = Math.min(1, Math.max(0, 1 - rect.top / windowHeight));
        return progress;
      });
      setClipProgress(newProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="relative container grid grid-cols-2 gap-5 py-12">
      <div className="sticky top-[12vh] h-fit py-6">
        <h2 className="text-2xl">Industries We Serve</h2>
        <p className="text-5xl leading-snug tracking-tight">
          From engines to excavation, we power the industries where friction
          hurts most - and performance matters most.
        </p>
      </div>
      <div className="sticky top-[12vh] aspect-5/4 h-[60vh] overflow-hidden rounded-sm">
        <div className="relative aspect-5/4">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              ref={(el) => {
                imageRefs.current[idx] = el;
              }}
              className="relative mb-4 aspect-5/4 overflow-hidden rounded-sm"
              style={{
                clipPath: `inset(${(1 - clipProgress[idx]) * 100}% 0% 0% 0%)`,
                transition: "clip-path 0.3s cubic-bezier(.4,0,.2,1)",
                position: "absolute",
                top: `${idx * 60}vh`,
                left: 0,
                right: 0,
              }}
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
