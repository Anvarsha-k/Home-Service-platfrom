import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { CircleCheck, ChevronRight, Phone } from "lucide-react";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GoogleG, Stars } from "@/components/ui/Stars";
import { TrustBar } from "@/components/sections/TrustBar";
import { GuaranteeStrip } from "@/components/sections/GuaranteeStrip";
import { ContactSection } from "@/components/sections/ContactSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { getService, services } from "@/lib/services";
import { site } from "@/lib/site";

const formOption: Record<string, string> = {
  plumbing: "Plumbing",
  electrical: "Electrical",
  roofing: "Roofing",
  "appliance-repair": "Appliance",
  "junk-removal": "Junk Removal",
};

const ctaTitles: Record<string, React.ReactNode> = {
  plumbing: <>Water where it shouldn&apos;t be? <span className="text-flame-500">Call us now.</span></>,
  electrical: <>Electrical problem? <span className="text-flame-500">Don&apos;t gamble with it.</span></>,
  roofing: <>Roof trouble? <span className="text-flame-500">Get a free inspection.</span></>,
  "appliance-repair": <>Appliance down? <span className="text-flame-500">Let&apos;s get it working.</span></>,
  "junk-removal": <>Need it gone? <span className="text-flame-500">We&apos;ll haul it today.</span></>,
};

export function generateStaticParams() {
  return services.filter((s) => s.slug !== "hvac").map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: `${s.name} in ${site.city}`,
    description: `${s.sub} Serving ${site.city}. Call ${s.phone}.`,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === "hvac") redirect("/hvac");
  const s = getService(slug);
  if (!s) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream">
        <div className="bg-dots-dark absolute inset-0" aria-hidden />
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-flame-500/10 blur-[100px]" aria-hidden />
        <div className="container-x relative grid items-center gap-12 pb-28 pt-8 lg:grid-cols-12 lg:pb-32 lg:pt-14">
          <div className="lg:col-span-7">
            <nav className="flex items-center gap-1.5 text-sm text-ink-600" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-ink-900">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden />
              <Link href="/#services" className="hover:text-ink-900">Services</Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden />
              <span className="font-semibold text-ink-900">{s.name}</span>
            </nav>
            <Reveal>
              <span className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-white py-1.5 pl-1.5 pr-4 text-sm font-semibold shadow-sm ring-1 ring-ink-900/5">
                <span className={`grid h-7 w-7 place-items-center rounded-full bg-linear-to-br ${s.accent} text-white`}>
                  <s.icon className="h-4 w-4" aria-hidden />
                </span>
                {s.name} · {site.city}
              </span>
              <h1 className="mt-5 font-display text-[2.6rem] font-extrabold leading-[1.02] sm:text-6xl lg:text-[4rem]">{s.headline}</h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-600 sm:text-xl">{s.sub}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.15em] text-ink-600">We fix it all, including:</p>
              <ul className="mt-3 grid max-w-xl grid-cols-2 gap-x-6 gap-y-2.5">
                {s.problems.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-[15px] font-medium">
                    <CircleCheck className="h-5 w-5 shrink-0 text-emerald-500" aria-hidden /> {p}
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <LinkButton href={s.phoneHref} size="lg">
                  <Phone className="h-5 w-5" aria-hidden /> Call {s.phone}
                </LinkButton>
                <div className="flex items-center gap-3 sm:ml-2">
                  <GoogleG className="h-7 w-7" />
                  <div className="text-sm leading-tight">
                    <div className="flex items-center gap-1.5">
                      <strong className="font-display text-base">{site.rating}</strong> <Stars className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-ink-600">{site.reviewCount.toLocaleString()} reviews</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="relative lg:col-span-5">
            <div className="absolute -inset-x-4 -top-6 bottom-24 hidden rotate-3 overflow-hidden rounded-[32px] sm:block" aria-hidden>
              <Image src={s.heroImage} alt="" fill placeholder="blur" sizes="40vw" className="object-cover" />
              <div className="absolute inset-0 bg-ink-900/20" />
            </div>
            <div className="relative sm:pt-40">
              <QuoteForm
                defaultService={formOption[s.slug]}
                title={`Get a free ${s.name.toLowerCase()} quote`}
                sub={`Starting from ${s.priceFrom}. No obligation.`}
              />
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Offerings */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow={`${s.name} services`}
            title={
              <>
                Done right the first time, <span className="text-flame-500">guaranteed.</span>
              </>
            }
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {s.offerings.map((o, i) => (
              <Reveal key={o.title} delay={(i % 3) * 0.06}>
                <div className="group h-full rounded-3xl bg-cream p-7 ring-1 ring-ink-900/5 transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_25px_50px_-25px_rgba(10,26,45,0.4)]">
                  <div className="flex items-center justify-between">
                    <span className={`grid h-12 w-12 place-items-center rounded-2xl bg-linear-to-br ${s.accent} text-white shadow-md transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110`}>
                      <s.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="font-display text-4xl font-extrabold text-ink-900/[0.07]">0{i + 1}</span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{o.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-600">{o.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <GuaranteeStrip />
      <ServicesGrid
        exclude={s.slug}
        eyebrow="More services"
        title={
          <>
            One team for <span className="text-flame-500">your whole home.</span>
          </>
        }
        sub="Heating, plumbing, electrical, roofing, appliances and junk removal — one call, one guarantee."
      />
      <ContactSection defaultService={formOption[s.slug]} title={ctaTitles[s.slug]} />
    </>
  );
}
