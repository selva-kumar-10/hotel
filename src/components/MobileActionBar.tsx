"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, UtensilsCrossed, ShoppingBag, Phone, MapPin } from "lucide-react";
import type { ReactNode } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { cn } from "@/lib/cn";
import { directionsUrl, site } from "@/lib/site";

const itemClass =
  "relative flex min-h-14 flex-col items-center justify-center gap-1 text-[11px] transition-colors";

function BarItem({
  active,
  icon,
  label,
}: {
  active?: boolean;
  icon: ReactNode;
  label: string;
}) {
  return (
    <span
      className={cn(
        itemClass,
        active ? "font-bold text-kumkum" : "font-medium text-ink-soft",
      )}
    >
      {active && (
        <span className="absolute top-0 h-0.5 w-7 bg-kumkum" aria-hidden="true" />
      )}
      {icon}
      <span>{label}</span>
    </span>
  );
}

/** Thumb-reach navigation + quick actions. Phones and tablets (hidden from lg up). */
export default function MobileActionBar() {
  const pathname = usePathname();
  const { count, open: openCart } = useCart();

  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/97 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_-14px_rgb(28_20_17/0.35)] backdrop-blur-md lg:hidden"
    >
      <ul className="grid grid-cols-5">
        <li>
          <Link href="/" className="block">
            <BarItem
              active={pathname === "/"}
              icon={<Home className="h-5.5 w-5.5" strokeWidth={1.8} />}
              label="Home"
            />
          </Link>
        </li>
        <li>
          <Link href="/menu" className="block">
            <BarItem
              active={pathname === "/menu"}
              icon={<UtensilsCrossed className="h-5.5 w-5.5" strokeWidth={1.8} />}
              label="Menu"
            />
          </Link>
        </li>
        <li>
          <button type="button" onClick={openCart} className="block w-full">
            <BarItem
              icon={
                <span className="relative">
                  <ShoppingBag className="h-5.5 w-5.5" strokeWidth={1.8} />
                  {count > 0 && (
                    <span className="absolute -right-2.5 -top-1.5 grid h-4 min-w-4 place-items-center rounded-full bg-kumkum px-1 text-[10px] font-bold text-cream">
                      {count}
                    </span>
                  )}
                </span>
              }
              label="Order"
            />
          </button>
        </li>
        <li>
          <a
            href={site.phone.href}
            className="block"
            aria-label={`Call ${site.phone.display}`}
          >
            <BarItem
              icon={<Phone className="h-5.5 w-5.5" strokeWidth={1.8} />}
              label="Call"
            />
          </a>
        </li>
        <li>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <BarItem
              icon={<MapPin className="h-5.5 w-5.5" strokeWidth={1.8} />}
              label="Directions"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}
