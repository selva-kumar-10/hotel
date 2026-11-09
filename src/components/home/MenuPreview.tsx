"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { Container, Ornament } from "@/components/ui/Section";
import { CATEGORIES, MENU_ITEMS, type CategoryFilter } from "@/data/menu";
import { cn } from "@/lib/cn";
import { formatPrice } from "@/lib/format";

const tabs = CATEGORIES.filter((c) => c.id !== "ALL");
const PER_TAB = 6;

/** Menu-board style preview of each meal time, linking to the full menu. */
export default function MenuPreview() {
  const [active, setActive] = useState<CategoryFilter>("breakfast");
  const rows = MENU_ITEMS.filter((i) => i.category === active).slice(0, PER_TAB);

  return (
    <section id="menu-preview" className="bg-parchment py-16 lg:py-24">
      <Container>
        <div className="reveal lg:text-center">
          <Ornament className="mb-5 hidden lg:flex" />
          <p className="text-label text-kumkum">The menu</p>
          <h2 className="mt-4 font-serif text-heading font-semibold">
            Something for
            <br className="lg:hidden" /> every hour
          </h2>
        </div>

        <div
          role="tablist"
          aria-label="Meal times"
          className="no-scrollbar mt-7 flex gap-7 overflow-x-auto border-b border-line-strong lg:mt-10 lg:justify-center lg:gap-11"
        >
          {tabs.map((tab) => {
            const selected = tab.id === active;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={selected}
                aria-controls="menu-preview-panel"
                onClick={() => setActive(tab.id)}
                className={cn(
                  "-mb-px min-h-12 shrink-0 border-b-2 px-0.5 pb-3.5 pt-2 text-[15px] transition-colors lg:text-base",
                  selected
                    ? "border-kumkum font-bold text-kumkum"
                    : "border-transparent font-medium text-ink-soft hover:text-ink",
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <ul
          id="menu-preview-panel"
          role="tabpanel"
          aria-labelledby={`tab-${active}`}
          className="mt-3 grid gap-x-12 md:grid-cols-2 lg:mt-12 lg:gap-x-20 lg:gap-y-8"
        >
          {rows.map((item, i) => (
            <li
              key={item.id}
              className={cn(
                "border-b border-dotted border-gold/60 py-4.5 lg:border-0 lg:py-0",
                i >= 4 && "hidden md:block",
              )}
            >
              <div className="flex items-baseline justify-between gap-4 lg:gap-3.5">
                <h3 className="font-serif text-2xl font-semibold leading-tight lg:text-[1.7rem]">
                  {item.name}
                </h3>
                <span
                  aria-hidden="true"
                  className="hidden flex-1 -translate-y-1.5 border-b-2 border-dotted border-gold/70 lg:block"
                />
                <span className="shrink-0 text-[17px] font-bold lg:text-lg">
                  {formatPrice(item.price)}
                </span>
              </div>
              <p className="mt-1.5 line-clamp-2 max-w-115 text-[13.5px] leading-relaxed text-ink-soft lg:text-sm">
                {item.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex lg:mt-12 lg:justify-center">
          <Button
            href="/menu"
            variant="primary"
            size="lg"
            className="w-full lg:w-auto lg:px-10"
            iconRight={<ArrowRight className="h-4.5 w-4.5" />}
          >
            See the full menu
          </Button>
        </div>
      </Container>
    </section>
  );
}
