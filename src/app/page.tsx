import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import FeaturedMenu from "@/components/FeaturedMenu";
import ReelsSection from "@/components/ReelsSection";
import GalleryAndReviews from "@/components/GalleryAndReviews";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F2] text-stone-900 selection:bg-orange-500 selection:text-white">
      {/* Top Header Navbar */}
      <Header />

      {/* Main Home Page Banner with Light Orange Background */}
      <main className="flex-1">
        <HeroBanner />
        <FeaturedMenu />
        <ReelsSection />
        <GalleryAndReviews />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
