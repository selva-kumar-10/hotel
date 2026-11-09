import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/cn";

type QtyStepperProps = {
  qty: number;
  onIncrement: () => void;
  onDecrement: () => void;
  /** Dish name, used for screen-reader labels. */
  label: string;
  className?: string;
};

const btn =
  "grid h-10 w-10 shrink-0 place-items-center text-cream transition-colors hover:bg-kumkum-deep active:bg-kumkum-deep";

export default function QtyStepper({
  qty,
  onIncrement,
  onDecrement,
  label,
  className,
}: QtyStepperProps) {
  return (
    <div
      className={cn(
        "inline-flex h-10 items-center justify-between overflow-hidden rounded-sm bg-kumkum",
        className,
      )}
    >
      <button
        type="button"
        onClick={onDecrement}
        aria-label={`Remove one ${label}`}
        className={btn}
      >
        <Minus className="h-4 w-4" strokeWidth={2.2} />
      </button>
      <span
        className="min-w-6 text-center text-[15px] font-bold tabular-nums text-cream"
        aria-live="polite"
      >
        {qty}
      </span>
      <button
        type="button"
        onClick={onIncrement}
        aria-label={`Add one more ${label}`}
        className={btn}
      >
        <Plus className="h-4 w-4" strokeWidth={2.2} />
      </button>
    </div>
  );
}
