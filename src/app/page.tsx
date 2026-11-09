import Hero from "@/components/home/Hero";
import FoodBand from "@/components/home/FoodBand";
import Reels from "@/components/home/Reels";
import Signatures from "@/components/home/Signatures";
import QuoteBand from "@/components/home/QuoteBand";
import Kitchen from "@/components/home/Kitchen";
import MenuPreview from "@/components/home/MenuPreview";
import Gallery from "@/components/home/Gallery";
import Reviews from "@/components/home/Reviews";
import Visit from "@/components/home/Visit";

export default function Home() {
  return (
    <>
      <Hero />
      <FoodBand />
      <Signatures />
      <Kitchen />
      <MenuPreview />
      <QuoteBand />
      <Gallery />
      {/* The page ends with: Reels, then Reviews, then Visit (the map) last */}
      <Reels />
      <Reviews />
      <Visit />
    </>
  );
}
