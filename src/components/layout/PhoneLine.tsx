"use client";

import { Phone } from "lucide-react";
import { usePagePhone } from "@/lib/usePagePhone";

/** Footer phone entry that follows the current page's number. */
export function PhoneLine() {
  const { phone, phoneHref } = usePagePhone();
  return (
    <a href={phoneHref} className="flex items-start gap-3 transition hover:text-flame-400">
      <Phone className="mt-0.5 h-4 w-4 shrink-0 text-flame-500" aria-hidden />
      <span>
        <span className="block font-semibold text-white">{phone}</span>
        <span className="text-xs">24/7 emergency line</span>
      </span>
    </a>
  );
}
