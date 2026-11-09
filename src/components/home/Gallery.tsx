import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { LeafSprig } from "@/components/ui/Decor";
import { Container } from "@/components/ui/Section";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

const photos = [
  {
    src: "/images/saravanas-hero.jpg",
    alt: "Breakfast spread on banana leaf",
    className: "col-span-2 h-50 lg:row-span-2 lg:h-auto",
    sizes: "(min-width: 1024px) 580px, 100vw",
  },
  {
    src: "/images/polaroid-idli.jpg",
    alt: "Steamed idlis",
    className: "h-40 lg:h-auto",
    sizes: "(min-width: 1024px) 280px, 50vw",
  },
  {
    src: "/images/samosa.jpg",
    alt: "Crispy samosas",
    className: "h-40 lg:h-auto",
    sizes: "(min-width: 1024px) 280px, 50vw",
  },
  {
    src: "/images/mysore-pak.jpg",
    alt: "Mysore pak",
    className: "h-40 lg:h-auto",
    sizes: "(min-width: 1024px) 280px, 50vw",
  },
  {
    src: "/images/gulab-jamun.jpg",
    alt: "Warm gulab jamun",
    className: "h-40 lg:h-auto",
    sizes: "(min-width: 1024px) 280px, 50vw",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative isolate overflow-hidden bg-dots bg-paper py-16 lg:py-24"
    >
      <LeafSprig className="left-3 top-16 hidden h-96 w-auto text-leaf opacity-[0.22] lg:block" />
      <LeafSprig className="right-3 top-16 hidden h-96 w-auto -scale-x-100 text-leaf opacity-[0.22] lg:block" />
      <Container>
        <div className="reveal mb-8 flex items-end justify-between gap-6 lg:mb-10">
          <div>
            <p className="text-label text-kumkum">Gallery</p>
            <h2 className="mt-4 font-serif text-heading font-semibold">
              From our tables
            </h2>
          </div>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2.5 border-b border-kumkum pb-1.5 text-[15px] font-bold text-kumkum transition-colors hover:text-kumkum-deep lg:flex"
          >
            Follow on Instagram
            <ArrowRight className="h-4.5 w-4.5" />
          </a>
        </div>

        <ul className="reveal grid grid-cols-2 gap-2 lg:grid-cols-4 lg:grid-rows-[repeat(2,15rem)] lg:gap-4">
          {photos.map((photo) => (
            <li
              key={photo.src}
              className={cn(
                "relative overflow-hidden rounded-sm bg-parchment",
                photo.className,
              )}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={photo.sizes}
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </li>
          ))}
        </ul>

        <div className="mt-6 flex lg:hidden">
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 border-b border-kumkum pb-1.5 text-[15px] font-bold text-kumkum"
          >
            Follow on Instagram
            <ArrowRight className="h-4.5 w-4.5" />
          </a>
        </div>
      </Container>
    </section>
  );
}
