import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { ContactSection } from "@/components/sections/ContactSection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Call ${site.phone} 24/7 or request a free quote for heating, plumbing, electrical and more in ${site.city}.`,
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(`${site.address.city}, ${site.address.region}`);

  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 pb-16 pt-12 text-white lg:pb-20 lg:pt-16">
        <div className="bg-dots absolute inset-0" aria-hidden />
        <div className="absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full bg-flame-500/20 blur-[120px]" aria-hidden />
        <div className="container-x relative text-center">
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-flame-400">
              <span className="h-px w-6 bg-current" /> Contact us <span className="h-px w-6 bg-current" />
            </p>
            <h1 className="font-display text-[2.6rem] font-extrabold leading-[1.02] sm:text-6xl">
              Talk to a real person. <span className="text-flame-400">Day or night.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
              Call us anytime, or send a quick request and we&apos;ll call you back within minutes.
            </p>
          </Reveal>
        </div>
      </section>

      <ContactSection showHeading={false} />

      <section className="pb-20 lg:pb-28">
        <div className="container-x">
          <div className="overflow-hidden rounded-[32px] ring-1 ring-ink-900/10">
            <iframe
              title={`Map of ${site.address.city}`}
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="h-[380px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
