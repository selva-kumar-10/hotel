import type { ReviewItem } from "@/lib/googleReviews";

/**
 * Guest reviews shown in the "Loved at the table" section.
 *
 * Live Google reviews (GOOGLE_PLACES_API_KEY in .env.local) take priority; this
 * list is used when they are unavailable.
 *
 * TODO(owner, BEFORE LAUNCH): the entries below are DUMMY text so the section
 * can be designed and reviewed. They are not real customer reviews. Replace
 * them with real reviews (with the guest's permission) or set up the Google
 * key and empty this list. Setting `REVIEWS = []` hides the section.
 */
export const REVIEWS: ReviewItem[] = [
  {
    author: "Dummy Guest 1",
    rating: 5,
    when: "2 weeks ago",
    text: "Crispy dosa, hot sambar and proper filter coffee. Everything tasted like home cooking and the service was quick.",
  },
  {
    author: "Dummy Guest 2",
    rating: 5,
    when: "a month ago",
    text: "We came for a family lunch and the thali was filling and fresh. Lovely vegetarian food at a fair price.",
  },
  {
    author: "Dummy Guest 3",
    rating: 4,
    when: "a month ago",
    text: "Soft idlis with generous ghee and fragrant sambar. Gets busy at breakfast, but the food is worth the wait.",
  },
  {
    author: "Dummy Guest 4",
    rating: 5,
    when: "2 months ago",
    text: "The sweets counter is a treat. We picked up mysore pak for a festival and everyone asked where it was from.",
  },
  {
    author: "Dummy Guest 5",
    rating: 4,
    when: "3 months ago",
    text: "Clean place, friendly staff and easy parking. The kothu parotta was spicy and delicious.",
  },
];
