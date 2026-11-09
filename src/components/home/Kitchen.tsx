import Image from "next/image";
import { TempleSkyline } from "@/components/ui/Decor";
import Gopuram from "@/components/ui/Gopuram";
import { Container } from "@/components/ui/Section";

const points = [
  {
    numeral: "i.",
    title: "Pure vegetarian kitchen",
    text: "Every dish, every day, 100% vegetarian.",
  },
  {
    numeral: "ii.",
    title: "Traditional recipes",
    text: "Time-honoured South Indian methods, no shortcuts.",
  },
  {
    numeral: "iii.",
    title: "Served piping hot",
    text: "Prepared through the day and brought to your table fresh.",
  },
];

export default function Kitchen() {
  return (
    <section
      id="kitchen"
      className="relative isolate overflow-hidden bg-espresso py-16 md:py-20 lg:flex lg:min-h-170 lg:items-center lg:py-0"
    >
      <Gopuram className="pointer-events-none absolute -bottom-0.5 right-2.5 w-47 text-brass opacity-14 md:-top-4 md:bottom-auto md:right-6 md:w-60 lg:-top-6 lg:right-10 lg:w-82.5" />

      <TempleSkyline className="inset-x-0 bottom-0 h-24 w-full text-brass opacity-[0.08] lg:h-40" />

      <Container className="relative grid items-center gap-11 md:grid-cols-2 md:gap-12 lg:gap-24">
        <div className="reveal relative h-75 md:h-105 lg:h-125">
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-sm border border-brass/60 lg:translate-x-5 lg:translate-y-5"
          />
          <Image
            src="/images/saravanas-hero.jpg"
            alt="Dosa, vada and chutneys served on brass"
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="rounded-sm object-cover object-[30%_80%]"
          />
        </div>

        <div className="reveal">
          <p className="text-label text-brass">Our kitchen</p>
          <h2 className="mt-4 font-serif text-heading font-semibold text-cream">
            Cooked slowly,
            <br />
            the traditional way
          </h2>
          <p className="mt-5 hidden max-w-120 text-[1.0625rem] leading-[1.7] text-cream-muted lg:block">
            Every dish starts from scratch in a kitchen that has always been
            strictly vegetarian.
          </p>

          <ul className="mt-8 border-t border-brass/25 lg:mt-9">
            {points.map((p) => (
              <li
                key={p.title}
                className="flex items-baseline gap-4 border-b border-brass/25 py-5 lg:gap-6 lg:py-5.5"
              >
                <span className="w-7 shrink-0 font-serif text-xl italic text-brass lg:w-8 lg:text-[1.4rem]">
                  {p.numeral}
                </span>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-cream lg:text-[1.65rem]">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-cream-muted lg:text-[15px]">
                    {p.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
