"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Search, SlidersHorizontal, X } from "lucide-react";
import Button from "@/components/ui/Button";
import Sheet from "@/components/ui/Sheet";
import { Container } from "@/components/ui/Section";
import MenuCard from "@/components/menu/MenuCard";
import OrderPanel from "@/components/menu/OrderPanel";
import FilterPanel, {
  SORT_OPTIONS,
  type Filters,
  type SortKey,
} from "@/components/menu/FilterPanel";
import {
  CATEGORIES,
  MAX_PRICE,
  MENU_ITEMS,
  MIN_PRICE,
  type MenuItem,
} from "@/data/menu";
import { cn } from "@/lib/cn";

const PRICE_CEILING = Math.ceil(MAX_PRICE / 10) * 10;
const PRICE_FLOOR = Math.floor(MIN_PRICE / 10) * 10;

const DEFAULT_FILTERS: Filters = {
  category: "ALL",
  query: "",
  sort: "popular",
  maxPrice: PRICE_CEILING,
  portion: "all",
};

const sorters: Record<SortKey, (a: MenuItem, b: MenuItem) => number> = {
  popular: (a, b) => b.reviewsCount - a.reviewsCount,
  price_asc: (a, b) => a.price - b.price,
  price_desc: (a, b) => b.price - a.price,
};

const categoryList = CATEGORIES.filter((c) => c.id !== "ALL");

function SearchField({
  id,
  value,
  onChange,
  className,
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
  className?: string;
}) {
  return (
    <label htmlFor={id} className={cn("relative block", className)}>
      <span className="sr-only">Search the menu</span>
      <Search
        className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-soft"
        aria-hidden="true"
      />
      <input
        id={id}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search dosa, thali, mysore pak"
        className="h-13 w-full rounded-sm border border-line-strong bg-card pl-12 pr-11 text-base text-ink placeholder:text-ink-muted focus:border-kumkum focus:outline-none focus:ring-2 focus:ring-kumkum/20 lg:h-14 lg:border-brass lg:bg-paper [&::-webkit-search-cancel-button]:hidden"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute right-1 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center text-ink-soft hover:text-kumkum"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </label>
  );
}

export default function MenuExplorer() {
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const update = (patch: Partial<Filters>) =>
    setFilters((f) => ({ ...f, ...patch }));
  const reset = () => setFilters(DEFAULT_FILTERS);

  const results = useMemo(() => {
    const q = filters.query.trim().toLowerCase();
    return MENU_ITEMS.filter((item) => {
      if (filters.category !== "ALL" && item.category !== filters.category)
        return false;
      if (item.price > filters.maxPrice) return false;
      if (filters.portion !== "all" && item.portion !== filters.portion)
        return false;
      if (q) {
        const haystack =
          `${item.name} ${item.description} ${item.categoryLabel}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    }).sort(sorters[filters.sort]);
  }, [filters]);

  const groups = categoryList
    .map((cat) => ({
      ...cat,
      items: results.filter((i) => i.category === cat.id),
    }))
    .filter((g) => g.items.length > 0);

  const activeFilterCount =
    (filters.maxPrice < PRICE_CEILING ? 1 : 0) +
    (filters.portion !== "all" ? 1 : 0) +
    (filters.sort !== "popular" ? 1 : 0);
  const hasAnyFilter =
    activeFilterCount > 0 || filters.category !== "ALL" || filters.query !== "";

  const filtersButton = (
    <button
      type="button"
      onClick={() => setFiltersOpen(true)}
      aria-label="Filters"
      className="relative inline-flex h-13 shrink-0 items-center justify-center gap-2.5 rounded-sm border border-line-strong bg-card px-4 text-sm font-semibold text-ink transition-colors hover:border-kumkum hover:text-kumkum max-lg:w-13 lg:h-11"
    >
      <SlidersHorizontal className="h-5 w-5 lg:h-4 lg:w-4" strokeWidth={1.8} aria-hidden="true" />
      <span className="hidden lg:inline">Filters</span>
      {activeFilterCount > 0 && (
        <span className="absolute -right-1.5 -top-1.5 grid h-5 min-w-5 place-items-center rounded-full bg-kumkum px-1 text-[11px] font-bold text-cream lg:static">
          {activeFilterCount}
        </span>
      )}
    </button>
  );

  return (
    <>
      {/* Title band */}
      <section className="bg-espresso pb-8 pt-[calc(var(--header-h)+1.5rem)] lg:pb-10 lg:pt-[calc(var(--header-h)+1rem)]">
        <Container className="flex items-center justify-between gap-10">
          <div>
            <p className="text-label text-brass">Our menu</p>
            <h1 className="mt-3 font-serif text-[2.6rem] font-semibold leading-none tracking-tight text-cream lg:text-6xl">
              Freshly made,
              <br className="lg:hidden" />{" "}
              <span className="font-medium italic text-brass">every day</span>
            </h1>
          </div>
          <SearchField
            id="menu-search-desktop"
            value={filters.query}
            onChange={(v) => update({ query: v })}
            className="hidden w-100 shrink-0 lg:block"
          />
        </Container>
      </section>

      {/* Search + filters (phones) */}
      <div className="bg-paper lg:hidden">
        <Container className="flex gap-2.5 py-3.5">
          <SearchField
            id="menu-search-mobile"
            value={filters.query}
            onChange={(v) => update({ query: v })}
            className="flex-1"
          />
          {filtersButton}
        </Container>
      </div>

      {/* Category tabs: stay under the header while scrolling */}
      <div className="sticky top-(--sticky-top) z-30 border-b border-line bg-paper/97 backdrop-blur-md transition-[top] duration-300">
        <Container className="flex items-center justify-between gap-6">
          <div
            role="group"
            aria-label="Menu categories"
            className="no-scrollbar -mx-1 flex gap-6 overflow-x-auto px-1 lg:gap-9"
          >
            {CATEGORIES.map((cat) => {
              const active = filters.category === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => update({ category: cat.id })}
                  aria-pressed={active}
                  className={cn(
                    "-mb-px min-h-14 shrink-0 border-b-2 text-[15px] transition-colors lg:min-h-18",
                    active
                      ? "border-kumkum font-bold text-kumkum"
                      : "border-transparent font-medium text-ink-soft hover:text-ink",
                  )}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <label htmlFor="menu-sort" className="text-sm text-ink-soft">
              Sort by
            </label>
            <div className="relative">
              <select
                id="menu-sort"
                value={filters.sort}
                onChange={(e) => update({ sort: e.target.value as SortKey })}
                className="h-11 appearance-none rounded-sm border border-line-strong bg-card pl-4 pr-10 text-sm font-semibold text-ink focus:border-kumkum focus:outline-none"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2"
                strokeWidth={2.2}
                aria-hidden="true"
              />
            </div>
            {filtersButton}
          </div>
        </Container>
      </div>

      {/* Dishes + order panel */}
      <Container className="grid items-start gap-11 pb-20 pt-4 lg:grid-cols-[minmax(0,1fr)_21.25rem] lg:pb-24 lg:pt-10">
        <div className="space-y-10 lg:space-y-12">
          {groups.length === 0 && (
            <div className="mx-auto mt-6 max-w-sm rounded-sm border border-dashed border-gold bg-card px-6 py-12 text-center">
              <p className="font-serif text-2xl font-semibold">No dishes match</p>
              <p className="mt-1 text-sm text-ink-soft">
                Try a different search or clear your filters.
              </p>
              <Button className="mt-5" variant="outline" onClick={reset}>
                Clear filters
              </Button>
            </div>
          )}

          {groups.map((group) => (
            <section key={group.id} aria-labelledby={`heading-${group.id}`}>
              <div className="flex h-13 items-baseline justify-between pt-3 lg:mb-6 lg:h-auto lg:border-b lg:border-line-strong lg:pb-3.5 lg:pt-0">
                <h2
                  id={`heading-${group.id}`}
                  className="font-serif text-[2rem] font-semibold leading-none lg:text-[2.6rem]"
                >
                  {categoryList.find((c) => c.id === group.id)?.label}
                </h2>
                <span className="text-[13px] text-ink-soft lg:text-sm">
                  {group.items.length}{" "}
                  {group.items.length === 1 ? "dish" : "dishes"}
                </span>
              </div>
              {/* 1 column on phones/tablet portrait and next to the order panel
                  (lg), 2 columns where there is room (md, xl+) */}
              <ul className="grid gap-x-5 gap-y-0 sm:gap-y-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 xl:gap-y-5">
                {group.items.map((item) => (
                  <li key={item.id}>
                    <MenuCard item={item} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <OrderPanel />
      </Container>

      <Sheet
        open={filtersOpen}
        onClose={() => setFiltersOpen(false)}
        title="Filters"
        footer={
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="lg"
              onClick={reset}
              disabled={!hasAnyFilter}
            >
              Clear all
            </Button>
            <Button
              size="lg"
              className="flex-1"
              onClick={() => setFiltersOpen(false)}
            >
              Show {results.length} {results.length === 1 ? "dish" : "dishes"}
            </Button>
          </div>
        }
      >
        <FilterPanel
          filters={filters}
          onChange={update}
          priceMin={PRICE_FLOOR}
          priceMax={PRICE_CEILING}
        />
      </Sheet>
    </>
  );
}
