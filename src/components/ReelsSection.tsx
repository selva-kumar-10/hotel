"use client";

import React from "react";
import { Heart, Eye, ExternalLink } from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

interface ReelItem {
  id: string;
  reelId: string;
  url: string;
  title: string;
  caption: string;
  views: string;
  likes: string;
  badge: string;
}

const REELS: ReelItem[] = [
  {
    id: "1",
    reelId: "De1j_rGJVP6",
    url: "https://www.instagram.com/reel/De1j_rGJVP6/",
    title: "Celebrate Diwali with Festive Delights! ✨",
    caption: "Luxurious collection of rich milk sweets, traditional ghee sweets, and crunchy nut specials.",
    views: "12.4K",
    likes: "76",
    badge: "Festive Sweets",
  },
  {
    id: "2",
    reelId: "DejBxkoRv-1",
    url: "https://www.instagram.com/reel/DejBxkoRv-1/",
    title: "Aarambikalama Diwali Sweets Shopping! 🪔🍬",
    caption: "From timeless traditional sweets to premium gift boxes and crunchy savouries, ellaame Saravanas-la!",
    views: "45.8K",
    likes: "296",
    badge: "Specialty Boxes",
  },
  {
    id: "3",
    reelId: "DeB9dmcT-kO",
    url: "https://www.instagram.com/reel/DeB9dmcT-kO/",
    title: "Ppaahhh… Piping Hot Kothu Parotta! 🤤🔥",
    caption: "Perfectly tossed, piping hot Madurai-style Kothu Parotta with rich flavour, aroma and sizzling touch!",
    views: "24.2K",
    likes: "48",
    badge: "Madurai Special",
  },
  {
    id: "4",
    reelId: "DdwGKdbTtF7",
    url: "https://www.instagram.com/reel/DdwGKdbTtF7/",
    title: "Soft, Fluffy Mallipoo Idli & Sambar! ☁️✨",
    caption: "Steaming hot Mallipoo Idli served with generous pour of fragrant shallot sambar and classic fresh coconut chutneys.",
    views: "19.5K",
    likes: "45",
    badge: "Tiffin Classic",
  },
];

export default function ReelsSection() {
  return (
    <section id="reels" className="py-16 sm:py-24 bg-[#FFF5EA] border-t border-orange-200/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-linear-to-r from-pink-500/10 via-red-500/10 to-orange-500/10 border border-pink-500/20 text-pink-700 text-xs font-bold mb-3 shadow-2xs">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>Trending Kitchen Reels</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Behind the Scenes at Saravanas
            </h2>
            <p className="text-stone-600 text-xs sm:text-base mt-2 max-w-xl">
              Watch theatrical sizzling cooking, steaming mallipoo idlis, rich ghee sweets, and our famous kothu parotta live on Instagram.
            </p>
          </div>

          <a 
            href="https://www.instagram.com/hotelsaravanasmadurai/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-orange-50 border border-orange-200/80 text-xs sm:text-sm font-semibold text-orange-600 hover:text-orange-700 shadow-xs transition-all self-start md:self-auto group"
          >
            <InstagramIcon className="w-4 h-4 text-pink-600 group-hover:scale-110 transition-transform" />
            <span>Follow @hotelsaravanasmadurai</span>
            <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-70" />
          </a>
        </div>

        {/* Reels Carousel on Mobile, Grid on Tablet/Desktop — Direct Inline Embeds without popups */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 pb-4 sm:pb-0">
          {REELS.map((reel) => (
            <div
              key={reel.id}
              className="shrink-0 w-74 sm:w-auto snap-center bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-orange-200/80 flex flex-col group"
            >
              {/* Card Header Badge */}
              <div className="px-3.5 py-2.5 bg-linear-to-r from-orange-50 via-amber-50/50 to-white border-b border-orange-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-linear-to-tr from-amber-500 to-pink-600 flex items-center justify-center text-white shadow-2xs">
                    <InstagramIcon className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-bold text-stone-800 tracking-tight">{reel.badge}</span>
                </div>
                <span className="text-[10px] font-semibold text-orange-700 bg-orange-100/80 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Eye className="w-3 h-3 text-orange-600" />
                  {reel.views}
                </span>
              </div>

              {/* Direct Instagram Embed - Plays immediately right on the card on click */}
              <div className="relative w-full h-118 sm:h-122 bg-stone-900 overflow-hidden">
                <iframe
                  src={`https://www.instagram.com/reel/${reel.reelId}/embed/`}
                  title={reel.title}
                  className="w-full h-full border-0"
                  scrolling="no"
                  loading="lazy"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Card Footer with Title, Likes & Direct App Link */}
              <div className="p-3 bg-white border-t border-orange-100 flex items-center justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-stone-900 truncate group-hover:text-orange-600 transition-colors">
                    {reel.title}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] text-stone-500 mt-0.5">
                    <span className="flex items-center gap-1 text-red-500 font-semibold">
                      <Heart className="w-3 h-3 fill-current" />
                      {reel.likes}
                    </span>
                    <span>•</span>
                    <span className="truncate">{reel.caption}</span>
                  </div>
                </div>
                <a
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-orange-50 hover:bg-orange-100 text-orange-700 text-[11px] font-semibold transition-colors"
                  title="Open on Instagram"
                >
                  <span>Open</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

