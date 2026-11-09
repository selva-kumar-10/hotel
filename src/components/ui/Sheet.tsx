"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { X } from "lucide-react";

type SheetProps = {
  open: boolean;
  onClose: () => void;
  title: ReactNode;
  children: ReactNode;
  /** Sticky area under the scrolling body (primary actions). */
  footer?: ReactNode;
};

/**
 * Modal panel: bottom sheet on phones/tablets, right-hand drawer on desktop.
 * Closes on Escape or backdrop tap, locks page scroll, restores focus.
 */
export default function Sheet({ open, onClose, title, children, footer }: SheetProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-60">
      <button
        type="button"
        aria-label="Close"
        tabIndex={-1}
        onClick={onClose}
        className="animate-fade absolute inset-0 h-full w-full cursor-default bg-cocoa/65 backdrop-blur-[2px]"
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={typeof title === "string" ? title : undefined}
        tabIndex={-1}
        className="animate-sheet absolute inset-x-0 bottom-0 flex max-h-[90dvh] flex-col rounded-t-xl bg-paper shadow-2xl outline-none lg:inset-y-0 lg:left-auto lg:right-0 lg:max-h-none lg:w-112 lg:rounded-none"
      >
        {/* grab handle (phones) */}
        <div
          className="mx-auto mt-2.5 h-1.5 w-11 shrink-0 rounded-full bg-line-strong lg:hidden"
          aria-hidden="true"
        />

        <div className="flex shrink-0 items-center justify-between gap-4 border-b border-line px-5 pb-3 pt-3 lg:py-5">
          <h2 className="font-serif text-2xl font-semibold text-ink">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid h-11 w-11 place-items-center rounded-sm text-ink-soft transition-colors hover:text-kumkum"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4">{children}</div>

        {footer && (
          <div className="shrink-0 border-t border-line bg-paper px-5 pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))]">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
