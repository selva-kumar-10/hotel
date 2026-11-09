import { ArrowUpRight } from "lucide-react";
import { Thoranam } from "@/components/ui/Decor";
import { Container } from "@/components/ui/Section";
import { REVIEWS } from "@/data/reviews";
import { getGoogleReviews, type ReviewItem } from "@/lib/googleReviews";
import { directionsUrl } from "@/lib/site";

function Stars({ value, className }: { value: number; className?: string }) {
  const filled = Math.round(value);
  return (
    <span
      role="img"
      aria-label={`${value} out of 5 stars`}
      className={className}
    >
      <span className="text-gold">{"★".repeat(filled)}</span>
      <span className="text-line-strong">{"★".repeat(5 - filled)}</span>
    </span>
  );
}

function ReviewCard({ review }: { review: ReviewItem }) {
  const initial = review.author.trim().charAt(0).toUpperCase() || "G";
  const name = (
    <span className="block truncate text-[15px] font-semibold leading-tight text-ink">
      {review.author}
    </span>
  );

  return (
    <figure className="flex h-full flex-col rounded-md border border-line bg-card p-6 shadow-card xl:p-5.5">
      {/* stars on the left, a big quote mark on the right */}
      <div className="flex items-start justify-between">
        {review.rating !== undefined ? (
          <Stars value={review.rating} className="text-[17px] tracking-[3px]" />
        ) : (
          <span />
        )}
        <span
          aria-hidden="true"
          className="-mt-1 font-serif text-6xl leading-none text-brass/70"
        >
          “
        </span>
      </div>

      {/* fixed-height text block: every card's divider and author line sit at the same height */}
      <blockquote className="mt-2 line-clamp-6 min-h-34 font-serif text-[1.2rem] leading-[1.45] text-ink xl:line-clamp-5 xl:min-h-37 xl:text-[1.08rem]">
        {review.text}
      </blockquote>

      <figcaption className="mt-auto flex items-center gap-3 border-t border-line pt-4">
        <span
          aria-hidden="true"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-kumkum font-serif text-lg font-semibold text-cream"
        >
          {initial}
        </span>
        <span className="min-w-0">
          {review.authorUrl ? (
            <a
              href={review.authorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:text-kumkum hover:underline"
            >
              {name}
            </a>
          ) : (
            name
          )}
          {review.when && (
            <span className="mt-0.5 block text-xs text-ink-muted">
              {review.when}
            </span>
          )}
        </span>
      </figcaption>
    </figure>
  );
}

/**
 * Top Google reviews (live, via the Places API) with the Google rating.
 * Falls back to hand-written reviews in data/reviews.ts; renders nothing if
 * neither exists. All reviews sit in ONE row: five across on large screens,
 * a swipeable row everywhere else.
 */
export default async function Reviews() {
  const google = await getGoogleReviews();
  const items = google?.reviews ?? REVIEWS;
  if (items.length === 0) return null;

  const mapsUrl = google?.mapsUrl ?? directionsUrl;

  return (
    <section
      id="reviews"
      className="relative isolate overflow-hidden bg-parchment pb-16 pt-24 lg:pb-24 lg:pt-32"
    >
      <Thoranam />
      <Container>
        <div className="reveal mb-8 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-label text-kumkum">
              {google ? "Google reviews" : "Guest words"}
            </p>
            <h2 className="mt-4 font-serif text-heading font-semibold">
              Loved at the table
            </h2>
          </div>

          {google && (
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-3.5">
                <span className="font-serif text-5xl font-semibold leading-none">
                  {google.rating.toFixed(1)}
                </span>
                <div>
                  <Stars
                    value={google.rating}
                    className="text-xl tracking-[3px]"
                  />
                  <p className="mt-0.5 text-sm text-ink-soft">
                    {google.count.toLocaleString("en-IN")} Google reviews
                  </p>
                </div>
              </div>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-1.5 border-b border-kumkum text-[15px] font-bold text-kumkum transition-colors hover:text-kumkum-deep"
              >
                Read all on Google
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>

        {/* One row: swipe up to xl, five equal columns from xl */}
        <ul className="reveal no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto max-md:-mx-6 max-md:scroll-px-6 max-md:px-6 md:gap-5 xl:grid xl:grid-cols-5 xl:gap-4 xl:overflow-visible">
          {items.map((review, i) => (
            <li
              key={`${review.author}-${i}`}
              className="w-72 shrink-0 snap-start xl:w-auto"
            >
              <ReviewCard review={review} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
