import Image from "next/image";
import { ArrowDown, Phone, ThermometerSnowflake } from "lucide-react";
import heroImg from "@/assets/home-hero-family.jpg";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { LinkButton } from "@/components/ui/Button";
import { RotatingWord } from "@/components/ui/RotatingWord";
import { Snow } from "@/components/ui/Snow";
import { site } from "@/lib/site";

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 text-white">
      <Image
        src={heroImg}
        alt="Family staying warm together at home"
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="-z-20 object-cover object-[75%_center] opacity-80"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-ink-950 via-ink-950/85 to-ink-950/25" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-ink-950 via-transparent to-ink-950/40" aria-hidden />
      <div className="absolute -left-40 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-flame-500/20 blur-[120px]" aria-hidden />
      <Snow count={45} className="-z-10" />

      <div className="container-x grid items-center gap-12 pb-24 pt-10 sm:pt-14 lg:grid-cols-12 lg:gap-10 lg:pb-32 lg:pt-20">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-ice-300/25 bg-ice-300/10 py-1.5 pl-1.5 pr-4 text-sm backdrop-blur">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-ice-300/20 text-ice-200">
              <ThermometerSnowflake className="h-4 w-4" aria-hidden />
            </span>
            <span>
              <strong className="font-semibold text-ice-200">Tonight: 27°F</strong>
              <span className="text-white/70"> · Hard freeze warning in {site.cityShort}</span>
            </span>
          </div>

          <h1 className="mt-6 font-display text-[2.75rem] font-extrabold leading-[0.98] sm:text-6xl lg:text-[4.6rem]">
            <RotatingWord
              words={["No heat?", "Burst pipe?", "Power out?", "Roof leak?"]}
              wordClassName="bg-linear-to-r from-flame-400 via-flame-500 to-amber-400 bg-clip-text text-transparent"
            />
            <span className="block">We&apos;ll be there</span>
            <span className="relative inline-block">
              today.
              <svg viewBox="0 0 300 20" className="absolute -bottom-2 left-0 w-full text-flame-500" aria-hidden preserveAspectRatio="none">
                <path d="M2 14C60 4 180 2 298 10" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
            Licensed, background-checked technicians across {site.city}. Upfront flat-rate pricing — and if we&apos;re late,{" "}
            <strong className="font-semibold text-white">you get $50 off.</strong>
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton href={site.phoneHref} size="lg" className="text-[17px]">
              <Phone className="h-5 w-5" aria-hidden /> Call {site.phone}
            </LinkButton>
            <LinkButton href="#services" variant="outline-light" size="lg">
              Explore Services <ArrowDown className="h-4 w-4 transition group-hover:translate-y-0.5" aria-hidden />
            </LinkButton>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
