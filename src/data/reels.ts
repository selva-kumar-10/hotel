/**
 * Instagram reels shown on the home page.
 *
 * To add or change a reel: copy the code from its link
 * (instagram.com/reel/<CODE>/) into `reelId`. Reels must be from a public
 * account to play inside the page.
 */
export type Reel = {
  reelId: string;
  title: string;
  caption: string;
  badge: string;
};

export const REELS: Reel[] = [
  {
    reelId: "De1j_rGJVP6",
    title: "Celebrate Diwali with Festive Delights!",
    caption:
      "A luxurious collection of rich milk sweets, traditional ghee sweets and crunchy nut specials.",
    badge: "Festive Sweets",
  },
  {
    reelId: "DejBxkoRv-1",
    title: "Aarambikalama Diwali Sweets Shopping!",
    caption:
      "From timeless traditional sweets to premium gift boxes and crunchy savouries, all at Saravanas.",
    badge: "Specialty Boxes",
  },
  {
    reelId: "DeB9dmcT-kO",
    title: "Piping Hot Kothu Parotta!",
    caption:
      "Perfectly tossed Madurai-style kothu parotta with rich flavour, aroma and a sizzling touch.",
    badge: "Madurai Special",
  },
  {
    reelId: "DdwGKdbTtF7",
    title: "Soft, Fluffy Mallipoo Idli & Sambar!",
    caption:
      "Steaming hot mallipoo idli with a generous pour of fragrant shallot sambar and fresh coconut chutneys.",
    badge: "Tiffin Classic",
  },
];

export const reelUrl = (reelId: string) =>
  `https://www.instagram.com/reel/${reelId}/`;
