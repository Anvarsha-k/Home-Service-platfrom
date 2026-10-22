import { HandCoins, ShieldCheck, Sparkles, Timer } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { guarantees } from "@/lib/site";

const icons = [ShieldCheck, Timer, HandCoins, Sparkles];

export function GuaranteeStrip() {
  return (
    <section className="bg-ink-900 py-14 text-white">
      <div className="container-x grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {guarantees.map((g, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={g.title} delay={i * 0.06} className="group flex gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-flame-500/15 text-flame-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-flame-500 group-hover:text-white">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold">{g.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/60">{g.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
