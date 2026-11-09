"use client";

import { useRef } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { Sparkles } from "@/components/ui/Decor";
import InstagramIcon from "@/components/ui/InstagramIcon";
import { Container } from "@/components/ui/Section";
import { REELS, reelUrl } from "@/data/reels";
import { site } from "@/lib/site";

const handle = site.instagram.replace(/\/$/, "").split("/").pop();

/**
 * Crop for Instagram's reel embed, measured on its real layout:
 *   header 54px | media box = width x 1.25 (4:5) holding a centred 9:16 reel | footer 154px
 * The reel is therefore 1.25 x 9/16 = 70.3% of the iframe's width. Making the iframe
 * 1 / 0.703 = 142.2% as wide as the card's video window lets the reel fill the window
 * exactly; shifting it left by the black bar (21.1%) and up by the header hides the
 * rest. All percentages, so it stays correct at any card width (iframe must stay
 * >= 326px wide, i.e. window >= 229px).
 * Re-measure EMBED_HEADER / EMBED_FOOTER if Instagram changes its embed layout.
 */
const EMBED_HEADER = 54;
const EMBED_FOOTER = 154;
const REEL_SHARE = 1.25 * (9 / 16);
const IFRAME_WIDTH_PCT = 100 / REEL_SHARE;
const EMBED_CROP = {
  width: `${IFRAME_WIDTH_PCT}%`,
  left: `${-(IFRAME_WIDTH_PCT - 100) / 2}%`,
  top: -EMBED_HEADER,
  // media box height = window height (9:16 window), so only header + footer are extra
  height: `calc(100% + ${EMBED_HEADER + EMBED_FOOTER}px)`,
} as const;

/** Instagram reels that play right on the page: swipe on phones, arrows on desktop. */
export default function Reels() {
  const track = useRef<HTMLUListElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = (card?.clientWidth ?? 320) + 24;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section
      id="reels"
      className="relative isolate overflow-hidden bg-espresso py-16 lg:py-24"
    >
      <Sparkles className="text-brass" />
      <Container>
        <div className="reveal mb-8 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-label flex items-center gap-2.5 text-brass">
              <InstagramIcon className="h-4 w-4" />
              Kitchen reels
            </p>
            <h2 className="mt-4 font-serif text-heading font-semibold text-cream">
              Behind the scenes
              <br />
              at Saravanas
            </h2>
            <p className="mt-4 text-lead text-cream-muted">
              Sizzling tawas, steaming idlis, ghee sweets and our famous kothu
              parotta, straight from our kitchen.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              href={site.instagram}
              variant="outline-light"
              iconLeft={<InstagramIcon className="h-4.5 w-4.5" />}
            >
              Follow @{handle}
            </Button>
            {/* All four fit side by side from xl, so the arrows are only needed below that */}
            <div className="hidden gap-2 md:flex xl:hidden">
              <button
                type="button"
                onClick={() => scrollBy(-1)}
                aria-label="Previous reels"
                className="grid h-12 w-12 place-items-center rounded-sm border border-cream/40 text-cream transition-colors hover:border-brass hover:text-brass"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollBy(1)}
                aria-label="Next reels"
                className="grid h-12 w-12 place-items-center rounded-sm border border-cream/40 text-cream transition-colors hover:border-brass hover:text-brass"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <ul
          ref={track}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth max-md:-mx-6 max-md:scroll-px-6 max-md:px-6 md:scroll-px-0 md:gap-6 xl:grid xl:grid-cols-4 xl:overflow-visible"
        >
          {REELS.map((reel) => (
            <li key={reel.reelId} className="w-60 shrink-0 snap-start xl:w-auto">
              <article className="flex h-full flex-col overflow-hidden rounded-md border border-brass/25 bg-cocoa">
                <div className="flex items-center gap-2 border-b border-brass/20 px-3.5 py-3 xl:px-4">
                  <InstagramIcon className="h-3.5 w-3.5 text-brass" />
                  <span className="text-[10px] font-bold tracking-[0.16em] text-brass uppercase xl:text-[11px]">
                    {reel.badge}
                  </span>
                </div>

                {/* Instagram's embed wraps the video in a white header (54px), a white
                    footer (~154px) and black side bars. We can't style a cross-origin
                    iframe, so it is oversized and shifted inside a 9:16 window that
                    shows only the video (see EMBED_CROP). */}
                <div className="relative aspect-9/16 overflow-hidden bg-black">
                  <iframe
                    src={`https://www.instagram.com/reel/${reel.reelId}/embed/`}
                    title={reel.title}
                    loading="lazy"
                    scrolling="no"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute border-0"
                    style={EMBED_CROP}
                  />
                </div>

                <div className="flex flex-1 flex-col gap-1 border-t border-brass/20 px-3.5 pb-1.5 pt-4 xl:px-4">
                  <h3 className="line-clamp-2 min-h-[2.5em] font-serif text-lg font-semibold leading-tight text-cream xl:text-xl">
                    {reel.title}
                  </h3>
                  <a
                    href={reelUrl(reel.reelId)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex min-h-11 w-fit items-center gap-1.5 text-[13px] font-bold text-brass transition-colors hover:text-brass-soft"
                  >
                    Watch on Instagram
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
