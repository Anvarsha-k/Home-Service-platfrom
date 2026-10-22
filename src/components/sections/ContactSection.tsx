import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

type Props = {
  title?: React.ReactNode;
  sub?: string;
  defaultService?: string;
  /** Hide the heading when the page hero already introduces the section */
  showHeading?: boolean;
};

/** Closing block on every page: call card + contact details + quote form. */
export function ContactSection({
  title = (
    <>
      Need help today? <span className="text-flame-500">Call or get a free quote.</span>
    </>
  ),
  sub = "Real people answer 24/7. Tell us what's wrong and we'll call you back within minutes.",
  defaultService,
  showHeading = true,
}: Props) {
  return (
    <section id="quote" className="scroll-mt-24 py-20 lg:py-28">
      <div className="container-x grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-6">
          {showHeading && (
            <Reveal>
              <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-flame-600">
                <span className="h-px w-6 bg-current" /> Get in touch
              </p>
              <h2 className="font-display text-3xl font-extrabold leading-[1.08] sm:text-4xl lg:text-5xl">{title}</h2>
              <p className="mt-5 max-w-lg text-lg text-ink-600">{sub}</p>
            </Reveal>
          )}

          <Reveal delay={0.08} className={showHeading ? "mt-8" : ""}>
            <a
              href={site.phoneHref}
              className="group flex items-center gap-5 rounded-[28px] bg-flame-500 p-6 text-white shadow-[0_30px_60px_-25px_rgba(255,90,31,0.7)] transition-all duration-300 hover:-translate-y-1 hover:bg-flame-600 sm:p-7"
            >
              <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white/15">
                <span className="absolute inset-0 animate-ping-slow rounded-full bg-white/20" />
                <Phone className="relative h-6 w-6 group-hover:animate-ring" aria-hidden />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-[0.15em] text-white/80">Call 24/7 — emergencies too</span>
                <span className="mt-1 block font-display text-3xl font-extrabold sm:text-4xl">{site.phone}</span>
              </span>
            </a>

            <ul className="mt-5 divide-y divide-ink-900/5 rounded-[28px] bg-white px-6 ring-1 ring-ink-900/5">
              {[
                { icon: Mail, label: "Email", value: <a href={`mailto:${site.email}`} className="hover:text-flame-600">{site.email}</a> },
                { icon: Clock, label: "Hours", value: "Mon–Sat 7am–8pm · Emergencies 24/7" },
                {
                  icon: MapPin,
                  label: `Serving ${site.city}`,
                  value: `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.zip}`,
                },
              ].map((row) => (
                <li key={row.label} className="group flex items-center gap-4 py-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cream text-flame-500 transition-colors duration-300 group-hover:bg-flame-500 group-hover:text-white">
                    <row.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-ink-600">{row.label}</span>
                    <span className="block font-semibold wrap-break-word">{row.value}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="lg:col-span-6">
          <QuoteForm defaultService={defaultService} />
        </Reveal>
      </div>
    </section>
  );
}
