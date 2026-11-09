"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShoppingCart, ArrowRight, Menu as MenuIcon, X } from "lucide-react";

interface HeaderProps {
  activeTab?: string;
}

export default function Header({ activeTab = "home" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Menu", href: "#menu", id: "menu" },
    { name: "Gallery", href: "#gallery", id: "gallery" },
    { name: "Reviews", href: "#reviews", id: "reviews" },
    { name: "Reels", href: "#reels", id: "reels" },
    { name: "Contact", href: "#contacts", id: "contacts" },
  ];

  return (
    <header
      className="absolute top-0 left-0 right-0 z-50 bg-transparent py-5 sm:py-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left Side: Brand Logo with Traditional Steaming Bowl Emblem */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            id="brand-logo-link"
          >
            {/* Steaming Bowl Icon */}
            <div className="relative flex flex-col items-center justify-center shrink-0">
              <svg 
                className="w-8 h-8 text-amber-700 group-hover:text-orange-600 transition-colors"
                viewBox="0 0 32 32" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Gentle Steam Paths */}
                <path 
                  d="M12 4C11.5 6 13.5 7 13 9" 
                  stroke="currentColor" 
                  strokeWidth="1.75" 
                  strokeLinecap="round" 
                  className="animate-pulse"
                />
                <path 
                  d="M16 2C15.5 5 17.5 6 17 8.5" 
                  stroke="currentColor" 
                  strokeWidth="1.75" 
                  strokeLinecap="round" 
                />
                <path 
                  d="M20 4C19.5 6 21.5 7 21 9" 
                  stroke="currentColor" 
                  strokeWidth="1.75" 
                  strokeLinecap="round" 
                  className="animate-pulse"
                />
                {/* Traditional Bowl Base */}
                <path 
                  d="M6 12C6 12 7 22 16 22C25 22 26 12 26 12H6Z" 
                  fill="currentColor" 
                  opacity="0.9"
                />
                <path 
                  d="M5 11H27C27.55 11 28 11.45 28 12C28 12.55 27.55 13 27 13H5C4.45 13 4 12.55 4 12C4 11.45 4.45 11 5 11Z" 
                  fill="currentColor"
                />
                <path 
                  d="M11 22H21V24C21 24.55 20.55 25 20 25H12C11.45 25 11 24.55 11 24V22Z" 
                  fill="currentColor" 
                  opacity="0.95"
                />
              </svg>
            </div>

            {/* Typography */}
            <div className="flex flex-col text-left">
              <span className="font-serif text-xl sm:text-2xl lg:text-[1.75rem] font-bold tracking-tight text-stone-900 group-hover:text-orange-700 transition-colors leading-none">
                Saravanas
              </span>
              <span className="text-[7.5px] xs:text-[8.5px] sm:text-[10px] lg:text-[11px] font-medium tracking-wider sm:tracking-widest text-stone-500 mt-0.5 sm:mt-1 uppercase flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
                <span className="inline-block w-1.5 sm:w-2.5 h-px bg-stone-400"></span>
                Pure Veg Restaurant
                <span className="inline-block w-1.5 sm:w-2.5 h-px bg-stone-400"></span>
              </span>
            </div>
          </Link>

          {/* Center: Clean Modern Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  id={`nav-${item.id}`}
                  className={`relative text-sm lg:text-[15px] transition-colors py-1 ${
                    isActive
                      ? "text-orange-600 font-bold"
                      : "text-stone-700 hover:text-orange-600 font-medium"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Side: Order Now Pill Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="#menu"
              id="header-order-now-btn"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-linear-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white text-sm font-semibold shadow-md shadow-orange-600/25 hover:shadow-lg hover:shadow-orange-600/35 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <ShoppingCart className="w-4 h-4 fill-white/20" />
              <span>Order Now</span>
              <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="#menu"
              className="sm:hidden inline-flex items-center justify-center p-2 rounded-full bg-orange-600 text-white shadow-xs"
              aria-label="Order Now"
            >
              <ShoppingCart className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-stone-700 hover:text-orange-600 hover:bg-orange-100/60 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-[#FFFBF5] border border-orange-200/80 shadow-xl backdrop-blur-lg animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-orange-500 text-white font-semibold"
                        : "text-stone-800 hover:bg-orange-100/70 hover:text-orange-600"
                    }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <div className="pt-3 mt-2 border-t border-orange-200/80">
                <Link
                  href="#menu"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-linear-to-r from-orange-500 to-amber-600 text-white text-sm font-semibold shadow-md shadow-orange-600/20"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Order Now</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                </Link>
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
