"use client";

import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { useCart } from "@/components/cart/CartProvider";
import AddButton from "@/components/cart/AddButton";
import { cn } from "@/lib/cn";
import { formatPrice } from "@/lib/format";
import { IMAGE_CROPS, type MenuItem } from "@/data/menu";

const badgeLabel: Record<NonNullable<MenuItem["badge"]>, string> = {
  BESTSELLER: "Bestseller",
  "CHEF SPECIAL": "Chef's special",
  TRENDING: "Trending",
  NEW: "New",
};

/** Indian vegetarian symbol: green square with a dot. */
function VegMark() {
  return (
    <span
      role="img"
      aria-label="Vegetarian"
      className="grid h-3.25 w-3.25 shrink-0 place-items-center rounded-xs border-[1.5px] border-leaf"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
    </span>
  );
}

/**
 * One dish. Phones: text on the left, photo on the right with the Add control
 * overlapping the photo. From `sm`: a bordered card with the photo on the left.
 */
export default function MenuCard({ item }: { item: MenuItem }) {
  const { qtyOf, add, decrement } = useCart();
  const qty = qtyOf(item.id);
  const crop = IMAGE_CROPS[item.id];

  return (
    <article
      className={cn(
        "flex justify-between gap-4 border-b border-dotted border-gold/60 pb-8 pt-4.5",
        "sm:h-44 sm:justify-start sm:rounded-sm sm:border sm:border-solid sm:border-line sm:bg-card sm:p-4",
      )}
    >
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-3.5 items-center gap-2">
          <VegMark />
          {item.badge && (
            <span className="text-[10.5px] font-bold tracking-[0.12em] text-[#8a5a0b] uppercase sm:text-[11px]">
              {badgeLabel[item.badge]}
            </span>
          )}
        </div>
        <h3 className="mt-1.5 line-clamp-2 shrink-0 font-serif text-[1.375rem] font-semibold leading-[1.12] text-ink">
          {item.name}
        </h3>
        <div className="mt-1.5 shrink-0 text-[17px] font-bold text-ink sm:hidden">
          {formatPrice(item.price)}
        </div>
        <p className="mt-1 line-clamp-1 shrink-0 text-[12.5px] leading-snug text-ink-soft sm:line-clamp-2 sm:text-[13px]">
          {item.description}
        </p>

        {/* Desktop: price + control sit at the bottom of the text column */}
        <div className="mt-auto hidden items-center justify-between sm:flex">
          <span className="text-lg font-bold text-ink">
            {formatPrice(item.price)}
          </span>
          <AddButton id={item.id} name={item.name} label="Add" className="w-26" />
        </div>
      </div>

      <div className="relative h-24 w-26 shrink-0 sm:order-first sm:h-36 sm:w-32">
        <div className="relative h-full w-full overflow-hidden rounded-sm bg-parchment">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(min-width: 640px) 128px, 104px"
            className="object-cover"
            style={
              crop
                ? { transform: `scale(${crop.zoom})`, transformOrigin: crop.origin }
                : undefined
            }
          />
        </div>

        {/* Phones: control overlaps the bottom edge of the photo */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 sm:hidden">
          {qty === 0 ? (
            <button
              type="button"
              onClick={() => add(item.id)}
              aria-label={`Add ${item.name} to order`}
              className="flex h-10 w-23 items-center justify-center gap-1.5 rounded-sm border border-kumkum bg-card text-sm font-bold text-kumkum shadow-md"
            >
              Add <Plus className="h-3.5 w-3.5" strokeWidth={2.4} />
            </button>
          ) : (
            <div className="flex h-10 w-23 items-center justify-between rounded-sm bg-kumkum text-cream shadow-md">
              <button
                type="button"
                onClick={() => decrement(item.id)}
                aria-label={`Remove one ${item.name}`}
                className="grid h-10 w-8 place-items-center"
              >
                <Minus className="h-4 w-4" strokeWidth={2.2} />
              </button>
              <span className="text-[15px] font-bold tabular-nums">{qty}</span>
              <button
                type="button"
                onClick={() => add(item.id)}
                aria-label={`Add one more ${item.name}`}
                className="grid h-10 w-8 place-items-center"
              >
                <Plus className="h-4 w-4" strokeWidth={2.2} />
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
