import Link from "next/link";
import { Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { PhoneLine } from "@/components/layout/PhoneLine";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { GoogleG, Stars } from "@/components/ui/Stars";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-ink-950 pb-28 text-white/70 md:pb-0">
      <div className="bg-dots absolute inset-0 opacity-60" aria-hidden />
      <div className="container-x relative">
        <div className="grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-5 max-w-sm leading-relaxed">
              Family-owned and proudly serving {site.city} since {site.founded}. Heating, cooling, plumbing, electrical and more —
              one call does it all.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
              <GoogleG className="h-7 w-7" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display text-lg font-bold text-white">{site.rating}</span>
                  <Stars className="h-3.5 w-3.5" />
                </div>
                <p className="text-xs">{site.reviewCount.toLocaleString()} Google reviews</p>
              </div>
            </div>
            <SocialIcons className="mt-6" />
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-[1fr_1fr_1.5fr] lg:col-span-8">
            <div>
              <h3 className="mb-5 font-sans text-sm font-bold uppercase tracking-[0.15em] text-white">Services</h3>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={s.href} className="inline-block transition duration-200 hover:translate-x-1 hover:text-flame-400">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-5 font-sans text-sm font-bold uppercase tracking-[0.15em] text-white">Company</h3>
              <ul className="space-y-3">
                <li><Link href="/about" className="inline-block transition duration-200 hover:translate-x-1 hover:text-flame-400">About Us</Link></li>
                <li><Link href="/hvac" className="inline-block transition duration-200 hover:translate-x-1 hover:text-flame-400">Winter Heating Specials</Link></li>
                <li><Link href="/contact" className="inline-block transition duration-200 hover:translate-x-1 hover:text-flame-400">Contact</Link></li>
                <li><Link href="/#services" className="inline-block transition duration-200 hover:translate-x-1 hover:text-flame-400">All Services</Link></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className="mb-5 font-sans text-sm font-bold uppercase tracking-[0.15em] text-white">Get in touch</h3>
              <ul className="space-y-4">
                <li>
                  <PhoneLine />
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className="flex items-start gap-3 wrap-anywhere transition hover:text-flame-400">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-flame-500" aria-hidden />
                    {site.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-flame-500" aria-hidden />
                  <span>
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.region} {site.address.zip}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-flame-500" aria-hidden />
                  <span>
                    Mon–Sat 7am–8pm
                    <br />
                    Emergencies 24/7
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-sm md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-400" aria-hidden />
            Licensed &amp; Insured · Lic. {site.license}
          </p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
