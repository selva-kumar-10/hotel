"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, Phone, ShoppingBag, Trash2 } from "lucide-react";
import Button from "@/components/ui/Button";
import Sheet from "@/components/ui/Sheet";
import { useCart } from "@/components/cart/CartProvider";
import QtyStepper from "@/components/cart/QtyStepper";
import { IMAGE_CROPS } from "@/data/menu";
import { formatPrice } from "@/lib/format";
import { site } from "@/lib/site";
import { buildOrderMessage, whatsappUrl } from "@/lib/whatsapp";

const field =
  "w-full rounded-sm border border-line-strong bg-card px-3.5 py-2.5 text-base text-ink placeholder:text-ink-muted focus:border-kumkum focus:outline-none focus:ring-2 focus:ring-kumkum/20";

export default function CartDrawer() {
  const { lines, count, total, add, decrement, remove, clear, isOpen, close } =
    useCart();
  const [name, setName] = useState("");
  const [note, setNote] = useState("");

  const isEmpty = lines.length === 0;

  const footer = isEmpty ? (
    <Button href="/menu" block size="lg" onClick={close}>
      Browse the menu
    </Button>
  ) : (
    <div className="space-y-3">
      <div className="flex items-baseline justify-between">
        <span className="text-ink-soft">Total</span>
        <span className="font-serif text-3xl font-bold text-ink">
          {formatPrice(total)}
        </span>
      </div>
      <Button
        href={whatsappUrl(buildOrderMessage(lines, total, { name, note }))}
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
        iconLeft={<Phone className="h-4 w-4" />}
      >
        Call to order · {site.phone.display}
      </Button>
    </div>
  );

  return (
    <Sheet
      open={isOpen}
      onClose={close}
      title={isEmpty ? "Your order" : `Your order (${count})`}
      footer={footer}
    >
      {isEmpty ? (
        <div className="flex flex-col items-center py-12 text-center">
          <span className="grid h-16 w-16 place-items-center rounded-full bg-parchment text-kumkum">
            <ShoppingBag className="h-8 w-8" strokeWidth={1.6} />
          </span>
          <p className="mt-4 font-serif text-2xl font-semibold text-ink">
            Your order is empty
          </p>
          <p className="mt-1 max-w-64 text-sm text-ink-soft">
            Add a few dishes from the menu and send your order in one tap.
          </p>
        </div>
      ) : (
        <>
          <ul className="divide-y divide-line">
            {lines.map(({ item, qty }) => {
              const crop = IMAGE_CROPS[item.id];
              return (
                <li key={item.id} className="flex gap-3 py-4">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-sm bg-parchment">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="64px"
                      className="object-cover"
                      style={
                        crop
                          ? { transform: `scale(${crop.zoom})`, transformOrigin: crop.origin }
                          : undefined
                      }
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="line-clamp-2 font-serif text-lg font-semibold leading-tight text-ink">
                        {item.name}
                      </p>
                      <button
                        type="button"
                        onClick={() => remove(item.id)}
                        aria-label={`Remove ${item.name}`}
                        className="-mr-2 -mt-1.5 grid h-10 w-10 shrink-0 place-items-center text-ink-muted transition-colors hover:text-kumkum"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-1.5 flex items-center justify-between">
                      <QtyStepper
                        qty={qty}
                        label={item.name}
                        onIncrement={() => add(item.id)}
                        onDecrement={() => decrement(item.id)}
                        className="w-28"
                      />
                      <span className="font-bold text-ink">
                        {formatPrice(item.price * qty)}
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-2 space-y-3 border-t border-line pt-4">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink">
                Your name <span className="text-ink-muted">(optional)</span>
              </span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                placeholder="So we can call out your order"
                className={field}
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink">
                Note <span className="text-ink-muted">(optional)</span>
              </span>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={2}
                placeholder="Less spicy, extra chutney..."
                className={field}
              />
            </label>
            <button
              type="button"
              onClick={clear}
              className="text-sm font-medium text-ink-muted underline-offset-4 hover:text-kumkum hover:underline"
            >
              Clear order
            </button>
          </div>
        </>
      )}
    </Sheet>
  );
}
