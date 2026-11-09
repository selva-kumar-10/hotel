import Image from "next/image";
import { Ornament } from "@/components/ui/Section";

/** Full-bleed photo break with a slow parallax and one line of copy. */
export default function QuoteBand() {
  return (
    <section
      aria-label="Our promise"
      className="relative isolate flex h-104 items-center justify-center overflow-hidden bg-espresso lg:h-136"
    >
      {/* taller than the section so it can drift while scrolling */}
      <div className="parallax absolute inset-x-0 -inset-y-[12%] -z-20">
        <Image
          src="/images/banana-leaf-food.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-b from-cocoa/80 via-cocoa/60 to-cocoa/85"
      />

      <div className="reveal px-6 text-center">
        <Ornament tone="brass" className="mb-6" />
        <blockquote className="mx-auto max-w-3xl font-serif text-[2.4rem] font-medium italic leading-[1.08] text-cream lg:text-[4.2rem]">
          Every plate is served like a small festival.
        </blockquote>
        <p className="text-label mt-6 text-brass">Saravanas · Madurai</p>
      </div>
    </section>
  );
}
