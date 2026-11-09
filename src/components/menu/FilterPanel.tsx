"use client";

import { cn } from "@/lib/cn";
import { formatPrice } from "@/lib/format";
import { PORTIONS } from "@/data/menu";

export type SortKey = "popular" | "price_asc" | "price_desc";

export type Filters = {
  category: string;
  query: string;
  sort: SortKey;
  maxPrice: number;
  portion: string;
};

export const SORT_OPTIONS: ReadonlyArray<{ id: SortKey; label: string }> = [
  { id: "popular", label: "Most popular" },
  { id: "price_asc", label: "Price: low to high" },
  { id: "price_desc", label: "Price: high to low" },
];

function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "min-h-11 rounded-sm border px-4 text-sm font-semibold transition-colors",
        active
          ? "border-kumkum bg-kumkum text-cream"
          : "border-line-strong bg-card text-ink-soft hover:border-kumkum hover:text-kumkum",
      )}
    >
      {children}
    </button>
  );
}

type FilterPanelProps = {
  filters: Filters;
  onChange: (patch: Partial<Filters>) => void;
  priceMin: number;
  priceMax: number;
};

/** Sort, price and serving-size controls (shown inside the Filters sheet). */
export default function FilterPanel({
  filters,
  onChange,
  priceMin,
  priceMax,
}: FilterPanelProps) {
  return (
    <div className="space-y-7 pb-2">
      {/* The desktop toolbar already has a Sort select */}
      <fieldset className="lg:hidden">
        <legend className="text-label mb-3 text-ink">Sort by</legend>
        <div className="flex flex-wrap gap-2">
          {SORT_OPTIONS.map((opt) => (
            <Pill
              key={opt.id}
              active={filters.sort === opt.id}
              onClick={() => onChange({ sort: opt.id })}
            >
              {opt.label}
            </Pill>
          ))}
        </div>
      </fieldset>

      <div>
        <div className="mb-3 flex items-center justify-between">
          <label htmlFor="price-range" className="text-label text-ink">
            Max price
          </label>
          <span className="rounded-xs bg-parchment px-2 py-1 text-sm font-bold text-kumkum">
            Up to {formatPrice(filters.maxPrice)}
          </span>
        </div>
        <input
          id="price-range"
          type="range"
          min={priceMin}
          max={priceMax}
          step={10}
          value={filters.maxPrice}
          onChange={(e) => onChange({ maxPrice: Number(e.target.value) })}
          className="h-2 w-full cursor-pointer accent-kumkum"
        />
        <div className="mt-2 flex justify-between text-xs font-medium text-ink-muted">
          <span>{formatPrice(priceMin)}</span>
          <span>{formatPrice(priceMax)}</span>
        </div>
      </div>

      <fieldset>
        <legend className="text-label mb-3 text-ink">Serving size</legend>
        <div className="flex flex-wrap gap-2">
          {PORTIONS.map((p) => (
            <Pill
              key={p.id}
              active={filters.portion === p.id}
              onClick={() => onChange({ portion: p.id })}
            >
              {p.label}
            </Pill>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
