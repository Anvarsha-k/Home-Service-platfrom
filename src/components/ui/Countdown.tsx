"use client";

import { useEffect, useState } from "react";

/** Counts down to the end of the current year (offer deadline placeholder). */
export function Countdown({ dark = false }: { dark?: boolean }) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const end = new Date(new Date().getFullYear(), 11, 31, 23, 59, 59).getTime();
  const diff = Math.max(0, end - (now ?? end));
  const parts = [
    { v: Math.floor(diff / 86400000), l: "Days" },
    { v: Math.floor((diff / 3600000) % 24), l: "Hrs" },
    { v: Math.floor((diff / 60000) % 60), l: "Min" },
    { v: Math.floor((diff / 1000) % 60), l: "Sec" },
  ];

  return (
    <div className="flex items-center gap-2" role="timer" aria-label="Offer ends December 31">
      {parts.map((p, i) => (
        <div key={p.l} className="flex items-center gap-2">
          <div
            className={`min-w-[3.4rem] rounded-xl px-2 py-2 text-center ${
              dark ? "bg-white/10 text-white ring-1 ring-white/15" : "bg-ink-900 text-white"
            }`}
          >
            <div className="font-display text-2xl font-bold tabular-nums leading-none">
              {now === null ? "--" : String(p.v).padStart(2, "0")}
            </div>
            <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider opacity-60">{p.l}</div>
          </div>
          {i < parts.length - 1 && <span className={`font-bold ${dark ? "text-white/40" : "text-ink-400"}`}>:</span>}
        </div>
      ))}
    </div>
  );
}
