import { Award, ShieldCheck, Timer } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { GoogleG, Stars } from "@/components/ui/Stars";
import { site, yearsInBusiness } from "@/lib/site";

/**
 * Floating trust card that overlaps the bottom edge of the hero.
 * `flow-root` stops the card's negative margin from collapsing into the wrapper,
 * so the wrapper's white background starts exactly where the hero ends.
 */
export function TrustBar() {
  const items = [
    {
      icon: <GoogleG className="h-6 w-6" />,
      title: (
        <span className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
          {site.rating} <Stars className="h-3.5 w-3.5" />
        </span>
      ),
      sub: `${site.reviewCount.toLocaleString()} Google reviews`,
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-emerald-600" aria-hidden />,
      title: "Licensed & Insured",
      sub: "NATE-certified technicians",
    },
    {
      icon: <Timer className="h-6 w-6 text-flame-500" aria-hidden />,
      title: "On-Time or $50 Off",
      sub: "Our arrival promise",
    },
    {
      icon: <Award className="h-6 w-6 text-ice-500" aria-hidden />,
      title: `${yearsInBusiness}+ Years Local`,
      sub: "BBB A+ rated · 0% financing",
    },
  ];

  return (
    <div className="relative z-10 flow-root bg-white">
      <div className="container-x">
        <Reveal y={20} className="-mt-12 lg:-mt-14">
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-[28px] bg-sand shadow-[0_30px_60px_-30px_rgba(10,26,45,0.45)] ring-1 ring-ink-900/5 lg:grid-cols-4">
            {items.map((it, i) => (
              <li key={i} className="group flex flex-col items-start gap-3 bg-white p-4 transition-colors duration-300 hover:bg-cream/60 sm:flex-row sm:items-center sm:gap-4 sm:p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-cream transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-white group-hover:shadow-lg group-hover:shadow-ink-900/10 sm:h-12 sm:w-12">{it.icon}</span>
                <span className="min-w-0 leading-tight">
                  <span className="block font-display text-[15px] font-bold text-ink-900 sm:text-lg">{it.title}</span>
                  <span className="mt-0.5 block text-xs text-ink-600 sm:text-sm">{it.sub}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  );
}
