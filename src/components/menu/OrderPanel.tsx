"use client";

import { MessageCircle, ShoppingBag } from "lucide-react";
import Button from "@/components/ui/Button";
import { useCart } from "@/components/cart/CartProvider";
import QtyStepper from "@/components/cart/QtyStepper";
import { formatPrice } from "@/lib/format";
import { site } from "@/lib/site";
import { buildOrderMessage, whatsappUrl } from "@/lib/whatsapp";

/** Sticky order summary beside the menu (desktop only). */
export default function OrderPanel() {
  const { lines, count, total, add, decrement } = useCart();

  return (
    <aside
      aria-label="Your order"
      className="sticky top-[calc(var(--sticky-top)+5.5rem)] hidden rounded-sm border border-line-strong bg-card p-6 transition-[top] duration-300 lg:block"
    >
      <div className="flex items-baseline justify-between border-b border-line pb-4">
        <h2 className="font-serif text-3xl font-semibold leading-none">
          Your order
        </h2>
        <span className="text-sm text-ink-soft">
          {count} {count === 1 ? "item" : "items"}
        </span>
      </div>

      {lines.length === 0 ? (
        <div className="flex flex-col items-center py-10 text-center">
          <ShoppingBag className="h-9 w-9 text-gold" strokeWidth={1.4} aria-hidden="true" />
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Your order is empty.
            <br />
            Add dishes to get started.
          </p>
        </div>
      ) : (
        <>
          <ul className="max-h-[42vh] divide-y divide-dotted divide-gold/60 overflow-y-auto">
            {lines.map(({ item, qty }) => (
              <li key={item.id} className="py-3.5">
                <div className="flex justify-between gap-3">
                  <p className="text-[15px] font-semibold leading-snug">
                    {item.name}
                  </p>
                  <span className="text-[15px] font-bold">
                    {formatPrice(item.price * qty)}
                  </span>
                </div>
                <QtyStepper
                  qty={qty}
                  label={item.name}
                  onIncrement={() => add(item.id)}
                  onDecrement={() => decrement(item.id)}
                  className="mt-2 w-28"
                />
              </li>
            ))}
          </ul>

          <div className="mt-2 flex items-baseline justify-between pb-5 pt-3">
            <span className="text-[15px] text-ink-soft">Total</span>
            <span className="font-serif text-4xl font-bold leading-none">
              {formatPrice(total)}
            </span>
          </div>

          <Button
            href={whatsappUrl(buildOrderMessage(lines, total))}
            block
            size="lg"
            iconLeft={<MessageCircle className="h-5 w-5" />}
          >
            Order on WhatsApp
          </Button>
          <Button
            href={site.phone.href}
            block
            variant="outline"
            className="mt-3"
          >
            Call to order
          </Button>
          <p className="mt-4 text-center text-[13px] leading-snug text-ink-soft">
            Your order opens in WhatsApp, ready to send.
          </p>
        </>
      )}
    </aside>
  );
}
