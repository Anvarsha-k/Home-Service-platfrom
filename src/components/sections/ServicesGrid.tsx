import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Snowflake } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/services";

type Props = {
  exclude?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  sub?: string;
};

export function ServicesGrid({
  exclude,
  eyebrow = "One call. Every fix.",
  title = (
    <>
      Everything your home needs, <br className="hidden sm:block" />
      <span className="text-flame-500">from one trusted team.</span>
    </>
  ),
  sub = "Stop juggling five different contractors. Our licensed specialists handle heating, plumbing, electrical and more — with one phone number and one guarantee.",
}: Props) {
  const list = services.filter((s) => s.slug !== exclude);
  return (
    <section id="services" className="scroll-mt-24 bg-white py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading eyebrow={eyebrow} title={title} sub={sub} />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((s, i) => {
            const featured = s.slug === "hvac";
            return (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                <Link
                  href={s.href}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl bg-cream ring-1 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-25px_rgba(10,26,45,0.45)] ${
                    featured ? "ring-2 ring-flame-500" : "ring-ink-900/5"
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.name}
                      fill
                      placeholder="blur"
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-ink-950/70 via-ink-950/0 to-transparent" aria-hidden />
                    {featured && (
                      <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ice-500 shadow">
                        <Snowflake className="h-3.5 w-3.5" aria-hidden /> Winter priority
                      </span>
                    )}
                    <span className="absolute bottom-4 left-4 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/30 backdrop-blur">
                      From {s.priceFrom}
                    </span>
                  </div>
                  <div className="relative flex flex-1 flex-col p-6 pt-9">
                    <span
                      className={`absolute -top-7 right-6 grid h-14 w-14 place-items-center rounded-2xl bg-linear-to-br ${s.accent} text-white shadow-lg ring-4 ring-cream transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110`}
                    >
                      <s.icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h3 className="font-display text-2xl font-bold">{s.name}</h3>
                    <p className="mt-2 flex-1 leading-relaxed text-ink-600">{s.short}</p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {s.problems.slice(0, 3).map((p) => (
                        <li key={p} className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-ink-700 ring-1 ring-ink-900/5">
                          {p}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-5 flex items-center gap-1.5 font-semibold text-ink-900 transition group-hover:text-flame-600">
                      Explore {s.name.toLowerCase()}
                      <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
