import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, ChevronRight, HandCoins, Phone, Timer } from "lucide-react";
import heroImg from "@/assets/hvac-hero-night.jpg";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { LinkButton } from "@/components/ui/Button";
import { Snow } from "@/components/ui/Snow";
import { GoogleG, Stars } from "@/components/ui/Stars";
import { site } from "@/lib/site";

export function HvacHero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 text-white">
      <Image
        src={heroImg}
        alt="Warm, glowing home on a snowy winter night"
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="-z-20 object-cover object-[center_45%] opacity-90"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-ink-950 via-ink-950/75 to-ink-950/10" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-ink-950 via-transparent to-transparent" aria-hidden />
      <div className="absolute -left-20 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-ice-500/20 blur-[120px]" aria-hidden />
      <Snow count={60} className="-z-10" />

      <div className="container-x grid items-center gap-12 pb-24 pt-8 lg:grid-cols-12 lg:pb-32 lg:pt-14">
        <div className="lg:col-span-7">
          <nav className="flex items-center gap-1.5 text-sm text-white/50" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden />
            <span className="text-white/80">Heating &amp; Cooling</span>
          </nav>

          <h1 className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1] sm:text-6xl lg:text-[4.2rem]">
            Furnace out?{" "}
            <span className="block bg-linear-to-r from-flame-400 to-amber-300 bg-clip-text pb-1 text-transparent">
              Heat back on today.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
            {site.city}&apos;s same-day furnace &amp; heat pump repair. NATE-certified techs, flat-rate pricing, and a
            fix that&apos;s guaranteed for 12 months.
          </p>

          <ul className="mt-7 grid max-w-xl gap-3 sm:grid-cols-3">
            {[
              { icon: Timer, t: "Arrival in as little as 60 min" },
              { icon: HandCoins, t: "Diagnostic fee waived with repair" },
              { icon: BadgeCheck, t: "No overtime — nights & weekends" },
            ].map((b) => (
              <li key={b.t} className="flex items-start gap-2.5 text-sm text-white/85">
                <b.icon className="mt-0.5 h-5 w-5 shrink-0 text-flame-400" aria-hidden />
                {b.t}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <LinkButton href={site.phoneHref} size="lg" className="text-[17px]">
              <Phone className="h-5 w-5" aria-hidden /> Call {site.phone}
            </LinkButton>
            <div className="flex items-center gap-3 sm:ml-3">
              <GoogleG className="h-7 w-7" />
              <div className="text-sm leading-tight">
                <div className="flex items-center gap-1.5">
                  <strong className="font-display text-base">{site.rating}</strong> <Stars className="h-3.5 w-3.5" />
                </div>
                <span className="text-white/60">{site.reviewCount.toLocaleString()} reviews</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <QuoteForm
            title="Book your heating repair"
            sub="Tell us what's wrong — we'll confirm your arrival window in minutes."
            options={["No heat", "Furnace repair", "Heat pump", "$79 tune-up", "New system", "Other"]}
            cta="Get Heat Back On"
          />
        </div>
      </div>
    </section>
  );
}
