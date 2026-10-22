import Link from "next/link";
import { ArrowRight, Snowflake } from "lucide-react";

/** Slim announcement strip above the header. */
export function TopBar() {
  return (
    <div className="relative z-50 overflow-hidden bg-ink-950 text-[13px] text-white/75">
      {/* soft warm glow behind the message */}
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 w-[640px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(255,90,31,0.22),transparent)]"
        aria-hidden
      />
      <Link
        href="/hvac"
        className="group container-x relative flex h-10 items-center justify-center gap-2.5 transition-colors hover:text-white sm:gap-3"
      >
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-ice-200 ring-1 ring-white/15">
          <Snowflake className="h-3 w-3 transition-transform duration-700 group-hover:rotate-180" aria-hidden />
          Winter special
        </span>
        <span className="truncate">
          <strong className="font-semibold text-white">$79 furnace tune-up</strong>
          <span className="hidden sm:inline"> — get ready before the first freeze</span>
        </span>
        <span className="hidden shrink-0 items-center gap-1 font-semibold text-flame-400 sm:inline-flex">
          Claim offer
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
        </span>
      </Link>
    </div>
  );
}
