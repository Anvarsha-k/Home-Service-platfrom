"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { LinkButton } from "@/components/ui/Button";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

const links = [
  { href: "/hvac", label: "Heating & AC", badge: "Winter" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const isActive = (href: string) => href !== "/" && !href.includes("#") && pathname.startsWith(href);

  return (
    <>
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-white/85 shadow-[0_8px_30px_-12px_rgba(10,26,45,0.25)] backdrop-blur-xl" : "bg-cream"
      }`}
    >
      <div className="container-x flex h-[76px] items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          <div className="relative" onMouseEnter={() => setMegaOpen(true)} onMouseLeave={() => setMegaOpen(false)}>
            <button
              type="button"
              onClick={() => setMegaOpen((v) => !v)}
              aria-expanded={megaOpen}
              data-active={pathname.startsWith("/services")}
              className={`nav-link flex items-center gap-1 px-4 py-2.5 text-[15px] font-semibold transition-colors hover:text-ink-900 ${
                pathname.startsWith("/services") ? "text-flame-600" : "text-ink-700"
              }`}
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${megaOpen ? "rotate-180" : ""}`} aria-hidden />
            </button>

            <AnimatePresence>
              {megaOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-3"
                >
                  <div className="grid grid-cols-2 gap-1 rounded-3xl border border-ink-900/5 bg-white p-3 shadow-2xl shadow-ink-900/15">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={s.href}
                        className="group flex items-start gap-3.5 rounded-2xl p-3.5 transition hover:bg-cream"
                      >
                        <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-linear-to-br ${s.accent} text-white shadow-md transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110`}>
                          <s.icon className="h-5 w-5" aria-hidden />
                        </span>
                        <span>
                          <span className="flex items-center gap-1 font-semibold text-ink-900">
                            {s.name}
                            <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" aria-hidden />
                          </span>
                          <span className="mt-0.5 block text-[13px] leading-snug text-ink-600">{s.short}</span>
                        </span>
                      </Link>
                    ))}
                    <div className="col-span-2 mt-1 flex items-center justify-between rounded-2xl bg-ink-900 px-5 py-4 text-white">
                      <span className="text-sm">
                        <strong className="font-semibold">Not sure what you need?</strong>
                        <span className="text-white/70"> Describe the problem — we&apos;ll send the right pro.</span>
                      </span>
                      <Link href="/contact" className="text-sm font-semibold text-flame-400 hover:text-flame-300">
                        Get help →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              data-active={isActive(l.href)}
              className={`nav-link flex items-center gap-2 px-4 py-2.5 text-[15px] font-semibold transition-colors hover:text-ink-900 ${
                isActive(l.href) ? "text-flame-600" : "text-ink-700"
              }`}
            >
              {l.label}
              {l.badge && (
                <span className="rounded-full bg-ice-200 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-ice-500">
                  {l.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Full call pill (large screens) */}
          <a
            href={site.phoneHref}
            className="group hidden items-center gap-3 rounded-full border border-ink-900/10 bg-white py-1.5 pl-1.5 pr-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-flame-500/40 hover:shadow-[0_12px_30px_-12px_rgba(255,90,31,0.55)] xl:flex"
          >
            <span className="relative grid h-10 w-10 place-items-center rounded-full bg-ink-900 text-white transition-colors duration-300 group-hover:bg-flame-500">
              <Phone className="h-[18px] w-[18px] group-hover:animate-ring" aria-hidden />
              <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-emerald-400" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-white" />
              </span>
            </span>
            <span className="leading-tight">
              <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-ink-400 transition-colors group-hover:text-flame-600">
                24/7 Emergency
              </span>
              <span className="block font-display text-[16px] font-bold text-ink-900">{site.phone}</span>
            </span>
          </a>

          <div className="hidden sm:block">
            <LinkButton href="/contact" size="md">
              Get a Quote
            </LinkButton>
          </div>

          {/* Compact call button (smaller screens) */}
          <a
            href={site.phoneHref}
            aria-label={`Call ${site.phone}`}
            className="group relative grid h-11 w-11 place-items-center rounded-full border border-ink-900/10 bg-white text-ink-900 transition-all duration-300 hover:border-flame-500 hover:bg-flame-500 hover:text-white xl:hidden"
          >
            <Phone className="h-5 w-5 group-hover:animate-ring" aria-hidden />
            <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-white" />
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="grid h-11 w-11 place-items-center rounded-full bg-ink-900 text-white transition hover:bg-flame-500 lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </div>
    </header>

      {/* Mobile menu — kept outside <header> so backdrop-blur doesn't trap the fixed panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-ink-950/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col overflow-y-auto bg-white"
            >
              <div className="flex items-center justify-between border-b border-ink-900/5 p-5">
                <Logo />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full bg-cream"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" aria-hidden />
                </button>
              </div>
              <div className="flex-1 p-5">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-ink-400">Services</p>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((s) => (
                    <Link key={s.slug} href={s.href} className="flex flex-col gap-2 rounded-2xl bg-cream p-3.5">
                      <span className={`grid h-9 w-9 place-items-center rounded-lg bg-linear-to-br ${s.accent} text-white`}>
                        <s.icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="text-sm font-semibold leading-tight">{s.name}</span>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 flex flex-col">
                  {[{ href: "/", label: "Home" }, ...links].map((l) => (
                    <Link key={l.href} href={l.href} className="flex items-center justify-between border-b border-ink-900/5 py-4 text-lg font-semibold">
                      {l.label}
                      <ArrowRight className="h-4 w-4 text-ink-400" aria-hidden />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="space-y-3 border-t border-ink-900/5 p-5">
                <LinkButton href={site.phoneHref} variant="dark" size="lg" className="w-full">
                  <Phone className="h-5 w-5" aria-hidden /> {site.phone}
                </LinkButton>
                <LinkButton href="/contact" size="lg" className="w-full">
                  Get a Quote
                </LinkButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
