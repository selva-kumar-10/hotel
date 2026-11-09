"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Play, 
  Clock, 
  MapPin, 
  Leaf, 
  ChefHat, 
  Heart,
  ChevronRight
} from "lucide-react";

export default function HeroBanner() {
  return (
    <section 
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen pt-20 xs:pt-24 sm:pt-28 lg:pt-32 pb-5 sm:pb-8 lg:pb-10 overflow-hidden bg-[#FFFBF5] flex flex-col justify-between"
    >
      {/* ================= BACKGROUND GRAPHICS & CURVES ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        
        {/* Top-Right & Right Edge Organic Fluid Orange Curved Waves */}
        <div className="absolute -top-16 -right-16 sm:-top-12 sm:-right-12 w-64 sm:w-162.5 lg:w-212.5 h-64 sm:h-162.5 lg:h-212.5 z-0 opacity-60 sm:opacity-100">
          <svg 
            viewBox="0 0 800 800" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <linearGradient id="curveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFA63D" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#FF7A1A" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#E65100" stopOpacity="0.95" />
              </linearGradient>
              <linearGradient id="curveGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FED7AA" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#F97316" stopOpacity="0.25" />
              </linearGradient>
            </defs>
            {/* Soft Outer Curve */}
            <path 
              d="M320,0 C480,120 700,160 800,380 L800,0 Z" 
              fill="url(#curveGrad2)" 
            />
            {/* Primary Fluid Ribbon */}
            <path 
              d="M440,0 C540,160 620,280 800,320 L800,0 Z" 
              fill="url(#curveGrad1)" 
            />
            {/* Dynamic Swirling S-Curve */}
            <path 
              d="M580,0 C660,190 710,260 800,340 C760,460 680,540 800,720 L800,0 Z" 
              fill="#F97316" 
              opacity="0.3"
            />
          </svg>
        </div>

        {/* Tropical Coconut Palm Trees Silhouette (Framing Right Side, Clean Separation) - Desktop */}
        <div className="hidden lg:block absolute top-8 right-4 xl:right-6 w-72 xl:w-80 aspect-square opacity-25 pointer-events-none z-0">
          <Image
            src="/images/coconut-trees-transparent.png"
            alt="Coconut Trees Silhouette"
            width={1000}
            height={1000}
            className="w-full h-full object-contain filter drop-shadow-xs"
          />
        </div>

        {/* Traditional Temple Silhouette - Desktop */}
        <div className="hidden lg:block absolute top-4 right-64 xl:right-76 w-96 aspect-square opacity-45 mix-blend-multiply pointer-events-none z-1">
          <Image
            src="/images/temple_vector_dark_golden_brown.svg"
            alt="Temple Gopuram Silhouette"
            width={2528}
            height={2536}
            className="w-full h-full object-contain filter drop-shadow-xs"
          />
        </div>

        {/* Ambient Soft Glows */}
        <div className="absolute top-1/4 left-1/3 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-orange-200/20 sm:bg-orange-200/25 blur-3xl -z-10" />
        <div className="absolute bottom-10 right-1/4 w-72 sm:w-120 h-72 sm:h-120 rounded-full bg-amber-200/25 sm:bg-amber-200/30 blur-3xl -z-10" />

        {/* Floating Green Curry Leaves */}
        <div className="hidden sm:block absolute top-24 left-[45%] w-7 h-7 text-emerald-600/80 transform rotate-45 animate-leaf drop-shadow-xs">
          <Leaf className="w-full h-full fill-emerald-500/70" />
        </div>
        <div className="absolute top-44 right-12 sm:right-16 lg:right-24 w-8 h-8 text-emerald-700/80 transform -rotate-12 animate-float drop-shadow-xs hidden sm:block">
          <Leaf className="w-full h-full fill-emerald-600/70" />
        </div>
        <div className="absolute bottom-36 left-[48%] w-5 h-5 sm:w-6 sm:h-6 text-emerald-600/75 transform rotate-70 animate-float-slow drop-shadow-xs hidden xs:block">
          <Leaf className="w-full h-full fill-emerald-500/70" />
        </div>
        <div className="absolute top-1/3 right-10 w-8 h-8 text-emerald-700/80 transform rotate-130 animate-leaf drop-shadow-xs hidden lg:block">
          <Leaf className="w-full h-full fill-emerald-600/70" />
        </div>

      </div>

      {/* ================= MAIN HERO CONTAINER ================= */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-10 lg:gap-6 items-center">
          
          {/* LEFT COLUMN: Typography & Content */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left z-20">
            
            {/* 100% Pure Vegetarian Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF5EE] border border-emerald-300/80 text-emerald-800 text-xs sm:text-sm font-semibold mb-3 sm:mb-6 shadow-2xs">
              <Leaf className="w-3.5 h-3.5 text-emerald-600 fill-emerald-500 shrink-0" />
              <span>100% Pure Vegetarian</span>
            </div>

            {/* Main Headline: Two distinct stylized lines */}
            <h1 className="font-serif font-bold tracking-tight leading-[1.14] sm:leading-[1.12] mb-3 sm:mb-5">
              <span className="block text-3xl xs:text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[3.85rem] text-[#261C14]">
                Authentic Taste,
              </span>
              <span className="block text-3xl xs:text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[3.85rem] text-orange-600 mt-1 sm:mt-1">
                Timeless Tradition
              </span>
            </h1>

            {/* Sub-headline: Fluid natural wrap on all viewports */}
            <p className="text-stone-600 text-xs xs:text-sm sm:text-base lg:text-lg max-w-md mx-auto lg:mx-0 mb-5 sm:mb-8 leading-relaxed font-normal px-2 sm:px-0">
              Experience the rich flavors of South India with our traditional recipes, fresh ingredients and warm hospitality.
            </p>

            {/* Action Buttons */}
            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-6 mb-2 sm:mb-6 w-full sm:w-auto">
              <Link
                href="#menu"
                id="hero-explore-menu-btn"
                className="inline-flex items-center justify-center gap-2 px-5 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-3.5 rounded-full bg-linear-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-semibold text-xs xs:text-sm sm:text-base shadow-lg shadow-orange-600/30 hover:shadow-orange-600/40 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shrink-0"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>

              <Link
                href="#reels"
                id="hero-watch-story-btn"
                className="inline-flex items-center gap-2 sm:gap-2.5 text-stone-800 hover:text-orange-600 font-semibold text-xs xs:text-sm sm:text-base transition-colors group py-2"
              >
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full border border-stone-800 group-hover:border-orange-600 flex items-center justify-center transition-colors shrink-0">
                  <Play className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-current ml-0.5" />
                </div>
                <span>Watch Story</span>
              </Link>
            </div>

          </div>

          {/* RIGHT COLUMN: Food Visuals */}
          <div className="lg:col-span-6 relative w-full overflow-visible">

            {/* ============================================================== */}
            {/* DESKTOP VIEW (lg:flex hidden): EXACT 4-Card Cascading Deck     */}
            {/* Preserves 100% of the desktop layout loved by user            */}
            {/* ============================================================== */}
            <div className="hidden lg:flex relative items-center justify-end w-full overflow-visible translate-y-8 xl:translate-y-12">
              <div className="relative flex items-center justify-end -space-x-8 xl:-space-x-9 py-6 px-2 w-full max-w-full">
                
                {/* CARD 1: Crispy Golden Dosa (-6 deg) */}
                <div 
                  className="relative shrink-0 w-48 xl:w-52 aspect-4/5 bg-white p-2.5 lg:p-3 pb-8 lg:pb-10 rounded-sm shadow-xl hover:shadow-2xl shadow-stone-900/20 border border-stone-200/60 transform -rotate-6 hover:rotate-0 hover:scale-110 hover:z-30 transition-all duration-300 cursor-pointer z-10 group"
                >
                  <div className="relative w-full h-full overflow-hidden rounded-xs bg-stone-100">
                    <Image
                      src="/images/polaroid-dosa.jpg"
                      alt="Crispy Ghee Roast Dosa"
                      fill
                      sizes="220px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>
                </div>

                {/* CARD 2: Steaming Soft Idlis (+3 deg) */}
                <div 
                  className="relative shrink-0 w-48 xl:w-52 aspect-4/5 bg-white p-2.5 lg:p-3 pb-8 lg:pb-10 rounded-sm shadow-xl hover:shadow-2xl shadow-stone-900/20 border border-stone-200/60 transform rotate-3 hover:rotate-0 hover:scale-110 hover:z-30 transition-all duration-300 cursor-pointer z-15 group"
                >
                  <div className="relative w-full h-full overflow-hidden rounded-xs bg-stone-100">
                    <Image
                      src="/images/polaroid-idli.jpg"
                      alt="Soft Steamed Idlis"
                      fill
                      sizes="220px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>
                </div>

                {/* CARD 3: Royal South Indian Thali (-3 deg) */}
                <div 
                  className="relative shrink-0 w-48 xl:w-52 aspect-4/5 bg-white p-2.5 lg:p-3 pb-8 lg:pb-10 rounded-sm shadow-xl hover:shadow-2xl shadow-stone-900/20 border border-stone-200/60 transform -rotate-3 hover:rotate-0 hover:scale-110 hover:z-30 transition-all duration-300 cursor-pointer z-20 group"
                >
                  <div className="relative w-full h-full overflow-hidden rounded-xs bg-stone-100">
                    <Image
                      src="/images/polaroid-thali.jpg"
                      alt="Royal South Indian Veg Thali"
                      fill
                      sizes="220px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>
                </div>

                {/* CARD 4: Crispy Medu Vada (+6 deg) */}
                <div 
                  className="relative shrink-0 w-48 xl:w-52 aspect-4/5 bg-white p-2.5 lg:p-3 pb-8 lg:pb-10 rounded-sm shadow-xl hover:shadow-2xl shadow-stone-900/20 border border-stone-200/60 transform rotate-6 hover:rotate-0 hover:scale-110 hover:z-30 transition-all duration-300 cursor-pointer z-25 group"
                >
                  <div className="relative w-full h-full overflow-hidden rounded-xs bg-stone-100">
                    <Image
                      src="/images/polaroid-vadai.jpg"
                      alt="Crispy Medu Vada"
                      fill
                      sizes="220px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* ============================================================== */}
            {/* MOBILE & TABLET VIEW (lg:hidden): Swipeable Polaroid Showcase */}
            {/* Full-sized, delicious photography with snappy mobile UX        */}
            {/* ============================================================== */}
            <div className="lg:hidden w-full mt-4 sm:mt-6">
              
              {/* Category Hint & Swipe Prompt */}
              <div className="flex items-center justify-between mb-2 px-1">
                <span className="text-[11px] xs:text-xs font-semibold text-stone-600 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  Authentic Specialties
                </span>
                <span className="text-[11px] font-medium text-orange-600 flex items-center gap-0.5 bg-orange-100/70 px-2 py-0.5 rounded-full">
                  Swipe <ChevronRight className="w-3 h-3" />
                </span>
              </div>

              {/* Smooth Horizontal Snap Scroll Showcase */}
              <div className="flex overflow-x-auto snap-x snap-mandatory gap-3.5 sm:gap-5 -mx-4 px-4 py-3 no-scrollbar items-center">
                
                {/* CARD 1: Dosa */}
                <div className="shrink-0 snap-center w-52 xs:w-56 aspect-4/5 bg-white p-2 sm:p-2.5 pb-8 rounded-sm shadow-md shadow-stone-900/15 border border-stone-200/70 transform -rotate-1 active:scale-95 transition-transform">
                  <div className="relative w-full h-full overflow-hidden rounded-xs bg-stone-100">
                    <Image
                      src="/images/polaroid-dosa.jpg"
                      alt="Crispy Ghee Roast Dosa"
                      fill
                      sizes="230px"
                      className="object-cover"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/65 backdrop-blur-xs text-[10px] font-medium text-white">
                      Bestseller
                    </span>
                  </div>
                  <p className="mt-2 text-center text-xs font-semibold text-stone-800">
                    Ghee Roast Masala Dosa
                  </p>
                </div>

                {/* CARD 2: Idli */}
                <div className="shrink-0 snap-center w-52 xs:w-56 aspect-4/5 bg-white p-2 sm:p-2.5 pb-8 rounded-sm shadow-md shadow-stone-900/15 border border-stone-200/70 transform rotate-1 active:scale-95 transition-transform">
                  <div className="relative w-full h-full overflow-hidden rounded-xs bg-stone-100">
                    <Image
                      src="/images/polaroid-idli.jpg"
                      alt="Soft Steamed Idlis"
                      fill
                      sizes="230px"
                      className="object-cover"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/65 backdrop-blur-xs text-[10px] font-medium text-white">
                      Classic
                    </span>
                  </div>
                  <p className="mt-2 text-center text-xs font-semibold text-stone-800">
                    Steaming Soft Idlis
                  </p>
                </div>

                {/* CARD 3: Thali */}
                <div className="shrink-0 snap-center w-52 xs:w-56 aspect-4/5 bg-white p-2 sm:p-2.5 pb-8 rounded-sm shadow-md shadow-stone-900/15 border border-stone-200/70 transform -rotate-1 active:scale-95 transition-transform">
                  <div className="relative w-full h-full overflow-hidden rounded-xs bg-stone-100">
                    <Image
                      src="/images/polaroid-thali.jpg"
                      alt="Royal South Indian Veg Thali"
                      fill
                      sizes="230px"
                      className="object-cover"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-orange-600 text-[10px] font-medium text-white shadow-2xs">
                      Grand Feast
                    </span>
                  </div>
                  <p className="mt-2 text-center text-xs font-semibold text-stone-800">
                    Royal Veg Thali
                  </p>
                </div>

                {/* CARD 4: Vada */}
                <div className="shrink-0 snap-center w-52 xs:w-56 aspect-4/5 bg-white p-2 sm:p-2.5 pb-8 rounded-sm shadow-md shadow-stone-900/15 border border-stone-200/70 transform rotate-1 active:scale-95 transition-transform">
                  <div className="relative w-full h-full overflow-hidden rounded-xs bg-stone-100">
                    <Image
                      src="/images/polaroid-vadai.jpg"
                      alt="Crispy Medu Vada"
                      fill
                      sizes="230px"
                      className="object-cover"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/65 backdrop-blur-xs text-[10px] font-medium text-white">
                      Crispy
                    </span>
                  </div>
                  <p className="mt-2 text-center text-xs font-semibold text-stone-800">
                    Crispy Medu Vada
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

      {/* ================= UNIFIED FEATURES & INFO ROW ================= */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 mt-3 sm:mt-6 lg:mt-8 pb-2 sm:pb-6 pt-2">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 lg:gap-8">
          
          {/* Left Part: Three Feature Badges */}
          <div className="grid grid-cols-3 gap-2 w-full md:w-auto text-stone-700 text-xs sm:text-sm font-medium py-1 px-1">
            <div className="flex items-center justify-center md:justify-start gap-1.5 sm:gap-2 shrink-0">
              <Leaf className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-orange-600 shrink-0" />
              <span className="leading-tight text-left">
                <strong className="block text-stone-900 font-semibold text-[11px] sm:text-sm">Fresh</strong>
                <span className="text-[10px] sm:text-xs text-stone-500">Ingredients</span>
              </span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-1.5 sm:gap-2 shrink-0 border-x border-stone-200/80 px-2">
              <ChefHat className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-orange-600 shrink-0" />
              <span className="leading-tight text-left">
                <strong className="block text-stone-900 font-semibold text-[11px] sm:text-sm">Expert</strong>
                <span className="text-[10px] sm:text-xs text-stone-500">Chefs</span>
              </span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-1.5 sm:gap-2 shrink-0">
              <Heart className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-orange-600 shrink-0" />
              <span className="leading-tight text-left">
                <strong className="block text-stone-900 font-semibold text-[11px] sm:text-sm">Loved by</strong>
                <span className="text-[10px] sm:text-xs text-stone-500">10k+ Foodies</span>
              </span>
            </div>
          </div>

          {/* Center: Scroll Down Indicator (desktop only) */}
          <div className="hidden xl:flex items-center justify-center shrink-0">
            <a 
              href="#menu" 
              aria-label="Scroll down to explore menu"
              className="w-6 h-10 rounded-full border-2 border-orange-500/70 flex items-start justify-center p-1 hover:border-orange-600 hover:scale-105 transition-all"
            >
              <div className="w-1.5 h-2.5 rounded-full bg-orange-500 animate-bounce mt-0.5" />
            </a>
          </div>

          {/* Right Part: Open Daily, Location & Social Icons */}
          <div className="flex items-center justify-between sm:justify-center gap-2 sm:gap-5 bg-white/95 backdrop-blur-md px-3 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-md shadow-orange-950/5 border border-stone-200/60 w-full sm:w-auto">
            
            {/* Open Daily Hours */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </div>
              <div className="text-left">
                <span className="hidden sm:block text-[8px] sm:text-[10px] font-semibold text-stone-400 uppercase tracking-wider leading-none">
                  Open Daily
                </span>
                <span className="text-[11px] sm:text-sm font-bold text-stone-900 whitespace-nowrap">
                  9 AM – 11 PM
                </span>
              </div>
            </div>

            <div className="h-4 sm:h-5 w-px bg-stone-200 shrink-0" />

            {/* Location */}
            <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-600 shrink-0" />
              <span className="text-[11px] sm:text-sm font-semibold text-stone-800 whitespace-nowrap">
                Chennai, TN
              </span>
            </div>

            <div className="h-4 sm:h-5 w-px bg-stone-200 shrink-0" />

            {/* Social Circle Icons */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center shadow-2xs transition-transform hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center shadow-2xs transition-transform hover:scale-110"
                aria-label="YouTube"
              >
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="#contacts" 
                className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center shadow-2xs transition-transform hover:scale-110"
                aria-label="Location Map"
              >
                <MapPin className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
