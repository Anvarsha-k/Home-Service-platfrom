import Link from "next/link";
import { site } from "@/lib/site";

/** Placeholder brand mark: a roof peak with a flame/drop inside. */
export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <defs>
        <linearGradient id="lm-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff7a45" />
          <stop offset="1" stopColor="#e64a12" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="13" fill="url(#lm-g)" />
      <path d="M10 25 24 12l14 13" fill="none" stroke="#fff" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M24 21c3.6 4 5.6 6.8 5.6 9.6A5.6 5.6 0 0 1 24 36.2a5.6 5.6 0 0 1-5.6-5.6c0-2.8 2-5.6 5.6-9.6Z"
        fill="#fff"
      />
      <path d="M24 28.5c1.4 1.6 2.2 2.7 2.2 3.8a2.2 2.2 0 0 1-4.4 0c0-1.1.8-2.2 2.2-3.8Z" fill="#ff5a1f" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
      <LogoMark />
      <span className="whitespace-nowrap leading-none">
        <span className={`block font-display text-[19px] font-extrabold tracking-tight ${light ? "text-white" : "text-ink-900"}`}>
          {site.shortName}
          <span className="text-flame-500">.</span>
        </span>
        <span className={`block text-[10.5px] font-semibold uppercase tracking-[0.18em] ${light ? "text-white/60" : "text-ink-600"}`}>
          Home Services
        </span>
      </span>
    </Link>
  );
}
