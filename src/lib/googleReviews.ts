import { cacheLife } from "next/cache";
import { site } from "@/lib/site";

export type ReviewItem = {
  author: string;
  authorUrl?: string;
  /** 1-5. Missing for hand-written reviews. */
  rating?: number;
  text: string;
  /** e.g. "2 months ago" */
  when?: string;
};

export type GoogleReviews = {
  rating: number;
  count: number;
  /** Link to the listing on Google Maps. */
  mapsUrl?: string;
  reviews: ReviewItem[];
};

const API = "https://places.googleapis.com/v1";

type PlaceReview = {
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: { text?: string };
  originalText?: { text?: string };
  authorAttribution?: { displayName?: string; uri?: string };
};

type PlaceDetails = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: PlaceReview[];
};

/** Finds the Place ID for the restaurant (skipped when GOOGLE_PLACE_ID is set). */
async function findPlaceId(key: string): Promise<string | null> {
  const res = await fetch(`${API}/places:searchText`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": key,
      "X-Goog-FieldMask": "places.id",
    },
    body: JSON.stringify({
      textQuery: `Hotel ${site.name} ${site.address} ${site.cityShort}`,
      locationBias: {
        circle: {
          center: {
            latitude: site.location.lat,
            longitude: site.location.lng,
          },
          radius: 300,
        },
      },
      maxResultCount: 1,
    }),
  });
  if (!res.ok) return null;
  const data = (await res.json()) as { places?: { id?: string }[] };
  return data.places?.[0]?.id ?? null;
}

/**
 * The restaurant's Google rating and its top reviews (Google returns the 5 it
 * considers most relevant), via the official Places API.
 *
 * Needs GOOGLE_PLACES_API_KEY (see .env.example). Without a key, or if the
 * request fails, this returns null and the site falls back to the hand-written
 * reviews in data/reviews.ts (or hides the section). Cached for a day.
 */
export async function getGoogleReviews(): Promise<GoogleReviews | null> {
  "use cache";
  cacheLife("days");

  const key = process.env.GOOGLE_PLACES_API_KEY;
  if (!key) return null;

  try {
    const placeId = process.env.GOOGLE_PLACE_ID || (await findPlaceId(key));
    if (!placeId) return null;

    const res = await fetch(
      `${API}/places/${encodeURIComponent(placeId)}?languageCode=en`,
      {
        headers: {
          "X-Goog-Api-Key": key,
          "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,reviews",
        },
      },
    );
    if (!res.ok) return null;

    const place = (await res.json()) as PlaceDetails;
    const reviews: ReviewItem[] = (place.reviews ?? [])
      .map((r) => ({
        author: r.authorAttribution?.displayName ?? "Google user",
        authorUrl: r.authorAttribution?.uri,
        rating: r.rating,
        // Prefer what the guest actually wrote over Google's translation
        text: (r.originalText?.text ?? r.text?.text ?? "").trim(),
        when: r.relativePublishTimeDescription,
      }))
      .filter((r) => r.text.length > 0)
      .slice(0, 5);

    if (reviews.length === 0 || place.rating === undefined) return null;

    return {
      rating: place.rating,
      count: place.userRatingCount ?? reviews.length,
      mapsUrl: place.googleMapsUri,
      reviews,
    };
  } catch {
    return null;
  }
}
