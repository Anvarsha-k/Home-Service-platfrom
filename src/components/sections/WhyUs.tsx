import Image from "next/image";
import { BadgeCheck, HandCoins, ShieldCheck, Sparkles, Timer } from "lucide-react";
import techImg from "@/assets/tech-older.jpg";
import cozyImg from "@/assets/cozy.jpg";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { guarantees, site, yearsInBusiness } from "@/lib/site";

const icons = [ShieldCheck, Timer, HandCoins, Sparkles];

export function WhyUs() {
  const stats = [
    { to: yearsInBusiness, suffix: "+", label: "Years serving the area" },
    { to: site.jobsCompleted, suffix: "+", label: "Jobs completed" },
    { to: site.rating, decimals: 1, suffix: "★", label: "Average rating" },
    { to: site.technicians, suffix: "", label: "Certified technicians" },
  ];

  return (
    <section className="overflow-hidden py-20 lg:py-28">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image collage */}
          <Reveal x={-30} y={0} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] sm:aspect-[5/5]">
              <Image src={techImg} alt="Senior technician smiling on the job" fill placeholder="blur" sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-2 w-[46%] overflow-hidden rounded-3xl border-[6px] border-cream shadow-2xl sm:-right-6">
              <div className="relative aspect-square">
                <Image src={cozyImg} alt="Cozy, warm living space" fill placeholder="blur" sizes="25vw" className="object-cover" />
              </div>
            </div>
            <div className="absolute -left-2 top-8 animate-float-slow rounded-2xl bg-white p-4 shadow-2xl sm:-left-6">
              <p className="font-display text-4xl font-extrabold text-flame-500">{yearsInBusiness}+</p>
              <p className="text-sm font-semibold leading-tight text-ink-700">
                years keeping
                <br />
                {site.cityShort} homes running
              </p>
            </div>
            <div className="absolute bottom-16 left-4 flex items-center gap-2 rounded-full bg-ink-900/90 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
              <BadgeCheck className="h-4 w-4 text-emerald-400" aria-hidden /> Background-checked &amp; drug-tested
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-flame-600">
                <span className="h-px w-6 bg-current" /> Our promise to you
              </p>
              <h2 className="font-display text-3xl font-extrabold leading-[1.08] sm:text-4xl lg:text-[3.1rem]">
                The home service company that <span className="text-flame-500">actually shows up.</span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-600">
                We built {site.name} around the things homeowners told us they hate: vague arrival windows, surprise bills,
                and fixes that don&apos;t last. So we guarantee the opposite — in writing.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {guarantees.map((g, i) => {
                const Icon = icons[i];
                return (
                  <Reveal key={g.title} delay={i * 0.08}>
                    <div className="group h-full rounded-2xl bg-white p-5 ring-1 ring-ink-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-900/10">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-flame-500/10 text-flame-600 transition-all duration-300 group-hover:-rotate-6 group-hover:bg-flame-500 group-hover:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h3 className="mt-4 font-display text-lg font-bold">{g.title}</h3>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-ink-600">{g.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-ink-900/10 ring-1 ring-ink-900/10 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-cream p-6 text-center sm:p-8">
              <p className="font-display text-4xl font-extrabold text-ink-900 sm:text-5xl">
                <CountUp to={s.to} decimals={s.decimals} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-ink-600">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
