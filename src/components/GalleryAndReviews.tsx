"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Crispy Ghee Roast Dosa",
    category: "Signature Tiffin",
    image: "/images/polaroid-dosa.jpg",
    height: "tall",
  },
  {
    id: 2,
    title: "Golden Samosa Plate",
    category: "Evening Snack",
    image: "/images/samosa.jpg",
    height: "short",
  },
  {
    id: 3,
    title: "Royal South Indian Veg Thali",
    category: "Grand Feast",
    image: "/images/polaroid-thali.jpg",
    height: "tall",
  },
  {
    id: 4,
    title: "Steaming Soft Idlis with Sambar",
    category: "Morning Classic",
    image: "/images/polaroid-idli.jpg",
    height: "short",
  },
  {
    id: 5,
    title: "Ghee Mysore Pak",
    category: "Royal Sweet",
    image: "/images/mysore-pak.jpg",
    height: "tall",
  },
  {
    id: 6,
    title: "Crispy Medu Vada",
    category: "Crunchy Delicacy",
    image: "/images/polaroid-vadai.jpg",
    height: "short",
  },
  {
    id: 7,
    title: "Traditional Banana Leaf Feast",
    category: "Heritage Dining",
    image: "/images/banana-leaf-food.jpg",
    height: "tall",
  },
  {
    id: 8,
    title: "Warm Rose Gulab Jamun",
    category: "Festive Sweet",
    image: "/images/gulab-jamun.jpg",
    height: "short",
  },
];

const REVIEWS = [
  {
    id: "1",
    name: "Dr. Ananya Sundaram",
    role: "Food Critic & Chennai Resident",
    text: "The Ghee Roast Dosa at Saravanas is unmatched anywhere in the city. Perfectly crisp, pure aroma of real cow ghee, and the coconut chutney tastes like my grandmother's recipe.",
    rating: 5,
    date: "2 days ago",
  },
  {
    id: "2",
    name: "Rajesh V. Raman",
    role: "Regular Guest (12 Years)",
    text: "Our Sunday family breakfast tradition for over a decade! The steaming hot sambar vadai and brass tumbler filter coffee is the gold standard of authentic South Indian vegetarian dining.",
    rating: 5,
    date: "1 week ago",
  },
  {
    id: "3",
    name: "Kavitha Murugesan",
    role: "Food Blogger",
    text: "Remarkable cleanliness, pure vegetarian kitchen with sacred hygiene standards. The Mini Tiffin combo with 14 ghee podi idlis is heaven on a plate!",
    rating: 5,
    date: "3 weeks ago",
  },
];

export default function GalleryAndReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ============================================================== */}
      {/* PHOTO GALLERY SECTION: Alternating Rhythmic Card Track          */}
      {/* Exactly matching reference design with Tall/Short alternating   */}
      {/* ============================================================== */}
      <section id="gallery" className="py-16 sm:py-24 bg-[#FFF9F2] overflow-hidden border-t border-orange-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
          
          {/* Header with Navigation Controls */}
          <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4 text-center sm:text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-700 bg-orange-100/90 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-2">
                <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
                Visual Feast
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F3D2B] tracking-tight mt-1">
                Meal Dishes & Moments
              </h2>
              <p className="text-stone-600 text-xs sm:text-base mt-1.5 max-w-lg">
                An authentic glimpse into our timeless kitchen recipes and cherished celebrations.
              </p>
            </div>

            {/* Desktop Navigation Arrow Buttons */}
            <div className="hidden sm:flex items-center gap-2.5">
              <button
                onClick={() => scroll("left")}
                aria-label="Scroll gallery left"
                className="w-11 h-11 rounded-full bg-white hover:bg-orange-50 border border-stone-200 shadow-sm flex items-center justify-center text-stone-700 hover:text-orange-600 transition-all active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Scroll gallery right"
                className="w-11 h-11 rounded-full bg-white hover:bg-orange-50 border border-stone-200 shadow-sm flex items-center justify-center text-stone-700 hover:text-orange-600 transition-all active:scale-95 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

        {/* ================= HORIZONTAL STAGGERED TRACK ================= */}
        <div className="relative w-full overflow-visible">
          <div
            ref={scrollRef}
            className="flex items-center gap-3.5 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-4 sm:px-8 lg:px-12 py-6 select-none"
          >
            {GALLERY_ITEMS.map((item, index) => {
              const isTall = item.height === "tall";

              return (
                <div
                  key={item.id}
                  className={`shrink-0 snap-center rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 relative group cursor-pointer border border-stone-200/80 bg-stone-100 ${
                    isTall
                      ? "w-56 xs:w-64 sm:w-72 lg:w-80 h-72 xs:h-80 sm:h-96 lg:h-108"
                      : "w-44 xs:w-52 sm:w-60 lg:w-64 h-48 xs:h-56 sm:h-64 lg:h-72"
                  }`}
                >
                  {/* Food Image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 360px"
                    className="object-cover group-hover:scale-108 transition-transform duration-700"
                    priority={index < 3}
                  />

                  {/* Gradient Overlay & Captions */}
                  <div className="absolute inset-0 bg-linear-to-t from-stone-950/85 via-stone-950/20 to-transparent opacity-85 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3.5 sm:p-5">
                    <span className="text-amber-400 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-0.5">
                      {item.category}
                    </span>
                    <h3 className="text-white font-serif font-bold text-sm sm:text-lg leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                  </div>

                  {/* Decorative Border Glow on Hover */}
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-transparent group-hover:border-orange-500/60 pointer-events-none transition-colors" />
                </div>
              );
            })}
          </div>

          {/* Mobile Swipe Hint */}
          <div className="sm:hidden flex items-center justify-center gap-1.5 mt-3 text-[11px] text-stone-500 font-medium">
            <span>← Swipe horizontally to explore dishes →</span>
          </div>
        </div>

      </section>

      {/* ============================================================== */}
      {/* REVIEWS SECTION                                                */}
      {/* ============================================================== */}
      <section id="reviews" className="py-14 sm:py-20 bg-[#FFF2E2] border-t border-orange-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-700 bg-orange-100/90 px-3 py-1 rounded-full">
              Guest Testimonials
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 mt-2.5 sm:mt-3 mb-2">
              Loved by Millions of Food Connoisseurs
            </h2>
            <p className="text-stone-600 text-xs sm:text-base px-2">
              Over 30 years of sharing pure joy, traditional spices, and timeless hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            {REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-white/80 backdrop-blur-xs rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-orange-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-orange-300" />
                  </div>
                  <p className="text-stone-700 text-sm leading-relaxed italic mb-6">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-orange-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-stone-900 text-sm">
                      {rev.name}
                    </h4>
                    <p className="text-stone-500 text-xs">{rev.role}</p>
                  </div>
                  <span className="text-[11px] text-stone-400">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
