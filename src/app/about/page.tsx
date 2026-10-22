import type { Metadata } from "next";
import Image from "next/image";
import { Heart, Leaf, ShieldCheck, Users, Wrench } from "lucide-react";
import teamImg from "@/assets/roofing-team.jpg";
import familyImg from "@/assets/family-couch.jpg";
import techImg from "@/assets/tech-older.jpg";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CountUp } from "@/components/ui/CountUp";
import { GuaranteeStrip } from "@/components/sections/GuaranteeStrip";
import { ContactSection } from "@/components/sections/ContactSection";
import { site, yearsInBusiness } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Family-owned since ${site.founded}. Licensed, background-checked pros serving ${site.city}.`,
};

const values = [
  { icon: Heart, title: "Treat it like our own home", text: "Shoe covers, drop cloths and respect — every visit." },
  { icon: ShieldCheck, title: "Honesty over upselling", text: "We recommend what you need, and tell you when you don't." },
  { icon: Wrench, title: "Craftsmanship first", text: "Ongoing training so every fix is done right the first time." },
  { icon: Leaf, title: "Efficiency matters", text: "Lower bills and a lighter footprint for every home we touch." },
];

export default function AboutPage() {
  const stats = [
    { to: yearsInBusiness, suffix: "+", label: "Years in business" },
    { to: site.jobsCompleted, suffix: "+", label: "Jobs completed" },
    { to: site.technicians, suffix: "", label: "Licensed technicians" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream pb-20 pt-10 lg:pb-28 lg:pt-16">
        <div className="bg-dots-dark absolute inset-0" aria-hidden />
        <div className="container-x relative">
          <Reveal className="max-w-4xl">
            <p className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-flame-600">
              <span className="h-px w-6 bg-current" /> About {site.name}
            </p>
            <h1 className="font-display text-[2.7rem] font-extrabold leading-none sm:text-6xl lg:text-[5.2rem]">
              Neighbors helping neighbors <span className="text-flame-500">since {site.founded}.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-600 sm:text-xl">
              We&apos;re a family-owned home service company built on a simple idea: the people you let into your home should
              be on time, honest about the price, and proud of their work.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-6 gap-4 sm:gap-5">
            <Reveal className="relative col-span-6 aspect-[16/10] overflow-hidden rounded-[28px] sm:col-span-4 sm:aspect-auto sm:h-[440px]">
              <Image src={teamImg} alt="Our team at work on a residential roof" fill priority placeholder="blur" sizes="(min-width:640px) 66vw, 100vw" className="object-cover" />
            </Reveal>
            <div className="col-span-6 grid grid-cols-2 gap-4 sm:col-span-2 sm:grid-cols-1 sm:gap-5">
              <Reveal delay={0.1} className="relative aspect-square overflow-hidden rounded-[28px] sm:aspect-auto sm:h-[210px]">
                <Image src={familyImg} alt="Happy family at home" fill placeholder="blur" sizes="33vw" className="object-cover" />
              </Reveal>
              <Reveal delay={0.2} className="flex flex-col justify-between rounded-[28px] bg-ink-900 p-6 text-white sm:h-[210px]">
                <Users className="h-7 w-7 text-flame-400" aria-hidden />
                <div>
                  <p className="font-display text-4xl font-extrabold sm:text-5xl">
                    <CountUp to={site.jobsCompleted} suffix="+" />
                  </p>
                  <p className="text-sm text-white/60">homes helped across {site.cityShort}</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[32px]">
            <Image src={techImg} alt="One of our senior technicians" fill placeholder="blur" sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-flame-600">
              <span className="h-px w-6 bg-current" /> Our story
            </p>
            <h2 className="font-display text-3xl font-extrabold leading-[1.08] sm:text-4xl lg:text-5xl">
              {yearsInBusiness} years. Still answering the phone ourselves.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              What started as one heating van has grown into a team of {site.technicians}+ licensed pros covering heating,
              cooling, plumbing, electrical and more. We&apos;ve grown — but we haven&apos;t changed how we treat people.
            </p>
            <blockquote className="mt-8 border-l-4 border-flame-500 pl-5 font-display text-xl font-semibold leading-snug">
              &ldquo;If you wouldn&apos;t do it in your mom&apos;s house, don&apos;t do it in a customer&apos;s.&rdquo;
              <footer className="mt-2 font-sans text-sm font-medium text-ink-600">— Founder, {site.name}</footer>
            </blockquote>
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-ink-900/10 pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-extrabold sm:text-4xl">
                    <CountUp to={s.to} suffix={s.suffix} />
                  </p>
                  <p className="mt-1 text-sm text-ink-600">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="What we stand for" title="The values on every work order." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="group h-full rounded-3xl bg-white p-7 text-center ring-1 ring-ink-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_25px_50px_-25px_rgba(10,26,45,0.4)]">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-flame-500/10 text-flame-600 transition-all duration-300 group-hover:-rotate-6 group-hover:bg-flame-500 group-hover:text-white">
                    <v.icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold">{v.title}</h3>
                  <p className="mt-2 text-ink-600">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <GuaranteeStrip />
      <ContactSection />
    </>
  );
}
