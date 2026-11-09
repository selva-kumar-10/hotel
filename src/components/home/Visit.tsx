import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { Mandala } from "@/components/ui/Decor";
import { Container } from "@/components/ui/Section";
import { directionsUrl, mapEmbedUrl, site } from "@/lib/site";

const rows = [
  { icon: MapPin, label: "Address", value: `${site.address}, ${site.cityShort}` },
  { icon: Clock, label: "Hours", value: `Every day, ${site.hours}` },
  { icon: Phone, label: "Phone", value: site.phone.display },
];

export default function Visit() {
  return (
    <section
      id="visit"
      className="relative isolate overflow-hidden bg-kumkum py-16 md:py-20 lg:flex lg:min-h-155 lg:items-center lg:py-0"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -left-3 select-none whitespace-nowrap font-serif text-[9rem] font-semibold leading-none tracking-tight text-brass/8 lg:-bottom-20 lg:text-[18.75rem]"
      >
        {site.name}
      </div>

      <Mandala className="-left-40 top-1/2 w-136 -translate-y-1/2 text-brass opacity-[0.1] lg:-left-24 lg:w-176" />

      <Container className="relative grid items-center gap-9 md:grid-cols-2 md:gap-12 lg:gap-20">
        <div className="reveal">
          <p className="text-label text-brass">Visit us</p>
          <h2 className="mt-4 font-serif text-[2.9rem] font-semibold leading-none tracking-tight text-cream lg:text-6xl">
            Come hungry.
            <br />
            <span className="font-medium italic text-brass">Leave happy.</span>
          </h2>

          <dl className="mt-8 flex flex-col gap-5 lg:mt-9 lg:gap-5.5">
            {rows.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4 lg:gap-4.5">
                <Icon
                  className="mt-0.5 h-5.5 w-5.5 shrink-0 text-brass lg:h-6 lg:w-6"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
                <div>
                  <dt className="text-[11px] font-semibold tracking-[0.18em] text-brass-soft uppercase">
                    {label}
                  </dt>
                  <dd className="mt-1 text-base leading-snug text-cream lg:text-lg">
                    {value}
                  </dd>
                </div>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-col gap-3 lg:mt-10 lg:flex-row lg:gap-3.5">
            <Button href={directionsUrl} variant="gold" size="lg">
              Get Directions
            </Button>
            <Button href={site.phone.href} variant="outline-light" size="lg">
              Call Us
            </Button>
          </div>
        </div>

        <div className="reveal relative h-72 overflow-hidden rounded-md border border-brass/35 bg-[#5a1515] md:h-full md:min-h-96 lg:h-110">
          <iframe
            src={mapEmbedUrl}
            title="Hotel Saravanas on Google Maps"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-4 inline-flex min-h-11 items-center gap-2 rounded-sm bg-espresso px-4 text-[13px] font-bold text-brass shadow-float transition-colors hover:text-brass-soft"
          >
            Open in Google Maps
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </section>
  );
}
