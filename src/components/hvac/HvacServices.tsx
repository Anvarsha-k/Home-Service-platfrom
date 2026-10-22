import Link from "next/link";
import { ArrowUpRight, Fan, Flame, Heater, Snowflake, Thermometer, Wind } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  { icon: Flame, title: "Furnace Repair", text: "Gas and electric furnaces, all makes. Most repairs finished in a single visit with parts on the van.", tag: "Same-day" },
  { icon: Heater, title: "Heat Pump Service", text: "Defrost problems, iced coils, aux-heat issues and refrigerant leaks diagnosed and fixed fast.", tag: "Same-day" },
  { icon: Wind, title: "New System Installation", text: "Right-sized furnaces and heat pumps with a proper load calculation — not a guess. Up to 10-year warranty.", tag: "0% APR" },
  { icon: Thermometer, title: "Tune-Ups & Maintenance", text: "21-point inspection that catches failures before the first freeze and keeps manufacturer warranties valid.", tag: "$79" },
  { icon: Fan, title: "Indoor Air Quality", text: "Whole-home humidifiers, HEPA filtration and UV purifiers for dry winter air and allergies.", tag: null },
  { icon: Snowflake, title: "AC Repair & Install", text: "When summer comes back, we're the same team keeping your home cool — one company for year-round comfort.", tag: null },
];

export function HvacServices() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Heating & cooling services"
          title={
            <>
              Whatever your system needs, <span className="text-flame-500">we&apos;ve got it.</span>
            </>
          }
          sub="Factory-trained on every major brand — Carrier, Trane, Lennox, Goodman, Rheem, Bryant, American Standard and more."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-ink-900/10 ring-1 ring-ink-900/10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 0.06} className="bg-white">
              <Link href="#quote" className="group flex h-full flex-col p-7 transition hover:bg-cream sm:p-8">
                <div className="flex items-start justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-linear-to-br from-flame-400 to-flame-600 text-white shadow-lg shadow-flame-500/25 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                    <it.icon className="h-6 w-6" aria-hidden />
                  </span>
                  {it.tag && (
                    <span className="rounded-full bg-ice-200 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-ice-500">{it.tag}</span>
                  )}
                </div>
                <h3 className="mt-6 font-display text-xl font-bold">{it.title}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-ink-600">{it.text}</p>
                <span className="mt-5 flex items-center gap-1 text-sm font-semibold text-ink-900 transition group-hover:text-flame-600">
                  Get a quote <ArrowUpRight className="h-4 w-4" aria-hidden />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
