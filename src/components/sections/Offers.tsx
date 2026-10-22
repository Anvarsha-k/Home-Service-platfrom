import { ArrowRight, Scissors, Snowflake } from "lucide-react";
import { Countdown } from "@/components/ui/Countdown";
import { Reveal } from "@/components/ui/Reveal";
import { offers } from "@/lib/site";

export function Offers() {
  return (
    <section id="offers" className="relative scroll-mt-24 overflow-hidden py-20 lg:py-28">
      <div className="bg-dots-dark absolute inset-0" aria-hidden />
      <div className="container-x relative">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal className="max-w-2xl">
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-flame-600">
              <Snowflake className="h-4 w-4" aria-hidden /> Limited-time winter specials
            </p>
            <h2 className="font-display text-3xl font-extrabold leading-[1.08] sm:text-4xl lg:text-[3.1rem]">
              Beat the freeze. <span className="text-flame-500">Save big</span> before it hits.
            </h2>
            <p className="mt-5 text-lg text-ink-600">
              Most furnace breakdowns happen on the first cold night of the season. A tune-up now costs less than one
              emergency call later.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-ink-600">Offers end in</p>
            <Countdown />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {offers.map((o, i) => {
            const featured = i === 0;
            return (
              <Reveal
                key={o.id}
                delay={i * 0.1}
                className={`h-full ${
                  featured ? "drop-shadow-[0_24px_30px_rgba(10,26,45,0.35)]" : "drop-shadow-[0_16px_24px_rgba(10,26,45,0.12)]"
                }`}
              >
                <div
                  className={`ticket group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition duration-300 hover:-translate-y-1.5 ${
                    featured ? "bg-ink-900 text-white" : "bg-white text-ink-900"
                  }`}
                >
                  {featured && (
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-flame-500/30 blur-3xl" aria-hidden />
                  )}
                  <div className="relative flex items-center justify-between">
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${
                        featured ? "bg-flame-500 text-white" : "bg-flame-500/10 text-flame-600"
                      }`}
                    >
                      {o.tag}
                    </span>
                    {featured && <span className="text-xs font-semibold text-ice-300">★ Most popular</span>}
                  </div>
                  <div className="relative mt-6 flex items-end gap-3">
                    <span className="font-display text-6xl font-extrabold leading-none tracking-tight">{o.price}</span>
                    {o.was && (
                      <span className={`mb-1.5 text-lg line-through ${featured ? "text-white/40" : "text-ink-400"}`}>{o.was}</span>
                    )}
                  </div>
                  <h3 className="relative mt-2 font-display text-xl font-bold">{o.title}</h3>
                  <p className={`relative mt-3 flex-1 leading-relaxed ${featured ? "text-white/70" : "text-ink-600"}`}>{o.detail}</p>

                  <div className={`relative my-6 flex items-center gap-2 ${featured ? "text-white/25" : "text-ink-900/15"}`} aria-hidden>
                    <Scissors className="h-4 w-4" />
                    <span className="h-px flex-1 border-t-2 border-dashed border-current" />
                  </div>

                  <div className="relative flex items-center justify-between gap-4">
                    <span className={`text-xs ${featured ? "text-white/50" : "text-ink-400"}`}>{o.fine}</span>
                    <a
                      href="#quote"
                      className={`flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                        featured ? "bg-flame-500 text-white hover:bg-flame-400" : "bg-ink-900 text-white hover:bg-flame-500"
                      }`}
                    >
                      Claim <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
