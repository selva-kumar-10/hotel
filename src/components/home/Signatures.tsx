import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AddButton from "@/components/cart/AddButton";
import { Kolam } from "@/components/ui/Decor";
import { Container } from "@/components/ui/Section";
import { MENU_BY_ID } from "@/data/menu";
import { cn } from "@/lib/cn";
import { formatPrice } from "@/lib/format";

const signatures = [
  {
    id: "b1",
    title: "Ghee Podi Roast Dosa",
    description:
      "Crisp, golden and roasted in pure ghee, with gunpowder podi, chutneys and sambar.",
    image: "/images/polaroid-dosa.jpg",
    alt: "Ghee roast dosa with coconut and tomato chutney",
    offset: false,
  },
  {
    id: "b2",
    title: "Ghee Sambar Idli",
    description:
      "Tender mini idlis in hot shallot sambar, finished with melted golden ghee.",
    image: "/images/polaroid-idli.jpg",
    alt: "Soft steamed idlis on a banana leaf",
    offset: true,
  },
  {
    id: "sw1",
    title: "Pure Ghee Mysore Pak",
    description:
      "Melt-in-the-mouth golden squares made with gram flour and desi ghee.",
    image: "/images/mysore-pak.jpg",
    alt: "Golden squares of ghee mysore pak",
    offset: false,
  },
];

export default function Signatures() {
  return (
    <section
      id="signatures"
      className="relative isolate overflow-hidden bg-dots bg-paper py-16 lg:py-28"
    >
      <Kolam className="-right-12 -top-12 w-52 text-kumkum opacity-[0.13] lg:-right-16 lg:-top-16 lg:w-80" />
      <Kolam className="-bottom-14 -left-14 w-52 text-kumkum opacity-[0.13] lg:-bottom-20 lg:-left-20 lg:w-80" />
      <Container>
        <div className="reveal mb-10 flex items-end justify-between gap-6 lg:mb-14">
          <div>
            <p className="text-label text-kumkum">Our signatures</p>
            <h2 className="mt-4 font-serif text-heading font-semibold">
              Dishes we are
              <br />
              known for
            </h2>
          </div>
          <Link
            href="/menu"
            className="hidden items-center gap-2.5 border-b border-kumkum pb-1.5 text-[15px] font-bold text-kumkum transition-colors hover:text-kumkum-deep lg:flex"
          >
            View full menu
            <ArrowRight className="h-4.5 w-4.5" />
          </Link>
        </div>

        {/* Phones: swipeable row that starts on the content edge. From md: a 3-column grid. */}
        <ul className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto max-md:-mx-6 max-md:scroll-px-6 max-md:px-6 md:grid md:grid-cols-3 md:items-start md:gap-6 md:overflow-visible lg:gap-9">
          {signatures.map((dish, i) => {
            const item = MENU_BY_ID[dish.id];
            return (
              <li
                key={dish.id}
                className={cn(
                  "reveal-md group w-69 shrink-0 snap-start md:w-auto",
                  dish.offset && "lg:mt-16",
                )}
              >
                <article className="transition-transform duration-500 group-hover:-translate-y-1.5">
                  <div className="relative h-82.5 overflow-hidden rounded-sm bg-parchment shadow-card transition-shadow duration-500 group-hover:shadow-card-hover md:h-72 lg:h-110">
                    <Image
                      src={dish.image}
                      alt={dish.alt}
                      fill
                      sizes="(min-width: 1024px) 400px, 276px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-xs bg-paper px-2.5 py-1 font-serif text-xl font-semibold lg:left-4 lg:top-4 lg:px-3 lg:text-[1.4rem]">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-3xl font-semibold leading-tight md:text-[1.65rem] lg:mt-6 lg:text-[2rem]">
                    {dish.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">
                    {dish.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between lg:mt-5">
                    <span className="text-xl font-bold">
                      {formatPrice(item.price)}
                    </span>
                    <AddButton id={dish.id} name={item.name} />
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 flex justify-center md:justify-start lg:hidden">
          <Link
            href="/menu"
            className="flex items-center gap-2.5 border-b border-kumkum pb-1.5 text-[15px] font-bold text-kumkum"
          >
            View full menu
            <ArrowRight className="h-4.5 w-4.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
