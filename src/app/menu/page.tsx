import type { Metadata } from "next";
import MenuExplorer from "@/components/menu/MenuExplorer";

export const metadata: Metadata = {
  title: "Menu | Saravanas Pure Veg Restaurant",
  description:
    "Breakfast tiffins, lunch feasts, evening snacks, traditional sweets and filter coffee. Browse the full Saravanas menu and order on WhatsApp.",
};

export default function MenuPage() {
  return <MenuExplorer />;
}
