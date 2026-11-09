import Link from "next/link";
import { Container } from "@/components/ui/Section";
import { directionsUrl, site } from "@/lib/site";

const explore = [
  { name: "Menu", href: "/menu" },
  { name: "Our Kitchen", href: "/#kitchen" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Visit Us", href: "/#visit" },
];

export default function Footer() {
  return (
    <footer className="border-t border-brass/20 bg-cocoa text-cream-muted">
      <Container className="pb-8 pt-14 lg:pt-16">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <p className="font-serif text-4xl font-semibold leading-none text-cream">
              {site.name}
            </p>
            <p className="mt-2 text-[10px] font-semibold tracking-[0.3em] text-brass uppercase">
              Pure Vegetarian Restaurant
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Authentic South Indian vegetarian food, cooked fresh every day.
            </p>
          </div>

          <div className="flex gap-14 text-sm sm:gap-20">
            <nav aria-label="Footer" className="flex flex-col gap-3">
              <span className="text-[11px] font-bold tracking-[0.22em] text-brass uppercase">
                Explore
              </span>
              {explore.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="transition-colors hover:text-cream"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <span className="text-[11px] font-bold tracking-[0.22em] text-brass uppercase">
                Connect
              </span>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-cream"
              >
                Instagram
              </a>
              <a href={site.phone.href} className="transition-colors hover:text-cream">
                {site.phone.display}
              </a>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-cream"
              >
                Directions
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-brass/20 pt-5 text-[13px] text-cream-muted/80">
          © {site.fullName}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
