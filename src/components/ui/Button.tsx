import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * primary        kumkum fill, for light grounds
 * gold           brass fill, for dark grounds
 * outline        kumkum outline, for light grounds
 * outline-light  cream outline, for dark grounds
 * ghost          text-only
 */
type Variant = "primary" | "gold" | "outline" | "outline-light" | "ghost";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  /** Stretch to the full width of the parent (handy on mobile). */
  block?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  className?: string;
  children: ReactNode;
};

type AsLink = CommonProps & { href: string } & Omit<
    ComponentProps<"a">,
    keyof CommonProps | "href"
  >;
type AsButton = CommonProps & { href?: undefined } & Omit<
    ComponentProps<"button">,
    keyof CommonProps
  >;

export type ButtonProps = AsLink | AsButton;

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-sm font-semibold " +
  "tracking-[0.02em] whitespace-nowrap select-none transition-colors duration-200 " +
  "active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-kumkum text-cream hover:bg-kumkum-deep",
  gold: "bg-brass text-espresso hover:bg-brass-soft",
  outline:
    "border border-kumkum text-kumkum bg-transparent hover:bg-kumkum hover:text-cream",
  "outline-light":
    "border border-cream/55 text-cream bg-transparent hover:border-brass hover:text-brass",
  ghost: "text-ink hover:text-kumkum",
};

// min heights keep every size at or above a comfortable touch target
const sizes: Record<Size, string> = {
  sm: "min-h-11 px-5 text-sm",
  md: "min-h-12 px-6 text-[0.9375rem]",
  lg: "min-h-14 px-8 text-base",
};

const isExternal = (href: string) => /^(https?:|tel:|mailto:|sms:)/.test(href);

export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    block,
    iconLeft,
    iconRight,
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
    base,
    variants[variant],
    sizes[size],
    block && "w-full",
    className,
  );

  const content = (
    <>
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </>
  );

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...anchorProps } = rest as Omit<AsLink, keyof CommonProps>;
    if (isExternal(href)) {
      const opensNewTab = href.startsWith("http");
      return (
        <a
          href={href}
          className={classes}
          {...(opensNewTab && { target: "_blank", rel: "noopener noreferrer" })}
          {...anchorProps}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {content}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = rest as Omit<
    AsButton,
    keyof CommonProps
  >;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
