"use client";

import { useSyncExternalStore } from "react";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

type Status = "open" | "closing" | "closed";

const timeFormat = new Intl.DateTimeFormat("en-GB", {
  timeZone: site.timeZone,
  hour: "numeric",
  minute: "numeric",
  hourCycle: "h23",
});

function getStatus(): Status {
  const parts = timeFormat.formatToParts(new Date());
  const hour = Number(parts.find((p) => p.type === "hour")?.value);
  const minute = Number(parts.find((p) => p.type === "minute")?.value);
  const now = hour * 60 + minute;
  const open = site.openHour * 60;
  const close = site.closeHour * 60;

  if (now < open || now >= close) return "closed";
  return close - now <= 60 ? "closing" : "open";
}

// Re-check once a minute so the label flips on time without a reload.
function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 60_000);
  return () => clearInterval(id);
}

const [openRaw, closeRaw] = site.hours.split("–").map((s) => s.trim());
const openLabel = openRaw.replace(":00", "");
const closeLabel = closeRaw.replace(":00", "");

const styles: Record<Status, { dot: string; label: string }> = {
  open: { dot: "bg-leaf-light", label: `Open now · until ${closeLabel}` },
  closing: { dot: "bg-brass", label: `Closing soon · until ${closeLabel}` },
  closed: { dot: "bg-cream-muted", label: `Closed · opens ${openLabel}` },
};

/**
 * Live open/closed chip for dark grounds. The server (and the first client
 * render) shows the static hours, so there is no hydration mismatch and no
 * time read during prerender.
 */
export default function OpenStatus({ className }: { className?: string }) {
  const status = useSyncExternalStore<Status | null>(
    subscribe,
    getStatus,
    () => null,
  );
  const s = status ? styles[status] : null;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 rounded-sm border border-brass/40 bg-espresso/60 px-3.5 py-2 text-xs font-semibold tracking-[0.08em] text-cream backdrop-blur-sm",
        className,
      )}
    >
      <span className="relative flex h-2 w-2">
        {status === "open" && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf-light opacity-60" />
        )}
        <span
          className={cn(
            "relative inline-flex h-2 w-2 rounded-full",
            s?.dot ?? "bg-brass",
          )}
        />
      </span>
      <span>{s ? s.label : `Open daily · ${site.hours}`}</span>
    </span>
  );
}
