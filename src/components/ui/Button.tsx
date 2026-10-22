import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "dark" | "light" | "outline" | "outline-light" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-all duration-200 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "btn-shine bg-flame-500 text-white shadow-[0_10px_30px_-10px_rgba(255,90,31,0.8)] hover:bg-flame-600 hover:shadow-[0_14px_36px_-10px_rgba(255,90,31,0.9)] hover:-translate-y-0.5",
  dark: "btn-shine bg-ink-900 text-white hover:bg-ink-800 hover:-translate-y-0.5 shadow-lg shadow-ink-900/20",
  light: "bg-white text-ink-900 hover:bg-cream hover:-translate-y-0.5 shadow-lg shadow-black/10",
  outline: "border-2 border-ink-900/15 text-ink-900 hover:border-ink-900 hover:bg-ink-900 hover:text-white",
  "outline-light": "border-2 border-white/25 text-white hover:border-white hover:bg-white hover:text-ink-900",
  ghost: "text-ink-900 hover:bg-ink-900/5",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-7 text-base",
};

export function buttonClass(variant: Variant = "primary", size: Size = "md", extra = "") {
  return `${base} ${variants[variant]} ${sizes[size]} ${extra}`;
}

type LinkButtonProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"a">, "href" | "className" | "children">;

/** Renders a Next <Link> for internal routes, a plain <a> for tel:/mailto:/external. */
export function LinkButton({ href, variant = "primary", size = "md", className = "", children, ...rest }: LinkButtonProps) {
  const cls = buttonClass(variant, size, className);
  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={cls} {...rest}>
      {children}
    </a>
  );
}
