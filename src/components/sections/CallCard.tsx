"use client";

import { Phone } from "lucide-react";
import { usePagePhone } from "@/lib/usePagePhone";

/** Big orange call card; shows the number for the page it's on. */
export function CallCard() {
  const { phone, phoneHref } = usePagePhone();
  return (
    <a
      href={phoneHref}
      className="group flex items-center gap-5 rounded-[28px] bg-flame-500 p-6 text-white shadow-[0_30px_60px_-25px_rgba(255,90,31,0.7)] transition-all duration-300 hover:-translate-y-1 hover:bg-flame-600 sm:p-7"
    >
      <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white/15">
        <span className="absolute inset-0 animate-ping-slow rounded-full bg-white/20" />
        <Phone className="relative h-6 w-6 group-hover:animate-ring" aria-hidden />
      </span>
      <span>
        <span className="block text-xs font-bold uppercase tracking-[0.15em] text-white/80">Call 24/7 — emergencies too</span>
        <span className="mt-1 block font-display text-3xl font-extrabold sm:text-4xl">{phone}</span>
      </span>
    </a>
  );
}
