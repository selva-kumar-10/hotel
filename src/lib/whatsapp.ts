import type { CartLine } from "@/components/cart/CartProvider";
import { formatPrice } from "@/lib/format";
import { site } from "@/lib/site";

type OrderDetails = { name?: string; note?: string };

export function buildOrderMessage(
  lines: CartLine[],
  total: number,
  { name, note }: OrderDetails = {},
): string {
  const items = lines
    .map(
      ({ item, qty }) =>
        `• ${qty} × ${item.name} — ${formatPrice(item.price * qty)}`,
    )
    .join("\n");

  const message = [
    `Hello ${site.name}! I'd like to place an order:`,
    "",
    items,
    "",
    `Total: ${formatPrice(total)}`,
  ];
  if (name?.trim()) message.push(`Name: ${name.trim()}`);
  if (note?.trim()) message.push(`Note: ${note.trim()}`);
  return message.join("\n");
}

export function whatsappUrl(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
