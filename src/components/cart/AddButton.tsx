"use client";

import { Plus } from "lucide-react";
import Button from "@/components/ui/Button";
import { useCart } from "@/components/cart/CartProvider";
import QtyStepper from "@/components/cart/QtyStepper";

/** "Add to order" that turns into a quantity stepper once the dish is in the cart. */
export default function AddButton({
  id,
  name,
  label = "Add to order",
  className,
}: {
  id: string;
  name: string;
  label?: string;
  className?: string;
}) {
  const { qtyOf, add, decrement } = useCart();
  const qty = qtyOf(id);

  if (qty === 0) {
    return (
      <Button
        variant="outline"
        size="sm"
        className={className}
        onClick={() => add(id)}
        aria-label={`Add ${name} to order`}
        iconRight={<Plus className="h-4 w-4" strokeWidth={2.2} />}
      >
        {label}
      </Button>
    );
  }

  return (
    <QtyStepper
      qty={qty}
      label={name}
      onIncrement={() => add(id)}
      onDecrement={() => decrement(id)}
      className={className}
    />
  );
}
