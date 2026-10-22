import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame, Gauge, RefreshCw, ThermometerSnowflake, TriangleAlert, Volume2 } from "lucide-react";
import thermostatImg from "@/assets/thermostat.jpg";
import { Reveal } from "@/components/ui/Reveal";

const signs = [
  { icon: Volume2, title: "Banging, rattling or squealing", text: "Often a failing blower motor, loose part or ignition delay." },
  { icon: RefreshCw, title: "Turning on and off constantly", text: "Short-cycling wears out parts fast and wastes energy." },
  { icon: ThermometerSnowflake, title: "Cold spots in some rooms", text: "Could be duct leaks, a weak blower or a failing heat exchanger." },
  { icon: Flame, title: "Yellow or flickering flame", text: "A healthy flame is blue. Yellow can signal carbon monoxide risk." },
  { icon: Gauge, title: "Energy bills creeping up", text: "An inefficient furnace quietly costs you more every month." },
  { icon: TriangleAlert, title: "Dusty or burning smell", text: "Lingering odors after the first few runs need a check." },
];

export function WarningSigns() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-flame-600">
              <span className="h-px w-6 bg-current" /> Before it breaks
            </p>
            <h2 className="font-display text-3xl font-extrabold leading-[1.08] sm:text-4xl lg:text-5xl">
              6 signs your furnace is <span className="text-flame-500">about to quit.</span>
            </h2>
            <p className="mt-5 text-lg text-ink-600">
              Furnaces rarely fail without warning. Catch these early and a $79 tune-up can save you a $600 emergency call
              — or a freezing night.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="relative mt-8 aspect-[4/3] overflow-hidden rounded-3xl">
            <Image src={thermostatImg} alt="Adjusting a smart thermostat" fill placeholder="blur" sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
            <Link
              href="#quote"
              className="group absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl bg-ink-900/90 p-4 text-white backdrop-blur transition hover:bg-ink-900"
            >
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-flame-400">Hear any of these?</span>
                <span className="font-display text-lg font-bold">Claim the $79 furnace tune-up</span>
              </span>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-flame-500 transition group-hover:translate-x-1">
                <ArrowRight className="h-5 w-5" aria-hidden />
              </span>
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:self-center">
          {signs.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="group h-full rounded-3xl bg-white p-6 ring-1 ring-ink-900/5 transition hover:-translate-y-1 hover:shadow-[0_25px_50px_-25px_rgba(10,26,45,0.4)]">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink-900 text-white transition group-hover:bg-flame-500">
                    <s.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="font-display text-4xl font-extrabold text-ink-900/[0.07]">0{i + 1}</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-ink-600">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
