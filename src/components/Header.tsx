"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, ArrowRight, Menu as MenuIcon, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { useCart } from "@/components/cart/CartProvider";
import { cn } from "@/lib/cn";
import { navItems, sectionIds, sectionNav, site } from "@/lib/site";
import { useActiveSection } from "@/lib/useActiveSection";
import { useScrolled } from "@/lib/useScrolled";
import { useScrollHidden } from "@/lib/useScrollHidden";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const scrolled = useScrolled();
  const scrollingDown = useScrollHidden();
  // Never tuck the header away while the mobile menu is open
  const hidden = scrollingDown && !menuOpen;
  const spyId = useActiveSection(sectionIds, pathname);
  const { count: cartCount, open: openCart } = useCart();

  const activeName =
    pathname === "/menu" ? "Menu" : (sectionNav[spyId] ?? "Home");

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  // Tell sticky elements on the page (e.g. the menu tabs) where the header
  // currently ends: "top" = full height, "shown" = compact, "hidden" = tucked away.
  useEffect(() => {
    document.documentElement.dataset.header = !scrolled
      ? "top"
      : hidden
        ? "hidden"
        : "shown";
  }, [scrolled, hidden]);

  return (
    <header
      className={cn(
        // Full-height and transparent over the hero. While scrolling DOWN it slides
        // out of the way (so it never covers the content); it only comes back,
        // compact, when the user scrolls UP.
        "fixed inset-x-0 top-0 z-50 h-(--header-h) transition-[transform,height,background-color,box-shadow] duration-300 focus-within:translate-y-0",
        scrolled && "h-16 lg:h-17",
        hidden && "-translate-y-full",
        solid &&
          "bg-espresso/95 shadow-[0_1px_0_rgb(224_188_122/0.2)] backdrop-blur-md",
      )}
    >
      {/* Same width + gutters as <Container>, so the header lines up with every section.
          3 columns on desktop keeps the nav truly centred on the page. */}
      <div className="mx-auto grid h-full w-full max-w-310 grid-cols-[1fr_auto] items-center px-6 md:px-8 lg:grid-cols-[1fr_auto_1fr] lg:px-12">
        {/* Brand */}
        <Link
          href="/"
          id="brand-logo-link"
          className="group flex w-fit flex-col gap-0.5 text-cream lg:gap-1"
          onClick={() => setMenuOpen(false)}
        >
          <span className="font-serif text-[1.75rem] font-semibold leading-none tracking-[0.02em] lg:text-4xl">
            {site.name}
          </span>
          <span className="text-[9px] font-semibold tracking-[0.3em] text-brass uppercase lg:text-[10px]">
            {site.tagline}
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex xl:gap-10">
          {navItems.map((item) => {
            const isActive = activeName === item.name;
            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "border-b py-2 text-sm font-medium tracking-[0.04em] transition-colors",
                  isActive
                    ? "border-brass text-cream"
                    : "border-transparent text-cream-soft hover:text-cream",
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* -mr-3 (phones/tablets): the icon glyph, not its 48px tap area, lines up with the content edge */}
        <div className="-mr-3 flex items-center justify-self-end lg:mr-0 lg:gap-3">
          {/* Cart */}
          <button
            type="button"
            onClick={openCart}
            id="header-cart-btn"
            aria-label={
              cartCount > 0 ? `Open order, ${cartCount} items` : "Open order"
            }
            className="relative grid h-12 w-12 place-items-center rounded-sm text-cream transition-colors hover:text-brass lg:border lg:border-cream/35 lg:hover:border-brass"
          >
            <ShoppingBag className="h-6 w-6 lg:h-5 lg:w-5" strokeWidth={1.8} />
            {cartCount > 0 && (
              <span className="absolute right-1 top-1.5 grid h-5 min-w-5 place-items-center rounded-full bg-brass px-1 text-[11px] font-bold text-espresso lg:-right-2 lg:-top-2">
                {cartCount}
              </span>
            )}
          </button>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button href="/menu" id="header-order-now-btn" variant="gold">
              Order Online
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-12 w-12 place-items-center text-cream transition-colors hover:text-brass lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            id="mobile-menu-toggle"
          >
            {menuOpen ? (
              <X className="h-6 w-6" strokeWidth={1.8} />
            ) : (
              <MenuIcon className="h-6 w-6" strokeWidth={1.8} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            tabIndex={-1}
            className="fixed inset-x-0 top-(--header-h) h-dvh w-full bg-cocoa/60 lg:hidden"
            onClick={() => setMenuOpen(false)}
          />
          <div
            id="mobile-menu"
            className="absolute inset-x-0 top-full border-t border-brass/20 bg-espresso px-5 pb-6 pt-3 shadow-2xl lg:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {navItems.map((item) => {
                const isActive = activeName === item.name;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "flex min-h-14 items-center justify-between border-b border-brass/15 font-serif text-2xl font-semibold transition-colors",
                      isActive ? "text-brass" : "text-cream hover:text-brass",
                    )}
                  >
                    {item.name}
                    {isActive && <span className="text-xs text-brass">◆</span>}
                  </Link>
                );
              })}
            </nav>
            <Button
              href="/menu"
              variant="gold"
              size="lg"
              block
              className="mt-5"
              onClick={() => setMenuOpen(false)}
              iconRight={<ArrowRight className="h-4.5 w-4.5" />}
            >
              Order Now
            </Button>
          </div>
        </>
      )}
    </header>
  );
}
