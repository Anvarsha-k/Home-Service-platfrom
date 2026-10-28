"use client";

import Link from "next/link";
import { ClipboardCheck, Phone } from "lucide-react";
import { usePagePhone } from "@/lib/usePagePhone";

/** Thumb-friendly sticky action bar on phones. */
export function MobileCallBar() {
  const { phoneHref } = usePagePhone();
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-900/10 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-lg md:hidden">
      <div className="grid grid-cols-2 gap-2.5">
        <a
          href={phoneHref}
          className="group flex h-12 items-center justify-center gap-2 rounded-full bg-ink-900 font-semibold text-white transition active:scale-95"
        >
          <Phone className="h-[18px] w-[18px] animate-ring [animation-delay:2s]" aria-hidden /> Call Now
        </a>
        <Link
          href="/contact"
          className="flex h-12 items-center justify-center gap-2 rounded-full bg-flame-500 font-semibold text-white shadow-lg shadow-flame-500/30 transition active:scale-95"
        >
          <ClipboardCheck className="h-[18px] w-[18px]" aria-hidden /> Free Quote
        </Link>
      </div>
    </div>
  );
}
