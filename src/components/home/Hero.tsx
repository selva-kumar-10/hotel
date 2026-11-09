import Image from "next/image";
import { ArrowRight, Clock, MapPin, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import OpenStatus from "@/components/OpenStatus";
import { directionsUrl, site } from "@/lib/site";

function InfoItem({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Clock;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 items-center gap-4">
      <Icon className="h-6.5 w-6.5 shrink-0 text-brass" strokeWidth={1.6} aria-hidden="true" />
      <div>
        <div className="text-[11px] font-semibold tracking-[0.18em] text-cream-muted uppercase">
          {label}
        </div>
        <div className="mt-1 text-base font-medium text-cream">{children}</div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-184 flex-col overflow-hidden bg-espresso lg:h-[min(100svh,56rem)] lg:min-h-160"
    >
      <Image
        src="/images/saravanas-hero.jpg"
        alt="Ghee roast dosa on a banana leaf with chutneys, sambar, medu vada and filter coffee"
        fill
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        className="kenburns -z-20 object-cover object-[62%_50%] lg:object-[50%_62%]"
      />
      {/* Readability: dark from the bottom on phones, from the left on desktop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-t from-cocoa/97 via-cocoa/88 via-40% to-cocoa/45 lg:bg-linear-to-r lg:from-cocoa/95 lg:via-cocoa/78 lg:via-36% lg:to-cocoa/5"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 hidden h-64 bg-linear-to-t from-cocoa/85 to-transparent lg:block"
      />
      {/* Gold keyline: starts below the header so the two never collide */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-5.5 bottom-5.5 top-(--header-h) hidden rounded-xs border border-brass/30 lg:block"
      />

      {/* Bottom padding leaves room for the info bar, which is dropped on short screens */}
      <Container className="flex flex-1 flex-col justify-end pb-12 pt-(--header-h) lg:justify-center lg:pb-16 lg:[@media(min-height:46rem)]:pb-44">
        <div className="max-w-165">
          <div className="hero-in hero-d1 hidden items-center gap-3 lg:flex">
            <span className="h-2.5 w-2.5 rounded-full bg-leaf-light" aria-hidden="true" />
            <span className="text-label text-brass">
              100% Pure Vegetarian · South Indian
            </span>
          </div>
          <OpenStatus className="hero-in hero-d1 lg:hidden" />

          <h1 className="hero-in hero-d2 mt-5 font-serif text-display font-semibold text-cream lg:mt-7">
            Authentic taste,
            <br />
            <span className="font-medium italic text-brass">timeless tradition.</span>
          </h1>

          <p className="hero-in hero-d3 mt-4 max-w-125 text-lead text-cream-soft lg:mt-7 lg:text-xl">
            Traditional South Indian recipes, cooked fresh every day and served
            the way they were meant to be: on a banana leaf.
          </p>

          <div className="hero-in hero-d4 mt-7 grid max-w-md grid-cols-2 gap-3 lg:mt-10 lg:flex lg:max-w-none lg:gap-4">
            <Button
              href="/menu"
              id="hero-order-btn"
              variant="gold"
              size="lg"
              className="col-span-2 lg:col-span-1"
              iconRight={<ArrowRight className="h-4.5 w-4.5" />}
            >
              Order Now
            </Button>
            <Button
              href="/menu"
              id="hero-menu-btn"
              variant="outline-light"
              size="lg"
              className="max-lg:min-h-13"
            >
              View Menu
            </Button>
            <Button
              href={directionsUrl}
              id="hero-directions-btn"
              variant="outline-light"
              size="lg"
              className="max-lg:min-h-13 lg:hidden"
            >
              Directions
            </Button>
          </div>
        </div>
      </Container>

      {/* Info bar (desktop) */}
      <div className="absolute inset-x-0 bottom-11 hidden lg:[@media(min-height:46rem)]:block">
        <Container>
          <div className="flex items-center rounded-md border border-brass/30 bg-cocoa/70 px-8 py-5.5 backdrop-blur-md">
            <InfoItem icon={Clock} label="Hours">
              {site.hours}, daily
            </InfoItem>
            <div className="h-11 w-px bg-brass/30" aria-hidden="true" />
            <div className="flex flex-1 pl-8">
              <InfoItem icon={MapPin} label="Visit us">
                {site.address.split(",")[0]}, {site.cityShort}
              </InfoItem>
            </div>
            <div className="h-11 w-px bg-brass/30" aria-hidden="true" />
            <div className="flex flex-1 pl-8">
              <InfoItem icon={Phone} label="Call to order">
                <a href={site.phone.href} className="hover:text-brass">
                  {site.phone.display}
                </a>
              </InfoItem>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
