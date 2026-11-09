"use client";

import React from "react";
import Link from "next/link";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-stone-800">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 border-2 border-emerald-500 rounded p-0.5 flex items-center justify-center bg-transparent">
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold text-white tracking-tight">Saravanas</span>
              <p className="text-xs text-orange-400 font-medium">&apos;Pure Veg Restaurant&apos;</p>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-stone-400">
            <Link href="#home" className="hover:text-orange-400 transition-colors">Home</Link>
            <Link href="#menu" className="hover:text-orange-400 transition-colors">Menu</Link>
            <Link href="#gallery" className="hover:text-orange-400 transition-colors">Gallery</Link>
            <Link href="#reviews" className="hover:text-orange-400 transition-colors">Reviews</Link>
            <Link href="#reels" className="hover:text-orange-400 transition-colors">Reels</Link>
            <Link href="#contacts" className="hover:text-orange-400 transition-colors">Contacts</Link>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 text-center sm:text-left">
          <p>© 2026 Saravanas Pure Veg Restaurant. All rights reserved.</p>
          <p className="flex items-center gap-1 justify-center">
            Crafted with traditional love & pure ghee <Heart className="w-3.5 h-3.5 text-red-500 fill-current inline" />
          </p>
        </div>
      </div>
    </footer>
  );
}
