import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Centered page width with responsive side gutters. */
export function Container({ className, ...rest }: ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-310 px-6 md:px-8 lg:px-12", className)}
      {...rest}
    />
  );
}

type SectionProps = ComponentProps<"section"> & {
  /** Skip the inner Container (for full-bleed sections). */
  bleed?: boolean;
};

/** Standard section: consistent vertical rhythm on every screen size. */
export function Section({
  bleed,
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <section className={cn("py-16 sm:py-20 lg:py-28", className)} {...rest}>
      {bleed ? children : <Container>{children}</Container>}
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  /** `dark` for espresso / kumkum grounds. */
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "mb-10 max-w-2xl sm:mb-14",
        centered ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <p className={cn("text-label mb-4", dark ? "text-brass" : "text-kumkum")}>
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-serif text-heading font-semibold",
          dark ? "text-cream" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lead",
            dark ? "text-cream-muted" : "text-ink-soft",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/** Thin gold line - diamond - line divider. `tone="brass"` for dark grounds. */
export function Ornament({
  className,
  tone = "gold",
}: {
  className?: string;
  tone?: "gold" | "brass";
}) {
  const line = tone === "brass" ? "bg-brass" : "bg-gold";
  const mark = tone === "brass" ? "text-brass" : "text-gold";
  return (
    <div
      aria-hidden="true"
      className={cn("flex items-center justify-center gap-3.5", className)}
    >
      <span className={cn("h-px w-14", line)} />
      <span className={cn("text-xs", mark)}>◆</span>
      <span className={cn("h-px w-14", line)} />
    </div>
  );
}
