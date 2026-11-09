"use client";

import { ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/components/cart/CartProvider";
import { formatPrice } from "@/lib/format";

/** Floating order summary: appears once something is in the cart (phones and tablets). */
export default function CartBar() {
  const { count, total, isOpen, open } = useCart();
  if (count === 0 || isOpen) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-[calc(4.25rem+env(safe-area-inset-bottom))] z-40 flex justify-center px-4 lg:hidden">
      <button
        type="button"
        onClick={open}
        className="animate-fade pointer-events-auto flex w-full max-w-md items-center justify-between gap-3 rounded-md border border-brass/40 bg-espresso px-4 py-3 text-left text-cream shadow-float transition-transform active:scale-[0.98]"
      >
        <span className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-sm bg-kumkum">
            <ShoppingBag className="h-5 w-5" strokeWidth={1.8} />
          </span>
          <span className="leading-tight">
            <span className="block text-xs font-semibold tracking-[0.12em] text-brass uppercase">
              {count} {count === 1 ? "item" : "items"}
            </span>
            <span className="block text-lg font-bold">{formatPrice(total)}</span>
          </span>
        </span>
        <span className="flex items-center gap-2 text-[15px] font-bold text-brass">
          View order
          <ArrowRight className="h-4.5 w-4.5" />
        </span>
      </button>
    </div>
  );
}
