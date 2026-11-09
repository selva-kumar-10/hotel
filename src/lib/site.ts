/**
 * Single source of truth for restaurant details used across the site.
 *
 * Address, hours and map location come from the restaurant's Google Maps
 * listing ("Hotel Saravanas", Vilangudi, Madurai). The phone / WhatsApp number
 * is the owner's own number (the Google listing shows 082206 56402).
 *
 * Call buttons use `phone`; cart orders go to `whatsapp`. Keep them in sync.
 */
export const site = {
  name: "Saravanas",
  tagline: "Pure Vegetarian",
  fullName: "Saravanas Pure Vegetarian Restaurant",
  phone: {
    display: "+91 88709 69828",
    href: "tel:+918870969828",
  },
  /** WhatsApp number for orders: digits only, with country code. */
  whatsapp: "918870969828",
  address: "Kural Nagar, Fatima College, Vilangudi",
  city: "Madurai, Tamil Nadu 625018",
  cityShort: "Madurai",
  hours: "6:00 AM – 11:00 PM",
  /** 24h clock, restaurant local time (IST). Keep in sync with `hours`. */
  openHour: 6,
  closeHour: 23,
  timeZone: "Asia/Kolkata",
  instagram: "https://www.instagram.com/hotelsaravanasmadurai/",
  /** Exact map pin of the restaurant. */
  location: { lat: 9.9482892, lng: 78.0968516 },
} as const;

/** The restaurant's own Google Maps link: opens the listing / directions. */
export const directionsUrl = "https://maps.app.goo.gl/yR4ackXnvtAvL1ws5";

/** Key-less Google Maps embed centred on the restaurant. */
export const mapEmbedUrl = `https://www.google.com/maps?q=${site.location.lat},${site.location.lng}&z=16&output=embed`;

/** Main navigation. Hash links jump to sections of the home page. */
export const navItems = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Our Kitchen", href: "/#kitchen" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Reels", href: "/#reels" },
  { name: "Visit", href: "/#visit" },
] as const;

/** Home-page sections watched by scroll-spy, and the nav item each lights up. */
export const sectionNav: Record<string, string> = {
  home: "Home",
  reels: "Reels",
  signatures: "Home",
  kitchen: "Our Kitchen",
  "menu-preview": "Menu",
  gallery: "Gallery",
  visit: "Visit",
};

export const sectionIds = Object.keys(sectionNav);
